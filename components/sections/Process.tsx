import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We start by listening: your goals, audience and vision.",
  },
  {
    num: "02",
    title: "Concept & Strategy",
    desc: "We draft the concept, timeline and production plan. You approve the direction before anything moves.",
  },
  {
    num: "03",
    title: "Production & Execution",
    desc: "The divisions, from stage design to multimedia, build your event as one unit.",
  },
  {
    num: "04",
    title: "Delivery & Results",
    desc: "We run the day, then send post-event reporting so you can measure impact.",
  },
];

export default function Process() {
  return (
    <section className="section-y bg-ink">
      <div className="container-x">
        <SectionHeader
          index="04"
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
              className={`flex flex-col gap-8 border-b hairline py-10 md:py-12 lg:border-b-0 lg:border-t lg:py-12 ${
                i > 0 ? "lg:border-l lg:pl-8 xl:pl-10" : ""
              } ${i < steps.length - 1 ? "lg:pr-8 xl:pr-10" : ""} ${
                i % 2 === 1 ? "md:border-l md:pl-8 lg:pl-8" : "md:pr-8"
              }`}
            >
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
