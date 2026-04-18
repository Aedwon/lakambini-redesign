"use client";

import { useState, useEffect } from "react";
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const mountTimer = setTimeout(() => setHasMounted(true), 100);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(mountTimer);
    };
  }, []);

  // Close everything on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    setIsOpen(false);
  }, [pathname]);

  const closeAll = () => {
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    setIsOpen(false);
  };

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
          transition-[padding] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isScrolled ? "pt-3 px-6 xl:px-12" : "pt-0 px-0"}
          ${hasMounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}
        `}
        style={{ transitionProperty: "padding, opacity, transform" }}
      >
        {/* Inner bar — morphs visually (bg, radius, shadow, inner padding) */}
        <div
          className={`mx-auto flex items-center justify-between relative
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              isScrolled
                ? "max-w-screen-2xl rounded-full bg-[#11231C]/60 backdrop-blur-[20px] shadow-[0_20px_50px_rgba(4,21,15,0.4)] px-8 py-3"
                : "max-w-none rounded-none bg-transparent backdrop-blur-0 shadow-none px-12 py-6"
            }
          `}
        >
          {/* Ambient glow backdrop — visible only when transparent */}
          <div
            className={`absolute inset-0 pointer-events-none rounded-[inherit]
              transition-opacity duration-700 ease-out
              ${isScrolled ? "opacity-0" : "opacity-100"}
            `}
            style={{
              background:
                "linear-gradient(180deg, rgba(5,23,16,0.55) 0%, rgba(5,23,16,0.25) 60%, transparent 100%)",
            }}
          />

          {/* Animated gold shimmer line — sweeps across bottom on entrance */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-px pointer-events-none overflow-hidden
              transition-opacity duration-500
              ${isScrolled ? "opacity-0" : "opacity-100"}
            `}
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
              className={`h-8 w-auto object-contain transition-[filter] duration-700
                ${isScrolled ? "drop-shadow-none" : "drop-shadow-[0_0_12px_rgba(233,194,85,0.3)]"}
              `}
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
                    className={`font-headline tracking-tight text-lg border-b-2 pb-1
                      transition-all duration-500 ease-out hover:scale-105
                      inline-flex items-center gap-1.5 cursor-pointer
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
                  className={`font-headline tracking-tight text-lg border-b-2 pb-1
                    transition-all duration-500 ease-out hover:scale-105
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
            <div
              className={`hidden md:block transition-all duration-500 ease-out delay-100 ${
                isScrolled
                  ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
                  : "opacity-0 -translate-x-4 scale-90 pointer-events-none"
              }`}
            >
              <Button variant="primary" href="/contact">
                Inquire
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={`md:hidden text-primary focus:outline-none transition-opacity duration-500
                ${hasMounted ? "opacity-100" : "opacity-0"}
              `}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          className={`hidden md:block transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isServicesOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-3 pointer-events-none"
            }
          `}
        >
          <div
            className={`mx-auto mt-3 overflow-hidden
              bg-[#0D1F18]/85 backdrop-blur-[24px]
              shadow-[0_20px_60px_rgba(0,0,0,0.5)]
              border border-outline-variant/10
              transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isScrolled ? "max-w-screen-2xl rounded-2xl" : "max-w-none rounded-b-2xl"}
            `}
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
        <div className="md:hidden fixed top-24 left-6 right-6 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-3xl bg-surface-container border border-surface-container-high shadow-2xl z-40">
          <div className="flex flex-col px-8 py-8 gap-6">
            {navLinks.map((link) => {
              /* Mobile Services Accordion */
              if (link.name === "Services") {
                return (
                  <div key="services" className="flex flex-col">
                    <button
                      onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                      className={`font-headline tracking-tight text-xl border-b border-outline-variant/10 pb-4 flex items-center justify-between w-full text-left
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
                      <div className="pt-4 pb-2 pl-4 flex flex-col gap-1">
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
                            className="flex flex-col gap-0.5 py-2.5 group/mitem transition-colors duration-300"
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
                  className={`font-headline tracking-tight text-xl border-b border-outline-variant/10 pb-4 ${
                    pathname === link.href ? "text-primary" : "text-on-surface"
                  }`}
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
