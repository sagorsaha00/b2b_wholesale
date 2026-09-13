"use client";

import Link from "next/link";
import { User } from "lucide-react";
import { useAuthStore } from "@/lib/dataStore/b2bStore";

export default function AccountLink() {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated) {
    return (
      <Link
        href="/dashboard"
        className="
          hidden
          shrink-0
          items-center
          gap-2
          text-sm
          font-medium
          text-gray-700
          transition-colors
          hover:text-blue-600
          sm:flex
        "
      >
        {user?.profilePic ? (
          <img
            src={user.profilePic}
            alt={user?.name || "User Avatar"}
            className="h-8 w-8 shrink-0 rounded-full object-cover"
          />
        ) : (
          <User size={20} className="shrink-0" />
        )}

        <div className="hidden lg:block">
          <p className="text-xs text-gray-400">Welcome</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/auth/login"
      className="
        hidden
        shrink-0
        items-center
        gap-2
        text-sm
        font-medium
        text-gray-700
        transition-colors
        hover:text-blue-600
        sm:flex
      "
    >
      <User size={20} className="shrink-0" />
      <div className="hidden lg:block">
        <p className="text-xs text-gray-400">Welcome</p>
        <p className="font-semibold text-gray-800">My Account</p>
      </div>
    </Link>
  );
}
