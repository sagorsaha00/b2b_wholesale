"use client";

import WishlistCard from "@/components/other/wishListCard";
import { wishlistItems } from "@/lib/constant/dummyData";

export default function WishlistSection() {
  return (
    <section className="w-full">
      <div className="flex w-full flex-col gap-4">
        {wishlistItems.map((item) => (
          <WishlistCard
            key={item.id}
            item={item}
            onRemove={(id) => {
              console.log("Remove wishlist item:", id);
            }}
          />
        ))}
      </div>
    </section>
  );
}
