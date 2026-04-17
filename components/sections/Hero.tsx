"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-surface overflow-hidden pt-20">
      {/* Background Image using next/image for fast loading */}
      <div className="absolute inset-0 z-0 bg-surface-container-low">
        <Image 
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
          alt="Lakambini Premium Events"
          fill
          priority
          className="object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent"></div>
      </div>
      
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-8 md:gap-12 mt-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
      >
        <motion.span 
          className="label-sm text-on-surface-variant uppercase tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          The Platinum Standard
        </motion.span>
        
        <h1 className="display-hero text-primary max-w-5xl tracking-tight leading-none drop-shadow-xl">
          Where Vision Meets Immaculate Execution.
        </h1>
        
        <p className="body-lg text-on-surface-variant max-w-2xl font-light mb-8">
          Lakambini Events orchestrates premium B2B digital solutions and elite experiences for the most discerning brands.
        </p>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button variant="primary" size="lg" href="/contact">
            Consult With Us
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-on-surface-variant"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="label-sm animate-pulse">DISCOVER</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
