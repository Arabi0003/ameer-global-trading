"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Globe2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
const points = [
  "Direct access to Chinese wholesale markets and factories",
  "Bilingual communication bridging buyers and suppliers",
  "End-to-end sourcing, purchasing, and shipping coordination",
  "Transparent pricing with no hidden fees",
];
export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8}}>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] gold-text">About Us</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-navy-900 dark:text-white leading-[1.1]">
              Bridging <span className="gold-text">China</span> and the <span className="gold-text">World</span>
            </h2>
            <p className="mt-6 text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Founded by a young African entrepreneur living in China, Ameer Global Trading & Shipping was built to solve the real challenges international buyers face when sourcing products from afar.
            </p>
            <p className="mt-4 text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              We give you direct access to China&apos;s manufacturing power — handling supplier communication, product sourcing, quality verification, and international shipping on your behalf.
            </p>
            <ul className="mt-8 space-y-3">
              {points.map((p,i)=>(
                <motion.li key={i} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold-400 shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">{p}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-10"><Link href="#contact"><Button>Partner With Us</Button></Link></div>
          </motion.div>
          <motion.div initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8,delay:0.2}} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-gold-400/20 to-royal-600/20 rounded-3xl blur-2xl" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 border border-gold-400/20 p-10 flex flex-col justify-between">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.15),transparent_50%)]" />
              <div className="relative">
                <Globe2 className="h-16 w-16 text-gold-400 mb-6" strokeWidth={1.2} />
                <h3 className="font-display text-3xl font-bold text-white leading-tight">Your Gateway to <br/><span className="gold-text">Chinese Markets</span></h3>
              </div>
              <div className="relative grid grid-cols-2 gap-4 pt-8 border-t border-gold-400/20">
                <div><div className="font-display text-3xl font-bold gold-text">50+</div><div className="text-xs text-white/50 uppercase tracking-wider mt-1">Categories</div></div>
                <div><div className="font-display text-3xl font-bold gold-text">24/7</div><div className="text-xs text-white/50 uppercase tracking-wider mt-1">Support</div></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
