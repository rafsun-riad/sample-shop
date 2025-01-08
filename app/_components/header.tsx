import { Button } from "@/components/ui/button";
import { House, ScrollText, Phone, ShoppingCart } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className=" bg-slate-700 min-w-full py-5 fixed top-0 z-50 shadow-md">
      <div className="flex items-center container mx-auto justify-between">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/sample-shop-logo.png"
              alt="Sample Shop Logo"
              width={50}
              height={30}
            />
            <h1 className="text-2xl font-bold text-white">Sample Shop</h1>
          </Link>
        </div>
        <div className="text-white">
          <NavigationMenu>
            <NavigationMenuList className={cn("gap-5")}>
              <NavigationMenuItem>
                <Link href="/" className="inline-flex items-center gap-1">
                  <House className="h-5 w-5" />
                  <span>Home</span>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" className="inline-flex items-center gap-1">
                  <ScrollText className="h-5 w-5" />
                  <span>About us</span>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1"
                >
                  <Phone className="h-5 w-5" />
                  <span>Contact Us</span>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="text-white flex items-center gap-5">
          <div>
            <Link href="/cart" className="flex items-center gap-1 relative">
              <ShoppingCart />
              <span className=" absolute -top-3 right-0 text-xs">0</span>
            </Link>
          </div>
          <div>
            <Button
              asChild
              className={cn("bg-lime-700 px-8 hover:bg-lime-700/70")}
            >
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
