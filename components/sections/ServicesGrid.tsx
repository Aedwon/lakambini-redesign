"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";

export default function ServicesGrid() {
  const services = [
    { title: "Corporate Activations", desc: "Premium brand launches and gala dinners." },
    { title: "Esports Tournaments", desc: "End-to-end league operations and broadcasts." },
    { title: "Digital Solutions", desc: "Custom platforms and interactive microsites." },
    { title: "Creative Branding", desc: "High-end visual identity and art direction." }
  ];

  return (
    <section className="bg-surface-container-low py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-20 md:gap-32">
        <SectionHeading 
          overline="Expertise"
          title="Mastery across the multidisciplinary spectrum."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.19, 1, 0.22, 1] }}
            >
              <Card 
                imageSrc="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
                aspectRatio={i % 3 === 0 ? "aspect-[2/1]" : "aspect-square"}
                className="h-full"
              >
                  <h3 className="title-lg text-primary">{svc.title}</h3>
                  <p className="body-sm text-on-surface-variant">{svc.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
