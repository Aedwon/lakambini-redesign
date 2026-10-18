import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="bg-surface py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        {/* Left Column - Image */}
        <div className="md:col-span-5 relative w-full aspect-[3/4]">
          <Image 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
            alt="Lakambini Events team"
            fill
            className="object-cover relative z-10 grayscale-[30%]"
          />
        </div>

        {/* Right Column - Text */}
        <div className="md:col-span-7 flex flex-col gap-10 md:pl-16 lg:pl-24 justify-center">
          <SectionHeading 
            overline="Our Story"
            title="One team behind every part of your event."
          />
          <p className="body-lg text-on-surface-variant font-light max-w-xl">
            Based in Cavite, Lakambini Events is a full-service creative agency with nine specialized divisions, covering everything from stage design to digital engagement. Strategy, creative, production, and execution sit under one roof, so hosts can focus on their guests.
          </p>
          <div className="pt-4">
            <Button variant="tertiary" href="/about">
              Discover Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
