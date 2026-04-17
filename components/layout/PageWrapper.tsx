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
            entry.target.classList.remove("opacity-0", "translate-y-[20px]");
            // Only trigger once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = wrapperRef.current.querySelectorAll("section");
    sections.forEach((section) => {
      // Set initial state
      section.classList.add(
        "opacity-0", 
        "translate-y-[20px]", 
        "transition-all", 
        "duration-[800ms]", 
        "[transition-timing-function:cubic-bezier(0.19,1,0.22,1)]"
      );
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <main className="w-full flex flex-col min-h-screen">
      <div 
        ref={wrapperRef} 
        className="flex-grow w-full flex flex-col min-h-[70vh]"
      >
        {children}
      </div>
    </main>
  );
}
