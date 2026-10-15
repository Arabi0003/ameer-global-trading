"use client";
import { motion } from "framer-motion";
import Typewriter from "@/components/ui/Typewriter";
const hausa="Barka da zuwa Ameer Global Trading & Shipping — Abokin kasuwancinku na duniya daga China zuwa Afirka da sauran kasashe. Muna taimaka muku samun kayayyaki masu inganci cikin aminci da gaskiya.";
export default function HausaWelcome(){
  return(
    <section className="py-16 lg:py-20 bg-gradient-to-b from-navy-950 to-ivory dark:to-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08),transparent_60%)]"/>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] gold-text">Welcome · Barka Da Zuwa</p>
          <div className="min-h-[100px] flex items-center justify-center"><Typewriter text={hausa} speed={45}/></div>
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 italic">&quot;Welcome to Ameer Global — Your trusted partner from China to Africa and beyond.&quot;</p>
        </motion.div>
      </div>
    </section>
  );
}
