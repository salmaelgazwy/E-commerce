"use client"


import { resetPasswordRequest } from '@/actions/resetpassword.actions';
import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {forgotpasswordSchema, ForgotPasswordSchemaType, resetcodeSchema, resetcodeSchemaType, resetpasswordschema, resetpasswordschemaType } from '@/lib/Schemas/auth.schema';
import { ForgotPassword,VerifyResetCode } from '@/services/auth.services';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, Check, KeyRound, Lock, Mail, ShieldHalf } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export type UpdatePasswordSchemaType = {
  password: string;
  rePassword: string;
}
export default function ForgotPasswordPage() {

 const [emailstatus, setemailstatus] = useState<boolean>(false);
 const [verifystatus,setverifystatus]=useState<boolean>(false);
 const [saveemail,setsaveemail]=useState<string>("");
 const router = useRouter();
 
const {
  handleSubmit,
  control,
  formState: { isSubmitting }
} = useForm<ForgotPasswordSchemaType>({
  mode: "all",
  resolver: zodResolver(forgotpasswordSchema),
  defaultValues: {
  email: ""
  }
});

const {
  handleSubmit: handleResetCode,
  control: resetCodeControl,
} = useForm<resetcodeSchemaType>({
  resolver: zodResolver(resetcodeSchema),
  defaultValues: {
    resetCode: ""
  }
});

// reset
const {
  handleSubmit: handleupdatepassword,
  control: updatepasswordControl,
} = useForm<resetpasswordschemaType>({
  resolver: zodResolver(resetpasswordschema),
  defaultValues: {
    password:"",
    rePassword:"",
  }
});







async function forgotpasswordapi(values:ForgotPasswordSchemaType) 
{
  try 
  {
  const response=await ForgotPassword(values);
  console.log("forgotpassword",response);
  if(response.statusMsg==="success")
  {
  setemailstatus(true);
  toast.success(response.message);
  setsaveemail(values.email);
  
  }
  else{
    toast.error(response.message);
  }
  } catch (error) 
  {
    console.log(error);
    
  }
 
}

async function VerifyResetCodeapi(values:resetcodeSchemaType) 
{
try 
{
  const response=await VerifyResetCode(values);
  console.log("reset",response);
  if(response.status==="Success")
  {
toast.success("verification code has been confirmed successfully");
setverifystatus(true);

  }
  else{
    toast.error("The code is invalid or expired. Please try again.")
  }
  } catch (error) 
  {
    
console.log(error);
  }

}
// update password
async function updatepassword(values: resetpasswordschemaType) {
  try {
    const response = await resetPasswordRequest({
      email: saveemail,
      newPassword: values.password,
    });

    console.log("resetPassword", response);

    if (response.token) 
  {
  await signOut({ redirect: false });
  toast.success("Password updated successfully!");
  router.push("/login");
}
    else {
      toast.error(response.message || "Failed to update password");
    }
  } catch (error) {
    console.log(error);
  }
}
 
  return (
  
  
  <div className="min-h-screen bg-[#f9fafb] flex items-center justify-center p-4">
      {/* Main Card */}
      <div className="w-full max-w-[460px] bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 px-8 py-10">
        
        {/* Brand Logo[cite: 1] */}
        <div className="text-center mb-5">
          <Link href="/" className="text-[26px] font-extrabold tracking-tight">
            <span className="text-[#10a342]">Fresh</span>
            <span className="text-[#111827]">Cart</span>
          </Link>
        </div>

        {/* Heading & Subtitle[cite: 1] */}
        <div className="text-center mb-7">
          <h1 className="text-[22px] font-bold text-[#111827] mb-1.5">
            Forgot Password?
          </h1>
          <p className="text-[14px] text-gray-500">
            No worries, we&apos;ll send you a reset code
          </p>
        </div>

        {/* Stepper Indicator[cite: 1] */}
        <div className="flex items-center justify-center mb-8">
          {/* Step 1: Email (Active) */}
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center ring-4 ring-green-100">
        
            {emailstatus?<Check className='w-4 h-4' />: <Mail className="w-4 h-4" />}
          </div>

          {/* Line 1 */}
<div className={`w-14 h-[2px] mx-2 ${emailstatus ? "bg-primary" : "bg-gray-200" }`}/>
          {/* Step 2: Key (Inactive) */}
          <div className={`w-10 h-10 rounded-full ${emailstatus?"bg-primary text-white":"bg-gray-100 text-gray-400"}  flex items-center justify-center`}>
            
            {verifystatus?<Check className='w-4 h-4' />:<KeyRound className="w-4 h-4"/>}
            
           
            
          </div>

          {/* Line 2 */}
<div className={`w-14 h-[2px] ${verifystatus ? "bg-primary" : "bg-gray-200"} mx-2`} />
          {/* Step 3: Lock (Inactive) */}
          <div className={`w-10 h-10 rounded-full ${verifystatus?"bg-primary text-white":"bg-gray-100 text-gray-400"}  flex items-center justify-center`}>
            
            <Lock className="w-4 h-4" />
            
          </div>
        </div>

        {/* Form[cite: 1] */}
        <form onSubmit={
    verifystatus
      ? handleupdatepassword(updatepassword)
      : emailstatus
      ? handleResetCode(VerifyResetCodeapi)
      : handleSubmit(forgotpasswordapi)
  }className='flex flex-col gap-5'>
         



 {verifystatus?<>
 <Controller
  name="password"
  control={updatepasswordControl}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>New Password</FieldLabel>

      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter new password"
        type="password"
        className="bg-white border-gray-300 rounded-xl"
      />

      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
<Controller
  name="rePassword"
  control={updatepasswordControl}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>

      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Confirm new Password"
        type="password"
        className="bg-white border-gray-300 rounded-xl"
      />

      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
 </> : emailstatus?  <>
 <Controller
  name="resetCode"
  control={resetCodeControl}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}className='text-gray-700 text-xs'>Verification Code</FieldLabel>
      
      <div className='relative'>
        <ShieldHalf className='absolute text-gray-400 top-3 bottom-3 left-4' size={15} />
        <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder=". . . . . ."
        type='text'
    className="w-full text-center  placeholder:text-5xl  placeholder:text-gray-400"      />
      </div>
     
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
<div className='flex text-xs justify-center items-center'>
<p className='text-center text-gray-500'>Didn't receive the code?<Button type='button' className='text-xs bg-transparent text-primary text-center hover:bg-transparent'onClick={()=> forgotpasswordapi({email:saveemail})}>
Resend Code
</Button>
</p>
</div>


</>: <Controller
  name="email"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
      
      
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter Your Email"
        type='text'
        className='bg-white border-gray-300 rounded-xl'
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/> }




          {/* Submit Button[cite: 1] */}
        <Button type="submit" variant="default">
  {verifystatus? "Reset Password": emailstatus? "Verify Code": "Send Reset Code"}
</Button>
        </form>

        {/* Back to Sign In[cite: 1] */}
        <div className="text-center mt-5">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#10a342] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sign In
          </Link>
        </div>

        {/* Divider & Footer[cite: 1] */}
        <div className="border-t border-gray-100 mt-7 pt-5 text-center">
          <p className="text-[13px] text-gray-600">
            Remember your password?{" "}
            <Link
              href="/signin"
              className="font-semibold text-[#10a342] hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>

      </div>
    </div>
  )
}
