"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Percent } from "lucide-react";
import { useProducts } from "@/lib/hooks/useAuthMutations";
import { ProductItem } from "@/lib/ui/productCard";

function DiscountBadge({ discount }: { discount?: number }) {
  if (!discount) return null;
  return (
    <span className="absolute top-2 left-2 z-10 rounded-md bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
      -{discount}%
    </span>
  );
}

function ProductRating({
  rating,
  reviews,
}: {
  rating: number;
  reviews?: number;
}) {
  return (
    <div className="flex items-center gap-1 text-xs font-medium text-gray-500">
      <span className="text-amber-400">★</span>
      <span className="font-semibold text-gray-700">{rating}</span>
      {reviews !== undefined && (
        <span className="text-gray-400">({reviews})</span>
      )}
    </div>
  );
}

const FILTERS = ["All", "On Sale", "Top Rated", "New Arrivals"];

export default function BestSellingItems() {
  const [activeFilter, setActiveFilter] = useState("All");

  const { data, isLoading, isError } = useProducts({ page: 1, limit: 10 });
  const rawProducts = data?.data || [];

  const products = rawProducts.filter((product: any) => {
    if (activeFilter === "On Sale") return product.discount || product.oldPrice;
    if (activeFilter === "Top Rated") return (product.rating ?? 0) >= 4.5;
    if (activeFilter === "New Arrivals") return product.isNew;
    return true;
  });

  if (isLoading) {
    return (
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 h-8 w-48 animate-pulse rounded bg-gray-200" />
          {/* Skeleton updated to 4 columns */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-56 animate-pulse rounded-xl bg-gray-100"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError || rawProducts.length === 0) return null;

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Flame className="h-4 w-4 text-[#FBBF24]" fill="#FBBF24" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase">
                Trending Now
              </span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-[#0F172A] sm:text-3xl lg:text-4xl">
              Best Selling Items
            </h2>
          </div>

          <Link
            href="/products"
            className="group cursor-pointer inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-xs font-bold text-[#0F172A] transition-all duration-200 hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white"
          >
            View All Products
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Banner */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] px-5 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FBBF24]">
              <Percent className="h-4 w-4 text-[#0F172A]" strokeWidth={2.5} />
            </span>
            <p className="text-xs font-semibold text-white sm:text-sm">
              Wholesale Deal — up to{" "}
              <span className="font-black text-[#FBBF24]">40% OFF</span> on bulk
              orders
            </p>
          </div>

          <button className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-[#2563EB] transition-colors duration-200 hover:bg-[#0F172A] hover:text-white">
            Shop Deals
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>

        {/* Filter pills */}
        <div className="mb-6 flex flex-wrap gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-colors duration-200 ${
                activeFilter === filter
                  ? "bg-[#0F172A] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.slice(0, 8).map((product: any) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
