"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isFetching: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  isFetching,
}) => {
  if (totalPages <= 1) return null;

  const handlePageClick = (page: number) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mt-8 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-2xl shadow-sm">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1 || isFetching}
          className="relative inline-flex items-center rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages || isFetching}
          className="relative inline-flex items-center rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Page <span className="font-semibold">{currentPage}</span> of{" "}
            <span className="font-semibold">{totalPages}</span>
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md gap-1"
            aria-label="Pagination"
          >
            <button
              onClick={() => handlePageClick(currentPage - 1)}
              disabled={currentPage === 1 || isFetching}
              className="relative inline-flex items-center rounded-lg p-2 text-gray-400 border border-gray-200 hover:bg-gray-50 disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => handlePageClick(page)}
                  disabled={isFetching}
                  className={`relative inline-flex items-center rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                    currentPage === page
                      ? "bg-blue-600 text-white"
                      : "text-gray-900 border border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => handlePageClick(currentPage + 1)}
              disabled={currentPage === totalPages || isFetching}
              className="relative inline-flex items-center rounded-lg p-2 text-gray-400 border border-gray-200 hover:bg-gray-50 disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
