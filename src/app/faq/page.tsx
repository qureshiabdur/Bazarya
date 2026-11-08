"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, Sparkles, ArrowRight, MessageSquare } from "lucide-react";

const faqs = [
  {
    q: "Is Bazarya currently accepting orders?",
    a: "Bazarya is preparing for its official launch. Shopping services will become available once the marketplace is ready."
  },
  {
    q: "Can anyone become a seller?",
    a: "Interested businesses and individuals may apply, subject to identity verification, eligibility requirements and marketplace approval."
  },
  {
    q: "How are seller commissions calculated?",
    a: "Commission is based on the applicable category and subcategory rate and the relevant discount funding rules."
  },
  {
    q: "Does Bazarya support Cash on Delivery?",
    a: "Payment methods, including Cash on Delivery, will be announced according to the available payment and delivery arrangements at launch."
  },
  {
    q: "How can I track an order?",
    a: "Once the marketplace is operational, customers will be able to access order and shipment status through their accounts."
  },
  {
    q: "How can I report a seller?",
    a: "Customers will be able to submit complaints through the marketplace's support and dispute channels."
  },
  {
    q: "Where can I find the commission rates?",
    a: "The published commission schedule will be available on the Commission Structure page."
  }
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="space-y-24 pb-24 overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-gradient-to-b from-brand-lavender/50 via-brand-offwhite to-brand-offwhite text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-lavender text-brand-purple text-xs font-semibold tracking-wide border border-brand-purple/20"
          >
            <HelpCircle className="w-3.5 h-3.5 text-brand-orange" />
            Knowledge Base
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep leading-[1.15]"
          >
            Frequently Asked <span className="text-brand-purple">Questions</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-charcoal/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-body"
          >
            Find quick answers to common questions about buying, selling, commissions, and marketplace policies.
          </motion.p>
        </div>
      </section>

      {/* ACCORDION SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="rounded-2xl bg-white border border-brand-lavender overflow-hidden shadow-sm hover:border-brand-purple/30 transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-heading font-bold text-lg text-brand-deep">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-brand-lavender/60 text-brand-purple flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-brand-purple text-white" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6 text-brand-charcoal/80 text-sm leading-relaxed border-t border-brand-lavender/50 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* STILL HAVE QUESTIONS CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-lavender/40 border border-brand-purple/20 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-brand-purple text-white flex items-center justify-center mx-auto shadow-md">
            <MessageSquare className="w-6 h-6 text-brand-orange" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-brand-deep">
            Still Have Questions?
          </h3>
          <p className="text-brand-charcoal/80 text-sm max-w-md mx-auto">
            Can't find the answer you're looking for? Reach out to our team directly.
          </p>
          <div>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-brand-purple text-white font-bold text-sm shadow-md hover:bg-brand-deep transition-all inline-flex items-center gap-2"
            >
              Contact Support <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}