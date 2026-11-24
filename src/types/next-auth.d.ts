import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt"
declare module "next-auth" {
  interface UserData {
    name: string;
    email: string;
    role: string;
  }
 
 
    interface User {
    user: UserData;
    token: string;
  }

 
}


declare module "next-auth/jwt" {

  interface JWT {
    user:UserData
  }
}