import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ProblemSolution from "@/components/sections/ProblemSolution";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TechHighlight from "@/components/sections/TechHighlight";
import CTABanner from "@/components/sections/CTABanner";
import PageWrapper from "@/components/layout/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="flex flex-col w-full gap-20 md:gap-32 pb-32">
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <ServicesGrid />
        <TechHighlight />
        <CTABanner 
          headline="Ready to start your next project?" 
          ctaLabel="Start Your Project" 
          ctaHref="/contact" 
        />
      </div>
    </PageWrapper>
  );
}
