'use client'
import React from 'react'
import { motion } from "motion/react";
import Link from "next/link";
import { 
  Users, 
  Target, 
  Eye, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  HeartHandshake, 
  TrendingUp,
  CheckCircle2,
  Award,
  Zap
} from "lucide-react";

const coreValues = [
  { title: "Customer-first experience", desc: "Putting shoppers at the heart of every digital interaction.", icon: Users, gradient: "from-purple-500 to-indigo-600" },
  { title: "Fair opportunities for sellers", desc: "Empowering businesses of all sizes to scale and thrive.", icon: TrendingUp, gradient: "from-orange-400 to-pink-500" },
  { title: "Transparency in marketplace policies", desc: "Clear guidelines on commissions, shipping, and returns.", icon: ShieldCheck, gradient: "from-emerald-400 to-teal-600" },
  { title: "Responsible business practices", desc: "Ethical standards and trusted seller accountability.", icon: HeartHandshake, gradient: "from-pink-400 to-rose-500" },
  { title: "Continuous improvement & innovation", desc: "Building a modern, fully animated, and lightning-fast platform.", icon: Sparkles, gradient: "from-blue-500 to-cyan-500" },
];

export default function AboutPage() {
  return (
    <div className="space-y-24 pb-24 overflow-hidden">
      
      {/* Dynamic Animated Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 bg-gradient-to-b from-brand-lavender/50 via-brand-offwhite to-brand-offwhite overflow-hidden text-center">
        {/* Floating Glowing Orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 top-40 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.9 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6 }} 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-lavender text-brand-purple text-xs font-semibold tracking-wide border border-brand-purple/20 shadow-sm"
          >
            <Users className="w-3.5 h-3.5 text-brand-orange animate-bounce"/> About Bazarya
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 35 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }} 
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deep leading-[1.15]"
          >
            Bringing Shoppers and Sellers <br/> 
            <span className="text-brand-purple bg-gradient-to-r from-brand-purple via-indigo-600 to-brand-orange bg-clip-text text-transparent">Closer Together.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }} 
            className="text-brand-charcoal/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-body"
          >
            Bazarya is a multi-vendor e-commerce marketplace designed to connect customers with independent sellers and businesses through one convenient online platform.
          </motion.p>
        </div>
      </section>

      {/* Trusted Ecosystem Card with Interactive Glassmorphism */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-14 rounded-3xl bg-white border border-brand-lavender shadow-xl hover:shadow-2xl hover:border-brand-purple/30 transition-all duration-500 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-brand-purple/10 to-brand-orange/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          
          <div className="relative z-10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-lavender/60 text-brand-purple flex items-center justify-center mb-4 group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-brand-deep">
              A Trusted Digital Ecosystem
            </h3>
            <p className="text-brand-charcoal/80 text-base sm:text-lg leading-relaxed">
              We believe that online shopping should offer customers choice, convenience and transparency, while giving sellers opportunities to showcase their products and grow their businesses. Bazarya bridges the gap between independent vendors and nationwide buyers.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision Interactive Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50, scale: 0.95 }} 
            whileInView={{ opacity: 1, x: 0, scale: 1 }} 
            viewport={{ amount: 0.3 }} 
            transition={{ duration: 0.7 }} 
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-brand-deep via-brand-purple to-brand-deep text-white shadow-2xl flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-brand-orange/25 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 shadow-inner">
                <Target className="w-7 h-7 text-brand-orange group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold mb-4">Our Mission</h3>
              <p className="text-brand-lavender text-base leading-relaxed">
                Our mission is to create an accessible digital marketplace where customers can discover products and sellers can reach new audiences through a reliable and convenient platform.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.95 }} 
            whileInView={{ opacity: 1, x: 0, scale: 1 }} 
            viewport={{ amount: 0.3 }} 
            transition={{ duration: 0.7 }} 
            className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-lavender shadow-lg flex flex-col justify-between hover:shadow-2xl hover:border-brand-purple/40 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-brand-lavender text-brand-purple flex items-center justify-center mb-6 group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300 shadow-sm">
                <Eye className="w-7 h-7 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-deep mb-4">Our Vision</h3>
              <p className="text-brand-muted text-base leading-relaxed">
                We aim to build a marketplace that supports businesses of different sizes, encourages entrepreneurship and makes online shopping more accessible across Pakistan.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Core Values Animated Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-deep">
            What We <span className="text-brand-orange">Stand For</span>
          </h2>
          <p className="text-brand-muted text-base">Core pillars driving our commitment to excellence and reliability.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((item, idx) => (
            <motion.div 
              key={item.title} 
              initial={{ opacity: 0, y: 35, scale: 0.95 }} 
              whileInView={{ opacity: 1, y: 0, scale: 1 }} 
              viewport={{ amount: 0.25 }} 
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }} 
              className="p-6 rounded-3xl bg-white border border-brand-lavender hover:shadow-xl hover:-translate-y-2 hover:border-brand-orange/40 transition-all duration-300 group relative overflow-hidden"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-deep mb-2 group-hover:text-brand-purple transition-colors">{item.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Promise Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.94, y: 40 }} 
          whileInView={{ opacity: 1, scale: 1, y: 0 }} 
          viewport={{ amount: 0.3 }} 
          transition={{ duration: 0.6 }} 
          className="rounded-3xl bg-gradient-to-r from-brand-lavender/40 via-brand-offwhite to-brand-lavender/40 border border-brand-purple/20 p-8 sm:p-14 text-center space-y-6 backdrop-blur-sm shadow-md relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <Zap className="w-3.5 h-3.5 text-brand-orange" /> Our Promise
          </div>
          <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-brand-deep max-w-2xl mx-auto leading-tight">
            Committed to customer confidence, seller accountability and a seamless experience.
          </h3>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link 
              href="/become-a-seller" 
              className="px-8 py-4 rounded-full bg-brand-orange text-white font-bold text-sm shadow-xl shadow-brand-orange/25 hover:bg-brand-orange/90 transition-all hover:scale-105 inline-flex items-center gap-2 group"
            >
              Become a Seller <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 rounded-full bg-white text-brand-deep border border-brand-purple/30 font-bold text-sm shadow-md hover:bg-brand-lavender/40 transition-all hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}