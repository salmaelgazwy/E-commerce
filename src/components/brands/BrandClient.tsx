import React from "react";
import { BrandI } from "@/types/brand.types";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function BrandClient({ brands }: { brands: BrandI[] }) {
  return (
    <div className="pt-28 min-h-screen bg-[#f9fafb] py-8 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-gray-500 hover:text-gray-800 transition-colors mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Page Title */}
        <h1 className="text-lg font-bold text-gray-900 mb-6">
          All Brands ({brands.length})
        </h1>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {brands.map((brand) => (
            <Link
              key={brand._id}
              href={`/brands/${brand._id}`}
              className="group bg-white rounded-xl border border-gray-100 hover:border-emerald-300 p-6 shadow-2xs transition-all flex flex-col justify-between min-h-[165px] cursor-pointer"
            >
              <div>
                <div className="w-14 h-14 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-contain p-1.5"
                  />
                </div>

                <h2 className="text-sm font-bold text-gray-900 group-hover:text-[#10a342] transition-colors">
                  {brand.name}
                </h2>
              </div>

              <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#10a342] group-hover:underline">
                <span>Browse Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}