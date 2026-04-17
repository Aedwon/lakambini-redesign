import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
import PageWrapper from "@/components/layout/PageWrapper";

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col w-full bg-surface">
        <PageHero 
          overline="Contact"
          title="Get in Touch"
          subtitle="Tell us what you're planning. We'll figure out the best way to make it happen."
        />
        
        <ContactForm />

        <section className="bg-surface py-20 md:py-32 w-full">
          <div className="max-w-[1440px] mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start">
            <SectionHeading 
              overline="Office"
              title="Where to Find Us"
              description="Based in Metro Manila, delivering nationwide."
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-2">
              <div className="flex flex-col gap-3">
                <span className="label-sm text-on-surface-variant font-medium tracking-widest uppercase">General Inquiries</span>
                <p className="title-md text-primary hover:text-primary-container transition-colors cursor-pointer">hello@lakambini.com</p>
              </div>
              
              <div className="flex flex-col gap-3">
                <span className="label-sm text-on-surface-variant font-medium tracking-widest uppercase">Phone</span>
                <p className="title-md text-on-surface">+63 (2) 8123 4567</p>
              </div>
              
              <div className="flex flex-col gap-3 sm:col-span-2">
                <span className="label-sm text-on-surface-variant font-medium tracking-widest uppercase">Address</span>
                <p className="body-lg text-on-surface max-w-xs font-light">
                  Bonifacio Global City, Taguig,<br />
                  Metro Manila, Philippines 1634
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
