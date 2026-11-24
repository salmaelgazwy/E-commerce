
import { ForgotPasswordSchemaType, LoginSchemaType, RegisterSchemaType, resetcodeSchemaType } from "@/lib/Schemas/auth.schema";
import { json } from "zod";

const baseurl = process.env.NEXT_PUBLIC_BASE_URL;

export async function SignupUser(formData: RegisterSchemaType) {
  const { repassword, ...userData } = formData;

  const response = await fetch(`${baseurl}/api/v1/auth/signup`, {
    method: "POST",
    body: JSON.stringify({
      ...userData,
      rePassword: repassword
    }),
    headers: {
      "content-type": "application/json"
    }
  });

  const data = await response.json();

  return data;
}
export async function SigninUser(formData: LoginSchemaType) {

  const response = await fetch(`${baseurl}/api/v1/auth/signin`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "content-type": "application/json"
    }
  });

  const data = await response.json();

  return data;
}

export async function ForgotPassword(formData:ForgotPasswordSchemaType) 
{
  const response=await fetch(`${baseurl}/api/v1/auth/forgotPasswords`,{
    method:"POST",
    body:JSON.stringify(formData),
    headers:{
      "content-type":"application/json"
    }


  });
  const data=await response.json();
  return data
}
export async function VerifyResetCode(formData:resetcodeSchemaType) 
{
 const response= await fetch(`${baseurl}/api/v1/auth/verifyResetCode`,{
  method:"POST",
  body:JSON.stringify(formData),
  headers:{
    "content-type":"application/json"
  }
 });
 const data=await response.json();
 return data

}
