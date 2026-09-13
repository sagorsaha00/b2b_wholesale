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
export interface BuyerFormFieldsProps {
  fullName: string;
  businessName: string;
  location: string;
  profilePicUrl: string | null;
  businessLogo: string | null;
  tradeLicenseUrl: string | null;
  nidUrl: string | null;
  uploadingProfilePic: boolean;
  uploadingBusinessLogo: boolean;
  uploadingTradeLicense: boolean;
  uploadingNid: boolean;
  onFullNameChange: (val: string) => void;
  onBusinessNameChange: (val: string) => void;
  onLocationChange: (val: string) => void;
  onProfilePicUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBusinessLogoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTradeLicenseUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNidUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveProfilePic: () => void;
  onRemoveBusinessLogo: () => void;
  onRemoveTradeLicense: () => void;
  onRemoveNid: () => void;
}
export interface SellerFormFieldsProps {
  businessName: string;
  location: string;
  logoUrl: string | null;
  coverUrl: string | null;
  uploadingLogo: boolean;
  uploadingCover: boolean;
  onBusinessNameChange: (val: string) => void;
  onLocationChange: (val: string) => void;
  onLogoUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCoverUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveLogo: () => void;
  onRemoveCover: () => void;
}
export interface LoginCredentials {
  email: string;
  password: string;
  role: "buyer" | "seller";
}
