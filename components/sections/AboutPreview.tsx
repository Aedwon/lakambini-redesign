import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="bg-surface-container-low py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        {/* Left Column - Image */}
        <div className="md:col-span-6 relative w-full aspect-[3/2] overflow-hidden">
          <Image
            src="/images/events/lakambini-crew-onsite.jpg"
            alt="The Lakambini crew in branded shirts on site at an activation"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right Column - Text */}
        <div className="md:col-span-6 flex flex-col gap-10 justify-center">
          <SectionHeading
            overline="Our Story"
            title="One team behind every part of your event."
          />
          <p className="body-lg text-on-surface-variant max-w-[65ch]">
            Based in Cavite, Lakambini Events is a full-service creative agency with nine specialized divisions, covering everything from stage design to digital engagement. Strategy, creative, production, and execution sit under one roof, so hosts can focus on their guests.
          </p>
          <div>
            <Button variant="tertiary" href="/about">
              Discover Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
