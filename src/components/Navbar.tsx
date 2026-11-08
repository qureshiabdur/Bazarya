"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight, FileText, Store, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Become a Seller", href: "/become-a-seller", highlight: true },
  { name: "Commission", href: "/commission", icon: FileText },
  { name: "Store", href: "/store", badge: "Coming Soon" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-offwhite/85 backdrop-blur-md border-b border-brand-lavender/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo - Box container removed */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-28 h-10 transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/logo.png" 
              alt="Bazarya Logo" 
              fill 
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  link.highlight
                    ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/25 hover:bg-brand-orange/90"
                    : isActive
                    ? "text-brand-purple bg-brand-lavender/60 font-semibold"
                    : "text-brand-charcoal hover:text-brand-purple hover:bg-brand-lavender/30"
                }`}
              >
                {link.icon && <link.icon className="w-4 h-4" />}
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-brand-charcoal hover:bg-brand-lavender/50 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-offwhite border-b border-brand-lavender overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      link.highlight
                        ? "bg-brand-orange text-white"
                        : isActive
                        ? "bg-brand-lavender text-brand-purple font-semibold"
                        : "text-brand-charcoal hover:bg-brand-lavender/40"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {link.icon && <link.icon className="w-5 h-5" />}
                      {link.name}
                    </span>
                    <ChevronRight className="w-4 h-4 opacity-60" />
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}