import Image from "next/image";

export default function DivisionsEditorial() {
  return (
    <section className="px-12 max-w-[1440px] mx-auto space-y-32 mb-48 text-on-surface">
      
      {/* 01 TANGHAL */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <div className="relative overflow-hidden group aspect-[16/9]">
            <Image 
              src="/images/placeholder-home-1.jpg" 
              alt="Live Entertainment Stage" 
              layout="fill" 
              objectFit="cover" 
              className="transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
          </div>
        </div>
        <div className="md:col-span-5 md:pl-16 flex flex-col items-start text-left mt-8 md:mt-0">
          <span className="font-headline text-primary/40 text-5xl md:text-6xl font-bold block mb-4">01</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">TANGHAL</h2>
          <p className="font-label text-on-surface-variant text-sm tracking-widest uppercase mb-4">Live Entertainment & Talent</p>
          <p className="font-body text-lg text-on-surface/80 leading-relaxed mb-8 font-light">
            Event Performance, Solo artist concert, Band concert, Music festival, Virtual concert, Talent management. We curate moments that resonate.
          </p>
          <ul className="flex flex-wrap gap-3">
            {["Event Performance", "Concerts", "Festivals", "Talent Management"].map(t => (
              <li key={t} className="px-4 py-1 border border-outline-variant/30 rounded-full text-xs font-label text-primary/80">{t}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 02 LIKHA */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5 md:pr-16 order-2 md:order-1 flex flex-col items-end md:items-start text-right md:text-left mt-8 md:mt-0">
          <span className="font-headline text-primary/40 text-5xl md:text-6xl font-bold block mb-4">02</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">LIKHA</h2>
          <p className="font-label text-on-surface-variant text-sm tracking-widest uppercase mb-4">Multimedia Production</p>
          <p className="font-body text-lg text-on-surface/80 leading-relaxed mb-8 font-light">
            Event video production, Music video production, Video editing, Motion graphic design, Sound design. Visual storytelling elevated.
          </p>
          <ul className="flex flex-wrap gap-3 justify-end md:justify-start">
            {["Video Production", "Music Videos", "Motion Graphics", "Sound Design"].map(t => (
              <li key={t} className="px-4 py-1 border border-outline-variant/30 rounded-full text-xs font-label text-primary/80">{t}</li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-7 order-1 md:order-2">
          <div className="relative overflow-hidden group aspect-[4/3]">
            <Image 
              src="/images/placeholder-service-1.jpg" 
              alt="Multimedia Production Studio" 
              layout="fill" 
              objectFit="cover" 
              className="transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* 03 MERKATO & 04 TIPON (Side-by-side Bento) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        
        {/* MERKATO */}
        <div className="bg-surface-container-low p-8 md:p-12 hover:bg-surface-container transition-colors duration-500 rounded-none group flex flex-col h-full">
          <span className="font-headline text-primary/40 text-4xl md:text-5xl font-bold block mb-4">03</span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">MERKATO</h2>
          <p className="font-label text-on-surface-variant text-xs tracking-widest uppercase mb-6">Experiential Marketing</p>
          <p className="font-body text-on-surface/80 leading-relaxed font-light mb-8 flex-grow">
            Product sampling, Pop up shops, Street team, Guerilla marketing, Affiliate marketing, Branded swag. We disrupt the ordinary.
          </p>
          <div className="aspect-video relative overflow-hidden mt-4">
            <Image 
              src="/images/placeholder-service-2.jpg" 
              alt="Experiential Activations" 
              layout="fill" 
              objectFit="cover" 
              className="transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* TIPON */}
        <div className="bg-surface-container-low p-8 md:p-12 hover:bg-surface-container transition-colors duration-500 rounded-none md:mt-24 group flex flex-col h-full">
          <span className="font-headline text-primary/40 text-4xl md:text-5xl font-bold block mb-4">04</span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">TIPON</h2>
          <p className="font-label text-on-surface-variant text-xs tracking-widest uppercase mb-6">Events & Activations</p>
          <p className="font-body text-on-surface/80 leading-relaxed font-light mb-8 flex-grow">
            Event sponsorship, Trade shows, Fun runs, Outreach programs, Interactive installations, Mall activations. Precision logistics orchestration.
          </p>
          <div className="aspect-video relative overflow-hidden mt-4">
            <Image 
              src="/images/placeholder-service-3.jpg" 
              alt="Corporate Gatherings" 
              layout="fill" 
              objectFit="cover" 
              className="transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>

      </div>

      {/* 05 SIBOL */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-6">
          <div className="relative aspect-[3/2] overflow-hidden p-1 bg-gradient-to-tr from-primary/20 to-transparent">
            <Image 
              src="/images/placeholder-home-2.jpg" 
              alt="Team Workshop" 
              layout="fill" 
              objectFit="cover" 
              className="grayscale hover:grayscale-0 transition-all duration-1000 ease-out z-10"
            />
          </div>
        </div>
        <div className="md:col-span-6 md:pl-20 mt-8 md:mt-0">
          <span className="font-headline text-primary/40 text-4xl md:text-5xl font-bold block mb-4">05</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">SIBOL</h2>
          <p className="font-label text-on-surface-variant text-xs tracking-widest uppercase mb-4">Learning & Development</p>
          <p className="font-body text-lg text-on-surface/80 leading-relaxed font-light mb-6">
            Workshops, Trainings, Team building, Conferences, Team development. Cultivating the internal flame to foster resilient growth.
          </p>
          <ul className="flex flex-wrap gap-3">
            {["Workshops", "Trainings", "Team Building"].map(t => (
              <li key={t} className="px-4 py-1 border border-outline-variant/30 rounded-full text-xs font-label text-primary/80">{t}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 06 GUHIT */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-6 md:pr-20 order-2 md:order-1 text-right mt-8 md:mt-0 flex flex-col items-end">
          <span className="font-headline text-primary/40 text-4xl md:text-5xl font-bold block mb-4">06</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">GUHIT</h2>
          <p className="font-label text-on-surface-variant text-xs tracking-widest uppercase mb-4">Design & Visual Identity</p>
          <p className="font-body text-lg text-on-surface/80 leading-relaxed font-light mb-6">
            OOH Ads, Billboard ads, Graphic design, Logo creation, Branding design, Color grading, Illustration. Defining the visual soul.
          </p>
          <ul className="flex flex-wrap gap-3 justify-end">
            {["Graphic Design", "Logo Creation", "Billboard Ads"].map(t => (
              <li key={t} className="px-4 py-1 border border-outline-variant/30 rounded-full text-xs font-label text-primary/80">{t}</li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-6 order-1 md:order-2">
          <div className="bg-surface-container-high p-12 md:p-16 aspect-square flex items-center justify-center">
            <div className="border border-primary/20 w-full h-full flex flex-col items-center justify-center text-center space-y-6">
              <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"></path>
              </svg>
              <span className="font-headline text-xl md:text-2xl tracking-[0.2em] text-on-surface">CRAFTED IDENTITY</span>
            </div>
          </div>
        </div>
      </div>

      {/* 07 UGNAY, 08 DALOY, 09 TAYO (Triptych) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
        
        {/* UGNAY */}
        <div className="group cursor-default flex flex-col">
          <div className="border-t border-primary/20 pt-8 mb-6">
            <span className="font-headline text-primary/40 text-2xl font-bold">07</span>
          </div>
          <h3 className="font-headline text-3xl font-bold text-primary mb-4">UGNAY</h3>
          <p className="font-label text-on-surface-variant text-xs tracking-widest uppercase mb-6 h-[2rem]">Community & Engagement</p>
          <p className="font-body text-sm text-on-surface/80 leading-relaxed font-light mb-8 flex-grow">
            Community management, Audience retention, Grassroots engagement, Influencer & KOL seeding. Building loyal audiences through authentic connection.
          </p>
          <div className="aspect-square relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 mt-auto">
            <Image 
              src="/images/placeholder-service-1.jpg" 
              alt="Community Engagement" 
              layout="fill" 
              objectFit="cover" 
              className="transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* DALOY */}
        <div className="group cursor-default flex flex-col md:mt-16">
          <div className="border-t border-primary/20 pt-8 mb-6">
            <span className="font-headline text-primary/40 text-2xl font-bold">08</span>
          </div>
          <h3 className="font-headline text-3xl font-bold text-primary mb-4">DALOY</h3>
          <p className="font-label text-on-surface-variant text-xs tracking-widest uppercase mb-6 h-[2rem]">Technology & Development</p>
          <p className="font-body text-sm text-on-surface/80 leading-relaxed font-light mb-8 flex-grow">
            Web & mobile app development, Custom event applications, Survey kiosks, Automated operational workflows, Real-time analytics dashboards. The digital backbone.
          </p>
          <div className="aspect-square relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 mt-auto">
            <Image 
              src="/images/placeholder-tech.jpg" 
              alt="Tech Ecosystem" 
              layout="fill" 
              objectFit="cover" 
              className="transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* TAYO */}
        <div className="group cursor-default flex flex-col md:mt-32">
          <div className="border-t border-primary/20 pt-8 mb-6">
            <span className="font-headline text-primary/40 text-2xl font-bold">09</span>
          </div>
          <h3 className="font-headline text-3xl font-bold text-primary mb-4">TAYO</h3>
          <p className="font-label text-on-surface-variant text-xs tracking-widest uppercase mb-6 h-[2rem]">Experiential Architecture</p>
          <p className="font-body text-sm text-on-surface/80 leading-relaxed font-light mb-8 flex-grow">
            Stage Design & Fabrication, Immersive Physical Rooms, Custom Event Booths, Spatial Planning, Large-Scale Installation Art. Defining the physical wonder.
          </p>
          <div className="aspect-square relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 mt-auto">
            <Image 
              src="/images/placeholder-home-2.jpg" 
              alt="Experiential Architecture" 
              layout="fill" 
              objectFit="cover" 
              className="transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Marble Overlay specific to TAYO */}
            <div className="absolute inset-0 marble-texture mix-blend-overlay opacity-10"></div>
          </div>
        </div>

      </div>

    </section>
  );
}
