"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { uploadToCloudinary } from "@/lib/cloud/cloudniry";
import { BuyerFormFields } from "@/components/auth/reg/buyerFlied";
import { SellerFormFields } from "@/components/auth/reg/sellerFlied";
import { RegisterHero } from "@/components/auth/reg/RegisterHero";
import {
  AccountTypeSelector,
  AccountKind,
} from "@/components/auth/reg/AccountTypeSelector";
import { CredentialInputs } from "@/components/auth/reg/CredentialInputs";
import {
  useRegisterSeller,
  useRegisterBuyer,
} from "@/lib/hooks/useAuthMutations";
import { FormState } from "@/lib/constant/type/userType";

const initialFormState: FormState = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  location: "",
  password: "",
  confirmPassword: "",
  agreeToTerms: false,
};

export default function RegisterPage() {
  const buyerMutation = useRegisterBuyer();
  const sellerMutation = useRegisterSeller();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState<AccountKind>("buyer");
  const [form, setForm] = useState<FormState>(initialFormState);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Buyer Image States
  const [businessLogoUrl, setBusinessLogoUrl] = useState<string | null>(null);
  const [profilePicUrl, setProfilePicUrl] = useState<string | null>(null);
  const [tradeLicenseUrl, setTradeLicenseUrl] = useState<string | null>(null);
  const [nidUrl, setNidUrl] = useState<string | null>(null);

  const [uploadingBusinessLogo, setUploadingBusinessLogo] = useState(false);
  const [uploadingProfilePic, setUploadingProfilePic] = useState(false);
  const [uploadingTradeLicense, setUploadingTradeLicense] = useState(false);
  const [uploadingNid, setUploadingNid] = useState(false);

  // Seller Image States
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [coverUrl, setCoverUrl] = useState<string | null>(null);
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);

  const router = useRouter();

  const updateField = (key: string, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    folder: string,
    setLoading: (b: boolean) => void,
    setUrl: (url: string | null) => void,
    errMsg: string,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setLoading(true);
      setValidationError(null);
      const url = await uploadToCloudinary(file, folder);
      setUrl(url);
    } catch {
      setValidationError(errMsg);
    } finally {
      setLoading(false);
    }
  };

  const validate = (): string | null => {
    if (accountType === "buyer" && !form.fullName.trim())
      return "Please enter your full name.";
    if (accountType === "provider" && !form.businessName.trim())
      return "Please enter your business name.";
    if (accountType === "provider" && !form.location.trim())
      return "Business location is required.";
    if (!form.email.trim()) return "Email is required.";
    if (!form.phone.trim()) return "Phone number is required.";
    if (form.password.length < 8)
      return "Password must be at least 8 characters.";
    if (form.password !== form.confirmPassword)
      return "Passwords do not match.";
    if (!form.agreeToTerms) return "You must agree to the Terms & Conditions.";
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    const err = validate();
    if (err) return setValidationError(err);

    if (accountType === "buyer") {
      buyerMutation.mutate(
        {
          name: form.fullName,
          email: form.email,
          phoneNumber: form.phone,
          ...(profilePicUrl && { profilePic: profilePicUrl }),
          ...(form.location && { location: form.location }),
          password: form.password,
          ...(form.businessName && {
            businessInfo: {
              name: form.businessName,
              // Map state value correctly to expected backend key
              ...(businessLogoUrl && {
                businessLogoUrl,
                businessLogo: businessLogoUrl,
              }),
              ...(tradeLicenseUrl && { tradeLicense: tradeLicenseUrl }),
              ...(nidUrl && { userNationalId: nidUrl }),
            },
          }),
        },
        { onSuccess: () => router.push("/") },
      );
    } else {
      sellerMutation.mutate(
        {
          name: form.businessName,
          email: form.email,
          number: form.phone,
          businessLocation: form.location,
          password: form.password,
          ...(logoUrl && { logo: logoUrl }),
          ...(coverUrl && { coverPhoto: coverUrl }),
        },
        { onSuccess: () => router.push("/") },
      );
    }
  };

  const activeMutation =
    accountType === "buyer" ? buyerMutation : sellerMutation;
  const isSubmitting = activeMutation.isPending;
  const apiError = activeMutation.error?.message;
  const displayError = validationError || apiError;

  const isUploading =
    uploadingLogo ||
    uploadingCover ||
    uploadingBusinessLogo ||
    uploadingProfilePic ||
    uploadingTradeLicense ||
    uploadingNid;

  return (
    <main className="bg-white">
      <div className="mx-auto grid max-w-[1450px] lg:grid-cols-2">
        <RegisterHero />

        <section className="flex items-center justify-center px-5 py-10 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-[500px]"
          >
            <div className="mb-7">
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A]">
                Create your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Join thousands of businesses buying and selling on Markood.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] sm:p-8">
              <AccountTypeSelector
                accountType={accountType}
                onSelect={(type) => {
                  setAccountType(type);
                  setValidationError(null);
                  buyerMutation.reset();
                  sellerMutation.reset();
                }}
              />

              {displayError && (
                <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {displayError}
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                {accountType === "buyer" ? (
                  <BuyerFormFields
                    fullName={form.fullName}
                    businessName={form.businessName}
                    location={form.location}
                    profilePicUrl={profilePicUrl}
                    businessLogoUrl={businessLogoUrl}
                    tradeLicenseUrl={tradeLicenseUrl}
                    nidUrl={nidUrl}
                    uploadingProfilePic={uploadingProfilePic}
                    uploadingBusinessLogo={uploadingBusinessLogo}
                    uploadingTradeLicense={uploadingTradeLicense}
                    uploadingNid={uploadingNid}
                    onFullNameChange={(v) => updateField("fullName", v)}
                    onBusinessNameChange={(v) => updateField("businessName", v)}
                    onLocationChange={(v) => updateField("location", v)}
                    onProfilePicUpload={(e) =>
                      handleFileUpload(
                        e,
                        "profilePics",
                        setUploadingProfilePic,
                        setProfilePicUrl,
                        "Failed photo upload.",
                      )
                    }
                    onBusinessLogoUpload={(e) =>
                      handleFileUpload(
                        e,
                        "businessLogos",
                        setUploadingBusinessLogo,
                        setBusinessLogoUrl,
                        "Failed logo upload.",
                      )
                    }
                    onTradeLicenseUpload={(e) =>
                      handleFileUpload(
                        e,
                        "tradeLicenses",
                        setUploadingTradeLicense,
                        setTradeLicenseUrl,
                        "Failed license upload.",
                      )
                    }
                    onNidUpload={(e) =>
                      handleFileUpload(
                        e,
                        "nationalIds",
                        setUploadingNid,
                        setNidUrl,
                        "Failed NID upload.",
                      )
                    }
                    onRemoveProfilePic={() => setProfilePicUrl(null)}
                    onRemoveBusinessLogo={() => setBusinessLogoUrl(null)}
                    onRemoveTradeLicense={() => setTradeLicenseUrl(null)}
                    onRemoveNid={() => setNidUrl(null)}
                  />
                ) : (
                  <SellerFormFields
                    businessName={form.businessName}
                    location={form.location}
                    logoUrl={logoUrl}
                    coverUrl={coverUrl}
                    uploadingLogo={uploadingLogo}
                    uploadingCover={uploadingCover}
                    onBusinessNameChange={(v) => updateField("businessName", v)}
                    onLocationChange={(v) => updateField("location", v)}
                    onLogoUpload={(e) =>
                      handleFileUpload(
                        e,
                        "logos",
                        setUploadingLogo,
                        setLogoUrl,
                        "Failed logo upload.",
                      )
                    }
                    onCoverUpload={(e) =>
                      handleFileUpload(
                        e,
                        "coverPhotos",
                        setUploadingCover,
                        setCoverUrl,
                        "Failed cover upload.",
                      )
                    }
                    onRemoveLogo={() => setLogoUrl(null)}
                    onRemoveCover={() => setCoverUrl(null)}
                  />
                )}

                <CredentialInputs
                  email={form.email}
                  phone={form.phone}
                  password={{
                    password: form.password,
                    confirmPassword: form.confirmPassword,
                  }}
                  showPass={showPassword}
                  showConfirmPass={showConfirmPassword}
                  agreeToTerms={form.agreeToTerms}
                  onFieldChange={updateField}
                  setShowPass={setShowPassword}
                  setShowConfirmPass={setShowConfirmPassword}
                />

                <button
                  type="submit"
                  disabled={isSubmitting || isUploading}
                  className="group mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] text-sm font-semibold text-white shadow-lg shadow-blue-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Creating account..." : "Create account"}
                  {!isSubmitting && !isUploading && (
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  )}
                </button>
              </form>

              <div className="mt-7 border-t border-slate-100 pt-6 text-center">
                <p className="text-sm text-slate-500">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-semibold text-[#2563EB] hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-[#0F172A] gap-2 text-xs text-slate-400">
              <ShieldCheck size={15} /> Secure registration for businesses
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
