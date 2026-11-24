import { GetAllCategories } from "@/services/categories.services";
import { CategoryI } from "@/types/category.type";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ShopByCategoryGrid() {

  const response=await GetAllCategories();
  console.log("categoriesall",response);
    const categoriesArray = response.data;
 
 
 
 
 
  return (
    <section className="py-8 px-4 sm:px-8 max-w-7xl mx-auto pt-40">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <span className="w-1 h-6 rounded-full bg-[#10a342]" />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Shop By <span className="text-[#10a342]">Category</span>
          </h2>
        </div>

        <Link
          href="/categories"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#10a342] hover:underline"
        >
          <span>View All Categories</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Grid System (6 أعمدة في الشاشات الكبيرة زي الصورة) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {/* {map} */}
        {categoriesArray.map((cat:CategoryI)=>{
          return<Link
        href={`/categories/${cat._id}`}
          className="group bg-white rounded-xl border border-gray-100 hover:border-emerald-300 px-4 py-6 shadow-2xs hover:shadow-sm transition-all flex flex-col items-center justify-center text-center"
        key={cat._id}
        >
          <div className="w-20 h-20 rounded-full overflow-hidden mb-3.5 flex items-center justify-center bg-gray-50">
            <Image
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            width={100}
            height={100}
            />
          </div>

          <h3 className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
            {cat.name}
          </h3>
        </Link>
        })}
        
      </div>
    </section>
  );
}