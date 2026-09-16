"use client";

import { Suspense, useState } from "react";

import ProductGrid from "@/components/product/productGridSection";
import { Filters } from "@/lib/constant/type/data.type";
import { initialFilters } from "@/lib/constant/dummyData";
import ProductsAside from "@/components/product/allProductaSide";

export default function AllProductsSection() {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [page, setPage] = useState<number>(1);

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
    setPage(1);
  };

  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 py-6 sm:px-5 sm:py-8 md:px-6 lg:px-8 lg:py-10">
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-7 xl:grid-cols-[280px_minmax(0,1fr)]">
        {/* Filters */}
        <Suspense fallback={<ProductsAsideSkeleton />}>
          <ProductsAside onChange={handleFilterChange} />
        </Suspense>

        {/* Products */}
        <ProductGrid filters={filters} page={page} setPage={setPage} />
      </div>
    </section>
  );
}

export function ProductsAsideSkeleton() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-[88px] rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
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
    </aside>
  );
}
