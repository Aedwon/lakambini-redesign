import Image from "next/image";
import type { PortfolioProject } from "@/lib/portfolioData";

interface CaseStudyGalleryProps {
  project: PortfolioProject;
}

export default function CaseStudyGallery({ project }: CaseStudyGalleryProps) {
  const images = project.images;
  if (images.length === 0) return null;

  return (
    <section className="bg-surface-container-low py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-16">
          <span className="label-sm text-primary tracking-widest uppercase">Gallery</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {images.map((src, i) => {
            const wide = i % 5 === 0;
            return (
              <div
                key={src}
                className={`relative overflow-hidden bg-surface-container ${
                  wide ? "md:col-span-2 aspect-[3/2] md:aspect-[21/9]" : "aspect-[3/2]"
                }`}
              >
                <Image
                  src={src}
                  alt={`${project.title}, photo ${i + 1}`}
                  fill
                  sizes={wide ? "(max-width: 1440px) 100vw, 1440px" : "(max-width: 768px) 100vw, 50vw"}
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
