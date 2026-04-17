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
            overline="Our Legacy"
            title="Defining the structural elegance of modern events."
          />
          <p className="body-lg text-on-surface-variant font-light max-w-xl">
            Established on the core of Filipino heritage, Lakambini Events fuses modern architectural logic with pristine execution. Every campaign, every broadcast, and every live experience is treated with the meticulous care of a master craftsman shaping gold.
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
