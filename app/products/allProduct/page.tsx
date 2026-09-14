"use client";

import { useState } from "react";
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
        <ProductsAside onChange={handleFilterChange} />
        <ProductGrid filters={filters} page={page} setPage={setPage} />
      </div>
    </section>
  );
}
