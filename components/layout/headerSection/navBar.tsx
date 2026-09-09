"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Star,
  Store,
  ShoppingBag,
} from "lucide-react";
import { NAVIGATION_ITEMS, categories } from "@/lib/constant/navigation";
import { DealItem, MegaMenuItem } from "../../../lib/ui/item";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const [mobileMegaOpen, setMobileMegaOpen] = useState<string | null>(null);

  const toggleMobileMega = (label: string) => {
    setMobileMegaOpen((prev) => (prev === label ? null : label));
  };

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto hidden max-w-7xl items-center px-4 lg:flex">
        <div className="group relative">
          <button
            type="button"
            className="
              flex h-14 items-center gap-2
              bg-blue-600 px-6
              text-sm font-bold text-white
              transition hover:bg-blue-700
            "
          >
            <Menu className="h-5 w-5" />

            <span>All Categories</span>

            <ChevronDown
              className="
                h-4 w-4
                transition-transform duration-200
                group-hover:rotate-180
              "
            />
          </button>

          {/* Categories Dropdown */}
          <div
            className="
              invisible absolute left-0 top-full z-50
              w-[200px]
              translate-y-2
              rounded-b-xl
              border border-gray-200
              bg-white
              opacity-0
              shadow-xl
              transition-all duration-200
              group-hover:visible
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            <div className="p-3">
              {categories.map((category) => (
                <Link
                  key={"id" + category.name}
                  href={category.href}
                  className="
                    flex items-center justify-between
                    rounded-lg px-3 py-3
                    text-sm font-medium text-gray-700
                    transition
                    hover:bg-blue-50
                    hover:text-blue-600
                  "
                >
                  <span>{category.name}</span>

                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden min-w-0 flex-1 items-center md:flex">
          {NAVIGATION_ITEMS.map((item) => {
            if (!item.megaMenu) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    flex h-14 items-center
                    px-5
                    text-sm font-semibold text-gray-800
                    transition
                    hover:bg-blue-50
                    hover:text-blue-600
                  "
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="
                    flex h-14 items-center gap-1.5
                    px-5
                    text-sm font-semibold text-gray-800
                    transition
                    hover:bg-blue-50
                    hover:text-blue-600
                  "
                >
                  {item.label}

                  <ChevronDown
                    className="
                      h-3.5 w-3.5
                      transition-transform duration-200
                      group-hover:rotate-180
                    "
                  />
                </Link>

                {/* ================= PRODUCTS ================= */}
                {item.megaMenu === "products" && (
                  <div
                    className="
                      invisible absolute left-0 top-full z-50
                      w-[600px]
                      translate-y-2
                      rounded-b-xl
                      border border-gray-200
                      bg-white
                      opacity-0
                      shadow-2xl
                      transition-all duration-200
                      group-hover:visible
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <div className="p-7">
                      <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                          Marketplace
                        </p>

                        <h2 className="mt-1 text-xl font-black text-gray-900">
                          Browse Products
                        </h2>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <MegaMenuItem
                          icon={<ShoppingBag />}
                          title="All Products"
                          description="Browse all products"
                          href="/products/allProduct"
                        />

                        <MegaMenuItem
                          icon={<ShoppingBag />}
                          title="New Arrivals"
                          description="Recently added products"
                          href="/products/newArrivals"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* ================= PROVIDERS ================= */}
                {item.megaMenu === "providers" && (
                  <div
                    className="
                      invisible absolute left-0 top-full z-50
                      w-[600px]
                      translate-y-2
                      rounded-b-xl
                      border border-gray-200
                      bg-white
                      opacity-0
                      shadow-2xl
                      transition-all duration-200
                      group-hover:visible
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <div className="p-7">
                      <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                          Trusted Businesses
                        </p>

                        <h2 className="mt-1 text-xl font-black text-gray-900">
                          Find Providers
                        </h2>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <MegaMenuItem
                          icon={<Store />}
                          title="All Providers"
                          description="Browse every provider"
                          href="/provider/AllProviders"
                        />
                        <MegaMenuItem
                          icon={<Star />}
                          title="Verified Providers"
                          description="Trusted businesses"
                          href="/provider/VerifiedProviders"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* ================= DEALS ================= */}
                {item.megaMenu === "deals" && (
                  <div
                    className="
                      invisible absolute left-0 top-full z-50
                      w-[650px]
                      translate-y-2
                      rounded-b-xl
                      border border-gray-200
                      bg-white
                      opacity-0
                      shadow-2xl
                      transition-all duration-200
                      group-hover:visible
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <div className="p-7">
                      <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-yellow-600">
                          Save More
                        </p>

                        <h2 className="mt-1 text-xl font-black text-gray-900">
                          Today's Deals
                        </h2>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <DealItem
                          title="Bulk Purchase Deals"
                          description="Save when buying larger quantities"
                          href="/deal/BulkPurchaseDeals"
                        />

                        <DealItem
                          title="Provider Offers"
                          description="Special offers from providers"
                          href="/deal/ProviderOffers"
                        />

                        <DealItem
                          title="Clearance"
                          description="Limited stock at lower prices"
                          href="/deal/Clearance"
                        />

                        <DealItem
                          title="New Buyer Offers"
                          description="Special deals for new buyers"
                          href="/deal/NewBuyerOffers"
                        />
                      </div>

                      
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Become Provider */}
        <Link
          href="/become-provider"
          className="
            hidden h-14 items-center
            border-l border-gray-100
            px-5
            text-sm font-bold text-blue-600
            transition
            hover:bg-blue-50
            lg:flex
          "
        >
          Become a Provider
        </Link>
      </div>

      {/* ================= MOBILE NAVBAR ================= */}
      <div className="flex h-14 items-center justify-between px-4 lg:hidden">
        {/* All Categories */}
        <button
          type="button"
          onClick={() => setMobileCategoryOpen((prev) => !prev)}
          className="
            flex h-14 items-center gap-2
            bg-blue-600
            px-4
            text-sm font-bold text-white
          "
        >
          {mobileCategoryOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}

          <span className="hidden sm:inline">All Categories</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="
            flex h-10 w-10
            items-center justify-center
            rounded-lg
            text-gray-800
            transition
            hover:bg-gray-100
          "
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* ================= MOBILE CATEGORIES ================= */}
      {mobileCategoryOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="p-3">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                onClick={() => setMobileCategoryOpen(false)}
                className="
                  flex items-center justify-between
                  rounded-lg
                  px-3 py-3
                  text-sm font-medium text-gray-700
                  transition
                  hover:bg-blue-50
                  hover:text-blue-600
                "
              >
                <span>{category.name}</span>

                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="max-h-[calc(100vh-56px)] overflow-y-auto px-4 py-3">
            {NAVIGATION_ITEMS.map((item) => {
              if (!item.megaMenu) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="
                      flex items-center justify-between
                      border-b border-gray-100
                      px-2 py-4
                      text-sm font-semibold text-gray-800
                      transition
                      hover:text-blue-600
                    "
                  >
                    {item.label}

                    <ArrowRight className="h-4 w-4" />
                  </Link>
                );
              }

              return (
                <div key={item.label} className="border-b border-gray-100">
                  <button
                    type="button"
                    onClick={() => toggleMobileMega(item.label)}
                    className="
                      flex w-full items-center justify-between
                      px-2 py-4
                      text-sm font-semibold text-gray-800
                    "
                  >
                    <span>{item.label}</span>

                    <ChevronDown
                      className={`
                        h-4 w-4
                        transition-transform duration-200
                        ${mobileMegaOpen === item.label ? "rotate-180" : ""}
                      `}
                    />
                  </button>

                  {/* Mobile Products */}
                  {item.megaMenu === "products" &&
                    mobileMegaOpen === item.label && (
                      <div className="pb-4 pl-2">
                        <Link
                          href="/products/allProduct"
                          className="block rounded-lg px-3 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                        >
                          All Products
                        </Link>

                        <Link
                          href="/products/newArrivals"
                          className="block rounded-lg px-3 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                        >
                          New Arrivals
                        </Link>
                      </div>
                    )}

                  {item.megaMenu === "providers" &&
                    mobileMegaOpen === item.label && (
                      <div className="pb-4 pl-2">
                        <Link
                          href="/providers"
                          className="block rounded-lg px-3 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                        >
                          All Providers
                        </Link>

                        <Link
                          href="/providers/verified"
                          className="block rounded-lg px-3 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                        >
                          Verified Providers
                        </Link>
                      </div>
                    )}

                  {item.megaMenu === "deals" &&
                    mobileMegaOpen === item.label && (
                      <div className="pb-4 pl-2">
                        <Link
                          href="/deal/BulkPurchaseDeals"
                          className="block rounded-lg px-3 py-3 text-sm text-gray-600 hover:bg-yellow-50 hover:text-yellow-600"
                        >
                          Bulk Purchase Deals
                        </Link>

                        <Link
                          href="/deal/ProviderOffers"
                          className="block rounded-lg px-3 py-3 text-sm text-gray-600 hover:bg-yellow-50 hover:text-yellow-600"
                        >
                          Provider Offers
                        </Link>

                        <Link
                          href="/deal/Clearance"
                          className="block rounded-lg px-3 py-3 text-sm text-gray-600 hover:bg-yellow-50 hover:text-yellow-600"
                        >
                          Clearance
                        </Link>

                        <Link
                          href="/deal/NewBuyerOffers"
                          className="block rounded-lg px-3 py-3 text-sm text-gray-600 hover:bg-yellow-50 hover:text-yellow-600"
                        >
                          New Buyer Offers
                        </Link>

                        <div className="mt-2 rounded-lg bg-yellow-50 p-4">
                          <p className="text-sm font-black text-gray-900">
                            🔥 Limited Time Offers
                          </p>

                          <p className="mt-1 text-xs text-gray-600">
                            Don't miss today's wholesale deals.
                          </p>
                        </div>
                      </div>
                    )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
