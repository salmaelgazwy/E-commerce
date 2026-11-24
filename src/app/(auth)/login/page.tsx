"use client"
import { Field, FieldLabel } from '@/components/ui/field'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Input } from "@/components/ui/input";
import { FieldError } from "@/components/ui/field";
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';

import { SigninUser } from '@/services/auth.services';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Spinner } from '@/components/ui/spinner';
import { LoginSchema, LoginSchemaType } from '@/lib/Schemas/auth.schema';
import { signIn } from "next-auth/react";
import Link from 'next/link';
import { Lock, Mail } from 'lucide-react';
export default function Login() {
  const router=useRouter();
  
  
 const {handleSubmit,control,formState:{isSubmitting}}= useForm<LoginSchemaType>({
 mode:"all",
 resolver:zodResolver(LoginSchema),
  defaultValues:{
 
  "email":"",
  "password":""
  

 }})
 
 
 async function handleUserLogin(values:LoginSchemaType)
  {
    console.log(values);
//     try 
//     {
//       const response=await SigninUser(values);
//       console.log(response);
//       if(response.message==="success")
//       {
// toast.success("Account Created Suuccessfully");
// router.push("/products");
//       }
//       else{
//         toast.error(response.message)
//       }
      
//     } catch (error) 
//     {
//       console.log(error)
//     }
const response =await signIn("credentials",{
 email:values?.email,
 password:values?.password,
 redirect:false,
 
})

if(response?.ok)
{
 toast.success("Account Created Suuccessfully");
 router.push("/products");
}
else{
  toast.error(response?.error)
}


  }

  return (
<div className="px-5 py-8 sm:px-8">
  <form onSubmit={handleSubmit(handleUserLogin)} className="space-y-6">

    {/* Email */}
    <Controller
      name="email"
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid} className="space-y-2">
          <FieldLabel htmlFor={field.name} className="text-sm font-semibold text-slate-700">
            Email Address
          </FieldLabel>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Enter your email"
              type="text"
              className="h-12 pl-11 pr-4 bg-slate-50 border-slate-200 rounded-xl text-sm focus-visible:bg-white focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/10 transition-all"
            />
          </div>

          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />

    {/* Password */}
    <Controller
      name="password"
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid} className="space-y-2">
          <div className="flex justify-between items-center">
            <FieldLabel htmlFor={field.name} className="text-sm font-semibold text-slate-700">
              Password
            </FieldLabel>

            <Link
              href="/forgotpassword"
              className="text-xs font-semibold text-primary hover:underline transition-all"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Enter your password"
              type="password"
              className="h-12 pl-11 pr-4 bg-slate-50 border-slate-200 rounded-xl text-sm focus-visible:bg-white focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/10 transition-all"
            />
          </div>

          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />

    {/* Login Button */}
    <Button
      variant="default"
      type="submit"
      disabled={isSubmitting}
      className="w-full h-12 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
    >
      {isSubmitting ? (
        <>
          <Spinner />
          Loading...
        </>
      ) : (
        "Login"
      )}
    </Button>

  </form>
</div>

  )
}
