export default function CompanyStory() {
  return (
    <section className="bg-surface-container-low py-24 md:py-32 w-full">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-x-16 items-start">

          {/* Headline Column */}
          <div className="md:col-span-6">
            <h2 className="headline-lg text-on-surface leading-[1.2] tracking-tight">
              A full-service events and creative production agency, built by people who have done this for over a decade.
            </h2>
          </div>

          {/* Narrative Column */}
          <div className="md:col-span-6 flex flex-col gap-8">
            <div className="space-y-6 text-on-surface-variant body-lg leading-relaxed font-light max-w-[65ch]">
              <p>
                Lakambini Creative Solutions, operating as Lakambini Events Agency, was established in January 2024 by a team of seasoned professionals, each with over a decade of experience.
              </p>
              <p>
                We specialize in corporate conferences, brand activations, large-scale productions, esports, gaming events, and integrated marketing support. Our in-house technical team, creatives, project managers, photo and video production, merchandising and fabrication let us deliver end-to-end solutions, from concept development to seamless on-ground execution.
              </p>
              <p>
                Based in Cavite, we work nationwide. Much of our work is youth, gaming, and community events, from MLBB championships to school caravans.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
