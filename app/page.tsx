import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Process from "@/components/sections/Process";
import ServicesGrid from "@/components/sections/ServicesGrid";
import PortfolioShowcase from "@/components/sections/PortfolioShowcase";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Full-Service Event Production Agency",
  description:
    "We turn bold ideas into exceptional event experiences. Full-service event production — planning, execution, and custom technology. One team, one standard.",
  openGraph: {
    title: "Lakambini Events | Full-Service Event Production Agency",
    description:
      "We turn bold ideas into exceptional event experiences. Full-service event production — planning, execution, and custom technology. One team, one standard.",
    url: "/",
  },
};

export default function Home() {
  return (
      <div className="flex flex-col w-full">
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <Process />
        <ServicesGrid />
        <PortfolioShowcase />
        <Testimonials />
        <CTABanner 
          headline="Have an event in mind? Let's talk."
          subtitle="Tell us what you're planning. We'll tell you how we can help."
          ctaLabel="Book a Discovery Call" 
          ctaHref="/contact" 
        />
      </div>
  );
}
