import PageHero from "@/components/ui/PageHero";
import { Globe2, ShieldCheck, Handshake, Layers, Truck, Receipt, Headphones, MessageCircle } from "lucide-react";
const features=[
  {icon:Globe2,title:"Direct China-Market Access",desc:"Based in China with direct access to wholesale markets, factories, and trade networks."},
  {icon:MessageCircle,title:"Seamless Communication",desc:"We bridge the language and time-zone gap between you and Chinese suppliers."},
  {icon:ShieldCheck,title:"Supplier Coordination",desc:"We vet, negotiate with, and manage suppliers on your behalf to reduce risk."},
  {icon:Handshake,title:"Flexible Requirements",desc:"Whether you need 50 units or 50,000, we adapt to your business scale."},
  {icon:Layers,title:"Wide Product Range",desc:"From electronics to building materials across dozens of categories."},
  {icon:Truck,title:"Shipping Coordination",desc:"Air freight, sea freight, and express delivery worldwide."},
  {icon:Receipt,title:"Transparent Quotations",desc:"Clear cost breakdowns with no hidden fees."},
  {icon:Headphones,title:"Personalized Support",desc:"Dedicated one-on-one support for every client."},
];
export default function CompanyPage(){
  return(
    <main>
      <PageHero overline="Our Company" title={<>Why <span className="gold-text">Ameer Global</span></>} subtitle="Your trusted China-based partner for international sourcing, purchasing, and shipping."/>
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f,i)=>(
              <div key={i} className="luxury-card p-6 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 border border-gold-400/40 mb-5"><f.icon className="h-5 w-5 text-gold-400"/></div>
                <h3 className="font-display text-lg font-bold text-navy-900 dark:text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
