"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Grid2X2,
  List,
  MapPin,
  MessageCircle,
  Package,
  Search,
  ShoppingCart,
  Star,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Premium Cooking Oil",
    image: "/product/product1.png",
    price: 125,
    unit: "5L",
    moq: 10,
    category: "Food & Grocery",
    rating: 4.8,
    reviews: 126,
    stock: "In Stock",
  },
  {
    id: 2,
    name: "Premium Basmati Rice",
    image: "/product/product2.png",
    price: 82,
    unit: "5kg",
    moq: 20,
    category: "Food & Grocery",
    rating: 4.7,
    reviews: 98,
    stock: "In Stock",
  },
  {
    id: 3,
    name: "Organic Wheat Flour",
    image: "/product/product3.png",
    price: 45,
    unit: "2kg",
    moq: 15,
    category: "Food & Grocery",
    rating: 4.9,
    reviews: 74,
    stock: "In Stock",
  },
  {
    id: 4,
    name: "Fresh Red Lentils",
    image: "/product/product4.png",
    price: 68,
    unit: "5kg",
    moq: 10,
    category: "Food & Grocery",
    rating: 4.6,
    reviews: 61,
    stock: "In Stock",
  },
  {
    id: 5,
    name: "Premium Sugar",
    image: "/product/product5.png",
    price: 52,
    unit: "5kg",
    moq: 20,
    category: "Food & Grocery",
    rating: 4.8,
    reviews: 83,
    stock: "In Stock",
  },
  {
    id: 6,
    name: "Wholesale Green Tea",
    image: "/product/product6.png",
    price: 95,
    unit: "1kg",
    moq: 10,
    category: "Beverages",
    rating: 4.7,
    reviews: 45,
    stock: "Limited",
  },
];
const categories = [
  "All Products",
  "Food & Grocery",
  "Beverages",
  "Kitchen Supplies",
  "Packaging",
];
export default function ProviderStorefrontPage() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All Products" ||
        product.category === activeCategory;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
          {/* Cover */}
          <div className="relative h-[180px] overflow-hidden rounded-b-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 sm:h-[220px]">
            <div className="absolute inset-0 opacity-10">
              <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,white,transparent_45%)]" />
            </div>

            <div className="absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-8">
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-blue-100">
                Official Markood Storefront
              </p>

              <h1 className="text-2xl font-bold sm:text-3xl">
                Sagor Wholesale
              </h1>

              <p className="mt-1 max-w-xl text-sm text-blue-100">
                Premium food and grocery supplier for businesses.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col gap-5 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="-mt-12 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-white shadow-md">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-blue-50">
                  <Image
                    src="/icon/image.png"
                    alt="Store Logo"
                    width={80}
                    height={80}
                  />
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-bold text-gray-900">
                    Sagor Wholesale
                  </h2>

                  <span className="flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-[11px] font-semibold text-blue-600">
                    <BadgeCheck size={13} />
                    Verified Provider
                  </span>
                </div>

                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    Stockholm, Sweden
                  </span>

                  <span className="flex items-center gap-1">
                    <Package size={14} />
                    250+ Products
                  </span>

                  <span className="flex items-center gap-1">
                    <Star
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    4.8 Store Rating
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                className="
                  flex h-10 cursor-pointer items-center justify-center gap-2
                  rounded-lg border border-gray-200
                  px-4 text-sm font-semibold text-gray-700
                  transition hover:border-blue-200
                  hover:bg-blue-50 hover:text-blue-600
                "
              >
                <MessageCircle size={17} />
                Contact
              </button>

              <button
                type="button"
                className="
                  flex h-10 items-center justify-center gap-2
                  rounded-lg bg-blue-600 px-4
                  text-sm font-semibold text-white
                  transition hover:bg-blue-700
                "
              >
                Visit Store
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1250px] px-4 py-7 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[230px_minmax(0,1fr)]">
          <aside className="h-fit rounded-xl border border-gray-200 bg-white p-4">
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-900">
                Store Categories
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Browse products from this provider
              </p>
            </div>

            <div className="space-y-1">
              {categories.map((category) => (
                <button
                  key={"category"}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`
                    flex w-full items-center justify-between
                    rounded-lg px-3 py-2.5 text-left text-sm
                    transition
                    ${
                      activeCategory === category
                        ? "bg-blue-50 font-semibold text-blue-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }
                  `}
                >
                  <span>{category}</span>

                  {activeCategory === category && <ArrowRight size={15} />}
                </button>
              ))}
            </div>

            {/* Provider Info */}
            <div className="mt-6 border-t border-gray-100 pt-5">
              <h3 className="text-sm font-bold text-gray-900">
                About Provider
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                FreshMart Wholesale supplies quality food and grocery products
                to restaurants, retailers, hotels and other businesses.
              </p>

              <Link
                href="/provider/freshmart-wholesale"
                className="mt-3 flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
              >
                View provider profile
                <ArrowRight size={13} />
              </Link>
            </div>
          </aside>

          <div className="min-w-0">
            {/* Product Header */}
            <div className="mb-5 rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    Products from FreshMart
                  </h2>

                  <p className="mt-1 text-xs text-gray-500">
                    Wholesale products available from this provider
                  </p>
                </div>

                {/* Search */}
                <div className="relative w-full xl:max-w-[280px]">
                  <Search
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search products..."
                    className="
                      h-10 w-full rounded-lg
                      border border-gray-200
                      bg-gray-50 pl-9 pr-3
                      text-sm text-gray-900
                      outline-none transition
                      placeholder:text-gray-400
                      focus:border-blue-500
                      focus:bg-white
                    "
                  />
                </div>
              </div>

              {/* Filters */}
              <div className="mt-4 flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-gray-500">
                  Showing{" "}
                  <span className="font-semibold text-gray-900">
                    {filteredProducts.length}
                  </span>{" "}
                  products
                </p>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="flex h-9 items-center gap-2 rounded-lg border border-gray-200 px-3 text-xs font-medium text-gray-600"
                  >
                    Sort: Popular
                    <ChevronDown size={14} />
                  </button>

                  <div className="flex rounded-lg border border-gray-200 p-0.5">
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

            {/* Product Grid */}
            {view === "grid" ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="
                      group overflow-hidden rounded-xl
                      border border-gray-200 bg-white
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-blue-200
                      hover:shadow-lg
                    "
                  >
                    {/* Image */}
                    <Link
                      href={`/products/${product.id}`}
                      className="relative block h-48 overflow-hidden bg-gray-50"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="
                          object-cover transition-transform
                          duration-500 group-hover:scale-105
                        "
                      />

                      <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-green-600 shadow-sm">
                        {product.stock}
                      </span>

                      <span className="absolute right-3 top-3 rounded-full bg-blue-600 px-2.5 py-1 text-[10px] font-bold text-white">
                        B2B
                      </span>
                    </Link>

                    {/* Content */}
                    <div className="p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                        {product.category}
                      </p>

                      <Link href={`/products/${product.id}`}>
                        <h3 className="mt-1 line-clamp-2 min-h-[40px] text-sm font-bold text-gray-900 transition hover:text-blue-600">
                          {product.name}
                        </h3>
                      </Link>

                      {/* Rating */}
                      <div className="mt-2 flex items-center gap-1">
                        <Star
                          size={13}
                          className="fill-yellow-400 text-yellow-400"
                        />

                        <span className="text-xs font-semibold text-gray-700">
                          {product.rating}
                        </span>

                        <span className="text-[11px] text-gray-400">
                          ({product.reviews})
                        </span>
                      </div>

                      {/* Price */}
                      <div className="mt-3 flex items-end justify-between">
                        <div>
                          <p className="text-[10px] text-gray-400">
                            Wholesale price
                          </p>

                          <p className="text-lg font-bold text-blue-600">
                            {product.price} SEK
                          </p>

                          <p className="text-[11px] text-gray-400">
                            per {product.unit}
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-[10px] text-gray-400">MOQ</p>

                          <p className="text-xs font-bold text-gray-700">
                            {product.moq} units
                          </p>
                        </div>
                      </div>

                      {/* Action */}
                      <button
                        type="button"
                        className="
                          mt-4 flex h-10 w-full
                          items-center justify-center gap-2
                          rounded-lg bg-blue-600
                          text-xs font-bold text-white
                          transition hover:bg-blue-700
                        "
                      >
                        <ShoppingCart size={15} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* =================================================
                 LIST VIEW
              ================================================= */
              <div className="space-y-3">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="
                      flex flex-col gap-4 rounded-xl
                      border border-gray-200 bg-white p-4
                      sm:flex-row sm:items-center
                    "
                  >
                    <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-lg bg-gray-50 sm:w-24">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-semibold uppercase text-gray-400">
                        {product.category}
                      </p>

                      <h3 className="mt-1 text-sm font-bold text-gray-900">
                        {product.name}
                      </h3>

                      <div className="mt-2 flex items-center gap-1">
                        <Star
                          size={13}
                          className="fill-yellow-400 text-yellow-400"
                        />

                        <span className="text-xs font-semibold">
                          {product.rating}
                        </span>

                        <span className="text-xs text-gray-400">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>

                    <div className="sm:text-right">
                      <p className="text-[10px] text-gray-400">
                        Wholesale price
                      </p>

                      <p className="text-lg font-bold text-blue-600">
                        {product.price} SEK
                      </p>

                      <p className="text-[11px] text-gray-400">
                        MOQ: {product.moq}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="
                        flex h-10 shrink-0 items-center
                        justify-center gap-2 rounded-lg
                        bg-blue-600 px-4 text-xs
                        font-bold text-white
                        transition hover:bg-blue-700
                      "
                    >
                      <ShoppingCart size={15} />
                      Add
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Empty */}
            {filteredProducts.length === 0 && (
              <div className="rounded-xl border border-gray-200 bg-white py-16 text-center">
                <Package size={40} className="mx-auto text-gray-300" />

                <h3 className="mt-3 text-sm font-bold text-gray-900">
                  No products found
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Try another search or category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
