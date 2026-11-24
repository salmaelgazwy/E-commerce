"use server"
import { getOurtoken } from "@/lib/auth";

const baseurl = process.env.NEXT_PUBLIC_BASE_URL;


export async function onlinepayment(cartid:string,FormData:any) 
{
const token=await getOurtoken();
  
const response = await fetch(`${baseurl}/api/v1/orders/checkout-session/${cartid}?url=http://localhost:3000`, {
    method: "POST",
    body: JSON.stringify({FormData}),

    headers: {
        token:token,
      "content-type": "application/json"
    }
  });

  const data = await response.json();

  return data;
}

export async function cashpayment(cartid:string,FormData:any) 
{
const token=await getOurtoken();
  
const response = await fetch(`${baseurl}/api/v2/orders/${cartid}`, {
    method: "POST",
    body: JSON.stringify({FormData}),

    headers: {
        token:token,
      "content-type": "application/json"
    }
  });

  const data = await response.json();

  return data;
}