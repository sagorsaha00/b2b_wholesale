"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { categories } from "@/lib/constant/navigation";

export default function B2BHero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/logo/hero.avif"
          alt="B2B Marketplace"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#07111f]/70 to-[#07111f]/90" />
      </div>

      {/* Main Container */}
      <div
        className="
          relative z-10 mx-auto flex
          min-h-[720px]
          max-w-7xl
          flex-col
          px-5
          pt-24
          sm:px-8
          sm:pt-28
          lg:px-10
        "
      >
        {/* ================= HERO CONTENT ================= */}
        <div
          className="
            mx-auto flex w-full max-w-5xl
            flex-col
            gap-8
            lg:flex-row
            lg:items-start
            lg:gap-10
            xl:gap-16
          "
        >
          <div
            className="
              ml-0
              flex w-full flex-col
              items-center
              text-center

              sm:ml-0

              lg:ml-62
              lg:items-start
              lg:text-left
            "
          >
            {/* Sale Badge */}
            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#febb13]/30
                bg-[#febb13]/10
                px-4
                py-2
                backdrop-blur-sm
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#febb13]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#febb13]">
                Sale Up To 30%
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-3xl
                text-4xl
                font-black
                leading-[1.05]
                tracking-tight
                text-white

                sm:text-5xl

                lg:text-6xl

                xl:text-7xl
              "
            >
              Buy Smarter.
              <br />
              <span
                className="
                  ml-0
                  text-[#febb13]

                  sm:ml-4

                  md:ml-8

                  lg:ml-16
                "
              >
                Grow Your Business.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                mb-7
                max-w-2xl
                text-sm
                leading-7
                text-white/70

                sm:text-base
                sm:leading-8

                lg:text-lg
                lg:leading-9
              "
            >
              Discover quality products from trusted suppliers and unlock better
              wholesale prices for your business.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-2
                flex
                w-full
                max-w-md
                flex-col
                gap-3

                sm:w-auto
                sm:max-w-none
                sm:flex-row
              "
            >
              <Link
                href="/products"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#febb13]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-[#07111f]
                  transition
                  duration-300
                  hover:bg-[#ffd45c]
                  hover:-translate-y-0.5
                "
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/providers"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/20
                  bg-white/10
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-sm
                  transition
                  duration-300
                  hover:bg-white/15
                  hover:-translate-y-0.5
                "
              >
                Find Suppliers
              </Link>
            </div>
          </div>
        </div>

        {/* ================= CATEGORIES ================= */}
        <div
          className="
            mt-auto
            pb-6
            pt-10

            sm:pt-12
            sm:pb-8
          "
        >
          {/* Category Header */}
          <div
            className="
              mb-4
              flex
              items-center
              justify-between
              gap-3
            "
          >
            <div className="flex min-w-0 items-center gap-2">
              <Sparkles size={15} className="shrink-0 text-[#febb13]" />

              <p
                className="
                  truncate
                  text-xs
                  font-medium
                  tracking-wide
                  text-gray-300

                  sm:text-sm
                "
              >
                Discover All Categories
              </p>
            </div>

            <Link
              href="/category"
              className="
                hidden
                shrink-0
                items-center
                gap-1
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-[#febb13]
                transition
                hover:text-[#ffd24d]

                sm:flex
              "
            >
              View All
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Category Grid */}
          <div
            className="
              grid
              grid-cols-2
              gap-2.5

              sm:grid-cols-3
              sm:gap-3

              lg:grid-cols-5
            "
          >
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.name}
                  href={`products/allProduct`}
                  className="
                    group
                    flex
                    min-w-0
                    items-center
                    gap-2.5
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.96]
                    p-3
                    text-gray-900
                    shadow-lg
                    backdrop-blur-sm
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#0055ff]/20
                    hover:bg-white
                    hover:shadow-2xl

                    sm:gap-3
                    sm:p-3.5
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#0055ff]/10
                      text-[#0055ff]
                      transition-all
                      duration-300

                      group-hover:bg-[#0055ff]
                      group-hover:text-white

                      sm:h-10
                      sm:w-10
                    "
                  >
                    <Icon size={18} className="sm:h-[19px] sm:w-[19px]" />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <h3
                      className="
                        truncate
                        text-[11px]
                        font-bold
                        tracking-tight
                        text-gray-900
                        transition-colors
                        group-hover:text-[#0055ff]

                        sm:text-sm
                      "
                    >
                      {category.name}
                    </h3>

                    <p
                      className="
                        mt-0.5
                        truncate
                        text-[9px]
                        text-gray-500

                        sm:text-[10px]
                      "
                    >
                      Wholesale & Bulk
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile View All */}
          <Link
            href="/"
            className="
              mt-4
              flex
              items-center
              justify-center
              gap-1
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-[#febb13]

              sm:hidden
            "
          >
            View All
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
