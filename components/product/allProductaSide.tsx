"use client";

import {
  Allcategories,
  countries,
  initialFilters,
} from "@/lib/constant/dummyData";
import { Filters } from "@/lib/constant/data.type";
import { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

export default function ProductsAside({
  onChange,
}: {
  onChange?: (filters: Filters) => void;
}) {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const [mobileOpen, setMobileOpen] = useState(false);

  function update(next: Partial<Filters>) {
    const merged = {
      ...filters,
      ...next,
    };

    setFilters(merged);
    onChange?.(merged);
  }

  function toggleCountry(code: string) {
    const set = new Set(filters.countryCodes);

    if (set.has(code)) {
      set.delete(code);
    } else {
      set.add(code);
    }

    update({
      countryCodes: Array.from(set),
    });
  }

  return (
    <>
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="
            flex w-full items-center justify-between
            rounded-xl border border-gray-200
            bg-white px-4 py-3.5
            text-sm font-semibold text-gray-900
            shadow-sm transition
            hover:border-[#0055ff]
          "
        >
          <span className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-[#0055ff]" />
            Filters
          </span>

          <ChevronDown
            className={`
              h-4 w-4 transition-transform
              ${mobileOpen ? "rotate-180" : ""}
            `}
          />
        </button>

        {mobileOpen && (
          <div className="mt-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <FilterContent
              filters={filters}
              update={update}
              toggleCountry={toggleCountry}
            />
          </div>
        )}
      </div>

      <aside className="hidden lg:block">
        <div className="sticky top-[88px] max-h-[calc(100vh-110px)] overflow-y-auto rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <FilterContent
            filters={filters}
            update={update}
            toggleCountry={toggleCountry}
          />
        </div>
      </aside>
    </>
  );
}

/* ===================================================== */
/* FILTER CONTENT */
/* ===================================================== */

function FilterContent({
  filters,
  update,
  toggleCountry,
}: {
  filters: Filters;
  update: (next: Partial<Filters>) => void;
  toggleCountry: (code: string) => void;
}) {
  return (
    <div className="space-y-0">
      <div>
        <h3 className="mb-3 text-sm font-bold text-gray-900">
          Supplier features
        </h3>

        <label className="flex cursor-pointer items-center gap-2.5 py-1.5 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={filters.verifiedOnly}
            onChange={(e) =>
              update({
                verifiedOnly: e.target.checked,
              })
            }
            className="h-4 w-4 accent-[#2E5BFF]"
          />

          <span className="font-bold text-[#2E5BFF]">Verified</span>

          <span>Supplier</span>
        </label>
      </div>

      <div className="mt-5 border-t border-gray-200 pt-5">
        <h3 className="mb-3 text-sm font-bold text-gray-900">
          Price range ($)
        </h3>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <input
            type="text"
            inputMode="numeric"
            placeholder="Min"
            value={filters.minPrice}
            onChange={(e) =>
              update({
                minPrice: e.target.value,
              })
            }
            className="
              min-w-0 rounded-lg border border-gray-200
              px-3 py-2.5 text-sm
              outline-none transition
              focus:border-[#2E5BFF]
              focus:ring-2 focus:ring-blue-100
            "
          />

          <span className="text-gray-400">—</span>

          <input
            type="text"
            inputMode="numeric"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={(e) =>
              update({
                maxPrice: e.target.value,
              })
            }
            className="
              min-w-0 rounded-lg border border-gray-200
              px-3 py-2.5 text-sm
              outline-none transition
              focus:border-[#2E5BFF]
              focus:ring-2 focus:ring-blue-100
            "
          />
        </div>

        <button
          type="button"
          className="
            mt-3 w-full rounded-lg
            bg-[#2E5BFF] py-2.5
            text-sm font-semibold text-white
            transition hover:bg-[#1B3FCC]
            active:scale-[0.98]
          "
        >
          Apply
        </button>
      </div>

      <div className="mt-5 border-t border-gray-200 pt-5">
        <h3 className="mb-3 text-sm font-bold text-gray-900">Categories</h3>

        <div className="max-h-52 space-y-0.5 overflow-y-auto pr-1">
          {Allcategories.map((cat) => {
            const active = filters.categorySlug === cat.slug;

            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() =>
                  update({
                    categorySlug: active ? null : cat.slug,
                  })
                }
                className={`
                  block w-full rounded-md
                  px-2 py-1.5
                  text-left text-sm
                  transition
                  ${
                    active
                      ? "bg-blue-50 font-semibold text-[#2E5BFF]"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[#2E5BFF]"
                  }
                `}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-5 border-t border-gray-200 pt-5">
        <h3 className="mb-1 text-sm font-bold text-gray-900">Store reviews</h3>

        <p className="mb-2.5 text-xs text-gray-400">
          Based on a 5-star rating system
        </p>

        {[4.0, 4.5, 5.0].map((rating) => (
          <label
            key={rating}
            className="
              flex cursor-pointer
              items-center gap-2.5
              rounded-md px-2 py-1.5
              text-sm text-gray-700
              hover:bg-gray-50
            "
          >
            <input
              type="radio"
              name="rating"
              checked={filters.minRating === rating}
              onChange={() =>
                update({
                  minRating: rating,
                })
              }
              className="h-4 w-4 accent-[#2E5BFF]"
            />

            <span>{rating === 5 ? "5.0" : `${rating} & up`}</span>
          </label>
        ))}
      </div>

      <div className="mt-5 border-t border-gray-200 pt-5">
        <h3 className="mb-3 text-sm font-bold text-gray-900">
          Supplier country
        </h3>

        <div className="max-h-52 space-y-0.5 overflow-y-auto pr-1">
          {countries.map((country) => (
            <label
              key={country.code}
              className="
                flex cursor-pointer
                items-center justify-between
                gap-2 rounded-md
                px-2 py-1.5
                text-sm text-gray-700
                hover:bg-gray-50
              "
            >
              <span className="flex min-w-0 items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.countryCodes.includes(country.code)}
                  onChange={() => toggleCountry(country.code)}
                  className="h-4 w-4 shrink-0 accent-[#2E5BFF]"
                />

                <span className="shrink-0">{country.flag}</span>

                <span className="truncate">{country.name}</span>
              </span>

              <span className="shrink-0 text-xs text-gray-400">
                {country.count}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
