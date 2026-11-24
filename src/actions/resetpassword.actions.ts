"use server";

import { getOurtoken } from "@/lib/auth";
import { resetpasswordschemaType } from "@/lib/Schemas/auth.schema";


const baseurl = process.env.NEXT_PUBLIC_BASE_URL;

export async function resetPasswordRequest(body: {
  email: string;
  newPassword: string;
}) {
  const response = await fetch(`${baseurl}/api/v1/auth/resetPassword`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: body.email,
      newPassword: body.newPassword,
    }),
  });

  const data = await response.json();
  return data;
}

