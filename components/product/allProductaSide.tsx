"use client";

import {
  Allcategories,
  countries,
  initialFilters,
} from "@/lib/constant/dummyData";
import { Filters } from "@/lib/constant/type/data.type";
import { useState } from "react";
import { ChevronDown, SlidersHorizontal, RotateCcw } from "lucide-react";

export default function ProductsAside({
  onChange,
}: {
  onChange?: (filters: Filters) => void;
}) {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [mobileOpen, setMobileOpen] = useState(false);

  function update(next: Partial<Filters>) {
    const merged = { ...filters, ...next };
    setFilters(merged);
    onChange?.(merged);
  }

  function resetFilters() {
    setFilters(initialFilters);
    onChange?.(initialFilters);
  }

  function toggleCountry(code: string) {
    const set = new Set(filters.countryCodes || []);
    set.has(code) ? set.delete(code) : set.add(code);
    update({ countryCodes: Array.from(set) });
  }

  return (
    <>
      {/* Mobile Drawer Toggle */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:border-[#0055ff]"
        >
          <span className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-[#0055ff]" />
            Filters
          </span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              mobileOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {mobileOpen && (
          <div className="mt-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <FilterContent
              filters={filters}
              update={update}
              resetFilters={resetFilters}
              toggleCountry={toggleCountry}
            />
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-[88px] max-h-[calc(100vh-110px)] overflow-y-auto rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <FilterContent
            filters={filters}
            update={update}
            resetFilters={resetFilters}
            toggleCountry={toggleCountry}
          />
        </div>
      </aside>
    </>
  );
}

function FilterContent({
  filters,
  update,
  resetFilters,
  toggleCountry,
}: {
  filters: Filters;
  update: (next: Partial<Filters>) => void;
  resetFilters: () => void;
  toggleCountry: (code: string) => void;
}) {
  return (
    <div className="space-y-5">
      {/* Title & Reset */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <h3 className="text-base font-bold text-gray-900">Filters</h3>
        <button
          onClick={resetFilters}
          type="button"
          className="flex items-center gap-1 text-xs font-semibold text-gray-500 transition hover:text-red-500"
        >
          <RotateCcw className="h-3.5 w-3.5" /> Reset
        </button>
      </div>

      {/* Categories */}
      <div>
        <h4 className="mb-2 text-sm font-bold text-gray-900">Categories</h4>
        <div className="max-h-56 space-y-1 overflow-y-auto pr-1">
          {Allcategories.map((cat) => {
            const active = filters.categorySlug === cat.slug;
            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() =>
                  update({ categorySlug: active ? null : cat.slug })
                }
                className={`block w-full rounded-lg px-2.5 py-1.5 text-left text-sm font-medium transition ${
                  active
                    ? "bg-blue-50 text-[#0055ff]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range (FIXED) */}
      <div className="border-t border-gray-100 pt-4">
        <h4 className="mb-3 text-sm font-bold text-gray-900">
          Price Range ($)
        </h4>
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <input
            type="number"
            min="0"
            placeholder="Min"
            value={filters.minPrice ?? ""}
            onChange={(e) => {
              const val = e.target.value;
              update({ minPrice: val !== "" ? Number(val) : undefined });
            }}
            className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium text-gray-900 outline-none transition focus:border-[#0055ff] focus:ring-2 focus:ring-blue-50"
          />
          <span className="text-gray-400">—</span>
          <input
            type="number"
            min="0"
            placeholder="Max"
            value={filters.maxPrice ?? ""}
            onChange={(e) => {
              const val = e.target.value;
              update({ maxPrice: val !== "" ? Number(val) : undefined });
            }}
            className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium text-gray-900 outline-none transition focus:border-[#0055ff] focus:ring-2 focus:ring-blue-50"
          />
        </div>
      </div>

      {/* Supplier Features */}
      <div className="border-t border-gray-100 pt-4">
        <label className="flex cursor-pointer items-center gap-2.5 text-sm font-medium text-gray-700">
          <input
            type="checkbox"
            checked={!!filters.verifiedOnly}
            onChange={(e) => update({ verifiedOnly: e.target.checked })}
            className="h-4 w-4 rounded border-gray-300 text-[#0055ff] accent-[#0055ff] focus:ring-[#0055ff]"
          />
          <span>Verified Suppliers Only</span>
        </label>
      </div>

      {/* Country Filter */}
      <div className="border-t border-gray-100 pt-4">
        <h4 className="mb-2 text-sm font-bold text-gray-900">
          Supplier Country
        </h4>
        <div className="max-h-48 space-y-1 overflow-y-auto pr-1">
          {countries.map((country) => (
            <label
              key={country.code}
              className="flex cursor-pointer items-center justify-between rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
            >
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={(filters.countryCodes || []).includes(country.code)}
                  onChange={() => toggleCountry(country.code)}
                  className="h-4 w-4 rounded border-gray-300 text-[#0055ff] accent-[#0055ff]"
                />
                <span>{country.flag}</span>
                <span className="truncate font-medium">{country.name}</span>
              </span>
               
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
