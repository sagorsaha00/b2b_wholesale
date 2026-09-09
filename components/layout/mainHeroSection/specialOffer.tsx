"use client";

import Image from "next/image";
import { useState } from "react";
import ProductRating from "@/lib/ui/ratingCard";
import { Product } from "@/lib/constant/data.type";
import { SpecialProDuctItem } from "@/lib/ui/productCard";
import { products } from "@/lib/constant/dummyData";

function SpecialOffer({ product }: { product: Product }) {
  return (
    <div className="group relative flex h-full min-h-[620px] flex-col overflow-hidden border-2 border-[#febb13] bg-white">
      <div className="px-7 pt-10 text-center">
        <h2 className="text-[32px] font-extrabold tracking-tight text-[#222222]">
          Special Offer
        </h2>

        <div className="mx-auto mt-4 h-px w-full bg-[#eeeeee]" />
      </div>

      <div className="relative mx-auto mt-8 flex h-[330px] w-full items-center justify-center px-10">
        <Image
          src={product.image || ""}
          alt={product.name || ""}
          width={360}
          height={360}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col items-center px-8 text-center">
        <h3 className="mt-3 max-w-[330px] text-[17px] font-bold leading-6 text-[#222222]">
          {product.name}
        </h3>

        <div className="mt-4">
          <span className="text-[20px] font-bold text-black">
            {product.price}
          </span>
        </div>

        <p className="mt-5 max-w-[360px] text-[15px] leading-6 text-[#858585]">
          Lorem Khaled Ipsum is a major key to success. Elliptical talk many
          variations passage The
        </p>
      </div>

      {/* Button */}

      <button className="mt-8 h-[58px] w-full bg-[#febb13] text-[13px] font-extrabold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-[#e5a000]">
        Select Options
      </button>
    </div>
  );
}

export default function ProductSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);

  return (
    <section className="w-full bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-[1310px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_390px]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                onMouseEnter={() => setSelectedProduct(product)}
              >
                <SpecialProDuctItem product={product} />
              </div>
            ))}
          </div>

          <div className="xl:sticky xl:top-6 xl:self-start">
            <SpecialOffer product={selectedProduct} />
          </div>
        </div>
      </div>
    </section>
  );
}
