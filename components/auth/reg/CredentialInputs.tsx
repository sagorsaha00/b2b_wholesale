"use client";

import { Eye, EyeOff, LockKeyhole, Mail, Phone } from "lucide-react";

interface Props {
  email: string;
  phone: string;
  password: Record<string, string>;
  showPass: boolean;
  showConfirmPass: boolean;
  agreeToTerms: boolean;
  onFieldChange: (field: string, val: any) => void;
  setShowPass: (val: boolean) => void;
  setShowConfirmPass: (val: boolean) => void;
}

export function CredentialInputs({
  email,
  phone,
  password,
  showPass,
  showConfirmPass,
  agreeToTerms,
  onFieldChange,
  setShowPass,
  setShowConfirmPass,
}: Props) {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Email
          </label>
          <div className="group relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2563EB]"
            />
            <input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => onFieldChange("email", e.target.value)}
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-3 text-sm outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-50"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Phone
          </label>
          <div className="group relative">
            <Phone
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2563EB]"
            />
            <input
              type="tel"
              placeholder="+46 70 000 0000"
              value={phone}
              onChange={(e) => onFieldChange("phone", e.target.value)}
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-3 text-sm outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-50"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Password
        </label>
        <div className="group relative">
          <LockKeyhole
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2563EB]"
          />
          <input
            type={showPass ? "text" : "password"}
            placeholder="Create a strong password"
            value={password.password}
            onChange={(e) => onFieldChange("password", e.target.value)}
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-12 text-sm outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-50"
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
          >
            {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Confirm password
        </label>
        <div className="group relative">
          <LockKeyhole
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2563EB]"
          />
          <input
            type={showConfirmPass ? "text" : "password"}
            placeholder="Confirm your password"
            value={password.confirmPassword}
            onChange={(e) => onFieldChange("confirmPassword", e.target.value)}
            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-12 text-sm outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-50"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPass(!showConfirmPass)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
          >
            {showConfirmPass ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <label className="flex cursor-pointer items-start gap-3 pt-1">
        <input
          type="checkbox"
          checked={agreeToTerms}
          onChange={(e) => onFieldChange("agreeToTerms", e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB]"
        />
        <span className="text-xs leading-5 text-slate-500">
          I agree to Markood&apos;s Terms & Conditions and Privacy Policy.
        </span>
      </label>
    </>
  );
}
