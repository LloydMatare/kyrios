"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, ChevronRight, Sparkles } from "lucide-react";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useUser();

  // Optional: Add scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/", id: "home" },
    { label: "Features", href: "/features", id: "features" },
    { label: "Pricing", href: "/pricing", id: "pricing" },
    { label: "About", href: "/about", id: "about" },
    { label: "Contact", href: "/contact", id: "contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 lg:gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-1.5 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                  <span className="text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    K
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Kyrios
                </span>
                <span className="hidden sm:inline text-xs text-gray-500 font-medium">
                  Modern Solutions
                </span>
              </div>
              <Sparkles className="hidden lg:block w-4 h-4 text-yellow-500 animate-pulse" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setActiveLink(link.id)}
                className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeLink === link.id
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
                {activeLink === link.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {!user ? (
              <>
                <SignInButton mode="modal">
                  <Button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                    asChild
                  >
                    <Link href="/signup">
                      Get Started
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </SignInButton>
              </>
            ) : (
              <UserButton />
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            {!user ? (
              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:inline-flex text-gray-700"
                asChild
              >
                <Link href="/login">Sign in</Link>
              </Button>
            ) : (
              <div className="hidden">
                <UserButton />
              </div>
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative w-10 h-10 rounded-lg hover:bg-gray-100"
                >
                  <Menu className="w-5 h-5 text-gray-700" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-96 p-0">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-1.5">
                        <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                          <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            K
                          </span>
                        </div>
                      </div>
                      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Kyrios
                      </span>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex-1 p-6">
                    <div className="space-y-1">
                      {navLinks.map((link) => (
                        <SheetClose key={link.id} asChild>
                          <Link
                            href={link.href}
                            onClick={() => setActiveLink(link.id)}
                            className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                              activeLink === link.id
                                ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border border-blue-100"
                                : "text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            {link.label}
                            <ChevronRight
                              className={`w-4 h-4 transition-transform duration-300 ${
                                activeLink === link.id
                                  ? "text-blue-500"
                                  : "text-gray-400"
                              }`}
                            />
                          </Link>
                        </SheetClose>
                      ))}
                    </div>

                    {/* Call to Action */}
                    {!user ? (
                      <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Ready to get started?
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          Join thousands of satisfied customers.
                        </p>
                        <Button
                          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg"
                          size="lg"
                          asChild
                        >
                          <Link href="/signup">
                            Get Started Free
                            <ChevronRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    ) : (
                      <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                        <UserButton />
                      </div>
                    )}
                  </div>

                  {/* Mobile Footer */}
                  <div className="p-6 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>© 2026 Kyrios</span>
                      <div className="flex items-center gap-4">
                        <Link
                          href="/privacy"
                          className="hover:text-gray-700 transition-colors"
                        >
                          Privacy
                        </Link>
                        <Link
                          href="/terms"
                          className="hover:text-gray-700 transition-colors"
                        >
                          Terms
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
