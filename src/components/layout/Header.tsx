"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Search, 
  ShoppingBag, 
  User, 
  Menu as MenuIcon,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,    
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const categories = [
  { name: "Men", path: "/collection/men" },
  { name: "Women", path: "/collection/women" },
  { name: "Kids", path: "/collection/kids" },
  { name: "Casual", path: "/collection/casual" },
  { name: "Formal", path: "/collection/formal" },
];

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-sm border-b border-border py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {categories.map((category) => (
                    <Link
                      key={category.path}
                      href={category.path}
                      className="px-2 py-2 text-lg hover:bg-muted rounded-md transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold text-emerald">
            <Image 
            alt="Dubai Shoes"
            src="/DubaiShoes.PNG"
            width={90}
            height={90}
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category.path}
                href={category.path}
                className="text-foreground hover:text-emerald font-medium transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Right navigation items */}
          <div className="flex items-center space-x-4">
            {showSearch ? (
              <div className="relative flex items-center animate-fadeIn">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="w-[200px] pr-8"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0"
                  onClick={() => setShowSearch(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSearch(true)}
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            )}
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;