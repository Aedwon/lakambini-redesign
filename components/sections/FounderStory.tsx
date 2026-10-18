import Image from "next/image";

export default function FounderStory() {
  return (
    <section className="bg-surface py-24 md:py-32 w-full">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center">
          
          {/* Portrait Column */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="relative aspect-[4/5] overflow-hidden">
              {/* TODO: replace with real portrait of Anchie Rosas */}
              <Image 
                src="/images/events/team-building-facilitator.jpg" 
                alt="Lakambini crew member facilitating a team-building event" 
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Text Column */}
          <div className="md:col-span-7 order-1 md:order-2 md:pl-12">
            <h2 className="display-sm text-on-surface mb-12 leading-tight tracking-tight">
              The Vision of <br />
              Anchie Rosas
            </h2>
            <div className="space-y-8 font-light text-on-surface-variant body-lg leading-loose">
              <p>
                As the Founder, CEO, and Creative Director of Lakambini, Anchie Rosas brings over 10 years of experience in top corporate environments to the world of event production. Her deep understanding of complex systems and strategic management defines how we approach every project.
              </p>
              
              {/* Company principle (not a personal quote) */}
              <div className="bg-surface-container-low p-6 md:p-8">
                <p className="label-sm text-primary uppercase tracking-widest mb-3">What We Believe</p>
                <p className="italic text-on-surface text-xl md:text-2xl leading-relaxed">
                  The LAKAMBINI client is someone who values their guests&apos; experience as much as their own peace of mind. We exist to be the team that ensures every event is managed with precision and reliability.
                </p>
              </div>

              <p>
                Whether managing multinational corporate summits or intimate high-end celebrations, her approach remains defined by a strategic mindset and an uncompromising passion for exceeding expectations. Under her creative direction, we don&apos;t just deliver events — we deliver them with precision and care.
              </p>
              
              <div className="pt-8">
                                <span className="title-lg text-primary uppercase tracking-widest font-medium">CEO &amp; Creative Director</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
