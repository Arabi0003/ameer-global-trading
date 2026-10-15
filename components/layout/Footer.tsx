"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowUp } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";
import { site } from "@/config/site";
import { waUrl } from "@/lib/utils";
const socials=[
  {icon:FaFacebookF,href:site.socials.facebook,label:"Facebook"},
  {icon:FaInstagram,href:site.socials.instagram,label:"Instagram"},
  {icon:FaTiktok,href:site.socials.tiktok,label:"TikTok"},
  {icon:FaYoutube,href:site.socials.youtube,label:"YouTube"},
];
const navLinks=[
  {label:"Our Company",href:"/company"},{label:"About Us",href:"/about"},
  {label:"Book With Us",href:"/book"},{label:"Place an Order",href:"/order"},{label:"Buy From Us",href:"/buy"},
];
export default function Footer(){
  const wa=waUrl(site.whatsapp,site.waMsg);
  const [year,setYear]=useState(2025);
  useEffect(()=>{setYear(new Date().getFullYear());},[]);
  return(
    <footer className="relative bg-gradient-to-b from-navy-950 to-black border-t border-gold-400/20 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"/>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo/>
            <p className="mt-6 text-sm text-white/60 leading-relaxed max-w-md">{site.subtext}</p>
            <div className="mt-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-400 mb-4">Follow Us</p>
              <div className="flex gap-3">
                {socials.map(s=>(
                  <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} whileHover={{y:-3,scale:1.1}}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/60 hover:border-gold-400/60 hover:text-gold-400 transition-all"><s.icon className="h-4 w-4"/></motion.a>
                ))}
                <motion.a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" whileHover={{y:-3,scale:1.1}}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600 text-white hover:bg-green-500 transition-all"><FaWhatsapp className="h-4 w-4"/></motion.a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-400 mb-5">Navigation</p>
            <ul className="space-y-3">{navLinks.map(l=>(<li key={l.href}><Link href={l.href} className="text-sm text-white/60 hover:text-gold-400 transition-colors">{l.label}</Link></li>))}</ul>
          </div>
          <div className="lg:col-span-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-400 mb-5">Contact</p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/70"><Mail className="h-4 w-4 text-gold-400 mt-0.5 shrink-0"/><a href={"mailto:"+site.email} className="hover:text-gold-400 transition-colors">{site.email}</a></li>
              <li className="flex items-start gap-3 text-white/70"><Phone className="h-4 w-4 text-gold-400 mt-0.5 shrink-0"/><span>{site.phone}</span></li>
              <li className="flex items-start gap-3 text-white/70"><MapPin className="h-4 w-4 text-gold-400 mt-0.5 shrink-0"/><span>{site.address}</span></li>
              <li className="flex items-start gap-3 text-white/70"><Clock className="h-4 w-4 text-gold-400 mt-0.5 shrink-0"/><span>{site.hours}</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">{"\u00A9 "+year+" "+site.name+". All rights reserved."}</p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <Link href="#" className="hover:text-gold-400 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-gold-400 transition-colors">Terms</Link>
            <a href="#top" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 hover:border-gold-400 hover:text-gold-400 transition-all" aria-label="Top"><ArrowUp className="h-3.5 w-3.5"/></a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-[11px] text-white/30">Powered by <a href="https://www.yalerima.com.ng" target="_blank" rel="noopener noreferrer" className="font-semibold text-gold-400/70 hover:text-gold-400 transition-colors underline underline-offset-2 decoration-gold-400/30 hover:decoration-gold-400">Yalerima Technologies Limited</a></p>
        </div>
      </div>
    </footer>
  );
}
