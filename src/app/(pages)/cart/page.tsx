"use client"
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Box,
  ImageIcon,
  Lock,
  Minus,
  MoveRight,
  Plus,
  ShoppingBag,
  ShoppingCart,
  Tag,
  Trash2,
  Truck,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CartItem from "@/components/cart/CartItem";
import OrderSummary from "@/components/cart/OrderSummary";
import { clearUserCart, GetLoggedusercart } from "@/actions/cart.actions";
import { useContext, useEffect, useState } from "react";
import { CartDataI, CartProductI } from "@/types/cart.types";
import { Spinner } from "@/components/ui/spinner";
import { tryLoadManifestWithRetries } from "next/dist/server/load-components";
import { toast } from "sonner";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CartContext } from "@/context/Cartcontext";

// pointer-events-auto overrides the Button default, which would hide the cursor.
const quantityButtonDisabledStyles =
  "disabled:pointer-events-auto disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:opacity-100 disabled:hover:bg-muted disabled:hover:text-muted-foreground";


  export default function CartPage() 
  {
  const {handlecart}=useContext(CartContext)!
  const [products,setproducts]=useState<CartProductI[]| []>([]);
  const[isloading,setisloading]=useState(true);
 const[cartData,setcartData]= useState<CartDataI | null>(null);
 
  async function getCart() 
  {
    setisloading(true);
    try 
    {
      const response:CartDataI=await GetLoggedusercart();
    console.log("getlogged",response);
    setcartData(response)
    setproducts(response.data.products);
    } catch (error) 
    {
      console.log(error);
    }finally
    {
setisloading(false);
    }
  
  }
  useEffect(()=>{
    getCart()
  },[])

  if(isloading)
  {
    return<>
    <div className="flex h-screen justify-center items-center flex-col gap-4 text-primary">
<Spinner className="size-7" />
<h2 className="text-2xl font-black">Loading...</h2>

    </div>
    </>
  }

  if(products.length==0)
  {
    return<>
    <div className="flex h-screen justify-center items-center flex-col gap-4 text-primary">
<div className="bg-secondary rounded-full p-10">
<Box className="size-12 text-gray-400"  />
</div>
<div className="flex flex-col justify-center items-center leading-relaxed">
<h2 className="text-2xl text-black font-bold pb-3">Your cart is empty</h2>
<p className="text-center text-gray-500"> 
Looks like you haven't added anything to your cart yet.
</p>
<span className="text-center text-gray-500">Start exploring our products!</span>
</div>

<Button className="rounded-md p-6">
  <Link href="/products"className="flex justify-center items-center gap-1">
  Start Shopping
 <ArrowRight />
  </Link>

</Button>
    </div>
    </>
  }
 async function clearcart() 
 {
  try 
  {
    const response=await clearUserCart();
    console.log("clear all",response);
    setproducts(response.data.products);
    toast.success(response.message);
    handlecart()
  } 
  catch (error) 
  {
    console.log(error);
    toast.error("Unable to clear your cart. Please try again later.");
  }
 }
    return (
    <div className="container mx-auto my-6 py-28">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-bold">Shopping Cart</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="my-6">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <ShoppingCart className="size-6" />
          </span>
          <h1 className="font-heading text-3xl font-bold">Shopping Cart</h1>
        </div>
        <p className="mt-2 text-muted-foreground">
          You have <span className="font-semibold text-primary">1 item</span> in
          your cart
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Cart items */}
        <div className="col-span-12 space-y-4 lg:col-span-8">
     {products.map((product)=>{
      return <>
  <CartItem key={product._id} product={product} setproducts={setproducts} setcartData={setcartData}/>
      </>
     })}
   

          <Separator />

          <div className="flex items-center justify-between">
            <Link
              href="/products"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="size-4" />
              Continue Shopping
            </Link>
           <Dialog >
  <DialogTrigger className="text-muted-foreground flex justify-center items-center gap-0.5 text-sm hover:text-red-500 group transition-all">
    <Trash2 size={18} className="transition-transform duration-300 group-hover:scale-110" />
    Clear all items
    </DialogTrigger>

  <DialogContent>
    <div className="flex justify-center items-center text-red-500 rounded-full size-16 mx-auto bg-red-100 ">
      <ShoppingCart size={30}  />
    </div>
    <DialogHeader>
      <DialogTitle className="text-black font-bold text-center text-2xl">Clear Your Cart?</DialogTitle>
      <DialogDescription className="text-center">
       All items will be removed from your cart. This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
   <div className="flex justify-center items-center gap-4">
    <DialogClose asChild>
 <Button className="text-gray-600 text-md bg-gray-100 hover:bg-gray-200  p-4  font-semibold">
Keep Shopping
    </Button>
    </DialogClose>
   
    <Button className="bg-red-500 text-md p-4 hover:bg-red-600 "onClick={()=>clearcart()}>
Yes, Clear All
    </Button>
   </div>
  </DialogContent>
</Dialog>
          </div>


        </div>

        {/* Order summary */}
       <OrderSummary cartData={cartData!} ischeckout={false} />
      </div>
    </div>
  );
}
