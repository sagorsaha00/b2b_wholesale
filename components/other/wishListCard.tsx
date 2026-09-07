"use client";

import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import StarRow from "@/lib/ui/starRow";
import { WishlistItem } from "@/lib/constant/data.type";

export default function WishlistCard({
  item,
  onRemove,
}: {
  item: WishlistItem;
  onRemove?: (id: string) => void;
}) {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:p-5 md:flex-row md:items-center md:gap-5">
 
      <div className="flex h-48 w-full shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-50 md:h-28 md:w-28">
        <Image
          src={item.image || "/product/product1.png"}
          alt={item.name || "Product"}
          width={112}
          height={112}
          className="h-full w-full object-contain"
        />
      </div>

    
      <div className="min-w-0 flex-1">
        <h3 className="line-clamp-2 text-sm font-bold leading-snug text-[#0F172A] md:text-base">
          {item.name}
        </h3>

        <p className="mt-1 line-clamp-1 text-xs text-gray-400">
          {item.supplier}
        </p>

      
        <div className="mt-2 flex items-center gap-2">
          <StarRow rating={item.rating} size={13} />

          {item.reviews !== undefined && (
            <span className="text-xs text-gray-400">({item.reviews})</span>
          )}
        </div>

       
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {item.oldPrice && (
            <span className="text-xs font-medium text-gray-400 line-through">
              {item.oldPrice}
            </span>
          )}

          <span className="text-base font-black text-[#2563EB]">
            {item.price}
          </span>
        </div>

        
        {!item.inStock && (
          <div className="mt-2">
            <span className="inline-block rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-bold text-red-600">
              Out of stock
            </span>
          </div>
        )}
      </div>

      
      <div className="shrink-0 border-t border-gray-100 pt-3 md:min-w-[150px] md:border-t-0 md:border-l md:pl-5 md:pt-0">
        <h2 className="text-sm font-bold text-[#0F172A]">Provider Name</h2>

        <p className="mt-1 text-xs text-gray-400">Provider Location</p>

        <p className="mt-1 text-xs font-medium text-gray-500">
          Product Category
        </p>
      </div>

  
      <div className="flex w-full shrink-0 gap-2 md:w-auto md:flex-col">
        
        <button
          type="button"
          disabled={!item.inStock}
          className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-4 text-xs font-bold text-white transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 md:flex-none"
        >
          <ShoppingCart size={14} />
          <span>Add to cart</span>
        </button>

       
        <button
          type="button"
          onClick={() => onRemove?.(item.id)}
          className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 text-xs font-bold text-gray-500 transition hover:border-red-300 hover:text-red-600 md:flex-none"
        >
          <Heart size={14} className="fill-current" />
          <span>Remove</span>
        </button>
      </div>
    </div>
  );
}
