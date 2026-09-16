"use client";

import { Suspense, useMemo, useState } from "react";

import ProductsAside from "@/components/product/allProductaSide";
import ProductCardSection from "@/components/product/productCard";

import { Allproducts, initialFilters } from "@/lib/constant/dummyData";

import type { Filters } from "@/lib/constant/type/data.type";
import type { Product } from "@/lib/constant/type/product.type";

export default function NewArrivalsGrid() {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const filteredItems = useMemo(() => {
    return Allproducts.filter((p: Product) => {
      // Only show new arrival products
      if (!p.isNew) {
        return false;
      }

      // Category filter
      if (
        filters.categories &&
        filters.categories.length > 0 &&
        !filters.categories.includes(p.category)
      ) {
        return false;
      }

      // Minimum price
      if (
        filters.minPrice !== undefined &&
        typeof filters.minPrice === "number" &&
        p.price < filters.minPrice
      ) {
        return false;
      }

      // Maximum price
      if (
        filters.maxPrice !== undefined &&
        typeof filters.maxPrice === "number" &&
        p.price > filters.maxPrice
      ) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const handleAddToCart = (product: Product) => {
    console.log("Add to cart:", product);
  };

  const handleChatNow = (product: Product) => {
    console.log("Chat now:", product);
  };

  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-6 md:px-8 md:py-10">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          New Arrivals
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          The latest products added by our suppliers.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        {/* Sidebar */}
        <aside className="w-full shrink-0 lg:w-64">
          <Suspense fallback={<ProductsAsideSkeleton />}>
            <ProductsAside onChange={setFilters} />
          </Suspense>
        </aside>

        {/* Products */}
        <main className="min-w-0 flex-1">
          {filteredItems.length === 0 ? (
            <div className="flex min-h-[300px] items-center justify-center rounded-lg border border-dashed border-gray-300 px-4 text-center">
              <div>
                <h3 className="text-base font-semibold text-gray-700">
                  No New Arrivals Found
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  No new arrivals match your selected filters.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {filteredItems.map((p) => (
                <ProductCardSection
                  key={p.id}
                  product={p}
                  onAddToCart={handleAddToCart}
                  onChatNow={handleChatNow}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </section>
  );
}

/**
 * Loading UI for ProductsAside
 */
function ProductsAsideSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="h-5 w-20 animate-pulse rounded bg-gray-200" />

      <div className="mt-5 space-y-3">
        <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
        <div className="h-4 w-4/5 animate-pulse rounded bg-gray-100" />
        <div className="h-4 w-3/5 animate-pulse rounded bg-gray-100" />
      </div>

      <div className="mt-6 space-y-3">
        <div className="h-10 w-full animate-pulse rounded-xl bg-gray-100" />
        <div className="h-10 w-full animate-pulse rounded-xl bg-gray-100" />
      </div>
    </div>
  );
}
