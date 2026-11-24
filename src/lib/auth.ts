
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getOurtoken() 
{

   const token = (await cookies()).get("next-auth.session-token")?.value;
  if(!token)
  {
   throw new Error("Please log in to add products to your cart.")
  }
  
  
   const decodedtoken=await decode({token:token,secret:process.env.AUTH_SECRET!})
   console.log("hiiiiiii",token,decodedtoken)
   return decodedtoken?.token as string;
}