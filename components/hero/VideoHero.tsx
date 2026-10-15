"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { site } from "@/config/site";

export default function VideoHero(){
  const [fail,setFail]=useState(false);
  const [reduce,setReduce]=useState(false);
  useEffect(()=>{setReduce(window.matchMedia("(prefers-reduced-motion:reduce)").matches);},[]);
  
  return(
    <section id="top" className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col">
      {!fail&&!reduce&&(
        <video autoPlay muted loop playsInline preload="metadata" onError={()=>setFail(true)}
          className="absolute inset-0 h-full w-full object-cover">
          <source src="/ameer.mp4" type="video/mp4"/>
        </video>
      )}
      {(fail||reduce)&&<div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-royal-800"/>}
      
      {/* Gradients to ensure text is always readable over the video */}
      <div className="absolute inset-0 bg-navy-950/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-transparent to-navy-950/95" />
      
      {/* Content Container - Fixed Spacing to prevent overlaps */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center text-center pt-32 pb-24">
        
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.8}}
          className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-navy-950/60 backdrop-blur-md px-5 py-2 mb-8 shadow-lg">
          <Sparkles className="h-3.5 w-3.5 text-gold-400"/>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] gold-text-shimmer drop-shadow-md">China · Africa · Worldwide</span>
        </motion.div>
        
        <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{delay:0.4,duration:0.9}}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.1] tracking-tight text-white drop-shadow-2xl">
          Your Trusted <br/><span className="gold-text-shimmer drop-shadow-2xl">Bridge to Global</span><span className="block mt-2 text-white">Trade.</span>
        </motion.h1>
        
        <motion.p initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.6,duration:0.9}}
          className="mx-auto mt-8 max-w-2xl text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-medium drop-shadow-lg">
          {site.subtext}
        </motion.p>
        
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.9,duration:0.7}}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link href="/book" className="w-full sm:w-auto"><Button size="lg" className="w-full shadow-2xl">Start Your Sourcing Journey <ArrowRight className="h-4 w-4"/></Button></Link>
          <Link href="/buy" className="w-full sm:w-auto"><Button variant="outline" size="lg" className="w-full !border-white/40 !text-white hover:!bg-white hover:!text-navy-900 bg-black/30 backdrop-blur-md shadow-2xl">Explore Products</Button></Link>
        </motion.div>
        
      </div>
      
      <motion.div animate={{y:[0,10,0]}} transition={{duration:2,repeat:Infinity}} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 z-20">
        <span className="text-[10px] uppercase tracking-widest font-bold drop-shadow-md">Scroll</span><ChevronDown className="h-5 w-5 drop-shadow-md"/>
      </motion.div>
    </section>
  );
}
