"use client";

import { useState, useRef, useEffect } from "react";

type AccordionProps = {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
};

export default function Accordion({ title, defaultOpen = false, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  // Recalculate height on window resize in case text wraps differently
  useEffect(() => {
    const handleResize = () => {
      if (isOpen && contentRef.current) {
        setHeight(`${contentRef.current.scrollHeight}px`);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <div 
      className={`transition-colors duration-400 ease-out border-b border-outline-variant/10 last:border-b-0 ${isOpen ? 'bg-surface-container-low' : 'bg-transparent'}`}
    >
      <button
        className="w-full py-6 px-6 flex justify-between items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-primary cursor-pointer border-0 bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="title-lg text-on-surface text-left pr-8">{title}</h3>
        <div className="relative w-4 h-4 flex-shrink-0 ml-4 flex items-center justify-center">
          <span 
            className={`absolute w-full h-[1px] bg-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          ></span>
          <span 
            className={`absolute w-[1px] h-full bg-primary transition-transform duration-300 ${isOpen ? 'rotate-90 opacity-0' : ''}`}
          ></span>
        </div>
      </button>
      
      <div 
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-[max-height] duration-400 ease-out"
      >
        <div className="px-6 pb-6 pt-0 body-lg text-on-surface-variant font-light">
          {children}
        </div>
      </div>
    </div>
  );
}
