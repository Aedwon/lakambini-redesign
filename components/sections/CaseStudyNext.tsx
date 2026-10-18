import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "@/lib/portfolioData";

interface CaseStudyNextProps {
  project: PortfolioProject;
}

export default function CaseStudyNext({ project }: CaseStudyNextProps) {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <Link
          href={`/portfolio/${project.slug}`}
          className="group relative block overflow-hidden aspect-[4/5] md:aspect-[21/9] bg-surface-container-low focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
        >
          <Image
            src={project.cover}
            alt=""
            fill
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface via-surface/60 to-transparent p-6 pt-24 md:p-10 md:pt-32">
            <span className="label-sm text-primary tracking-widest uppercase">Next project</span>
            <h2 className="display-sm text-on-surface leading-tight mt-2">{project.title}</h2>
          </div>
        </Link>
      </div>
    </section>
  );
}
