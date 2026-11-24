"use client"

import { GetLoggedusercart } from '@/actions/cart.actions'
import { CartDataI } from '@/types/cart.types'
import { useSession } from 'next-auth/react'
import React, { createContext, useEffect, useState } from 'react'

type CartContextType = {
  noofcarditems: number,
  setnoofcartitems: React.Dispatch<React.SetStateAction<number>>;
  handlecart:()=>void
}

export const CartContext = createContext<CartContextType | null>(null)

export default function CartcontextProvider({ children }: { children: React.ReactNode }) {

  const [noofcarditems, setnoofcartitems] = useState(0)
   const {status}=useSession();

  async function handlecart() {
    try 
    
    {
     const response: CartDataI = await GetLoggedusercart()
     
      const noOfitems=response.data.products.reduce((acc,product)=>acc+product.count,0);
       setnoofcartitems(noOfitems);
    } catch (error) 
    {
      console.log(error)
    }
  }

  useEffect(() => {
    if(status==="authenticated")
    {
   handlecart()
    }
 
  }, [status])

  return (
    <CartContext.Provider value={{ noofcarditems, setnoofcartitems,handlecart }}>
      {children}
    </CartContext.Provider>
  )
}