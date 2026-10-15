"use client";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import { site } from "@/config/site";
import { waUrl } from "@/lib/utils";
import { MessageCircle, Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
export default function BookPage(){
  const wa=waUrl(site.whatsapp,site.waMsg);
  const [sent,setSent]=useState(false);
  return(
    <main>
      <PageHero overline="Book With Us" title={<>Get a <span className="gold-text">Free Quote</span></>} subtitle="Tell us what you need and we will get back to you within 24 hours with a detailed quotation."/>
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-3xl font-black text-navy-900 dark:text-white mb-6">Contact Information</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">Reach out through any of the channels below. We respond within 24 hours on business days.</p>
              <ul className="space-y-5">
                <li className="flex items-start gap-4"><Mail className="h-5 w-5 text-gold-400 mt-0.5 shrink-0"/><div><p className="text-sm font-semibold text-navy-900 dark:text-white">Email</p><a href={"mailto:"+site.email} className="text-slate-600 dark:text-slate-400 hover:text-gold-400 transition-colors">{site.email}</a></div></li>
                <li className="flex items-start gap-4"><Phone className="h-5 w-5 text-gold-400 mt-0.5 shrink-0"/><div><p className="text-sm font-semibold text-navy-900 dark:text-white">Phone / WhatsApp</p><span className="text-slate-600 dark:text-slate-400">{site.phone}</span></div></li>
                <li className="flex items-start gap-4"><MapPin className="h-5 w-5 text-gold-400 mt-0.5 shrink-0"/><div><p className="text-sm font-semibold text-navy-900 dark:text-white">Office</p><span className="text-slate-600 dark:text-slate-400">{site.address}</span></div></li>
                <li className="flex items-start gap-4"><Clock className="h-5 w-5 text-gold-400 mt-0.5 shrink-0"/><div><p className="text-sm font-semibold text-navy-900 dark:text-white">Hours</p><span className="text-slate-600 dark:text-slate-400">{site.hours}</span></div></li>
              </ul>
              <div className="mt-10 flex gap-4">
                <a href={wa} target="_blank" rel="noopener noreferrer"><Button><MessageCircle className="h-4 w-4"/> WhatsApp</Button></a>
                <a href={"mailto:"+site.email}><Button variant="outline"><Mail className="h-4 w-4"/> Email</Button></a>
              </div>
            </div>
            <div className="luxury-card p-8">
              <h3 className="font-display text-2xl font-bold text-navy-900 dark:text-white mb-6">Request a Quotation</h3>
              {sent?(
                <div className="text-center py-12"><div className="text-5xl mb-4">&#10003;</div><p className="text-xl font-bold text-navy-900 dark:text-white">Thank You!</p><p className="text-slate-600 dark:text-slate-400 mt-2">We will get back to you within 24 hours.</p></div>
              ):(
                <form onSubmit={e=>{e.preventDefault();setSent(true);}} className="space-y-5">
                  <div><label className="block text-sm font-semibold text-navy-900 dark:text-white mb-1">Full Name *</label><input required type="text" className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-800 px-4 py-3 text-sm focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all"/></div>
                  <div><label className="block text-sm font-semibold text-navy-900 dark:text-white mb-1">Email *</label><input required type="email" className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-800 px-4 py-3 text-sm focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all"/></div>
                  <div><label className="block text-sm font-semibold text-navy-900 dark:text-white mb-1">WhatsApp Number</label><input type="tel" className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-800 px-4 py-3 text-sm focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all"/></div>
                  <div><label className="block text-sm font-semibold text-navy-900 dark:text-white mb-1">Product / Service Needed *</label><textarea required rows={4} className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-800 px-4 py-3 text-sm focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all resize-none" placeholder="Describe the products you need, quantity, destination country..."/></div>
                  <Button type="submit" className="w-full"><Send className="h-4 w-4"/> Submit Enquiry</Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
