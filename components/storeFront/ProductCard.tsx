"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from "@/lib/constant/type/seller.type";

interface ProductCardProps {
  product: Product;
  view: "grid" | "list";
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, view }) => {
  if (view === "list") {
    return (
      <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center">
        <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-lg bg-gray-50 sm:w-24">
          <Image
            src="/product/product1.png"
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
            <Star size={13} className="fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-semibold">4.8</span>
            <span className="text-xs text-gray-400">(12)</span>
          </div>
        </div>

        <div className="sm:text-right">
          <p className="text-[10px] text-gray-400">Wholesale price</p>
          <p className="text-lg font-bold text-blue-600">{product.price} SEK</p>
          <p className="text-[11px] text-gray-400">MOQ: {product.minimumQty}</p>
        </div>

        <button
          type="button"
          className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 text-xs font-bold text-white transition hover:bg-blue-700"
        >
          <ShoppingCart size={15} /> Add
        </button>
      </div>
    );
  }

  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <Link
        href={`/prodcutInfo/${product.id}`}
        className="relative block h-48 overflow-hidden bg-gray-50"
      >
        <Image
          src="/product/product1.png"
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-green-600 shadow-sm">
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-blue-600 px-2.5 py-1 text-[10px] font-bold text-white">
          B2B
        </span>
      </Link>

      <div className="p-4">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
          {product.category}
        </p>

        <Link href={`/products/${product.id}`}>
          <h3 className="mt-1 line-clamp-2 min-h-[40px] text-sm font-bold text-gray-900 transition hover:text-blue-600">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2 flex items-center gap-1">
          <Star size={13} className="fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-semibold text-gray-700">4.8</span>
          <span className="text-[11px] text-gray-400">(24)</span>
        </div>

        <div className="mt-3 flex items-end justify-between">
          <div>
            <p className="text-[10px] text-gray-400">Wholesale price</p>
            <p className="text-lg font-bold text-blue-600">
              {product.price} SEK
            </p>
            <p className="text-[11px] text-gray-400">per {product.unit}</p>
          </div>

          <div className="text-right">
            <p className="text-[10px] text-gray-400">MOQ</p>
            <p className="text-xs font-bold text-gray-700">
              {product.minimumQty} units
            </p>
          </div>
        </div>

        <button
          type="button"
          className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 text-xs font-bold text-white transition hover:bg-blue-700"
        >
          <ShoppingCart size={15} /> Add to Cart
        </button>
      </div>
    </div>
  );
};
