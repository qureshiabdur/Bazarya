'use client'
import React from 'react'
import { motion } from "motion/react";
import Link from "next/link";
import {
    FileText,
    Download,
    Sparkles,
    CheckCircle2,
    Percent,
    Tag,
    Layers,
    HelpCircle,
    ArrowRight,
    ShieldCheck,
    FileCheck,
} from "lucide-react";

const sellerKeyPoints = [
    "Commission is calculated according to the applicable category rate.",
    "Commission rates may differ between main categories and subcategories.",
    "Applicable rates are recorded against orders so historical transactions retain original calculations.",
    "Promotional discounts affect the commission base depending on who funds the discount.",
    "Applicable taxes, courier charges, refunds, and agreed deductions are accounted for separately.",
];

const discountRules = [
    {
        title: "Platform-Funded Discounts",
        desc: "Discounts funded by Bazarya do not reduce the seller's commission base, subject to published promotion terms.",
        tag: "Funded by Bazarya",
        color: "bg-brand-purple/10 text-brand-purple border-brand-purple/20",
    },
    {
        title: "Seller-Funded Discounts",
        desc: "Discounts offered directly by the seller reduce the commission base accordingly.",
        tag: "Funded by Seller",
        color: "bg-brand-orange/10 text-brand-orange border-brand-orange/20",
    },
    {
        title: "Shared Discounts",
        desc: "Co-funded promotional discounts are allocated according to each party's agreed contribution percentage.",
        tag: "Jointly Funded",
        color: "bg-brand-deep/10 text-brand-deep border-brand-deep/20",
    },
];

function page() {
    return (
        <div className="space-y-24 pb-24 overflow-hidden">
            <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-gradient-to-b from-brand-lavender/50 via-brand-offwhite to-brand-offwhite text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-lavender text-brand-purple text-xs font-semibold tracking-wide border border-brand-purple/20">
                        <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                        Official Seller Policy
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep leading-[1.15]">Transparent Commission.<br /> <span className="text-brand-purple">Clear Expectations.</span></motion.h1>
                    <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-brand-charcoal/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-body">Bazarya applies category-based marketplace commissions. The applicable commission depends on the product's assigned category and subcategory.</motion.p>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-brand-deep via-brand-purple to-brand-deep text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
                >
                    {/* Background Decorative Glow */}
                    <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

                    {/* Left Content Side */}
                    <div className="space-y-4 max-w-xl text-center lg:text-left z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 shadow-inner">
                            <FileCheck className="w-4 h-4" /> Commission Rates 2027
                        </div>
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">Bazarya Commission Rates</h2>
                        <p className="text-brand-lavender text-sm sm:text-base leading-relaxed">
                            Complete breakdown of category and subcategory commission rates. Preview the document online or download the official PDF for your financial planning.
                        </p>
                    </div>

                    {/* Right Preview Card & Action Side */}
                    <div className="w-full lg:w-auto shrink-0 z-10 flex flex-col sm:flex-row lg:flex-col items-center gap-4">

                        {/* Mini PDF Preview Card */}
                        <div className="w-full sm:w-64 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-3.5 shadow-lg group hover:bg-white/15 transition-all duration-300">
                            <div className="w-12 h-14 rounded-xl bg-brand-orange/20 border border-brand-orange/40 flex flex-col items-center justify-center text-brand-orange shrink-0 shadow-inner">
                                <FileText className="w-6 h-6" />
                                <span className="text-[9px] font-black uppercase tracking-wider mt-0.5">PDF</span>
                            </div>
                            <div className="flex-1 min-w-0 text-left">
                                <p className="font-heading font-semibold text-sm text-white truncate">Bazarya-Commission-2027.pdf</p>
                                <p className="text-xs text-brand-lavender/80">Official Rate Schedule</p>
                            </div>
                        </div>

                        {/* Download Button */}
                        <a
                            href="/Bazarya-Commission-Structure-2027.pdf"
                            download="Bazarya-Commission-Structure-2027.pdf"
                            className="w-full sm:w-auto px-8 py-4 bg-brand-orange text-white font-bold text-sm rounded-2xl sm:rounded-full shadow-xl shadow-brand-orange/30 hover:bg-white hover:text-brand-deep transition-all duration-300 inline-flex items-center justify-center gap-2.5 group"
                        >
                            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                            Download PDF Schedule
                        </a>
                    </div>
                </motion.div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-deep">What Sellers <span className="text-brand-purple">Should Know</span></h2>
                    <p className="text-brand-muted text-base">Essential guidelines regarding commission calculations and account settlements.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sellerKeyPoints.map((point, idx) => (
                        <motion.div key={idx} initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y:0}} viewport={{once: true}} transition={{duration: 0.4, delay: idx * 0.08}} className="p-6 rounded-3xl bg-white border border-brand-lavender shadow-sm hover:shadow-xl hover:border-brand-purple/40 transition-all duration-300 flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-2xl bg-brand-lavender text-brand-purple flex items-center justify-center shrink-0 group-hover:bg-brand-purple group-hover:text-white transition-colors">
                                <CheckCircle2 className="w-5 h-5"/>
                            </div>
                            <p className="font-body text-sm text-brand-charcoal/90 leading-relaxed pt-1">{point}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-deep">Commission & <span className="text-brand-orange">Coupons</span></h2>
                    <p className="text-brand-muted text-base">How promotional discounts and voucher codes impact seller earnings.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {discountRules.map((rule, idx) => (
                        <motion.div key={rule.title} initial={{opacity: 0, scale: 0.95}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{duration: 0.4, delay: idx * 0.1}} className="p-8 rounded-3xl bg-white border border-brand-lavender shadow-sm flex flex-col justify-between space-y-6 hover:shadow-xl transition-all">
                            <div>
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-4 ${rule.color}`}>
                                    {rule.tag}
                                </span>
                                <h3 className="font-heading font-bold text-xl text-brand-deep mb-3">{rule.title}</h3>
                                <p className="text-brand-muted text-sm leading-relaxed">{rule.desc}</p>
                            </div>
                            <div className="pt-4 border-t border-brand-lavender/60 flex items-center gap-2 text-xs text-brand-purple font-semibold">
                                <Percent className="w-4 h-4"/> Transparent Base Settlement
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="p-8 sm:p-12 rounded-3xl bg-brand-lavender/40 border border-brand-purple/20 text-center space-y-6">
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-brand-deep">Ready to Start Selling ?</h3>
                    <p className="text-brand-charcoal/80 text-sm max-w-lg mx-auto">Register your business interest today and prepare your store for our upcoming launch.</p>
                    <div className="pt-2 flex justify-center gap-4">
                        <Link href="/become-a-seller" className="px-8 py-3.5 rounded-full bg-brand-orange text-white font-bold text-sm shadow-lg hover:bg-brand-orange/90 transition-all inline-flex items-center gap-2">
                            Register Interest Now <ArrowRight className="w-4 h-4"/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page