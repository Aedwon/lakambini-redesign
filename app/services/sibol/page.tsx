import type { Metadata } from "next";
import DivisionHero from "@/components/sections/DivisionHero";
import DivisionCrossLinks from "@/components/sections/DivisionCrossLinks";
import CTABanner from "@/components/sections/CTABanner";
import { getDivisionBySlug } from "@/lib/divisions";
import { notFound } from "next/navigation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "SIBOL — Learning & Development",
  description:
    "Corporate workshops, team-building programs, trainings, and conferences. Practical sessions your teams will actually use.",
  openGraph: {
    title: "SIBOL | Lakambini Events",
    description:
      "Corporate workshops, team-building programs, trainings, and conferences. Practical sessions your teams will actually use.",
    url: "/services/sibol",
  },
};

export default function SibolPage() {
  const division = getDivisionBySlug("sibol");
  if (!division) return notFound();

  return (
    <div className="bg-surface text-on-surface">
      <DivisionHero division={division} />

      {/* Deep-Dive 1: Leadership Development Programs */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
          <h2 className="headline-lg text-on-surface mb-6">Leadership Development Programs</h2>
          <p className="body-lg text-on-surface-variant font-light leading-relaxed max-w-3xl mx-auto mb-16">
            Structured programs designed to sharpen leadership skills at the executive and management level. We design curriculum around your organization&apos;s specific challenges — not generic frameworks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Strategic Leadership */}
            <div className="bg-surface-container-low p-10 flex flex-col hover:bg-surface-container transition-colors duration-300">
              <h3 className="headline-md text-on-surface mb-4">Strategic Leadership</h3>
              <p className="body-md text-on-surface-variant font-light">
                A focused intensive for senior leaders covering decision-making, organizational design, and long-term planning. Practical tools, not theory.
              </p>
            </div>
            
            {/* Communication & Presence */}
            <div className="bg-surface-container-low p-10 flex flex-col hover:bg-surface-container transition-colors duration-300 ">
              <h3 className="headline-md text-on-surface mb-4">Communication & Presence</h3>
              <p className="body-md text-on-surface-variant font-light">
                Workshops on editorial-quality communication — how to write, present, and lead conversations that move people and drive alignment.
              </p>
            </div>
            
            {/* Culture Building */}
            <div className="bg-surface-container-low p-10 flex flex-col hover:bg-surface-container transition-colors duration-300 ">
              <h3 className="headline-md text-on-surface mb-4">Culture Building</h3>
              <p className="body-md text-on-surface-variant font-light">
                Frameworks for designing team cultures people want to stay in. Systems that encourage autonomy without losing alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive 2: Interactive Workshops (4-Card Grid) */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <h2 className="headline-lg text-on-surface">Interactive Workshops</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Mental Agility", desc: "Techniques for rapid decision-making and adaptive thinking in fast-changing environments." },
              { title: "Emotional Intelligence", desc: "Deep-dive sessions into empathy, conflict resolution, and constructive dialogue within teams." },
              { title: "Innovation Sprints", desc: "Design thinking applied to internal challenges. Teams prototype solutions and present outcomes." },
              { title: "Feedback Frameworks", desc: "How to give and receive feedback that strengthens — not drains — your team's energy and trust." }
            ].map((workshop) => (
              <div key={workshop.title} className="bg-surface p-8 flex flex-col">
                <h3 className="headline-sm text-on-surface mb-3 relative z-10">{workshop.title}</h3>
                <p className="body-sm text-on-surface-variant font-light relative z-10">{workshop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Feature: Team Building Programs */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden editorial-shadow group">
            <Image 
              src="/images/events/team-building-ball.jpg"
              alt="Team-building game run by the Lakambini crew"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="sticky top-32">
            <span className="label-sm text-primary tracking-[0.2em] uppercase block mb-4">Beyond the Boardroom</span>
            <h2 className="headline-lg text-on-surface mb-6">Team Building Programs</h2>
            <p className="body-lg text-on-surface-variant font-light leading-relaxed mb-10">
              Team building that works. We design offsite programs and structured activities that genuinely strengthen team dynamics — not trust falls and icebreakers.
            </p>
            
            <ul className="space-y-8">
              <li className="pl-6">
                <h4 className="headline-sm text-on-surface mb-2">Outdoor Experiences</h4>
                <p className="body-md text-on-surface-variant font-light">Challenge-based offsite programs in natural settings, designed for problem-solving and coordination</p>
              </li>
              <li className="pl-6">
                <h4 className="headline-sm text-on-surface mb-2">Collaborative Workshops</h4>
                <p className="body-md text-on-surface-variant font-light">Hands-on creative sessions (building, designing, cooking) that require real teamwork under real constraints</p>
              </li>
              <li className="pl-6">
                <h4 className="headline-sm text-on-surface mb-2">Wellness Integration</h4>
                <p className="body-md text-on-surface-variant font-light">Programs that combine physical activity with team bonding and stress management</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Deep-Dive 3: Conferences & Corporate Trainings */}
      <section className="py-24 md:py-32 bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 relative">
          
          <div className="flex flex-col">
            <div className="relative aspect-video w-full mb-8 rounded-sm overflow-hidden">
               {/* TODO(client): no real photo yet — needs real conference photo (no conference in library yet) */}
               <Image 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop"
                alt="Executive Conferences"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <h2 className="headline-lg text-on-surface mb-6">Executive Conferences</h2>
            <p className="body-lg text-on-surface-variant font-light leading-relaxed mb-8">
              End-to-end conference production — speaker coordination, venue management, technical setup, printed materials, and day-of logistics. We handle the operations so your content can shine.
            </p>
            <ul className="space-y-3 pl-4">
              {["Guest logistics & coordination", "Speaker and panel management", "Venue sourcing", "Post-event reporting"].map(item => (
                <li key={item} className="body-md text-on-surface-variant font-light">{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col md:pt-24">
            <h2 className="headline-lg text-on-surface mb-6">Corporate Trainings</h2>
            <p className="body-lg text-on-surface-variant font-light leading-relaxed mb-8">
              Structured training programs across key business domains. We work with your internal teams to design, schedule, and deliver sessions that align with your organizational goals.
            </p>
            <div className="bg-surface-container p-8">
              <h4 className="label-sm uppercase tracking-widest text-primary mb-6">Training Modules</h4>
              <ul className="grid grid-cols-1 gap-4">
                {["Diversity, Equity & Inclusion", "Operational Efficiency", "Crisis Management", "Organizational Design"].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                       <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="body-md text-on-surface">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      <DivisionCrossLinks currentSlug={division.slug} />

      <CTABanner 
        headline={division.ctaHeadline} 
        ctaLabel="Book a Discovery Call" 
        ctaHref="/contact" 
      />
    </div>
  );
}
