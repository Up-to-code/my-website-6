"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth, UserButton } from "@clerk/nextjs";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: "/", label: "الرئيسية" },
    { href: "/services", label: "الخدمات" },
    { href: "/about", label: "من نحن" },
    { href: "/contact", label: "اتصل بنا" },
    { href: "/booking", label: "احجز الآن" },
  ];

  const { userId } = useAuth();

  return (

    <>
     <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 backdrop-blur supports-[backdrop-filter]:bg-zinc-900 transition-all duration-300 ease-in-out text-white px-5 shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between">
        {/* Logo and Branding */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl flex gap-2">
            منصور <p className="text-blue-600">احمد</p>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-blue-500"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Authentication Buttons & Mobile Menu */}
        <div className="flex items-center space-x-4">
          {userId === "user_2nUNH6vWCjgfLb5c2Y4sPln1ZWl" && (
            <Link href="/admin" className="hidden md:inline-block text-sm font-medium hover:text-blue-500">
              المشرف
            </Link>
          )}

          {!userId ? (
            <div className="flex space-x-4 items-center">
              <Link href="/sign-up" className="hidden md:inline-block text-sm font-medium hover:text-blue-500">
                أنشئ حساب جديد
              </Link>
              <Link href="/sign-in">
                <Button className="bg-blue-600 text-white hover:bg-blue-500 transition-all">
                  تسجيل الدخول
                </Button>
              </Link>
            </div>
          ) : (
            <UserButton />
          )}

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden p-0 text-base hover:bg-transparent focus:ring-0"
                onClick={toggleMenu}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-zinc-800 text-white transition-transform duration-300"
            >
              <nav className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-semibold hover:text-blue-500 hover:scale-105 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                {userId === "user_2nUNH6vWCjgfLb5c2Y4sPln1ZWl" && (
                  <Link
                    href="/admin"
                    className="text-lg font-semibold hover:text-blue-500 hover:scale-105 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    المشرف
                  </Link>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>   
    <div className="h-[48px]"></div>
    </>

  );
}
