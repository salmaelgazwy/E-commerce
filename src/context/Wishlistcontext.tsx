"use client"
import { Getloggeduserwishlist } from '@/actions/wishlist.actions';
import React, { createContext, useEffect, useState } from 'react'
    
export const wishlistcontext=createContext<any>(null);

export default function WishlistcontextProvider({children}:{children:React.ReactNode}) {
 const [count, setCount] = useState<number>(0);


  async function  Getloggeduserwishlistapi() 
 {
   const response=await  Getloggeduserwishlist() ;
   console.log(response,"know");
   setCount(response.count)
 }
 useEffect(()=>{
    Getloggeduserwishlistapi() 
 },[])
    return (
    <div>
      <wishlistcontext.Provider value={{ count,setCount}}>
        {children}
      </wishlistcontext.Provider>
    </div>
  )
}
