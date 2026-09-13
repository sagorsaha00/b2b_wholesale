"use client";

import { motion } from "framer-motion";
import { Benefit } from "@/lib/ui/box";

export function RegisterHero() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative hidden overflow-hidden bg-[#2563EB] lg:flex"
    >
      <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
            Join Markood and grow your business.
          </h1>
          <p className="mt-5 text-base leading-7 text-blue-100">
            Whether you are buying in bulk or selling wholesale, Markood gives
            your business the tools to connect, trade and grow.
          </p>
          <div className="mt-8 space-y-4">
            <Benefit text="Discover verified wholesale providers" />
            <Benefit text="Create and manage your business storefront" />
            <Benefit text="Request quotations for bulk orders" />
            <Benefit text="Manage products, orders and delivery" />
          </div>
        </div>
        <p className="text-sm text-blue-100">
          © {new Date().getFullYear()} Markood. All rights reserved.
        </p>
      </div>
    </motion.section>
  );
}
