"use client"
import Logo from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { Heart, IdCard, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { Spinner } from "./ui/spinner";
import { Badge } from "./ui/badge";
import { useContext } from "react";
import { CartContext } from "@/context/Cartcontext";
import { wishlistcontext } from "@/context/Wishlistcontext";

const Navbar = () => {

const cartcontext = useContext(CartContext);

const { noofcarditems } = cartcontext!;
  
  const session=useSession()
  console.log("fromnavbar",session);
 function signoutuser()
 {
  signOut({redirect:true,callbackUrl:"/login"})
 }
 
 const { count } = useContext(wishlistcontext);
 return (
<nav className="fixed inset-x-4 top-6 z-50 mx-auto h-16 max-w-(--breakpoint-xl) rounded-full border bg-background">
      <div className="mx-auto flex h-full items-center gap-6 px-4">

        {/* Logo and Search */}
        <div className="flex-1 min-w-0">
          <Logo />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block shrink-0">
          <NavMenu />
        </div>

        {/* Icons */}
        <div className="flex shrink-0 items-center gap-3 text-gray-500">
        
          
          
        <>
          {session.status==="loading"?<Spinner />:session.status==="authenticated"?<>
           <Button variant="ghost" size="icon" className="hover:text-primary">
  <Link href="/wishlist" className="relative">
    <Heart />

    {count > 0 && (
      <Badge className="absolute -top-2 -right-2 w-4 h-4 p-0 text-xs flex justify-center items-center bg-red-600 text-white">
        {count}
      </Badge>
    )}
  </Link>
</Button>
          <Button variant="ghost" size="icon" className="hover:text-primary">
            <Link href="/cart">
            <div className="relative">
 <ShoppingCart  />
 {noofcarditems>0&&( <Badge className="absolute top-[-11px] right-[-13px] w-4 h-4 text-xs" variant="default">{noofcarditems}</Badge>
)}
            </div>
            
            </Link>
  
          </Button>
            <Button variant="ghost" size="icon" className="hidden  md:block hover:text-primary ">
              <Link href="/profile"className="flex justify-center items-center">
  
  
             <User  />
              </Link>

          </Button>
          <Button onClick={signoutuser} variant="destructive" >Logout</Button>
          </>:<>
          
  {/* login */}
          <Button variant="default">
            <Link href="/login">
            Login
            </Link>
          </Button>
          {/* register */}
<Button variant="default">
            <Link href="/register">
Register
            </Link>
          </Button>
          </>}
        </>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>

      </div>
    </nav>
  );
};
export default Navbar;