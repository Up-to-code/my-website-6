"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
 
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { href: "/", label: "الرئيسية" },
    { href: "/services", label: "الخدمات" },
    { href: "/about", label: "من نحن" },
    { href: "/contact", label: "اتصل بنا" },
    { href: "/booking", label: "احجز الآن" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 backdrop-blur supports-[backdrop-filter]:bg-zinc-900 transition-all duration-300 ease-in-out text-white px-5">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
           <span className="font-bold text-xl flex gap-2"> منصور <p className="text-blue-600">احمد</p></span>
        </Link>
        <div className="hidden md:flex space-x-4 mr-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="px-0 text-base hover:bg-transparent focus:ring-0 md:hidden" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-zinc-800 text-white">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-semibold transition-transform transform hover:scale-105 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}