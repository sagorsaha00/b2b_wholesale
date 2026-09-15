"use client";

import React, { useMemo, useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown, Grid2X2, List, Package, Search } from "lucide-react";

import { SellerApiResponse } from "@/lib/constant/type/seller.type";
import { CategorySidebar } from "@/components/storeFront/CategorySidebar";
import { ProductCard } from "@/components/storeFront/ProductCard";
import { Pagination } from "@/components/storeFront/Pagination";
import { SellerHeader } from "@/components/storeFront/SellerHeader";

const ITEMS_PER_PAGE = 9;

const fetchSellerById = async (id: string): Promise<SellerApiResponse> => {
  const res = await fetch(
    `https://b2b-backend-orcin.vercel.app/api/seller/getSellerById/${id}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch seller data");
  }
  return res.json();
};

export default function ProviderStorefrontPage() {
  const params = useParams();
  const sellerId = params.id as string;

  const [activeCategory, setActiveCategory] = useState<string>("All Products");
  const [search, setSearch] = useState<string>("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // TanStack Query integration
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["seller", sellerId],
    queryFn: () => fetchSellerById(sellerId),
    enabled: !!sellerId,
  });

  const seller = data?.data;

  // Filter products by Category & Search query
  const filteredProducts = useMemo(() => {
    if (!seller?.products) return [];

    return seller.products.filter((product) => {
      const matchesCategory =
        activeCategory === "All Products" ||
        product.category.toLowerCase() === activeCategory.toLowerCase();

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [seller, activeCategory, search]);

  // Reset pagination when filter criteria change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, search]);

  // Paginated Slicing
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8fafc]">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
          <p className="text-sm font-semibold text-gray-500">
            Loading Storefront...
          </p>
        </div>
      </main>
    );
  }

  if (isError || !seller) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8fafc]">
        <p className="text-sm font-semibold text-red-500">
          {(error as Error)?.message || "Seller not found"}
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <SellerHeader seller={seller} />

      <section className="mx-auto max-w-[1250px] px-4 py-7 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[230px_minmax(0,1fr)]">
          <CategorySidebar
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            sellerName={seller.name}
          />

          <div className="min-w-0">
            {/* Filter / Header Bar */}
            <div className="mb-5 rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    Products from {seller.name}
                  </h2>
                  <p className="mt-1 text-xs text-gray-500">
                    Wholesale products available from this provider
                  </p>
                </div>

                <div className="relative w-full xl:max-w-[280px]">
                  <Search
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search products..."
                    className="h-10 w-full rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-gray-500">
                  Showing{" "}
                  <span className="font-semibold text-gray-900">
                    {filteredProducts.length}
                  </span>{" "}
                  products
                </p>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="flex h-9 items-center gap-2 rounded-lg border border-gray-200 px-3 text-xs font-medium text-gray-600"
                  >
                    Sort: Popular <ChevronDown size={14} />
                  </button>

                  <div className="flex rounded-lg border border-gray-200 p-0.5">
                    <button
                      type="button"
                      onClick={() => setView("grid")}
                      className={`rounded-md p-1.5 ${
                        view === "grid"
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-400"
                      }`}
                    >
                      <Grid2X2 size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setView("list")}
                      className={`rounded-md p-1.5 ${
                        view === "list"
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-400"
                      }`}
                    >
                      <List size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Rendering */}
            {paginatedProducts.length > 0 ? (
              <div
                className={
                  view === "grid"
                    ? "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
                    : "space-y-3"
                }
              >
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} view={view} />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-gray-200 bg-white py-16 text-center">
                <Package size={40} className="mx-auto text-gray-300" />
                <h3 className="mt-3 text-sm font-bold text-gray-900">
                  No products found
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  Try another search or category.
                </p>
              </div>
            )}

            {/* Pagination Controls */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
