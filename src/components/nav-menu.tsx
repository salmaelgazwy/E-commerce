
"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Headset } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu
    {...props}
    className="flex items-center justify-between w-full"
  >
    {/* Links */}
    <NavigationMenuList className="hidden md:flex space-x-0 rtl:space-x-reverse">

      {/* Home */}
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="/">Home</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      {/* Shop */}
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="/products">Products</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      {/* Categories */}
      <NavigationMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Categories</Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/categories">
 All Categories
              </Link>
             
              </DropdownMenuItem>
            <DropdownMenuItem>Fashion</DropdownMenuItem>
            <DropdownMenuItem>Home & Kitchen</DropdownMenuItem>
            <DropdownMenuItem>Beauty</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </NavigationMenuItem>

      {/* Brands */}
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="/brands">Brands</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

    </NavigationMenuList>

    {/* Support */}
    <div className="hidden md:flex items-center gap-2">
      <div className="p-2 rounded-full bg-[#F0FDF4] flex justify-center items-center">
        <Headset className="text-green-900" size={15} />
      </div>

      <div className="flex flex-col">
        <span className="font-semibold text-xs text-gray-400">Support</span>
        <span className="text-xs text-black font-semibold">24/7 Help</span>
      </div>
    </div>

  </NavigationMenu>
);
