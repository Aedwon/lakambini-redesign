import Link from "next/link";
import { getDivisionLabels, type PortfolioProject } from "@/lib/portfolioData";

interface CaseStudyBodyProps {
  project: PortfolioProject;
}

export default function CaseStudyBody({ project }: CaseStudyBodyProps) {
  const study = project.caseStudy;
  if (!study) return null;
  const labels = getDivisionLabels(project);

  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-24">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 bg-surface-container-low p-8 md:p-12">
          {project.client && (
            <div className="flex flex-col gap-2">
              <dt className="label-xs text-on-surface-variant tracking-widest uppercase">Client</dt>
              <dd className="body-lg text-on-surface">{project.client}</dd>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <dt className="label-xs text-on-surface-variant tracking-widest uppercase">Year</dt>
            <dd className="body-lg text-on-surface">{project.year}</dd>
          </div>
          {project.location && (
            <div className="flex flex-col gap-2">
              <dt className="label-xs text-on-surface-variant tracking-widest uppercase">Location</dt>
              <dd className="body-lg text-on-surface">{project.location}</dd>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <dt className="label-xs text-on-surface-variant tracking-widest uppercase">Divisions</dt>
            <dd className="flex flex-wrap gap-x-4 gap-y-1">
              {labels.map((l) => (
                <Link
                  key={l.slug}
                  href={`/services/${l.slug}`}
                  className="body-lg text-primary hover:text-on-surface transition-colors focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
                >
                  {l.name}
                </Link>
              ))}
            </dd>
          </div>
        </dl>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-7 flex flex-col gap-6">
            <span className="label-sm text-primary tracking-widest uppercase">The brief</span>
            <p className="headline-sm text-on-surface font-light leading-snug max-w-[65ch]">
              {study.brief}
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col gap-6">
            <span className="label-sm text-primary tracking-widest uppercase">What we did</span>
            <ul className="flex flex-col gap-4">
              {study.whatWeDid.map((item) => (
                <li key={item} className="body-lg text-on-surface-variant font-light flex gap-4">
                  <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
