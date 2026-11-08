'use client'
import React from 'react'
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
    Store,
    Sparkles,
    Clock,
    ShoppingBag,
    Bell,
    ArrowRight,
    Zap,
    ShieldCheck,
    Truck,
    Search,
    CheckCircle2
} from "lucide-react";

const storeFeatures = [
    {
        icon: Search,
        title: "Smart AI Search",
        desc: "Find exact products across thousands of independent sellers in seconds.",
    },
    {
        icon: ShieldCheck,
        title: "Verified Vendors",
        desc: "Shop with full confidence from authentic, identity-verified store owners.",
    },
    {
        icon: Truck,
        title: "Express Logistics",
        desc: "Fast dispatch and real-time order tracking right to your doorstep.",
    },
    {
        icon: Zap,
        title: "Instant Deals",
        desc: "Exclusive launch discounts and flash sales on top category items.",
    },
];

function page() {
    const targetDate = new Date("2027-01-01T00:00:00").getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, [targetDate]);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
        }
    };

    return (
        <div className="space-y-24 pb-24 overflow-hidden">
            <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-gradient-to-b from-brand-lavender/50 via-brand-offwhite to-brand-offwhite text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-brand-purple/20">
                        <Clock className="w-4 h-4 text-brand-orange" /> Grand Store Launching Soon
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-brand-deep leading-[1.15]">A new way to shop <br /> <span className="text-brand-orange">Is Coming Soon.</span></motion.h1>
                    <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-brand-charcoal/80 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-body">We are building a seamless multi-vendor marketplace experience. Bazarya store will officially open on <strong className="text-brand-purple">January 1st, 2027</strong></motion.p>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4">
                        {[
                            { label: "Days", value: timeLeft.days },
                            { label: "Hours", value: timeLeft.hours },
                            { label: "Minutes", value: timeLeft.minutes },
                            { label: "Seconds", value: timeLeft.seconds },
                        ].map((unit) => (
                            <div key={unit.label} className="p-6 bg-white rounded-3xl shadow-xl border border-brand-purple/20 flex flex-col items-center justify-center">
                                <span className="font-heading text-4xl sm:text-5xl font-black text-brand-purple tracking-tight">
                                    {String(unit.value).padStart(2, "0")}
                                </span>
                                <span className="text-xs uppercase font-bold tracking-wider text-brand-muted mt-2">{unit.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-3xl bg-gradient-to-br from-brand-deep via-brand-purple to-brand-deep text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden text-center space-y-6"
                >
                    <div className="max-w-2xl mx-auto space-y-3 relative z-10">
                        <span className="px-3.5 py-1.5 rounded-full bg-brand-orange text-white text-xs font-bold uppercase tracking-wider">
                            VIP Early Access
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold">
                            Be The First To Shop
                        </h2>
                        <p className="text-brand-lavender text-sm sm:text-base">
                            Subscribe with your email to get exclusive launch discounts, early bird vouchers, and notification when Bazarya store goes live!
                        </p>
                    </div>

                    <div className="max-w-md mx-auto relative z-10">
                        {subscribed ? (
                            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center gap-2 text-white font-semibold text-sm">
                                <CheckCircle2 className="w-5 h-5 text-brand-orange" /> You are on the launch list! We'll notify you soon.
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-5 py-3.5 text-sm bg-white/10 border border-white/20 rounded-full text-white placeholder-brand-lavender/60 focus:outline-none focus:bg-white/20 transition-all"
                                />
                                <button
                                    type="submit"
                                    className="px-8 py-3.5 bg-brand-orange text-white font-bold text-sm rounded-full shadow-lg hover:bg-white hover:text-brand-deep transition-all duration-300 shrink-0 flex items-center justify-center gap-2"
                                >
                                    Notify Me <Bell className="w-4 h-4" />
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-deep">What To Expect On <span className="text-brand-purple">Bazarya</span></h2>
                    <p className="text-brand-muted text-base">Designed to deliver a world class shopping experience.</p>
                </div>
                <div className='grid grid-cosl-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {storeFeatures.map((feat, idx) => (
                        <motion.div key={feat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }} className="p-8 rounded-3xl bg-white border border-brand-lavender shadow-sm hover:shadow-xl hover:border-brand-purple/40 transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-brand-lavender/60 text-brand-purple flex items-center justify-center mb-6 group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
                                <feat.icon className="w-7 h-7" />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-brand-deep mb-2">{feat.title}</h3>
                            <p className="text-brand-muted text-sm leading-relaxed">{feat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="p-8 sm:p-12 rounded-3xl bg-brand-lavender/40 border border-brand-purple/20 text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-wider">
                        <Store className="w-4 h-4" /> Seller Opportunities
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-brand-deep max-w-xl mx-auto">
                        Want to list your products before we launch?
                    </h3>
                    <p className="text-brand-charcoal/80 text-sm max-w-lg mx-auto">
                        Get your store ready today. Join our seller onboarding program and reach thousands of shoppers on day one.
                    </p>
                    <div className="pt-2 flex justify-center gap-4">
                        <Link
                            href="/become-a-seller"
                            className="px-8 py-3.5 rounded-full bg-brand-orange text-white font-bold text-sm shadow-lg hover:bg-brand-orange/90 transition-all inline-flex items-center gap-2"
                        >
                            Become a Seller <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page