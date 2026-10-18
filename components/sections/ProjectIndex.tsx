import { moreProjects } from "@/lib/portfolioData";

export default function ProjectIndex() {
  return (
    <section className="bg-surface-container-low py-24 md:py-32 w-full">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-16 flex flex-col gap-4">
          <span className="label-sm text-primary tracking-widest uppercase">Index</span>
          <h2 className="display-sm text-on-surface">More projects</h2>
        </div>

        <ul className="columns-1 md:columns-2 xl:columns-3 gap-x-16 md:gap-x-20">
          {moreProjects.map((p) => {
            const meta = [p.client, p.year, p.scope].filter(Boolean).join(" · ");
            return (
              <li key={p.title} className="break-inside-avoid py-5 md:py-6">
                <h3 className="title-lg font-headline text-on-surface">{p.title}</h3>
                {meta && <p className="label-sm text-on-surface-variant mt-2 normal-case tracking-normal">{meta}</p>}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
