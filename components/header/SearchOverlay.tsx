"use client";

import { useEffect, useRef } from "react";
import { Search, X, Clock3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  contentVariants,
  itemVariants,
  listVariants,
  overlayVariants,
  searchPanelVariants,
} from "@/lib/ui/transaction";
import { recentSearches } from "@/lib/constant/navigation";
import { Allcategories } from "@/lib/constant/dummyData";

interface SearchOverlayProps {
  open: boolean;
  searchValue: string;
  selectedCategory: string;
  onClose: () => void;
  onSearchValueChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onSearch: () => void;
  onSelectSuggestion: (value: string) => void;
}

export default function SearchOverlay({
  open,
  searchValue,
  selectedCategory,
  onClose,
  onSearchValueChange,
  onCategoryChange,
  onSearch,
  onSelectSuggestion,
}: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => inputRef.current?.focus(), 350);
      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") onSearch();
  };

  const handleSelectSuggestion = (value: string) => {
    onSelectSuggestion(value);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100]"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="absolute inset-0 bg-black/30 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          <div className="relative z-10 mx-auto w-full max-w-5xl px-3 pt-4 sm:px-6 sm:pt-8">
            <motion.div
              variants={searchPanelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl"
            >
              <div className="border-b border-gray-200 p-2.5 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 sm:h-[50px] sm:w-[50px]">
                    <Search size={19} className="sm:size-[21px]" />
                  </div>

                  <div className="relative min-w-0 flex-1">
                    <input
                      ref={inputRef}
                      type="text"
                      value={searchValue}
                      onChange={(e) => onSearchValueChange(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Search products, providers..."
                      className="
                        h-11
                        w-full
                        rounded-lg
                        border
                        border-gray-200
                        bg-gray-50
                        px-3
                        text-sm
                        text-gray-900
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:bg-white
                        focus:ring-4
                        focus:ring-blue-500/10
                        sm:h-[50px]
                        sm:px-4
                      "
                    />

                    <AnimatePresence>
                      {searchValue && (
                        <motion.button
                          type="button"
                          initial={{ opacity: 0, scale: 0.7 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.7 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => {
                            onSearchValueChange("");
                            inputRef.current?.focus();
                          }}
                          className="
                            absolute
                            right-3
                            top-1/2
                            flex
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-full
                            p-1
                            text-gray-400
                            transition
                            hover:bg-gray-200
                            hover:text-gray-700
                          "
                        >
                          <X size={16} />
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="hidden sm:block">
                    <select
                      value={selectedCategory}
                      onChange={(e) => onCategoryChange(e.target.value)}
                      className="
                        h-[50px]
                        w-[160px]
                        rounded-lg
                        border
                        border-gray-200
                        bg-gray-50
                        px-3
                        text-sm
                        text-gray-600
                        outline-none
                        focus:border-blue-500
                        md:w-[180px]
                      "
                    >
                      {Allcategories.map((category) => (
                        <option key={category.slug}>{category.name}</option>
                      ))}
                    </select>
                  </div>

                  <motion.button
                    type="button"
                    onClick={onSearch}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    className="
                      flex
                      h-11
                      shrink-0
                      items-center
                      gap-2
                      rounded-lg
                      bg-blue-600
                      px-3
                      font-medium
                      text-white
                      shadow-sm
                      transition-colors
                      hover:bg-blue-700
                      sm:h-[50px]
                      sm:px-5
                    "
                  >
                    <Search size={17} className="sm:size-[18px]" />
                    <span className="hidden sm:inline">Search</span>
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={onClose}
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    aria-label="Close search"
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      text-gray-400
                      transition
                      hover:bg-gray-100
                      hover:text-gray-700
                      sm:h-[42px]
                      sm:w-[42px]
                    "
                  >
                    <X size={19} className="sm:size-[21px]" />
                  </motion.button>
                </div>

                <div className="mt-2.5 sm:hidden">
                  <select
                    value={selectedCategory}
                    onChange={(e) => onCategoryChange(e.target.value)}
                    className="
                      h-11
                      w-full
                      rounded-lg
                      border
                      border-gray-200
                      bg-gray-50
                      px-3
                      text-sm
                      text-gray-600
                      outline-none
                    "
                  >
                    {Allcategories.map((category) => (
                      <option key={category.slug}>{category.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {!searchValue ? (
                  <motion.div
                    key="suggestions"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -10 }}
                    className="max-h-[70vh] overflow-y-auto p-4 sm:p-6"
                  >
                    <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                      <div>
                        <div className="mb-3 flex items-center gap-2 sm:mb-4">
                          <Clock3 size={18} className="text-gray-500" />
                          <h3 className="text-sm font-semibold text-gray-900">
                            Recent Searches
                          </h3>
                        </div>

                        <motion.div
                          variants={listVariants}
                          initial="hidden"
                          animate="visible"
                          className="flex flex-wrap gap-2"
                        >
                          {recentSearches.map((item) => (
                            <motion.button
                              key={item}
                              variants={itemVariants}
                              type="button"
                              onClick={() => handleSelectSuggestion(item)}
                              whileHover={{ y: -2, scale: 1.02 }}
                              whileTap={{ scale: 0.96 }}
                              className="
                                rounded-full
                                border
                                border-gray-200
                                bg-white
                                px-3
                                py-2
                                text-xs
                                font-medium
                                text-gray-600
                                shadow-sm
                                transition
                                hover:border-blue-300
                                hover:bg-blue-50
                                hover:text-blue-600
                              "
                            >
                              {item}
                            </motion.button>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="results"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: 10 }}
                    className="max-h-[70vh] overflow-y-auto p-4 sm:p-6"
                  >
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                          Search results
                        </p>
                        <h3 className="mt-1 truncate text-base font-semibold text-gray-900 sm:text-lg">
                          Search for "{searchValue}"
                        </h3>
                      </div>

                      <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                        {selectedCategory}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
