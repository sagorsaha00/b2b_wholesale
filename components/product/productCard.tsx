"use client";

import { useState, useEffect } from "react";
import ProductRating from "@/lib/ui/ratingCard";
import Image from "next/image";
import Link from "next/link";
import {
  PRODUCT_IMAGE_FALLBACK,
  SUPPLIER_IMAGE_FALLBACK,
} from "@/lib/constant/imageFallBack";
import { MessageCircle, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

export interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    rating?: number;
    reviews?: number;
    sale?: boolean;
    discount?: string | number;
    description?: string;
    buyable?: boolean;
    images?: { id?: number; url: string }[];
    seller?: {
      name?: string;
      logo?: string;
    };
    image?: string;
    supplier?: string;
    supplierImage?: string;
  };
  onAddToCart?: (product: any) => void;
  onChatNow?: (product: any) => void;
}

export default function ProductCardSection({
  product,
  onAddToCart,
  onChatNow,
}: ProductCardProps) {
  const router = useRouter();

  // ১. API Structure (product.images[0].url) এবং Fallback Image সেফটি
  const initialProductImg =
    product.images && product.images.length > 0
      ? product.images[0].url
      : product.image || PRODUCT_IMAGE_FALLBACK;

  const initialSupplierImg =
    product.seller?.logo || product.supplierImage || SUPPLIER_IMAGE_FALLBACK;

  const supplierName = product.seller?.name || product.supplier;

  const [imgSrc, setImgSrc] = useState<string>(initialProductImg);
  const [supplierImgSrc, setSupplierImgSrc] =
    useState<string>(initialSupplierImg);

  useEffect(() => {
    setImgSrc(initialProductImg);
    setSupplierImgSrc(initialSupplierImg);
  }, [product]);

  const handlePushRoute = () => {
    router.push(`/productInfo/${product.id}`);
  };

  return (
    <div
      onClick={handlePushRoute}
      className="group relative flex min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#2563EB]/20 hover:shadow-[0_16px_36px_rgba(37,99,235,0.08)]"
    >
      {/* Dynamic Badges */}
      <div className="absolute left-3 top-3 z-10 flex flex-col gap-1">
        {product.discount && (
          <span className="rounded-full bg-[#2563EB] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-sm">
            {product.discount}% OFF
          </span>
        )}
        {product.sale && !product.discount && (
          <span className="rounded-full bg-red-600 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-sm">
            Sale!
          </span>
        )}
      </div>

      {/* Image Showcase */}
      <div className="relative flex h-[220px] items-center justify-center bg-gradient-to-b from-gray-50/80 to-gray-50/30 p-6 sm:h-[240px]">
        <Image
          src={imgSrc}
          alt={product.name ? product.name : "Product Image"}
          width={220}
          height={220}
          unoptimized={imgSrc === PRODUCT_IMAGE_FALLBACK}
          onError={() => setImgSrc(PRODUCT_IMAGE_FALLBACK)}
          className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.07]"
        />
      </div>

      {/* Product Content Details */}
      <div className="flex flex-1 flex-col border-t border-gray-100 p-5 sm:p-6">
        <Link
          href={`/productInfo/${product.id}`}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="line-clamp-2 min-h-[48px] text-base font-bold leading-6 text-[#0F172A] transition-colors duration-200 group-hover:text-[#2563EB]">
            {product.name}
          </h3>
        </Link>

        {product.description && (
          <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-gray-500">
            {product.description}
          </p>
        )}

        {/* Rating Component */}
        <div className="mt-2.5">
          <ProductRating
            rating={product.rating ?? 0}
            reviews={product.reviews}
          />
        </div>

        {/* Price & Seller Wrapper */}
        <div className="mt-3.5 flex flex-wrap items-baseline justify-between gap-2 border-t border-gray-50 pt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-black text-[#2563EB]">
              ${product.price}
            </span>
            {product.oldPrice && (
              <span className="text-sm font-semibold text-gray-400 line-through">
                ${product.oldPrice}
              </span>
            )}
          </div>

          {supplierName && (
            <div className="flex items-center gap-1.5 rounded-full bg-gray-50 px-2.5 py-1">
              <Image
                src={supplierImgSrc}
                alt={supplierName}
                width={18}
                height={18}
                unoptimized={supplierImgSrc === SUPPLIER_IMAGE_FALLBACK}
                onError={() => setSupplierImgSrc(SUPPLIER_IMAGE_FALLBACK)}
                className="h-4.5 w-4.5 rounded-full border border-gray-200 object-cover"
              />
              <span className="max-w-[100px] truncate text-[11px] font-medium text-gray-600">
                {supplierName}
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="relative z-30 mt-4 flex gap-2">
          {product.buyable !== false && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart?.(product);
              }}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#2563EB] bg-white py-2.5 text-xs font-bold text-[#2563EB] transition-all duration-200 hover:bg-[#2563EB]/10 active:scale-[0.98]"
            >
              <ShoppingCart className="h-4 w-4 shrink-0" />
              <span>Add to cart</span>
            </button>
          )}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onChatNow?.(product);
            }}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#2563EB] bg-[#2563EB] py-2.5 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#1d4ed8] hover:shadow-md active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4 shrink-0" />
            <span>Chat now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
