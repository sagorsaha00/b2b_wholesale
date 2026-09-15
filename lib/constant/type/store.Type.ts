export type UserRole = "buyer" | "seller";

export interface BusinessInfo {
  id: number;
  name: string | null;
  businessLogo: string | null;
  tradeLicense: string | null;
  userNationalId: string | null;
  createdAt?: string;
  updatedAt?: string;
}
export interface RegBuyer {
  id: number;
  name: string | null;
  email: string;
  phoneNumber: string;
  profilePic: string | null;
  location: string | null;
  role: string;
  businessInfoId: number | null;
  businessInfo?: BusinessInfo | null;
  createdAt?: string;
  updatedAt?: string;
  logo?: string;
}

export interface RegSeller {
  id: number;
  name: string;
  email: string;
  number: string;
  businessLocation: string;
  role: string;
  logo: string | null;
  profilePic: string | null;
  coverPhoto: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface FormState {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  location: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

export interface RegisterBuyerPayload {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  profilePic?: string;
  location?: string;
  businessInfo?: {
    name?: string;
    businessLogo?: string;
    tradeLicense?: string;
    userNationalId?: string;
  };
}

export interface RegisterSellerPayload {
  name: string;
  email: string;
  number: string;
  businessLocation: string;
  password: string;
  logo?: string;
  coverPhoto?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
