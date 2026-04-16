import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesGrid from "@/components/sections/ServicesGrid";
import PortfolioShowcase from "@/components/sections/PortfolioShowcase";
import DivisionsPreview from "@/components/sections/DivisionsPreview";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustBar />
      <AboutPreview />
      <ServicesGrid />
      <PortfolioShowcase />
      <DivisionsPreview />
      <CTABanner />
    </div>
  );
}
