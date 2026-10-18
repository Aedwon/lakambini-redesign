import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "@/lib/portfolioData";

interface CaseStudyNextProps {
  project: PortfolioProject;
}

export default function CaseStudyNext({ project }: CaseStudyNextProps) {
  const meta = [project.client, project.year].filter(Boolean).join(" · ");

  return (
    <section className="bg-ink">
      <Link
        href={`/portfolio/${project.slug}`}
        className="group relative flex min-h-[70svh] w-full flex-col justify-end overflow-hidden md:min-h-[85svh]"
      >
        <Image
          src={project.cover}
          alt=""
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-ink/30" />
        <div aria-hidden="true" className="absolute inset-0 scrim-bottom" />

        <div className="container-x relative z-10 pb-10 md:pb-16">
          <p className="eyebrow mb-6 text-ivory/80">
            Next project <span className="text-brass">→</span>
          </p>
          <h2 className="display-lg max-w-[18ch] text-balance text-ivory">{project.title}</h2>
          {meta && <p className="numeral mt-6 text-mist">{meta}</p>}
        </div>
      </Link>
    </section>
  );
}
