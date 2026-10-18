import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function EditorialGallery() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-24 md:py-32 w-full flex flex-col gap-12 md:gap-16">
      <SectionHeading
        overline="Our Work"
        title="Moments That Define Us"
        description="A look at recent builds and activations — from mall booths to championship stages."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
        {/* Main image */}
        <div className="md:col-span-8 h-[500px] md:h-full bg-surface-container relative group overflow-hidden">
          <Image
            src="/images/events/mlbb-naruto-ramen-stall.jpg"
            alt="Fabricated ramen stall built for the MLBB x Naruto activation"
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-surface via-surface/60 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 max-w-sm">
            <h3 className="headline-sm mb-4 text-on-surface">Precision in every detail.</h3>
            <p className="body-md leading-relaxed text-on-surface">
              Every detail is an opportunity to get it right. Great events are built on the reliability of the team executing them.
            </p>
          </div>
        </div>

        {/* Right stack */}
        <div className="md:col-span-4 flex flex-col gap-6 h-auto md:h-full">
          <div className="h-[300px] md:h-1/2 w-full bg-surface-container relative overflow-hidden group">
            <Image
              src="/images/events/m6-watchfest-screen.jpg"
              alt="Fans watching the M6 World Championship at a mall watch party"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
          <div className="h-[300px] md:h-1/2 w-full relative overflow-hidden group flex items-center justify-center p-12 text-center text-on-surface">
            <Image
              src="/images/events/team-building-facilitator.jpg"
              alt="Lakambini facilitator leading a team-building session"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover opacity-40 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-surface/50 z-0"></div>
            <div className="relative z-10">
              <span className="display-lg text-on-surface mb-2 block font-bold tracking-tighter">One Team</span>
              <span className="label-sm text-primary">Brief to Strike</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
