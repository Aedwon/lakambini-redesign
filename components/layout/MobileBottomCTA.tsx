"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileBottomCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  const isContactPage = pathname === "/contact";

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isContactPage) return null;

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-[49] transition-transform duration-300 ease-out motion-reduce:transition-none
        ${visible ? "translate-y-0" : "translate-y-full"}
      `}
      aria-hidden={!visible}
    >
      <div className="bg-surface-container/80 backdrop-blur-md border-t border-outline-variant/20 px-6 py-4 flex items-center justify-between gap-4">
        <p className="label-sm text-on-surface-variant/70 leading-snug max-w-[160px]">
          Ready to start your project?
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary label-md font-semibold tracking-wide flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          tabIndex={visible ? 0 : -1}
        >
          Inquire
        </Link>
      </div>
    </div>
  );
}
