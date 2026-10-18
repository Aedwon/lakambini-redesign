import Image from "next/image";
import Link from "next/link";

export default function MissionStatement() {
  return (
    <section className="w-full bg-surface py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
        {/* Founder portrait */}
        <figure className="md:col-span-5 lg:col-span-4">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/anchie-rosas.jpg"
              alt="Anchie Rosas, Founder and CEO of Lakambini"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-4 label-sm text-on-surface-variant uppercase tracking-widest">
            Founded by Anchie Rosas
          </figcaption>
        </figure>

        {/* Mission */}
        <div className="md:col-span-7 lg:col-span-7 lg:col-start-6 flex flex-col gap-8">
          <span className="label-sm text-primary uppercase tracking-widest">Why we exist</span>
          <p className="headline-lg text-on-surface leading-snug">
            Lakambini exists to elevate women and women at heart in the creative, marketing, gaming, and events industry — and to give clients the full-service team that comes with that talent.
          </p>
          <p className="body-lg text-on-surface-variant max-w-[60ch]">
            <em>Lakambini</em> is Tagalog for a noble lady, or a muse. Established in January 2024 by professionals with over a decade of experience each, we plan, build, and run events end to end — from concept to on-ground execution.
          </p>
          <Link
            href="/about"
            className="self-start label-sm uppercase tracking-widest text-primary hover:text-on-surface transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
          >
            Our story →
          </Link>
        </div>
      </div>
    </section>
  );
}
