import WelcomePopup from "@/components/ui/WelcomePopup";
import VideoHero from "@/components/hero/VideoHero";
import TrustStrip from "@/components/sections/TrustStrip";
import HausaWelcome from "@/components/sections/HausaWelcome";
import HomeTeaser from "@/components/sections/HomeTeaser";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      {/* 2-Second Welcome Modal */}
      <WelcomePopup />

      {/* SCROLL 1: Cinematic Video Hero */}
      <VideoHero />

      {/* SCROLL 2: Trust Highlights, Hausa Welcome & Gateway Cards */}
      <TrustStrip />
      <HausaWelcome />
      <HomeTeaser />

      {/* SCROLL 3: Executive Conversion Banner */}
      <CTA />
    </main>
  );
}
