import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Tell us what you're planning. Based in Cavite, working nationwide.",
  openGraph: {
    title: "Contact | Lakambini Events",
    description:
      "Tell us what you're planning. Based in Cavite, working nationwide.",
    url: "/contact",
  },
};

const steps = [
  { n: "01", title: "We read your brief", desc: "A real person reads your inquiry and replies by email." },
  { n: "02", title: "Discovery call", desc: "We go through your goals, audience, venue and timeline." },
  { n: "03", title: "Proposal", desc: "A clear scope and plan to review before anything is locked in." },
];

const focusLink =
  "transition-colors duration-300 hover:text-brass";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-ink">
      <section className="w-full bg-ink pt-40 md:pt-52 pb-24 md:pb-32">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left: intro + details */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <Reveal>
              <p className="eyebrow text-mist">
                <span className="text-brass">·</span>&nbsp; Contact
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="display-lg text-ivory text-balance">
                Tell us what you&apos;re <em className="italic text-brass">planning.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="body-lg text-mist max-w-[44ch]">
                We&apos;ll figure out the best way to make it happen.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <dl className="border-t hairline mt-4">
                <div className="py-6 border-b hairline flex flex-col gap-3">
                  <dt className="eyebrow text-mist">Email</dt>
                  <dd>
                    <a
                      href="mailto:admin@lakambinievents.com"
                      className={`headline-md text-ivory break-all ${focusLink}`}
                    >
                      admin@lakambinievents.com
                    </a>
                  </dd>
                </div>
                <div className="py-6 border-b hairline flex flex-col gap-3">
                  <dt className="eyebrow text-mist">Phone</dt>
                  <dd>
                    <a href="tel:+639958759410" className={`title-lg text-ivory ${focusLink}`}>
                      +63 995 875 9410
                    </a>
                  </dd>
                </div>
                <div className="py-6 border-b hairline flex flex-col gap-3">
                  <dt className="eyebrow text-mist">Studio</dt>
                  <dd>
                    <address className="not-italic body-lg text-ivory">
                      Brookeside Lane, San Francisco,
                      <br />
                      General Trias City, Cavite,
                      <br />
                      Philippines
                    </address>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7 lg:pt-6">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="w-full bg-ink-raised section-y">
        <div className="container-x">
          <SectionHeader
            index="01"
            label="What happens next"
            title={
              <>
                From brief to <em>proposal.</em>
              </>
            }
          />
          <ol className="grid grid-cols-1 md:grid-cols-3 border-t hairline">
            {steps.map((step, i) => (
              <Reveal
                as="li"
                key={step.n}
                delay={i * 0.08}
                className={`flex flex-col gap-6 py-10 md:py-12 border-b md:border-b-0 hairline ${
                  i > 0 ? "md:border-l md:pl-10" : ""
                } ${i < steps.length - 1 ? "md:pr-10" : ""}`}
              >
                <span className="numeral text-brass">{step.n}</span>
                <h3 className="headline-md text-ivory">{step.title}</h3>
                <p className="body-md text-mist max-w-[40ch]">{step.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
