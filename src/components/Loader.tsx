"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useLoading } from "@/context/LoadingContext";

export default function Loader() {
  const { setIsLoaded } = useLoading();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("bazarya_loaded");
    if (hasLoaded) {
      setShowLoader(false);
      setIsLoaded(true);
      return;
    }

    const timer = setTimeout(() => {
      setShowLoader(false);
      setIsLoaded(true);
      sessionStorage.setItem("bazarya_loaded", "true");
    }, 4000); // 4 seconds duration

    return () => clearTimeout(timer);
  }, [setIsLoaded]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-offwhite text-brand-charcoal overflow-hidden"
        >
          <div className="absolute w-96 h-96 bg-brand-lavender/60 rounded-full blur-3xl pointer-events-none -translate-y-20 -translate-x-20 animate-pulse" />
          <div className="absolute w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none translate-y-20 translate-x-20" />

          <div className="relative flex flex-col items-center space-y-8 z-10 max-w-sm px-4 text-center">
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-40 h-32 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-brand-purple/10 rounded-full blur-xl animate-ping" />
              <Image
                src="/logo.png"
                alt="Bazarya Logo"
                fill
                className="object-contain drop-shadow-xl"
                priority
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-2"
            >
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-muted">
                Crafting Digital Experience...
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, width: "0%" }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-56 h-1.5 bg-brand-lavender rounded-full overflow-hidden shadow-inner"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-brand-purple to-brand-orange rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}