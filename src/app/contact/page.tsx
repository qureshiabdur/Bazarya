"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence} from "motion/react";
import { 
  Mail, 
  Phone, 
  User, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  Store, 
  Handshake, 
  Headphones, 
  FileText,
  ChevronDown
} from "lucide-react";
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"

const inquiryTypes = [
  "Customer Inquiries",
  "Seller Registration Inquiries",
  "Business Partnerships",
  "Technical Support",
  "General Questions"
];

const socialLinks = [
  { 
    name: "Instagram", 
    href: "https://www.instagram.com/bazarya__?srtk=amRtMHI2azE0YWNz", 
    icon: FaInstagram, 
    color: "hover:bg-pink-600" 
  },
  { 
    name: "Facebook", 
    href: "https://www.facebook.com/share/1E4aR9Y9PR/", 
    icon: FaFacebook, 
    color: "hover:bg-blue-600" 
  },
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/company/bazarya-marketplace/", 
    icon: FaLinkedin, 
    color: "hover:bg-blue-700" 
  },
];

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: inquiryTypes[0],
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form submission simulation (Ready for API integration)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="space-y-24 pb-24 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-gradient-to-b from-brand-lavender/50 via-brand-offwhite to-brand-offwhite text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-lavender text-brand-purple text-xs font-semibold tracking-wide border border-brand-purple/20"
          >
            <Mail className="w-3.5 h-3.5 text-brand-orange" />
            Get In Touch
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep leading-[1.15]"
          >
            Let's <span className="text-brand-purple">Connect.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-charcoal/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-body"
          >
            Have a question about shopping, selling or partnering with Bazarya? Our team would be happy to hear from you.
          </motion.p>
        </div>
      </section>

      {/* 2. FORM & SOCIAL MEDIA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info & Social Links */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-br from-brand-deep to-brand-purple text-white shadow-xl space-y-6">
              <h3 className="font-heading text-2xl font-bold">Contact Categories</h3>
              <p className="text-brand-lavender text-sm leading-relaxed">
                Choose the relevant inquiry category when reaching out to help us direct your message to the right department.
              </p>

              <ul className="space-y-3 pt-2 text-sm text-brand-lavender">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-brand-orange" />
                  </div>
                  Customer Inquiries
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Store className="w-4 h-4 text-brand-orange" />
                  </div>
                  Seller Registration Inquiries
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Handshake className="w-4 h-4 text-brand-orange" />
                  </div>
                  Business Partnerships
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Headphones className="w-4 h-4 text-brand-orange" />
                  </div>
                  Technical Support
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <HelpCircle className="w-4 h-4 text-brand-orange" />
                  </div>
                  General Questions
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="p-8 rounded-3xl bg-white border border-brand-lavender shadow-sm space-y-4">
              <h4 className="font-heading font-bold text-lg text-brand-deep">Follow Us On Social Media</h4>
              <p className="text-xs text-brand-muted">Stay connected for updates and announcements.</p>
              
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-2xl bg-brand-lavender/60 text-brand-purple flex items-center justify-center transition-all duration-300 hover:text-white ${social.color} hover:scale-105`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-lavender shadow-xl space-y-6">
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-deep">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-brand-lavender/50 text-center space-y-4 border border-brand-purple/20">
                  <div className="w-14 h-14 rounded-full bg-brand-purple text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-7 h-7 text-brand-orange" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-brand-deep">Message Sent Successfully!</h3>
                  <p className="text-brand-charcoal/80 text-sm max-w-sm mx-auto">
                    Thank you for reaching out. Our support team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", inquiryType: inquiryTypes[0], subject: "", message: "" });
                    }}
                    className="mt-2 text-xs font-bold text-brand-purple underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase text-brand-charcoal">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-brand-offwhite border border-brand-lavender rounded-xl focus:outline-none focus:border-brand-purple transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase text-brand-charcoal">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-brand-offwhite border border-brand-lavender rounded-xl focus:outline-none focus:border-brand-purple transition-all"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase text-brand-charcoal">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="0300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-brand-offwhite border border-brand-lavender rounded-xl focus:outline-none focus:border-brand-purple transition-all"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase text-brand-charcoal">Inquiry Type *</label>
                      <select 
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-brand-offwhite border border-brand-lavender rounded-xl focus:outline-none focus:border-brand-purple transition-all text-brand-charcoal"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-brand-charcoal">Subject *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Brief summary of your inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-brand-offwhite border border-brand-lavender rounded-xl focus:outline-none focus:border-brand-purple transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-brand-charcoal">Message *</label>
                    <textarea 
                      rows={4}
                      required
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-brand-offwhite border border-brand-lavender rounded-xl focus:outline-none focus:border-brand-purple transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-brand-orange text-white font-bold text-sm rounded-xl shadow-lg shadow-brand-orange/20 hover:bg-brand-orange/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
                  </button>

                </form>
              )}
            </div>
          </motion.div>

        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-brand-lavender">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lavender text-brand-purple text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-brand-orange" /> Quick Support
          </div>
          <h2 className="font-heading text-3xl font-extrabold text-brand-deep">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-muted text-sm">
            Common questions about shopping, selling, and marketplace policies.
          </p>
        </div>

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

    </div>
  );
}