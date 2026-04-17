import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero 
        title="Command Your Next Asset" 
        subtitle="Our architectural engineers and creative directors are awaiting your briefing."
        backgroundImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80"
      />
      
      <ContactForm />

      <section className="bg-surface py-20 md:py-32 px-6 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start">
          <SectionHeading 
            overline="Headquarters"
            title="Direct Comms"
            description="Established and executing from the heart of the capital region."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-2">
            <div className="flex flex-col gap-3">
              <span className="label-sm text-on-surface-variant font-medium tracking-widest uppercase">General Inquiries</span>
              <p className="title-md text-primary hover:text-primary-container transition-colors cursor-pointer">hello@lakambini.com</p>
            </div>
            
            <div className="flex flex-col gap-3">
              <span className="label-sm text-on-surface-variant font-medium tracking-widest uppercase">Secure Line</span>
              <p className="title-md text-on-surface">+63 (2) 8123 4567</p>
            </div>
            
            <div className="flex flex-col gap-3 sm:col-span-2">
              <span className="label-sm text-on-surface-variant font-medium tracking-widest uppercase">Global Coordinates</span>
              <p className="body-lg text-on-surface max-w-xs font-light">
                Bonifacio Global City, Taguig,<br />
                Metro Manila, Philippines 1634
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
