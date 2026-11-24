import { Button } from "@/components/ui/button";
import { Getspecificbrand } from "@/services/brands.services";
import { BrandI } from "@/types/brand.types";
import { Eye, Filter, Folder, Heart, Package2, Plus, RefreshCw, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function BrandDetailspage({params,}: {params: Promise<{ id: string }>;}) 
{
  const { id } = await params;
  const response = await Getspecificbrand(id);
  console.log(response,"branddetails");

 
 

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
            <span className="text-white font-medium">Networking Products</span>
          </div>

          {/* Header Content */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
              <Folder className="w-6 h-6 text-white fill-white/80" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Networking Products
              </h1>
              <p className="text-xs sm:text-sm text-white/85 mt-1">
                Browse Networking Products products
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-7 px-4 sm:px-8">
        {/* Active Filters Bar */}
        <div className="flex flex-wrap items-center gap-3 text-xs mb-3">
          <div className="inline-flex items-center gap-1.5 text-gray-500 font-medium">
            <Filter className="w-3.5 h-3.5" />
            <span>Active Filters:</span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#10a342] font-medium">
            <Folder className="w-3 h-3 fill-[#10a342]" />
            <span>Networking Products</span>
            <button
              type="button"
              aria-label="Remove filter"
              className="hover:text-emerald-900 ml-0.5 cursor-pointer"
            >
              <X className="w-3 h-3" />
            </button>
          </span>

          <button
            type="button"
            className="text-gray-500 hover:text-gray-800 underline underline-offset-2 cursor-pointer"
          >
            Clear all
          </button>
        </div>

        {/* Count */}
        <p className="text-xs text-gray-500 mb-6">Showing ${Object.keys(response.data).length}product</p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* Static Product Card */}
        
            <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between">
            {/* Image + Side Action Buttons */}
            <div className="relative bg-gray-50/70 rounded-xl h-48 flex items-center justify-center p-4 mb-4">
              <Image
              src={response?.data?.image}
                width={100}
                height={100}
                alt="Archer VR300 AC1200 Wireless VDSL/ADSL Modem Router Black"
                className="max-h-full max-w-full object-contain"
              />

              {/* Floating Action Buttons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button
                  type="button"
                  aria-label="Add to wishlist"
                  className="w-8 h-8 rounded-full bg-white border border-gray-100 shadow-2xs flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  aria-label="Compare product"
                  className="w-8 h-8 rounded-full bg-white border border-gray-100 shadow-2xs flex items-center justify-center text-gray-500 hover:text-primary transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  aria-label="Quick view"
                  className="w-8 h-8 rounded-full bg-white border border-gray-100 shadow-2xs flex items-center justify-center text-gray-500 hover:text-primary transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Product Info */}
           
           {response?.data?  <div>
              <p className="text-[11px] text-gray-400 mb-1">{response?.data.name}</p>
              <h2 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-snug mb-2">
                {response?.data?.title}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-1.5 mb-3">
                <div className="flex items-center gap-0.5 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400/70" />
                  <Star className="w-3.5 h-3.5 text-gray-200 fill-gray-200" />
                </div>
                <span className="text-[11px] text-gray-400 font-medium">
                  3.9 (11)
                </span>
              </div>

              {/* Price + Add Button */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-sm font-bold text-gray-900">
                
                </span>

                <button
                  type="button"
                  aria-label="Add to cart"
                  className="w-8 h-8 rounded-full bg-[#10a342] hover:bg-[#0e8e39] text-white flex items-center justify-center shadow-2xs transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>:
            <div className="h-screen flex flex-col items-center justify-center py-20 px-4 text-center">
      {/* Box Icon Circle */}
      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-5">
        <Package2 className="w-7 h-7 text-gray-400" />
      </div>

      {/* Title & Subtitle */}
      <h2 className="text-base font-bold text-gray-900 mb-1.5">
        No Products Found
      </h2>
      <p className="text-xs sm:text-sm text-gray-400 mb-6">
        No products match your current filters.
      </p>

      {/* CTA Button */}
      <Button
        asChild
        className="h-10 px-6 rounded-lg bg-[#10a342] hover:bg-[#0e8e39] text-white text-xs sm:text-sm font-medium shadow-xs"
      >
        <Link href="/products">View All Products</Link>
      </Button>
    </div>
            }
          </div>
        
        </div>
      </div>
    </div>
  );
}