"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, Search, ArrowRight } from "lucide-react";

export default function NotFound() {
  const [query, setQuery] = useState("");

  return (
    <main className="flex min-h-[80vh] items-center bg-white">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6">
        <svg viewBox="0 0 240 160" className="h-40 w-auto sm:h-48" fill="none">
          <rect x="10" y="20" width="220" height="120" rx="14" fill="#EFF6FF" />
          <circle cx="120" cy="80" r="46" fill="#DBEAFE" />
          <text
            x="120"
            y="98"
            textAnchor="middle"
            fontSize="52"
            fontWeight="900"
            fill="#2563EB"
          >
            404
          </text>
          <path
            d="M40 130l24-18M200 130l-24-18"
            stroke="#93C5FD"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="34" cy="42" r="5" fill="#93C5FD" />
          <circle cx="206" cy="46" r="7" fill="#BFDBFE" />
        </svg>

        <h1 className="mt-8 text-2xl font-black text-[#0F172A] sm:text-3xl">
          We couldn't find that page
        </h1>
        <p className="mt-3 max-w-md text-sm text-gray-500 sm:text-base">
          The page you're looking for may have been moved, renamed, or the
          listing is no longer available.
        </p>

        {/* Search */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex w-full max-w-md overflow-hidden rounded-xl border border-gray-200"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, suppliers, categories"
            className="flex-1 px-4 py-3 text-sm outline-none"
          />
          <button
            type="submit"
            className="flex items-center gap-1.5 bg-[#2563EB] px-5 text-sm font-bold text-white transition hover:bg-[#1D4ED8]"
          >
            <Search size={15} />
            Search
          </button>
        </form>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1D4ED8]"
          >
            <Home size={15} />
            Back to home
          </Link>
          <Link
            href="/products/allproduct"
            className="flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-bold text-[#0F172A] transition hover:border-[#2563EB] hover:text-[#2563EB]"
          >
            Browse all products
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </main>
  );
}
