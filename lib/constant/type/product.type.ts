export interface Tier {
  id: number;
  productId: number;
  minQty: number;
  maxQty: number | null;
  unitPrice: number;
}

export interface Image {
  id: number;
  url: string;
  productId: number;
}

export interface Seller {
  id: number;
  name: string;
  email: string;
  number: string;
  businessLocation: string;
  logo: string;
  location: string;
  verified: boolean;
  verificationStatus: string;
  coverPhoto: string;
  years: number;
  companyName?: string;
  contactName?: string;
}

export interface Product {
  id: number;
  sellerId: number;
  name: string;
  image: string;
  rating: number;
  reviews: string;
  sale: boolean;
  reviewsCount: number;
  oldPrice: number;
  description: string;
  category: string;
  price: number;
  stock: number;
  unit: string;
  minimumQty: number;
  createdAt: string;
  discount: number;
  updatedAt: string;
  images: Image[];
  tiers: Tier[];
  seller: Seller;
  sku: string;
  supplierCountry: string;
  isBestSeller?: boolean;
  isNew?: boolean;
  buyable?: boolean;
  tag?: string;
}
export interface ProductCardProps {
  product: Product;
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  reviews?: number;
  sale?: boolean;
  discount?: string | number;
  description?: string;
  buyable?: boolean;
  images?: { id?: number; url: string }[];
  seller?: {
    name?: string;
    logo?: string;
  };
  image?: string;
  supplier?: string;
  supplierImage?: string;

  onAddToCart?: (product: Product) => void;
  onChatNow?: (product: Product) => void;
}
export interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface ProductsApiResponse {
  success: boolean;
  data: Product[];
  pagination: Pagination;
}

export interface FetchParams {
  page: number;
  limit?: number;
  category?: string | null;
  search?: string;
  minPrice?: string;
  maxPrice?: string;
  countryCodes?: string;
}
