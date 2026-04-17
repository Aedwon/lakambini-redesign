interface PageHeroProps {
  overline: string;
  title: React.ReactNode;
  subtitle?: string;
}

export default function PageHero({ overline, title, subtitle }: PageHeroProps) {
  return (
    <section className="px-12 mb-24 max-w-[1440px] mx-auto pt-32 w-full">
      <div className="max-w-4xl">
        <span className="font-label text-primary tracking-[0.3em] uppercase text-sm mb-6 block">
          {overline}
        </span>
        <h1 className="font-headline text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-on-surface leading-[1.0] lg:leading-[0.9] mb-10">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
