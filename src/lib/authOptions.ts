
import { SigninUser } from "@/services/auth.services"
import { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "credentials",

      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" }
      },
// Validate user credentials and authenticate with the API

      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const response = await SigninUser({
          email: credentials.email,
          password: credentials.password
        });

        if (response.message === "success") {
          return response;
        } else {
          throw new Error(response.message || "Invalid Credentials");
        }
      }
    })
  ],

  pages: {
    signIn: "/login"
  },
  // Store user data and token in JWT

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user.user;
        token.token = user.token;
      }

      return token;
    },
// take token from server return session data
    async session({ session, token }) {
      
    if (token.user) 
    {
    session.user = token.user;
    }

      return session;
    }

  }
}
