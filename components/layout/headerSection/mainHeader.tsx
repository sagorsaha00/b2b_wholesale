"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  X,
  Clock3,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  contentVariants,
  itemVariants,
  listVariants,
  overlayVariants,
  searchPanelVariants,
} from "../../../lib/ui/transaction";
import { categories, recentSearches } from "@/lib/constant/navigation";
import HeaderCart from "@/lib/ui/headerCart";

export default function MainHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const inputRef = useRef<HTMLInputElement>(null);

  const openSearch = () => {
    setSearchOpen(true);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 350);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeSearch();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen]);

  const handleSearch = () => {
    const value = searchValue.trim();

    if (!value) return;

    console.log("Search:", {
      query: value,
      category: selectedCategory,
    });

    closeSearch();
  };

  const handleSearchKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const selectSuggestion = (value: string) => {
    setSearchValue(value);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center gap-6 px-4 lg:px-6">
          <Link
            href="/"
            className="shrink-0 transition-transform duration-200 hover:scale-[1.02]"
          >
            <Image
              src="/logo/logo.webp"
              alt="Markood"
              width={145}
              height={45}
              className="h-auto w-[125px] object-contain sm:w-[140px]"
              priority
            />
          </Link>

          <div className="hidden flex-1 md:block">
            <button
              type="button"
              onClick={openSearch}
              className="
                group
                flex
                h-[46px]
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
              "
            >
              <div className="flex flex-1 items-center gap-3 px-4">
                <Search
                  size={19}
                  className="shrink-0 text-gray-400 transition-colors group-hover:text-blue-600"
                />

                <span className="text-sm text-gray-400">
                  Search products, providers, categories...
                </span>
              </div>

              <div className="hidden h-full items-center border-l border-gray-200 px-4 lg:flex">
                <span className="text-sm text-gray-600">
                  {selectedCategory}
                </span>

                <ChevronDown size={15} className="ml-2 text-gray-400" />
              </div>

              <div className="flex h-full items-center bg-blue-600 px-5 text-white transition-colors hover:bg-blue-700">
                <Search size={19} />
              </div>
            </button>
          </div>

          {/* =====================================================
              MOBILE SEARCH
          ===================================================== */}

          <button
            type="button"
            onClick={openSearch}
            className="
              ml-auto
              flex
              h-10
              w-10
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
            <Search size={20} />
          </button>

          <Link
            href="/"
            className="
              hidden
              shrink-0
              items-center
              gap-2
              text-sm
              font-medium
              text-gray-700
              transition-colors
              hover:text-blue-600
              sm:flex
            "
          >
            <User size={20} />

            <div className="hidden lg:block">
              <p className="text-xs text-gray-400">Welcome</p>
              <p className="font-semibold text-gray-800">My Account</p>
            </div>
          </Link>

          <HeaderCart />
        </div>
      </header>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="fixed inset-0 z-[100]"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="
                absolute
                inset-0
                bg-black/30
                backdrop-blur-md
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
              }}
              onClick={closeSearch}
            />

            <div className="relative z-10 mx-auto w-full max-w-5xl px-3 pt-5 sm:px-6 sm:pt-8">
              <motion.div
                variants={searchPanelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="
                  overflow-hidden
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  shadow-2xl
                "
              >
                <div className="border-b border-gray-200 p-3 sm:p-4">
                  <div className="flex items-center gap-2">
                    {/* Search Icon */}

                    <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Search size={21} />
                    </div>

                    {/* Input */}

                    <div className="relative flex-1">
                      <input
                        ref={inputRef}
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyDown={handleSearchKeyDown}
                        placeholder="Search products, providers, categories..."
                        className="
                          h-[50px]
                          w-full
                          rounded-lg
                          border
                          border-gray-200
                          bg-gray-50
                          px-4
                          text-sm
                          text-gray-900
                          outline-none
                          transition
                          focus:border-blue-500
                          focus:bg-white
                          focus:ring-4
                          focus:ring-blue-500/10
                        "
                      />

                      {/* Clear */}

                      <AnimatePresence>
                        {searchValue && (
                          <motion.button
                            type="button"
                            initial={{
                              opacity: 0,
                              scale: 0.7,
                            }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                              scale: 0.7,
                            }}
                            whileTap={{
                              scale: 0.9,
                            }}
                            onClick={() => {
                              setSearchValue("");
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
                            <X size={17} />
                          </motion.button>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Category */}

                    <div className="hidden sm:block">
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="
                          h-[50px]
                          w-[180px]
                          rounded-lg
                          border
                          border-gray-200
                          bg-gray-50
                          px-3
                          text-sm
                          text-gray-600
                          outline-none
                          focus:border-blue-500
                        "
                      >
                        {categories.map((category) => (
                          <option key={"id"}>{category.name}</option>
                        ))}
                      </select>
                    </div>

                    <motion.button
                      type="button"
                      onClick={handleSearch}
                      whileHover={{
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      className="
                        flex
                        h-[50px]
                        shrink-0
                        items-center
                        gap-2
                        rounded-lg
                        bg-blue-600
                        px-4
                        font-medium
                        text-white
                        shadow-sm
                        transition-colors
                        hover:bg-blue-700
                        sm:px-5
                      "
                    >
                      <Search size={18} />

                      <span className="hidden sm:inline">Search</span>
                    </motion.button>

                    {/* Close */}

                    <motion.button
                      type="button"
                      onClick={closeSearch}
                      whileHover={{
                        rotate: 90,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="
                        flex
                        h-[42px]
                        w-[42px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        text-gray-400
                        transition
                        hover:bg-gray-100
                        hover:text-gray-700
                      "
                    >
                      <X size={21} />
                    </motion.button>
                  </div>

                  <div className="mt-3 sm:hidden">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="
                        h-[42px]
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
                      {categories.map((category) => (
                        <option key={"id"}>{category.name}</option>
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
                      exit={{
                        opacity: 0,
                        y: -10,
                      }}
                      className="p-5 sm:p-6"
                    >
                      <div className="grid gap-8 md:grid-cols-2">
                        <div>
                          <div className="mb-4 flex items-center gap-2">
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
                                onClick={() => selectSuggestion(item)}
                                whileHover={{
                                  y: -2,
                                  scale: 1.02,
                                }}
                                whileTap={{
                                  scale: 0.96,
                                }}
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
                      exit={{
                        opacity: 0,
                        y: 10,
                      }}
                      className="p-5 sm:p-6"
                    >
                      <div className="mb-5 flex items-center justify-between">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                            Search results
                          </p>

                          <h3 className="mt-1 text-lg font-semibold text-gray-900">
                            Search for "{searchValue}"
                          </h3>
                        </div>

                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
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
    </>
  );
}
