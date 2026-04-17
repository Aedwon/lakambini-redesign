interface PageHeroProps {
  overline: string;
  title: React.ReactNode;
  subtitle?: string;
}

export default function PageHero({ overline, title, subtitle }: PageHeroProps) {
  return (
    <section className="w-full hero-gradient relative overflow-hidden">
      {/* Marble Texture Overlay */}
      <div className="absolute inset-0 marble-texture pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-[1440px] mx-auto px-12 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl">
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
