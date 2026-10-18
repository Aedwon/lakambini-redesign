import Link from "next/link";
import Button from "@/components/ui/Button";
import { divisions } from "@/lib/divisions";

export default function ServicesGrid() {
  return (
    <section className="w-full bg-surface py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col gap-4 max-w-3xl mb-12 md:mb-16">
          <span className="label-sm text-primary uppercase tracking-widest">
            What we do
          </span>
          <h2 className="headline-lg text-on-surface">
            Nine in-house teams. One point of contact.
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {divisions.map((div) => (
            <li key={div.slug} className="flex">
              <Link
                href={`/services/${div.slug}`}
                className="group flex flex-col gap-4 w-full p-8 md:p-10 bg-surface-container-low hover:bg-surface-container transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
              >
                <span className="label-xs text-on-surface-variant">{div.id}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="title-lg text-on-surface">{div.subtitle}</h3>
                  <p className="label-sm text-primary tracking-widest">{div.name}</p>
                </div>
                <p className="body-md text-on-surface-variant max-w-[65ch]">
                  {div.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-12 md:mt-16">
          <Button variant="secondary" href="/services">
            Explore all services
          </Button>
        </div>
      </div>
    </section>
  );
}
