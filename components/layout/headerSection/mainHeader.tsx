"use client";

import React, { useState } from "react";
import HeaderCart from "@/lib/ui/headerCart";
import Logo from "@/components/header/Logo";
import SearchTrigger from "@/components/header/SearchTrigger";
import AccountLink from "@/components/header/AccountLink";
import SearchOverlay from "@/components/header/SearchOverlay";

export default function MainHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const openSearch = () => setSearchOpen(true);
  const closeSearch = () => setSearchOpen(false);

  const handleSearch = () => {
    const value = searchValue.trim();
    if (!value) return;

    console.log("Search:", { query: value, category: selectedCategory });
    closeSearch();
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-3 sm:h-[76px] sm:gap-4 sm:px-4 lg:gap-6 lg:px-6">
          <Logo />

          <SearchTrigger
            selectedCategory={selectedCategory}
            onOpen={openSearch}
          />

          <AccountLink />

          <HeaderCart />
        </div>
      </header>

      <SearchOverlay
        open={searchOpen}
        searchValue={searchValue}
        selectedCategory={selectedCategory}
        onClose={closeSearch}
        onSearchValueChange={setSearchValue}
        onCategoryChange={setSelectedCategory}
        onSearch={handleSearch}
        onSelectSuggestion={setSearchValue}
      />
    </>
  );
}
