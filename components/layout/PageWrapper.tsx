"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Scroll-to-top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Section-reveal Intersection Observer animation
  useEffect(() => {
    if (!wrapperRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-5");
            // Only trigger once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const sections = wrapperRef.current.querySelectorAll("section");
    sections.forEach((section) => {
      // Set initial state for reveal
      section.classList.add(
        "opacity-0", 
        "translate-y-5", 
        "transition-all", 
        "duration-[800ms]", 
        "ease-out"
      );
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <main className="w-full flex flex-col min-h-screen bg-surface">
      <div 
        ref={wrapperRef} 
        className="flex-grow w-full min-h-[70vh] flex flex-col pt-0 sm:pt-0"
      >
        {children}
      </div>
    </main>
  );
}
