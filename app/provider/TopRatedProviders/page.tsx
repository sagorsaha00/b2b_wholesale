"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Crown,
  MapPin,
  Package,
  Star,
  Store,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const TOP_PROVIDERS = [
  {
    rank: 1,
    name: "Tech World BD",
    image: "/providers/tech-world.png",
    category: "Electronics",
    location: "Dhaka, Bangladesh",
    rating: "4.9",
    reviews: "1,248",
    products: 245,
    verified: true,
  },
  {
    rank: 2,
    name: "Fresh Supply Co.",
    image: "/providers/fresh-supply.png",
    category: "Food & Grocery",
    location: "Chattogram, Bangladesh",
    rating: "4.8",
    reviews: "986",
    products: 180,
    verified: true,
  },
  {
    rank: 3,
    name: "Style Hub",
    image: "/providers/style-hub.png",
    category: "Fashion & Apparel",
    location: "Dhaka, Bangladesh",
    rating: "4.8",
    reviews: "824",
    products: 320,
    verified: true,
  },
  {
    rank: 4,
    name: "Agro Trade BD",
    image: "/providers/agro-trade.png",
    category: "Agriculture",
    location: "Rajshahi, Bangladesh",
    rating: "4.7",
    reviews: "692",
    products: 210,
    verified: true,
  },
];

export default function TopRatedProviders() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <div className="flex items-center gap-2">
              <Trophy size={17} className="text-[#D98B00]" />

              <span className="text-sm font-bold uppercase tracking-wide text-[#D98B00]">
                Top Providers
              </span>
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Highest Rated Providers
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
              Find the most trusted and highly rated providers on Markood.
            </p>
          </div>

          <Link
            href="/providers/top-rated"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#2563EB]"
          >
            View Top Rated
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Providers */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {TOP_PROVIDERS.map((provider, index) => (
            <motion.div
              key={provider.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
            >
              <Link
                href={`/provider/${provider.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="group relative flex gap-4 overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/20 hover:shadow-lg sm:p-6"
              >
                {/* Rank */}
                <div className="absolute right-4 top-4">
                  {provider.rank === 1 ? (
                    <Crown size={21} className="text-[#D98B00]" />
                  ) : (
                    <span className="text-xs font-bold text-gray-300">
                      #{provider.rank}
                    </span>
                  )}
                </div>

                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-[#EFF6FF]">
                  <Image
                    src={provider.image}
                    alt={provider.name}
                    fill
                    sizes="56px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 pr-8">
                    <h3 className="truncate text-lg font-bold text-[#0F172A] transition-colors group-hover:text-[#2563EB]">
                      {provider.name}
                    </h3>

                    {provider.verified && (
                      <BadgeCheck
                        size={17}
                        className="shrink-0 text-[#2563EB]"
                      />
                    )}
                  </div>

                  <p className="mt-1 text-xs text-gray-400">
                    {provider.category}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin size={13} />
                      {provider.location}
                    </span>

                    <span className="flex items-center gap-1 font-semibold text-[#D98B00]">
                      <Star size={13} className="fill-[#F59E0B]" />
                      {provider.rating}
                    </span>

                    <span>{provider.reviews} reviews</span>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                      <Package size={14} />
                      {provider.products} Products
                    </span>

                    <span className="flex items-center gap-1 text-xs font-bold text-[#2563EB]">
                      View Provider
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-5 flex items-center gap-3 rounded-2xl bg-[#FFFBEA] px-5 py-4"
        >
          <Star size={19} className="shrink-0 fill-[#F59E0B] text-[#F59E0B]" />

          <p className="text-xs leading-5 text-gray-600 sm:text-sm">
            Ratings are based on buyer feedback, product quality, service, and
            overall business experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
