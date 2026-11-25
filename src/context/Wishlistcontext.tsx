
"use client"

import { Getloggeduserwishlist } from '@/actions/wishlist.actions'
import React, { createContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

export const wishlistcontext = createContext<any>(null);

export default function WishlistcontextProvider({children}:{children:React.ReactNode}) {

  const [count, setCount] = useState<number>(0);
  const { status } = useSession();

  async function Getloggeduserwishlistapi() 
  {
    try {
      const response = await Getloggeduserwishlist();

      console.log(response, "know");

      if (response.status === "success") {
        setCount(response.count ?? response.data?.length ?? 0);
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    if (status === "authenticated") {
      Getloggeduserwishlistapi();
    }

    if (status === "unauthenticated") {
      setCount(0);
    }

  }, [status]);

  return (
    <wishlistcontext.Provider value={{ count, setCount }}>
      {children}
    </wishlistcontext.Provider>
  )
}
