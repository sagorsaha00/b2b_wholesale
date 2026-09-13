"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, MapPin, ChevronRight, Phone, Mail } from "lucide-react";
import { Seller } from "@/types/seller";

interface ProviderCardProps {
  provider: Seller;
  viewMode: "grid" | "list";
}

export const ProviderCard: React.FC<ProviderCardProps> = ({
  provider,
  viewMode,
}) => {
  const isVerified = provider.verificationStatus === "verified";
  const displayName =
    provider.companyName ||
    provider.name ||
    provider.contactName ||
    "Unknown Seller";

  if (viewMode === "list") {
    return (
      <Link
        href={`/storeFront/${provider.id}`}
        className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-200 hover:border-blue-500/30 hover:shadow-md"
      >
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-blue-50">
            <Image
              src={provider.logo || "/placeholder-logo.png"}
              alt={displayName}
              fill
              sizes="56px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900">{displayName}</h3>
              {isVerified && <BadgeCheck className="h-4 w-4 text-blue-600" />}
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />{" "}
                {provider.businessLocation || "N/A"}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="h-3 w-3" /> {provider.email}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 sm:justify-end">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${
              isVerified
                ? "bg-emerald-50 text-emerald-600"
                : provider.verificationStatus === "pending"
                  ? "bg-amber-50 text-amber-600"
                  : "bg-rose-50 text-rose-600"
            }`}
          >
            {provider.verificationStatus}
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 transition-transform duration-300 group-hover:translate-x-1">
            <ChevronRight className="h-4 w-4 text-blue-600" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/storeFront/${provider.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg"
    >
      <div className="relative h-28 w-full bg-slate-100">
        {provider.coverPhoto ? (
          <Image
            src={provider.coverPhoto}
            alt={`${displayName} cover`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-r from-blue-500 to-indigo-600" />
        )}
        <span
          className={`absolute right-3 top-3 rounded-full px-2.5 py-0.5 text-[11px] font-semibold capitalize shadow-sm ${
            isVerified
              ? "bg-white text-emerald-600"
              : provider.verificationStatus === "pending"
                ? "bg-white text-amber-600"
                : "bg-white text-rose-600"
          }`}
        >
          {provider.verificationStatus}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-5">
        <div className="-mt-12 mb-3 relative h-16 w-16 overflow-hidden rounded-2xl border-2 border-white bg-white shadow-md">
          <Image
            src={provider.logo || "/placeholder-logo.png"}
            alt={displayName}
            fill
            sizes="64px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="truncate font-bold text-gray-900 group-hover:text-blue-600">
              {displayName}
            </h3>
            <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
              <MapPin className="h-3.5 w-3.5 text-gray-400" />
              <span className="truncate">
                {provider.businessLocation || "N/A"}
              </span>
            </p>
          </div>
          {isVerified && (
            <BadgeCheck className="h-5 w-5 shrink-0 text-blue-600" />
          )}
        </div>

        <div className="mt-4 space-y-2 border-t border-gray-100 pt-3 text-xs text-gray-500">
          <div className="flex items-center gap-2 truncate">
            <Mail className="h-3.5 w-3.5 text-gray-400" />
            <span className="truncate">{provider.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-gray-400" />
            <span>{provider.number}</span>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-sm font-semibold text-blue-600">
            View Store
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 transition-transform duration-300 group-hover:translate-x-1">
            <ChevronRight className="h-4 w-4 text-blue-600" />
          </div>
        </div>
      </div>
    </Link>
  );
};
