"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { 
  RotateCcw, 
  Clock, 
  History, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ShieldCheck, 
  Banknote, 
  Building2, 
  Mail, 
  ArrowRight,
  FileCheck,
  HelpCircle,
  PackageCheck
} from "lucide-react";

// Dates Configuration (As Requested)
const EFFECTIVE_DATE = "January 1, 2027";
const LAST_UPDATED = "January 1, 2027";

// Key Highlights
const refundHighlights = [
  { title: "3-Day Window", desc: "Submit return requests within 3 calendar days of delivery.", icon: Clock },
  { title: "7-Day Refund SLA", desc: "Approved refunds processed to your bank within 7 working days.", icon: Banknote },
  { title: "Courier Pickup", desc: "Reverse pickups arranged via designated courier partners.", icon: RotateCcw },
  { title: "Transparent Review", desc: "Assessed via photo/video proof & order records.", icon: ShieldCheck },
];

export default function RefundsPolicyPage() {
  return (
    <div className="space-y-20 pb-24 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-gradient-to-b from-brand-lavender/50 via-brand-offwhite to-brand-offwhite text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-brand-purple/20"
          >
            <RotateCcw className="w-4 h-4 text-brand-orange" /> Customer Protection Policy
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep leading-[1.15]"
          >
            Returns & <span className="text-brand-purple">Refunds Policy</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-charcoal/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-body"
          >
            We aim to provide a transparent and satisfying shopping experience. Learn about our return request guidelines, refund SLA, and resolution workflows.
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
          {refundHighlights.map((item, idx) => (
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
          
          {/* Section 1 & 2: Introduction & Timeframe */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
              <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">01</span>
              Return Request Timeframe
            </h2>
            <p>
              Customers may submit a return request within <strong>3 calendar days</strong> of receiving their order. We encourage customers to inspect parcels promptly upon delivery.
            </p>
            <div className="p-4 rounded-2xl bg-brand-purple/5 border border-brand-purple/20 flex items-start gap-3">
              <Clock className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-brand-deep">
                <strong>Strict 3-Day Window:</strong> Return requests submitted after the 3-calendar-day timeframe will generally not be accepted, except where approved under exceptional circumstances or mandated by applicable law.
              </div>
            </div>
          </div>

          {/* Section 3 & 4: Conditions & Exclusions */}
          <div className="space-y-6">
            <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
              <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">02</span>
              Return Eligibility & Exclusions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Eligible */}
              <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-3">
                <h3 className="font-heading font-bold text-emerald-950 text-base flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Eligible Circumstances
                </h3>
                <ul className="list-disc list-inside text-xs text-brand-charcoal/90 space-y-1.5">
                  <li>Product received is materially different from description.</li>
                  <li>Wrong item or size delivered.</li>
                  <li>Product fails to match advertised specs or condition.</li>
                  <li>Item delivered in defective or damaged state.</li>
                </ul>
              </div>

              {/* Non-Eligible */}
              <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-3">
                <h3 className="font-heading font-bold text-rose-950 text-base flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-600" /> Ineligible Circumstances
                </h3>
                <ul className="list-disc list-inside text-xs text-brand-charcoal/90 space-y-1.5">
                  <li>Request submitted after the 3-day window.</li>
                  <li>Damage caused by customer misuse, negligence or storage.</li>
                  <li>Product altered, repaired or missing original packaging.</li>
                  <li>Inability to provide supporting photo/video evidence.</li>
                </ul>
              </div>
            </div>

            <p className="text-xs text-brand-muted">
              Products must be returned in their original condition, complete with packaging, tags, accessories, and user manuals.
            </p>
          </div>

          {/* Section 5, 6 & 7: How to Request & Return Shipment */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
              <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">03</span>
              Return Process & Reverse Logistics
            </h2>
            <p>
              Initiate a return request via your Bazarya account dashboard or Support Team. Please prepare:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-brand-offwhite border border-brand-lavender flex items-center gap-2">
                <PackageCheck className="w-4 h-4 text-brand-purple shrink-0" /> Order number & item name
              </div>
              <div className="p-3.5 rounded-xl bg-brand-offwhite border border-brand-lavender flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-brand-orange shrink-0" /> Reason & description
              </div>
              <div className="p-3.5 rounded-xl bg-brand-offwhite border border-brand-lavender flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-brand-purple shrink-0" /> Clear photos or video proof
              </div>
            </div>
            <p className="text-xs text-brand-muted pt-1">
              Once approved, reverse pickup will be arranged via our courier partner. <strong>Do not ship parcels independently without explicit Bazarya support instructions.</strong>
            </p>
          </div>

          {/* Section 8, 9, 10 & 11: Refund Eligibility, 7-Day SLA & Bank Transfers */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
              <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">04</span>
              Refund Processing SLA & Method
            </h2>
            <p>
              Following return item inspection and verification, approved refunds are handled through direct bank transfers.
            </p>

            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-3">
              <h3 className="font-heading font-bold text-emerald-950 text-base flex items-center gap-2">
                <Banknote className="w-5 h-5 text-emerald-600" /> 7 Working Days Refund SLA
              </h3>
              <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                Once a refund is approved and account verification is completed, Bazarya will process and transfer funds to the customer's designated bank account <strong>within seven (7) working days</strong>.
              </p>
            </div>

            <p className="text-xs text-brand-muted">
              Our support team will contact you via phone, email, or SMS to verify your bank title and account credentials. Providing accurate bank details ensures timely processing without banking delays.
            </p>
          </div>

          {/* Section 12 & 13: Order Cancellation & Seller Responsibilities */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
              <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">05</span>
              Cancellations & Seller Obligations
            </h2>
            <p>
              Orders can be cancelled prior to seller dispatch. Once shipped, standard return guidelines apply. Sellers are required to cooperate fully during dispute investigations, and repeated violations may lead to seller store suspension.
            </p>
          </div>

          {/* Section 14, 15 & 16: Disputes & Support Contact */}
          <div className="space-y-4 pt-4 border-t border-brand-lavender">
            <h2 className="font-heading text-2xl font-bold text-brand-deep">06. Dispute Resolution & Support</h2>
            <p>If you have any questions or disagree with a return decision, contact our support team:</p>
            
            <div className="p-6 rounded-2xl bg-brand-lavender/40 border border-brand-purple/20 space-y-3">
              <p className="font-heading font-bold text-brand-deep">Bazarya Returns & Disputes Team</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-medium text-brand-charcoal">
                <a href="mailto:support@bazarya.com" className="inline-flex items-center gap-2 text-brand-purple hover:underline">
                  <Mail className="w-4 h-4 text-brand-orange" /> support@bazarya.com
                </a>
                <span className="inline-flex items-center gap-2 text-brand-charcoal/80">
                  <Building2 className="w-4 h-4 text-brand-purple" /> Lahore, Pakistan
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 rounded-3xl bg-brand-lavender/40 border border-brand-purple/20 space-y-4">
          <h3 className="font-heading text-xl font-bold text-brand-deep">Need Assistance With a Return?</h3>
          <p className="text-xs text-brand-muted">Our customer support team is available to help you process your return request.</p>
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