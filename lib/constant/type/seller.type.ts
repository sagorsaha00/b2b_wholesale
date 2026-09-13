export type VerificationStatus = "all" | "pending" | "verified" | "rejected";

export type Seller = {
  id: number;
  name?: string;
  companyName?: string;
  contactName?: string;
  email: string;
  number: string;
  businessLocation: string;
  logo: string;
  coverPhoto: string;
  role: string;
  verificationStatus: "pending" | "verified" | "rejected";
  createdAt: string;
  updatedAt: string;
};

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
