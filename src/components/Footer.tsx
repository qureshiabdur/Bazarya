'use client'
import Link from "next/link";
import Image from "next/image";
import { FileText, Store, ArrowRight } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-white pt-16 pb-12 border-t border-brand-purple/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            {/* Logo - Box container removed */}
            <Link href="/" className="inline-block group">
              <div className="relative w-32 h-10 transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/logo-white.png" 
                  alt="Bazarya Logo" 
                  fill 
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            <p className="text-brand-lavender/80 text-sm leading-relaxed max-w-sm">
              Empowering digital commerce with advanced multi-vendor ecosystems, transparent commissions, and fully animated shopping experiences.
            </p>

            {/* Social Media Links */}
            <div className="pt-1 flex items-center gap-3">
              <a 
                href="https://www.instagram.com/bazarya__?srtk=amRtMHI2azE0YWNz" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-brand-lavender hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.facebook.com/share/1E4aR9Y9PR/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-brand-lavender hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/bazarya-marketplace/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-brand-lavender hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link 
                href="/become-a-seller" 
                className="px-4 py-2 bg-brand-orange text-white text-xs font-semibold rounded-full shadow-md hover:bg-brand-orange/90 transition-all flex items-center gap-1.5"
              >
                <Store className="w-3.5 h-3.5" /> Seller Onboarding
              </Link>
              <Link 
                href="/commission" 
                className="px-4 py-2 bg-white/10 text-white text-xs font-semibold rounded-full hover:bg-white/20 transition-all flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" /> Commission PDF
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-base text-white mb-4">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-brand-lavender/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-brand-lavender/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/store" className="text-brand-lavender/70 hover:text-white transition-colors flex items-center gap-2">Store <span className="text-[10px] bg-brand-purple text-white px-1.5 py-0.5 rounded-full">Soon</span></Link></li>
              <li><Link href="/contact" className="text-brand-lavender/70 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-brand-lavender/70 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h3 className="font-heading font-bold text-base text-white mb-4">Legal & Policies</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/privacy-policy" className="text-brand-lavender/70 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-brand-lavender/70 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/shipping-policy" className="text-brand-lavender/70 hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link href="/return-refund-policy" className="text-brand-lavender/70 hover:text-white transition-colors">Returns & Refunds</Link></li>
            </ul>
          </div>

          {/* Newsletter / Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-base text-white mb-4">Stay Updated</h3>
            <p className="text-xs text-brand-lavender/70 mb-3">Subscribe to get latest updates and commission structures directly.</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-2 text-sm bg-white/5 border border-white/20 rounded-xl text-white placeholder-brand-muted focus:outline-none focus:border-brand-orange"
              />
              <button 
                type="submit" 
                className="w-full py-2 bg-brand-purple text-white text-xs font-semibold rounded-xl hover:bg-brand-purple/80 transition-colors flex items-center justify-center gap-1.5"
              >
                Subscribe <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-lavender/60 gap-4">
          <p>© {new Date().getFullYear()} Bazarya. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}