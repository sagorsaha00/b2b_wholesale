import { SellerFormFieldsProps } from "@/lib/constant/type/userType";
import { motion } from "framer-motion";
import { Building2, ImagePlus, Loader2, MapPin, X } from "lucide-react";

export function SellerFormFields({
  location,
  logoUrl,
  coverUrl,
  uploadingLogo,
  businessName,
  uploadingCover,
  onBusinessNameChange,
  onLocationChange,
  onLogoUpload,
  onCoverUpload,
  onRemoveLogo,
  onRemoveCover,
}: SellerFormFieldsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Business name
        </label>
        <div className="group relative">
          <Building2
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2563EB]"
          />
          <input
            type="text"
            placeholder="Your business name"
            value={businessName}
            onChange={(e) => onBusinessNameChange(e.target.value)}
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-50"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Business location
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
            Business logo{" "}
            <span className="font-normal text-slate-400">(optional)</span>
          </label>
          {uploadingLogo ? (
            <div className="flex h-28 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-500">
              <Loader2 className="h-5 w-5 animate-spin text-[#2563EB]" />
              Uploading...
            </div>
          ) : logoUrl ? (
            <div className="relative h-28 w-full overflow-hidden rounded-xl border border-slate-200">
              <img
                src={logoUrl}
                alt="Logo preview"
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={onRemoveLogo}
                className="absolute right-2 top-2 rounded-full bg-white/90 p-1 text-slate-600 shadow hover:text-red-600"
              >
                <X size={14} />
              </button>
            </div>
          ) : (
            <label className="flex h-28 w-full cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-slate-300 bg-slate-50 text-slate-400 transition hover:border-[#2563EB] hover:text-[#2563EB]">
              <ImagePlus size={20} />
              <span className="text-xs">Upload logo</span>
              <input
                type="file"
                accept="image/*"
                onChange={onLogoUpload}
                className="hidden"
              />
            </label>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Cover photo{" "}
            <span className="font-normal text-slate-400">(optional)</span>
          </label>
          {uploadingCover ? (
            <div className="flex h-28 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-500">
              <Loader2 className="h-5 w-5 animate-spin text-[#2563EB]" />
              Uploading...
            </div>
          ) : coverUrl ? (
            <div className="relative h-28 w-full overflow-hidden rounded-xl border border-slate-200">
              <img
                src={coverUrl}
                alt="Cover preview"
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={onRemoveCover}
                className="absolute right-2 top-2 rounded-full bg-white/90 p-1 text-slate-600 shadow hover:text-red-600"
              >
                <X size={14} />
              </button>
            </div>
          ) : (
            <label className="flex h-28 w-full cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-slate-300 bg-slate-50 text-slate-400 transition hover:border-[#2563EB] hover:text-[#2563EB]">
              <ImagePlus size={20} />
              <span className="text-xs">Upload cover</span>
              <input
                type="file"
                accept="image/*"
                onChange={onCoverUpload}
                className="hidden"
              />
            </label>
          )}
        </div>
      </div>
    </motion.div>
  );
}
