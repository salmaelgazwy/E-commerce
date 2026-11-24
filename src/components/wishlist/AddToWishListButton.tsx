"use client"

import {
  Addproducttowishlist,Removeproductfromwishlist,} from "@/actions/wishlist.actions";

import { Button } from "@/components/ui/button"
import { wishlistcontext } from "@/context/Wishlistcontext";
import { Heart } from "lucide-react"
import { useContext, useState } from "react";
import { toast } from "sonner";

export default function AddToWishlistButton({ productId }: { productId: string }) {

  const [isclicked, setisclicked] = useState<boolean>(false);
const {count,setCount}=useContext(wishlistcontext)
 async function handleWishlist() {
  let response;

  if (isclicked) {
    response = await Removeproductfromwishlist(productId);
  } else {
    response = await Addproducttowishlist(productId);
  }

  if (response.status === "success") {
    toast.success(response.message);
    setisclicked(!isclicked);

    if (isclicked) {
      setCount(function (prev: number) {
        return prev - 1;
      });
    } else {
      setCount(function (prev: number) {
        return prev + 1;
      });
    }
  } else {
    toast.error(response.message);
  }
}

  return (
    <Button
      onClick={handleWishlist}
      className={`bg-transparent absolute top-3 z-30 right-3 transition-all hover:bg-transparent ${
        isclicked ? "text-red-500" : "text-gray-400 hover:text-red-500"
      }`}
    >
      <Heart size={17} fill={isclicked ? "red" : "none"} />
    </Button>
  )
}