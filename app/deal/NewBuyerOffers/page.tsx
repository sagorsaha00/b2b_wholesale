"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Gift,
  Percent,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function NewBuyerOffers() {
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
          <div className="flex items-center gap-2">
            <Sparkles size={17} className="text-[#D98B00]" />

            <span className="text-sm font-bold uppercase tracking-wide text-[#D98B00]">
              Welcome Offer
            </span>
          </div>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F172A]">
            New Buyer Offers
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
            New to Markood? Get exclusive benefits and special deals on your
            first wholesale orders.
          </p>
        </motion.div>

        {/* Main Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl border border-[#FACC15] bg-[#FFFBEA]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFF1B8] text-[#D98B00]">
                <Gift size={27} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#0F172A]">
                Welcome to Markood
              </h3>

              <p className="mt-2 max-w-lg text-sm leading-6 text-gray-600">
                Start your wholesale journey with special offers designed
                exclusively for new buyers.
              </p>

              <Link
                href="/deals/new-buyer"
                className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1D4ED8]"
              >
                Claim New Buyer Offer
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Right */}
            <div className="border-t border-[#FACC15]/40 p-6 lg:border-l lg:border-t-0 lg:p-10">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {/* Offer 1 */}
                <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#2563EB]">
                    <Percent size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#0F172A]">
                      First Order Discount
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Save on your first purchase
                    </p>
                  </div>
                </div>

                {/* Offer 2 */}
                <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#2563EB]">
                    <ShoppingBag size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#0F172A]">
                      Wholesale Access
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Access verified providers
                    </p>
                  </div>
                </div>

                {/* Offer 3 */}
                <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#2563EB]">
                    <BadgeCheck size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#0F172A]">
                      Trusted Suppliers
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Buy from verified businesses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between rounded-2xl border border-gray-100 bg-white px-5 py-4">
          <p className="text-xs text-gray-500 sm:text-sm">
            New buyers can access exclusive deals and wholesale benefits.
          </p>

          <Link
            href="/deals/new-buyer"
            className="group ml-4 flex shrink-0 items-center gap-1 text-xs font-bold text-[#2563EB] sm:text-sm"
          >
            Learn More
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
