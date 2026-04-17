"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest text-on-surface">
      <div className="max-w-[1440px] mx-auto px-12 pt-20 pb-8 grid grid-cols-1 md:grid-cols-3 gap-16 border-b border-surface-container-highest">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="inline-block">
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
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="label-sm text-primary uppercase tracking-widest">Agency</h4>
            <Link href="/" className="body-sm hover:text-primary transition-colors">Home</Link>
            <Link href="/services" className="body-sm hover:text-primary transition-colors">Services</Link>
            <Link href="/about" className="body-sm hover:text-primary transition-colors">About</Link>
            <Link href="/portfolio" className="body-sm hover:text-primary transition-colors">Portfolio</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="label-sm text-primary uppercase tracking-widest">Legal</h4>
            <Link href="#" className="body-sm hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="body-sm hover:text-primary transition-colors">Terms</Link>
            <Link href="#" className="body-sm hover:text-primary transition-colors">Press</Link>
            <Link href="/contact" className="body-sm hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>

        {/* Newsletter & Social */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="label-sm text-primary uppercase tracking-widest">Stay Updated</h4>
            <form className="flex w-full mt-2 group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border-b border-outline-variant/40 py-2 text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant/50"
              />
              <button 
                type="submit" 
                className="border-b border-outline-variant/40 py-2 px-2 text-primary hover:text-primary-container transition-colors focus:outline-none focus:border-primary group-focus-within:border-primary"
                aria-label="Subscribe"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="label-sm text-primary uppercase tracking-widest">Follow Us</h4>
            <div className="flex gap-6">
              <a href="#" className="body-sm hover:text-primary transition-colors focus:outline-none focus:text-primary">LinkedIn</a>
              <a href="#" className="body-sm hover:text-primary transition-colors focus:outline-none focus:text-primary">Instagram</a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60">
          &copy; {new Date().getFullYear()} Lakambini Events. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
