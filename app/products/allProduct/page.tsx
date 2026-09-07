"use client";

import ProductsAside from "@/components/product/allProductaSide";
import ProductGrid from "@/components/product/productGridSection";
import { Filters } from "@/lib/constant/data.type";
import { initialFilters } from "@/lib/constant/dummyData";
import { useState } from "react";

export default function AllProductsSection() {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  return (
    <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-7 px-6 py-10 md:px-8 lg:grid-cols-[250px_1fr]">
      <ProductsAside onChange={setFilters} />
      <ProductGrid filters={filters} />
    </section>
  );
}
