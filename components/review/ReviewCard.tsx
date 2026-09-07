import { Review } from "@/lib/constant/dummyData";
import StarRow from "@/lib/ui/starRow";
import { BadgeCheck, ThumbsUp } from "lucide-react";
import Image from "next/image";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="border-t border-gray-100 py-6 first:border-t-0">
      <div className="flex items-start gap-4">
        <div className="w-32 shrink-0 sm:w-40">
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: review.avatarColor }}
            >
              {review.initial}
            </span>
            <span className="text-sm font-bold text-[#0F172A]">
              {review.maskedName}
            </span>
          </div>

          <p className="mt-2 flex items-center gap-1.5 text-xs text-gray-500">
            <span>{review.countryFlag}</span>
            {review.country}
          </p>

          {review.verifiedPurchase && (
            <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-green-700">
              <BadgeCheck size={13} />
              Verified purchase
            </p>
          )}

          {review.repeatBuyer && (
            <span className="mt-2 inline-block rounded bg-amber-50 px-2 py-1 text-[11px] font-semibold text-amber-700">
              Repeat buyer
            </span>
          )}
        </div>

        {/* Review body */}
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <StarRow rating={review.rating} size={15} />
            <span className="shrink-0 text-xs text-gray-400">
              {review.date}
            </span>
          </div>

          {review.variantAttrs && review.variantAttrs.length > 0 && (
            <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500">
              {review.variantAttrs.map((attr) => (
                <span key={attr.label}>
                  <span className="font-semibold text-gray-600">
                    {attr.label}:
                  </span>{" "}
                  {attr.value}
                </span>
              ))}
            </p>
          )}

          <p className="mt-3 text-sm leading-6 text-gray-700">{review.text}</p>

          {review.photos && review.photos.length > 0 && (
            <div className="mt-3 flex gap-2">
              {review.photos.map((src, i) => (
                <div
                  key={i}
                  className="h-16 w-16 overflow-hidden rounded-lg border border-gray-200 bg-gray-50"
                >
                  <Image
                    src={src}
                    alt={`${review.maskedName} photo ${i + 1}`}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          <button
            type="button"
            className="mt-4 flex items-center gap-1.5 text-xs font-medium text-gray-500 transition hover:text-[#2563EB]"
          >
            <ThumbsUp size={13} />
            Helpful ({review.helpfulCount})
          </button>
        </div>
      </div>
    </div>
  );
}
