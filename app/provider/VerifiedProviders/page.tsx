"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  MapPin,
  Package,
  ShieldCheck,
  Store,
} from "lucide-react";
import { motion } from "framer-motion";

const VERIFIED_PROVIDERS = [
  {
    name: "Tech World BD",
    image: "/providers/tech-world.png",
    category: "Electronics",
    location: "Dhaka, Bangladesh",
    products: 245,
    businessAge: "8 Years",
    verifiedSince: "2023",
  },
  {
    name: "Fresh Supply Co.",
    image: "/providers/fresh-supply.png",
    category: "Food & Grocery",
    location: "Chattogram, Bangladesh",
    products: 180,
    businessAge: "6 Years",
    verifiedSince: "2024",
  },
  {
    name: "Agro Trade BD",
    image: "/providers/agro-trade.png",
    category: "Agriculture",
    location: "Rajshahi, Bangladesh",
    products: 210,
    businessAge: "10 Years",
    verifiedSince: "2023",
  },
  {
    name: "Style Hub",
    image: "/providers/style-hub.png",
    category: "Fashion & Apparel",
    location: "Dhaka, Bangladesh",
    products: 320,
    businessAge: "7 Years",
    verifiedSince: "2024",
  },
  {
    name: "Auto Parts Center",
    image: "/providers/auto-parts.png",
    category: "Automotive",
    location: "Dhaka, Bangladesh",
    products: 198,
    businessAge: "9 Years",
    verifiedSince: "2023",
  },
  {
    name: "Home Essentials",
    image: "/providers/home-essentials.png",
    category: "Home & Living",
    location: "Narayanganj, Bangladesh",
    products: 156,
    businessAge: "5 Years",
    verifiedSince: "2025",
  },
];

export default function VerifiedProviders() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={17} className="text-[#2563EB]" />

              <span className="text-sm font-bold uppercase tracking-wide text-[#2563EB]">
                Trusted Businesses
              </span>
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Verified Providers
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
              Buy with confidence from businesses that have completed Markood
              verification.
            </p>
          </div>

          <Link
            href="/providers/verified"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#2563EB]"
          >
            View Verified Providers
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-6 flex flex-col gap-4 rounded-2xl bg-[#EFF6FF] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#2563EB]">
              <ShieldCheck size={22} />
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#0F172A] sm:text-base">
                Shop from verified businesses
              </h3>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Verified providers have submitted business information and
                supporting documents for review.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-bold text-[#2563EB]">
            <CheckCircle2 size={15} />
            Verified
          </div>
        </motion.div>

        {/* Provider Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VERIFIED_PROVIDERS.map((provider, index) => (
            <motion.div
              key={provider.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
              }}
            >
              <Link
                href={`/provider/${provider.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="group block rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/20 hover:shadow-lg"
              >
                {/* Provider */}
                <div className="flex items-start justify-between">
                  {/* Provider Image */}
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-[#EFF6FF]">
                    <Image
                      src={provider.image}
                      alt={provider.name}
                      fill
                      sizes="48px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center gap-1.5 rounded-full bg-[#EFF6FF] px-2.5 py-1 text-[10px] font-bold text-[#2563EB]">
                    <BadgeCheck size={13} />
                    Verified
                  </div>
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#0F172A] transition-colors group-hover:text-[#2563EB]">
                  {provider.name}
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                  {provider.category}
                </p>

                {/* Location */}
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                  <MapPin size={14} />
                  {provider.location}
                </div>

                {/* Stats */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#F8FAFC] p-3">
                    <div className="flex items-center gap-2">
                      <Package size={15} className="text-[#2563EB]" />

                      <span className="text-xs text-gray-400">Products</span>
                    </div>

                    <p className="mt-2 text-base font-bold text-[#0F172A]">
                      {provider.products}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#F8FAFC] p-3">
                    <div className="flex items-center gap-2">
                      <Building2 size={15} className="text-[#2563EB]" />

                      <span className="text-xs text-gray-400">Business</span>
                    </div>

                    <p className="mt-2 text-base font-bold text-[#0F172A]">
                      {provider.businessAge}
                    </p>
                  </div>
                </div>

                {/* Bottom */}
                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-xs text-gray-400">
                    Verified since {provider.verifiedSince}
                  </span>

                  <ArrowRight
                    size={18}
                    className="text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#2563EB]"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
