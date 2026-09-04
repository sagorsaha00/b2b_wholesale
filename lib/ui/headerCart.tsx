import React from 'react'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

export default function HeaderCart() {
  return (
     <div className="group relative mr-1">
                <Link
                  href="/cart"
                  className="
          relative flex h-10 w-10 shrink-0 items-center justify-center
          rounded-lg text-gray-700 transition
          hover:bg-blue-50 hover:text-blue-600
        "
                >
                  <ShoppingCart size={21} />
    
                  <span
                    className="
            absolute -right-0.5 -top-0.5
            flex h-[18px] min-w-[18px] items-center justify-center
            rounded-full bg-yellow-400 px-1
            text-[10px] font-bold text-gray-900
          "
                  >
                    3
                  </span>
                </Link>
    
                <div
                  className="
          invisible absolute right-0 top-full z-50 mt-2
          w-[340px] translate-y-2 rounded-xl
          border border-gray-200 bg-white
          p-4 shadow-xl
          opacity-0 transition-all duration-200
          group-hover:visible
          group-hover:translate-y-0
          group-hover:opacity-100
        "
                >
                
                  <div className="mb-3 flex items-center justify-between border-b border-gray-100 pb-3">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">
                        Shopping Cart
                      </h3>
    
                      <p className="mt-0.5 text-xs text-gray-500">
                        3 items in your cart
                      </p>
                    </div>
    
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
                      3 Items
                    </span>
                  </div>
    
                  <div className="max-h-[300px] space-y-3 overflow-y-auto pr-1">
                    {/* Product 1 */}
                    <div className="group/item flex gap-3 rounded-lg p-2 transition hover:bg-gray-50">
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
                        <img
                          src="/product/product1.png"
                          alt="Product"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover/item:scale-105"
                        />
                      </div>
    
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-sm font-semibold text-gray-900">
                          Premium Cooking Oil
                        </h4>
    
                        <p className="mt-1 text-xs text-gray-500">
                          Qty: 2 × $25.00
                        </p>
    
                        <p className="mt-1 text-sm font-bold text-blue-600">
                          $50.00
                        </p>
                      </div>
    
                      <button
                        type="button"
                        className="self-start text-xs font-medium text-gray-400 transition hover:text-red-500"
                      >
                        Remove
                      </button>
                    </div>
    
                    {/* Product 2 */}
                    <div className="group/item flex gap-3 rounded-lg p-2 transition hover:bg-gray-50">
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
                        <img
                          src="/product/product2.png"
                          alt="Product"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover/item:scale-105"
                        />
                      </div>
    
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-sm font-semibold text-gray-900">
                          Fresh Organic Rice
                        </h4>
    
                        <p className="mt-1 text-xs text-gray-500">
                          Qty: 1 × $35.00
                        </p>
    
                        <p className="mt-1 text-sm font-bold text-blue-600">
                          $35.00
                        </p>
                      </div>
    
                      <button
                        type="button"
                        className="self-start text-xs font-medium text-gray-400 transition hover:text-red-500"
                      >
                        Remove
                      </button>
                    </div>
    
                    {/* Product 3 */}
                    <div className="group/item flex gap-3 rounded-lg p-2 transition hover:bg-gray-50">
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
                        <img
                          src="/product/product3.png"
                          alt="Product"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover/item:scale-105"
                        />
                      </div>
    
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-sm font-semibold text-gray-900">
                          Premium Wheat Flour
                        </h4>
    
                        <p className="mt-1 text-xs text-gray-500">
                          Qty: 3 × $15.00
                        </p>
    
                        <p className="mt-1 text-sm font-bold text-blue-600">
                          $45.00
                        </p>
                      </div>
    
                      <button
                        type="button"
                        className="self-start text-xs font-medium text-gray-400 transition hover:text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
    
                  {/* Summary */}
                  <div className="mt-3 border-t border-gray-100 pt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">
                        Subtotal
                      </span>
    
                      <span className="text-lg font-bold text-gray-900">
                        $130.00
                      </span>
                    </div>
    
                    <p className="mt-1 text-[11px] text-gray-400">
                      Shipping and taxes calculated at checkout
                    </p>
                  </div>
    
                  {/* Actions */}
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <Link
                      href="/cart"
                      className="
              flex h-10 items-center justify-center
              rounded-lg border border-gray-200
              text-sm font-semibold text-gray-700
              transition hover:border-blue-200
              hover:bg-blue-50 hover:text-blue-600
            "
                    >
                      View Cart
                    </Link>
    
                    <Link
                      href="/checkout"
                      className="
              flex h-10 items-center justify-center
              rounded-lg bg-blue-600
              text-sm font-semibold text-white
              transition hover:bg-blue-700
            "
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
  )
}
