import { Star } from "lucide-react";

export default function ProductRating({
  rating,
  reviews,
}: {
  rating: number;
  reviews?: number;
}) {
  return (
    <div className="mt-1.5 flex items-center gap-1">
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={13}
            className={
              i < Math.round(rating)
                ? "fill-[#febb13] text-[#febb13]"
                : "fill-gray-200 text-gray-200"
            }
          />
        ))}
      </div>
      {reviews !== undefined && (
        <span className="text-xs text-gray-400">({reviews})</span>
      )}
    </div>
  );
}
