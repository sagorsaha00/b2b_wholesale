"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { products } from "@/lib/constant/dummyData";

export default function B2BRelated() {
  const router = useRouter();

  const handleProductClick = (id: number) => {
    router.push(`/${id}`);
  };

  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-[1250px] px-3 sm:px-5 md:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-5 flex items-end justify-between gap-4 sm:mb-6">
          <div>
            <div className="mb-1.5 flex items-center gap-2">
              <span className="h-5 w-1 rounded-full bg-blue-600 sm:h-6" />

              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
                Related Products
              </h2>
            </div>

            <p className="text-xs text-slate-500 sm:text-sm">
              Explore products you may also like
            </p>
          </div>

          {/* Desktop view all */}

          <button
            type="button"
            className="
              hidden
              shrink-0
              items-center
              gap-1
              rounded-lg
              px-3
              py-2
              text-sm
              font-semibold
              text-blue-600
              transition
              hover:bg-blue-50
              sm:flex
            "
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* =====================================================
            PRODUCT GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-2
            gap-3

            sm:grid-cols-3
            sm:gap-4

            md:grid-cols-4
            md:gap-5

            lg:grid-cols-5

            xl:grid-cols-6
          "
        >
          {products.map((product) => (
            <article
              key={product.id}
              onClick={() => handleProductClick(product.id as number)}
              className="
                group
                flex
                min-w-0
                cursor-pointer
                flex-col
                overflow-hidden
                rounded-xl
                border
                border-slate-200
                bg-white
                p-2.5

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-blue-200
                hover:shadow-lg
                hover:shadow-blue-100/50

                sm:rounded-2xl
                sm:p-3
              "
            >
              {/* =================================================
                  IMAGE
              ================================================== */}

              <div
                className="
                  relative
                  aspect-square
                  w-full
                  overflow-hidden
                  rounded-lg
                  bg-slate-50

                  sm:rounded-xl
                "
              >
                {/* Image */}

                <Image
                  src={product.image || "/images/product-placeholder.png"}
                  alt={product.name || "Product"}
                  fill
                  sizes="
                    (max-width: 640px) 45vw,
                    (max-width: 768px) 30vw,
                    (max-width: 1024px) 23vw,
                    (max-width: 1280px) 19vw,
                    16vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* Image overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/10
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* Product icon */}

                <div
                  className="
                    absolute
                    right-2
                    top-2
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-white/90
                    text-slate-600
                    opacity-0
                    shadow-sm
                    backdrop-blur
                    transition-all
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  <ShoppingBag className="h-3.5 w-3.5" />
                </div>
              </div>

              {/* =================================================
                  PRODUCT INFO
              ================================================== */}

              <div className="flex flex-1 flex-col pt-2.5 sm:pt-3">
                {/* Product name */}

                <h3
                  className="
                    line-clamp-2
                    min-h-[36px]
                    text-xs
                    font-semibold
                    leading-5
                    text-slate-800

                    transition-colors
                    group-hover:text-blue-600

                    sm:min-h-[40px]
                    sm:text-sm
                    sm:leading-5
                  "
                >
                  {product.name}
                </h3>

                {/* Price */}

                <div className="mt-2 flex items-center justify-between gap-2">
                  <p
                    className="
                      min-w-0
                      truncate
                      text-sm
                      font-bold
                      text-slate-900

                      sm:text-base
                    "
                  >
                    {product.price}
                  </p>

                  {/* Small arrow */}

                  <span
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-50
                      text-blue-600
                      transition-all
                      duration-300

                      group-hover:bg-blue-600
                      group-hover:text-white
                    "
                  >
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================================
            MOBILE VIEW ALL
        ====================================================== */}

        <button
          type="button"
          className="
            mt-5
            flex
            h-10
            w-full
            items-center
            justify-center
            gap-1.5
            rounded-xl
            border
            border-blue-200
            bg-blue-50
            text-xs
            font-semibold
            text-blue-600

            transition

            hover:bg-blue-100

            sm:hidden
          "
        >
          View all products
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </section>
  );
}
