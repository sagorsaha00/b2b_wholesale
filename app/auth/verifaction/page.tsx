"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  CheckCircle2,
  FileCheck2,
  FileText,
  Globe,
  HelpCircle,
  Info,
  MapPin,
  ShieldCheck,
  Upload,
  User,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { Benefit } from "@/lib/ui/box";

const BUSINESS_CATEGORIES = [
  "Electronics",
  "Fashion & Apparel",
  "Food & Beverage",
  "Beauty & Personal Care",
  "Home & Living",
  "Industrial & Machinery",
  "Automotive",
  "Agriculture",
  "Construction",
  "Health & Medical",
  "Sports & Fitness",
  "Office & Stationery",
];

export default function BusinessVerificationPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    registrationNumber: "",
    phone: "",
    email: "",
    website: "",
    description: "",

    address: "",
    city: "",
    postalCode: "",
    country: "Sweden",

    representativeName: "",
    representativeEmail: "",
    representativePhone: "",
    representativePosition: "",
  });

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const [logo, setLogo] = useState<File | null>(null);
  const [tradeLicense, setTradeLicense] = useState<File | null>(null);
  const [businessDocument, setBusinessDocument] = useState<File | null>(null);

  const [agree, setAgree] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category);
      }

      return [...prev, category];
    });
  };

  const removeCategory = (category: string) => {
    setSelectedCategories((prev) => prev.filter((item) => item !== category));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agree) {
      alert("Please accept the declaration before submitting.");
      return;
    }

    if (selectedCategories.length === 0) {
      alert("Please select at least one product category.");
      return;
    }

    setIsSubmitting(true);

    const verificationData = {
      ...formData,
      productCategories: selectedCategories,
      logo,
      tradeLicense,
      businessDocument,
    };

    console.log("Business Verification Data:", verificationData);

    // API call will go here
    // const form = new FormData();

    // Object.entries(formData).forEach(([key, value]) => {
    //   form.append(key, value);
    // });

    // form.append(
    //   "productCategories",
    //   JSON.stringify(selectedCategories)
    // );

    // if (logo) form.append("logo", logo);
    // if (tradeLicense) form.append("tradeLicense", tradeLicense);
    // if (businessDocument) {
    //   form.append("businessDocument", businessDocument);
    // }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);

    alert("Verification request submitted successfully.");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/business"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-[#2563EB]"
          >
            <ArrowLeft size={18} />
            Back to Business
          </Link>

          <div className="flex items-center gap-2">
            <ShieldCheck className="text-[#2563EB]" size={22} />

            <span className="text-lg font-bold text-[#0F172A]">
              Business Verification
            </span>
          </div>

          <div className="hidden items-center gap-2 text-sm text-gray-500 sm:flex">
            <HelpCircle size={17} />
            Need help?
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Left */}
            <div className="space-y-6 lg:col-span-2">
              {/* Business Information */}
              <motion.section
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="mb-6 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                    <Building2 size={20} />
                  </div>

                  <div>
                    <h2 className="font-semibold text-[#0F172A]">
                      Business Information
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Tell us about your business.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Business Name */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Business Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Enter your business name"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
                    />
                  </div>

                  {/* Business Type */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Business Type <span className="text-red-500">*</span>
                    </label>

                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
                    >
                      <option value="">Select business type</option>
                      <option value="manufacturer">Manufacturer</option>
                      <option value="wholesaler">Wholesaler</option>
                      <option value="distributor">Distributor</option>
                      <option value="retailer">Retailer</option>
                      <option value="supplier">Supplier</option>
                      <option value="importer">Importer</option>
                      <option value="exporter">Exporter</option>
                    </select>
                  </div>

                  {/* Registration */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Business Registration Number
                    </label>

                    <input
                      type="text"
                      name="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={handleChange}
                      placeholder="Enter registration number"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Business Phone <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880 1XXX-XXXXXX"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Business Email <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="business@example.com"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
                    />
                  </div>

                  {/* Website */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Website
                    </label>

                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://example.com"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
                    />
                  </div>

                  {/* Description */}
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Business Description
                    </label>

                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us briefly about your business..."
                      className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
                    />
                  </div>
                </div>
              </motion.section>

              {/* Business Branding */}
              <motion.section
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="mb-6 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                    <Globe size={20} />
                  </div>

                  <div>
                    <h2 className="font-semibold text-[#0F172A]">
                      Business Branding
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Add your business logo.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-dashed border-gray-200 p-5">
                  <div className="flex flex-col items-center justify-center text-center">
                    {logo ? (
                      <>
                        <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                          <CheckCircle2 size={28} />
                        </div>

                        <p className="text-sm font-medium text-gray-800">
                          {logo.name}
                        </p>

                        <button
                          type="button"
                          onClick={() => setLogo(null)}
                          className="mt-2 flex items-center gap-1 text-xs font-medium text-red-500 hover:text-red-600"
                        >
                          <X size={14} />
                          Remove
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                          <Upload size={24} />
                        </div>

                        <p className="text-sm font-medium text-gray-800">
                          Upload business logo
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          PNG, JPG or JPEG
                        </p>

                        <label className="mt-4 cursor-pointer rounded-lg bg-[#2563EB] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#1D4ED8]">
                          Choose File
                          <input
                            type="file"
                            accept="image/png,image/jpeg,image/jpg"
                            className="hidden"
                            onChange={(e) =>
                              setLogo(e.target.files?.[0] || null)
                            }
                          />
                        </label>
                      </>
                    )}
                  </div>
                </div>
              </motion.section>

              {/* Product Categories */}
              <motion.section
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="mb-6 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                    <FileText size={20} />
                  </div>

                  <div>
                    <h2 className="font-semibold text-[#0F172A]">
                      Products & Business Category
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Select the categories that best describe your products.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {BUSINESS_CATEGORIES.map((category) => {
                    const selected = selectedCategories.includes(category);

                    return (
                      <button
                        type="button"
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition ${
                          selected
                            ? "border-[#2563EB] bg-[#EFF6FF] text-[#2563EB]"
                            : "border-gray-200 bg-white text-gray-700 hover:border-[#2563EB]/30 hover:bg-gray-50"
                        }`}
                      >
                        <span>{category}</span>

                        {selected && (
                          <CheckCircle2 size={18} className="text-[#2563EB]" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {selectedCategories.length > 0 && (
                  <div className="mt-5">
                    <p className="mb-2 text-xs font-medium text-gray-500">
                      Selected categories
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {selectedCategories.map((category) => (
                        <span
                          key={category}
                          className="flex items-center gap-1.5 rounded-full bg-[#EFF6FF] px-3 py-1.5 text-xs font-medium text-[#2563EB]"
                        >
                          {category}

                          <button
                            type="button"
                            onClick={() => removeCategory(category)}
                            className="transition hover:text-red-500"
                          >
                            <X size={13} />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.section>

              {/* Address */}
              <motion.section
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="mb-6 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <h2 className="font-semibold text-[#0F172A]">
                      Business Address
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Where is your business located?
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Address */}
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Address <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Street address, building, area"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      City <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter city"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
                    />
                  </div>

                  {/* Postal Code */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Postal Code
                    </label>

                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      placeholder="Enter postal code"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
                    />
                  </div>

                  {/* Country */}
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Country
                    </label>

                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
                    >
                      <option value="Sweden">Sweden</option>
                      <option value="India">India</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Nepal">Nepal</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                    </select>
                  </div>
                </div>
              </motion.section>

              {/* Business Documents */}
              <motion.section
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="mb-6 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                    <FileCheck2 size={20} />
                  </div>

                  <div>
                    <h2 className="font-semibold text-[#0F172A]">
                      Business Documents
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Upload documents that prove your business is legitimate.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Trade License */}
                  <div className="rounded-xl border border-gray-100 p-4">
                    <div className="mb-3">
                      <h3 className="text-sm font-medium text-gray-800">
                        Trade License
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        Upload your valid trade license.
                      </p>
                    </div>

                    {tradeLicense ? (
                      <div className="flex items-center justify-between rounded-lg bg-[#F8FAFC] px-4 py-3">
                        <div className="flex items-center gap-3">
                          <FileText size={18} className="text-[#2563EB]" />

                          <span className="text-sm text-gray-700">
                            {tradeLicense.name}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => setTradeLicense(null)}
                          className="text-red-500 transition hover:text-red-600"
                        >
                          <X size={17} />
                        </button>
                      </div>
                    ) : (
                      <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-gray-200 px-4 py-4 text-sm font-medium text-[#2563EB] transition hover:border-[#2563EB]/40 hover:bg-[#EFF6FF]">
                        <Upload size={18} />
                        Upload Trade License
                        <input
                          type="file"
                          accept=".pdf,.png,.jpg,.jpeg"
                          className="hidden"
                          onChange={(e) =>
                            setTradeLicense(e.target.files?.[0] || null)
                          }
                        />
                      </label>
                    )}
                  </div>

                  {/* Business Document */}
                  <div className="rounded-xl border border-gray-100 p-4">
                    <div className="mb-3">
                      <h3 className="text-sm font-medium text-gray-800">
                        Business Registration Document
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        Upload a supporting business document.
                      </p>
                    </div>

                    {businessDocument ? (
                      <div className="flex items-center justify-between rounded-lg bg-[#F8FAFC] px-4 py-3">
                        <div className="flex items-center gap-3">
                          <FileText size={18} className="text-[#2563EB]" />

                          <span className="text-sm text-gray-700">
                            {businessDocument.name}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => setBusinessDocument(null)}
                          className="text-red-500 transition hover:text-red-600"
                        >
                          <X size={17} />
                        </button>
                      </div>
                    ) : (
                      <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-gray-200 px-4 py-4 text-sm font-medium text-[#2563EB] transition hover:border-[#2563EB]/40 hover:bg-[#EFF6FF]">
                        <Upload size={18} />
                        Upload Document
                        <input
                          type="file"
                          accept=".pdf,.png,.jpg,.jpeg"
                          className="hidden"
                          onChange={(e) =>
                            setBusinessDocument(e.target.files?.[0] || null)
                          }
                        />
                      </label>
                    )}
                  </div>
                </div>

                <div className="mt-5 flex gap-3 rounded-xl bg-[#FFF8E1] p-4">
                  <Info size={18} className="mt-0.5 shrink-0 text-amber-600" />

                  <p className="text-xs leading-5 text-gray-600">
                    Please make sure all uploaded documents are clear, valid,
                    and belong to your business. Your documents should only be
                    used for verification purposes.
                  </p>
                </div>
              </motion.section>

              {/* Representative */}
              <motion.section
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="mb-6 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                    <User size={20} />
                  </div>

                  <div>
                    <h2 className="font-semibold text-[#0F172A]">
                      Business Representative
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Provide the contact information of the person responsible
                      for this business.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="representativeName"
                      value={formData.representativeName}
                      onChange={handleChange}
                      placeholder="Enter representative name"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
                    />
                  </div>

                  {/* Position */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Position
                    </label>

                    <input
                      type="text"
                      name="representativePosition"
                      value={formData.representativePosition}
                      onChange={handleChange}
                      placeholder="e.g. Owner, Manager"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="email"
                      name="representativeEmail"
                      value={formData.representativeEmail}
                      onChange={handleChange}
                      placeholder="representative@example.com"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Phone <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="tel"
                      name="representativePhone"
                      value={formData.representativePhone}
                      onChange={handleChange}
                      placeholder="+880 1XXX-XXXXXX"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10"
                    />
                  </div>
                </div>
              </motion.section>

              {/* Declaration */}
              <motion.section
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <input
                    id="agree"
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-[#2563EB] focus:ring-[#2563EB]"
                  />

                  <label
                    htmlFor="agree"
                    className="cursor-pointer text-sm leading-6 text-gray-600"
                  >
                    I confirm that the information provided above is accurate
                    and belongs to my business. I understand that Markood may
                    review this information before approving my business
                    verification.
                  </label>
                </div>
              </motion.section>

              {/* Submit */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex flex-col gap-3 sm:flex-row sm:justify-end"
              >
                <Link
                  href="/business"
                  className="flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  Cancel
                </Link>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <ShieldCheck size={18} />
                      Submit for Verification
                    </>
                  )}
                </button>
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Verification Status */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF8E1] text-amber-600">
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#0F172A]">
                      Verification Status
                    </h3>

                    <p className="text-xs text-gray-500">
                      Current business status
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-amber-100 bg-[#FFF8E1] p-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />

                    <span className="text-sm font-semibold text-amber-700">
                      Not Verified
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-gray-600">
                    Complete the form and submit your information to start the
                    verification process.
                  </p>
                </div>
              </motion.div>

              {/* Verification Steps */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <h3 className="mb-5 font-semibold text-[#0F172A]">
                  Verification Process
                </h3>

                <div className="space-y-5">
                  <VerificationStep
                    number="01"
                    title="Submit Information"
                    description="Provide your business details and documents."
                  />

                  <VerificationStep
                    number="02"
                    title="Review"
                    description="Our team reviews your submitted information."
                  />

                  <VerificationStep
                    number="03"
                    title="Verification"
                    description="Your business gets verified after approval."
                  />
                </div>
              </motion.div>

              {/* Help */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="rounded-2xl bg-[#0F172A] p-5 text-white"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle size={20} className="mt-0.5 shrink-0" />

                  <div>
                    <h3 className="font-semibold">Need help?</h3>

                    <p className="mt-2 text-xs leading-5 text-gray-300">
                      If you have questions about business verification, contact
                      the Markood support team.
                    </p>

                    <Link
                      href="/support"
                      className="mt-4 inline-flex items-center text-xs font-semibold text-white underline underline-offset-4"
                    >
                      Contact Support
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

function VerificationStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF] text-xs font-bold text-[#2563EB]">
        {number}
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-800">{title}</h4>

        <p className="mt-1 text-xs leading-5 text-gray-500">{description}</p>
      </div>
    </div>
  );
}
