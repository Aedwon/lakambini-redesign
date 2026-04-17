import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle: string;
  backgroundImage?: string;
};

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative w-full py-20 md:py-32 flex items-center justify-center bg-surface overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image 
            src={backgroundImage} 
            alt="Hero Background" 
            fill 
            className="object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent"></div>
        </div>
      )}
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-6 mt-16">
        <h1 className="display-md text-on-surface tracking-tight max-w-4xl">
          {title}
        </h1>
        <p className="body-lg text-on-surface-variant max-w-2xl font-light">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
