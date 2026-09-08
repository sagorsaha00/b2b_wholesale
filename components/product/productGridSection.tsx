"use client";

import ProductCardSection from "@/components/product/productCard";
import { Filters } from "@/lib/constant/data.type";
import { Allproducts } from "@/lib/constant/dummyData";
import { useMemo, useState } from "react";

export default function ProductGrid({ filters }: { filters: Filters }) {
  const [sort, setSort] = useState("Best match");

  const filtered = useMemo(() => {
    const result = Allproducts.filter((p) => {
      // Country
      if (
        filters.countryCodes.length &&
        !filters.countryCodes.includes(p.countryCode)
      ) {
        return false;
      }

      // Category
      if (filters.categorySlug && p.category !== filters.categorySlug) {
        return false;
      }

      // Verified
      if (filters.verifiedOnly && !p.verified) {
        return false;
      }

      // Rating
      if (filters.minRating && p.rating < filters.minRating) {
        return false;
      }

      // Min Price
      if (filters.minPrice && Number(p.price) < Number(filters.minPrice)) {
        return false;
      }

      // Max Price
      if (filters.maxPrice && Number(p.price) > Number(filters.maxPrice)) {
        return false;
      }

      return true;
    });

    // Sorting
    if (sort === "Price: low to high") {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    }

    if (sort === "Price: high to low") {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    }

    if (sort === "Newest") {
      result.reverse();
    }

    return result;
  }, [filters, sort]);

  return (
    <div className="min-w-0 w-full">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Result Count */}
        <div className="flex items-center justify-between sm:block">
          <p className="text-sm font-medium text-gray-600">
            <span className="font-bold text-gray-900">{filtered.length}</span>{" "}
            products found
          </p>
        </div>

        <div className="flex w-full items-center gap-2 sm:w-auto">
          <span className="hidden text-sm text-gray-500 sm:block">
            Sort by:
          </span>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-800 outline-none transition focus:border-[#0055ff] focus:ring-2 focus:ring-blue-100 sm:w-[190px]"
          >
            <option>Best match</option>
            <option>Price: low to high</option>
            <option>Price: high to low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="flex min-h-[300px] items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white px-5 text-center">
          <div>
            <p className="text-base font-semibold text-gray-700">
              No products found
            </p>

            <p className="mt-1 text-sm text-gray-400">
              Try changing your filters.
            </p>
          </div>
        </div>
      ) : (
        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-5
            md:grid-cols-3
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {filtered.map((product) => (
            <ProductCardSection key={product.id} product={product} />
          ))}
        </div>
      )}

      <div className="mt-8 flex items-center justify-center gap-1.5 overflow-x-auto pb-1 sm:gap-2">
        {["‹", "1", "2", "3", "…", "42", "›"].map((label, index) => (
          <button
            key={`${label}-${index}`}
            type="button"
            className={`
                flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                text-sm transition-all duration-200
                ${
                  label === "1"
                    ? "bg-[#0055ff] font-semibold text-white shadow-sm"
                    : "border border-gray-200 bg-white text-gray-700 hover:border-[#0055ff] hover:text-[#0055ff]"
                }
              `}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
