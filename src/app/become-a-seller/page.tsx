'use client'

import React from 'react'
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
    Store,
    Sparkles,
    CheckCircle2,
    User,
    Mail,
    Phone,
    Building2,
    Send,
    ShieldAlert,
    FileText,
    ArrowRight,
    Info
} from "lucide-react";


const whySellList = [
    "Create your own digital shop.",
    "Showcase products across relevant categories.",
    "Manage product listings and inventory.",
    "Receive and manage customer orders.",
    "Access sales and earnings information.",
    "Participate in promotional campaigns.",
];


const steps = [
    { step: "01", title: "Register", desc: "Submit your seller registration details." },
    { step: "02", title: "Verify", desc: "Complete identity and business verification." },
    { step: "03", title: "Get Approved", desc: "Wait for the marketplace's onboarding review." },
    { step: "04", title: "List Products", desc: "Add products, images, prices and inventory." },
    { step: "05", title: "Start Selling", desc: "Manage orders and fulfill customer purchases." },
];

function page() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        businessName: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 1200);
    };
    return (
        <div className="space-y-24 pb-24 overflow-hidden">
            <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-gradient-to-b from-brand-lavender/50 via-brand-offwhite to-brand-offwhite text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-brand-orange/20">
                        <Store className="w-4 h-4" /> Seller Onboarding Hub
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep leading-[1.15]">Grow Your Business <br /> <span className="text-brand-orange">with Bazarya.</span></motion.h1>

                    <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-brand-charcoal/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-body">Bring your products to a wider audience and manage your online business through one unified marketplace platform.</motion.p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-deep">Why Sell on <span className="text-brand-purple">Bazarya ?</span></h2>
                    <p className="text-brand-muted text-base">Everything you need to showcase, sell, and scale your digital storefront.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {whySellList.map((item, idx) => (
                        <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.08 }} className="p-6 rounded-3xl bg-white border border-brand-lavender shadow-sm hover:shadow-xl hover:border-brand-purple/40 transition-all duration-300 flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-2xl bg-brand-lavender text-brand-purple flex items-center justify-center shrink-0 group-hover:bg-brand-purple group-hover:text-white transition-colors">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">Benefit {idx + 1}</span>
                                <p className="font-heading font-semibold text-brand-deep text-base mt-1">{item}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-deep">
                        How It <span className="text-brand-orange">Works</span>
                    </h2>
                    <p className="text-brand-muted text-base">
                        5 simple steps to get your products live on Bazarya.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
                    {steps.map((s, idx) => {
                        const isLast = idx === steps.length - 1;

                        return (
                            <motion.div
                                key={s.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                {/* Connector Line (Desktop Horizontal / Mobile Vertical) */}
                                {!isLast && (
                                    <>
                                        {/* Desktop Horizontal Line */}
                                        <div className="hidden lg:block absolute top-7 left-1/2 w-full h-[2px] border-t-2 border-dashed border-brand-lavender/80 -z-10 group-hover:border-brand-orange/60 transition-colors duration-300" />
                                        {/* Mobile / Tablet Vertical Line */}
                                        <div className="lg:hidden absolute top-14 left-1/2 -translate-x-1/2 w-[2px] h-[calc(100%+2rem)] border-l-2 border-dashed border-brand-lavender/80 -z-10" />
                                    </>
                                )}

                                {/* Step Number Badge */}
                                <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-white border-2 border-brand-lavender text-brand-purple font-heading font-extrabold text-xl shadow-sm group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                    {s.step}
                                </div>

                                {/* Content Card */}
                                <div className="mt-6 p-6 rounded-2xl bg-white border border-brand-lavender/60 shadow-sm group-hover:shadow-md group-hover:border-brand-orange/30 transition-all duration-300 w-full flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-heading font-bold text-base sm:text-lg text-brand-deep mb-2 group-hover:text-brand-purple transition-colors">
                                            {s.title}
                                        </h3>
                                        <p className="text-brand-muted text-xs sm:text-sm leading-relaxed">
                                            {s.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Seller Verification */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-white border border-brand-lavender shadow-sm space-y-4"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-brand-lavender text-brand-purple flex items-center justify-center">
                            <ShieldAlert className="w-6 h-6 text-brand-orange" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-brand-deep">Seller Verification</h3>
                        <p className="text-brand-muted text-sm leading-relaxed">
                            To maintain marketplace integrity, sellers may be required to submit CNIC details, business information, bank account details and other supporting documents. Approval is subject to verification.
                        </p>
                    </motion.div>

                    {/* Commission Link */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-gradient-to-br from-brand-deep to-brand-purple text-white shadow-xl space-y-4 flex flex-col justify-between"
                    >
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                                <FileText className="w-6 h-6 text-brand-orange" />
                            </div>
                            <h3 className="font-heading text-2xl font-bold mb-2">Transparent Commission Rates</h3>
                            <p className="text-brand-lavender text-sm leading-relaxed">
                                Commission rates vary by product category and subcategory. Please refer to our official schedule for complete breakdown.
                            </p>
                        </div>
                        <Link
                            href="/commission"
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange hover:text-white transition-colors"
                        >
                            View Commission Structure <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                </div>
            </section>

            {/* 5. REGISTER YOUR INTEREST FORM */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-3xl bg-white border border-brand-lavender p-8 sm:p-12 shadow-xl space-y-8 relative overflow-hidden"
                >
                    <div className="text-center space-y-3">
                        <span className="px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-wider">
                            Onboarding Early Access
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-deep">
                            Register Your Interest
                        </h2>
                        <p className="text-brand-muted text-sm max-w-xl mx-auto">
                            Fill out your details to get early notification when marketplace seller registration goes live.
                        </p>
                    </div>

                    <AnimatePresence mode="wait">
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-8 rounded-2xl bg-brand-lavender/50 text-center space-y-4 border border-brand-purple/20"
                            >
                                <div className="w-16 h-16 rounded-full bg-brand-purple text-white flex items-center justify-center mx-auto shadow-lg">
                                    <CheckCircle2 className="w-8 h-8 text-brand-orange" />
                                </div>
                                <h3 className="font-heading text-2xl font-bold text-brand-deep">Thank You for Your Interest!</h3>
                                <p className="text-brand-charcoal/80 text-sm max-w-md mx-auto">
                                    We have received your information. Our team will contact you directly via email or phone prior to our launch date.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                                    {/* Name */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-brand-charcoal flex items-center gap-1.5">
                                            <User className="w-3.5 h-3.5 text-brand-purple" /> Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. Ali Ahmed"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 text-sm bg-brand-offwhite border border-brand-lavender rounded-xl focus:outline-none focus:border-brand-purple transition-all"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-brand-charcoal flex items-center gap-1.5">
                                            <Mail className="w-3.5 h-3.5 text-brand-purple" /> Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="e.g. seller@business.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 text-sm bg-brand-offwhite border border-brand-lavender rounded-xl focus:outline-none focus:border-brand-purple transition-all"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-brand-charcoal flex items-center gap-1.5">
                                            <Phone className="w-3.5 h-3.5 text-brand-purple" /> Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            placeholder="e.g. 0300 1234567"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 text-sm bg-brand-offwhite border border-brand-lavender rounded-xl focus:outline-none focus:border-brand-purple transition-all"
                                        />
                                    </div>

                                    {/* Business Name */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-brand-charcoal flex items-center gap-1.5">
                                            <Building2 className="w-3.5 h-3.5 text-brand-purple" /> Business / Shop Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Apex Electronics"
                                            value={formData.businessName}
                                            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                                            className="w-full px-4 py-3 text-sm bg-brand-offwhite border border-brand-lavender rounded-xl focus:outline-none focus:border-brand-purple transition-all"
                                        />
                                    </div>

                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-brand-orange text-white font-bold text-sm rounded-xl shadow-lg shadow-brand-orange/25 hover:bg-brand-orange/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                                >
                                    {isSubmitting ? "Submitting..." : "Register Your Interest"} <Send className="w-4 h-4" />
                                </button>
                            </form>
                        )}
                    </AnimatePresence>

                    {/* Legal Note */}
                    <div className="pt-4 border-t border-brand-lavender flex items-start gap-2 text-xs text-brand-muted">
                        <Info className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                        <p><strong>Note:</strong> Interest registration does not guarantee seller approval or create an active seller account.</p>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}

export default page