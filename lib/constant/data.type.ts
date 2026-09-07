export interface Product {
  id: number | string;
  name?: string;
  title?: string;
  image?: string;
  price: string;
  oldPrice?: string;
  rating?: number;
  reviews?: number;
  discount?: number;
  sale?: boolean;
  moq?: string;
  supplier?: string;
  countryCode?: string;
  years?: number;
  verified?: boolean;
  super?: boolean;
  category?: string;
}

export type MarketplaceItem = {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
};

export type MarketplaceSection = {
  title: string;
  description: string;
  icon: React.ElementType;
  type: "blue" | "yellow";
  items: MarketplaceItem[];
};
export type AllProduct = {
  id: string;
  name: string;
  image: string;
  price: string;
  oldPrice?: string;
  sale?: boolean;
  rating: number;
  reviews?: number;
  category: string;
  countryCode: string;
  verified: boolean;
  moq?: string;
  supplier?: string;
  supplierImage?: string;
  years?: number;
  buyable?: boolean;
  isNew?: boolean;
  isTopProduct?: boolean;
  isBestSeller?: boolean;
};

export type Filters = {
  countryCodes: string[];
  categorySlug: string | null;
  verifiedOnly: boolean;
  minRating: number | null;
  minPrice: string;
  maxPrice: string;
  categories: string;
};
export type RatingSummary = {
  overall: number;
  label: string; // "Satisfied", "Excellent" etc.
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
