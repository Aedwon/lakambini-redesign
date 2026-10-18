"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Scroll-to-top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <main id="main-content" className="flex min-h-screen w-full flex-col bg-ink">
      {children}
    </main>
  );
}
