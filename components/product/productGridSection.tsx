"use client";

import { Allproducts } from "@/lib/constant/dummyData";
import ProductCardSection from "./productCard";
import { Filters } from "@/lib/constant/data.type";

export default function ProductGrid({ filters }: { filters: Filters }) {
  const filtered = Allproducts.filter((p) => {
    if (
      filters.countryCodes.length &&
      !filters.countryCodes.includes(p.countryCode)
    ) {
      return false;
    }
    if (filters.categorySlug && p.category !== filters.categorySlug)
      return false;
    if (filters.verifiedOnly && !p.verified) return false;
    if (filters.minRating && p.rating < filters.minRating) return false;
    return true;
  });

  return (
    <div className="min-w-0">
      <div className="mb-4 flex items-center justify-between text-[13.5px] text-gray-500">
        <span>{filtered.length} products found</span>
        <select className="border border-gray-200 px-2.5 py-1.5 text-[13.5px] text-gray-900">
          <option>Best match</option>
          <option>Price: low to high</option>
          <option>Price: high to low</option>
          <option>Newest</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="border border-dashed border-gray-300 py-20 text-center text-sm text-gray-400">
          No products match these filters.
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCardSection key={p.id} product={p} />
          ))}
        </div>
      )}

      <div className="mt-9 flex justify-center gap-2">
        {["‹", "1", "2", "3", "…", "42", "›"].map((label, i) => (
          <button
            key={i}
            className={`h-9 w-9 border text-[13.5px] ${
              label === "1"
                ? "border-[#0055ff] bg-[#0055ff] font-semibold text-white"
                : "border-gray-200 bg-white text-gray-900 hover:border-[#0055ff] hover:text-[#0055ff]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
