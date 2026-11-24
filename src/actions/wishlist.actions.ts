"use server"
import { getOurtoken } from "@/lib/auth";

const baseurl = process.env.NEXT_PUBLIC_BASE_URL;

export async function Addproducttowishlist(productId:string) 
{
    const token=await getOurtoken();
    const response=await fetch(`${baseurl}/api/v1/wishlist`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            token:token
        },
        body:JSON.stringify({productId})
    })
    const data= await response.json();
    return data
}



export async function Removeproductfromwishlist(productId: string) {
  const token = await getOurtoken();

  if (!token) {
    return { status: "fail", message: "Please sign in first" };
  }

  const response = await fetch(`${baseurl}/api/v1/wishlist/${productId}`, {
    method: "DELETE",
    headers: {
      token,
    },
  });

  const data = await response.json();
  return data;
}


export async function Getloggeduserwishlist() {
  
  
    const token = await getOurtoken();

  if (!token) 
{
    return { status: "fail", message: "Please sign in first", data: [] };
 }

  const response = await fetch(`${baseurl}/api/v1/wishlist`, {
    method: "GET",
    headers: {
      token,
    },
    cache: "no-store",
  });

  const data = await response.json();
  return data;
}


