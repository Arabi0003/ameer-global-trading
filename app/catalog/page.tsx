"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MessageCircle, ChevronLeft, ChevronRight, Package } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import { ALL_PRODUCTS, CATEGORIES, PRODUCT_COUNT } from "@/config/products";
import { site } from "@/config/site";
import { waUrl } from "@/lib/utils";

const PER_PAGE = 24;

export default function CatalogPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return ALL_PRODUCTS.filter((p) => {
      const okCat = cat === "All" || p.category === cat;
      const okQ = !query || p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query);
      return okCat && okQ;
    });
  }, [q, cat]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const slice = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const enquire = (name: string) =>
    waUrl(site.whatsapp, `Hello Ameer Global, I am interested in: ${name}. Please send quotation and MOQ.`);

  return (
    <main>
      <PageHero
        overline="China Product Catalog"
        title={<>{PRODUCT_COUNT.toLocaleString()}+ Products with <span className="gold-text">Live Photos</span></>}
        subtitle="Browse electronics, vehicles, furniture, machinery, fashion, building materials and more — then enquire on WhatsApp for any item."
      />

      <section className="py-12 lg:py-16 bg-slate-50 dark:bg-navy-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search + filters */}
          <div className="flex flex-col gap-4 mb-10">
            <div className="relative max-w-2xl mx-auto w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                value={q}
                onChange={(e) => { setQ(e.target.value); setPage(1); }}
                placeholder="Search products e.g. solar, tricycle, sofa, generator..."
                className="w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-800 py-4 pl-12 pr-4 text-sm shadow-lg outline-none focus:ring-2 focus:ring-gold-400"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <button onClick={() => { setCat("All"); setPage(1); }}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${cat === "All" ? "bg-gold-400 text-navy-900 border-gold-400" : "bg-white dark:bg-navy-800 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300"}`}>
                All ({PRODUCT_COUNT})
              </button>
              {CATEGORIES.map((c) => (
                <button key={c} onClick={() => { setCat(c); setPage(1); }}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${cat === c ? "bg-gold-400 text-navy-900 border-gold-400" : "bg-white dark:bg-navy-800 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300"}`}>
                  {c.split(" ")[0]}
                </button>
              ))}
            </div>
            <p className="text-center text-sm text-slate-500 dark:text-slate-400">
              Showing <strong className="text-navy-900 dark:text-white">{slice.length}</strong> of <strong className="text-navy-900 dark:text-white">{filtered.length}</strong> products
              {cat !== "All" && <> in <strong className="gold-text">{cat}</strong></>}
            </p>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {slice.map((p) => (
              <div key={p.id} className="group luxury-card overflow-hidden flex flex-col">
                <div className="relative aspect-square bg-slate-100 dark:bg-navy-900 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width:768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 rounded-md bg-navy-950/80 backdrop-blur px-2 py-0.5 text-[10px] font-bold text-gold-400 uppercase tracking-wide">
                    {p.category.split(" ")[0]}
                  </div>
                </div>
                <div className="p-3 sm:p-4 flex flex-col flex-1">
                  <h3 className="text-sm font-bold text-navy-900 dark:text-white line-clamp-2 min-h-[2.5rem]">{p.name}</h3>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold gold-text">{p.price}</span>
                    <span className="text-[10px] text-slate-500">{p.moq}</span>
                  </div>
                  <a href={enquire(p.name)} target="_blank" rel="noopener noreferrer" className="mt-3">
                    <Button size="sm" className="w-full !text-xs">
                      <MessageCircle className="h-3.5 w-3.5" /> Enquire
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {slice.length === 0 && (
            <div className="text-center py-20">
              <Package className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">No products match your search. Try another keyword or category.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-3">
              <button disabled={current <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 disabled:opacity-40 hover:border-gold-400 cursor-pointer">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="text-sm font-semibold text-navy-900 dark:text-white px-4">
                Page {current} / {totalPages}
              </span>
              <button disabled={current >= totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 disabled:opacity-40 hover:border-gold-400 cursor-pointer">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* CTA */}
          <div className="mt-20 text-center p-10 rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 border border-gold-400/30">
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white mb-4">Need something not listed?</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              This catalog is a sample of what we can source. If it is made in China, send us the name or photo and we will find it.
            </p>
            <Link href="/book"><Button size="lg">Request Custom Sourcing</Button></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
