"use client";

import { Search, ChevronDown } from "lucide-react";

interface SearchTriggerProps {
  selectedCategory: string;
  onOpen: () => void;
}

export default function SearchTrigger({
  selectedCategory,
  onOpen,
}: SearchTriggerProps) {
  return (
    <>
      {/* Desktop / tablet search bar */}
      <div className="hidden flex-1 md:block">
        <button
          type="button"
          onClick={onOpen}
          className="
            group
            flex
            h-11
            w-full
            items-center
            overflow-hidden
            rounded-lg
            border
            border-gray-300
            bg-white
            text-left
            transition-all
            duration-200
            hover:border-blue-500
            hover:shadow-sm
            focus:outline-none
            lg:h-[46px]
          "
        >
          <div className="flex flex-1 items-center gap-2 px-3 lg:gap-3 lg:px-4">
            <Search
              size={18}
              className="shrink-0 text-gray-400 transition-colors group-hover:text-blue-600 lg:size-[19px]"
            />
            <span className="truncate text-sm text-gray-400">
              Search products, providers, categories...
            </span>
          </div>

          <div className="hidden h-full items-center border-l border-gray-200 px-4 lg:flex">
            <span className="max-w-[140px] truncate text-sm text-gray-600">
              {selectedCategory}
            </span>
            <ChevronDown size={15} className="ml-2 shrink-0 text-gray-400" />
          </div>

          <div className="flex h-full items-center bg-blue-600 px-4 text-white transition-colors hover:bg-blue-700 lg:px-5">
            <Search size={18} className="lg:size-[19px]" />
          </div>
        </button>
      </div>

      {/* Mobile search icon */}
      <button
        type="button"
        onClick={onOpen}
        aria-label="Open search"
        className="
          ml-auto
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-lg
          border
          border-gray-200
          text-gray-600
          transition
          hover:border-blue-500
          hover:text-blue-600
          md:hidden
        "
      >
        <Search size={19} />
      </button>
    </>
  );
}
