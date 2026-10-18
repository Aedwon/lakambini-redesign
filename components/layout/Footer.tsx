"use client";

import Link from "next/link";
import Image from "next/image";

const linkCls =
  "body-sm hover:text-primary transition-colors w-fit rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container-lowest";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest text-on-surface">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-20 pb-8 grid grid-cols-1 md:grid-cols-2 gap-16 border-b border-surface-container-highest">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="inline-block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container-lowest">
            <Image
              src="/images/Lakambini Logo Gold Horizontal.png"
              alt="Lakambini Logo"
              width={200}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <p className="body-sm font-light text-primary/60 max-w-sm">
            Full-service event production. Creative. Technical. Reliable.
          </p>
        </div>

        {/* Links Column */}
        {/* TODO: restore Legal (Privacy, Terms, Press), newsletter signup, and social links once real destinations exist */}
        <nav aria-label="Footer" className="flex flex-col gap-4">
          <p className="label-sm text-primary uppercase tracking-widest">Agency</p>
          <Link href="/" className={linkCls}>Home</Link>
          <Link href="/services" className={linkCls}>Services</Link>
          <Link href="/about" className={linkCls}>About</Link>
          <Link href="/portfolio" className={linkCls}>Portfolio</Link>
          <Link href="/contact" className={linkCls}>Contact</Link>
        </nav>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-8 pb-24 md:pb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs uppercase tracking-widest text-on-surface-variant/70">
          &copy; {new Date().getFullYear()} Lakambini Events. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
