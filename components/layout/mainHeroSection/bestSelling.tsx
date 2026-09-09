"use client";

import { useState } from "react";
import { ArrowRight, Flame, Percent } from "lucide-react";
import { products } from "@/lib/constant/dummyData";
import { ProductItem } from "@/lib/ui/productCard";

const FILTERS = ["All", "On Sale", "Top Rated", "New Arrivals"];

export default function BestSellingItems() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProducts = products.slice(0, 9);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Flame className="h-4 w-4 text-[#FBBF24]" fill="#FBBF24" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">
                Trending Now
              </span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              Best Selling Items
            </h2>
          </div>

          <button className="group cursor-pointer inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-bold text-[#0F172A] transition-all duration-200 hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white">
            View All Products
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] px-6 py-4 sm:px-7">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FBBF24]">
              <Percent className="h-4 w-4 text-[#0F172A]" strokeWidth={2.5} />
            </span>
            <p className="text-sm font-semibold text-white sm:text-base">
              Wholesale Deal — up to{" "}
              <span className="font-black text-[#FBBF24]">40% OFF</span> on bulk
              orders
            </p>
          </div>

          <button className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-bold text-[#2563EB] transition-colors duration-200 hover:bg-[#0F172A] hover:text-white">
            Shop Deals
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Filter pills */}
        <div className="mb-6 flex flex-wrap gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-colors duration-200 ${
                activeFilter === filter
                  ? "bg-[#0F172A] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Uniform product grid */}
        <div className="grid grid-cols-2 items-start gap-5 sm:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
