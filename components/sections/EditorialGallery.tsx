import Image from "next/image";

export default function EditorialGallery() {
  return (
    <section className="max-w-[1440px] mx-auto px-12 mb-32 w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]">
        
        {/* Left Side (8 cols) - Main Image with glass overlay */}
        <div className="md:col-span-8 h-full bg-surface-container relative group overflow-hidden">
          <Image 
            src="/images/placeholder-about-1.jpg" 
            alt="Decade of Excellence" 
            layout="fill" 
            objectFit="cover" 
            className="transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute bottom-12 left-12 max-w-sm bg-[#11231C]/60 backdrop-blur-[20px] p-8 border border-outline-variant/10 shadow-[0_20px_50px_rgba(4,21,15,0.4)] rounded-none">
            <h4 className="font-headline text-3xl mb-4 text-primary">A Decade of Results</h4>
            <p className="text-sm font-light leading-relaxed text-on-surface-variant">
              Over 500 executions globally. Each one a unique testament to the Lakambini standard of reliability and creative excellence.
            </p>
          </div>
        </div>
        
        {/* Right Side (4 cols) - Split vertical stack */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="h-1/2 w-full bg-surface-container-lowest relative overflow-hidden group">
            <Image 
              src="/images/placeholder-about-2.jpg" 
              alt="Luxury Detail" 
              layout="fill" 
              objectFit="cover" 
              className="opacity-60 transition-transform duration-1000 ease-out group-hover:scale-110"
            />
          </div>
          <div className="h-1/2 w-full bg-primary/5 border border-primary/10 flex items-center justify-center p-12 text-center">
            <div>
              <span className="font-headline text-7xl md:text-8xl text-primary mb-2 block font-extrabold tracking-tighter">10+</span>
              <span className="font-label tracking-[0.2em] uppercase text-xs text-on-surface">Years of Experience</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
