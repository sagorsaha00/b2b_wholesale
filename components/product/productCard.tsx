"use client";

import { useState } from "react";
import { AllProduct } from "@/lib/constant/data.type";
import ProductRating from "@/lib/ui/ratingCard";
import Image from "next/image";
import {
  PRODUCT_IMAGE_FALLBACK,
  SUPPLIER_IMAGE_FALLBACK,
} from "@/lib/constant/imageFallBack";
import { MessageCircle, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const [supplierImgSrc, setSupplierImgSrc] = useState(
    product.supplierImage || SUPPLIER_IMAGE_FALLBACK,
  );
  const handlePushRoute = () => {
    router.push("/productInfo/" + product.id);
  };
  return (
    <div className="group relative cursor-pointer flex min-w-0 flex-col overflow-hidden border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative flex h-[190px] items-center justify-center overflow-hidden bg-white p-5 sm:h-[210px]">
        {product.sale && (
          <span className="absolute right-3 top-3 z-10 rounded-sm bg-red-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
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
                handlePushRoute();
                onAddToCart?.(product);
              }}
              className=" cursor-pointer
        flex flex-1 items-center justify-center gap-1.5
        border-[1.5px] border-[#0055ff]
        py-2 text-[12.5px] font-semibold
        text-[#0055ff]
        transition-all duration-200
        hover:bg-[#eef4ff]
        active:scale-[0.98]
      "
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
            className=" cursor-pointer
      flex flex-1 items-center justify-center gap-1.5
      border-[1.5px] border-[#0055ff]
      bg-[#0055ff]
      py-2 text-[12.5px] font-semibold
      text-white
      transition-all duration-200
      hover:bg-[#0044cc]
      active:scale-[0.98]
    "
          >
            <MessageCircle className="h-4 w-4 shrink-0" />

            <span>Chat now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
