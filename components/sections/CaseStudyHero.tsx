import Image from "next/image";
import type { PortfolioProject } from "@/lib/portfolioData";

interface CaseStudyHeroProps {
  project: PortfolioProject;
}

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const meta = [project.client, project.year, project.location].filter(Boolean).join(" · ");

  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-end overflow-hidden bg-surface">
      <Image
        src={project.cover}
        alt={project.title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-12 md:pb-20 pt-40">
        <span className="label-sm text-primary tracking-widest uppercase">Case study</span>
        <h1 className="display-lg text-on-surface leading-[1.05] mt-4 max-w-4xl">{project.title}</h1>
        <p className="body-lg text-on-surface-variant mt-6">{meta}</p>
      </div>
    </section>
  );
}
