import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
const steps=[
  {n:"01",t:"Submit Requirements",d:"Tell us the product, quantity, quality expectations, and budget range."},
  {n:"02",t:"Supplier Sourcing",d:"We search the Chinese market and present supplier options with pricing."},
  {n:"03",t:"Review & Approve",d:"Evaluate product details, samples, specifications, and quotations."},
  {n:"04",t:"Confirm Purchase",d:"Agree on terms and we initiate the purchase order with the supplier."},
  {n:"05",t:"Quality Inspection",d:"Pre-shipment quality verification arranged where needed."},
  {n:"06",t:"Consolidation & Shipping",d:"We organize cargo consolidation and ship via your preferred method."},
  {n:"07",t:"Delivery Updates",d:"Receive shipment tracking and delivery information until arrival."},
];
export default function OrderPage(){
  return(
    <main>
      <PageHero overline="Place an Order" title={<>How to <span className="gold-text">Order</span> From Us</>} subtitle="A transparent seven-step process from your first enquiry to delivered goods."/>
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {steps.map((s,i)=>(
              <div key={i} className="luxury-card p-6 lg:p-8 flex items-start gap-6 group">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 border border-gold-400/40">
                  <span className="font-display text-2xl font-black gold-text">{s.n}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy-900 dark:text-white mb-2">{s.t}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">Ready to place your first order?</p>
            <Link href="/book"><Button size="lg">Get Started Now <ArrowRight className="h-4 w-4"/></Button></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
