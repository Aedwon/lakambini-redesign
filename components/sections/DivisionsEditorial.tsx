import Image from "next/image";
import Link from "next/link";

export default function DivisionsEditorial() {
  return (
    <section className="px-12 max-w-[1440px] mx-auto space-y-32 mb-48 text-on-surface w-full">
      
      {/* 01 TANGHAL */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <div className="relative overflow-hidden group aspect-[16/9]">
            <Image 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80" 
              alt="Live Entertainment Stage" 
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
          </div>
        </div>
        <div className="md:col-span-5 md:pl-16 flex flex-col items-start text-left mt-8 md:mt-0">
          <span className="headline-sm text-primary/40 font-bold block mb-4">01</span>
          <h2 className="headline-lg text-primary mb-6">TANGHAL</h2>
          <p className="label-sm text-on-surface-variant mb-4">Live Entertainment & Talent</p>
          <p className="body-lg text-on-surface/80 leading-relaxed mb-8 font-light">
            Live events, concerts, music festivals, and artist management. We handle the stage so the talent can perform.
          </p>
          <ul className="flex flex-wrap gap-3">
            {["Concerts", "Music Festivals", "Virtual Events", "Event Performances", "Talent Management"].map(t => (
              <li key={t} className="px-4 py-1 border border-outline-variant/30 rounded-full label-md text-primary/80">{t}</li>
            ))}
          </ul>
          <Link href="/services/tanghal" className="inline-flex items-center gap-1.5 label-md text-on-surface-variant/60 hover:text-primary transition-colors duration-300 mt-6 group/learn">
            Learn More
            <svg className="w-3 h-3 transition-transform duration-300 group-hover/learn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* 02 LIKHA */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5 md:pr-16 order-2 md:order-1 flex flex-col items-end md:items-start text-right md:text-left mt-8 md:mt-0">
          <span className="headline-sm text-primary/40 font-bold block mb-4">02</span>
          <h2 className="headline-lg text-primary mb-6">LIKHA</h2>
          <p className="label-sm text-on-surface-variant mb-4">Multimedia Production</p>
          <p className="body-lg text-on-surface/80 leading-relaxed mb-8 font-light">
            End-to-end video production, motion graphics, and sound design — from brand campaigns and music videos to event coverage and commercial content.
          </p>
          <ul className="flex flex-wrap gap-3 justify-end md:justify-start">
            {["Video Production", "Music Videos", "Video Editing", "Motion Graphics", "Sound Design"].map(t => (
              <li key={t} className="px-4 py-1 border border-outline-variant/30 rounded-full label-md text-primary/80">{t}</li>
            ))}
          </ul>
          <Link href="/services/likha" className="inline-flex items-center gap-1.5 label-md text-on-surface-variant/60 hover:text-primary transition-colors duration-300 mt-6 group/learn self-end md:self-start">
            Learn More
            <svg className="w-3 h-3 transition-transform duration-300 group-hover/learn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="md:col-span-7 order-1 md:order-2">
          <div className="relative overflow-hidden group aspect-[4/3]">
            <Image 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80" 
              alt="Multimedia Production Studio" 
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* 03 MERKATO & 04 TIPON (Side-by-side Bento) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        
        {/* MERKATO */}
        <div className="bg-surface-container-low p-8 md:p-12 hover:bg-surface-container transition-colors duration-500 group flex flex-col h-full">
          <span className="headline-sm text-primary/40 font-bold block mb-4">03</span>
          <h2 className="headline-md text-primary mb-4">MERKATO</h2>
          <p className="label-sm text-on-surface-variant mb-6">Experiential Marketing</p>
          <p className="body-md text-on-surface/80 leading-relaxed font-light mb-6">
            Product sampling, pop-up activations, street teams, and guerrilla campaigns — direct-to-consumer marketing strategies that drive real engagement and move product.
          </p>
          <ul className="flex flex-wrap gap-2 mb-5">
            {["Product Sampling", "Pop-Up Shops", "Experiential Marketing", "Street Teams", "Guerrilla Marketing", "In-Store Demos"].map(t => (
              <li key={t} className="px-3 py-1 border border-outline-variant/30 rounded-full label-md text-primary/80">{t}</li>
            ))}
          </ul>
          <Link href="/services/merkato" className="inline-flex items-center gap-1.5 label-md text-on-surface-variant/60 hover:text-primary transition-colors duration-300 mb-6 group/learn">
            Learn More
            <svg className="w-3 h-3 transition-transform duration-300 group-hover/learn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <div className="aspect-video relative overflow-hidden mt-auto">
            <Image 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" 
              alt="Experiential Activations" 
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* TIPON */}
        <div className="bg-surface-container-low p-8 md:p-12 hover:bg-surface-container transition-colors duration-500 md:mt-24 group flex flex-col h-full">
          <span className="headline-sm text-primary/40 font-bold block mb-4">04</span>
          <h2 className="headline-md text-primary mb-4">TIPON</h2>
          <p className="label-sm text-on-surface-variant mb-6">Event Production & Management</p>
          <p className="body-md text-on-surface/80 leading-relaxed font-light mb-6">
            Trade shows, sponsorship activations, fun runs, and mall events. Reliable logistics from load-in to strike.
          </p>
          <ul className="flex flex-wrap gap-2 mb-5">
            {["Trade Shows", "Conventions", "Company Events", "Mall Activations", "Live Streaming", "Outdoor Events"].map(t => (
              <li key={t} className="px-3 py-1 border border-outline-variant/30 rounded-full label-md text-primary/80">{t}</li>
            ))}
          </ul>
          <Link href="/services/tipon" className="inline-flex items-center gap-1.5 label-md text-on-surface-variant/60 hover:text-primary transition-colors duration-300 mb-6 group/learn">
            Learn More
            <svg className="w-3 h-3 transition-transform duration-300 group-hover/learn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <div className="aspect-video relative overflow-hidden mt-auto">
            <Image 
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80" 
              alt="Corporate Gatherings" 
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>

      </div>

      {/* 05 SIBOL */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-6">
          <div className="relative aspect-[3/2] overflow-hidden p-1 bg-gradient-to-tr from-primary/20 to-transparent">
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
              alt="Team Workshop" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out z-10"
            />
          </div>
        </div>
        <div className="md:col-span-6 md:pl-20 mt-8 md:mt-0">
          <span className="headline-sm text-primary/40 font-bold block mb-4">05</span>
          <h2 className="headline-lg text-primary mb-6">SIBOL</h2>
          <p className="label-sm text-on-surface-variant mb-4">Learning & Development</p>
          <p className="body-lg text-on-surface/80 leading-relaxed font-light mb-6">
            Corporate workshops, team-building programs, trainings, and conferences. Practical sessions your teams will actually use.
          </p>
          <ul className="flex flex-wrap gap-3">
            {["Workshops", "Trainings", "Team Building", "Conferences", "Team Development"].map(t => (
              <li key={t} className="px-4 py-1 border border-outline-variant/30 rounded-full label-md text-primary/80">{t}</li>
            ))}
          </ul>
          <Link href="/services/sibol" className="inline-flex items-center gap-1.5 label-md text-on-surface-variant/60 hover:text-primary transition-colors duration-300 mt-6 group/learn">
            Learn More
            <svg className="w-3 h-3 transition-transform duration-300 group-hover/learn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* 06 GUHIT */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-6 md:pr-20 order-2 md:order-1 text-right mt-8 md:mt-0 flex flex-col items-end">
          <span className="headline-sm text-primary/40 font-bold block mb-4">06</span>
          <h2 className="headline-lg text-primary mb-6">GUHIT</h2>
          <p className="label-sm text-on-surface-variant mb-4">Design & Visual Identity</p>
          <p className="body-lg text-on-surface/80 leading-relaxed font-light mb-6">
            Graphic design, branding, out-of-home advertising, and illustration — building cohesive visual identities for brands, campaigns, and events alike.
          </p>
          <ul className="flex flex-wrap gap-3 justify-end">
            {["Graphic Design", "Logo Creation", "Branding", "Billboard Ads", "Illustration"].map(t => (
              <li key={t} className="px-4 py-1 border border-outline-variant/30 rounded-full label-md text-primary/80">{t}</li>
            ))}
          </ul>
          <Link href="/services/guhit" className="inline-flex items-center gap-1.5 label-md text-on-surface-variant/60 hover:text-primary transition-colors duration-300 mt-6 group/learn">
            Learn More
            <svg className="w-3 h-3 transition-transform duration-300 group-hover/learn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="md:col-span-6 order-1 md:order-2">
          <div className="aspect-square relative overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80" 
              alt="Design and Branding" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* 07 UGNAY, 08 DALOY, 09 TAYO (Triptych) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
        
        {/* UGNAY */}
        <div className="group cursor-default flex flex-col">
          <div className="border-t border-primary/20 pt-8 mb-6">
            <span className="headline-sm text-primary/40 font-bold">07</span>
          </div>
          <h3 className="headline-md text-primary mb-4">UGNAY</h3>
          <p className="label-sm text-on-surface-variant mb-6 h-[2rem]">Community Management & Growth</p>
          <p className="body-md text-on-surface/80 leading-relaxed font-light mb-6">
            End-to-end community management, audience development, and influencer partnerships — building and retaining engaged digital communities across any platform.
          </p>
          <ul className="flex flex-wrap gap-2 mb-4">
            {["Community Management", "Audience Retention", "Grassroots Engagement", "Channel Moderation", "Influencer Seeding"].map(t => (
              <li key={t} className="px-3 py-1 border border-outline-variant/30 rounded-full label-md text-primary/80">{t}</li>
            ))}
          </ul>
          <Link href="/services/ugnay" className="inline-flex items-center gap-1.5 label-md text-on-surface-variant/60 hover:text-primary transition-colors duration-300 mb-6 group/learn">
            Learn More
            <svg className="w-3 h-3 transition-transform duration-300 group-hover/learn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <div className="aspect-square relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 mt-auto">
            <Image 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
              alt="Community Engagement" 
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* DALOY */}
        <div className="group cursor-default flex flex-col md:mt-16">
          <div className="border-t border-primary/20 pt-8 mb-6">
            <span className="headline-sm text-primary/40 font-bold">08</span>
          </div>
          <h3 className="headline-md text-primary mb-4">DALOY</h3>
          <p className="label-sm text-on-surface-variant mb-6 h-[2rem]">Technology & Development</p>
          <p className="body-md text-on-surface/80 leading-relaxed font-light mb-6">
            Full-stack web and mobile development, custom software solutions, and workflow automation — from business platforms and SaaS products to event-day applications.
          </p>
          <ul className="flex flex-wrap gap-2 mb-4">
            {["Web & Mobile Apps", "Custom Software", "Workflow Automation", "Analytics Dashboards", "Interactive Kiosks"].map(t => (
              <li key={t} className="px-3 py-1 border border-outline-variant/30 rounded-full label-md text-primary/80">{t}</li>
            ))}
          </ul>
          <Link href="/services/daloy" className="inline-flex items-center gap-1.5 label-md text-on-surface-variant/60 hover:text-primary transition-colors duration-300 mb-6 group/learn">
            Learn More
            <svg className="w-3 h-3 transition-transform duration-300 group-hover/learn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <div className="aspect-square relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 mt-auto">
            <Image 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" 
              alt="Tech Ecosystem" 
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* TAYO */}
        <div className="group cursor-default flex flex-col md:mt-32">
          <div className="border-t border-primary/20 pt-8 mb-6">
            <span className="headline-sm text-primary/40 font-bold">09</span>
          </div>
          <h3 className="headline-md text-primary mb-4">TAYO</h3>
          <p className="label-sm text-on-surface-variant mb-6 h-[2rem]">Experiential Architecture</p>
          <p className="body-md text-on-surface/80 leading-relaxed font-light mb-6">
            Custom fabrication, spatial design, and large-scale builds — from event stages and exhibition booths to permanent retail spaces and immersive environments.
          </p>
          <ul className="flex flex-wrap gap-2 mb-4">
            {["Stage Fabrication", "Custom Booths", "Spatial Design", "Props & Theming", "Permanent Installations"].map(t => (
              <li key={t} className="px-3 py-1 border border-outline-variant/30 rounded-full label-md text-primary/80">{t}</li>
            ))}
          </ul>
          <Link href="/services/tayo" className="inline-flex items-center gap-1.5 label-md text-on-surface-variant/60 hover:text-primary transition-colors duration-300 mb-6 group/learn">
            Learn More
            <svg className="w-3 h-3 transition-transform duration-300 group-hover/learn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <div className="aspect-square relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 mt-auto">
            <Image 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
              alt="Experiential Architecture" 
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Marble Overlay specific to TAYO */}
            <div className="absolute inset-0 marble-texture mix-blend-overlay opacity-10"></div>
          </div>
        </div>

      </div>

    </section>
  );
}
