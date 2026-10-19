"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import GoldWave from "@/components/ui/GoldWave";
import { divisions } from "@/lib/divisions";

const LINKS = [
  { href: "/portfolio", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

const EMAIL = "admin@lakambinievents.com";

function subscribeScroll(cb: () => void) {
  window.addEventListener("scroll", cb, { passive: true });
  return () => window.removeEventListener("scroll", cb);
}
const getScrolled = () => window.scrollY > 24;
const getServerScrolled = () => false;

const isActive = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

export default function Navbar() {
  const pathname = usePathname();
  const scrolled = useSyncExternalStore(subscribeScroll, getScrolled, getServerScrolled);

  const [mega, setMega] = useState(false);
  const [menu, setMenu] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMega(false);
    setMenu(false);
  }

  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const megaBtnRef = useRef<HTMLButtonElement>(null);
  const wasMenuOpen = useRef(false);

  // Body scroll lock + focus management for the mobile overlay
  useEffect(() => {
    if (menu) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      wasMenuOpen.current = true;
      overlayRef.current?.querySelector<HTMLElement>("a, button")?.focus();
      return () => {
        document.body.style.overflow = prev;
      };
    }
    if (wasMenuOpen.current) {
      wasMenuOpen.current = false;
      menuBtnRef.current?.focus();
    }
  }, [menu]);

  // Escape closes whichever layer is open
  useEffect(() => {
    if (!menu && !mega) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (mega) megaBtnRef.current?.focus();
      setMega(false);
      setMenu(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menu, mega]);

  // Close mobile overlay if the viewport grows past the breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setMenu(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const onHeaderBlur = useCallback((e: React.FocusEvent<HTMLElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setMega(false);
  }, []);

  const solid = scrolled || mega || menu;

  return (
    <>
      <header
        onMouseLeave={() => setMega(false)}
        onBlur={onHeaderBlur}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ease-out ${
          solid
            ? "border-line bg-ink/80 backdrop-blur-md"
            : "border-transparent bg-transparent"
        } ${menu ? "!bg-transparent !backdrop-blur-none !border-transparent" : ""}`}
      >
        {/* Top legibility gradient while over the hero */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 to-transparent transition-opacity duration-500 ${
            solid ? "opacity-0" : "opacity-100"
          }`}
        />

        <div className="container-x relative flex h-[72px] items-center justify-between gap-6">
          <Link href="/" aria-label="Lakambini Events, home" className="relative z-50 shrink-0">
            <Image
              src="/images/Lakambini Logo Gold Horizontal.png"
              alt="Lakambini"
              width={1310}
              height={343}
              priority
              sizes="125px"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop links */}
          <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
            {LINKS.map((l) => {
              const active = isActive(pathname, l.href);
              const link = (
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-2 text-[0.875rem] transition-colors duration-300 hover:text-ivory ${
                    active ? "text-ivory" : "text-ivory/80"
                  } after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-brass after:transition-opacity after:duration-300 ${
                    active ? "after:opacity-100" : "after:opacity-0"
                  }`}
                >
                  {l.label}
                </Link>
              );
              if (l.label !== "Services") return <span key={l.href}>{link}</span>;
              return (
                <span
                  key={l.href}
                  className="flex items-center gap-1.5"
                  onMouseEnter={() => setMega(true)}
                >
                  {link}
                  <button
                    ref={megaBtnRef}
                    type="button"
                    aria-expanded={mega}
                    aria-controls="mega-menu"
                    aria-label="Browse all divisions"
                    onClick={() => setMega((v) => !v)}
                    className="flex h-6 w-6 cursor-pointer items-center justify-center text-ivory/80 transition-colors hover:text-ivory"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 12 12"
                      className={`h-3 w-3 transition-transform duration-500 ${mega ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.25"
                    >
                      <path d="M2 4.5l4 4 4-4" />
                    </svg>
                  </button>
                </span>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            {/* Wrapped: Button's own inline-flex would override a `hidden` passed via className */}
            <div className="hidden lg:block">
              <Button variant="secondary" size="sm" href="/contact">
                Start a project
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              ref={menuBtnRef}
              type="button"
              aria-expanded={menu}
              aria-controls="mobile-menu"
              onClick={() => setMenu((v) => !v)}
              className="relative z-50 flex h-10 cursor-pointer items-center gap-3 text-ivory lg:hidden"
            >
              <span className="label-sm">{menu ? "Close" : "Menu"}</span>
              <span aria-hidden="true" className="relative block h-3 w-6">
                <span
                  className={`absolute left-0 h-px w-6 bg-current transition-all duration-500 ease-[var(--ease-out-expo)] ${
                    menu ? "top-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-6 bg-current transition-all duration-500 ease-[var(--ease-out-expo)] ${
                    menu ? "top-1/2 -rotate-45" : "bottom-0"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mega menu (desktop) */}
        <div
          id="mega-menu"
          inert={!mega}
          className={`absolute inset-x-0 top-full hidden border-b border-line bg-ink transition-[opacity,visibility,transform] duration-500 ease-[var(--ease-out-expo)] lg:block ${
            mega ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <div className="container-x py-10">
            <div className="mb-6 flex items-end justify-between">
              <p className="eyebrow text-mist">Nine in-house divisions</p>
              <Button variant="tertiary" href="/services">
                All services
              </Button>
            </div>
            <ul className="grid grid-cols-3 border-t border-line">
              {divisions.map((d) => (
                <li key={d.slug} className="border-b border-line">
                  <Link
                    href={`/services/${d.slug}`}
                    className="group flex items-baseline gap-5 py-5 pr-6"
                  >
                    <span className="numeral w-6 shrink-0 text-brass">{d.id}</span>
                    <span className="flex flex-col gap-1.5">
                      <span className="font-[family-name:var(--font-display)] text-[1.75rem] leading-none text-ivory transition-colors duration-300 group-hover:text-brass-soft">
                        {d.name}
                      </span>
                      <span className="body-sm text-mist">{d.subtitle}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay (outside the header: backdrop-filter would trap `fixed`) */}
      <div
        ref={overlayRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!menu}
        className={`fixed inset-0 z-40 overflow-y-auto bg-ink transition-[opacity,visibility] duration-500 lg:hidden ${
          menu ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <GoldWave
          opacity={0.35}
          className="absolute -right-1/4 bottom-0 h-1/3 w-[150%] opacity-40"
        />
        <div className="container-x relative flex min-h-full flex-col pb-8 pt-28">
          <nav aria-label="Mobile primary">
            <ul className="flex flex-col">
              {LINKS.map((l, i) => (
                <li
                  key={l.href}
                  style={{ transitionDelay: menu ? `${120 + i * 70}ms` : "0ms" }}
                  className={`border-b border-line transition-[opacity,transform] duration-700 ease-[var(--ease-out-expo)] ${
                    menu ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  <Link
                    href={l.href}
                    aria-current={isActive(pathname, l.href) ? "page" : undefined}
                    className="display-sm flex items-baseline justify-between py-4 text-ivory aria-[current=page]:text-brass-soft"
                  >
                    {l.label}
                    <span className="numeral text-mist">0{i + 1}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div
            style={{ transitionDelay: menu ? "380ms" : "0ms" }}
            className={`mt-10 transition-[opacity,transform] duration-700 ease-[var(--ease-out-expo)] ${
              menu ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <p className="eyebrow mb-4 text-mist">Divisions</p>
            <ul className="grid grid-cols-2 gap-x-6">
              {divisions.map((d) => (
                <li key={d.slug} className="border-t border-line">
                  <Link href={`/services/${d.slug}`} className="flex items-baseline gap-3 py-3 text-ivory">
                    <span className="numeral text-brass">{d.id}</span>
                    <span className="font-[family-name:var(--font-display)] text-[1.25rem] leading-none">
                      {d.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{ transitionDelay: menu ? "460ms" : "0ms" }}
            className={`mt-auto flex flex-col items-start gap-6 pt-12 transition-[opacity,transform] duration-700 ease-[var(--ease-out-expo)] ${
              menu ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <a href={`mailto:${EMAIL}`} className="body-md text-mist hover:text-ivory">
              {EMAIL}
            </a>
            <Button variant="primary" href="/contact">
              Start a project
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
