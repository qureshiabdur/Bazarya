'use client'

import { useState, useEffect, useRef } from "react";
import { useLoading } from "@/context/LoadingContext";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { 
  ShoppingBag, 
  Store, 
  Sparkles, 
  ArrowRight, 
  Grid, 
  TrendingUp, 
  ShieldCheck, 
  Smartphone, 
  Layers, 
  Clock,
  Zap,
  CheckCircle2
} from "lucide-react";

const categories = [
  { name: "Electronics", count: "1.2k+ Items", icon: Smartphone, color: "from-purple-500 to-indigo-600" },
  { name: "Fashion", count: "3.5k+ Items", icon: Layers, color: "from-orange-400 to-pink-500" },
  { name: "Home & Living", count: "850+ Items", icon: Grid, color: "from-emerald-400 to-teal-600" },
  { name: "Beauty & Care", count: "2.1k+ Items", icon: Sparkles, color: "from-pink-400 to-rose-500" },
  { name: "Sports", count: "640+ Items", icon: Zap, color: "from-blue-500 to-cyan-500" },
  { name: "Mother & Baby", count: "920+ Items", icon: ShieldCheck, color: "from-violet-400 to-purple-600" },
  { name: "Groceries", count: "4.0k+ Items", icon: ShoppingBag, color: "from-amber-400 to-orange-500" },
  { name: "More Categories", count: "Explore All", icon: ArrowRight, color: "from-gray-600 to-brand-charcoal" },
];

// Re-animating Counter Component for Stats (re-triggers on scroll down/up)
function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 }); // Re-triggers on entry

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 1800; // 1.8s duration

      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    } else {
      setCount(0); // Reset count when scrolled out of view
    }
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Home() {
  const { isLoaded } = useLoading();
  const targetDate = new Date("2027-01-01T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 bg-gradient-to-b from-brand-lavender/40 via-brand-offwhite to-brand-offwhite overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lavender text-brand-purple text-xs font-semibold tracking-wide border border-brand-purple/20 shadow-sm">
                <ShoppingBag className="w-3.5 h-3.5 text-brand-orange animate-bounce" />
                The Next Generation Marketplace
              </div>
              
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep leading-[1.15]">
                Discover More. <br />
                <span className="text-brand-purple bg-gradient-to-r from-brand-purple to-indigo-600 bg-clip-text text-transparent">Shop Better.</span> <br />
                <span className="text-brand-orange">Grow Together.</span>
              </h1>
              
              <p className="text-brand-charcoal/80 text-base sm:text-lg leading-relaxed max-w-2xl font-body">
                Explore a world of products from independent sellers, all in one marketplace. Bazarya brings customers and businesses together through a convenient, accessible and trusted online shopping experience.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/store"
                  className="px-7 py-3.5 rounded-full bg-brand-purple text-white font-semibold text-sm shadow-xl shadow-brand-purple/25 hover:bg-brand-deep transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
                >
                  <ShoppingBag className="w-4 h-4 group-hover:rotate-12 transition-transform" /> Explore Marketplace
                </Link>

                <Link
                  href="/become-a-seller"
                  className="px-7 py-3.5 rounded-full bg-brand-orange text-white font-semibold text-sm shadow-xl shadow-brand-orange/25 hover:bg-brand-orange/90 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
                >
                  <Store className="w-4 h-4 group-hover:-rotate-12 transition-transform" /> Become a Seller
                </Link>
              </div>

              {/* Animated Stats Bar */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-brand-lavender/80">
                <div className="p-3 rounded-2xl bg-white/50 border border-brand-lavender/40 backdrop-blur-sm">
                  <h4 className="font-heading text-2xl font-black text-brand-deep">
                    <AnimatedCounter end={100} suffix="%" />
                  </h4>
                  <p className="text-xs font-medium text-brand-muted mt-0.5">Verified Sellers</p>
                </div>
                <div className="p-3 rounded-2xl bg-white/50 border border-brand-lavender/40 backdrop-blur-sm">
                  <h4 className="font-heading text-2xl font-black text-brand-deep">24/7</h4>
                  <p className="text-xs font-medium text-brand-muted mt-0.5">Smart Platform</p>
                </div>
                <div className="p-3 rounded-2xl bg-white/50 border border-brand-lavender/40 backdrop-blur-sm">
                  <h4 className="font-heading text-2xl font-black text-brand-deep">
                    <AnimatedCounter end={0} suffix="%" />
                  </h4>
                  <p className="text-xs font-medium text-brand-muted mt-0.5">Hassle Onboarding</p>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-brand-purple to-brand-deep p-8 shadow-2xl shadow-brand-purple/30 text-white flex flex-col justify-between overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-48 h-48 bg-brand-orange/30 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                
                <div className="flex justify-between items-center z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner">
                    <ShoppingBag className="w-6 h-6 text-brand-orange" />
                  </div>
                  {/* Updated Theme Brand Orange Indicator */}
                  <span className="text-xs font-semibold uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-ping" /> Live Platform
                  </span>
                </div>

                <div className="space-y-3 z-10 my-auto">
                  <span className="text-xs uppercase text-brand-lavender tracking-wider font-bold">Multi-Vendor Hub</span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold leading-tight">Empowering Local Brands & Global Buyers</h3>
                  <p className="text-xs sm:text-sm text-brand-lavender/90">Seamless Checkout • Instant Delivery Tracking • Fair Commissions</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-between z-10 group-hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Official Marketplace</p>
                      <p className="text-[11px] text-brand-lavender/80">Launching Jan 1, 2027</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-brand-lavender group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Categories Section (Bidirectional Animation) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-deep">
              Shop Across <span className="text-brand-orange">Categories</span>
            </h2>
            <p className="text-brand-muted text-base mt-2 max-w-xl">
              Discover products across Electronics, Fashion, Home & Living, Beauty & Personal Care, Sports, Mother & Baby, Groceries and more.
            </p>
          </div>
          <Link href="/store" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple hover:text-brand-deep transition-colors group">
            View All Categories <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat.name} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ amount: 0.25 }} 
              transition={{ duration: 0.45, delay: (idx % 4) * 0.08 }}
            >
              <Link href="/store" className="p-6 rounded-3xl bg-white border border-brand-lavender flex flex-col justify-between h-44 hover:shadow-xl hover:-translate-y-1.5 hover:border-brand-orange/40 transition-all duration-300 group block relative overflow-hidden">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <cat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-brand-deep group-hover:text-brand-purple transition-colors">{cat.name}</h3>
                  <p className="text-xs text-brand-muted mt-0.5">{cat.count}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Seller Hub Banner (Bidirectional Animation) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.96 }} 
          whileInView={{ opacity: 1, y: 0, scale: 1 }} 
          viewport={{ amount: 0.3 }} 
          transition={{ duration: 0.6 }} 
          className="rounded-3xl bg-gradient-to-r from-brand-deep via-brand-purple to-brand-deep text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl space-y-6 relative z-10">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-orange text-white text-xs font-bold uppercase tracking-wider inline-block shadow-sm">Seller Hub</span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold leading-tight">A Marketplace Built for Sellers</h2>
            <p className="text-brand-lavender text-base sm:text-lg leading-relaxed">Your products deserve to be discovered. Build your shop, showcase your products and manage your business through Bazarya.</p>
            <div className="pt-2">
              <Link href="/become-a-seller" className="px-8 py-4 rounded-full bg-brand-orange text-white font-bold text-sm shadow-lg shadow-brand-orange/30 hover:bg-white hover:text-brand-deep transition-all duration-300 inline-flex items-center gap-2 group">
                Start Selling With Bazarya <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Launch Countdown Section (Bidirectional Animation) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ amount: 0.3 }} 
          transition={{ duration: 0.6 }} 
          className="rounded-3xl bg-brand-lavender/40 border border-brand-purple/20 p-8 sm:p-12 text-center space-y-8 relative overflow-hidden backdrop-blur-sm shadow-sm"
        >
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple text-white text-xs font-bold uppercase tracking-wider shadow-sm">
              <Clock className="w-3.5 h-3.5" /> Official Launch Countdown
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-deep">Coming Soon</h2>
            <p className="text-brand-charcoal/80 text-base">A new shopping experience is on its way. Get ready to discover a different marketplace launching on <strong className="text-brand-purple">January 1st, 2027</strong></p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((unit) => (
              <div key={unit.label} className="p-6 bg-white rounded-2xl shadow-md border border-brand-purple/10 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <span className="font-heading text-4xl sm:text-5xl font-black text-brand-purple tracking-tight">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="text-xs uppercase font-bold tracking-wider text-brand-muted mt-1">{unit.label}</span>
              </div>
            ))}
          </div>

          <div>
            <Link href="/store" className="px-8 py-3.5 rounded-full bg-brand-purple text-white font-semibold text-sm hover:bg-brand-deep transition-all shadow-lg shadow-brand-purple/20 inline-flex items-center gap-2 group">
              Visit Store <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Final Call to Action (Bidirectional Animation) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }} 
          whileInView={{ opacity: 1, y: 0, scale: 1 }} 
          viewport={{ amount: 0.4 }} 
          transition={{ duration: 0.6 }} 
          className="py-16 space-y-6"
        >
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-brand-deep">Be Part of <span className="text-brand-orange">Something New.</span></h2>
          <p className="text-brand-charcoal/80 text-base sm:text-lg max-w-xl mx-auto">Whether you're here to shop or grow your business, there's a place for you at Bazarya.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link href="/become-a-seller" className="px-8 py-4 rounded-full bg-brand-orange text-white font-bold text-sm shadow-xl shadow-brand-orange/25 hover:bg-brand-orange/90 transition-all hover:scale-105">Become a Seller</Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-white text-brand-deep border border-brand-purple/30 font-bold text-sm shadow-md hover:bg-brand-lavender/50 transition-all hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}