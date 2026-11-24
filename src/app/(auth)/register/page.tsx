"use client"
import { Field, FieldLabel } from '@/components/ui/field'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Input } from "@/components/ui/input";
import { FieldError } from "@/components/ui/field";
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, RegisterSchemaType } from '@/lib/Schemas/auth.schema';
import { SignupUser } from '@/services/auth.services';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Spinner } from '@/components/ui/spinner';

export default function Register() {
  const router=useRouter();
  
  
 const {handleSubmit,control,formState:{isSubmitting}}= useForm<RegisterSchemaType>({
 mode:"all",
 resolver:zodResolver(registerSchema),
  defaultValues:{
  "name":"",
  "email":"",
  "password":"",
  "repassword":"",
  "phone":""
 }})
 
 
 async function handleUserRegister(values:RegisterSchemaType)
  {
    console.log(values);
    try 
    {
      const response=await SignupUser(values);
      console.log(response);
      if(response.message==="success")
      {
toast.success("Welcome back! Login successful.");
router.push("/login");
      }
      else{
        toast.error(response.message)
      }
      
    } catch (error) 
    {
      console.log(error)
    }
  }

  return (



    <div className='px-4 py-8'>
     <form onSubmit={handleSubmit(handleUserRegister)} className='space-y-3'>
<Controller
  name="name"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Name</FieldLabel>
      
      
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter Your Name"
        type='text'
        className='bg-white border-gray-300 rounded-xl'
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
{/* email */}
<Controller
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
/>
{/* phone */}
<Controller
  name="phone"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Phone</FieldLabel>
      
      
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your Phone"
        type='tel'
        className='bg-white border-gray-300 rounded-xl'
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
{/* password */}
<Controller
  name="password"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Password</FieldLabel>
      
      
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your Password"
        type='password'
        className='bg-white border-gray-300 rounded-xl'
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
{/* repassword */}
<Controller
  name="repassword"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>
      
      
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Confirm Your Password"
        type='password'
        className='bg-white border-gray-300 rounded-xl'
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
<Button variant="default" type='submit' className='w-full'>

{isSubmitting?(<><Spinner /> Loading... </>) : ("Register")}
</Button>
     </form>

  
    </div>
  )
}
