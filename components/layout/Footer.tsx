import Image from "next/image";
import Link from "next/link";
import GoldWave from "@/components/ui/GoldWave";
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
      <GoldWave opacity={0.25} className="absolute inset-x-0 bottom-0 h-2/3 w-full opacity-40" />

      <div className="container-x relative pb-10 pt-16 md:pt-20">
        {/* Sign-off: the CTA band above is the page's only ask, so the footer stays quiet */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Link href="/" aria-label="Lakambini Events, home" className="inline-block">
            <Image
              src="/images/Lakambini Logo Gold Horizontal.png"
              alt=""
              width={1310}
              height={343}
              sizes="200px"
              className="h-10 w-auto md:h-12"
            />
          </Link>
          <a
            href={`mailto:${EMAIL}`}
            className="headline-md relative self-start break-all text-ivory after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-[0.25] after:bg-brass after:transition-transform after:duration-500 after:ease-[var(--ease-out-expo)] hover:after:scale-x-100 focus-visible:after:scale-x-100 md:self-auto"
          >
            {EMAIL}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 border-t border-line pt-12 md:mt-16 lg:grid-cols-4">
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
        </div>
      </div>
    </footer>
  );
}
