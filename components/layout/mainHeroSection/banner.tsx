"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OrganicBanner() {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#f8f4ef]">
          <Image
            src="/banner/bannerPic.png"
            alt="Organic vegetables and fruits"
            width={1920}
            height={650}
            priority
            className="h-[420px] w-full object-cover object-center sm:h-[480px] lg:h-[520px]"
          />

          <div className="absolute inset-0 flex items-center">
            <div className="w-[55%] px-6 sm:px-10 lg:w-[48%] lg:px-14 xl:px-16">
              <div className="mb-5">
                <span className="inline-flex rounded-full border border-[#2563EB] bg-white/80 px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#2563EB] backdrop-blur-sm sm:text-[10px]">
                  Limited Time Offer
                </span>
              </div>

              <h2 className="max-w-md text-3xl font-black leading-[1.05] tracking-tight text-[#FBBF24] sm:text-4xl lg:text-5xl xl:text-6xl">
                Organic
                <br />
                <span>
                  Vegies &amp;{" "}
                  <span className=" text-[#2444fbbb]">Fruit </span>{" "}
                </span>
              </h2>

              <p className="mt-5 max-w-sm text-xs leading-5 text-[#334155] sm:text-sm sm:leading-6 lg:text-base">
                Big Sale{" "}
                <span className="font-black text-[#2563EB]">40% OFF</span> when
                buying
                <br className="hidden sm:block" />
                from the collection.
              </p>

              <Link
                href="/products"
                className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-[#2563EB] transition-all duration-300 hover:gap-3 hover:text-[#1D4ED8] sm:text-sm"
              >
                View More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
