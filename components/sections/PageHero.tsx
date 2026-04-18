interface PageHeroProps {
  overline: string;
  title: React.ReactNode;
  subtitle?: string;
  decorativeText?: string;
}

export default function PageHero({ overline, title, subtitle, decorativeText }: PageHeroProps) {
  return (
    <section className="w-full hero-gradient relative overflow-hidden">
      {/* Marble Texture Overlay */}
      <div className="absolute inset-0 marble-texture pointer-events-none mix-blend-overlay"></div>
      
      {/* Decorative Text Watermark */}
      {decorativeText && (
        <div 
          className="absolute right-0 sm:right-12 lg:right-24 top-1/2 -translate-y-1/2 font-headline font-bold text-primary opacity-[0.08] pointer-events-none select-none"
          style={{ fontSize: "clamp(12rem, 25vw, 25rem)", lineHeight: 1 }}
          aria-hidden="true"
        >
          {decorativeText}
        </div>
      )}
      
      <div className="max-w-[1440px] mx-auto px-12 pt-32 pb-20 relative z-10 w-full flex justify-between items-center">
        <div className="max-w-4xl relative z-10">
          <span className="label-sm text-primary tracking-[0.3em] uppercase mb-6 block">
            {overline}
          </span>
          <h1 className="display-lg text-on-surface font-extrabold tracking-tighter leading-[1.0] lg:leading-[0.9] mb-10">
            {title}
          </h1>
          {subtitle && (
            <p className="body-lg text-on-surface-variant font-light leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
