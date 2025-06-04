"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./theme-button"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="shadow-md dark:shadow-[#242424] px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold ">ResumeBuilder</div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center flex-grow">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/create"
                className=" font-medium hover:text-blue-600"
              >
                Create
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/layouts"
                className=" font-medium hover:text-blue-600"
              >
                Layouts
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className=" font-medium hover:text-blue-600"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>



      <ModeToggle />


      {/* Contact Us Link */}
      <Link
        href="/contact"
        className="text-gray-700 font-medium hover:text-blue-600  hidden"
      >
        Contact Us
      </Link>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-50 md:hidden">
          <ul className="flex flex-col items-start px-6 py-4 space-y-4">
            <li>
              <Link
                href="/create"
                className="text-gray-700 font-medium hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Create
              </Link>
            </li>
            <li>
              <Link
                href="/layouts"
                className="text-gray-700 font-medium hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Layouts
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-700 font-medium hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-700 font-medium hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>

        </div>
      )}
    </nav>
  )
}

export default Navbar
