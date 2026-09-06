"use client";

import { categories, countries } from "@/lib/constant/dummyProduct";
import { useState } from "react";


export type Filters = {
  countryCodes: string[];
  categorySlug: string | null;
  verifiedOnly: boolean;
  minRating: number | null;
  minPrice: string;
  maxPrice: string;
};

const initialFilters: Filters = {
  countryCodes: [],
  categorySlug: null,
  verifiedOnly: false,
  minRating: null,
  minPrice: "",
  maxPrice: "",
};

export default function ProductsAside({
  onChange,
}: {
  onChange?: (filters: Filters) => void;
}) {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  function update(next: Partial<Filters>) {
    const merged = { ...filters, ...next };
    setFilters(merged);
    onChange?.(merged);
  }

  function toggleCountry(code: string) {
    const set = new Set(filters.countryCodes);
    set.has(code) ? set.delete(code) : set.add(code);
    update({ countryCodes: Array.from(set) });
  }

  return (
    <aside className="sticky top-[88px] h-fit rounded-xl border border-gray-200 bg-white p-5">
      {/* Supplier features */}
      <div>
        <h3 className="mb-3 text-sm font-semibold">Supplier features</h3>
        <label className="flex cursor-pointer items-center gap-2.5 py-1.5 text-[13.5px]">
          <input
            type="checkbox"
            checked={filters.verifiedOnly}
            onChange={(e) => update({ verifiedOnly: e.target.checked })}
            className="h-3.5 w-3.5 accent-[#2E5BFF]"
          />
          <span className="font-bold text-[#2E5BFF]">Verified</span> Supplier
        </label>
      </div>

      {/* Country-wise filter */}
      <div className="mt-5 border-t border-gray-200 pt-5">
        <h3 className="mb-3 text-sm font-semibold">Supplier country</h3>
        <div className="max-h-56 space-y-0.5 overflow-y-auto pr-1">
          {countries.map((c) => (
            <label
              key={c.code}
              className="flex cursor-pointer items-center justify-between gap-2 py-1.5 text-[13.5px]"
            >
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.countryCodes.includes(c.code)}
                  onChange={() => toggleCountry(c.code)}
                  className="h-3.5 w-3.5 accent-[#2E5BFF]"
                />
                <span>{c.flag}</span>
                <span>{c.name}</span>
              </span>
              <span className="text-xs text-gray-400">{c.count}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Store reviews */}
      <div className="mt-5 border-t border-gray-200 pt-5">
        <h3 className="mb-1 text-sm font-semibold">Store reviews</h3>
        <p className="mb-2.5 text-xs text-gray-400">
          Based on a 5-star rating system
        </p>
        {[4.0, 4.5, 5.0].map((r) => (
          <label
            key={r}
            className="flex cursor-pointer items-center gap-2.5 py-1.5 text-[13.5px]"
          >
            <input
              type="radio"
              name="rating"
              checked={filters.minRating === r}
              onChange={() => update({ minRating: r })}
              className="h-3.5 w-3.5 accent-[#2E5BFF]"
            />
            {r === 5.0 ? "5.0" : `${r} & up`}
          </label>
        ))}
      </div>

      {/* Categories */}
      <div className="mt-5 border-t border-gray-200 pt-5">
        <h3 className="mb-3 text-sm font-semibold">Categories</h3>
        <div className="space-y-0.5">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() =>
                update({
                  categorySlug:
                    filters.categorySlug === cat.slug ? null : cat.slug,
                })
              }
              className={`block w-full py-1.5 text-left text-[13.5px] ${
                filters.categorySlug === cat.slug
                  ? "font-semibold text-[#2E5BFF]"
                  : "text-gray-800 hover:text-[#2E5BFF]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price range */}
      <div className="mt-5 border-t border-gray-200 pt-5">
        <h3 className="mb-3 text-sm font-semibold">Price range (BDT)</h3>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Min"
            value={filters.minPrice}
            onChange={(e) => update({ minPrice: e.target.value })}
            className="w-full rounded-md border border-gray-200 px-2.5 py-2 text-[13px] outline-none focus:border-[#2E5BFF]"
          />
          <span className="text-gray-400">—</span>
          <input
            type="text"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={(e) => update({ maxPrice: e.target.value })}
            className="w-full rounded-md border border-gray-200 px-2.5 py-2 text-[13px] outline-none focus:border-[#2E5BFF]"
          />
        </div>
        <button className="mt-3.5 w-full rounded-lg bg-[#2E5BFF] py-2.5 text-[13.5px] font-semibold text-white hover:bg-[#1B3FCC]">
          Apply
        </button>
      </div>
    </aside>
  );
}
