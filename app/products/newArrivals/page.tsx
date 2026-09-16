"use client";

import { useMemo, useState } from "react";

import ProductsAside from "@/components/product/allProductaSide";
import ProductCardSection from "@/components/product/productCard";

import { Allproducts, initialFilters } from "@/lib/constant/dummyData";

import type { Filters } from "@/lib/constant/type/data.type";
import { Product } from "@/lib/constant/type/product.type";

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
        filters!.categories!.length > 0 &&
        !filters!.categories!.includes(p.category)
      ) {
        return false;
      }

      if (
        filters.maxPrice !== undefined &&
        typeof filters.maxPrice === "number" &&
        p.price > filters.maxPrice
      ) {
        return false;
      }

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
          <ProductsAside onChange={setFilters} />
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
