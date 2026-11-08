'use client'
import React from 'react'
import { motion } from "motion/react";
import Link from "next/link";
import {
    ShieldCheck,
    Lock,
    FileText,
    Sparkles,
    UserCheck,
    CreditCard,
    Cookie,
    Server,
    History,
    Scale,
    ExternalLink,
    Mail,
    Clock,
    ArrowRight,
    Database
} from "lucide-react";

// Effective dates configuration
const EFFECTIVE_DATE = "January 1, 2027";
const LAST_UPDATED = "January 1, 2027";

// Quick navigation highlights
const policyHighlights = [
    { title: "Data Collection", desc: "Personal, seller, transaction & technical details.", icon: Database },
    { title: "Seller Verification", desc: "CNIC & business document protection protocols.", icon: UserCheck },
    { title: "Secure Payments", desc: "Third-party payment gateways & zero raw card storage.", icon: CreditCard },
    { title: "Data Security", desc: "Encrypted communications & role-based access control.", icon: Lock },
];

function page() {
    return (
        <div className="space-y-20 pb-24 overflow-hidden">
            <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-gradient-to-b from-brand-lavender/50 via-brand-offwhite to-brand-offwhite text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-brand-purple/20">
                        <ShieldCheck className="w-4 h-4 text-brand-orange" /> Offical Policy Document
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep leading-[1.15]">Privacy <span className="text-brand-purple">Policy</span></motion.h1>
                    <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-brand-charcoal/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-body">At Bazarya, we respect your privacy and are committed to protecting the personal information of our customers, sellers, and marketplace partners.</motion.p>
                    <motion.div initial={{ opacity: 0, y: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="inline-flex flex-wrap justify-center items-center gap-4 pt-2 text-xs font-semibold text-brand-muted">
                        <span className="px-3.5 py-1.5 rounded-full bg-white border border-brand-lavender shadow-sm flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-brand-purple" /> Effective Date: <strong className="text-brand-deep">{EFFECTIVE_DATE}</strong>
                        </span>
                        <span className="px-3.5 py-1.5 rounded-full bg-white border border-brand-lavender shadow-sm flex items-center gap-1.5">
                            <History className="w-3.5 h-3.5 text-brand-orange" /> Last Updated: <strong className="text-brand-deep">{LAST_UPDATED}</strong>
                        </span>
                    </motion.div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {policyHighlights.map((item, idx) => (
                        <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.08 }} className="p-6 rounded-3xl bg-white border border-brand-lavender shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="w-10 h-10 rounded-2xl bg-brand-lavender text-brand-purple flex items-center justify-center mb-4">
                                <item.icon className="w-5 h-5" />
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
                            <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">01</span>
                            Introduction
                        </h2>
                        <p>Welcome to Bazarya. We respect your privacy and are committed to protecting the personal information of customers, sellers, visitors and other individuals who interect with our marketplace.</p>
                        <p className="font-semibold text-brand-purple">By using Bazarya, you acknowledge that you have read and understood this Privacy Policy.</p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
                            <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">02</span> Information We Collect
                        </h2>
                        <p> Depending on how you use our platform, we may collect the following information:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                            <div className="p-5 rounded-2xl bg-brand-offwhite border border-brand-lavender space-y-2">
                                <h3 className="font-heading font-bold text-brand-deep text-base">2.1 Personal Information</h3>
                                <ul className="list-disc list-inside text-xs text-brand-muted space-y-1">
                                    <li>Full Name</li>
                                    <li>Email Address</li>
                                    <li>Phone Number</li>
                                    <li>Residential or delivery address</li>
                                    <li>Account login credentials</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-2xl bg-brand-offwhite border border-brand-lavender space-y-2">
                                <h3 className="font-heading font-bold text-brand-deep text-base">2.2 Seller Information</h3>
                                <ul className="list-disc list-inside text-xs text-brand-muted space-y-1">
                                    <li>CNIC or identity verification data</li>
                                    <li>Business or shop details & registration</li>
                                    <li>Bank account & settlement info</li>
                                    <li>Pickup & return addresses</li>
                                    <li>Tax registration details</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-2xl bg-brand-offwhite border border-brand-lavender space-y-2">
                                <h3 className="font-heading font-bold text-brand-deep text-base">2.3 Transaction Information</h3>
                                <ul className="list-disc list-inside text-xs text-brand-muted space-y-1">
                                    <li>Order details & purchased items</li>
                                    <li>Payment method & status</li>
                                    <li>Refund and return records</li>
                                    <li>Shipment & Tracking data</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-2xl bg-brand-offwhite border border-brand-lavender space-y-2">
                                <h3 className="font-heading font-bold text-brand-deep text-base">2.4 Technical Information</h3>
                                <ul className="list-disc list-inside text-xs text-brand-muted space-y-1">
                                    <li>IP address & browser type</li>
                                    <li>Device specs & operating system</li>
                                    <li>Website usage & analytics</li>
                                    <li>Cookies & session tokens</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
                            <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">03</span>
                            How We Use Your Information
                        </h2>
                        <p>We may use collected information to:</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm pt-2">
                            {[
                                "Manage customer & seller accounts.",
                                "Verify seller identity & business data.",
                                "Process orders, payments & refunds.",
                                "Coordinate shipping & delivery services.",
                                "Send notifications & order status updates.",
                                "Provide dedicated customer support.",
                                "Detect fraud, security breaches & violations.",
                                "Optimize performance & user experience.",
                                "Maintain financial & legal compliance records."
                            ].map((item, i) => (
                                <li key={i} className="p-3 rounded-xl bg-brand-lavender/30 border border-brand-purple/10 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-brand-orange shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
                            <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">04</span> Seller Verification & Identity Information
                        </h2>
                        <p>Bazarya may request identity documents, including CNIC details, to verify sellers and reduce fraudulent activities on the marketplace.</p>
                        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 leading-relaxed">
                        <strong>Security Protocol:</strong> Access to sensitive verification documents is strictly restricted to authorized personnel and verification service providers who require it for legitimate operational or legal purposes.</div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
                            <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">05</span> Sharing Of Information
                        </h2>
                        <p>We may share relevent information with trusted partners, including:</p>
                        <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-brand-charcoal/90 pl-2">
                            <li>Courier and logistics partners for shipment and delivery.</li>
                            <li>Payment service providers and financial institutions.</li>
                            <li>Identity verification partners and fraud-prevention engines.</li>
                            <li>Technology, hosting, and cloud infrastructure providers.</li>
                            <li>Legal authorities or auditors when legally compelled.</li>
                        </ul>
                        <p className="font-semibold text-brand-deep text-xs pt-2">Note: We do not sell information to third parties for independent marketing purposes.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
                            <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">06</span> Payments and Financial Information
                        </h2>
                        <p>Payments are processed securely via authorized third-party payment gateways or courier COD networks. Payment card details and sensitive credentials are handled directly by PCI-DSS compliant payment providers rather than stored on Bazarya servers.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
                            <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">07</span> Cookies and Similar Technologies
                        </h2>
                        <p>We use cookies to maintain login sessions, remember user preferences, analyze platform traffic, and enhance overall security. Users can manage or disable cookies via browser settings.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
                            <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">08</span> Data Security & Retention
                        </h2>
                        <p>Bazarya implements technical safeguards including SSL encryption, role-based access control, firewall monitoring, and regular backups. Personal data is retained only as long as necessary to fulfill account management, legal, and operational obligations.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-heading text-2xl font-bold text-brand-deep flex items-center gap-3 border-b border-brand-lavender pb-3">
                            <span className="w-8 h-8 rounded-xl bg-brand-purple text-white text-xs font-bold flex items-center justify-center shrink-0">09</span> Your Privacy Rights
                        </h2>
                        <p>Subject to applicable laws, users may request access, correction, or deletion of their personal information by contacting our privacy team.</p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-brand-lavender">
                        <h2 className="font-heading text-2xl font-bold text-brand-deep">10. Privacy Support & Contact</h2>
                        <p>For any privacy-related questions, requests, or concerns, please get in touch with our team:</p>
                        <div className="p-6 rounded-2xl bg-brand-lavender/40 border border-brand-purple/20 space-y-3">
                            <p className="font-heading font-bold text-brand-deep">Bazarya Privacy Support</p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-medium text-brand-charcoal">
                                <a href="mailto@privacy@bazarya.com" className="inline-flex items-center gap-2 text-brand-purple hover:underline">
                                    <Mail className="w-4 h-4 text-brand-orange"/> privacy@bazarya.com
                                </a>
                                <Link href="/contact" className="inline-flex items-center gap-2 text-brand-purple hover:underline">
                                    <ExternalLink className="w-4 h-4 text-brand-orange"/> Contact Support Portal
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="p-8 rounded-3xl bg-brand-lavender/40 border border-brand-purple/20 space-y-4">
                    <h3 className="font-heading text-xl font-bold text-brand-deep">Have Questions About Your Data ?</h3>
                    <p className="text-xs text-brand-muted">Our support team is ready to assist you with any privacy or security queries.</p>
                    <div>
                        <Link href="/contact" className="px-6 py-3 rounded-full bg-brand-purple text-white font-semibold text-xs shadow-md hover:bg-brand-deep transition-all inline-flex items-center gap-2">
                            Get In Touch <ArrowRight className="w-4 h-4"/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page