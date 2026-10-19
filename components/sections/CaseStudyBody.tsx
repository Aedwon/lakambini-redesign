import Link from "next/link";
import { getDivisionLabels, type PortfolioProject } from "@/lib/portfolioData";
import Reveal from "@/components/ui/Reveal";

interface CaseStudyBodyProps {
  project: PortfolioProject;
}

export default function CaseStudyBody({ project }: CaseStudyBodyProps) {
  const study = project.caseStudy;
  if (!study) return null;
  const labels = getDivisionLabels(project);

  const rows: { label: string; value: React.ReactNode }[] = [];
  if (project.client) rows.push({ label: "Client", value: project.client });
  rows.push({ label: "Year", value: <span className="numeral text-[15px]">{project.year}</span> });
  if (project.location) rows.push({ label: "Location", value: project.location });
  rows.push({
    label: "Divisions",
    value: (
      <span className="flex flex-wrap gap-x-4 gap-y-1">
        {labels.map((l) => (
          <Link
            key={l.slug}
            href={`/services/${l.slug}`}
            className="text-ivory underline decoration-brass/60 underline-offset-4 transition-colors hover:text-brass-soft"
          >
            {l.name}
          </Link>
        ))}
      </span>
    ),
  });
  rows.push({ label: "Scope", value: <span className="text-mist">{study.whatWeDid.length} workstreams</span> });

  return (
    <section className="section-y bg-ink">
      <div className="container-x grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <dl className="border-t hairline">
              {rows.map((r) => (
                <div
                  key={r.label}
                  className="grid grid-cols-[6.5rem_1fr] items-baseline gap-4 border-b hairline py-4"
                >
                  <dt className="label-sm text-mist">{r.label}</dt>
                  <dd className="title-sm text-ivory">{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>

        <div className="flex flex-col gap-20 lg:col-span-8 md:gap-28">
          <Reveal>
            <div className="mb-8 flex items-center gap-4 text-mist">
              <span aria-hidden="true" className="h-px w-10 bg-brass/70" />
              <span className="eyebrow">The brief</span>
            </div>
            <p className="headline-md max-w-[34ch] text-ivory md:text-[clamp(1.75rem,2.6vw,2.5rem)]">
              {study.brief}
            </p>
          </Reveal>

          <div>
            <Reveal>
              <div className="mb-8 flex items-center gap-4 text-mist">
                <span aria-hidden="true" className="h-px w-10 bg-brass/70" />
                <span className="eyebrow">What we did</span>
              </div>
            </Reveal>
            <ol className="border-t hairline">
              {study.whatWeDid.map((item, i) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={Math.min(i, 5) * 0.05}
                  className="grid grid-cols-[2.75rem_1fr] items-baseline gap-4 border-b hairline py-5 md:grid-cols-[4rem_1fr] md:py-6"
                >
                  <span className="numeral text-brass">{String(i + 1).padStart(2, "0")}</span>
                  <span className="body-lg max-w-[56ch] text-ivory">{item}</span>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
