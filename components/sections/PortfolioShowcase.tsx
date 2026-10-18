import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { featuredProjects, PortfolioProject } from "@/lib/portfolioData";

interface PortfolioShowcaseProps {
  hideViewAll?: boolean;
}

const linkClasses =
  "group relative block w-full overflow-hidden bg-surface-container-low focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4";

function Caption({ project, large }: { project: PortfolioProject; large?: boolean }) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-surface via-surface/60 to-transparent p-6 pt-24 md:p-10 md:pt-32">
      <span className="label-sm text-primary tracking-widest uppercase">
        {[project.client, project.year].filter(Boolean).join(" · ")}
      </span>
      <h3 className={`${large ? "display-sm" : "headline-sm"} text-on-surface leading-tight mt-2`}>
        {project.title}
      </h3>
    </div>
  );
}

export default function PortfolioShowcase({ hideViewAll = false }: PortfolioShowcaseProps) {
  const [lead, ...rest] = featuredProjects.slice(0, 3);
  if (!lead) return null;

  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-16">
          <div className="flex flex-col gap-6 max-w-3xl">
            <span className="label-sm text-primary tracking-widest uppercase">Selected work</span>
            <h2 className="headline-lg text-on-surface leading-tight">Events we&apos;ve delivered.</h2>
          </div>
          {!hideViewAll && (
            <Button variant="secondary" href="/portfolio" className="mb-2">
              View all work
            </Button>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <Link href={`/portfolio/${lead.slug}`} className={`${linkClasses} aspect-[4/5] md:aspect-[21/9]`}>
            <Image
              src={lead.cover}
              alt={lead.title}
              fill
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <Caption project={lead} large />
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className={`${linkClasses} aspect-[4/5] md:aspect-[16/10]`}
              >
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <Caption project={project} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
