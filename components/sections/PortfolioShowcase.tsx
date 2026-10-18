import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { featuredProjects, getDivisionLabels, PortfolioProject } from "@/lib/portfolioData";

interface PortfolioShowcaseProps {
  hideViewAll?: boolean;
}

function ProjectCard({
  project,
  index,
  large,
  priority,
}: {
  project: PortfolioProject;
  index: number;
  large?: boolean;
  priority?: boolean;
}) {
  const divisions = getDivisionLabels(project);
  return (
    <Link href={`/portfolio/${project.slug}`} className="group block">
      <div
        className={`relative w-full overflow-hidden rounded-[2px] bg-ink-raised ${
          large ? "aspect-[4/5] md:aspect-[16/9]" : "aspect-[4/5] md:aspect-[4/5]"
        }`}
      >
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority={priority}
          sizes={large ? "(min-width: 1520px) 1400px, 92vw" : "(min-width: 768px) 46vw, 92vw"}
          className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-5 grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-t hairline pt-5 md:gap-x-8">
        <span className="numeral pt-2 text-brass">{String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3 className="headline-md text-ivory text-balance transition-colors duration-500 group-hover:text-brass-soft">
            {project.title}
          </h3>
          <p className="mt-2 body-sm text-mist">
            {[project.client, project.year].filter(Boolean).join(" · ")}
          </p>
          {divisions.length > 0 && (
            <p className="mt-3 label-xs text-mist/80">{divisions.map((d) => d.name).join("  /  ")}</p>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function PortfolioShowcase({ hideViewAll = false }: PortfolioShowcaseProps) {
  const [lead, second, third] = featuredProjects.slice(0, 3);
  if (!lead) return null;

  return (
    <section className="section-y bg-ink">
      <div className="container-x">
        <SectionHeader
          index="02"
          label="Selected work"
          title={
            <>
              Proof, not <em>promises</em>.
            </>
          }
          aside={
            hideViewAll ? undefined : (
              <div className="flex flex-col items-start gap-6">
                <p>Stages, activations and caravans we planned, built and ran. Start with these three.</p>
                <Button variant="tertiary" href="/portfolio">
                  All work
                </Button>
              </div>
            )
          }
        />

        <Reveal>
          <ProjectCard project={lead} index={0} large priority={false} />
        </Reveal>

        {(second || third) && (
          <div className="mt-16 grid grid-cols-1 gap-16 md:mt-24 md:grid-cols-2 md:gap-14 lg:gap-24">
            {second && (
              <Reveal>
                <ProjectCard project={second} index={1} />
              </Reveal>
            )}
            {third && (
              <Reveal delay={0.08} className="md:mt-24">
                <ProjectCard project={third} index={2} />
              </Reveal>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
