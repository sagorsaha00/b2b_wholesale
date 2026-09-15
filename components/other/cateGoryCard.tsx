"use client";

import Link from "next/link";
import { Category } from "@/lib/constant/type/data.type"; // or your Category interface path

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/products/allProduct?category=${category.slug}`}
      className="group flex flex-col items-center justify-center rounded-xl border border-gray-100 bg-white p-3 text-center transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
    >
      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        <span className="text-sm font-bold">{category.name.charAt(0)}</span>
      </div>
      <span className="text-xs font-semibold text-gray-700 line-clamp-1 group-hover:text-blue-600">
        {category.name}
      </span>
    </Link>
  );
}
