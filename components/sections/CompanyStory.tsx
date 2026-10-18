export default function CompanyStory() {
  return (
    <section className="bg-surface-container-low py-24 md:py-32 w-full">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-x-16 items-start">

          {/* Headline Column */}
          <div className="md:col-span-6">
            <h2 className="headline-lg text-on-surface leading-[1.2] tracking-tight">
              Built on the belief that the best events happen when the client can focus on what matters.
            </h2>
          </div>

          {/* Narrative Column */}
          <div className="md:col-span-6 flex flex-col gap-8">
            <div className="space-y-6 text-on-surface-variant body-lg leading-relaxed font-light">
              <p>
                Based in Cavite, Lakambini began with a singular focus: to solve the coordination headaches that come with running big productions. We saw hosts juggling an army of vendors while losing the ability to be present at their own events.
              </p>
              <p>
                Today, we operate as a full-service creative agency with nine specialized divisions covering every facet of event production—from stage design to digital engagement. Our model provides the agility of a lean operation backed by a deep network of specialists.
              </p>
              <p>
                Most of our work today is youth, gaming, and community events — from MLBB championships to school caravans. Whatever the format, we keep one standard: precision and reliability.
              </p>
            </div>

            {/* Moonton Note */}
            <div className="pt-4">
              <p className="label-sm text-primary uppercase tracking-widest mb-2 font-medium">Partnerships</p>
              <p className="body-md text-on-surface font-light">
                Trusted by brands like <span className="font-medium text-primary">Moonton</span>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
