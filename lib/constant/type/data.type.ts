export type MarketplaceItem = {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  badge?: string;
};

export type MarketplaceSection = {
  title: string;
  subtitle?: string;
  description: string;
  icon: React.ElementType;
  type: "blue" | "yellow" | "amber" | "purple" | string;
  items: MarketplaceItem[];
};

export type Filters = {
  countryCodes?: string[];
  categorySlug?: string | null;
  minPrice?: number | undefined;
  maxPrice?: number | undefined;
  minRating?: number | null;
  categories?: string;
};
export type RatingSummary = {
  overall: number;
  label: string;
  totalReviews: number;
  service: number;
  shipping: number;
  quality: number;
  withPhotosCount: number;
  productReviewCount: number;
  storeReviewCount: number;
};
export type WishlistItem = {
  id: string;
  name: string;
  image: string;
  price: string;
  oldPrice?: string;
  rating: number;
  reviews?: number;
  supplier: string;
  inStock: boolean;
};
export type Category = {
  slug: string;
  name: string;
  icon: string;
};

export type SellerTab =
  | "overview"
  | "products"
  | "add-product"
  | "orders"
  | "settings";
export interface NavItem {
  id: SellerTab;
  label: string;
  icon: React.ElementType;
  badge: string | number | null;
  badgeColor?: string;
}
