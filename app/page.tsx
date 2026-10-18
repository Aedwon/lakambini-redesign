import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Manifesto from "@/components/sections/Manifesto";
import MissionStatement from "@/components/sections/MissionStatement";
import Process from "@/components/sections/Process";
import DivisionIndex from "@/components/sections/DivisionIndex";
import PortfolioShowcase from "@/components/sections/PortfolioShowcase";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Full-Service Event Production Agency",
  description:
    "Full-service event production: planning, execution and custom technology under one roof.",
  openGraph: {
    title: "Lakambini Events | Full-Service Event Production Agency",
    description:
      "Full-service event production: planning, execution and custom technology under one roof.",
    url: "/",
  },
};

export default function Home() {
  return (
      <div className="flex flex-col w-full">
        <Hero />
        <Manifesto />
        <TrustBar />
        <PortfolioShowcase />
        <DivisionIndex />
        <Process />
        <MissionStatement />
        <CTABanner 
          headline="Have an event in mind? Let's talk."
          subtitle="Tell us what you're planning and we'll tell you how we can help."
          ctaLabel="Book a Discovery Call" 
          ctaHref="/contact" 
        />
      </div>
  );
}
