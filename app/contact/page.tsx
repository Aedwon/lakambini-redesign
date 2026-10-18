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

        <section className="bg-surface py-20 md:py-32 w-full">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start">
            <SectionHeading 
              overline="Office"
              title="Where to Find Us"
              description="Based in Cavite, delivering nationwide."
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-2">
              <div className="flex flex-col gap-3">
                <span className="label-sm text-on-surface-variant font-medium tracking-widest uppercase">General Inquiries</span>
                <p className="title-md">
                  <a href="mailto:hello@lakambini.com" className="text-primary hover:text-primary-container transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface">hello@lakambini.com</a>
                </p>
              </div>
              
              <div className="flex flex-col gap-3">
                <span className="label-sm text-on-surface-variant font-medium tracking-widest uppercase">Phone</span>
                {/* TODO: confirm phone number */}
                <p className="title-md">
                  <a href="tel:+63281234567" className="text-on-surface hover:text-primary transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface">+63 (2) 8123 4567</a>
                </p>
              </div>
              
              <div className="flex flex-col gap-3 sm:col-span-2">
                <span className="label-sm text-on-surface-variant font-medium tracking-widest uppercase">Address</span>
                <p className="body-lg text-on-surface max-w-xs font-light">
                  General Trias, Cavite,<br />
                  Philippines
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
