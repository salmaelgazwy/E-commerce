"use server";



export async function Getallbrands() {
  const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
  
  const response = await fetch(`${baseurl}/api/v1/brands`);

  const data = await response.json();

  return data;
}


export async function Getspecificbrand(brandid:string) 
{
  const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
  
  const response = await fetch(`${baseurl}/api/v1/brands/${brandid}`);

  const data = await response.json();

  return data;
}