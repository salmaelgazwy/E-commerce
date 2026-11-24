  import { Getspecificcategory } from "@/services/categories.services";
import { ArrowLeft, Folder } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function CategoryDetails({ id }: { id: string }) {
  

  
  const response = await Getspecificcategory(id);
  const category = response?.data;

  return (
    <div className="min-h-screen bg-[#f9fafb] pt-24">
      {/* Green Hero Banner */}
      <div className="bg-gradient-to-r from-[#16a34a] to-[#22c55e] text-white py-10 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-xs text-white/80 mb-5 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/categories"
              className="hover:text-white transition-colors"
            >
              Categories
            </Link>
            <span>/</span>
            <span className="text-white font-medium">
              {category?.name || "Category"}
            </span>
          </div>

          {/* Category Header */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-white/15 border border-white/25 overflow-hidden flex items-center justify-center shrink-0 p-1">
              {category?.image && (
                <Image
                  src={category.image}
                  alt={category.name || "Category"}
                  className="w-full h-full object-cover rounded-lg"
                  width={200}
                  height={200}
                />
              )}
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {category?.name || "Category"}
              </h1>
              <p className="text-xs sm:text-sm text-white/85 mt-1">
                Choose a subcategory to browse products
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subcategories Section */}
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-8">
        {/* Back Link */}
        <Link
          href="/categories"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-800 transition-colors mb-5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Categories</span>
        </Link>

        {/* Section Title */}
        <h2 className="text-sm sm:text-base font-bold text-gray-900 mb-5">
          {category?.name
            ? `Browse in ${category.name}`
            : "Subcategories"}
        </h2>

        {/* Card Link */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Link
            href={`/products?category=${category?._id || id}`}
            className="group bg-white rounded-xl border border-gray-100 hover:border-emerald-300 p-6 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between min-h-[140px]"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
              <Folder className="w-4 h-4 text-[#10a342] fill-[#10a342]" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#10a342] transition-colors">
              {category?.name || "View Products"}
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );

}