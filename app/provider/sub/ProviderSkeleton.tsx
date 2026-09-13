import React from "react";

export const ProviderSkeleton = ({
  viewMode,
}: {
  viewMode: "grid" | "list";
}) => {
  return (
    <div
      className={
        viewMode === "grid"
          ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          : "space-y-3"
      }
    >
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
        >
          <div className="h-20 rounded-xl bg-gray-200" />
          <div className="mt-4 h-4 w-3/4 rounded bg-gray-200" />
          <div className="mt-2 h-3 w-1/2 rounded bg-gray-200" />
        </div>
      ))}
    </div>
  );
};
