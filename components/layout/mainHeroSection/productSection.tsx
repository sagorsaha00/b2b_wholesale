"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import ProductRating from "@/lib/ui/ratingCard";
import ProductCardSection from "@/lib/ui/productCard";
type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
  oldPrice?: string;
  rating: number;
  sale?: boolean;
};

const products: Product[] = [
  {
    id: 1,
    name: "Save on Jack Link's Jerky, Teriyaki",
    image: "/product/product1.png",
    price: "$250.00",
    rating: 5,
  },
  {
    id: 2,
    name: "Finders Keepers Chocolate",
    image: "/product/product2.png",
    price: "$45.00",
    rating: 3,
  },
  {
    id: 3,
    name: "Kitchens of India Paste Chicken",
    image: "/product/product3.png",
    price: "$150.00",
    rating: 2,
  },
  {
    id: 4,
    name: "Organic Earl Grey Loose Leaf Tea",
    image: "/product/product4.png",
    price: "$34.00",
    oldPrice: "$35.00",
    rating: 0,
    sale: true,
  },
  {
    id: 5,
    name: "Premium Fresh Vegetable Box",
    image: "/product/product5.png",
    price: "$65.00",
    rating: 5,
  },
  {
    id: 6,
    name: "Fresh Cherry Tomatoes",
    image: "/product/product6.png",
    price: "$45.00",
    rating: 4,
  },
  {
    id: 7,
    name: "Organic Cashew Nuts",
    image: "/product/product7.png",
    price: "$20.00",
    rating: 5,
  },
  {
    id: 8,
    name: "Premium Organic Snacks",
    image: "/product/product3.png",
    price: "$55.00",
    rating: 4,
  },
];

export default function HandpickedItems() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       
        <div className="mb-10 text-center sm:mb-12"> 
          <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">
            For Your Business
          </span>

          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Handpicked Items
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            Carefully selected products from trusted suppliers for your
            business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-[1fr_1.5fr_1fr]">
          <div className="grid grid-cols-2 gap-4">
            <ProductCardSection product={products[0]} />
            <ProductCardSection product={products[1]} />
            <ProductCardSection product={products[2]} />
            <ProductCardSection product={products[3]} />
          </div>

          <div className="order-first flex flex-col overflow-hidden border-2 border-[#febb13] bg-white md:col-span-2 lg:order-none lg:col-span-1">
            <div className="relative flex min-h-[400px] items-center justify-center bg-white p-8 sm:min-h-[450px] lg:min-h-[500px]">
              <span className="absolute left-5 top-5 rounded-full bg-[#febb13] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-900">
                Featured
              </span>

              <Image
                src={products[6].image}
                alt={products[6].name}
                width={450}
                height={450}
                priority
                className="h-full max-h-[390px] w-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="border-t border-gray-100 px-6 py-6 text-center sm:px-8">
              <ProductRating rating={products[6].rating} />

              <h3 className="mt-3 text-base font-bold text-gray-900 sm:text-lg">
                Healthy Snack Box Variety Pack
              </h3>

              <p className="mt-2 text-lg font-bold text-[#febb13]">$20.00</p>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
                Premium quality products carefully selected for your business
                needs. Order in bulk and save more.
              </p>
            </div>

            <button className="mt-auto cursor-pointer flex h-14 items-center justify-center bg-blue-600 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-blue-400 sm:text-base">
              Select Options
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ProductCardSection product={products[4]} />
            <ProductCardSection product={products[5]} />
            <ProductCardSection product={products[7]} />
            <ProductCardSection product={products[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
