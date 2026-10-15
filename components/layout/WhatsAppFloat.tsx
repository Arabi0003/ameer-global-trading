"use client";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { site } from "@/config/site";
import { waUrl } from "@/lib/utils";
export default function WhatsAppFloat(){
  return(
    <motion.a href={waUrl(site.whatsapp,site.waMsg)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
      initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{delay:1.5,type:"spring",stiffness:200}}
      whileHover={{scale:1.1}} whileTap={{scale:0.95}} className="fixed bottom-6 right-6 z-40">
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"/>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-2xl shadow-green-500/40"><FaWhatsapp className="h-7 w-7"/></span>
    </motion.a>
  );
}
