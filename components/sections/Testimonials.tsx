const testimonials = [
  {
    quote:
      "Lakambini took our rough concept and turned it into a fully produced 3-day event. We didn't have to worry about a single detail.",
    name: "Maria Santos",
    role: "Marketing Director",
    company: "Alorica PH",
  },
  {
    quote:
      "Their team handled everything — stage design, talent, live streaming. It felt like working with one company, not ten.",
    name: "James Reyes",
    role: "Brand Manager",
    company: "Moonton",
  },
  {
    quote:
      "We've worked with a lot of agencies. Lakambini is the only one that delivers consistently, event after event.",
    name: "Ana Cruz",
    role: "Events Lead",
    company: "OPPO",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-surface py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <span className="label-sm text-primary uppercase tracking-widest">
            What Our Clients Say
          </span>
          <h2 className="headline-lg text-on-surface leading-[1.2]">
            Trusted by brands who <span className="text-primary italic">demand results.</span>
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface-container-high p-8 md:p-10 flex flex-col justify-between gap-8 group hover:bg-surface-container-highest transition-colors duration-500"
            >
              {/* Quote */}
              <div className="flex flex-col gap-6">
                {/* Decorative quote mark */}
                <span className="display-lg text-primary/15 font-bold leading-none select-none">
                  &ldquo;
                </span>
                <p className="body-lg text-on-surface font-light leading-relaxed -mt-8">
                  {t.quote}
                </p>
              </div>

              {/* Attribution */}
              <div className="flex flex-col gap-1 pt-6 border-t border-outline-variant/10">
                <span className="title-md text-on-surface font-medium">
                  {t.name}
                </span>
                <span className="label-sm text-primary uppercase tracking-widest">
                  {t.role} · {t.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
