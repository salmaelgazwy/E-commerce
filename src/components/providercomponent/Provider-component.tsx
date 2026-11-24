"use client"
import AuthContextProvider from '@/context/AuthContext'
import CartcontextProvider from '@/context/Cartcontext'
import React from 'react'
import { Provider } from 'react-redux'
import Navbar from '../navbar'
import { Toaster } from 'sonner'
import { store } from '@/redux/store'

export default function Providercomponent({children}:{children:React.ReactNode}) 
{
  return (
    <>
       <AuthContextProvider>
          <CartcontextProvider>
<Provider store={store}>
    <Navbar/>
      <Toaster position="top-right" richColors/>
        {children }
        </Provider>
        </CartcontextProvider>
        </AuthContextProvider>
        
    </>
  )
}
