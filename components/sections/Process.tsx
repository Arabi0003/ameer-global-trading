"use client";
import { motion } from "framer-motion";
const steps = [
  {n:"01",t:"Submit Requirements",d:"Tell us the product, quantity, and quality you need."},
  {n:"02",t:"Supplier Sourcing",d:"We find and present supplier options with pricing."},
  {n:"03",t:"Review & Approve",d:"Evaluate samples, specs, and detailed quotations."},
  {n:"04",t:"Confirm Purchase",d:"Agree on terms and we initiate the purchase order."},
  {n:"05",t:"Quality Inspection",d:"Pre-shipment verification where arranged."},
  {n:"06",t:"Ship Your Goods",d:"We ship via your preferred freight method."},
  {n:"07",t:"Delivery Updates",d:"Receive tracking info until goods arrive safely."},
];
export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center max-w-3xl mx-auto mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] gold-text-shimmer">The Process</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            How We Work — <span className="gold-text">Seven Steps</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s,i)=>(
            <motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
              className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-gold-400/40 transition-all">
              <div className="font-display text-5xl font-black gold-text opacity-80 group-hover:opacity-100 transition-opacity">{s.n}</div>
              <h3 className="font-display mt-3 text-lg font-bold text-white">{s.t}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
