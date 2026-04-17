import Image from "next/image";

export default function EditorialGallery() {
  return (
    <section className="max-w-[1440px] mx-auto px-12 mb-32 w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]">
        
        {/* Left Side (8 cols) - Main Image with glass overlay */}
        <div className="md:col-span-8 h-full bg-surface-container relative group overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80" 
            alt="Decade of Excellence" 
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute bottom-12 left-12 max-w-sm glassmorphism p-8 border border-outline-variant/10 ambient-shadow">
            <h4 className="headline-sm mb-4 text-primary">10 Years. 500+ Events.</h4>
            <p className="body-md font-light leading-relaxed text-on-surface-variant">
              From corporate summits to nationwide activations — every project delivered on brief, on time.
            </p>
          </div>
        </div>
        
        {/* Right Side (4 cols) - Split vertical stack */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="h-1/2 w-full bg-surface-container-lowest relative overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80" 
              alt="Event Detail" 
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover opacity-60 transition-transform duration-1000 ease-out group-hover:scale-110"
            />
          </div>
          <div className="h-1/2 w-full bg-primary/5 border border-primary/10 flex items-center justify-center p-12 text-center">
            <div>
              <span className="display-lg text-primary mb-2 block font-extrabold tracking-tighter">10+</span>
              <span className="label-sm text-on-surface">Years of Experience</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
