"use client";

import Image from "next/image";
import {
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Globe2,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";

interface SupplierDetailsProps {
  supplier?: {
    name?: string;
    logo?: string;
    location?: string;
    rating?: number;
    yearsOnPlatform?: number;
    foundedYear?: number;
    responseTime?: string;
    dispatchRate?: number;
    verified?: boolean;
    trending?: boolean;
    markets?: {
      name: string;
      percentage: number;
    }[];
    services?: string[];
  };

  onCompanyProfile?: () => void;
  onMoreProducts?: () => void;
}

const FALLBACK_LOGO = "/images/supplier-placeholder.png";

const DEFAULT_SUPPLIER = {
  name: "Qingdao Beemotor New Energy Vehicle Co., Ltd.",
  logo: FALLBACK_LOGO,
  location: "Qingdao, Shandong, CN",
  rating: 5,
  yearsOnPlatform: 5,
  foundedYear: 2021,
  responseTime: "≤2h",
  dispatchRate: 100,
  verified: true,
  trending: true,

  markets: [
    { name: "United States", percentage: 20 },
    { name: "Zimbabwe", percentage: 17 },
    { name: "Malaysia", percentage: 14 },
    { name: "Singapore", percentage: 13 },
    { name: "Bangladesh", percentage: 9 },
    { name: "Other", percentage: 28 },
  ],

  services: [
    "Minor customization",
    "Drawing-based customization",
    "Finished product inspection",
    "Quality traceability",
  ],
};

export default function SupplierDetails({
  supplier,
  onCompanyProfile,
  onMoreProducts,
}: SupplierDetailsProps) {
  const data = {
    ...DEFAULT_SUPPLIER,
    ...supplier,
    markets: supplier?.markets ?? DEFAULT_SUPPLIER.markets,
    services: supplier?.services ?? DEFAULT_SUPPLIER.services,
  };

  return (
    <section className="w-full bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1400px] px-3 sm:px-5 md:px-6 lg:px-8">
        {/* TITLE */}

        <div className="mb-4 sm:mb-5 lg:mb-6">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl lg:text-3xl">
            Know your supplier
          </h2>

          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            Learn more about this supplier and their quality standards.
          </p>
        </div>

        {/* MAIN SUPPLIER BOX */}

        <div className="overflow-hidden rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 via-sky-50 to-white shadow-sm sm:rounded-2xl">
          {/* =====================================================
              SUPPLIER HEADER
          ====================================================== */}

          <div className="relative p-4 sm:p-5 md:p-6 lg:p-7">
            <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              {/* SUPPLIER */}

              <div className="flex min-w-0 flex-1 flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">
                {/* LOGO */}

                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:h-20 sm:w-20 md:h-24 md:w-24">
                  <Image
                    src={data.logo || FALLBACK_LOGO}
                    alt={data.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* INFORMATION */}

                <div className="min-w-0">
                  <h3 className="text-base font-bold leading-6 text-slate-900 underline decoration-slate-300 underline-offset-4 sm:text-lg md:text-xl">
                    {data.name}
                  </h3>

                  {/* INFO ROW */}

                  <div className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-xs sm:justify-start sm:text-sm">
                    {data.verified && (
                      <span className="inline-flex items-center gap-1 font-semibold text-blue-600">
                        <BadgeCheck className="h-4 w-4" />
                        Verified
                      </span>
                    )}

                    <span className="text-slate-300">•</span>

                    <span className="text-slate-600">
                      Multispecialty Supplier
                    </span>

                    <span className="text-slate-300">•</span>

                    <span className="text-slate-600">
                      {data.yearsOnPlatform} yrs
                    </span>

                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />

                      <span className="font-semibold text-slate-700">
                        {data.rating?.toFixed(1)}
                      </span>
                    </span>
                  </div>

                  {/* LOCATION */}

                  <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-slate-600 sm:justify-start sm:text-sm">
                    <MapPin className="h-4 w-4 shrink-0" />

                    <span>Located in {data.location}</span>
                  </div>

                  {/* TRENDING */}

                  {data.trending && (
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-700 shadow-sm">
                      <Globe2 className="h-3.5 w-3.5 text-blue-600" />
                      Trending supplier
                    </div>
                  )}
                </div>
              </div>

              {/* VERIFIED */}

              <div className="mx-auto flex shrink-0 items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-2.5 text-xs font-semibold text-blue-800 shadow-sm sm:mx-0 sm:text-sm">
                <ShieldCheck className="h-5 w-5 text-blue-600" />

                <span>Verified supplier</span>
              </div>
            </div>
          </div>

          {/* =====================================================
              COMPANY OVERVIEW
          ====================================================== */}

          <div className="mx-3 mb-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm sm:mx-4 sm:mb-4 sm:p-5 md:mx-5 md:p-6 lg:mx-7 lg:mb-5">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                Company overview
              </h3>

              <button className="text-xs font-medium text-blue-600 underline underline-offset-2 sm:text-sm">
                View details
              </button>
            </div>

            {/* =================================================
                STATS
            ================================================== */}

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 md:mt-6">
              {/* DISPATCH */}

              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 sm:bg-transparent sm:p-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Truck className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs text-slate-500 sm:text-sm">
                    On-time dispatch rate
                  </p>

                  <p className="mt-0.5 text-xl font-bold text-slate-900 sm:text-2xl">
                    {data.dispatchRate}%
                  </p>
                </div>
              </div>

              {/* RESPONSE */}

              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 sm:bg-transparent sm:p-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Clock3 className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs text-slate-500 sm:text-sm">
                    Response time
                  </p>

                  <p className="mt-0.5 text-xl font-bold text-slate-900 sm:text-2xl">
                    {data.responseTime}
                  </p>
                </div>
              </div>

              {/* FOUNDED */}

              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 sm:bg-transparent sm:p-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <PackageCheck className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs text-slate-500 sm:text-sm">
                    Year founded
                  </p>

                  <p className="mt-0.5 text-xl font-bold text-slate-900 sm:text-2xl">
                    {data.foundedYear}
                  </p>
                </div>
              </div>
            </div>

            <div className="my-5 h-px bg-slate-200 sm:my-6 md:my-7" />

            {/* =================================================
                MARKETS
            ================================================== */}

            <div>
              <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                Main markets
              </h3>

              {/* BAR */}

              <div className="mt-4 flex h-8 w-full overflow-hidden rounded-lg sm:h-9">
                {data.markets.map((market, index) => (
                  <div
                    key={market.name}
                    style={{
                      width: `${market.percentage}%`,
                    }}
                    className={`
                      flex
                      items-center
                      px-1.5
                      text-[9px]
                      font-bold
                      sm:px-2
                      sm:text-xs
                      md:text-sm

                      ${
                        index === 0
                          ? "bg-blue-600 text-white"
                          : index === 1
                            ? "bg-blue-500 text-white"
                            : index === 2
                              ? "bg-sky-400 text-slate-900"
                              : index === 3
                                ? "bg-sky-300 text-slate-900"
                                : index === 4
                                  ? "bg-blue-100 text-slate-800"
                                  : "bg-slate-200 text-slate-700"
                      }
                    `}
                  >
                    {market.percentage}%
                  </div>
                ))}
              </div>

              {/* LEGEND */}

              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-5">
                {data.markets.map((market, index) => (
                  <div
                    key={market.name}
                    className="flex items-center gap-1.5 text-[11px] text-slate-600 sm:text-xs md:text-sm"
                  >
                    <span
                      className={`
                        h-2.5
                        w-2.5
                        shrink-0
                        rounded-sm

                        ${
                          index === 0
                            ? "bg-blue-600"
                            : index === 1
                              ? "bg-blue-500"
                              : index === 2
                                ? "bg-sky-400"
                                : index === 3
                                  ? "bg-sky-300"
                                  : index === 4
                                    ? "bg-blue-100"
                                    : "bg-slate-200"
                        }
                      `}
                    />

                    {market.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="my-5 h-px bg-slate-200 sm:my-6 md:my-7" />

            {/* =================================================
                QUALITY
            ================================================== */}

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                  Service & quality control
                </h3>

                <button className="text-xs font-medium text-blue-600 underline underline-offset-2 sm:text-sm">
                  View more
                </button>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {data.services.map((service) => (
                  <div
                    key={service}
                    className="flex items-start gap-2 rounded-lg bg-slate-50 p-2.5 text-xs text-slate-700 sm:bg-transparent sm:p-0 sm:text-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />

                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =====================================================
              BUTTONS
          ====================================================== */}

          <div className="grid grid-cols-1 gap-2.5 px-3 pb-4 sm:grid-cols-2 sm:px-4 sm:pb-5 md:px-5 lg:px-7">
            <button
              onClick={onCompanyProfile}
              className="
                h-11
                rounded-xl
                bg-blue-600
                text-sm
                font-bold
                text-white
                shadow-sm
                transition

                hover:bg-blue-700

                sm:h-12
              "
            >
              Company profile
            </button>

            <button
              onClick={onMoreProducts}
              className="
                h-11
                rounded-xl
                border
                border-slate-300
                bg-white
                text-sm
                font-bold
                text-slate-800
                transition

                hover:border-blue-300
                hover:bg-blue-50
                hover:text-blue-700

                sm:h-12
              "
            >
              More products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
