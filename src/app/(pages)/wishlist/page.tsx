"use client"
import { Getloggeduserwishlist, Removeproductfromwishlist } from "@/actions/wishlist.actions";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { wishlistcontext } from "@/context/Wishlistcontext";
import { productI } from "@/types/product.types";

import { Heart, ShoppingCart, Check, Trash2, ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";




export default function WishlistPage() {


  const [wishlistarray, setwishlistarray] = useState<productI[] | []>([])
  const [isloading,setisloading]=useState<boolean>(true);
  const { setCount,count } = useContext(wishlistcontext);
  async function getwishlist() 
  {
   
    try 
    {
    const response=await Getloggeduserwishlist();
    console.log("get",response);
    setwishlistarray(response.data);
    console.log("array",wishlistarray)
    } 
    catch (error) 
    {
      console.log(error);
    }finally{
      setisloading(false)
    }
   
  }

async function deleteWishlist(productId: string) {
  const response = await Removeproductfromwishlist(productId);

  console.log("delete", response);

  if (response.status === "success") {
    getwishlist();
    setCount(function (prev: number) {
      return prev - 1;
    });

  }
}



  
useEffect(()=>{
  getwishlist()
   
},[])
  
if (isloading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner className="size-12 text-primary" />
      </div>
    );
  }
  return (
    <>
    
    {wishlistarray.length===0?<>
    <div className="h-screen flex flex-col items-center justify-center py-20 px-4 text-center">
      {/* Heart Icon Box */}
      <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-5">
        <Heart className="w-7 h-7 text-gray-400" />
      </div>

      {/* Title & Subtitle */}
      <h2 className="text-lg font-bold text-gray-900 mb-1.5">
        Your wishlist is empty
      </h2>
      <p className="text-sm text-gray-400 mb-7">
        Browse products and save your favorites here.
      </p>

      {/* CTA Button */}
      <Button
        asChild
        className="h-11 px-7 rounded-xl text-white text-sm font-medium shadow-xs"
      >
        <Link href="/products" className="inline-flex items-center gap-2">
          <span>Browse Products</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
    </div>
    </>:<div className="pt-36 min-h-screen bg-[#f9fafb] py-8 px-4 sm:px-8 ">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
          <Link href="/" className="hover:text-gray-800">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">Wishlist</span>
        </div>

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-7">
          <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center">
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">
              My Wishlist
            </h1>
            <p className="text-xs text-gray-500">{wishlistarray.length} items saved</p>
          </div>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f8f9fa] border-b border-gray-100 text-xs font-medium text-gray-500">
                  <th className="py-4 px-6">Product</th>
                  <th className="py-4 px-6 text-center">Price</th>
                  <th className="py-4 px-6 text-center">Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 text-sm">
               {wishlistarray.map((product)=>{
                return <tr key={product._id} className="hover:bg-gray-50/60 transition-colors">
                  {/* Product Column */}
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 overflow-hidden">
                        <img
                          src={product.imageCover}
                          alt={product.title}
                          className="w-full h-full object-contain p-1.5"
                        />
                      </div>
                      <div>
                        <h2 className="font-semibold text-gray-900">
                         {product.title}
                        </h2>
                        <p className="text-xs text-gray-400 mt-0.5">
                         {product.category.name}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Price Column */}
                  <td className="py-5 px-6 text-center font-bold text-gray-900 whitespace-nowrap">
                   {product.price}
                  </td>

                  {/* Status Column */}
                  <td className="py-5 px-6 text-center whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-[#10a342]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10a342]" />
                      {product.quantity>1?"in Stock":"out of stock"}
                    </span>
                  </td>

                  {/* Actions Column */}
                  <td className="py-5 px-6 whitespace-nowrap">
                    <div className="flex items-center justify-end gap-2.5">
                      <Button
                        type="button"
                        className="h-9 px-4 rounded-lg bg-[#10a342] hover:bg-[#0e8e39] text-white text-xs font-medium gap-1.5"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        Add to Cart
                      </Button>

                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        aria-label="Remove item"
                        className="h-9 w-9 rounded-lg border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50/50"
                      onClick={()=>deleteWishlist(product._id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
               
               })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>}
    </>
  );
}