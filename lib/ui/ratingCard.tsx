import { Star } from "lucide-react";

export default function ProductRating({ rating }: { rating: number }) {
  return (
    <div className="mt-3 flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-3.5 w-3.5 ${
            star <= rating
              ? "fill-[#febb13] text-[#febb13]"
              : "fill-transparent text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
