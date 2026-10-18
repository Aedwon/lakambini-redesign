import Image from "next/image";
import type { PortfolioProject } from "@/lib/portfolioData";

interface CaseStudyHeroProps {
  project: PortfolioProject;
}

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const meta = [project.client, project.location].filter(Boolean).join(" · ");

  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full flex-col justify-end overflow-hidden bg-ink">
      <Image
        src={project.cover}
        alt={project.title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-ink/20" />
      <div aria-hidden="true" className="absolute inset-0 scrim-bottom" />

      <div className="container-x relative z-10 pb-10 md:pb-14">
        <p className="eyebrow mb-6 text-ivory/80 md:mb-8">
          Case study <span className="text-brass">·</span> {project.year}
        </p>
        <h1 className="display-lg max-w-[18ch] text-balance text-ivory">{project.title}</h1>
        {meta && <p className="body-lg mt-6 text-mist md:mt-8">{meta}</p>}

        <div className="mt-12 flex items-center justify-between gap-6 border-t hairline pt-5 text-mist md:mt-16">
          <p className="numeral">
            <span className="text-brass">●</span>&nbsp; {project.title}
          </p>
          <p className="numeral hidden sm:block">Scroll</p>
        </div>
      </div>
    </section>
  );
}
