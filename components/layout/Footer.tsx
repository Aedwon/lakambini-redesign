import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import GoldWave from "@/components/ui/GoldWave";
import Reveal from "@/components/ui/Reveal";
import { divisions } from "@/lib/divisions";

const EMAIL = "admin@lakambinievents.com";

const SITEMAP = [
  { href: "/portfolio", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const colHead = "eyebrow mb-6 text-mist";
const linkCls = "body-md text-ivory/80 transition-colors duration-300 hover:text-ivory";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink-deep">
      <GoldWave opacity={0.3} className="absolute inset-x-0 top-1/4 h-1/2 w-full opacity-40" />

      <div className="container-x relative pb-10 pt-24 md:pt-36">
        <Reveal>
          <h2 className="display-lg max-w-[16ch] text-balance text-ivory">
            Let&apos;s make something people <em className="italic text-brass">line up</em> for.
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col items-start gap-10 md:mt-16 md:flex-row md:items-center md:gap-14">
          <Button variant="primary" size="lg" href="/contact">
            Start a project
          </Button>
          <a
            href={`mailto:${EMAIL}`}
            className="headline-md relative break-all text-ivory after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-[0.25] after:bg-brass after:transition-transform after:duration-500 after:ease-[var(--ease-out-expo)] hover:after:scale-x-100 focus-visible:after:scale-x-100"
          >
            {EMAIL}
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-12 border-t border-line pt-12 md:mt-28 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <h3 className={colHead}>Studio</h3>
            <address className="body-md not-italic text-ivory/80">
              Brookeside Lane, San Francisco,
              <br />
              General Trias City, Cavite,
              <br />
              Philippines
            </address>
          </div>

          <nav aria-label="Sitemap">
            <h3 className={colHead}>Sitemap</h3>
            <ul className="flex flex-col gap-3">
              {SITEMAP.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Divisions">
            <h3 className={colHead}>Divisions</h3>
            <ul className="flex flex-col gap-3">
              {divisions.map((d) => (
                <li key={d.slug}>
                  <Link href={`/services/${d.slug}`} className={linkCls}>
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className={colHead}>Contact</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={`mailto:${EMAIL}`} className={`${linkCls} break-all`}>
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href="tel:+639958759410" className={linkCls}>
                  +63 995 875 9410
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-line pt-6 text-mist sm:flex-row sm:items-center sm:justify-between">
          <p className="body-sm">&copy; {year} Lakambini Creative Solutions</p>
          <p className="numeral">Est. 2024</p>
          <Link href="/" aria-label="Lakambini Events, home">
            <Image
              src="/images/Lakambini Logo Gold Horizontal.png"
              alt=""
              width={1310}
              height={343}
              sizes="96px"
              className="h-6 w-auto opacity-80"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
