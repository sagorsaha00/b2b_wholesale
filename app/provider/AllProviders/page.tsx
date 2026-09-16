"use client";

import React, { useState, useEffect } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { LayoutGrid, List, Search, Store, Filter, Loader2 } from "lucide-react";
import {
  SellersApiResponse,
  VerificationStatus,
} from "@/lib/constant/type/seller.type";
import { ProviderSidebar } from "../sub/ProviderSidebar";
import { Pagination } from "../sub/Pagination";
import { ProviderCard } from "@/lib/ui/providerCard";
import { fetchSellers } from "@/lib/hooks/useAuthMutations";
import { ProviderSkeleton } from "../sub/ProviderSkeleton";

export default function AllProvidersPage() {
  const [selectedStatus, setSelectedStatus] =
    useState<VerificationStatus>("all");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Debounce search input by 400ms to prevent query spamming
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1); // Reset page on query change
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  const { data, isLoading, isFetching, isError, isPlaceholderData } =
    useQuery<SellersApiResponse>({
      queryKey: ["sellers", selectedStatus, debouncedSearch, page],
      queryFn: () => fetchSellers(selectedStatus, debouncedSearch, page),
      placeholderData: keepPreviousData,
    });

  const sellers = data?.data || [];
  const pagination = data?.pagination || { totalPages: 1 };

  const handleStatusChange = (status: VerificationStatus) => {
    setSelectedStatus(status);
    setPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <section className="min-h-screen bg-slate-50 py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
              All Registered Sellers
            </h1>
            <p className="text-xs text-gray-500 sm:text-sm">
              Discover and connect with verified businesses and suppliers.
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 lg:hidden"
            >
              <Filter className="h-4 w-4 text-blue-600" />
              <span>Filter</span>
            </button>

            {/* Search Bar with Inline Spinner */}
            <div className="relative flex-1 md:w-72">
              {isFetching ? (
                <Loader2 className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-blue-600" />
              ) : (
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              )}
              <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search sellers or location..."
                className="w-full rounded-xl border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
              />
            </div>

            <div className="flex items-center rounded-xl border border-gray-200 bg-white p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`rounded-lg p-1.5 transition ${
                  viewMode === "grid"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`rounded-lg p-1.5 transition ${
                  viewMode === "list"
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Body Container */}
        <div className="flex flex-col gap-8 lg:flex-row">
          <ProviderSidebar
            selectedStatus={selectedStatus}
            onSelectStatus={handleStatusChange}
            isOpenMobile={mobileFilterOpen}
            onCloseMobile={() => setMobileFilterOpen(false)}
          />

          <div className="flex-1">
            {isLoading ? (
              <ProviderSkeleton viewMode={viewMode} />
            ) : isError ? (
              <div className="rounded-2xl border border-rose-100 bg-rose-50 p-6 text-center text-rose-600">
                Error loading data. Check backend URL endpoint.
              </div>
            ) : sellers.length > 0 ? (
              <div
                className={`transition-opacity duration-200 ${
                  isPlaceholderData || isFetching ? "opacity-60" : "opacity-100"
                }`}
              >
                <div
                  className={
                    viewMode === "grid"
                      ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                      : "space-y-3"
                  }
                >
                  {sellers.map((provider) => (
                    <ProviderCard
                      key={provider.id}
                      //@ts-ignore
                      provider={provider}
                      viewMode={viewMode}
                    />
                  ))}
                </div>

                <Pagination
                  currentPage={page}
                  totalPages={pagination.totalPages}
                  onPageChange={setPage}
                  isFetching={isFetching}
                />
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-gray-200 bg-white p-12 text-center">
                <Store className="mx-auto h-12 w-12 text-blue-500" />
                <h3 className="mt-4 font-semibold text-gray-900">
                  No Sellers Found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting search or selecting another verification filter.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
