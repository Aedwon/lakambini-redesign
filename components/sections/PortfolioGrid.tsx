"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { portfolioProjects, getDivisionLabels, type PortfolioProject } from "@/lib/portfolioData";
import { divisions } from "@/lib/divisions";

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const reduce = useReducedMotion();

  const used = new Set(portfolioProjects.flatMap((p) => p.divisions));
  const filters = [
    { name: "All", slug: "all", count: portfolioProjects.length },
    ...divisions
      .filter((d) => used.has(d.slug))
      .map((d) => ({
        name: d.name,
        slug: d.slug,
        count: portfolioProjects.filter((p) => p.divisions.includes(d.slug)).length,
      })),
  ];

  const filtered =
    activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.divisions.includes(activeFilter));

  return (
    <section className="bg-ink pb-24 pt-10 md:pb-32 md:pt-14">
      <div className="container-x">
        <div
          role="group"
          aria-label="Filter projects by division"
          className="-mx-5 flex gap-x-7 overflow-x-auto px-5 md:mx-0 md:flex-wrap md:gap-x-9 md:overflow-visible md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {filters.map((f) => {
            const active = activeFilter === f.slug;
            return (
              <button
                key={f.slug}
                type="button"
                onClick={() => setActiveFilter(f.slug)}
                aria-pressed={active}
                className={`group relative shrink-0 min-h-[44px] py-3 text-[13px] font-medium tracking-[0.04em] transition-colors duration-300 ${
                  active ? "text-ivory" : "text-mist hover:text-ivory"
                }`}
              >
                <span>{f.name}</span>
                <sup className="numeral ml-1 text-[10px] text-mist align-super">{f.count}</sup>
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-2 h-px origin-left bg-brass transition-transform duration-500 ease-out ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-x-8 gap-y-16 md:mt-16 md:grid-cols-2 md:gap-x-12 md:gap-y-24 lg:gap-x-16">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} reduce={Boolean(reduce)} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
  reduce: boolean;
}

function ProjectCard({ project, index, reduce }: ProjectCardProps) {
  const labels = getDivisionLabels(project);
  const linked = Boolean(project.caseStudy);
  const meta = [project.client, project.year].filter(Boolean).join(" · ");
  const tall = index % 2 === 0;
  // Second column sits lower for a masonry feel on desktop
  const offset = index % 2 === 1 ? "md:mt-28" : "";

  const content = (
    <>
      <div
        className={`relative overflow-hidden rounded-[2px] bg-ink-raised ${
          tall ? "aspect-[4/5]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-transform duration-[1200ms] ease-out ${
            linked ? "group-hover:scale-[1.04] group-focus-visible:scale-[1.04]" : ""
          }`}
        />
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-4">
          <span className="numeral text-brass">{String(index + 1).padStart(2, "0")}</span>
          {linked && (
            <span className="label-sm text-ivory transition-colors group-hover:text-brass-soft">
              Case study <span aria-hidden="true">→</span>
            </span>
          )}
        </div>
        <h3 className="headline-sm text-ivory">{project.title}</h3>
        {meta && <p className="body-sm text-mist">{meta}</p>}
        <p className="label-xs text-mist/80">{labels.map((l) => l.name).join(" · ")}</p>
      </div>
    </>
  );

  return (
    <motion.article
      layout={!reduce}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
      transition={{ duration: reduce ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={offset}
    >
      {linked ? (
        <Link href={`/portfolio/${project.slug}`} className="group block">
          {content}
        </Link>
      ) : (
        <div>{content}</div>
      )}
    </motion.article>
  );
}
