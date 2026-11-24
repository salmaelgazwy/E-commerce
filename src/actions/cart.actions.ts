"use server"
import { getOurtoken } from "@/lib/auth";

const baseurl = process.env.NEXT_PUBLIC_BASE_URL;

export async function AddProductToCart(productId:string) 
{
const token=await getOurtoken();
 if (!token) {
    return {
      status: "fail",
      message: "Please login first"
    };
  }
  
const response = await fetch(`${baseurl}/api/v2/cart`, {
    method: "POST",
    body: JSON.stringify({productId}),

    headers: {
        token:token,
      "content-type": "application/json"
    }
  });

  const data = await response.json();

  return data;
}
export async function GetLoggedusercart() 
{
const token=await getOurtoken();
   if (!token) {
    return {
      status: "fail",
      message: "Please login first"
    };
  }
const response = await fetch(`${baseurl}/api/v1/cart`, {
    method: "Get",
    

    headers: {
        token:token,
      "content-type": "application/json"
    }
  });

  const data = await response.json();

  return data;
}


export async function RemoveProductFromCart(productId:string) 
{
const token=await getOurtoken();
 if (!token) {
    return {
      status: "fail",
      message: "Please login first"
    };
  }
  
const response = await fetch(`${baseurl}/api/v2/cart/${productId}`, {
    method: "DELETE",
    

    headers: {
        token:token,
      "content-type": "application/json"
    }
  });

  const data = await response.json();

  return data;
}

export async function updateCartProductQuantity(productId:string,count:number) 
{
const token=await getOurtoken();
   if (!token) {
    return {
      status: "fail",
      message: "Please login first"
    };
  }
const response = await fetch(`${baseurl}/api/v2/cart/${productId}`, {
    method: "PUT",
    body:JSON.stringify({count}),
    

    headers: {
        token:token,
      "content-type": "application/json"
    }
  });

  const data = await response.json();

  return data;
}


export async function clearUserCart() {
  const token = await getOurtoken();

  if (!token) {
    return {
      status: "fail",
      message: "Please login first"
    };
  }

  const response = await fetch(`${baseurl}/api/v2/cart`, {
    method: "DELETE",
    headers: {
      token: token,
      "content-type": "application/json"
    }
  });

  const data = await response.json();

  return data;
}