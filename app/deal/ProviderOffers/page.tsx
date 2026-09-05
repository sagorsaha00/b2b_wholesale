"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  Gift,
  ShieldCheck,
  Store,
} from "lucide-react";
import { motion } from "framer-motion";

const OFFERS = [
  {
    provider: "ABC Wholesale",
    offer: "15% OFF",
    description: "On selected electronics",
    category: "Electronics",
  },
  {
    provider: "Fresh Supply Co.",
    offer: "10% OFF",
    description: "On orders above ৳20,000",
    category: "Food & Grocery",
  },
  {
    provider: "Style Hub",
    offer: "20% OFF",
    description: "On bulk fashion orders",
    category: "Fashion",
  },
];

export default function ProviderOffers() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <span className="text-sm font-bold uppercase tracking-wide text-[#D98B00]">
            Provider Deals
          </span>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F172A]">
            Provider Offers
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
            Discover special discounts and exclusive offers directly from
            Markood providers.
          </p>
        </motion.div>

        {/* Offers */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {OFFERS.map((offer, index) => (
            <motion.div
              key={offer.provider}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
            >
              <Link
                href="/deals/provider-offers"
                className="group block rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/20 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                    <Gift size={23} />
                  </div>

                  <BadgePercent size={20} className="text-[#D98B00]" />
                </div>

                <div className="mt-5">
                  <p className="text-xs font-medium text-gray-400">
                    {offer.category}
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-[#0F172A]">
                    {offer.provider}
                  </h3>

                  <div className="mt-4 rounded-xl bg-[#FFFBEA] px-4 py-3">
                    <p className="text-xl font-bold text-[#D98B00]">
                      {offer.offer}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      {offer.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Store size={14} />
                    <span>Verified Provider</span>
                    <ShieldCheck size={13} className="text-[#2563EB]" />
                  </div>

                  <ArrowRight
                    size={18}
                    className="text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#2563EB]"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-5 flex justify-end">
          <Link
            href="/deals/provider-offers"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#2563EB]"
          >
            View All Provider Offers
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
