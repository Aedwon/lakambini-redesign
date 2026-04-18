import PageHero from "@/components/sections/PageHero";
import PortfolioShowcase from "@/components/sections/PortfolioShowcase";
import CTABanner from "@/components/sections/CTABanner";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col w-full bg-surface">
      <PageHero
        overline="Portfolio"
        title="Our Portfolio"
        subtitle="A look at some of the events and campaigns we've delivered."
      />

      <PortfolioShowcase />

      <CTABanner
        headline="Let's talk about your next project."
        ctaLabel="Book a Discovery Call"
        ctaHref="/contact"
      />
    </div>
  );
}
