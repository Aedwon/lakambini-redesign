const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We learn about your goals, audience, and vision. Whether it's a product launch, concert, or company summit — we start by listening.",
  },
  {
    num: "02",
    title: "Concept & Strategy",
    desc: "Our creative team develops a tailored concept, timeline, and production plan. You approve the direction before anything moves forward.",
  },
  {
    num: "03",
    title: "Production & Execution",
    desc: "Our specialized divisions — from stage design to multimedia — work as one unit to build and deliver your event.",
  },
  {
    num: "04",
    title: "Delivery & Results",
    desc: "We execute on the day, handle every detail, and provide post-event reporting so you can measure impact.",
  },
];

export default function Process() {
  return (
    <section className="w-full bg-surface py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col gap-4 max-w-3xl mb-12 md:mb-16">
          <span className="label-sm text-primary uppercase tracking-widest">
            How We Work
          </span>
          <h2 className="headline-lg text-on-surface">
            From first call to final bow — here&apos;s the process.
          </h2>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step) => (
            <li
              key={step.num}
              className="bg-surface-container-low p-8 md:p-10 flex flex-col gap-6"
            >
              <span className="display-sm text-primary">{step.num}</span>
              <div className="flex flex-col gap-3">
                <h3 className="title-lg text-on-surface">{step.title}</h3>
                <p className="body-md text-on-surface-variant leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
