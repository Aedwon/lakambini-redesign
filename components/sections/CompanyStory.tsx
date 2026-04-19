export default function CompanyStory() {
  return (
    <section className="bg-surface-container-low py-32 w-full">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-32 items-start">

          {/* Headline Column */}
          <div className="md:col-span-6">
            <h2 className="headline-lg text-on-surface leading-[1.2] tracking-tight">
              Built on the belief that the best events happen when the client can <span className="text-primary italic">focus on what matters.</span>
            </h2>
          </div>

          {/* Narrative Column */}
          <div className="md:col-span-6 flex flex-col gap-8">
            <div className="space-y-6 text-on-surface-variant body-lg leading-relaxed font-light">
              <p>
                Based in Cavite, Lakambini began with a singular focus: to solve the complex coordination challenges that plague high-stakes productions. We saw hosts juggling an army of vendors while losing the ability to be present at their own events.
              </p>
              <p>
                Today, we operate as a full-service creative agency with nine specialized divisions covering every facet of event production—from stage design to digital engagement. Our model provides the agility of a lean operation backed by a deep network of specialists.
              </p>
              <p>
                Whether it is a corporate summit, a nationwide brand activation, or an intimate private celebration, we maintain one standard: precision and reliability. It is our team that ensures every event is not just delivered, but remembered.
              </p>
            </div>

            {/* Moonton Note */}
            <div className="pt-8 border-t border-outline-variant/10">
              <p className="label-sm text-primary uppercase tracking-widest mb-2 font-medium">Partnerships</p>
              <p className="body-md text-on-surface font-light">
                Trusted by industry leaders like <span className="font-medium text-primary">Moonton</span> for multi-year event production and strategic partnerships.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
