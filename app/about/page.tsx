import PageHero from "@/components/ui/PageHero";
import { CheckCircle2, Globe2 } from "lucide-react";
const points=["Direct access to Chinese wholesale markets and factories","Bilingual communication bridging buyers and suppliers","End-to-end sourcing, purchasing, and shipping coordination","Transparent pricing with no hidden fees"];
const content=`China stands as the undisputed manufacturing powerhouse of the modern world. Every year, factories across Guangdong, Zhejiang, Jiangsu, and Fujian provinces produce billions of products that find their way into homes, businesses, and markets across every continent. From the bustling wholesale markets of Yiwu to the high-tech manufacturing zones of Shenzhen, China offers an unparalleled diversity of goods at competitive prices that no other country can match.

The range of products available from Chinese manufacturers is truly staggering. Electronics and mobile accessories, fashion and textiles, home and kitchen products, building materials, machinery, industrial equipment, beauty and personal care items, automotive parts, and countless other categories are all readily available from Chinese suppliers eager to serve international buyers.

However, the opportunity that China presents comes with significant challenges, particularly for buyers in Africa and other developing regions. The most fundamental challenge is trust. How can a business owner in Lagos, Nairobi, or Accra be confident that a supplier thousands of kilometers away will deliver products matching agreed specifications? How can they verify quality before committing significant capital?

These are the daily realities faced by entrepreneurs who want to access the Chinese market but lack the connections, language skills, and on-the-ground presence to do so safely. The stories of buyers who have lost money to unreliable suppliers or received substandard products are unfortunately common.

This is precisely the gap that Ameer Global Trading and Shipping was created to fill. Founded by a young African entrepreneur who lives and works in China, our company serves as a trusted bridge between international buyers and the Chinese market. We understand our clients' concerns because we share their background, ambitions, and desire for transparent business relationships.

Trust is built through consistent action, transparent communication, and accountability at every stage. When a client approaches us, we carefully research the market, identify multiple potential suppliers, verify credentials, compare pricing and quality, and present well-documented options.

Our team communicates directly with manufacturers in Chinese, eliminating language barriers. We negotiate pricing, coordinate sample orders, and arrange pre-shipment inspections through trusted quality control partners.

The logistics of international shipping can be equally daunting. Air freight, sea freight, express courier, consolidated cargo, and full container loads each have their own advantages. We work with established freight forwarders to arrange the most suitable method for each client's needs, budget, and timeline.

For African businesses, sourcing directly from China represents a transformative advantage. Rather than purchasing from local middlemen with significant markups, businesses can access factory-direct pricing and pass those savings to their customers.

At Ameer Global Trading and Shipping, we are committed to building long-term partnerships. We do not view each transaction as a one-time deal but as the beginning of a relationship that grows over time. As your business expands, we expand with you.`;
export default function AboutPage(){
  const paragraphs=content.split("\n\n");
  return(
    <main>
      <PageHero overline="About Us" title={<>Bridging <span className="gold-text">China</span> and the <span className="gold-text">World</span></>} subtitle="Founded by a young African entrepreneur living in China, solving real challenges for international buyers."/>
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-navy-900 dark:text-white mb-6">Our Story</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">Ameer Global Trading & Shipping was built to solve the real challenges international buyers face when sourcing products from China. Our founder, a young African entrepreneur based in Guangzhou, experienced these challenges firsthand.</p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Today, we provide direct access to China&apos;s manufacturing power, handling supplier communication, product sourcing, quality verification, and international shipping on your behalf.</p>
              <ul className="space-y-3">{points.map((p,i)=>(<li key={i} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-gold-400 shrink-0 mt-0.5"/><span className="text-slate-700 dark:text-slate-300">{p}</span></li>))}</ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-400/20 to-royal-600/20 rounded-3xl blur-2xl"/>
              <div className="relative aspect-[4/5] rounded-3xl bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 border border-gold-400/20 p-10 flex flex-col justify-between">
                <div><Globe2 className="h-16 w-16 text-gold-400 mb-6" strokeWidth={1.2}/><h3 className="font-display text-3xl font-bold text-white">Your Gateway to <br/><span className="gold-text">Chinese Markets</span></h3></div>
                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gold-400/20">
                  <div><div className="font-display text-3xl font-bold gold-text">50+</div><div className="text-xs text-white/50 uppercase tracking-wider mt-1">Categories</div></div>
                  <div><div className="font-display text-3xl font-bold gold-text">24/7</div><div className="text-xs text-white/50 uppercase tracking-wider mt-1">Support</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 lg:py-32 bg-slate-50 dark:bg-navy-900/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-navy-900 dark:text-white text-center mb-12">Products, <span className="gold-text">Trust</span> & Global Trade</h2>
          <div className="space-y-6">{paragraphs.map((p,i)=>(<p key={i} className="text-base lg:text-lg text-slate-700 dark:text-slate-300 leading-[1.9]">{p}</p>))}</div>
        </div>
      </section>
    </main>
  );
}
