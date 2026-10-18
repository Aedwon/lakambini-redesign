"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioProjects, getDivisionLabels, PortfolioProject } from "@/lib/portfolioData";
import { divisions } from "@/lib/divisions";

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const used = new Set(portfolioProjects.flatMap((p) => p.divisions));
  const filters = [
    { name: "All work", slug: "all" },
    ...divisions.filter((d) => used.has(d.slug)).map((d) => ({ name: d.name, slug: d.slug })),
  ];

  const filteredProjects =
    activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.divisions.includes(activeFilter));

  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-16">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter.slug}
              type="button"
              onClick={() => setActiveFilter(filter.slug)}
              aria-pressed={activeFilter === filter.slug}
              className={`px-6 py-2 min-h-[44px] rounded-full label-sm tracking-widest uppercase transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 ${
                activeFilter === filter.slug
                  ? "text-on-primary bg-primary"
                  : "text-on-surface-variant bg-surface-container-low hover:text-primary"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: PortfolioProject }) {
  const labels = getDivisionLabels(project);
  const linked = Boolean(project.caseStudy);
  const meta = [project.client, project.year].filter(Boolean).join(" · ");

  const content = (
    <>
      <div className="relative aspect-[3/2] overflow-hidden bg-surface-container-low">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-transform duration-700 ease-out ${
            linked ? "group-hover:scale-[1.03]" : ""
          }`}
        />
      </div>
      <div className="pt-5 flex flex-col gap-2">
        <h3 className="headline-sm text-on-surface leading-tight">{project.title}</h3>
        <p className="body-md text-on-surface-variant font-light">{meta}</p>
        <p className="label-xs text-primary tracking-widest uppercase">
          {labels.map((l) => l.name).join(" · ")}
        </p>
      </div>
    </>
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {linked ? (
        <Link
          href={`/portfolio/${project.slug}`}
          className="group block focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
        >
          {content}
        </Link>
      ) : (
        <div>{content}</div>
      )}
    </motion.div>
  );
}
