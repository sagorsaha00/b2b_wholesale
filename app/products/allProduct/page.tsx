"use client";

import ProductsAside from "@/components/product/allProductaSide";
import ProductGrid from "@/components/product/productGridSection";
import { Filters } from "@/lib/constant/data.type";
import { initialFilters } from "@/lib/constant/dummyData";
import { useState } from "react";

export default function AllProductsSection() {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 py-6 sm:px-5 sm:py-8 md:px-6 lg:px-8 lg:py-10">
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-7 xl:grid-cols-[270px_minmax(0,1fr)]">
        <ProductsAside onChange={setFilters} />
        <ProductGrid filters={filters} />
      </div>
    </section>
  );
}
