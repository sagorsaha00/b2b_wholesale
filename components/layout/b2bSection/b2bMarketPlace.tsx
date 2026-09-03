"use client";

import React from "react";
import { B2bMarketPlaceCard } from "@/lib/ui/productCard";
import { sections } from "@/lib/constant/navigation";

export default function B2BMarketplace() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-[1310px]">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <h1
            className="
              text-4xl
              font-black
              tracking-tight
              text-[#071A3D]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Explore <span className="text-[#0055ff]">B2B Marketplace</span>
          </h1>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
            "
          >
            Find the right products, businesses or opportunities for your
            business
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {sections.map((section) => (
            <B2bMarketPlaceCard key={section.title} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}
