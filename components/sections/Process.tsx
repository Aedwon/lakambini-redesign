import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import StepIllustration, { IllustrationName } from "@/components/ui/StepIllustration";

const steps = [
  {
    num: "01",
    title: "Discovery",
    art: "discovery" as IllustrationName,
    desc: "We start by listening: your goals, audience and vision.",
  },
  {
    num: "02",
    title: "Concept & Strategy",
    art: "concept" as IllustrationName,
    desc: "We draft the concept, timeline and production plan. You approve the direction before anything moves.",
  },
  {
    num: "03",
    title: "Production & Execution",
    art: "production" as IllustrationName,
    desc: "The divisions, from stage design to multimedia, build your event as one unit.",
  },
  {
    num: "04",
    title: "Delivery & Results",
    art: "delivery" as IllustrationName,
    desc: "We run the day, then send post-event reporting so you can measure impact.",
  },
];

// Asymmetric padding with equal totals keeps every column (and its plate) the same width
const PAD = [
  "md:pr-12 lg:pr-12",
  "md:pl-12 md:border-l lg:px-6",
  "md:pr-12 lg:px-6 lg:border-l",
  "md:pl-12 md:border-l lg:pl-12",
];

export default function Process() {
  return (
    <section className="section-y bg-ink">
      <div className="container-x">
        <SectionHeader
          label="How we work"
          title={
            <>
              From first call to <em>final</em> bow.
            </>
          }
        />

        <ol className="grid grid-cols-1 border-t hairline md:grid-cols-2 lg:grid-cols-4 lg:border-t-0">
          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.num}
              delay={i * 0.08}
              className={`flex flex-col gap-8 border-b hairline py-10 md:py-12 lg:border-b-0 lg:border-t ${PAD[i]}`}
            >
              <StepIllustration name={step.art} />
              <span className="display-md text-brass">{step.num}</span>
              <div className="flex flex-col gap-3">
                <h3 className="title-lg text-ivory">{step.title}</h3>
                <p className="body-sm text-mist max-w-[40ch]">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
