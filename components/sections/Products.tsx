"use client";
import { motion } from "framer-motion";
import { Monitor, Shirt, Footprints, Home, Sparkles, Cog, BrickWall, Wrench, Palette, Smartphone } from "lucide-react";
const cats = [
  {icon:Monitor,name:"Electronics"},{icon:Smartphone,name:"Phone Accessories"},
  {icon:Shirt,name:"Fashion & Clothing"},{icon:Footprints,name:"Shoes & Bags"},
  {icon:Home,name:"Home & Kitchen"},{icon:Sparkles,name:"Beauty & Care"},
  {icon:Cog,name:"Machinery"},{icon:BrickWall,name:"Building Materials"},
  {icon:Wrench,name:"Industrial"},{icon:Palette,name:"Custom Sourcing"},
];
export default function Products() {
  return (
    <section id="products" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-royal-600/5 rounded-full blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center max-w-3xl mx-auto mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] gold-text">Product Categories</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-navy-900 dark:text-white leading-tight">
            Sourcing Across <span className="gold-text">Every Category</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {cats.map((c,i)=>(
            <motion.div key={i} initial={{opacity:0,scale:0.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:(i%5)*0.08}} whileHover={{y:-6,scale:1.03}}
              className="group relative aspect-square rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-navy-800 dark:to-navy-900 border border-slate-200 dark:border-white/5 p-5 flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden transition-all hover:border-gold-400/50 hover:shadow-xl hover:shadow-gold-400/10">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/0 to-gold-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-navy-900 to-navy-950 border border-gold-400/30 group-hover:border-gold-400 transition-colors">
                <c.icon className="h-6 w-6 text-gold-400" />
              </div>
              <p className="relative text-sm font-semibold text-navy-900 dark:text-white leading-tight">{c.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
