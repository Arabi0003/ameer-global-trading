import WelcomePopup from "@/components/ui/WelcomePopup";
import VideoHero from "@/components/hero/VideoHero";
import TrustStrip from "@/components/sections/TrustStrip";
import HausaWelcome from "@/components/sections/HausaWelcome";
import About from "@/components/sections/About";
import ChinaTrade from "@/components/sections/ChinaTrade";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <WelcomePopup />
      <VideoHero />
      <TrustStrip />
      <HausaWelcome />
      <About />
      <ChinaTrade />
      <Services />
      <Products />
      <Process />
      <CTA />
    </main>
  );
}
