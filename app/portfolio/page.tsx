import PageHero from "@/components/sections/PageHero";
import PortfolioShowcase from "@/components/sections/PortfolioShowcase";
import CTABanner from "@/components/sections/CTABanner";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero 
        title="Our Portfolio Ecosystem" 
        subtitle="Engineering unforgettable momentum for global brands."
        backgroundImage="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80"
      />
      
      <PortfolioShowcase />
      
      <CTABanner />
    </div>
  );
}
