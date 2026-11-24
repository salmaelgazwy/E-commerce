import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  const {pathname}=request.nextUrl;

  const pathName=pathname==="/login"||pathname==="/register";
  const token =await getToken({req:request});
  if(token && pathName)
  {

    return NextResponse.redirect(new URL('/profile', request.url))
  }
else if(!token && !pathName)
{
return NextResponse.redirect(new URL('/login', request.url))
}

  
  return NextResponse.next();
  
}



export const config = {
  matcher: [`/brands`,`/cart`,`/wishlist`,`/login`,`/register`],
}