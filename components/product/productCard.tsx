"use client";

import { useState } from "react";
import { AllProduct } from "@/lib/constant/data.type";
import ProductRating from "@/lib/ui/ratingCard";
import Image from "next/image";
import {
  PRODUCT_IMAGE_FALLBACK,
  SUPPLIER_IMAGE_FALLBACK,
} from "@/lib/constant/imageFallBack";
export default function ProductCardSection({
  product,
  onAddToCart,
  onChatNow,
}: {
  product: AllProduct;
  onAddToCart?: (product: AllProduct) => void;
  onChatNow?: (product: AllProduct) => void;
}) {
  const [imgSrc, setImgSrc] = useState(product.image || PRODUCT_IMAGE_FALLBACK);
  const [supplierImgSrc, setSupplierImgSrc] = useState(
    product.supplierImage || SUPPLIER_IMAGE_FALLBACK,
  );

  return (
    <div className="group relative cursor-pointer flex min-w-0 flex-col overflow-hidden border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <span className="ease absolute left-0 top-0 z-20 h-0 w-0 border-t-2 border-[#febb13] transition-all duration-200 group-hover:w-full" />
      <span className="ease absolute right-0 top-0 z-20 h-0 w-0 border-r-2 border-[#0055ff] transition-all duration-200 group-hover:h-full" />
      <span className="ease absolute bottom-0 right-0 z-20 h-0 w-0 border-b-2 border-[#febb13] transition-all duration-200 group-hover:w-full" />
      <span className="ease absolute bottom-0 left-0 z-20 h-0 w-0 border-l-2 border-[#0055ff] transition-all duration-200 group-hover:h-full" />

      <div className="relative flex h-[190px] items-center justify-center overflow-hidden bg-white p-5 sm:h-[210px]">
        {product.sale && (
          <span className="absolute right-3 top-3 z-10 rounded-sm bg-[#0055ff] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            Sale!
          </span>
        )}

        <Image
          src={imgSrc}
          alt={product.name ? "" + product.name : "Product Image"}
          width={220}
          height={220}
          unoptimized={imgSrc === PRODUCT_IMAGE_FALLBACK}
          onError={() => setImgSrc(PRODUCT_IMAGE_FALLBACK)}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col border-t border-gray-100 p-4 sm:p-5">
        <h3 className="line-clamp-2 min-h-[42px] text-sm font-semibold leading-5 text-gray-900 transition-colors duration-200 group-hover:text-[#0055ff]">
          {product.name}
        </h3>

        <ProductRating rating={product.rating ?? 0} reviews={product.reviews} />

        <div className="mt-2 flex items-center gap-2">
          {product.oldPrice && (
            <span className="text-sm font-medium text-gray-400 line-through">
              {product.oldPrice}
            </span>
          )}

          <span className="text-base font-bold text-black">
            {product.price}
          </span>
        </div>

        {product.supplier && (
          <div className="mt-2.5 flex items-center gap-2">
            <Image
              src={supplierImgSrc}
              alt={product.supplier}
              width={24}
              height={24}
              unoptimized={supplierImgSrc === SUPPLIER_IMAGE_FALLBACK}
              onError={() => setSupplierImgSrc(SUPPLIER_IMAGE_FALLBACK)}
              className="h-6 w-6 flex-shrink-0 rounded-full border border-gray-100 object-cover"
            />
            <span className="truncate text-xs text-gray-500">
              {product.supplier}
            </span>
          </div>
        )}

        <div className="relative z-30 mt-3 flex gap-2">
          {product.buyable !== false && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart?.(product);
              }}
              className="flex-1 border-[1.5px] border-[#0055ff] py-2 text-[12.5px] font-semibold text-[#0055ff] transition-colors hover:bg-[#eef4ff]"
            >
              Add to cart
            </button>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onChatNow?.(product);
            }}
            className="flex-1 border-[1.5px] border-[#0055ff] bg-[#0055ff] py-2 text-[12.5px] font-semibold text-white transition-colors hover:bg-[#0044cc]"
          >
            Chat now
          </button>
        </div>
      </div>
    </div>
  );
}
