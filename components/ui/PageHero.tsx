import { cn } from "@/lib/utils";
import { ReactNode } from "react";
interface P { title: ReactNode; subtitle?: string; overline?: string; className?: string; }
export default function PageHero({title,subtitle,overline,className}:P){
  return(
    <section className={cn("relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-royal-800",className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(212,175,55,0.1),transparent_60%)]"/>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(30,64,175,0.15),transparent_50%)]"/>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {overline&&<p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] gold-text-shimmer">{overline}</p>}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1]">{title}</h1>
        {subtitle&&<p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
