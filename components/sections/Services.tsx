"use client";
import { motion } from "framer-motion";
import { Search, ShoppingCart, Factory, ClipboardCheck, Ship, Boxes, Users, FileText, ArrowUpRight } from "lucide-react";
const services = [
  {icon:Search,title:"Product Sourcing",desc:"We identify the right products from China's vast manufacturing ecosystem."},
  {icon:Users,title:"Supplier Communication",desc:"Bilingual bridge between you and verified Chinese suppliers."},
  {icon:ShoppingCart,title:"Purchasing & Procurement",desc:"End-to-end management of your purchase orders and payments."},
  {icon:Factory,title:"Factory Sourcing",desc:"Direct connections to factories for custom and OEM manufacturing."},
  {icon:ClipboardCheck,title:"Quality Inspection",desc:"Pre-shipment quality verification through trusted partners."},
  {icon:Boxes,title:"Cargo Consolidation",desc:"Combine purchases from multiple suppliers into one shipment."},
  {icon:Ship,title:"International Shipping",desc:"Air, sea, and express freight coordination worldwide."},
  {icon:FileText,title:"Import Documentation",desc:"Guidance on export paperwork and import requirements."},
];
export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center max-w-3xl mx-auto mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] gold-text">What We Offer</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-navy-900 dark:text-white leading-tight">
            Services for <span className="gold-text">Global Buyers</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s,i)=>(
            <motion.div key={i} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:(i%4)*0.1}} whileHover={{y:-8}} className="luxury-card p-6 group cursor-pointer">
              <div className="flex items-start justify-between mb-5">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold-400/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 border border-gold-400/40">
                    <s.icon className="h-5 w-5 text-gold-400" />
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-300 dark:text-slate-600 group-hover:text-gold-400 group-hover:rotate-45 transition-all" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy-900 dark:text-white mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
