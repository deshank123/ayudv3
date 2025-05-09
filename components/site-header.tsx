'use client';

import Link from "next/link"
import { Phone, Mail } from 'lucide-react'
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/aboutus" },
  { name: "Ayurveda", href: "/ayurveda" },
  { name: "Treatment", href: "/treatment" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top bar */}
      <div className="bg-[#2F3B2F] text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+91 99887 72355</span>
            </div>
            <div className="hidden md:flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>Rishi Ayurveda Centre, Patiala</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://www.facebook.com/rishiayurvedapatiala" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4B04A]">
              Facebook
            </Link>
            <Link href="https://www.instagram.com/rishiayurvedacentre?igsh=YWZ3Z2VndWFkYm1k" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4B04A]">
              Instagram
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white py-4 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left-aligned site title */}
          <div className="text-10xl md:text-5xl font-bold text-[#2F3B2F] whitespace-nowrap pr-8">
            Rishi Ayurved Centre
          </div>

          {/* Centered navigation menu */}
          <div className="flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList className="hidden md:flex space-x-6">
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link
                      href={item.href}
                      className={`text-lg md:text-xl text-[#2F3B2F] hover:text-[#E4B04A] ${
                        pathname === item.href ? 'font-bold' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right-aligned button */}
          <Link
  href="/contact"
  className="bg-[#E4B04A] hover:bg-[#c99b3f] text-white font-semibold py-2 px-4 rounded transition duration-300"
>
  ONLINE CONSULTATION
</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === item.href
                      ? 'text-[#E4B04A] bg-[#2F3B2F]/5'
                      : 'text-[#2F3B2F] hover:text-[#E4B04A] hover:bg-[#2F3B2F]/5'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}