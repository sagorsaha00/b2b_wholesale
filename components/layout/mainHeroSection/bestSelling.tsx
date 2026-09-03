"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/constant/dummyProduct";
import { ProductItem } from "@/lib/ui/productCard";

export default function BestSellingItems() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mb-16 overflow-hidden rounded-2xl bg-[#EFF6FF] lg:mb-20">
          <Image
            src="/product/product6.png"
            alt="Best Selling Items Banner"
            width={600}
            height={200}
            className="h-[250px] w-full object-cover sm:h-[280px] lg:h-[300px]"
          />

          <div className="py-5 text-center">
            <h2 className="text-3xl font-black text-[#2563EB] sm:text-4xl">
              40% <span className="text-[#FBBF24]">OFF</span>
            </h2>

            <p className="mt-1 text-sm font-medium text-gray-500">
              Special wholesale discount
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] xl:grid-cols-[330px_1fr]">
          <div className="relative flex min-h-[520px] flex-col overflow-hidden rounded-2xl bg-[#febb13] p-6 text-white sm:min-h-[400px] lg:min-h-[560px]">
            <div className="relative z-10 text-center">
              <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#0F172A]">
                Wholesale Deal
              </span>
            </div>

            <div className="relative z-10 flex min-h-0 flex-1 items-center justify-center">
              <Image
                src="/product/product1.png"
                alt="Wholesale products"
                fill
                sizes="100%"
                className="object-contain p-2 drop-shadow-2xl"
              />
            </div>

            {/* Sale Content */}
            <div className="relative z-10 mt-4 text-center">
              <h3 className="text-3xl font-black tracking-tight text-white">
                Mega Sale
              </h3>

              <p className="mt-2 text-sm font-medium text-white/90">
                Up to <span className="font-black text-[#0F172A]">40% OFF</span>{" "}
                on bulk orders
              </p>

              <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-bold text-[#2563EB] transition hover:bg-[#0F172A] hover:text-white">
                Shop Now
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="min-w-0">
            {/* Heading */}
            <div className="mb-6 flex items-center gap-4">
              <div className="h-1 w-10 rounded-full bg-[#FBBF24]" />

              <h2 className="text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl">
                Best Selling Items
              </h2>

              <div className="h-1 flex-1 rounded-full bg-gray-100" />
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>

            {/* View All */}
            <div className="mt-7 flex justify-center sm:justify-end">
              <button className="inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] transition hover:text-[#1D4ED8]">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
