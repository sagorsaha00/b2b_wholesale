"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";

import { products } from "@/lib/constant/dummyProduct";

const ITEMS_PER_PAGE = 6;

export default function CartPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const [cartItems, setCartItems] = useState(
    products.map((product) => ({
      ...product,
      quantity: 1,
    })),
  );

 

  const totalPages = Math.ceil(cartItems.length / ITEMS_PER_PAGE);

  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    return cartItems.slice(startIndex, endIndex);
  }, [cartItems, currentPage]);

  

  const increaseQuantity = (id: string | number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const decreaseQuantity = (id: string | number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            }
          : item,
      ),
    );
  };

  /* ================= REMOVE ================= */

  const removeProduct = (id: string | number) => {
    setCartItems((items) => {
      const updatedItems = items.filter((item) => item.id !== id);

      const newTotalPages = Math.max(
        1,
        Math.ceil(updatedItems.length / ITEMS_PER_PAGE),
      );

      if (currentPage > newTotalPages) {
        setCurrentPage(newTotalPages);
      }

      return updatedItems;
    });
  };

  const subtotal = cartItems.reduce((total, product) => {
    const price = Number(product.price) || 0;

    return total + price * product.quantity;
  }, 0);

  const delivery = subtotal > 0 ? 0 : 0;

  const total = subtotal + delivery;

  if (cartItems.length === 0) {
    return (
      <section className="min-h-[60vh] bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF8E1]">
            <ShoppingBag className="h-9 w-9 text-[#febb13]" />
          </div>

          <h2 className="mt-5 text-2xl font-black text-[#0F172A]">
            Your cart is empty
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
            You haven't added any wholesale products to your cart yet.
          </p>

          <Link
            href="/products"
            className="mt-6 flex items-center gap-2 rounded-xl bg-[#febb13] px-6 py-3 text-sm font-black text-[#0F172A] transition hover:opacity-90"
          >
            Continue Shopping
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-[1250px]">
        <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#febb13]">
              Wholesale
            </p>

            <h2 className="mt-1 text-2xl font-black text-[#0F172A] sm:text-3xl">
              Shopping Cart
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Review your wholesale products before placing the order.
            </p>
          </div>

          <div className="text-sm font-medium text-gray-500">
            {cartItems.length} {cartItems.length === 1 ? "Product" : "Products"}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_340px] xl:gap-8">
          <div className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
              {/* Table Header */}

              <div className="hidden grid-cols-[minmax(0,1fr)_120px_140px_40px] items-center gap-4 border-b border-gray-100 bg-gray-50 px-5 py-3 text-[10px] font-black uppercase tracking-[0.15em] text-gray-500 sm:grid">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span />
              </div>

              {/* Products */}

              <div>
                {currentProducts.map((product) => {
                  const price = Number(product.price) || 0;

                  const itemTotal = price * product.quantity;

                  return (
                    <div
                      key={product.id}
                      className="border-b border-gray-100 p-4 last:border-b-0 sm:p-5"
                    >
                      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-[minmax(0,1fr)_120px_140px_40px] sm:items-center sm:gap-4">
                        {/* PRODUCT */}

                        <div className="flex min-w-0 items-center gap-3">
                          <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-gray-50 sm:h-24 sm:w-24">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              sizes="96px"
                              className="object-contain p-2"
                            />
                          </div>

                          <div className="min-w-0">
                            <Link
                              href={`/products/${product.id}`}
                              className="line-clamp-2 text-sm font-black text-[#0F172A] transition hover:text-[#febb13] sm:text-base"
                            >
                              {product.name}
                            </Link>

                            <div className="mt-2 flex flex-wrap items-center gap-2">
                              <span className="rounded-full bg-[#FFF8E1] px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-[#B77900]">
                                Wholesale
                              </span>

                              <span className="text-[11px] text-gray-400">
                                MOQ: 1
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* PRICE */}

                        <div className="flex items-center justify-between sm:block">
                          <span className="text-xs text-gray-400 sm:hidden">
                            Unit Price
                          </span>

                          <span className="text-sm font-black text-[#2563EB]">
                            {product.price}
                          </span>
                        </div>

                        {/* QUANTITY */}

                        <div className="flex items-center justify-between sm:block">
                          <span className="text-xs text-gray-400 sm:hidden">
                            Quantity
                          </span>

                          <div className="flex h-10 w-fit items-center overflow-hidden rounded-lg border border-gray-200 bg-white">
                            <button
                              type="button"
                              onClick={() => decreaseQuantity(product.id)}
                              className="flex h-full w-9 items-center justify-center text-gray-500 transition hover:bg-gray-50 hover:text-[#2563EB]"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>

                            <span className="flex min-w-9 items-center justify-center text-xs font-black text-[#0F172A]">
                              {product.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() => increaseQuantity(product.id)}
                              className="flex h-full w-9 items-center justify-center text-gray-500 transition hover:bg-gray-50 hover:text-[#2563EB]"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* DELETE */}

                        <button
                          type="button"
                          onClick={() => removeProduct(product.id)}
                          className="absolute hidden text-gray-400 transition hover:text-red-500 sm:static sm:flex sm:h-9 sm:w-9 sm:items-center sm:justify-center sm:rounded-lg sm:hover:bg-red-50"
                          aria-label={`Remove ${product.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      {/* MOBILE TOTAL */}

                      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 sm:hidden">
                        <span className="text-xs text-gray-400">
                          Item Total
                        </span>

                        <div className="flex items-center gap-3">
                          <span className="text-sm font-black text-[#0F172A]">
                            {itemTotal.toFixed(2)}
                          </span>

                          <button
                            type="button"
                            onClick={() => removeProduct(product.id)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ================= PAGINATION ================= */}

            {totalPages > 1 && (
              <div className="mt-5 flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-xs text-gray-400">
                  Showing{" "}
                  <span className="font-bold text-[#0F172A]">
                    {(currentPage - 1) * ITEMS_PER_PAGE + 1}
                  </span>{" "}
                  -{" "}
                  <span className="font-bold text-[#0F172A]">
                    {Math.min(currentPage * ITEMS_PER_PAGE, cartItems.length)}
                  </span>{" "}
                  of{" "}
                  <span className="font-bold text-[#0F172A]">
                    {cartItems.length}
                  </span>{" "}
                  products
                </p>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() =>
                      setCurrentPage((page) => Math.max(1, page - 1))
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-[#febb13] hover:text-[#0F172A] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1,
                  ).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`
                        flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-xs font-black transition
                        ${
                          currentPage === page
                            ? "bg-[#febb13] text-[#0F172A]"
                            : "border border-gray-200 text-gray-500 hover:border-[#febb13] hover:text-[#0F172A]"
                        }
                      `}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() =>
                      setCurrentPage((page) => Math.min(totalPages, page + 1))
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-[#febb13] hover:text-[#0F172A] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ================= ORDER SUMMARY ================= */}

          <aside className="h-fit lg:sticky lg:top-24">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
              <h3 className="text-base font-black text-[#0F172A]">
                Order Summary
              </h3>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Products</span>

                  <span className="font-bold text-[#0F172A]">
                    {cartItems.length}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>

                  <span className="font-bold text-[#0F172A]">
                    {subtotal.toFixed(2)} SEK
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Delivery</span>

                  <span className="font-bold text-green-600">Negotiable</span>
                </div>
              </div>

              <div className="my-5 border-t border-gray-200" />

              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-[#0F172A]">
                  Estimated Total
                </span>

                <span className="text-xl font-black text-[#2563EB]">
                  {total.toFixed(2)} SEK
                </span>
              </div>

              <p className="mt-3 text-[11px] leading-5 text-gray-400">
                Final delivery charges, VAT, and wholesale adjustments may apply
                during checkout.
              </p>

              <button
                type="button"
                className="mt-5 cursor-pointer flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#febb13] px-5 text-sm font-black text-[#0F172A] transition hover:opacity-90"
              >
                Proceed to Checkout
                <ArrowRight className="h-4 w-4" />
              </button>

              <Link
                href="/"
                className="mt-3 flex h-11 w-full items-center justify-center rounded-xl border border-gray-200 bg-white text-xs font-bold text-[#0F172A] transition hover:border-[#febb13]"
              >
                Continue Shopping
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
