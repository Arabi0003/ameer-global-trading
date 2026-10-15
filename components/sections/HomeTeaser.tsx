"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, PackageSearch, ShoppingBag, Truck, ArrowRight } from "lucide-react";

const gateways = [
  {
    icon: Building2,
    title: "Our Company",
    desc: "Learn about our China-based operations and verified supply chain.",
    href: "/company",
    btn: "Explore Company",
  },
  {
    icon: PackageSearch,
    title: "China Catalog",
    desc: "Browse 3,000+ products with photos across 9 major industries.",
    href: "/catalog",
    btn: "View Catalog",
  },
  {
    icon: Truck,
    title: "How to Order",
    desc: "Our transparent 7-step process from quotation to door delivery.",
    href: "/order",
    btn: "See Process",
  },
  {
    icon: ShoppingBag,
    title: "Buy From Us",
    desc: "Direct access to wholesale electronics, machinery, fashion & more.",
    href: "/buy",
    btn: "Shop Categories",
  },
];

export default function HomeTeaser() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-navy-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] gold-text mb-2">Direct Gateways</p>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-navy-900 dark:text-white">
            Everything You Need to <span className="gold-text">Trade Safely</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gateways.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="luxury-card p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 border border-gold-400/30 mb-5 group-hover:border-gold-400 transition-colors">
                  <g.icon className="h-6 w-6 text-gold-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy-900 dark:text-white mb-2">{g.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{g.desc}</p>
              </div>
              <Link href={g.href} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider gold-text hover:underline">
                {g.btn} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
