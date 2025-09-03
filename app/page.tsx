import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/Hero";
import WhatIsHimSection from "@/components/sections/WhatIsHim";
import FeaturesSection from "@/components/sections/Features";
import CommunitySection from "@/components/sections/Community";
import TrustPartnersSection from "@/components/sections/TrustPartners";
import DownloadSection from "@/components/sections/Download";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-him-peach">
      <Navigation />
      <HeroSection />
      <WhatIsHimSection />
      <FeaturesSection />
      <CommunitySection />
      <TrustPartnersSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}