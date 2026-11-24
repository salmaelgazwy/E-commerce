import path from "path";
import { date, email, z } from "zod";
export const registerSchema=z.object({
    name:z.string().nonempty("Name is required.").min(3,"Name must be at least 3 characters long.").max(15,"Name cannot exceed 10 characters."),
email:z.string().nonempty("Email is required.").regex(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "Please enter a valid email address."
  ),
  phone:z.string().nonempty("Phone number is required.").regex(/^01[0125][0-9]{8}$/, "Please enter a valid phone number."),

password:z.string().nonempty("Password is required.").regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "Password must contain at least 8 characters, including uppercase, lowercase, a number, and a special character.",
),
repassword:z.string().nonempty("repassword is required")})
.refine((data)=>{
    return data.password===data.repassword
},{path:["repassword"],message:"Passwords do not match. Please make sure both passwords are identical."}


)

export const LoginSchema=z.object({
email:z.string().nonempty("Email is required.").regex(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "Please enter a valid email address."
  ),

password:z.string().nonempty("Password is required.").regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "Password must contain at least 8 characters, including uppercase, lowercase, a number, and a special character.",
),


})

export const forgotpasswordSchema = z.object({
  email: z.string()
    .nonempty("Email is required.")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address."
    )
     
});

export const resetpasswordschema= z.object({
    password: z.string().nonempty("Password is required.").regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least 8 characters, including uppercase, lowercase, a number, and a special character."
      ),
 rePassword: z.string().nonempty("Confirm Password is required"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match.",
    path: ["rePassword"],
  });

export const ChangePasswordSchema=z.object({
  currentPassword:z.string().nonempty("Current password is required"),
  password:z.string().nonempty("New password is required").regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "Password must contain at least 8 characters, including uppercase, lowercase, a number, and a special character.",
),
rePassword:z.string().nonempty("Confirm password is required")
}).refine((data) => data.password === data.rePassword, {
  message: "Passwords do not match",
  path: ["rePassword"],
})



export const resetcodeSchema = z.object({
  resetCode: z.string()
    .nonempty("Reset code is required.")
    .regex(/^[0-9]{6}$/, "Reset code must be 6 digits.")
});

export type RegisterSchemaType=z.infer<typeof registerSchema>
export type LoginSchemaType=z.infer<typeof LoginSchema>
export type ForgotPasswordSchemaType=z.infer<typeof  forgotpasswordSchema>
export type resetcodeSchemaType=z.infer<typeof resetcodeSchema>
export type resetpasswordschemaType=z.infer<typeof resetpasswordschema>
export type ChangePasswordSchemaType=z.infer<typeof ChangePasswordSchema>
