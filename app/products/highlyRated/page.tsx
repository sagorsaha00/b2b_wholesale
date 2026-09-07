"use client";

import { useState } from "react";

import ProductsAside from "@/components/product/allProductaSide";
import ProductCardSection from "@/components/product/productCard";

import { Filters } from "@/lib/constant/data.type";
import { Allproducts, initialFilters } from "@/lib/constant/dummyData";

const MIN_RATING = 4.5;

export default function HighlyRatedGrid() {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const items = Allproducts.filter((product) => {
    const rating = product.rating ?? 0;

    return rating >= MIN_RATING;
  }).sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-6 md:px-8 md:py-10">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Highly Rated</h2>

        <p className="mt-1 text-sm text-gray-500">
          Products rated {MIN_RATING}★ and above by buyers.
        </p>
      </div>

      {/* Empty State */}
      {items.length === 0 ? (
        <div className="rounded-lg border border-dashed border-gray-300 py-20 text-center text-sm text-gray-400">
          No highly rated products yet.
        </div>
      ) : (
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          {/* Sidebar */}
          <aside className="w-full shrink-0 lg:w-[250px]">
            <ProductsAside onChange={setFilters} />
          </aside>

          {/* Products */}
          <div className="min-w-0 flex-1">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {items.map((product) => (
                <ProductCardSection key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
