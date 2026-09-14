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
}

export interface Seller {
  id: number;
  name: string;
  email: string;
  number: string;
  businessLocation: string;
  logo: string;
  verificationStatus: string;
}

export interface Product {
  id: number;
  sellerId: number;
  name: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  unit: string;
  minimumQty: number;
  createdAt: string;
  updatedAt: string;
  images: Image[];
  tiers: Tier[];
  seller: Seller;
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
