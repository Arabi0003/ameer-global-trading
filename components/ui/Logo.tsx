"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Logo({compact=false}:{compact?:boolean}){
  return(
    <Link href="/" className="group flex items-center gap-3">
      <motion.div whileHover={{scale:1.05,rotate:2}} transition={{type:"spring",stiffness:300}} className="relative">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 blur-md opacity-50 group-hover:opacity-80 transition-opacity"/>
        <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 border-2 border-gold-400/70 shadow-lg shadow-gold-400/20 overflow-hidden">
          <Image src="/ameer.png" alt="Ameer Global" width={44} height={44} className="object-contain"/>
        </div>
      </motion.div>
      {!compact&&(
        <div className="flex flex-col leading-none">
          <span className="font-display text-[15px] font-bold tracking-wide text-navy-900 dark:text-white">AMEER <span className="gold-text">GLOBAL</span></span>
          <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Trading & Shipping</span>
        </div>
      )}
    </Link>
  );
}
