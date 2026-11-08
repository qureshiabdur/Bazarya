'use client'

import React from 'react'
import { motion } from "motion/react";
import Link from "next/link";
import {
    FileText,
    ShieldCheck,
    Scale,
    Clock,
    History,
    AlertTriangle,
    Receipt,
    CreditCard,
    Truck,
    RotateCcw,
    Lock,
    Gavel,
    Mail,
    ArrowRight,
    CheckCircle2,
    Building2
} from "lucide-react";

const EFFECTIVE_DATE = "January 1, 2027";
const LAST_UPDATED = "January 1, 2027";

const termsHighlights = [
    { title: "Seller Accountability", desc: "3 verified complaints rule for misrepresentation.", icon: ShieldCheck },
    { title: "Tax & Commission", desc: "Rates exclusive of sales tax & subject to withholding.", icon: Receipt },
    { title: "7-Day Refund SLA", desc: "Approved refunds processed within 7 working days.", icon: RotateCcw },
    { title: "Legal Governance", desc: "Governed under the operational laws of Pakistan.", icon: Gavel },
];


function page() {
    return (
        <div className="space-y-20 pb-24 overflow-hidden">
            <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-gradient-to-b from-brand-lavender/50 via-brand-offwhite to-brand-offwhite text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-brand-purple/20">
                        <Scale className="w-4 h-4 text-brand-orange" />Legal Agreement
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep leading-[1.15]">
                        Terms & <span className="text-brand-purple">Conditions</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-brand-charcoal/80 text-base sm:text-lg leading-relaxed">Welcome to Bazarya. These terms govern your access to and use of our multi-vendor marketplace platform, services, and applications.</motion.p>
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="inline-flex flex-wrap justify-center items-center gap-4 pt-2 text-xs font-semibold text-brand-muted">
                        <span className="px-3.5 py-1.5 rounded-full bg-white border border-brand-lavender shadow-sm flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-brand-purple" /> Effective Date: <strong className="text-brand-deep">{EFFECTIVE_DATE}</strong>
                        </span>
                        <span className="px-3.5 py-1.5 rounded-full bg-white border border-brand-lavender shadow-sm flex items-center gap-1.5">
                            <History className="w-3.5 h-3.5 text-brand-orange" /> Effective Date: <strong className="text-brand-deep">{LAST_UPDATED}</strong>
                        </span>
                    </motion.div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {termsHighlights.map((item, idx) => (
                        <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.08 }} className='p-8 rounded-3xl bg-white border border-brand-lavender shadow-sm hover:shadow-md transition-all duration-300'>
                            <div className="w-10 h-10 rounded-2xl bg-brand-lavender text-brand-purple flex items-center justify-center mb-4">
                                <item.icon className="w-5 h-5 text-brand-orange" />
                            </div>
                            <h3 className="font-heading font-bold text-base text-brand-deep mb-1">{item.title}</h3>
                            <p className="text-brand-muted text-xs leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white border border-brand-lavender rounded-3xl p-8 sm:p-12 shadow-xl space-y-12 text-brand-charcoal text-sm sm:text-base leading-relaxed">
                    <div className="space-y-4">
                        <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
                            <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">01</span> Introduction
                        </h2>
                        <p>Welcome to Bazarya, an online multi-vendor marketplace designed to connect customers with independent sellers and businesses.</p>
                        <p>These Terms & Conditions govern access to and use of the Bazarya website, applications and related marketplace services. By accessing, registering for or using Bazarya, you agree to comply with these Terms & Conditions and any additional policies applicable to the services you use.</p>
                        <p className="font-semibold text-brand-purple">If you do not agree with these terms, you should not use the marketplace.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
                            <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">02</span> About Bazarya
                        </h2>
                        <p>Bazarya provides an online platform through which independent sellers may list and offer products for sale to customers. Unless expressly stated otherwise, sellers are responsible for the accuracy of their product listings, product quality, authenticity, packaging and fulfillment obligations.</p>
                        <p>Bazarya may facilitate marketplace transactions, payment collection, delivery coordination, customer support and dispute resolution according to its published policies.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
                            <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">03</span> Eligibility & Account Registration
                        </h2>
                        <p>Users must provide accurate, complete and up-to-date information when creating an account. Users are responsible for:</p>
                        <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-brand-charcoal/90 pl-2">
                            <li>Maintaining the confidentiality of their login credentials.</li>
                            <li>Providing accurate contact and delivery information.</li>
                            <li>Keeping their account details continuously updated.</li>
                            <li>Refraining from sharing account access without explict authorization.</li>
                            <li>Not using the platform for any unlawful, deceptive or fradulent activities.</li>
                        </ul>
                        <p className="text-xs text-brand-muted">Bazarya reserves the right to restrict, suspend or terminate accounts involved in policy violations.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
                            <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">04</span> Seller Registration & Verification
                        </h2>
                        <p>Individuals and businesses interested in selling through Bazarya must complete the mandatory onboarding verification. Bazarya may request:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                            <div className="p-3.5 rounded-xl bg-brand-offwhite border border-brand-lavender flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0" /> CNIC or valid governement identity proof
                            </div>
                            <div className="p-3.5 rounded-xl bg-brand-offwhite border border-brand-lavender flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0" /> Business registration documents (for shops who have physical addresses)
                            </div>
                            <div className="p-3.5 rounded-xl bg-brand-offwhite border border-brand-lavender flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0" /> Bank account details for settlements
                            </div>
                            <div className="p-3.5 rounded-xl bg-brand-offwhite border border-brand-lavender flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0" /> Tax Registration Info (NTN/STRN where applicable)
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
                            <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">05</span> Seller Responsibilities & Product Integrity
                        </h2>
                        <p>Sellers agree to list genuine, legally permitted products with accurate specifications, condition, and pricing. Listing counterfeit items, concealing deffects, or shipping products that materially differ from advertised images is strictly prohibited.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
                            <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">06</span> Customer Complaints & Seller Fraud Policy
                        </h2>
                        <div className="p-5 rounded-2xl bg-brand-purple/5 border border-brand-purple/20 space-y-3">
                            <h3 className="font-heading font-bold text-brand-purple text-base flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-brand-orange" /> Three Verified Complaints Rule
                            </h3>
                            <p className="text-xs sm:text-sm text-brand-charcoal/90 leading-relaxed">
                                If a seller receives <strong>three (3) substantiated complaints</strong> involving misleading product listings, product misrepresentation, counterfeit products, or serious fraudulent conduct, Bazarya may suspend the seller's account pending detailed review.
                            </p>
                        </div>
                        <p className="text-xs text-brand-muted">Substantiated complaints are supported by customer photos/videos, inspection findings, order logs, or communication records. Pending investigations may involve temporary balance holds to address potential refunds or chargebacks.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
                            <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">07</span> Commission, Pricing & Tax Obligations
                        </h2>
                        <p>Bazarya charges category-based marketplace commissions on completed eligible transactions as outlined in our published Commission Rates.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="p-5 rounded-2xl bg-brand-offwhite border border-brand-lavender space-y-2">
                                <h4 className="font-heading font-bold text-brand-deep text-sm flex items-center gap-2">
                                    <Receipt className="w-4 h-4 text-brand-orange" /> Sales Tax Exclusivity
                                </h4>
                                <p className="text-xs text-brand-muted leading-relaxed">All published commission rates and platform charges are <strong>exclusive of applicable sales tax</strong>. Applicable sales tax will be added/accounted for at the statutory rate.</p>
                            </div>
                            <div className="p-5 rounded-2xl bg-brand-offwhite border border-brand-lavender space-y-2">
                                <h4 className="font-heading font-bold text-brand-deep text-sm flex items-center gap-2">
                                    <CreditCard className="w-4 h-4 text-brand-purple" /> Statutory Tax Withholding
                                </h4>
                                <p className="text-xs text-brand-muted leading-relaxed">
                                    Seller payouts and financial settlements will be subject to <strong>applicable income tax and sales tax withholding</strong> in compliance with the prevailing tax laws.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
                            <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">08</span> Coupons, Discounts & Promotions
                        </h2>
                        <p>
                            Promotions funded by Bazarya do not reduce the seller's commission base. Seller-funded discounts reduce the commission base accordingly, while shared discounts are allocated per agreed ratios.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
                            <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">09</span> Orders, Platform Fees & Delivery
                        </h2>
                        <p>
                            Available payment options include Cash On Delivery (COD) and supported online payment channels. Platform fees and shipping charges are disclosed prior to checkout. Delivery timelines are estimates handled by independent courier partners.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
                            <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">10</span> Cancellations, Returns & Refund SLA
                        </h2>
                        <p>
                            Customers may request returns or cancellations subject to product eligibility under our Return Policy.
                        </p>
                        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3">
                            <RotateCcw className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                            <div className="text-xs sm:text-sm text-emerald-950">
                                <strong>Refund SLA Commitment:</strong> All approved and verified refund requests will be processed and credited to the customer's original payment method or designated amount <strong>within seven (7) working days</strong>.
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
                            <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">11</span> Prohibited Conduct & Intellectual Property
                        </h2>
                        <p>
                            Bypassing platform fees, manipulating reviews, submitting fake orders, or misusing user data is strictly prohibited. Bazarya's brand assets, code, and design are protected IP. Sellers retain responsibility for having full rights to their uploaded product and logos.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
                            <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">12</span> Termination & Liability Limits
                        </h2>
                        <p>
                            Bazarya may suspend accounts violating these terms. Account suspension does not void outstanding fulfillment or financial liabilities. To the extent permitted by law, Bazarya is not liable for indirect losses beyond reasonable operational control.
                        </p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-brand-lavender">
                        <h2 className="font-heading text-2xl font-bold text-brand-deep">13. Support Contact</h2>

                        <div className="p-6 rounded-2xl bg-brand-lavender/40 border border-brand-purple/20 space-y-3">
                            <p className="font-heading font-bold text-brand-deep">Bazarya Support </p>
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

            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="p-8 rounded-3xl bg-brand-lavender/40 border border-brand-purple/20 space-y-4">
                    <h3 className="font-heading text-xl font-bold text-brand-deep">Need Clarification on Our Terms?</h3>
                    <p className="text-xs text-brand-muted">Our support and compliance team is available to help address your queries.</p>
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
    )
}

export default page