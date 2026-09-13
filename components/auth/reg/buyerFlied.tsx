import { motion } from "framer-motion";
import {
  Badge,
  Building2,
  FileText,
  ImagePlus,
  Loader2,
  MapPin,
  User,
  X,
} from "lucide-react";

interface BuyerFormFieldsProps {
  fullName: string;
  businessName: string;
  location: string;
  profilePicUrl: string | null;
  businessLogoUrl: string | null; // Renamed to businessLogoUrl for clarity & consistency
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

export function BuyerFormFields({
  fullName,
  businessName,
  location,
  profilePicUrl,
  businessLogoUrl,
  tradeLicenseUrl,
  nidUrl,
  uploadingProfilePic,
  uploadingBusinessLogo,
  uploadingTradeLicense,
  uploadingNid,
  onFullNameChange,
  onBusinessNameChange,
  onLocationChange,
  onProfilePicUpload,
  onBusinessLogoUpload,
  onTradeLicenseUpload,
  onNidUpload,
  onRemoveProfilePic,
  onRemoveBusinessLogo,
  onRemoveTradeLicense,
  onRemoveNid,
}: BuyerFormFieldsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Full name
        </label>
        <div className="group relative">
          <User
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2563EB]"
          />
          <input
            type="text"
            placeholder="Your full name"
            value={fullName}
            onChange={(e) => onFullNameChange(e.target.value)}
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-50"
          />
        </div>
      </div>

      {/* Profile Photo Upload */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Profile Photo{" "}
          <span className="font-normal text-slate-400">(optional)</span>
        </label>
        {uploadingProfilePic ? (
          <div className="flex h-20 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-500">
            <Loader2 className="h-5 w-5 animate-spin text-[#2563EB]" />
            Uploading profile picture...
          </div>
        ) : profilePicUrl ? (
          <div className="relative h-20 w-full overflow-hidden rounded-xl border border-slate-200">
            <img
              src={profilePicUrl}
              alt="Profile preview"
              className="h-full w-full object-cover"
            />
            <button
              type="button"
              onClick={onRemoveProfilePic}
              className="absolute right-2 top-2 rounded-full bg-white/90 p-1 text-slate-600 shadow hover:text-red-600"
            >
              <X size={14} />
            </button>
          </div>
        ) : (
          <label className="flex h-20 w-full cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-slate-300 bg-slate-50 text-slate-400 transition hover:border-[#2563EB] hover:text-[#2563EB]">
            <ImagePlus size={18} />
            <span className="text-xs">Upload profile photo</span>
            <input
              type="file"
              accept="image/*"
              onChange={onProfilePicUpload}
              className="hidden"
            />
          </label>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Business name{" "}
          <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <div className="group relative">
          <Building2
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2563EB]"
          />
          <input
            type="text"
            placeholder="Linked business name, if any"
            value={businessName}
            onChange={(e) => onBusinessNameChange(e.target.value)}
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-50"
          />
        </div>
      </div>

      {/* Business Logo Upload */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Business Logo{" "}
          <span className="font-normal text-slate-400">(optional)</span>
        </label>
        {uploadingBusinessLogo ? (
          <div className="flex h-20 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-500">
            <Loader2 className="h-5 w-5 animate-spin text-[#2563EB]" />
            Uploading business logo...
          </div>
        ) : businessLogoUrl ? (
          <div className="relative h-20 w-full overflow-hidden rounded-xl border border-slate-200">
            <img
              src={businessLogoUrl}
              alt="Business Logo preview"
              className="h-full w-full object-cover"
            />
            <button
              type="button"
              onClick={onRemoveBusinessLogo}
              className="absolute right-2 top-2 rounded-full bg-white/90 p-1 text-slate-600 shadow hover:text-red-600"
            >
              <X size={14} />
            </button>
          </div>
        ) : (
          <label className="flex h-20 w-full cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-slate-300 bg-slate-50 text-slate-400 transition hover:border-[#2563EB] hover:text-[#2563EB]">
            <ImagePlus size={18} />
            <span className="text-xs">Upload business logo</span>
            <input
              type="file"
              accept="image/*"
              onChange={onBusinessLogoUpload}
              className="hidden"
            />
          </label>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Location{" "}
          <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <div className="group relative">
          <MapPin
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2563EB]"
          />
          <input
            type="text"
            placeholder="City, country"
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-50"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Trade License{" "}
            <span className="font-normal text-slate-400">(optional)</span>
          </label>
          {uploadingTradeLicense ? (
            <div className="flex h-24 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-500">
              <Loader2 className="h-4 w-4 animate-spin text-[#2563EB]" />
              Uploading...
            </div>
          ) : tradeLicenseUrl ? (
            <div className="relative h-24 w-full overflow-hidden rounded-xl border border-slate-200">
              <img
                src={tradeLicenseUrl}
                alt="Trade License"
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={onRemoveTradeLicense}
                className="absolute right-2 top-2 rounded-full bg-white/90 p-1 text-slate-600 shadow hover:text-red-600"
              >
                <X size={14} />
              </button>
            </div>
          ) : (
            <label className="flex h-24 w-full cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-slate-300 bg-slate-50 text-slate-400 transition hover:border-[#2563EB] hover:text-[#2563EB]">
              <FileText size={18} />
              <span className="text-xs">Upload Document</span>
              <input
                type="file"
                accept="image/*"
                onChange={onTradeLicenseUpload}
                className="hidden"
              />
            </label>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            National ID / NID{" "}
            <span className="font-normal text-slate-400">(optional)</span>
          </label>
          {uploadingNid ? (
            <div className="flex h-24 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-500">
              <Loader2 className="h-4 w-4 animate-spin text-[#2563EB]" />
              Uploading...
            </div>
          ) : nidUrl ? (
            <div className="relative h-24 w-full overflow-hidden rounded-xl border border-slate-200">
              <img
                src={nidUrl}
                alt="National ID"
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={onRemoveNid}
                className="absolute right-2 top-2 rounded-full bg-white/90 p-1 text-slate-600 shadow hover:text-red-600"
              >
                <X size={14} />
              </button>
            </div>
          ) : (
            <label className="flex h-24 w-full cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-slate-300 bg-slate-50 text-slate-400 transition hover:border-[#2563EB] hover:text-[#2563EB]">
              <Badge size={18} />
              <span className="text-xs">Upload NID</span>
              <input
                type="file"
                accept="image/*"
                onChange={onNidUpload}
                className="hidden"
              />
            </label>
          )}
        </div>
      </div>
    </motion.div>
  );
}
