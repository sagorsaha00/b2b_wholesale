"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Boxes, CheckCircle2, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

export default function BulkPurchaseDeals() {
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
            Save More
          </span>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F172A]">
            Bulk Purchase Deals
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
            Buy larger quantities and unlock better wholesale prices from
            trusted providers.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl border border-[#FACC15] bg-[#FFFBEA]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Left */}
            <div className="p-6 sm:p-8 lg:col-span-2">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#FFF1B8] text-[#D98B00]">
                  <Boxes size={27} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0F172A]">
                    Buy More, Save More
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Get special wholesale pricing when you purchase products in
                    larger quantities.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "Lower price per unit",
                  "Flexible quantity options",
                  "Verified wholesale providers",
                  "Better profit margins",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-[#D98B00]"
                    />

                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/deals/bulk-purchase"
                className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1D4ED8]"
              >
                Explore Bulk Deals
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Right */}
            <div className="flex items-center justify-center border-t border-[#FACC15]/40 p-6 lg:border-l lg:border-t-0">
              <div className="w-full rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2 text-[#2563EB]">
                  <TrendingDown size={20} />

                  <span className="text-sm font-bold">Wholesale Pricing</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-400">Buy 10+</p>
                    <p className="mt-1 text-lg font-bold text-[#0F172A]">
                      Better Price
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Buy 50+</p>
                    <p className="mt-1 text-lg font-bold text-[#0F172A]">
                      Wholesale Price
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Buy 100+</p>
                    <p className="mt-1 text-lg font-bold text-[#2563EB]">
                      Best Price
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
