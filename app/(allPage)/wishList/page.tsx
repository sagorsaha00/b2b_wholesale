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
    <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:p-5">
      <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-50 sm:h-28 sm:w-28">
        <Image
          src={item?.image}
          alt={item?.name}
          width={112}
          height={112}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="line-clamp-2 text-sm font-bold leading-snug text-[#0F172A] sm:text-base">
          {item?.name}
        </h3>
        <p className="mt-1 truncate text-xs text-gray-400">{item?.supplier}</p>

        <div className="mt-2 flex items-center gap-2">
          <StarRow rating={item?.rating} size={13} />
          {item?.reviews !== undefined && (
            <span className="text-xs text-gray-400">({item?.reviews})</span>
          )}
        </div>

        <div className="mt-2 flex items-center gap-2">
          {item?.oldPrice && (
            <span className="text-xs font-medium text-gray-400 line-through">
              {item?.oldPrice}
            </span>
          )}
          <span className="text-base font-black text-[#2563EB]">
            {item?.price}
          </span>
        </div>

        {!item?.inStock && (
          <span className="mt-2 inline-block rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-bold text-red-600">
            Out of stock
          </span>
        )}
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:flex-col sm:items-stretch">
        <button
          type="button"
          disabled={!item?.inStock}
          className="flex h-10 items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-4 text-xs font-bold text-white transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
        >
          <ShoppingCart size={14} />
          Add to cart
        </button>
        <button
          type="button"
          onClick={() => onRemove?.(item?.id)}
          className="flex h-10 items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 text-xs font-bold text-gray-500 transition hover:border-red-300 hover:text-red-600"
        >
          <Heart size={14} className="fill-current" />
          Remove
        </button>
      </div>
    </div>
  );
}
