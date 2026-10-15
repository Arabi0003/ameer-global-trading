"use client";
import { Sun,Moon } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { motion } from "framer-motion";
export default function ThemeToggle(){
  const {theme,toggle}=useTheme();
  return(
    <button onClick={toggle} aria-label="Toggle theme" className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-navy-900 dark:text-gold-400 hover:border-gold-400/60 transition-all cursor-pointer">
      <motion.div key={theme} initial={{rotate:-90,opacity:0}} animate={{rotate:0,opacity:1}} transition={{duration:0.3}}>
        {theme==="light"?<Moon className="h-4 w-4"/>:<Sun className="h-4 w-4"/>}
      </motion.div>
    </button>
  );
}
