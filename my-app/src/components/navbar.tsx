import React from "react";
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center ">
      <div className="text-2xl font-bold text-gray-800">ResumeBuilder</div>

      <NavigationMenu>
        <NavigationMenuList className="flex gap-4">
          <NavigationMenuItem>
            <NavigationMenuLink href="/create" className="text-gray-700 font-medium hover:text-blue-600">
              Create
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/layouts" className="text-gray-700 font-medium hover:text-blue-600">
              Layouts
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/about" className="text-gray-700 font-medium hover:text-blue-600">
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Contact Us Link using Next.js Link component */}
      <Link href="/contact" className="text-gray-700 font-medium hover:text-blue-600">
        
          Contact Us
        
      </Link>
    </nav>
  );
};

export default Navbar;
