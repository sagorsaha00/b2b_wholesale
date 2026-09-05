"use client";

import React from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  Clock3,
  PackageOpen,
  Tag,
} from "lucide-react";
import { motion } from "framer-motion";

const CLEARANCE_PRODUCTS = [
  {
    name: "Wireless Headphones",
    category: "Electronics",
    oldPrice: "৳2,500",
    price: "৳1,650",
    discount: "34% OFF",
    stock: "12 left",
  },
  {
    name: "Cotton T-Shirt",
    category: "Fashion",
    oldPrice: "৳450",
    price: "৳290",
    discount: "36% OFF",
    stock: "25 left",
  },
  {
    name: "Kitchen Storage Set",
    category: "Home & Living",
    oldPrice: "৳1,200",
    price: "৳790",
    discount: "34% OFF",
    stock: "8 left",
  },
];

export default function Clearance() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <span className="text-sm font-bold uppercase tracking-wide text-[#D98B00]">
              Limited Stock
            </span>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0F172A]">
              Clearance Deals
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
              Grab limited-stock products at special clearance prices before
              they are gone.
            </p>
          </div>

          <Link
            href="/deals/clearance"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#2563EB]"
          >
            View All Clearance
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {CLEARANCE_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
            >
              <Link
                href="/deals/clearance"
                className="group block overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/20 hover:shadow-lg"
              >
                {/* Image Placeholder */}
                <div className="relative flex h-48 items-center justify-center bg-[#F8FAFC]">
                  <PackageOpen
                    size={55}
                    strokeWidth={1.5}
                    className="text-gray-300 transition-transform duration-500 group-hover:scale-110"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-[#FFF1B8] px-3 py-1.5 text-xs font-bold text-[#D98B00]">
                    {product.discount}
                  </span>

                  <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm">
                    <Clock3 size={13} />
                    Limited
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-xs font-medium text-gray-400">
                    {product.category}
                  </p>

                  <h3 className="mt-1 text-base font-bold text-[#0F172A]">
                    {product.name}
                  </h3>

                  <div className="mt-4 flex items-end gap-2">
                    <span className="text-xl font-bold text-[#2563EB]">
                      {product.price}
                    </span>

                    <span className="text-sm text-gray-400 line-through">
                      {product.oldPrice}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-red-500">
                      <AlertCircle size={14} />
                      {product.stock}
                    </span>

                    <span className="flex items-center gap-1 text-xs font-bold text-[#2563EB]">
                      View Deal
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

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-5 flex items-center gap-4 rounded-2xl bg-[#FFFBEA] px-5 py-4"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#D98B00]">
            <Tag size={19} />
          </div>

          <div>
            <p className="text-sm font-bold text-[#0F172A]">
              Clearance stock moves fast
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Limited quantities are available at these prices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
