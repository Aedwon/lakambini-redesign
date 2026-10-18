import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Tell us what you're planning. We'll figure out the best way to make it happen. Based in Cavite, delivering nationwide.",
  openGraph: {
    title: "Contact | Lakambini Events",
    description:
      "Tell us what you're planning. We'll figure out the best way to make it happen. Based in Cavite, delivering nationwide.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
      <div className="flex flex-col w-full bg-surface">
        <PageHero 
          overline="Contact"
          title="Get in Touch"
          subtitle="Tell us what you're planning. We'll figure out the best way to make it happen."
        />
        
        <ContactForm />

        {/* What happens next */}
        <section className="bg-surface py-24 md:py-32 w-full">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="mb-12 md:mb-16">
              <SectionHeading overline="Process" title="What Happens Next" />
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                // TODO(client): confirm response time
                { n: "01", title: "We reply within 2 business days", desc: "A real person reads your inquiry and writes back with questions or next steps." },
                { n: "02", title: "Discovery call", desc: "We talk through your goals, audience, venue, and timeline." },
                { n: "03", title: "Proposal", desc: "You get a clear scope and plan to review before anything is locked in." },
              ].map((step) => (
                <li key={step.n} className="bg-surface-container-low p-8 md:p-10 flex flex-col gap-4">
                  <span className="headline-sm text-primary">{step.n}</span>
                  <h3 className="headline-sm text-on-surface">{step.title}</h3>
                  <p className="body-md text-on-surface-variant max-w-[65ch]">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-surface-container-low py-24 md:py-32 w-full">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-start">
            <SectionHeading
              overline="Office"
              title="Where to Find Us"
              description="Based in Cavite, delivering nationwide."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-2">
              <div className="flex flex-col gap-3">
                <span className="label-sm text-on-surface-variant font-medium tracking-widest uppercase">General Inquiries</span>
                <p className="title-md">
                  <a href="mailto:admin@lakambinievents.com" className="text-primary hover:text-on-surface transition-colors rounded-sm break-all focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4">admin@lakambinievents.com</a>
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <span className="label-sm text-on-surface-variant font-medium tracking-widest uppercase">Phone</span>
                <p className="title-md">
                  <a href="tel:+639958759410" className="text-on-surface hover:text-primary transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4">+63 995 875 9410</a>
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:col-span-2">
                <span className="label-sm text-on-surface-variant font-medium tracking-widest uppercase">Address</span>
                <address className="not-italic bg-surface-container p-6 md:p-8 body-lg text-on-surface max-w-md">
                  Brookeside Lane, San Francisco,<br />
                  General Trias City, Cavite,<br />
                  Philippines
                </address>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
