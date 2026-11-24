
import { Button } from "@/components/ui/button"
import {Card,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"

import { productI } from '@/types/product.types';
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import Image from 'next/image'
import { GetAllProducts } from "@/services/product.service";
import AddToCartButton from "@/components/cart/AddToCartButton";
import AddToWishlistButton from "@/components/wishlist/AddToWishListButton";

export default async function Products() {
  console.log("PAGE CALLED");

  const response = await GetAllProducts();

  
const products:productI[] =response.data;
console.log("response:", products[0]);
  return (
    <div className='container mx-auto pt-36'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
           {/* map */}
          
          {products.map((product)=>{
            return<>
              <div key={product._id}>
                  <Card className="relative mx-auto w-full max-w-sm pt-0 h-full cursor-pointer">
     
      <AddToWishlistButton productId={product._id} />
      <div className="absolute  z-30 aspect-video " />
    <Link href={`products/${product._id}`}>
     <Image
      src={product.imageCover}
      alt={product.title}
      width={600}
      height={600}
      className="relative z-20 aspect-video w-full object-cover brigthness-60  dark:brightness-40"
    />
      <CardHeader>
     <p>{product.category.name}</p>
        <CardTitle className="text-2xl font-semibold">{product.title.split(" ").slice(0,3).join(" ")}</CardTitle>
       
     <div className="flex gap-2 items-center">
  {[0, 1, 2, 3, 4].map((star) => {
    const filledstar = star < Math.floor(product.ratingsAverage)

    return (
      <Star
        key={star}
        className={
          filledstar
            ? "text-amber-400 fill-amber-400"
            : "text-gray-400 fill-gray-400"
        }
      />
    )
  })}

  <span className="text-lg">{product.ratingsAverage}</span>
</div>
        <CardDescription>
        {product.description.split(" ").slice(0,5).join(" ")}
        </CardDescription>
        <h3 className="text-[17px] font-semibold">
            {product.price} EGP
        </h3>
      </CardHeader>
    </Link>
      <CardFooter className="w-full">
       <AddToCartButton productId={product._id} />
      </CardFooter>
    </Card>

            </div>
            </>
          })}
           </div> 
    
    </div>
  )
}