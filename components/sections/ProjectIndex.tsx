import { moreProjects } from "@/lib/portfolioData";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

export default function ProjectIndex() {
  return (
    <section className="section-y bg-ink-raised">
      <div className="container-x">
        <SectionHeader index="02" label="Index" title={<>And <em>more</em>.</>} />

        <ul className="border-t hairline">
          {moreProjects.map((p, i) => (
            <Reveal as="li" key={p.title} delay={Math.min(i, 6) * 0.04} className="border-b hairline">
              <div className="grid grid-cols-[2.25rem_1fr] items-baseline gap-x-4 gap-y-1 py-5 md:grid-cols-[3.5rem_minmax(0,5fr)_minmax(0,2.5fr)_4rem_minmax(0,4fr)] md:gap-x-8 md:py-6">
                <span className="numeral text-brass">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="title-md text-ivory">{p.title}</h3>
                <p className="body-sm col-start-2 text-mist md:col-start-auto md:text-[15px]">
                  {p.client ?? ""}
                  {p.year && <span className="numeral ml-3 md:hidden">{p.year}</span>}
                </p>
                <span className="numeral hidden text-mist md:block">{p.year ?? ""}</span>
                <p className="body-sm hidden text-mist md:block">{p.scope ?? ""}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
