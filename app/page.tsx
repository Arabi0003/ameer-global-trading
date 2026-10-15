import WelcomePopup from "@/components/ui/WelcomePopup";
import VideoHero from "@/components/hero/VideoHero";
import TrustStrip from "@/components/sections/TrustStrip";
import HausaWelcome from "@/components/sections/HausaWelcome";

export default function Home() {
  return (
    <main>
      <WelcomePopup />
      <VideoHero />
      <TrustStrip />
      <HausaWelcome />
    </main>
  );
}
