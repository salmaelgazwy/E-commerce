"use server";

const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
console.log("BASE URL:", process.env.NEXT_PUBLIC_BASE_URL);

export async function Getallbrands() {
  
  const response = await fetch(`${baseurl}/api/v1/brands`);

  const data = await response.json();

  return data;
}


export async function Getspecificbrand(brandid:string) 
{
  
  const response = await fetch(`${baseurl}/api/v1/brands/${brandid}`);

  const data = await response.json();

  return data;
}