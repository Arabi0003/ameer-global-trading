import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Monitor, Shirt, Footprints, Home, Sparkles, Cog, BrickWall, Wrench, Palette, Smartphone, ArrowRight } from "lucide-react";
const cats=[
  {icon:Monitor,name:"Electronics & Accessories",desc:"Phones, tablets, earbuds, chargers, smart devices."},
  {icon:Smartphone,name:"Mobile Phone Accessories",desc:"Cases, screen protectors, power banks, repair parts."},
  {icon:Shirt,name:"Fashion & Clothing",desc:"Men's, women's, children's apparel and activewear."},
  {icon:Footprints,name:"Shoes, Bags & Accessories",desc:"Sneakers, formal shoes, handbags, backpacks."},
  {icon:Home,name:"Home & Kitchen",desc:"Cookware, storage, decor, small appliances."},
  {icon:Sparkles,name:"Beauty & Personal Care",desc:"Skincare, cosmetics, hair tools, grooming."},
  {icon:Cog,name:"Machinery & Equipment",desc:"Industrial machines, agricultural equipment."},
  {icon:BrickWall,name:"Building Materials",desc:"Tiles, fixtures, steel, piping, lighting."},
  {icon:Wrench,name:"Industrial Supplies",desc:"Safety equipment, tools, packaging materials."},
  {icon:Palette,name:"Custom Sourcing",desc:"Private label, OEM, ODM to your specifications."},
];
export default function BuyPage(){
  return(
    <main>
      <PageHero overline="Buy From Us" title={<>Source <span className="gold-text">Any Product</span> From China</>} subtitle="If it is made in China, we can source it for you. Browse our most popular categories below."/>
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cats.map((c,i)=>(
              <div key={i} className="luxury-card p-6 group cursor-pointer flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 border border-gold-400/30 group-hover:border-gold-400 transition-colors">
                  <c.icon className="h-6 w-6 text-gold-400"/>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-900 dark:text-white mb-1">{c.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center luxury-card p-10">
            <h3 className="font-display text-2xl font-bold text-navy-900 dark:text-white mb-3">Don&apos;t see what you need?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-xl mx-auto">We source across every product category. Contact us with your specific requirements and we will find a solution.</p>
            <Link href="/book"><Button size="lg">Enquire Now <ArrowRight className="h-4 w-4"/></Button></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
