
"use server";

import { CategoryI } from "@/types/category.type";

export async function GetAllCategories() {
  const baseurl = process.env.NEXT_PUBLIC_BASE_URL || "https://your-api-domain.com";
  const response = await fetch(`${baseurl}/api/v1/categories`, {
    cache: "no-store",
  });

  const data = await response.json();
  return data;
}

export async function Getspecificcategory(catid: string) {
  const baseurl = process.env.NEXT_PUBLIC_BASE_URL || "https://your-api-domain.com";
  const response = await fetch(`${baseurl}/api/v1/categories/${catid}`, {
    cache: "no-store",
  });

  const data = await response.json();
  return data;
}
