import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { DownloadSection } from "@/components/sections/DownloadSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";
import { BenefitsSection } from "@/components/sections/BenefitsSection";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-white dark:bg-black">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      {/* <BenefitsSection /> */}
      <FAQSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}
