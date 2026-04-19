"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

const services = [
  { name: "TANGHAL", desc: "Live Entertainment & Talent", slug: "tanghal" },
  { name: "LIKHA", desc: "Multimedia Production", slug: "likha" },
  { name: "MERKATO", desc: "Experiential Marketing", slug: "merkato" },
  { name: "TIPON", desc: "Event Production & Management", slug: "tipon" },
  { name: "SIBOL", desc: "Learning & Development", slug: "sibol" },
  { name: "GUHIT", desc: "Design & Visual Identity", slug: "guhit" },
  { name: "UGNAY", desc: "Community Management & Growth", slug: "ugnay" },
  { name: "DALOY", desc: "Technology & Development", slug: "daloy" },
  { name: "TAYO", desc: "Experiential Architecture", slug: "tayo" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
];

/* ── Interpolation helpers ─────────────────────────────────────────────── */

/** Linearly interpolate between two values based on progress (0 → 1) */
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/** Ease-out cubic for a more organic feel */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/* ── Scroll-morph constants ────────────────────────────────────────────── */

/** Scroll range over which the morph occurs (px) */
const SCROLL_RANGE = 80;

/** Morph property keyframes: [expanded (top), compact (scrolled)] */
const MORPH = {
  outerPaddingTop: [0, 12],       // px
  outerPaddingX: [0, 24],         // px  (6 * 4 = 24 tailwind px-6)
  outerPaddingXXl: [0, 48],       // px  (xl:px-12)
  innerPaddingX: [48, 32],        // px  (px-12 → px-8)
  innerPaddingY: [24, 12],        // px  (py-6 → py-3)
  borderRadius: [0, 9999],        // px  (none → full)
  bgOpacity: [0, 0.6],            // 0 → 0.6
  blurAmount: [0, 20],            // px
  shadowOpacity: [0, 0.4],        // 0 → 0.4
  ambientGlowOpacity: [1, 0],     // 1 → 0
  shimmerOpacity: [1, 0],         // 1 → 0
} as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const pathname = usePathname();
  const rafRef = useRef<number | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  /** Derived boolean — still useful for class-based decisions */
  const isScrolled = scrollProgress > 0.5;

  const updateScrollProgress = useCallback(() => {
    const raw = Math.min(window.scrollY / SCROLL_RANGE, 1);
    setScrollProgress(easeOutCubic(raw));
    rafRef.current = null;
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handleMQ = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handleMQ);

    const mountTimer = setTimeout(() => setHasMounted(true), 100);

    const handleScroll = () => {
      if (prefersReducedMotion) {
        setScrollProgress(window.scrollY > 50 ? 1 : 0);
        return;
      }
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(updateScrollProgress);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mq.removeEventListener("change", handleMQ);
      clearTimeout(mountTimer);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [updateScrollProgress, prefersReducedMotion]);

  // Close everything on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    setIsOpen(false);
  }, [pathname]);

  // Escape key closes any open menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isServicesOpen) setIsServicesOpen(false);
        if (isOpen) {
          setIsOpen(false);
          hamburgerRef.current?.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isServicesOpen, isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const closeAll = () => {
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    setIsOpen(false);
  };

  /* ── Computed interpolated values ──────────────────────────────────── */
  const t = scrollProgress; // shorthand

  const outerPadTop = lerp(MORPH.outerPaddingTop[0], MORPH.outerPaddingTop[1], t);
  const outerPadX = lerp(MORPH.outerPaddingX[0], MORPH.outerPaddingX[1], t);
  const innerPadX = lerp(MORPH.innerPaddingX[0], MORPH.innerPaddingX[1], t);
  const innerPadY = lerp(MORPH.innerPaddingY[0], MORPH.innerPaddingY[1], t);
  const borderRadius = lerp(MORPH.borderRadius[0], MORPH.borderRadius[1], t);
  const bgOpacity = lerp(MORPH.bgOpacity[0], MORPH.bgOpacity[1], t);
  const blurAmount = lerp(MORPH.blurAmount[0], MORPH.blurAmount[1], t);
  const shadowOp = lerp(MORPH.shadowOpacity[0], MORPH.shadowOpacity[1], t);
  const ambientGlow = lerp(MORPH.ambientGlowOpacity[0], MORPH.ambientGlowOpacity[1], t);
  const shimmerOp = lerp(MORPH.shimmerOpacity[0], MORPH.shimmerOpacity[1], t);

  // Max-width: lerp from a huge value (3000) down to 1536 (screen-2xl)
  const maxWidth = lerp(3000, 1536, t);

  return (
    <>
      {/* ── Background dim overlay (desktop services dropdown) ──────────── */}
      <div
        className={`hidden md:block fixed inset-0 z-[45] bg-surface-dim/70 transition-all duration-500 ease-out
          ${isServicesOpen ? "opacity-100 pointer-events-auto backdrop-blur-[2px]" : "opacity-0 pointer-events-none backdrop-blur-0"}
        `}
        onClick={() => setIsServicesOpen(false)}
        aria-hidden="true"
      />

      {/* ── Outer nav shell ────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full
          ${hasMounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}
        `}
        style={{
          paddingTop: `${outerPadTop}px`,
          paddingLeft: `${outerPadX}px`,
          paddingRight: `${outerPadX}px`,
          transition: hasMounted ? "opacity 0.7s ease, transform 0.7s ease" : "none",
        }}
      >
        {/* Inner bar — morphs smoothly via interpolated inline styles */}
        <div
          className="mx-auto flex items-center justify-between relative"
          style={{
            maxWidth: `${maxWidth}px`,
            borderRadius: `${borderRadius}px`,
            backgroundColor: `rgba(17, 35, 28, ${bgOpacity})`,
            backdropFilter: `blur(${blurAmount}px)`,
            WebkitBackdropFilter: `blur(${blurAmount}px)`,
            boxShadow: `0 20px 50px rgba(4, 21, 15, ${shadowOp})`,
            paddingLeft: `${innerPadX}px`,
            paddingRight: `${innerPadX}px`,
            paddingTop: `${innerPadY}px`,
            paddingBottom: `${innerPadY}px`,
          }}
        >
          {/* Ambient glow backdrop — visible only when at top */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: "inherit",
              opacity: ambientGlow,
              background:
                "linear-gradient(180deg, rgba(5,23,16,0.55) 0%, rgba(5,23,16,0.25) 60%, transparent 100%)",
            }}
          />

          {/* Animated gold shimmer line — sweeps across bottom on entrance */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px pointer-events-none overflow-hidden"
            style={{ opacity: shimmerOp }}
          >
            <div
              className={`h-full w-full ${hasMounted ? "navbar-shimmer" : ""}`}
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, transparent 30%, #E9C255 50%, transparent 70%, transparent 100%)",
                backgroundSize: "200% 100%",
              }}
            />
          </div>

          {/* Logo */}
          <Link
            href="/"
            className={`relative z-10 flex-shrink-0 flex items-center
              transition-all duration-700 ease-out
              ${hasMounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
            `}
          >
            <Image
              src="/images/Lakambini Logo Gold Horizontal.png"
              alt="Lakambini Logo"
              width={200}
              height={40}
              className="h-8 w-auto object-contain transition-[filter] duration-700"
              style={{
                filter: isScrolled
                  ? "none"
                  : "drop-shadow(0 0 12px rgba(233,194,85,0.3))",
              }}
              priority
            />
          </Link>

          {/* Desktop Menu — staggered entrance */}
          <div className="hidden md:flex items-center gap-10 relative z-10">
            {navLinks.map((link, i) => {
              const isActive =
                link.name === "Services"
                  ? pathname.startsWith("/services")
                  : pathname === link.href;

              /* Services — click-toggle dropdown trigger */
              if (link.name === "Services") {
                return (
                  <button
                    key={link.name}
                    onClick={() => setIsServicesOpen((prev) => !prev)}
                    aria-expanded={isServicesOpen}
                    aria-controls="services-dropdown"
                    className={`font-headline tracking-tight text-lg border-b-2 pb-1
                      transition-all duration-500 ease-out hover:scale-105
                      inline-flex items-center gap-1.5 cursor-pointer
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface
                      ${
                        isActive || isServicesOpen
                          ? "text-primary border-primary-container"
                          : `border-transparent hover:text-primary ${
                              isScrolled
                                ? "text-primary-container/70"
                                : "text-on-surface/90 hover:text-primary"
                            }`
                      }
                      ${hasMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                      ${!isScrolled && !isActive && !isServicesOpen ? "nav-text-glow" : ""}
                    `}
                    style={{
                      transitionDelay: hasMounted ? `${150 + i * 80}ms` : "0ms",
                    }}
                  >
                    {link.name}
                    <svg
                      className={`w-3 h-3 transition-transform duration-300 ease-out
                        ${isServicesOpen ? "rotate-180" : "rotate-0"}
                      `}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                );
              }

              /* All other nav links */
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`font-headline tracking-tight text-lg border-b-2 pb-1
                    transition-all duration-500 ease-out hover:scale-105
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface
                    ${
                      isActive
                        ? "text-primary border-primary-container"
                        : `border-transparent hover:text-primary ${
                            isScrolled
                              ? "text-primary-container/70"
                              : "text-on-surface/90 hover:text-primary"
                          }`
                    }
                    ${hasMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                    ${!isScrolled && !isActive ? "nav-text-glow" : ""}
                  `}
                  style={{
                    transitionDelay: hasMounted ? `${150 + i * 80}ms` : "0ms",
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-6 relative z-10">
            {/* ── Inquire button: layered crossfade between ghost ↔ solid ── */}
            <div
              className={`hidden md:block relative transition-all duration-500 ease-out
                ${hasMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
              `}
              style={{
                transitionDelay: hasMounted ? "470ms" : "0ms",
              }}
            >
              {/* Ghost / outline button (visible at top, fades out on scroll) */}
              <div
                style={{ opacity: 1 - t }}
                className={t >= 1 ? "pointer-events-none" : ""}
              >
                <Button variant="secondary" href="/contact">
                  Inquire
                </Button>
              </div>

              {/* Solid primary button (fades in on scroll) */}
              <div
                className={`absolute inset-0 flex items-center justify-center ${t <= 0 ? "pointer-events-none" : ""}`}
                style={{ opacity: t }}
              >
                <Button variant="primary" href="/contact">
                  Inquire
                </Button>
              </div>
            </div>

            {/* Mobile Hamburger */}
            <button
              ref={hamburgerRef}
              className={`md:hidden text-primary transition-opacity duration-500
                flex items-center justify-center w-11 h-11 -mr-1.5
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-md
                ${hasMounted ? "opacity-100" : "opacity-0"}
              `}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* ── Desktop Services Mega-Dropdown ───────────────────────────── */}
        <div
          id="services-dropdown"
          role="region"
          aria-label="Services menu"
          className={`hidden md:block transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isServicesOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-3 pointer-events-none"
            }
          `}
        >
          <div
            className="mx-auto mt-3 overflow-hidden
              bg-[#0D1F18]/85 backdrop-blur-[24px]
              shadow-[0_20px_60px_rgba(0,0,0,0.5)]
              border border-outline-variant/10
              transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              maxWidth: isScrolled ? "1536px" : "none",
              borderRadius: isScrolled ? "16px" : "0 0 16px 16px",
            }}
          >
            {/* "Services Overview →" link at top */}
            <div className="px-8 pt-5 pb-3 border-b border-outline-variant/10">
              <Link
                href="/services"
                onClick={() => setIsServicesOpen(false)}
                className="inline-flex items-center gap-2 label-md text-on-surface-variant/60 hover:text-primary transition-colors duration-300 group/overview"
              >
                Services Overview
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover/overview:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* 3 × 3 Services Grid */}
            <div className="grid grid-cols-3 px-4 py-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={() => setIsServicesOpen(false)}
                  className="group/item flex flex-col gap-1 px-5 py-4 rounded-xl
                    transition-all duration-300 ease-out
                    hover:bg-surface-container-high/30"
                >
                  <span className="title-sm text-primary group-hover/item:text-primary-container transition-colors duration-300">
                    {service.name}
                  </span>
                  <span className="body-sm text-on-surface-variant/50 font-light leading-snug">
                    {service.desc}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ────────────────────────────────────────── */}
      {isOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="md:hidden fixed top-24 left-6 right-6 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-3xl bg-surface-container border border-surface-container-high shadow-2xl z-40"
        >
          <div className="flex flex-col px-8 py-8 gap-6">
            {navLinks.map((link) => {
              /* Mobile Services Accordion */
              if (link.name === "Services") {
                return (
                  <div key="services" className="flex flex-col">
                    <button
                      onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                      aria-expanded={isMobileServicesOpen}
                      aria-controls="mobile-services-list"
                      className={`font-headline tracking-tight text-xl border-b border-outline-variant/10 pb-4 flex items-center justify-between w-full text-left min-h-[44px]
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container
                        ${pathname.startsWith("/services") ? "text-primary" : "text-on-surface"}
                      `}
                    >
                      Services
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ease-out
                          ${isMobileServicesOpen ? "rotate-180" : "rotate-0"}
                        `}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Accordion content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                        ${isMobileServicesOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}
                      `}
                    >
                      <div id="mobile-services-list" className="pt-4 pb-2 pl-4 flex flex-col gap-1">
                        {/* Overview link */}
                        <Link
                          href="/services"
                          onClick={closeAll}
                          className="inline-flex items-center gap-2 py-2.5 label-md text-on-surface-variant/50 hover:text-primary transition-colors duration-300 group/moverview"
                        >
                          Services Overview
                          <svg
                            className="w-3 h-3 transition-transform duration-300 group-hover/moverview:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>

                        <div className="w-8 h-px bg-outline-variant/20 my-1" />

                        {/* Individual service links */}
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={closeAll}
                            aria-current={pathname === `/services/${service.slug}` ? "page" : undefined}
                            className="flex flex-col gap-0.5 py-3 group/mitem transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container rounded-sm"
                          >
                            <span className="title-sm text-primary group-hover/mitem:text-primary-container transition-colors duration-300">
                              {service.name}
                            </span>
                            <span className="body-sm text-on-surface-variant/40 font-light">
                              {service.desc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              /* All other mobile nav links */
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`font-headline tracking-tight text-xl border-b border-outline-variant/10 pb-4 min-h-[44px] flex items-center
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container
                    ${pathname === link.href ? "text-primary" : "text-on-surface"}`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4">
              <Button variant="primary" href="/contact" className="w-full text-center justify-center">
                Inquire
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
