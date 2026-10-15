"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Our Company", href: "/company" },
  { label: "About Us", href: "/about" },
  { label: "China Catalog", href: "/catalog" },
  { label: "Place an Order", href: "/order" },
  { label: "Buy From Us", href: "/buy" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  const isHome = path === "/";

  return (
    <>
      <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
        className={cn("fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled || !isHome ? "py-2 glass border-b border-gold-400/10 shadow-lg" : "py-4 bg-transparent")}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <Link key={n.href} href={n.href}
                className={cn("relative px-3 py-2 text-[12px] font-semibold uppercase tracking-wider rounded-lg transition-all group",
                  path === n.href ? "text-gold-400" : scrolled || !isHome ? "text-navy-800 dark:text-slate-200" : "text-white/90")}>
                {n.label}
                <span className={cn("absolute inset-x-3 bottom-1 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent transition-transform duration-300",
                  path === n.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100")} />
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/book" className="hidden sm:block"><Button size="sm">Contact Us</Button></Link>
            <button onClick={() => setOpen(true)}
              className={cn("lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border cursor-pointer",
                scrolled || !isHome ? "border-slate-200 dark:border-white/10 text-navy-900 dark:text-white" : "border-white/20 text-white")}
              aria-label="Menu"><Menu className="h-5 w-5" /></button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy-950/80 backdrop-blur-md lg:hidden" onClick={() => setOpen(false)}>
            <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }} onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-gradient-to-br from-navy-900 to-navy-950 border-l border-gold-400/20 p-6 flex flex-col">
              <div className="flex items-center justify-between mb-10">
                <Logo compact />
                <button onClick={() => setOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white cursor-pointer" aria-label="Close"><X className="h-5 w-5" /></button>
              </div>
              <div className="flex-1 space-y-1">
                {nav.map((n, i) => (
                  <motion.div key={n.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link href={n.href} onClick={() => setOpen(false)}
                      className={cn("block px-4 py-3 text-sm font-semibold rounded-lg uppercase tracking-wider",
                        path === n.href ? "text-gold-400 bg-white/5" : "text-white hover:text-gold-400 hover:bg-white/5")}>{n.label}</Link>
                  </motion.div>
                ))}
              </div>
              <Link href="/book" onClick={() => setOpen(false)}><Button className="w-full">Contact Us</Button></Link>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
