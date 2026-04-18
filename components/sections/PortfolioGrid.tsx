"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioProjects, PortfolioProject } from "@/lib/portfolioData";
import { divisions } from "@/lib/divisions";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { name: "All Work", slug: "all" },
    ...divisions.map((d) => ({ name: d.name, slug: d.slug })),
  ];

  const filteredProjects = activeFilter === "all"
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.division === activeFilter);

  return (
    <section className="bg-surface py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-16">
        
        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter.slug}
              onClick={() => setActiveFilter(filter.slug)}
              className={`px-6 py-2 rounded-full text-xs font-label tracking-widest uppercase transition-all duration-300 border ${
                activeFilter === filter.slug
                  ? "border-outline-variant/40 text-primary bg-surface-container-low"
                  : "border-transparent text-on-surface-variant hover:text-primary"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="body-lg text-on-surface-variant italic">
              No projects found in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: PortfolioProject }) {
  const CardContent = (
    <div className="bg-surface-container-high h-full flex flex-col group card-lift overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.img}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-surface/40 transition-colors duration-500 group-hover:bg-surface/10" />
      </div>

      {/* Text Content */}
      <div className="p-8 flex flex-col gap-4 flex-grow">
        <span className="label-sm text-primary tracking-widest uppercase">
          {project.divisionName}
        </span>
        <h3 className="headline-sm text-on-surface leading-tight">
          {project.title}
        </h3>
        <p className="body-md text-on-surface-variant font-light line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {project.caseStudySlug ? (
        <Link href={`/portfolio/${project.caseStudySlug}`} className="block h-full">
          {CardContent}
        </Link>
      ) : (
        <div className="h-full">
          {CardContent}
        </div>
      )}
    </motion.div>
  );
}
