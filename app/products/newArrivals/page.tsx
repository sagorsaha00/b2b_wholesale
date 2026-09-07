"use client";

import { useState, useMemo } from "react";
import ProductsAside from "@/components/product/allProductaSide";
import ProductCardSection from "@/components/product/productCard";
import { Allproducts, initialFilters } from "@/lib/constant/dummyData";
import { Filters } from "@/lib/constant/data.type";

export default function NewArrivalsGrid() {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const filteredItems = useMemo(() => {
    return Allproducts.filter((p) => {
      if (!p.isNew) return false;

      if (
        filters.categories?.length > 0 &&
        !filters.categories.includes(p.category)
      ) {
        return false;
      }

      if (filters.minPrice && p.price < filters.minPrice) return false;
      if (filters.maxPrice && p.price > filters.maxPrice) return false;

      return true;
    });
  }, [filters]);

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-10 md:px-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">New Arrivals</h2>
        <p className="mt-1 text-sm text-gray-500">
          The latest products added by our suppliers.
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <aside className="w-full shrink-0 lg:w-64">
          <ProductsAside onChange={setFilters} />
        </aside>

        <main className="flex-1">
          {filteredItems.length === 0 ? (
            <div className="rounded-lg border border-dashed border-gray-300 py-20 text-center text-sm text-gray-400">
              No new arrivals match your filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
              {filteredItems.map((p) => (
                <ProductCardSection key={p.id} product={p} />
              ))}
            </div>
          )}
        </main>
      </div>
    </section>
  );
}
