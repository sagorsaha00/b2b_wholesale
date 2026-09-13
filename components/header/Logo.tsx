"use client";

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      className="shrink-0 transition-transform duration-200 hover:scale-[1.02]"
    >
      <Image
        src="/logo/logo.webp"
        alt="Markood"
        width={145}
        height={45}
        className="h-auto w-[105px] object-contain xs:w-[115px] sm:w-[140px]"
        priority
      />
    </Link>
  );
}
