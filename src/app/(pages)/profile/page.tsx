"use client"
import React from "react";
import { Lock, Eye } from "lucide-react";
import { changepasswordrequest, removetoken } from "@/actions/changepassword.actions";
import { ChangePasswordSchema, ChangePasswordSchemaType, registerSchema } from "@/lib/Schemas/auth.schema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";


export default function ChangePasswordCard() {
  const router=useRouter();
 
  async function changepasswordapi(values:ChangePasswordSchemaType) 
 {
  try 
  {
     console.log("Form values:", values);
  const response=await changepasswordrequest(values);
  console.log("change my password",response);
  
  
  if (response?.message === "success") {
  await removetoken();
  toast.success("Password changed successfully. Please login again.");
  router.push("/login");
  router.refresh();
} else {
  toast.error(response?.message || "Failed to change password.");
}
  } catch (error) 
  {
    console.log(error);
  }

 
 }

 const{handleSubmit,formState:{isSubmitting},control}=useForm<ChangePasswordSchemaType>({
  mode:"all",
  resolver:zodResolver(ChangePasswordSchema),
  defaultValues:{
    "currentPassword":"",
    "password":"",
    "rePassword":"",
  }

 })


  return (
    <div className="mt-40 mb-10 w-full max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-8 shadow-2xs">



      {/* Header */}
      <div className="flex items-center gap-3.5 mb-7">
        <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
          <Lock className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
            Change Password
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Update your account password
          </p>
        </div>
      </div>

      {/* Form */}
     
<form onSubmit={handleSubmit(changepasswordapi)} className="space-y-5">
  {/* Current Password */}
  <Controller
  name="currentPassword"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Current Password</FieldLabel>

      <div className="relative">
        <Input
          {...field}
          id={field.name}
          aria-invalid={fieldState.invalid}
          placeholder="Enter your current password"
          type="password"
          className="w-full bg-white border border-slate-200 rounded-xl pl-4 pr-11 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
        />
        <button
          type="button"
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors cursor-pointer"
        >
          <Eye size={18} />
        </button>
      </div>

      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>


  {/* New Password */}
<Controller
  name="password"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>New Password</FieldLabel>

      <div className="relative">
        <Input
          {...field}
          id={field.name}
          aria-invalid={fieldState.invalid}
          placeholder="Enter your new password"
          type="password"
          className="w-full bg-white border border-slate-200 rounded-xl pl-4 pr-11 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
        />
        <button
          type="button"
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors cursor-pointer"
        >
          <Eye size={18} />
        </button>
      </div>

      

      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>


  {/* Confirm New Password */}

<Controller
  name="rePassword"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Confirm New Password</FieldLabel>

      <div className="relative">
        <Input
          {...field}
          id={field.name}
          aria-invalid={fieldState.invalid}
          placeholder="Confirm your new password"
          type="password"
          className="w-full bg-white border border-slate-200 rounded-xl pl-4 pr-11 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
        />

        <button
          type="button"
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors cursor-pointer"
        >
          <Eye size={18} />
        </button>
      </div>

      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
  {/* Submit Button */}
  <div className="pt-2">
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-5 py-3 rounded-xl inline-flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
    >
      <Lock size={15} />
      <span>Change Password</span>
    </button>
  </div>
</form>

    </div>
  );
}