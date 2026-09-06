"use client";

import ProductsAside, { Filters } from "@/components/product/allProductaSide";
import ProductGrid from "@/components/product/productGridSection";
import { useState } from "react";

const initialFilters: Filters = {
  countryCodes: [],
  categorySlug: null,
  verifiedOnly: false,
  minRating: null,
  minPrice: "",
  maxPrice: "",
};

export default function AllProductsSection() {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  return (
    <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-7 px-6 py-10 md:px-8 lg:grid-cols-[250px_1fr]">
      <ProductsAside onChange={setFilters} />
      <ProductGrid filters={filters} />
    </section>
  );
}
