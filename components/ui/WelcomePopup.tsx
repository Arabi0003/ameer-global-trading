"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight, PackageOpen } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("agt_popup_seen");
    if (!hasSeen) {
      const t = setTimeout(() => setIsOpen(true), 2000);
      return () => clearTimeout(t);
    }
  }, []);

  const close = () => {
    setIsOpen(false);
    sessionStorage.setItem("agt_popup_seen", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close}
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 border border-gold-400/40 shadow-2xl shadow-gold-400/20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.15),transparent_70%)]" />
            <button onClick={close} className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors cursor-pointer">
              <X className="h-4 w-4" />
            </button>
            <div className="p-8 sm:p-10 text-center relative z-10">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400/20 to-gold-600/10 border border-gold-400/30">
                <PackageOpen className="h-10 w-10 text-gold-400" />
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 mb-4">
                <Sparkles className="h-3 w-3 text-gold-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest gold-text">3,000+ Products</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
                What&apos;s Available in <span className="gold-text-shimmer">China?</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Browse our live catalog with product photos across Electronics, Vehicles, Home, Machinery, Fashion, Building materials and more.
              </p>
              <Link href="/catalog" onClick={close} className="block w-full">
                <Button size="lg" className="w-full">Explore Full Catalog <ArrowRight className="h-4 w-4" /></Button>
              </Link>
              <button onClick={close} className="mt-4 text-xs font-semibold text-white/40 hover:text-white transition-colors uppercase tracking-widest cursor-pointer">
                Continue to Homepage
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
