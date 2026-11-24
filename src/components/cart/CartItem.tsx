"use client"
import React, { useContext } from 'react'
import { Card, CardContent } from '../ui/card'
import { CanSoda, ImageIcon, Minus, Plus, Trash2 } from 'lucide-react'
import { Button } from '../ui/button'
import { CartDataI, CartProductI } from '@/types/cart.types';
import Image from 'next/image';
import { RemoveProductFromCart, updateCartProductQuantity} from '@/actions/cart.actions'
import { toast } from 'sonner'
import { CartContext } from '@/context/Cartcontext'


export default function CartItem({
  product,
  setproducts,
  setcartData
}: {
  product: CartProductI,
  setproducts: (products: CartProductI[]) => void,
  setcartData: (cartData: CartDataI) => void
}) {
 const {handlecart}=useContext(CartContext)!
  const quantityButtonDisabledStyles ="disabled:pointer-events-auto disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:opacity-100 disabled:hover:bg-muted disabled:hover:text-muted-foreground";

async function deletecart(id:string) 
{
  try 
  {
    const response=await RemoveProductFromCart(id);
   
    console.log("delete",response);
    toast.success(response.message);
    setproducts(response.data.products);
    setcartData(response);
    handlecart();

  } catch (error) 
  {
    console.log(error);
    toast.error("Something went wrong. Please try again")
  }
}

async function updatecart(id:string,count:number) 
{
  try 
  {
    const response=await updateCartProductQuantity(id,count);
    setproducts(response.data.products);
    toast.success(response.message);
    setcartData(response);
    console.log("updatecart",response);
    handlecart();

  } catch (error) 
  {
    console.log(error);
    toast.error("Unable to update product quantity. Please try again.");
  }
}
    return (
    <div>
      
          <Card className="rounded-2xl py-0 shadow-sm">
            <CardContent className="flex flex-col gap-4 p-5 sm:flex-row">
              <div className="flex size-28 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground">

               <Image src={product.product.imageCover} alt={product.product.title}width={200} height={200} />
              </div>

              <div className="flex-1 space-y-3">
                <div>
                  <h2 className="text-lg font-semibold">{product.product.title}</h2>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span className="rounded-full bg-primary/10 px-3 py-0.5 text-primary">
                      {product.product.category.name}
                    </span>
                 
                  </div>
                </div>

                <p className="font-bold text-primary">
                 {product.price} 149 EGP{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    per unit
                  </span>
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 rounded-lg border border-input p-1">
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      aria-label="Decrease quantity"
                      className={quantityButtonDisabledStyles}
                      onClick={()=>updatecart(product.product._id,product.count -1)}
                      disabled={product.count==1}
                    >
                      <Minus />
                    </Button>
                    <span className="min-w-6 text-center font-medium">{product.count}</span>
                    <Button
                      size="icon-sm"
                      aria-label="Increase quantity"
                      className={quantityButtonDisabledStyles}
                      onClick={()=>updatecart(product.product._id,product.count +1)}
                    >
                      <Plus />
                    </Button>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Total</p>
                      <p className="text-xl font-bold">
                        {product.count *product.price}{" "}
                        <span className="text-sm font-normal text-muted-foreground">
                          EGP
                        </span>
                      </p>
                    </div>
                    <Button
                      variant="destructive"
                      size="icon-lg"
                      aria-label="Remove Woman Shawl"
                      onClick={()=>deletecart(product.product._id)}
                    >
                      <Trash2 />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
    </div>
  )
}
