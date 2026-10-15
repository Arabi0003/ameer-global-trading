"use client";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { site } from "@/config/site";
import { waUrl } from "@/lib/utils";
export default function CTA() {
  const wa = waUrl(site.whatsapp, site.waMsg);
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 p-10 lg:p-16 border border-gold-400/30">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-royal-600/30 rounded-full blur-3xl" />
          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 mb-6">
              <Sparkles className="h-3 w-3 text-gold-400" />
              <span className="text-xs font-semibold uppercase tracking-widest gold-text">Let&apos;s Build Together</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Ready to <span className="gold-text-shimmer">Source Smarter</span>?
            </h2>
            <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
              Get a free quotation and discover how we can help you access the Chinese market with confidence.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={wa} target="_blank" rel="noopener noreferrer"><Button size="lg"><MessageCircle className="h-4 w-4"/> WhatsApp Us Now</Button></a>
              <a href={"mailto:"+site.email}><Button variant="outline" size="lg" className="!border-white/30 !text-white hover:!bg-white hover:!text-navy-900"><Mail className="h-4 w-4"/> Send Email</Button></a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
