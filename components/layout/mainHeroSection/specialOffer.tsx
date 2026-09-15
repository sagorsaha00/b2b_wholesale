"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ProductRating from "@/lib/ui/ratingCard";
import { useDiscountedProducts } from "@/lib/hooks/useAuthMutations";
import { DiscountBadge } from "@/lib/ui/discount";

// Sub-component: Clean Card Item with Title-Only Hover Effect
export function SpecialProDuctItem({ product }: { product: any }) {
  const imageUrl =
    product.images?.[0]?.url || product.image || "/placeholder.png";

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-300">
      <DiscountBadge discount={product.discount} />

      {/* Image Container */}
      <div className="relative flex h-[220px] w-full items-center justify-center bg-gray-50/60 p-6 sm:h-[240px]">
        <Image
          src={imageUrl}
          alt={product.name ? "" + product.name : "Product Image"}
          width={200}
          height={200}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Details Box */}
      <div className="flex flex-1 flex-col p-4 text-left">
        <Link href={`/productInfo/${product.id || "#"}`}>
          {/* Text turns blue on hover */}
          <h3 className="line-clamp-2 min-h-[40px] text-sm font-bold leading-tight text-gray-900 transition-colors duration-200 group-hover:text-blue-600">
            {product.name}
          </h3>
        </Link>

        {product.description && (
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-400">
            {product.description}
          </p>
        )}

        {/* Rating */}
        <div className="mt-2">
          <ProductRating
            rating={product.rating ?? 5}
            reviews={product.reviews || product.reviewsCount || 0}
          />
        </div>

        {/* Pricing */}
        <div className="mt-3 flex items-baseline gap-1.5">
          {product.oldPrice && (
            <span className="text-xs font-medium text-gray-400 line-through">
              ${product.oldPrice}
            </span>
          )}
          <span className="text-lg font-extrabold text-blue-600">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
}

function SpecialOffer({ product }: { product: any }) {
  if (!product) return null;

  const {
    name,
    price,
    oldPrice,
    description,
    rating = 5,
    reviews,
    reviewsCount,
    images,
  } = product;

  const imageUrl = images?.[0]?.url || product.image || "/placeholder.png";

  return (
    <div className="group relative flex h-full min-h-[580px] flex-col justify-between overflow-hidden rounded-2xl border-2 border-[#febb13] bg-white shadow-sm transition-all duration-300">
      <div>
        <div className="px-7 pt-8 text-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#febb13]">
            Limited Time
          </span>
          <h2 className="mt-1 text-2xl font-black tracking-tight text-[#222222] sm:text-3xl">
            Special Offer
          </h2>
          <div className="mx-auto mt-4 h-px w-full bg-gray-100" />
        </div>

        {/* Dynamic Image */}
        <div className="relative mx-auto mt-6 flex h-[260px] w-full items-center justify-center px-8">
          <Image
            src={imageUrl}
            alt={name || "Product Image"}
            width={300}
            height={300}
            priority
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Dynamic Details */}
        <div className="mt-4 flex flex-col items-center px-6 text-center">
          <div className="mb-2">
            <ProductRating
              rating={rating}
              reviews={reviews || reviewsCount || 0}
            />
          </div>

          <h3 className="line-clamp-2 min-h-[48px] text-base font-bold leading-snug text-[#222222]">
            {name}
          </h3>

          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-black text-[#2563EB]">${price}</span>
            {oldPrice && (
              <span className="text-sm font-semibold text-gray-400 line-through">
                ${oldPrice}
              </span>
            )}
          </div>

          <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-gray-500">
            {description ||
              "High quality product selected specifically for your needs with best wholesale prices."}
          </p>
        </div>
      </div>

      {/* Action Button */}
      <button className="mt-6 h-14 w-full cursor-pointer bg-[#febb13] text-xs font-bold uppercase tracking-wider text-gray-900 transition-colors duration-300 hover:bg-[#e5a000]">
        Select Options
      </button>
    </div>
  );
}

// Main Component Section
export default function ProductSection() {
  const { data, isLoading, isError } = useDiscountedProducts(
    {
      page: 1,
      limit: 10,
      sortBy: "createdAt",
      sortOrder: "desc",
    },
    {
      refetchInterval: 10000,
      staleTime: 0,
    },
  );

  const products = (data?.data || []).slice(0, 10);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  useEffect(() => {
    if (products.length > 0) {
      setSelectedProduct((prev: any) =>
        prev && products.some((p: any) => p.id === prev.id)
          ? prev
          : products[0],
      );
    }
  }, [data]);

  if (isLoading) {
    return (
      <section className="w-full bg-white py-12">
        <div className="mx-auto max-w-[1310px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="h-64 animate-pulse rounded-xl bg-gray-100"
                />
              ))}
            </div>
            <div className="h-[580px] animate-pulse rounded-2xl bg-gray-100" />
          </div>
        </div>
      </section>
    );
  }

  if (isError || products.length === 0) return null;

  return (
    <section className="w-full bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-[1310px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_390px]">
          {/* Left Grid: 3x3 layout of products */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-3">
            {products.slice(0, 9).map((product: any) => (
              <div
                key={product.id}
                onMouseEnter={() => setSelectedProduct(product)}
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer"
              >
                <SpecialProDuctItem product={product} />
              </div>
            ))}
          </div>

          {/* Sticky Special Offer Card */}
          <div className="lg:sticky lg:top-6 lg:self-start">
            <SpecialOffer product={selectedProduct || products[0]} />
          </div>
        </div>
      </div>
    </section>
  );
}
