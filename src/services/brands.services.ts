"use server";

export async function Getallbrands() {
  const baseurl = process.env.NEXT_PUBLIC_BASE_URL || "https://your-api-domain.com";
  const response = await fetch(`${baseurl}/api/v1/brands`, {
    cache: "no-store",
  });
  return response.json();
}

export async function Getspecificbrand(brandid: string) {
  const baseurl = process.env.NEXT_PUBLIC_BASE_URL || "https://your-api-domain.com";
  const response = await fetch(`${baseurl}/api/v1/brands/${brandid}`, {
    cache: "no-store",
  });
  return response.json();
}