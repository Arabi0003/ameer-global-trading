"use client";
import { motion } from "framer-motion";

const content = `China stands as the undisputed manufacturing powerhouse of the modern world. Every year, factories across Guangdong, Zhejiang, Jiangsu, and Fujian provinces produce billions of products that find their way into homes, businesses, and markets across every continent. From the bustling wholesale markets of Yiwu to the high-tech manufacturing zones of Shenzhen, China offers an unparalleled diversity of goods at competitive prices that no other country can match.

The range of products available from Chinese manufacturers is truly staggering. Electronics and mobile accessories — including smartphones, earbuds, chargers, power banks, and smartwatches — represent one of the largest export categories. Fashion and textiles, from casual wear to formal attire, shoes, bags, and accessories, are produced in enormous quantities with increasingly sophisticated designs and quality standards. Home and kitchen products, building materials, machinery, industrial equipment, beauty and personal care items, automotive parts, and countless other categories are all readily available from Chinese suppliers who are eager to serve international buyers.

However, the opportunity that China presents comes with significant challenges, particularly for buyers in Africa and other developing regions. The most fundamental of these challenges is trust. How can a business owner in Lagos, Nairobi, or Accra be confident that a supplier thousands of kilometers away will deliver products that match the agreed specifications? How can they verify the quality of goods before committing significant capital? How can they navigate the complexities of international payment, shipping logistics, customs documentation, and import regulations?

These are not abstract concerns. They are the daily realities faced by entrepreneurs and businesses who want to access the Chinese market but lack the connections, language skills, and on-the-ground presence to do so safely and efficiently. The stories of buyers who have lost money to unreliable suppliers, received substandard products, or faced unexpected shipping delays are unfortunately common. These experiences erode confidence and create a barrier between African businesses and the enormous opportunities that Chinese manufacturing offers.

This is precisely the gap that Ameer Global Trading and Shipping was created to fill. Founded by a young African entrepreneur who lives and works in China, our company serves as a trusted bridge between international buyers and the Chinese market. We understand the concerns of our clients because we share their background, their ambitions, and their desire for transparent, reliable business relationships.

Trust, in our view, is not built through promises alone. It is built through consistent action, transparent communication, and a willingness to be accountable at every stage of the sourcing and shipping process. When a client approaches us with a product requirement, we do not simply forward their request to a random supplier. We carefully research the market, identify multiple potential suppliers, verify their credentials, compare pricing and quality, and present our client with well-documented options.

Our team communicates directly with manufacturers and wholesalers in Chinese, eliminating the language barriers that often lead to misunderstandings and costly errors. We negotiate pricing on behalf of our clients, ensuring that they receive fair and competitive rates. We coordinate sample orders so that buyers can evaluate product quality before committing to large purchases. And when an order is confirmed, we arrange pre-shipment inspections through trusted quality control partners to verify that the goods meet the agreed standards.

The logistics of international shipping can be equally daunting. Air freight, sea freight, express courier services, consolidated cargo, and full container loads each have their own advantages, costs, and timelines. We work with established freight forwarders and logistics partners to arrange the most suitable shipping method for each client's needs, budget, and timeline. Whether you need a small parcel delivered by express courier within a week or a full container of building materials shipped by sea over several weeks, we coordinate the entire process and keep you informed at every stage.

For African businesses in particular, the opportunity to source directly from China represents a transformative advantage. Rather than purchasing from local middlemen who add significant markups, businesses can access factory-direct pricing and pass those savings on to their customers. This competitive advantage can be the difference between surviving and thriving in today's challenging economic environment.

At Ameer Global Trading and Shipping, we are committed to building long-term partnerships with our clients. We do not view each transaction as a one-time deal but as the beginning of a relationship that will grow and strengthen over time. As your business expands, we expand with you — sourcing new products, exploring new markets, and finding new ways to help you succeed. The future of international trade is being shaped by entrepreneurs who are willing to bridge the gaps between markets, cultures, and continents. We invite you to join us on this journey.`;

export default function ChinaTrade() {
  const paragraphs = content.split("\n\n");
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-transparent via-slate-50 to-transparent dark:via-navy-900/30">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] gold-text">Understanding The Market</p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-navy-900 dark:text-white leading-tight">
            Products, <span className="gold-text">Trust</span> & Global Trade
          </h2>
        </motion.div>
        <div className="space-y-6">
          {paragraphs.map((p,i)=>(
            <motion.p key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}
              className="text-base lg:text-lg text-slate-700 dark:text-slate-300 leading-[1.9] first-letter:text-3xl first-letter:font-bold first-letter:gold-text first-letter:mr-1">
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
