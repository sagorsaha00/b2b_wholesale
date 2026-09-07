"use client";

import { useMemo, useState } from "react";
import { ChevronDown, ArrowUpDown } from "lucide-react";
import { ratingSummary, reviews } from "@/lib/constant/dummyData";
import StarRow from "@/lib/ui/starRow";
import ReviewCard from "./ReviewCard";

type Tab = "product" | "store";
type SortKey = "relevant" | "newest" | "highest" | "lowest";

export default function ReviewsSection() {
  const [tab, setTab] = useState<Tab>("store");
  const [photosOnly, setPhotosOnly] = useState(false);
  const [minRating, setMinRating] = useState<number | null>(null);
  const [sort, setSort] = useState<SortKey>("relevant");

  const filtered = useMemo(() => {
    let list = [...reviews];

    if (photosOnly) list = list.filter((r) => r.photos && r.photos.length > 0);
    if (minRating) list = list.filter((r) => r.rating >= minRating);

    if (sort === "newest") {
      list.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
    } else if (sort === "highest") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sort === "lowest") {
      list.sort((a, b) => a.rating - b.rating);
    }
    // "relevant" keeps original order

    return list;
  }, [photosOnly, minRating, sort]);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <h2 className="text-2xl font-black text-[#0F172A] sm:text-[28px]">
        Ratings & Reviews
      </h2>

      {/* Tabs */}
      <div className="mt-6 flex gap-8 border-b border-gray-200">
        <button
          type="button"
          onClick={() => setTab("product")}
          className={`-mb-px border-b-2 pb-3 text-sm font-bold transition ${
            tab === "product"
              ? "border-[#0F172A] text-[#0F172A]"
              : "border-transparent text-gray-400 hover:text-gray-600"
          }`}
        >
          Product reviews ({ratingSummary.productReviewCount})
        </button>
        <button
          type="button"
          onClick={() => setTab("store")}
          className={`-mb-px border-b-2 pb-3 text-sm font-bold transition ${
            tab === "store"
              ? "border-[#0F172A] text-[#0F172A]"
              : "border-transparent text-gray-400 hover:text-gray-600"
          }`}
        >
          Store reviews ({ratingSummary.storeReviewCount})
        </button>
      </div>

      {tab === "product" ? (
        <div className="py-16 text-center text-sm text-gray-400">
          No product reviews yet.
        </div>
      ) : (
        <>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="text-4xl font-black text-[#0F172A]">
              {ratingSummary.overall}
            </span>
            <StarRow rating={ratingSummary.overall} />
            <span className="text-sm font-bold text-[#0F172A]">
              {ratingSummary.label}
            </span>
            <span className="text-sm text-gray-400">
              Based on {ratingSummary.totalReviews} reviews for{" "}
              <span className="text-green-700 underline">
                verified purchases
              </span>
            </span>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>
              Service{" "}
              <span className="font-bold text-[#0F172A]">
                {ratingSummary.service}
              </span>
            </span>
            <span className="h-4 w-px bg-gray-200" />
            <span>
              Shipping{" "}
              <span className="font-bold text-[#0F172A]">
                {ratingSummary.shipping}
              </span>
            </span>
            <span className="h-4 w-px bg-gray-200" />
            <span>
              Quality{" "}
              <span className="font-bold text-[#0F172A]">
                {ratingSummary.quality}
              </span>
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setPhotosOnly(false);
                  setMinRating(null);
                }}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  !photosOnly && !minRating
                    ? "border-[#0F172A] text-[#0F172A]"
                    : "border-gray-200 text-gray-500 hover:border-gray-300"
                }`}
              >
                All
              </button>

              <button
                type="button"
                onClick={() => setPhotosOnly((v) => !v)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  photosOnly
                    ? "border-[#0F172A] text-[#0F172A]"
                    : "border-gray-200 text-gray-500 hover:border-gray-300"
                }`}
              >
                With photos/videos ({ratingSummary.withPhotosCount})
              </button>

              <div className="relative">
                <select
                  value={minRating ?? ""}
                  onChange={(e) =>
                    setMinRating(e.target.value ? Number(e.target.value) : null)
                  }
                  className="appearance-none rounded-full border border-gray-200 py-2 pl-4 pr-9 text-sm font-medium text-gray-500 hover:border-gray-300"
                >
                  <option value="">Rating</option>
                  <option value="5">5 stars</option>
                  <option value="4">4 stars & up</option>
                  <option value="3">3 stars & up</option>
                </select>
                <ChevronDown
                  size={14}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="appearance-none rounded-lg border border-gray-200 py-2 pl-9 pr-8 text-sm font-medium text-gray-600"
              >
                <option value="relevant">Most relevant</option>
                <option value="newest">Newest</option>
                <option value="highest">Highest rated</option>
                <option value="lowest">Lowest rated</option>
              </select>
              <ArrowUpDown
                size={13}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          {/* Review list */}
          <div className="mt-4">
            {filtered.length === 0 ? (
              <div className="py-16 text-center text-sm text-gray-400">
                No reviews match these filters.
              </div>
            ) : (
              filtered.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))
            )}
          </div>
        </>
      )}
    </section>
  );
}
