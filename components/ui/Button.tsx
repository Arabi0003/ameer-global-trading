"use client";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
interface P extends ButtonHTMLAttributes<HTMLButtonElement>{variant?:"gold"|"royal"|"outline"|"ghost";size?:"sm"|"md"|"lg";}
const Button=forwardRef<HTMLButtonElement,P>(({className,variant="gold",size="md",children,...p},ref)=>{
  const base="relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 disabled:opacity-50 overflow-hidden cursor-pointer";
  const v={gold:"bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 bg-[length:200%_auto] text-navy-900 shadow-lg shadow-gold-400/30 hover:shadow-xl hover:bg-[position:100%_center] active:scale-[0.97]",royal:"bg-gradient-to-r from-royal-700 to-royal-600 text-white shadow-lg active:scale-[0.97]",outline:"border-2 border-gold-400 text-gold-500 dark:text-gold-400 hover:bg-gold-400 hover:text-navy-900 active:scale-[0.97]",ghost:"text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"};
  const s={sm:"px-4 py-2 text-xs",md:"px-6 py-3 text-sm",lg:"px-8 py-4 text-base"};
  return <button ref={ref} className={cn(base,v[variant],s[size],className)} {...p}><span className="relative z-10 flex items-center gap-2">{children}</span></button>;
});
Button.displayName="Button";export default Button;
