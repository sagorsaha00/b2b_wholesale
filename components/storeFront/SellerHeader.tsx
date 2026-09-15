"use client";

import React from "react";
import Image from "next/image";
import { BadgeCheck, MapPin, MessageCircle, Package, Star } from "lucide-react";
import { Seller } from "@/lib/constant/type/seller.type";

interface SellerHeaderProps {
  seller: Seller;
  onContactClick?: () => void;
}

export const SellerHeader: React.FC<SellerHeaderProps> = ({
  seller,
  onContactClick,
}) => {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        {/* Cover Image */}
        <div className="relative h-[180px] overflow-hidden rounded-b-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 sm:h-[220px]">
          {seller.coverPhoto ? (
            <Image
              src={seller.coverPhoto}
              alt={seller.name}
              fill
              priority
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 opacity-10">
              <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,white,transparent_45%)]" />
            </div>
          )}

          <div className="absolute bottom-5 left-5 z-10 text-white sm:bottom-7 sm:left-8">
            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-blue-100">
              Official Storefront
            </p>
            <h1 className="text-2xl font-bold sm:text-3xl">{seller.name}</h1>
          </div>
        </div>

        {/* Profile Info Row */}
        <div className="relative flex flex-col gap-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="-mt-12 flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-4 border-white bg-white shadow-md">
              <div className="relative flex h-full w-full items-center justify-center bg-blue-50">
                <Image
                  src={seller.logo || "/icon/image.png"}
                  alt={`${seller.name} Logo`}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-xl font-bold text-gray-900">
                  {seller.name}
                </h2>
                {seller.verificationStatus === "verified" || true ? (
                  <span className="flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-[11px] font-semibold text-blue-600">
                    <BadgeCheck size={13} />
                    Verified Provider
                  </span>
                ) : null}
              </div>

              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {seller.businessLocation || "N/A"}
                </span>
                <span className="flex items-center gap-1">
                  <Package size={14} />
                  {seller.products?.length || 0}+ Products
                </span>
                <span className="flex items-center gap-1">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  4.8 Store Rating
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <a
              href={`tel:${seller.number}`}
              className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <MessageCircle size={17} />
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
