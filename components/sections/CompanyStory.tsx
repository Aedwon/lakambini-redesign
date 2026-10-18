import Reveal from "@/components/ui/Reveal";

export default function CompanyStory() {
  return (
    <section className="w-full bg-ink section-y">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Sticky statement */}
        <div className="lg:col-span-6">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <div className="flex items-center gap-4 text-mist">
                <span className="numeral text-brass">01</span>
                <span aria-hidden="true" className="h-px w-10 bg-line" />
                <span className="eyebrow">Who we are</span>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="display-sm text-ivory text-balance mt-8 max-w-[22ch]">
                Built by people who have done
                this for <em className="italic text-brass">over a decade.</em>
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Narrative */}
        <div className="lg:col-span-6 lg:pt-14 flex flex-col gap-7 body-lg text-mist max-w-[60ch]">
          <Reveal>
            <p>
              Lakambini Creative Solutions, operating as Lakambini Events Agency, was established in
              January 2024 by a team of seasoned professionals, each with over a decade of experience.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p>
              We specialize in corporate conferences, brand activations, large-scale productions,
              esports, gaming events and integrated marketing, with technical, creative, project
              management, photo and video, merchandising and fabrication teams in-house.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p>
              Based in Cavite, we work nationwide. Much of our work is youth, gaming and community
              events.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
