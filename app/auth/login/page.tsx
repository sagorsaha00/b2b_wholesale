"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Loader2,
  Store,
  ShoppingBag,
} from "lucide-react";
import { useState, FormEvent } from "react";
import { useLogin } from "@/lib/hooks/useAuthMutations";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"buyer" | "seller">("buyer");
  const { mutate: login, isPending, error } = useLogin();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ email, password, role });
  };

  return (
    <main className="bg-white">
      <div className="mx-auto grid max-w-[1450px] lg:grid-cols-2">
        <motion.section
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative hidden overflow-hidden bg-[#2563EB] lg:flex"
        >
          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">
            <div className="max-w-xl">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <ShieldCheck size={16} />
                Trusted B2B Marketplace
              </span>

              <h1 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
                Connect with trusted suppliers and grow your business.
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-blue-100">
                Discover wholesale products, connect with verified providers,
                request bulk quotations, and manage your business from one
                place.
              </p>
            </div>
          </div>
        </motion.section>

        <section className="flex items-center justify-center px-5 py-10 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-[470px]"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A]">
                Sign in to your account
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Access your orders, wholesale products, quotations and business
                dashboard.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] sm:p-8">
              {/* Buyer / Seller Role Switcher */}
              <div className="mb-6 grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1">
                <button
                  type="button"
                  onClick={() => setRole("buyer")}
                  className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-semibold transition-all ${
                    role === "buyer"
                      ? "bg-white text-[#2563EB] shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  <ShoppingBag size={16} />
                  Buyer Account
                </button>

                <button
                  type="button"
                  onClick={() => setRole("seller")}
                  className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-semibold transition-all ${
                    role === "seller"
                      ? "bg-white text-[#2563EB] shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  <Store size={16} />
                  Seller Account
                </button>
              </div>

              {/* TanStack Query Error Alert */}
              {error && (
                <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                  {error.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email address
                  </label>

                  <div className="group relative">
                    <Mail
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#2563EB]"
                    />

                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-50"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-semibold text-slate-700">
                      Password
                    </label>

                    <Link
                      href="/forgot-password"
                      className="text-xs font-semibold text-[#2563EB] hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <div className="group relative">
                    <LockKeyhole
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#2563EB]"
                    />

                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-12 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-50"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB]"
                  />

                  <label htmlFor="remember" className="text-sm text-slate-500">
                    Remember me
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] text-sm font-semibold text-white shadow-lg shadow-blue-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-blue-200 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isPending ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <>
                      Sign in as {role === "buyer" ? "Buyer" : "Seller"}
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-7 border-t border-slate-100 pt-6 text-center">
                <p className="text-sm text-slate-500">
                  Don't have a Markood account?{" "}
                  <Link
                    href="/auth/register"
                    className="font-semibold text-[#2563EB] hover:underline"
                  >
                    Create account
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
