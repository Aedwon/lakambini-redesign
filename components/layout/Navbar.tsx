"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed z-50 transition-all duration-400 ease-out flex items-center justify-between
          ${
            isScrolled
              ? "top-3 left-6 right-6 max-w-screen-2xl mx-auto rounded-full bg-[#11231C]/60 backdrop-blur-[20px] shadow-[0_20px_50px_rgba(4,21,15,0.4)] px-8 py-3 w-[calc(100%-3rem)] xl:w-[calc(100%-6rem)]"
              : "top-0 left-0 right-0 w-full rounded-none bg-transparent px-12 py-6"
          }
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center">
          <Image
            src="/images/Lakambini Logo Gold Horizontal.png"
            alt="Lakambini Logo"
            width={200}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-headline tracking-tight text-lg transition-all duration-300 hover:scale-105 border-b-2 pb-1 ${
                  isActive
                    ? "text-primary border-primary-container"
                    : "text-primary-container/70 border-transparent hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-6">
          <div
            className={`hidden md:block transition-all duration-400 ease-out delay-100 ${
              isScrolled
                ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
                : "opacity-0 -translate-x-4 scale-90 pointer-events-none"
            }`}
          >
            <Button variant="primary" href="/contact">
              Inquire
            </Button>
          </div>

          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden text-primary focus:outline-none"
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
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed top-24 left-6 right-6 rounded-3xl bg-surface-container border border-surface-container-high shadow-2xl z-40 overflow-hidden">
          <div className="flex flex-col px-8 py-8 gap-6">
            {links.map((link) => (
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
            ))}
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
