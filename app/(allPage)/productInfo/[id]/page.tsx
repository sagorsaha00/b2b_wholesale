"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Heart,
  Minus,
  Plus,
  Search,
  ShieldCheck,
  ShoppingCart,
  Truck,
  BuildingIcon,
} from "lucide-react";
import ProductRating from "../../../../lib/ui/ratingCard";
import {
  priceTiers,
  SingleProduct,
  thumbnails,
} from "../../../../lib/constant/dummyProduct";

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(SingleProduct.image);

  {
    /**
     *here fetch data and all dynamic
     **/
  }

  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  return (
    <main className="bg-white">
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_280px] xl:gap-10">
            <div>
              <div className="group relative flex h-[400px] items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 sm:h-[480px] lg:h-[520px]">
                {/* Search */}
                <button
                  type="button"
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0F172A] shadow-sm transition hover:border-[#2563EB] hover:text-[#2563EB]"
                >
                  <Search className="h-4 w-4" />
                </button>

                {/* Wishlist */}
                <button
                  type="button"
                  onClick={() => setLiked(!liked)}
                  className="absolute left-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:border-[#2563EB]"
                >
                  <Heart
                    className={`h-4 w-4 ${
                      liked ? "fill-[#2563EB] text-[#2563EB]" : "text-gray-500"
                    }`}
                  />
                </button>

                <Image
                  src={selectedImage}
                  alt={SingleProduct.name}
                  width={520}
                  height={520}
                  priority
                  className="h-[85%] w-[85%] object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Thumbnails */}
              <div className="mt-4 grid grid-cols-4 gap-3">
                {thumbnails.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className={`relative flex h-20 items-center justify-center rounded-xl border bg-white p-2 transition sm:h-24 ${
                      selectedImage === image
                        ? "border-[#2563EB] ring-2 ring-[#2563EB]/10"
                        : "border-gray-200 hover:border-[#2563EB]/40"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${SingleProduct.name} ${index + 1}`}
                      width={100}
                      height={100}
                      className="h-full w-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* ================= PRODUCT INFORMATION ================= */}
            <div className="min-w-0">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#2563EB]">
                  Wholesale
                </span>

                <span className="rounded-full bg-[#FFF8E1] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#B77900]">
                  In Stock
                </span>
              </div>

              <h1 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-[#0F172A] sm:text-4xl lg:text-[42px]">
                {SingleProduct.name}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                <ProductRating rating={4} />

                <span className="text-sm text-gray-400">24 Reviews</span>

                <span className="h-4 w-px bg-gray-200" />

                <span className="text-sm font-medium text-[#2563EB]">
                  128 Sold
                </span>
              </div>

              {/* Price */}
              <div className="mt-6 flex items-end gap-3">
                <span className="text-3xl font-black text-[#2563EB] sm:text-4xl">
                  {SingleProduct.price}
                </span>

                <span className="mb-1 text-sm font-medium text-gray-400">
                  / unit
                </span>
              </div>

              {/* Description */}
              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                {SingleProduct.description}
              </p>

              {/* Features */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EFF6FF]">
                    <Check className="h-4 w-4 text-[#2563EB]" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#0F172A]">
                      Quality Products
                    </p>
                    <p className="text-[11px] text-gray-400">
                      Verified quality
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF8E1]">
                    <ShieldCheck className="h-4 w-4 text-green-600" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#0F172A]">
                      Trusted Supplier
                    </p>
                    <p className="text-[11px] text-gray-400">
                      Verified business
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-xl border border-gray-200">
                <div className="grid grid-cols-2 bg-gray-50 px-4 py-3 text-xs font-black uppercase tracking-wider text-[#0F172A]">
                  <span>Quantity</span>
                  <span>Price</span>
                </div>

                {priceTiers.map((tier, index) => (
                  <div
                    key={tier.quantity}
                    className={`grid grid-cols-2 items-center px-4 py-3 text-sm ${
                      index === 0
                        ? "bg-[#2563EB] font-bold text-white"
                        : "border-t border-gray-100 text-gray-600"
                    }`}
                  >
                    <span>{tier.quantity}</span>

                    <span
                      className={
                        index === 0
                          ? "font-black text-white"
                          : "font-bold text-[#2563EB]"
                      }
                    >
                      {tier.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-bold text-[#0F172A]">
                    Quantity
                  </span>

                  <span className="text-xs text-gray-400">
                    Minimum order: 1 unit
                  </span>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="flex h-12 items-center justify-between rounded-xl border border-gray-200 bg-white sm:w-36">
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((value) => Math.max(1, value - 1))
                      }
                      className="flex h-full w-11 items-center justify-center text-gray-500 transition hover:text-[#2563EB]"
                    >
                      <Minus className="h-4 w-4" />
                    </button>

                    <span className="text-sm font-bold text-[#0F172A]">
                      {quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => setQuantity((value) => value + 1)}
                      className="flex h-full w-11 items-center justify-center text-gray-500 transition hover:text-[#2563EB]"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    type="button"
                    className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-6 text-sm font-black text-white transition hover:bg-[#1D4ED8]"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add To Cart
                  </button>

                  <button
                    type="button"
                    onClick={() => setLiked(!liked)}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition hover:border-[#2563EB] hover:text-[#2563EB]"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        liked ? "fill-[#2563EB] text-[#2563EB]" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="mt-7 border-t border-gray-100 pt-5">
                <div className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
                  <p className="text-gray-500">
                    SKU:{" "}
                    <span className="font-semibold text-[#0F172A]">
                      {SingleProduct.sku}
                    </span>
                  </p>

                  <p className="text-gray-500">
                    Category:{" "}
                    <span className="font-semibold text-[#2563EB]">
                      {SingleProduct.category}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <aside className="space-y-3">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFF6FF]">
                    <Truck className="h-6 w-6 text-[#2563EB]" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Need help?</p>

                    <p className="mt-1 text-sm font-black text-[#0F172A]">
                      +880 7492 - 4278
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF8E1]">
                    <ShieldCheck className="h-6 w-6 text-green-600" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Supplier</p>

                    <p className="mt-1 text-sm font-black text-[#0F172A]">
                      Verified Business
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFF6FF]">
                    <Truck className="h-6 w-6 text-[#2563EB]" />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">Delivery</p>

                    <p className="mt-1 text-sm font-black text-[#0F172A]">
                      Fast & Reliable
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-xs text-gray-400">Business Hours</p>

                <p className="mt-1 text-sm font-black text-[#0F172A]">
                  07AM - 10PM
                </p>
              </div>

              {/* Supplier Card */}
              <div className="mt-5 rounded-xl border border-[#2563EB]/20 bg-[#EFF6FF] p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2563EB]">
                  Supplier
                </p>

                <h3 className="mt-2 text-base font-black text-[#0F172A]">
                  {SingleProduct.supplier}
                </h3>

                <div className="mt-3 flex items-center gap-2">
                  <ProductRating rating={5} />

                  <span className="text-xs text-gray-500">4.9</span>
                </div>

                <Link
                  href="/providers"
                  className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#1D4ED8]"
                >
                  View Supplier
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <Link
                  href="/providers"
                  className="mt-3 inline-flex items-center gap-2 text-base font-black text-black hover:underline"
                >
                  <BuildingIcon className="h-4 w-4 shrink-0" />
                  <span>{SingleProduct?.companyName}</span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
