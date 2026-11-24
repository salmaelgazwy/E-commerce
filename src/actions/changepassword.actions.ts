"use server";

import { getOurtoken } from "@/lib/auth";
import { ChangePasswordSchemaType } from "@/lib/Schemas/auth.schema";
import { cookies } from "next/headers";

const baseurl = process.env.NEXT_PUBLIC_BASE_URL;

export async function changepasswordrequest(formData: ChangePasswordSchemaType) {
  const token = await getOurtoken();

  const response = await fetch(`${baseurl}/api/v1/users/changeMyPassword`, {
    method: "PUT",
    headers: {
      token: token!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();
  return data;
}

export async function removetoken()
{
    const cookiestore=await cookies();
    cookiestore.delete("next-auth.session-token");
}