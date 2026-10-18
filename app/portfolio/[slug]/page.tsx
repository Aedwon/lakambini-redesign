import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyHero from "@/components/sections/CaseStudyHero";
import CaseStudyBody from "@/components/sections/CaseStudyBody";
import CaseStudyGallery from "@/components/sections/CaseStudyGallery";
import CaseStudyNext from "@/components/sections/CaseStudyNext";
import CTABanner from "@/components/sections/CTABanner";
import { caseStudyProjects, getNextCaseStudy, getProjectBySlug } from "@/lib/portfolioData";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudyProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || !project.caseStudy) return {};
  const title = project.title;
  return {
    title,
    description: project.summary,
    openGraph: {
      title: `${title} | Lakambini Events`,
      description: project.summary,
      url: `/portfolio/${project.slug}`,
      images: [{ url: project.cover }],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || !project.caseStudy) notFound();
  const next = getNextCaseStudy(project.slug);

  return (
    <div className="flex flex-col w-full bg-ink">
      <CaseStudyHero project={project} />
      <CaseStudyBody project={project} />
      <CaseStudyGallery project={project} />
      {next && next.slug !== project.slug && <CaseStudyNext project={next} />}
      <CTABanner
        headline="Let's talk about your next project."
        ctaLabel="Book a Discovery Call"
        ctaHref="/contact"
        bgImage="/images/events/mcc-s2-stage.jpg"
      />
    </div>
  );
}
