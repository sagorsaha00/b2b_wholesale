import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-1 text-sm text-gray-500 transition-all duration-200 hover:translate-x-1 hover:text-[#2563EB]"
    >
      <ArrowRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100" />

      {children}
    </Link>
  );
}

export function SocialButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition-all duration-200 hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white"
    >
      {children}
    </button>
  );
}
