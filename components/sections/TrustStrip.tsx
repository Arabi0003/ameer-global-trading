"use client";
import { motion } from "framer-motion";
import { Globe2, ShieldCheck, Headphones, Package } from "lucide-react";
const items=[{icon:Globe2,label:"China-Based",sub:"Direct access"},{icon:ShieldCheck,label:"Verified",sub:"Trusted partners"},{icon:Package,label:"Full-Service",sub:"Start to delivery"},{icon:Headphones,label:"24/7 Support",sub:"One-on-one"}];
export default function TrustStrip(){
  return(
    <section className="relative -mt-10 lg:-mt-14 z-30 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="relative overflow-hidden rounded-2xl glass-dark p-8 gold-glow shadow-2xl">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"/>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it,i)=>(
            <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-600/10 border border-gold-400/30"><it.icon className="h-5 w-5 text-gold-400"/></div>
              <div><div className="text-sm font-bold text-white">{it.label}</div><div className="text-xs text-white/50">{it.sub}</div></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
