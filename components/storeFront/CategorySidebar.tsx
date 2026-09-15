"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Filter, X } from "lucide-react";
import { Allcategories } from "@/lib/constant/dummyData";

export interface Category {
  slug: string;
  name: string;
  icon: string;
}

interface CategorySidebarProps {
  activeCategory: string;
  onSelectCategory: (categoryName: string) => void;
  sellerName: string;
}

export const CategorySidebar: React.FC<CategorySidebarProps> = ({
  activeCategory,
  onSelectCategory,
  sellerName,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategorySelect = (categoryName: string) => {
    onSelectCategory(categoryName);
    setIsOpen(false); // Auto-close drawer on mobile when a category is picked
  };

  return (
    <>
      {/* Mobile & Tablet Toggle Bar */}
      <div className="mb-4 block lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white p-3.5 text-sm font-bold text-gray-900 shadow-sm"
        >
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-blue-600" />
            <span>
              Category:{" "}
              <span className="font-semibold text-blue-600">
                {activeCategory}
              </span>
            </span>
          </div>
          <ChevronDown
            size={18}
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Backdrop for Mobile Drawer */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar Content Container */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-[280px] bg-white p-5 shadow-2xl transition-transform duration-300 lg:static lg:z-auto lg:w-full lg:translate-x-0 lg:rounded-xl lg:border lg:border-gray-200 lg:p-4 lg:shadow-none
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header with Close Button for Mobile */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-gray-900">
              Store Categories
            </h3>
            <p className="mt-0.5 text-xs text-gray-500">
              Browse products from this provider
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Category List */}
        <div className="max-h-[calc(100vh-220px)] space-y-1 overflow-y-auto pr-1 lg:max-h-[420px]">
          <button
            type="button"
            onClick={() => handleCategorySelect("All Products")}
            className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
              activeCategory === "All Products"
                ? "bg-blue-50 font-semibold text-blue-600"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <span>All Products</span>
            {activeCategory === "All Products" && <ArrowRight size={15} />}
          </button>

          {Allcategories.map((category) => (
            <button
              key={category.slug}
              type="button"
              onClick={() => handleCategorySelect(category.name)}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
                activeCategory === category.name
                  ? "bg-blue-50 font-semibold text-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <span>{category.name}</span>
              {activeCategory === category.name && <ArrowRight size={15} />}
            </button>
          ))}
        </div>

        {/* About Provider Footer Section */}
        <div className="mt-6 border-t border-gray-100 pt-5">
          <h3 className="text-sm font-bold text-gray-900">About Provider</h3>
          <p className="mt-2 text-xs leading-5 text-gray-500">
            {sellerName} supplies quality wholesale products directly through
            Markood B2B Marketplace.
          </p>
          <Link
            href="#"
            className="mt-3 flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
          >
            View provider profile <ArrowRight size={13} />
          </Link>
        </div>
      </aside>
    </>
  );
};
