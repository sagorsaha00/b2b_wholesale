"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Phone, Truck } from "lucide-react";
import type { ReactNode } from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white text-black">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                alt="markood footer logo"
                src="/logo/logo.webp"
                width={100}
                height={50}
                className="object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
              Your trusted B2B wholesale marketplace. Discover quality products,
              connect with verified suppliers and grow your business with better
              prices.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF]">
                  <MapPin className="h-4 w-4 text-[#2563EB]" />
                </div>
                Sweden
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF]">
                  <Phone className="h-4 w-4 text-[#2563EB]" />
                </div>
                +880 1234-567890
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF]">
                  <Mail className="h-4 w-4 text-[#2563EB]" />
                </div>
                support@markood.com
              </div>
            </div>
          </div>

          {/* Marketplace */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-black uppercase tracking-wider text-[#0F172A]">
              Marketplace
            </h3>

            <div className="mt-5 space-y-3">
              <FooterLink href="/products">All Products</FooterLink>
              <FooterLink href="/providers">Find Suppliers</FooterLink>
              <FooterLink href="/categories">Categories</FooterLink>
              <FooterLink href="/deals">Wholesale Deals</FooterLink>
            </div>
          </div>

          {/* Why Markood */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-black uppercase tracking-wider text-[#0F172A]">
              Why Markood
            </h3>

            <div className="mt-5 space-y-4">
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF]">
                  <Truck className="h-4 w-4 text-[#2563EB]" />
                </div>

                <div>
                  <p className="text-xs font-bold text-[#0F172A]">
                    Reliable Delivery
                  </p>

                  <p className="mt-1 text-[11px] leading-4 text-gray-500">
                    Fast business delivery
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFF8E1]">
                  <span className="text-sm font-black text-green-600">✓</span>
                </div>

                <div>
                  <p className="text-xs font-bold text-[#0F172A]">
                    Verified Suppliers
                  </p>

                  <p className="mt-1 text-[11px] leading-4 text-gray-500">
                    Trusted business partners
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="lg:col-span-2">
            <h3 className="text-sm font-black uppercase tracking-wider text-[#0F172A]">
              Support
            </h3>

            <div className="mt-5 space-y-4">
              <FooterLink href="/help">Help Center</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/shipping">Shipping Information</FooterLink>
              <FooterLink href="/returns">Returns & Refunds</FooterLink>
            </div>
          </div>

          
          <div className="lg:col-span-2">
            <h3 className="text-sm font-black uppercase tracking-wider text-[#0F172A]">
              Business
            </h3>

            <div className="mt-5 space-y-4">
              <FooterLink href="/become-provider">Become a Provider</FooterLink>

              <FooterLink href="/orders">Order Tracking</FooterLink>

              <FooterLink href="/wishList">Wishlist</FooterLink>

              <FooterLink href="/about">About Markood</FooterLink>
            </div>
          </div>
        </div>
      </div>

     
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Markood. All rights reserved.
          </p>

          
          <div className="flex items-center gap-2">
            <SocialButton>
              <span className="text-xs font-black">f</span>
            </SocialButton>

            <SocialButton>
              <span className="text-[10px] font-black">ig</span>
            </SocialButton>

            <SocialButton>
              <span className="text-[10px] font-black">in</span>
            </SocialButton>
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/privacy" className="transition hover:text-[#2563EB]">
              Privacy
            </Link>

            <span className="h-3 w-px bg-gray-300" />

            <Link href="/terms" className="transition hover:text-[#2563EB]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Footer Link */
function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-1 text-sm text-gray-500 transition-all duration-200 hover:translate-x-1 hover:text-[#2563EB]"
    >
      <ArrowRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100" />

      {children}
    </Link>
  );
}

/* Social Button */
function SocialButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition-all duration-200 hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white"
    >
      {children}
    </button>
  );
}
