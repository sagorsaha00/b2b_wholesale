export type VerificationStatus = "all" | "pending" | "verified" | "rejected";

// export type Seller = {
//   id: number;
//   name?: string;
//   companyName?: string;
//   contactName?: string;
//   email: string;
//   number: string;
//   businessLocation: string;
//   logo: string;
//   coverPhoto: string;
//   role: string;
//   verificationStatus: "pending" | "verified" | "rejected";
//   createdAt: string;
//   updatedAt: string;
// };

export type SellersApiResponse = {
  success: boolean;
  data: Seller[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
};
export interface Product {
  id: number;
  sellerId: number;
  name: string;
  description: string;
  discount: number;
  category: string;
  price: number;
  stock: number;
  unit: string;
  minimumQty: number;
  supplierCountry: string;
  createdAt: string;
  updatedAt: string;
}

export interface Seller {
  id: number;
  name: string;
  email: string;
  number: string;
  businessLocation: string;
  logo: string;
  coverPhoto: string;
  role: string;
  verificationStatus: string;
  createdAt: string;
  updatedAt: string;
  products: Product[];
  
}

export interface SellerApiResponse {
  success: boolean;
  data: Seller;
}
