import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function EditorialGallery() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-32 w-full flex flex-col gap-16">
      
      {/* Section Header */}
      <SectionHeading 
        overline="Our Work"
        title="Moments That Define Us"
        description="A visual journey through a decade of production, from grand ballrooms to immersive brand worlds."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
        
        {/* Left Side (8 cols) - Main Image with glass overlay */}
        <div className="md:col-span-8 h-[500px] md:h-full bg-surface-container relative group overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80" 
            alt="Decade of Excellence" 
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 max-w-sm glassmorphism p-6 md:p-8 border border-outline-variant/10 ambient-shadow">
            <h4 className="headline-sm mb-4 text-primary">Precision in every detail.</h4>
            <p className="body-md font-light leading-relaxed text-on-surface-variant">
              Every detail is an opportunity to get it right. We believe that great events are built on the reliability of the team executing them.
            </p>
          </div>
        </div>
        
        {/* Right Side (4 cols) - Split vertical stack */}
        <div className="md:col-span-4 flex flex-col gap-6 h-auto md:h-full">
          <div className="h-[300px] md:h-1/2 w-full bg-surface-container-lowest relative overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80" 
              alt="Event Detail" 
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover opacity-60 transition-transform duration-1000 ease-out group-hover:scale-110"
            />
          </div>
          <div className="h-[300px] md:h-1/2 w-full relative overflow-hidden group border border-primary/10 flex items-center justify-center p-12 text-center text-on-surface">
            <Image 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" 
              alt="Team at work" 
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover opacity-20 transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-surface/80 group-hover:bg-surface/60 transition-colors duration-1000 z-0"></div>
            <div className="relative z-10">
              <span className="display-lg text-primary mb-2 block font-extrabold tracking-tighter drop-shadow-lg">12+</span>
              <span className="label-sm text-on-surface drop-shadow-md">Years of Heritage</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
