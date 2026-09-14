"use client";

import { useState, useMemo, useEffect } from "react";
import ProductCardSection from "@/components/product/productCard";
import { Filters } from "@/lib/constant/type/data.type";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { useProducts } from "@/lib/hooks/useAuthMutations";

interface ProductGridProps {
  filters: Filters;
  page: number;
  setPage: (page: number | ((prev: number) => number)) => void;
}

export default function ProductGrid({
  filters,
  page,
  setPage,
}: ProductGridProps) {
  const [sort, setSort] = useState("Best match");

  useEffect(() => {
    setPage(1);
  }, [filters, setPage]);

  const { data, isLoading, isError, isFetching } = useProducts({
    page,
    limit: 10,
    category: filters.categorySlug,
    minPrice: filters.minPrice,
    maxPrice: filters.maxPrice,
    countryCodes: filters.countryCodes?.join(","),
  });

  const rawProducts = data?.data || [];
  const pagination = data?.pagination;

  const sortedProducts = useMemo(() => {
    const list = [...rawProducts];

    if (sort === "Price: low to high") {
      list.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sort === "Price: high to low") {
      list.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (sort === "Newest") {
      list.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    }

    return list;
  }, [rawProducts, sort]);

  return (
    <div className="w-full min-w-0">
      {/* Top Bar */}
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <p className="text-sm font-medium text-gray-600">
            <span className="font-bold text-gray-900">
              {pagination?.total || 0}
            </span>{" "}
            products found
          </p>
          {isFetching && (
            <span className="flex items-center gap-1 text-xs text-blue-600">
              <Loader2 className="h-3.5 w-3.5 animate-spin" /> Updating...
            </span>
          )}
        </div>

        <div className="flex w-full items-center gap-2 sm:w-auto">
          <span className="hidden text-sm text-gray-500 sm:block">
            Sort by:
          </span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-800 outline-none transition focus:border-[#0055ff] focus:ring-2 focus:ring-blue-100 sm:w-[190px]"
          >
            <option>Best match</option>
            <option>Price: low to high</option>
            <option>Price: high to low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      {/* Loading Skeleton */}
      {isLoading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-[320px] animate-pulse rounded-xl bg-gray-100"
            />
          ))}
        </div>
      ) : isError ? (
        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-dashed border-red-200 bg-red-50/50 p-6 text-center">
          <p className="text-base font-semibold text-red-600">
            Something went wrong while fetching products.
          </p>
          <button
            onClick={() => setPage(1)}
            className="mt-3 text-sm font-medium text-blue-600 underline"
          >
            Try Again
          </button>
        </div>
      ) : sortedProducts.length === 0 ? (
        <div className="flex min-h-[300px] items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white px-5 text-center">
          <div>
            <p className="text-base font-semibold text-gray-700">
              No products found
            </p>
            <p className="mt-1 text-sm text-gray-400">
              Try changing your filters or price range.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {sortedProducts.map((product) => (
            <ProductCardSection key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Backend Pagination */}
      {pagination && pagination.totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            type="button"
            disabled={!pagination.hasPrevPage}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 transition hover:border-[#0055ff] hover:text-[#0055ff] disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-700"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {Array.from({ length: pagination.totalPages }, (_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                type="button"
                onClick={() => setPage(pageNum)}
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm transition-all duration-200 ${
                  page === pageNum
                    ? "bg-[#0055ff] font-semibold text-white shadow-sm"
                    : "border border-gray-200 bg-white text-gray-700 hover:border-[#0055ff] hover:text-[#0055ff]"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            type="button"
            disabled={!pagination.hasNextPage}
            onClick={() => setPage((prev) => prev + 1)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 transition hover:border-[#0055ff] hover:text-[#0055ff] disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-700"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
