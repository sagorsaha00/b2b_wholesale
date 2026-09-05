"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";
import { useState } from "react";
import { AccountType, Benefit } from "@/lib/ui/box";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState<"buyer" | "provider">("buyer");

  return (
    <main className=" bg-white">
      <div className="mx-auto grid min-h-screen max-w-[1450px] lg:grid-cols-2">
        <motion.section
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative hidden overflow-hidden bg-[#2563EB] lg:flex"
        >
          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
                Join Markood and grow your business.
              </h1>

              <p className="mt-5 text-base leading-7 text-blue-100">
                Whether you are buying in bulk or selling wholesale, Markood
                gives your business the tools to connect, trade and grow.
              </p>

              <div className="mt-8 space-y-4">
                <Benefit text="Discover verified wholesale providers" />
                <Benefit text="Create and manage your business storefront" />
                <Benefit text="Request quotations for bulk orders" />
                <Benefit text="Manage products, orders and delivery" />
              </div>
            </div>

            <p className="text-sm text-blue-100">
              © {new Date().getFullYear()} Markood. All rights reserved.
            </p>
          </div>
        </motion.section>

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
              <div className="mb-6">
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  I want to
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <AccountType
                    active={accountType === "buyer"}
                    title="Buy Wholesale"
                    description="I want to purchase"
                    onClick={() => setAccountType("buyer")}
                  />

                  <AccountType
                    active={accountType === "provider"}
                    title="Sell Wholesale"
                    description="I am a provider"
                    onClick={() => setAccountType("provider")}
                  />
                </div>
              </div>

              <form className="space-y-4">
                {/* Name */}
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
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-50"
                    />
                  </div>
                </div>

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
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-50"
                    />
                  </div>
                </div>

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
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-12 text-sm outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-50"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
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
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-12 text-sm outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-50"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Terms */}
                <label className="flex cursor-pointer items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB]"
                  />

                  <span className="text-xs leading-5 text-slate-500">
                    I agree to Markood&apos;s{" "}
                    <Link
                      href="/terms"
                      className="font-semibold text-[#2563EB]"
                    >
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="font-semibold text-[#2563EB]"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="group mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] text-sm font-semibold text-white shadow-lg shadow-blue-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-blue-200"
                >
                  Create account
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>

              {/* Login */}
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

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
              <ShieldCheck size={15} />
              Secure registration for businesses
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
