"use client";

import Link from "next/link";

import { Heart, MapPin, Store, Truck } from "lucide-react"; 

export default function TopBar() {
  return (
    <div className="hidden border-b border-gray-100 bg-white lg:block">
      <div
        className="
          mx-auto flex h-10 max-w-7xl items-center justify-between
          px-4 text-sm text-gray-600
          lg:px-6
          xl:px-8
        "
      >
        <div className="flex min-w-0 items-center gap-4 lg:gap-6">
          <div className="flex min-w-0 items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-blue-600" />

            <span className="truncate whitespace-nowrap">
              Deliver to{" "}
              <span className="font-semibold text-gray-900">Sweden</span>
            </span>
          </div>

          <span className="hidden h-4 w-px shrink-0 bg-gray-200 xl:block" />

          <span className="hidden truncate whitespace-nowrap xl:block">
            Wholesale marketplace for businesses
          </span>
        </div>

        
        <div className="flex shrink-0 items-center gap-4 lg:gap-6">
          <Link
            href="/seller"
            className="flex items-center gap-1.5 whitespace-nowrap text-blue-600 font-semibold transition hover:text-blue-700"
          >
            <Store className="h-4 w-4 shrink-0" />
            <span>Seller Portal</span>
            <span className="rounded-full bg-blue-100 px-1.5 py-0.2 text-[10px] font-bold text-blue-700">
              Admin
            </span>
          </Link>

          <span className="h-4 w-px shrink-0 bg-gray-200" />

          <Link
            href="#"
            className="flex items-center gap-2 whitespace-nowrap transition hover:text-blue-600"
          >
            <Truck className="h-4 w-4 shrink-0" />
            <span>Order Tracking</span>
          </Link>

          <Link
            href="/wishList"
            className="flex items-center gap-2 whitespace-nowrap transition hover:text-blue-600"
          >
            <Heart className="h-4 w-4 shrink-0" />
            <span>Wishlist</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
