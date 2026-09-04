"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronDown,
  Grid2X2,
  List,
  MapPin,
  MessageCircle,
  Package,
  Search,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";

const providers = [
  {
    id: 1,
    name: "FreshMart Wholesale",
    slug: "freshmart-wholesale",
    logo: "/images/store-logo.png",
    location: "Stockholm, Sweden",
    description:
      "Premium food and grocery supplier for restaurants, retailers and businesses.",
    categories: ["Food & Grocery", "Beverages"],
    products: 250,
    rating: 4.8,
    reviews: 126,
    orders: 1840,
    responseTime: "Within 2 hours",
    moq: "10 units",
    delivery: "1–3 days",
    verified: true,
  },
  {
    id: 2,
    name: "Nordic Food Suppliers",
    slug: "nordic-food-suppliers",
    logo: "/images/store-logo-2.png",
    location: "Gothenburg, Sweden",
    description:
      "Reliable wholesale supplier providing quality food products at competitive prices.",
    categories: ["Food", "Organic"],
    products: 180,
    rating: 4.7,
    reviews: 94,
    orders: 1320,
    responseTime: "Within 4 hours",
    moq: "20 units",
    delivery: "2–4 days",
    verified: true,
  },
  {
    id: 3,
    name: "Global Grocery Hub",
    slug: "global-grocery-hub",
    logo: "/images/store-logo-3.png",
    location: "Malmö, Sweden",
    description:
      "Large-scale grocery distributor serving retailers, hotels and restaurants.",
    categories: ["Grocery", "Household"],
    products: 420,
    rating: 4.9,
    reviews: 218,
    orders: 3260,
    responseTime: "Within 1 hour",
    moq: "25 units",
    delivery: "1–2 days",
    verified: true,
  },
  {
    id: 4,
    name: "Scandinavian Fresh",
    slug: "scandinavian-fresh",
    logo: "/images/store-logo-4.png",
    location: "Uppsala, Sweden",
    description:
      "Fresh and organic products supplied directly to businesses and retailers.",
    categories: ["Fresh Food", "Organic"],
    products: 145,
    rating: 4.6,
    reviews: 67,
    orders: 980,
    responseTime: "Within 6 hours",
    moq: "15 units",
    delivery: "2–5 days",
    verified: true,
  },
  {
    id: 5,
    name: "Stockholm Business Foods",
    slug: "stockholm-business-foods",
    logo: "/images/store-logo-5.png",
    location: "Stockholm, Sweden",
    description:
      "Business-focused food supplier with flexible wholesale pricing.",
    categories: ["Food", "Beverages"],
    products: 210,
    rating: 4.8,
    reviews: 105,
    orders: 1675,
    responseTime: "Within 3 hours",
    moq: "10 units",
    delivery: "1–3 days",
    verified: true,
  },
  {
    id: 6,
    name: "Euro Wholesale Market",
    slug: "euro-wholesale-market",
    logo: "/images/store-logo-6.png",
    location: "Västerås, Sweden",
    description:
      "International wholesale provider offering a wide range of business products.",
    categories: ["Grocery", "Household"],
    products: 310,
    rating: 4.5,
    reviews: 81,
    orders: 1210,
    responseTime: "Within 5 hours",
    moq: "20 units",
    delivery: "2–4 days",
    verified: true,
  },
];

const categories = [
  "All Providers",
  "Food & Grocery",
  "Beverages",
  "Organic",
  "Household",
];

export default function AllWholesaleProviders() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Providers");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filteredProviders = useMemo(() => {
    return providers.filter((provider) => {
      const searchMatch =
        provider.name.toLowerCase().includes(search.toLowerCase()) ||
        provider.location.toLowerCase().includes(search.toLowerCase());

      const categoryMatch =
        category === "All Providers" || provider.categories.includes(category);

      return searchMatch && categoryMatch;
    });
  }, [search, category]);

  return (
    <section className="min-h-screen bg-[#f8fafc] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1250px]">
        {/* =====================================================
            PAGE HEADER
        ===================================================== */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>

            <span>/</span>

            <Link href="/wholesale" className="hover:text-blue-600">
              Wholesale
            </Link>

            <span>/</span>

            <span className="font-medium text-gray-900">Providers</span>
          </div>

          <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Building2 size={21} />
                </div>

                <h1 className="text-2xl font-bold text-gray-900">
                  Wholesale Providers
                </h1>
              </div>

              <p className="mt-2 max-w-2xl text-sm text-gray-500">
                Discover verified wholesale providers and find the right
                business supplier for your bulk purchasing needs.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white px-4 py-3">
              <p className="text-[11px] text-gray-400">Available Providers</p>

              <p className="text-lg font-bold text-gray-900">
                {filteredProviders.length}
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            FILTER BAR
        ===================================================== */}
        <div className="mb-6 rounded-xl border border-gray-200 bg-white p-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-[360px]">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search provider or location..."
                className="
                  h-11 w-full rounded-lg
                  border border-gray-200
                  bg-gray-50 pl-10 pr-3
                  text-sm text-gray-900
                  outline-none transition
                  placeholder:text-gray-400
                  focus:border-blue-500
                  focus:bg-white
                "
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* Category */}
              <div className="relative">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="
                    h-10 appearance-none rounded-lg
                    border border-gray-200
                    bg-white pl-3 pr-9
                    text-xs font-semibold text-gray-700
                    outline-none focus:border-blue-500
                  "
                >
                  {categories.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>

                <ChevronDown
                  size={14}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>

              {/* Sort */}
              <button
                type="button"
                className="
                  flex h-10 items-center gap-2
                  rounded-lg border border-gray-200
                  px-3 text-xs font-semibold text-gray-700
                  hover:bg-gray-50
                "
              >
                Sort: Recommended
                <ChevronDown size={14} />
              </button>

              {/* View */}
              <div className="flex h-10 items-center rounded-lg border border-gray-200 p-1">
                <button
                  type="button"
                  onClick={() => setView("grid")}
                  className={`rounded-md p-1.5 ${
                    view === "grid"
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-400"
                  }`}
                >
                  <Grid2X2 size={16} />
                </button>

                <button
                  type="button"
                  onClick={() => setView("list")}
                  className={`rounded-md p-1.5 ${
                    view === "list"
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-400"
                  }`}
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            PROVIDER GRID
        ===================================================== */}
        {view === "grid" ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProviders.map((provider) => (
              <div
                key={provider.id}
                className="
                  group overflow-hidden rounded-xl
                  border border-gray-200 bg-white
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:shadow-lg
                "
              >
                {/* Provider Top */}
                <div className="relative h-24 bg-gradient-to-r from-blue-600 to-indigo-600">
                  <div className="absolute right-4 top-4 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur">
                    B2B
                  </div>
                </div>

                {/* Provider Info */}
                <div className="relative px-5 pb-5">
                  {/* Logo */}
                  <div className="-mt-10 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border-4 border-white bg-white shadow-md">
                    <Image
                      src={provider.logo}
                      alt={provider.name}
                      width={72}
                      height={72}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Name */}
                  <div className="mt-3">
                    <div className="flex items-center gap-2">
                      <h2 className="truncate text-base font-bold text-gray-900">
                        {provider.name}
                      </h2>

                      {provider.verified && (
                        <BadgeCheck
                          size={17}
                          className="shrink-0 text-blue-600"
                        />
                      )}
                    </div>

                    <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                      <MapPin size={13} />
                      {provider.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3 line-clamp-2 text-xs leading-5 text-gray-500">
                    {provider.description}
                  </p>

                  {/* Categories */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {provider.categories.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-gray-100 px-2 py-1 text-[10px] font-medium text-gray-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Rating */}
                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-1">
                      <Star
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />

                      <span className="text-sm font-bold text-gray-900">
                        {provider.rating}
                      </span>

                      <span className="text-[11px] text-gray-400">
                        ({provider.reviews})
                      </span>
                    </div>

                    <span className="text-xs text-gray-500">
                      {provider.products}+ products
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div className="rounded-lg bg-gray-50 p-2.5">
                      <p className="text-[9px] text-gray-400">Orders</p>

                      <p className="mt-0.5 text-xs font-bold text-gray-900">
                        {provider.orders.toLocaleString()}
                      </p>
                    </div>

                    <div className="rounded-lg bg-gray-50 p-2.5">
                      <p className="text-[9px] text-gray-400">MOQ</p>

                      <p className="mt-0.5 text-xs font-bold text-gray-900">
                        {provider.moq}
                      </p>
                    </div>

                    <div className="rounded-lg bg-gray-50 p-2.5">
                      <p className="text-[9px] text-gray-400">Response</p>

                      <p className="mt-0.5 truncate text-xs font-bold text-green-600">
                        {provider.responseTime.replace("Within ", "")}
                      </p>
                    </div>
                  </div>

                  {/* Delivery */}
                  <div className="mt-3 flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2.5">
                    <Truck size={15} className="text-blue-600" />

                    <div>
                      <p className="text-[9px] text-gray-400">Delivery</p>

                      <p className="text-xs font-semibold text-blue-700">
                        {provider.delivery}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 grid grid-cols-[1fr_auto] gap-2">
                    <Link
                      href={`/provider/${provider.slug}`}
                      className="
                        flex h-10 items-center justify-center gap-2
                        rounded-lg bg-blue-600
                        text-xs font-bold text-white
                        transition hover:bg-blue-700
                      "
                    >
                      View Store
                      <ArrowRight size={14} />
                    </Link>

                    <button
                      type="button"
                      className="
                        flex h-10 w-10 items-center
                        justify-center rounded-lg
                        border border-gray-200
                        text-gray-500 transition
                        hover:border-blue-200
                        hover:bg-blue-50
                        hover:text-blue-600
                      "
                    >
                      <MessageCircle size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* =====================================================
             LIST VIEW
          ===================================================== */
          <div className="space-y-3">
            {filteredProviders.map((provider) => (
              <div
                key={provider.id}
                className="
                  rounded-xl border border-gray-200
                  bg-white p-4 transition
                  hover:border-blue-200 hover:shadow-md
                "
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                  {/* Provider */}
                  <div className="flex min-w-0 flex-1 items-center gap-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                      <Image
                        src={provider.logo}
                        alt={provider.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h2 className="truncate text-sm font-bold text-gray-900">
                          {provider.name}
                        </h2>

                        {provider.verified && (
                          <BadgeCheck
                            size={16}
                            className="shrink-0 text-blue-600"
                          />
                        )}
                      </div>

                      <div className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                        <MapPin size={13} />
                        {provider.location}
                      </div>

                      <div className="mt-2 flex items-center gap-1">
                        <Star
                          size={13}
                          className="fill-yellow-400 text-yellow-400"
                        />

                        <span className="text-xs font-bold">
                          {provider.rating}
                        </span>

                        <span className="text-[11px] text-gray-400">
                          ({provider.reviews})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Products */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:w-[430px]">
                    <div>
                      <p className="text-[10px] text-gray-400">Products</p>

                      <p className="mt-1 text-sm font-bold text-gray-900">
                        {provider.products}+
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] text-gray-400">Orders</p>

                      <p className="mt-1 text-sm font-bold text-gray-900">
                        {provider.orders.toLocaleString()}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] text-gray-400">MOQ</p>

                      <p className="mt-1 text-sm font-bold text-gray-900">
                        {provider.moq}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] text-gray-400">Delivery</p>

                      <p className="mt-1 text-sm font-bold text-gray-900">
                        {provider.delivery}
                      </p>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="flex gap-2 lg:w-[180px]">
                    <Link
                      href={`/provider/${provider.slug}`}
                      className="
                        flex h-10 flex-1 items-center
                        justify-center gap-2 rounded-lg
                        bg-blue-600 text-xs font-bold
                        text-white hover:bg-blue-700
                      "
                    >
                      View Store
                      <ArrowRight size={14} />
                    </Link>

                    <button
                      type="button"
                      className="
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-lg border border-gray-200
                        text-gray-500 hover:bg-blue-50
                        hover:text-blue-600
                      "
                    >
                      <MessageCircle size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* =====================================================
            EMPTY STATE
        ===================================================== */}
        {filteredProviders.length === 0 && (
          <div className="rounded-xl border border-gray-200 bg-white py-20 text-center">
            <Building2 size={42} className="mx-auto text-gray-300" />

            <h3 className="mt-4 text-sm font-bold text-gray-900">
              No wholesale providers found
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              Try changing your search or category filter.
            </p>
          </div>
        )}

        {/* =====================================================
            BOTTOM INFO
        ===================================================== */}
        <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600">
                <ShieldCheck size={21} />
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900">
                  Buy from verified wholesale providers
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Compare providers, check business information, review products
                  and request wholesale quotations.
                </p>
              </div>
            </div>

            <Link
              href="/wholesale"
              className="
                flex h-10 shrink-0 items-center
                justify-center gap-2 rounded-lg
                bg-blue-600 px-4 text-xs
                font-bold text-white
                hover:bg-blue-700
              "
            >
              Explore Wholesale
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
