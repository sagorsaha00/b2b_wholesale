"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  ChevronRight,
  MapPin,
  Search,
  Star,
  Store,
} from "lucide-react";

type Provider = {
  id: number;
  name: string;
  slug: string;
  image: string;
  location: string;
  rating: number;
  reviews: number;
  products: number;
  orders: number;
  verified: boolean;
  category: string;
};

const providers: Provider[] = [
  {
    id: 1,
    name: "Fresh Foods Ltd.",
    slug: "fresh-foods-ltd",
    image: "/providers/fresh-foods.png",
    location: "  Sweden",
    rating: 4.9,
    reviews: 128,
    products: 245,
    orders: 1250,
    verified: true,
    category: "Food & Grocery",
  },
  {
    id: 2,
    name: "Green Agro",
    slug: "green-agro",
    image: "/providers/green-agro.png",
    location: "  Sweden",
    rating: 4.8,
    reviews: 96,
    products: 180,
    orders: 890,
    verified: true,
    category: "Agriculture",
  },
  {
    id: 3,
    name: " Wholesale Mart",
    slug: "-wholesale-mart",
    image: "/providers/-wholesale.png",
    location: " , Sweden",
    rating: 4.7,
    reviews: 74,
    products: 320,
    orders: 760,
    verified: false,
    category: "General Wholesale",
  },
  {
    id: 4,
    name: "Royal Fashion BD",
    slug: "royal-fashion-bd",
    image: "/providers/royal-fashion.png",
    location: " , Sweden",
    rating: 4.8,
    reviews: 112,
    products: 195,
    orders: 1020,
    verified: true,
    category: "Fashion",
  },
  {
    id: 5,
    name: "Prime Electronics",
    slug: "prime-electronics",
    image: "/providers/prime-electronics.png",
    location: "  Sweden",
    rating: 4.6,
    reviews: 58,
    products: 140,
    orders: 540,
    verified: true,
    category: "Electronics",
  },
  {
    id: 6,
    name: "United Traders",
    slug: "united-traders",
    image: "/providers/united-traders.png",
    location: "  Sweden",
    rating: 4.5,
    reviews: 42,
    products: 110,
    orders: 390,
    verified: false,
    category: "General Wholesale",
  },
];

export default function AllProviders() {
  const [search, setSearch] = useState("");

  const filteredProviders = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) return providers;

    return providers.filter(
      (provider) =>
        provider.name.toLowerCase().includes(value) ||
        provider.location.toLowerCase().includes(value) ||
        provider.category.toLowerCase().includes(value),
    );
  }, [search]);

  return (
    <section className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {filteredProviders.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProviders.map((provider, index) => (
              <motion.div
                key={provider.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                }}
              >
                <Link
                  href={`/provider/${provider.slug}`}
                  className="group block h-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/20 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-gray-100 bg-[#EFF6FF]">
                      <Image
                        src={provider.image}
                        alt={provider.name}
                        fill
                        sizes="64px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Name */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h2 className="truncate font-semibold text-[#0F172A]">
                            {provider.name}
                          </h2>

                          <p className="mt-1 text-xs text-gray-500">
                            {provider.category}
                          </p>
                        </div>

                        {provider.verified && (
                          <BadgeCheck className="h-5 w-5 shrink-0 text-[#2563EB]" />
                        )}
                      </div>

                      <div className="mt-2 flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="h-3.5 w-3.5" />
                        <span className="truncate">{provider.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                      <span className="text-sm font-semibold text-[#0F172A]">
                        {provider.rating}
                      </span>

                      <span className="text-xs text-gray-400">
                        ({provider.reviews} reviews)
                      </span>
                    </div>

                    {provider.verified && (
                      <span className="rounded-full bg-[#EFF6FF] px-2.5 py-1 text-[11px] font-semibold text-[#2563EB]">
                        Verified
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="mt-5 grid grid-cols-2 overflow-hidden rounded-xl border border-gray-100">
                    <div className="border-r border-gray-100 px-3 py-3">
                      <p className="text-xs text-gray-400">Products</p>

                      <p className="mt-1 text-sm font-semibold text-[#0F172A]">
                        {provider.products}+
                      </p>
                    </div>

                    <div className="px-3 py-3">
                      <p className="text-xs text-gray-400">Orders</p>

                      <p className="mt-1 text-sm font-semibold text-[#0F172A]">
                        {provider.orders}+
                      </p>
                    </div>
                  </div>

                  {/* View Store */}
                  <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-sm font-semibold text-[#2563EB]">
                      View Store
                    </span>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EFF6FF] transition-transform duration-300 group-hover:translate-x-1">
                      <ChevronRight className="h-4 w-4 text-[#2563EB]" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFF6FF]">
              <Search className="h-6 w-6 text-[#2563EB]" />
            </div>

            <h3 className="mt-4 font-semibold text-[#0F172A]">
              No providers found
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Try searching with another provider name, category or location.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
