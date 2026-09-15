"use client";

import Image from "next/image";
import ProductRating from "@/lib/ui/ratingCard";
import { ProductItem } from "@/lib/ui/productCard";
import { useProducts } from "@/lib/hooks/useAuthMutations";

export default function HandpickedItems() {
  const { data, isLoading, isError } = useProducts({ page: 1, limit: 9 });
  const products = data?.data || [];

  if (isLoading) {
    return (
      <section className="w-full bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="h-8 w-48 animate-pulse bg-gray-200 mx-auto mb-8 rounded" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="h-96 animate-pulse rounded-xl bg-gray-100" />
            <div className="h-96 animate-pulse rounded-xl bg-gray-100" />
            <div className="h-96 animate-pulse rounded-xl bg-gray-100" />
          </div>
        </div>
      </section>
    );
  }

  if (isError || products.length === 0) return null;

  const featuredProduct = products[0];
  const leftProducts = products.slice(1, 5);
  const rightProducts = products.slice(5, 9);

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-10">
          <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-blue-600">
            For Your Business
          </span>
          <h2 className="text-2xl font-black tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            Handpicked Items
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs text-gray-500 sm:text-sm">
            Carefully selected products from trusted suppliers for your
            business.
          </p>
        </div>

        {/* Main Grid: Adjusted Layout Proportions */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1.6fr_1.2fr]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {leftProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>

          {/* Center Banner (Featured Item) */}
          {featuredProduct && (
            <div className="flex flex-col overflow-hidden rounded-2xl border-2 border-[#febb13] bg-white">
              <div className="relative flex min-h-[260px] flex-1 items-center justify-center bg-gray-50/50 p-6">
                <span className="absolute left-4 top-4 rounded-full bg-[#febb13] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-900">
                  Featured
                </span>
                <Image
                  src={featuredProduct.images?.[0]?.url || "/placeholder.png"}
                  alt={featuredProduct.name || "Product"}
                  width={300}
                  height={300}
                  priority
                  className="max-h-[240px] w-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-5 text-center">
                <ProductRating
                  rating={featuredProduct.rating ?? 5}
                  reviews={featuredProduct?.reviewsCount ?? 0}
                />
                <h3 className="mt-2 text-base font-bold text-gray-900 line-clamp-1">
                  {featuredProduct.name}
                </h3>
                <p className="mt-1 text-lg font-bold text-[#0055ff]">
                  ${featuredProduct.price}
                </p>
                <p className="mt-2 text-xs text-gray-500 line-clamp-2">
                  {featuredProduct.description}
                </p>
              </div>

              <button className="mt-auto flex h-12 w-full items-center justify-center bg-blue-600 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-blue-700">
                Select Options
              </button>
            </div>
          )}

          {/* Right Side (2x2 Grid) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {rightProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
