"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { 
  Truck, 
  Package, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  RotateCcw, 
  Boxes, 
  ShieldCheck, 
  Mail, 
  ArrowRight,
  History,
  Banknote,
  Search
} from "lucide-react";

// Dates Configuration
const EFFECTIVE_DATE = "January 1, 2027";
const LAST_UPDATED = "January 1, 2027";

// Highlights
const shippingHighlights = [
  { title: "Logistics Network", desc: "Fulfilled via trusted partners including Trax Logistics.", icon: Truck },
  { title: "Multi-Vendor Parcels", desc: "Items from different sellers may arrive separately.", icon: Boxes },
  { title: "Cash on Delivery", desc: "Available for eligible locations & verified orders.", icon: Banknote },
  { title: "Shipment Tracking", desc: "Real-time order tracking via account notifications.", icon: Search },
];

export default function ShippingPolicyPage() {
  return (
    <div className="space-y-20 pb-24 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-gradient-to-b from-brand-lavender/50 via-brand-offwhite to-brand-offwhite text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-brand-orange/20"
          >
            <Truck className="w-4 h-4" /> Official Logistics Guide
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep leading-[1.15]"
          >
            Shipping & <span className="text-brand-orange">Delivery Policy</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-charcoal/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-body"
          >
            Learn how orders are processed, collected from independent sellers, shipped via our courier partners, and delivered to your doorstep.
          </motion.p>

          {/* Dates Meta Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex flex-wrap justify-center items-center gap-4 pt-2 text-xs font-semibold text-brand-muted"
          >
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-brand-lavender shadow-sm flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-purple" /> Effective Date: <strong className="text-brand-deep">{EFFECTIVE_DATE}</strong>
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-brand-lavender shadow-sm flex items-center gap-1.5">
              <History className="w-3.5 h-3.5 text-brand-orange" /> Last Updated: <strong className="text-brand-deep">{LAST_UPDATED}</strong>
            </span>
          </motion.div>

        </div>
      </section>

      {/* 2. HIGHLIGHT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shippingHighlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-white border border-brand-lavender shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-2xl bg-brand-lavender text-brand-purple flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-brand-orange" />
              </div>
              <h3 className="font-heading font-bold text-base text-brand-deep mb-1">{item.title}</h3>
              <p className="text-brand-muted text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. MAIN POLICY CONTENT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-brand-lavender rounded-3xl p-8 sm:p-12 shadow-xl space-y-12 text-brand-charcoal text-sm sm:text-base leading-relaxed">
          
          {/* Section 1: Introduction */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
              <span className="w-8 h-8 rounded-xl bg-brand-orange text-white text-xs font-bold flex items-center justify-center shrink-0">01</span>
              Introduction & Logistics Network
            </h2>
            <p>
              Bazarya is a multi-vendor online marketplace connecting customers with independent sellers across Pakistan. This Shipping & Delivery Policy explains how orders are processed, collected, shipped, and delivered.
            </p>
            <div className="p-4 rounded-2xl bg-brand-lavender/40 border border-brand-purple/20 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-brand-deep">
                <strong>Logistics Partnerships:</strong> Bazarya collaborates with trusted third-party courier and logistics networks, including <strong>Trax Logistics</strong>, to ensure nationwide parcel pickup and safe delivery.
              </div>
            </div>
          </div>

          {/* Section 2 & 3: Order Processing & Pickup */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
              <span className="w-8 h-8 rounded-xl bg-brand-orange text-white text-xs font-bold flex items-center justify-center shrink-0">02</span>
              Order Processing & Seller Pickup
            </h2>
            <p>
              Once your order is placed, sellers are notified to prepare, package, and verify the items. Sellers must hand over ready packages to courier riders within designated handling windows.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3.5 rounded-xl bg-brand-offwhite border border-brand-lavender flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0" /> Seller confirms item availability
              </div>
              <div className="p-3.5 rounded-xl bg-brand-offwhite border border-brand-lavender flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0" /> Packaging verified for dispatch
              </div>
              <div className="p-3.5 rounded-xl bg-brand-offwhite border border-brand-lavender flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0" /> Courier pickup from vendor origin
              </div>
              <div className="p-3.5 rounded-xl bg-brand-offwhite border border-brand-lavender flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0" /> Transit scan & tracking code generation
              </div>
            </div>
          </div>

          {/* Section 4 & 5: Shipping, Timelines & Tracking */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
              <span className="w-8 h-8 rounded-xl bg-brand-orange text-white text-xs font-bold flex items-center justify-center shrink-0">03</span>
              Delivery Timelines & Tracking
            </h2>
            <p>
              Delivery timeframes shown during checkout are estimates based on seller origin, customer destination, and courier route schedules. Track your shipment status directly through your Bazarya user dashboard or tracking notifications.
            </p>
          </div>

          {/* Section 6 & 7: Shipping Charges & Cash on Delivery (COD) */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
              <span className="w-8 h-8 rounded-xl bg-brand-orange text-white text-xs font-bold flex items-center justify-center shrink-0">04</span>
              Shipping Rates & Cash on Delivery (COD)
            </h2>
            <p>
              Shipping rates are calculated transparently during checkout based on parcel weight, volume dimensions, and destination zone.
            </p>
            <div className="p-5 rounded-2xl bg-brand-offwhite border border-brand-lavender space-y-2">
              <h4 className="font-heading font-bold text-brand-deep text-sm flex items-center gap-2">
                <Banknote className="w-4 h-4 text-brand-orange" /> Cash on Delivery (COD) Terms
              </h4>
              <p className="text-xs text-brand-muted leading-relaxed">
                Where COD is available, customers agree to pay the exact invoice amount upon delivery. Failure to accept or repeated delivery refusals may result in COD restriction for future orders.
              </p>
            </div>
          </div>

          {/* Section 8 & 9: Failed Deliveries & Multi-Seller Orders */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
              <span className="w-8 h-8 rounded-xl bg-brand-orange text-white text-xs font-bold flex items-center justify-center shrink-0">05</span>
              Delivery Attempts & Multi-Vendor Shipments
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-brand-offwhite border border-brand-lavender space-y-2">
                <h4 className="font-heading font-bold text-brand-deep text-sm">Failed Deliveries</h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  If you are unavailable or contact details are invalid, couriers will attempt re-delivery before initiating Return-to-Origin (RTO).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-brand-offwhite border border-brand-lavender space-y-2">
                <h4 className="font-heading font-bold text-brand-deep text-sm">Separate Parcels</h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Orders containing items from multiple sellers will be shipped separately in distinct parcels with individual tracking numbers.
                </p>
              </div>
            </div>
          </div>

          {/* Section 10 & 11: Incorrect Items & Delay Exceptions */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
              <span className="w-8 h-8 rounded-xl bg-brand-orange text-white text-xs font-bold flex items-center justify-center shrink-0">06</span>
              Delays & Operational Disruption
            </h2>
            <p>
              While we strive for prompt deliveries, occasional delays may happen due to extreme weather, public holidays, road closures, or security conditions beyond courier control.
            </p>
          </div>

          {/* Section 12: Contact Support */}
          <div className="space-y-4 pt-4 border-t border-brand-lavender">
            <h2 className="font-heading text-2xl font-bold text-brand-deep">07. Shipping Inquiries & Support</h2>
            <p>If you have any questions regarding your parcel status or shipping charges, get in touch:</p>
            
            <div className="p-6 rounded-2xl bg-brand-lavender/40 border border-brand-purple/20 space-y-3">
              <p className="font-heading font-bold text-brand-deep">Bazarya Logistics Support</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-medium text-brand-charcoal">
                <a href="mailto:support@bazarya.com" className="inline-flex items-center gap-2 text-brand-purple hover:underline">
                  <Mail className="w-4 h-4 text-brand-orange" /> support@bazarya.com
                </a>
                <span className="inline-flex items-center gap-2 text-brand-charcoal/80">
                  <MapPin className="w-4 h-4 text-brand-purple" /> Lahore, Pakistan
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 rounded-3xl bg-brand-lavender/40 border border-brand-purple/20 space-y-4">
          <h3 className="font-heading text-xl font-bold text-brand-deep">Need Help Tracking a Package?</h3>
          <p className="text-xs text-brand-muted">Our customer support team is available to assist you with order status updates.</p>
          <div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-brand-purple text-white font-semibold text-xs shadow-md hover:bg-brand-deep transition-all inline-flex items-center gap-2"
            >
              Contact Support <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}