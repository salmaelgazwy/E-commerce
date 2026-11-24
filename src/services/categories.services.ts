"use server";

import { CategoryI } from "@/types/category.type";

const baseurl = process.env.NEXT_PUBLIC_BASE_URL;

export async function GetAllCategories() {
  const response = await fetch(
    `${baseurl}/api/v1/categories`
  );

  const data = await response.json();

  return data;
}

export async function Getspecificcategory(catid:string) 
{
const response = await fetch(`${baseurl}/api/v1/categories/${catid}`);

const data = await response.json();

return data;
}
