"use client"
import React, { useContext, useState } from 'react'
import { Button } from '../ui/button'
import { AddProductToCart } from '@/actions/cart.actions'
import { toast } from 'sonner';
import { Spinner } from '../ui/spinner';
import { CartContext } from '@/context/Cartcontext';
import { useRouter } from 'next/navigation';



export default function AddToCartButton({productId}:{productId:string})
{
  const router=useRouter()
  const{handlecart}=useContext(CartContext)!
 const[isloading,setisloading]=useState(false);
  
  async function addTocart(id:string) 
{
setisloading(true);
try 
{
   const response=await AddProductToCart(id);
   console.log("addtocart",response);
   toast.success(response.message);
   handlecart();


} catch (error:any) 
  {
    console.log(error);
    toast.error(error.message);
    router.push("/login")

  }finally{
    setisloading(false);
  }
    
  }
  
    return (
    <>
       <Button onClick={()=>addTocart(productId)} className='w-full'>

        {isloading?
        <>
        <span className='flex justify-center items-center'> Loading...<Spinner/>
        </span>
        </>
        :"Add To Cart"}
       </Button>
    </>
  )
}
