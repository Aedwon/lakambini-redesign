import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import DivisionHero from "@/components/sections/DivisionHero";
import DivisionCrossLinks from "@/components/sections/DivisionCrossLinks";
import DaloyProjects from "@/components/sections/DaloyProjects";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { getDivisionBySlug } from "@/lib/divisions";
import { divisionContent } from "@/lib/divisionContent";
import { portfolioProjects } from "@/lib/portfolioData";

interface DivisionPageProps {
  slug: string;
}

export default function DivisionPage({ slug }: DivisionPageProps) {
  const division = getDivisionBySlug(slug);
  const content = divisionContent[slug];
  if (!division || !content) return notFound();

  const isDaloy = slug === "daloy";
  const related = isDaloy ? [] : portfolioProjects.filter((p) => p.divisions.includes(slug)).slice(0, 3);
  const [lead, ...rest] = content.images;
  const pair = rest.slice(0, 2);

  return (
    <div className="bg-ink text-ivory">
      <DivisionHero division={division} intro={content.intro} />

      {/* 01 Capabilities */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeader
            label="Capabilities"
            title={
              <>
                What {division.name.charAt(0) + division.name.slice(1).toLowerCase()} <em>does</em>
              </>
            }
          />
          <ol className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 border-b hairline md:border-b-0">
            {content.capabilities.map((c, i) => (
              <Reveal key={c.title} as="li" delay={(i % 2) * 0.06} className="border-t hairline last:border-b md:last:border-b-0">
                <div className="grid grid-cols-[3rem_1fr] gap-x-4 py-7 md:py-9">
                  <span className="numeral text-mist pt-1.5">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="title-lg text-ivory">{c.title}</h3>
                    <p className="body-md text-mist mt-2 max-w-[48ch]">{c.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Pull quote */}
      {content.pullQuote && (
        <section className="pb-16 md:pb-24">
          <div className="container-x">
            <Reveal>
              <blockquote className="border-t hairline pt-10 md:pt-14 max-w-[26ch] md:max-w-[34ch]">
                <p className="display-sm text-ivory text-balance">&ldquo;{content.pullQuote}&rdquo;</p>
              </blockquote>
            </Reveal>
          </div>
        </section>
      )}

      {/* Image moment */}
      {lead && (
        <section className="pb-16 md:pb-24">
          <Reveal as="figure" y={32}>
            <div className="group relative aspect-[4/3] md:aspect-[21/9] w-full overflow-hidden bg-ink-raised">
              <Image
                src={lead.src}
                alt={lead.alt}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </div>
            <figcaption className="container-x numeral text-mist mt-4">{lead.caption}</figcaption>
          </Reveal>
          {pair.length > 0 && (
            <div className="container-x mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {pair.map((img, i) => (
                <Reveal as="figure" key={img.src} delay={i * 0.08}>
                  <div className="group relative aspect-[4/3] w-full overflow-hidden bg-ink-raised">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="numeral text-mist mt-4">{img.caption}</figcaption>
                </Reveal>
              ))}
            </div>
          )}
        </section>
      )}

      {/* 02 Related work (daloy: built tools) */}
      {isDaloy && <DaloyProjects />}
      {!isDaloy && related.length > 0 && (
        <section className="section-y-sm pb-24 md:pb-32">
          <div className="container-x">
            <SectionHeader
              label="Selected work"
              title={
                <>
                  Selected <em>work</em>
                </>
              }
              aside={
                <Link href="/portfolio" className="text-ivory underline underline-offset-4 decoration-brass hover:text-brass-soft">
                  See the full portfolio
                </Link>
              }
            />
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14">
              {related.map((p, i) => {
                const meta = [p.client, String(p.year)].filter(Boolean).join(" · ");
                const body = (
                  <>
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-raised">
                      <Image
                        src={p.cover}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover/card:scale-[1.04]"
                      />
                    </div>
                    <div className="mt-5 flex items-baseline gap-4">
                      <span className="numeral text-brass">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="headline-md text-ivory">{p.title}</h3>
                    </div>
                    <p className="numeral text-mist mt-3 pl-8">{meta}</p>
                    {p.caseStudy && <p className="label-sm text-brass mt-4 pl-8">Case study →</p>}
                  </>
                );
                return (
                  <Reveal as="li" key={p.slug} delay={i * 0.08}>
                    {p.caseStudy ? (
                      <Link href={`/portfolio/${p.slug}`} className="group/card block">
                        {body}
                      </Link>
                    ) : (
                      <div className="group/card">{body}</div>
                    )}
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      <DivisionCrossLinks currentSlug={division.slug} />

      <CTABanner headline={division.ctaHeadline} ctaLabel="Book a Discovery Call" ctaHref="/contact" />
    </div>
  );
}
