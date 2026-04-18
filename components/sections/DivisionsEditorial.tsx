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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbv1OB_6Oj23D-XZv0lvjPKdm4BQ1eHFX4oUpX44-zkDmxm6KFpW64k-gm7peUFj6GdzNkKVZWu-n92kdjHDJvWYFWvp4PQnF2M82ybViOAwruZ_MwEtp5ZSGBsmLCp0sj0AGbei7YDjeJvRRLZ91I14HNLbXRrBEmDey9wY9SCB7RM3PiYl-UrSKQN1HmZsYHnsXesVqCmgFfjPeoP6ZeJPGdTr2rH3Y9EiOVghbKxt7qmRVuesm8mleR0t76bJng7kPyaD1yZw" 
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
          <div className="relative overflow-hidden group aspect-[16/9]">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk3X5pFAKmN_1Rk31CZjq-lEk_sir7NP4wfJj33ZPzmjWe-JiB2wmT2CEGhB_IddzsVHpqHG1BxFpXTIyvbJ4pKoCu_0ycU6KASBHDyhgH3CFiK0QhXKSeNQNDwZaq8Mxkq6KAOQTmqGIthLm0Rq8pdrKGkg38l5rFttUiSf2942uAvzZV4lWAfIm7dm1E8RLiEdZ7pAsjeUEeioLGQepZJhjgRi1x6hspiunI8LcCfiI7ujyKn5IQPFpyoNuiDSZoAoJYecdslA" 
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
          <div className="aspect-[16/9] relative overflow-hidden mt-auto">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4IYflde-5uKG4_IdDA5sFMqbKLCdrctITGSYZU35Q4BhXnH-I2S1psPfJ1oAq5wsKTfLegW0vkBLZPs9EMM6J7KfqMotWB0WpiQ5qLM4na-RXhtUjFQxcHPjYvUDbUGPOghTV3z-7Hyp9BRdnCjdzN8_aKJMHkGsiVJh0xmI1H8fnqV8V-5IrcdArp3jbM0LpiznWBHH3r4lljx1H3b-X1FtM5RWHUSJBpWrunBai4VjDCohTd3At9cFJWbzB2__4Hqo4EGVyBw" 
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
          <div className="aspect-[16/9] relative overflow-hidden mt-auto">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0JQyRqRzmsdQgM9zFFVQO2MiQVAWuZ2HXcqQJlYaSQIPFubppg0tZEdLlprMhZ6elBZa2_rUUpDoO0TG5oE1xRGNqXe9Z8mHisWVa8aQGKiTN1qSKXMqpfhDMLAz8YxScwHwByckpCGi8eRQ7uM2DXHAm4nHR0iD0ionIJ4XUmSwl8ewlxytgjMyumz3BDTD2rXwC0QK9Iii--IifmI2rkF6tRXpjbQ_AcinDNkGHaLIf2-KAp0YChShrxUpZM8VO3K4LCCzdDQ" 
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
            <div className="absolute inset-1 z-10 overflow-hidden">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwGoXmXtDTzSMsNY100PVeu86ZIRqp8UKZrTWPibWIZoWW1nY437fO6H7FJp2GYungB8gdbvU_hxMOTCJqyD9svCq6w1EelZIy-Qn9_NUxx0NLxJK1QXfCV2PR-AFEuQGP_Chq79EEaIqnlJX8nquoHIJOm3wxjQAdDHTP5dff_dES3llGTbntxLtry6UD4DRmm3YqMPSf1mbnbCYCweQEbif4Vp9ylXOfB6FefDyRzjHC5RQq9kSOT42Fiscp7pPeyF8Jg5k12A" 
                alt="Team Workshop" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
              />
            </div>
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
          <div className="relative aspect-[3/2] overflow-hidden p-1 bg-gradient-to-tr from-primary/20 to-transparent">
            <div className="absolute inset-1 z-10 overflow-hidden">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv0LWNdkItCApsrlddI8l3cjZhgBXE9NjxyWCxLFVQHMaIAhO0seLBPlBa3TpKnShjj8ZJEZkKr_NlAQUk2twoEmsZZO2fTRDycIlHlY4hX39jdVzChfmOZs2fb5tT72iUsRsdjHtah_aYXSjc6NMn-0OGEfLgPeDhIwgrXyCKSbuPvdL5DZBGCerKIU5-HEntwEaDvnphXFdZGtEzRGDN7OxLDzBMWKCja47n3pqqWlGg5Ok61cdLckK97goMQhW4wkATZQw-bA" 
                alt="Brand Identity and Design Branding on dark premium paper" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
              />
            </div>
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
          <div className="aspect-[1/1] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 mt-auto">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4eiDfctMeJcVk7HYvs8UAhmIMJ67kILBLt0frvq8_F7QH4o4jF4eB5QtSZ4vazKyqHTy0V7duiw3zCsuHt_M8f8omwr3JA3kEYOdxCnfcwE9pEnhpoQOs6NdynD3wy8KgD5m_6GHBAJ8C2TAc94G3f-ErERsIyLtn4vMm-wZ3WxENNcdcPPWZDvwb6GDaMRjfFBrfjI82Cq5XltalzhJZo06eT89sR4QrPs5Wc8X7Lmizn-eAS_2L5PyOlFp29cHFpfAERr-8xw" 
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
          <div className="aspect-[1/1] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 mt-auto">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzw4ZgmWsekGVodBLQvlhHSXj3NXu3sArxBpxrWulOgFKfL1KQXMd3FNG_6ttmzUeMnM60_XoDuqrC0vRVhf2c2wTgZYORPds7On4ArJkBj1JQYjjYxCEQiJiprq7Ve2FJZ0ege1kQ-x7Vg4Ckgq_2_a42URTOPCzasIVOJ850KEUkf0gf76rSAKA89_JVc0cB7W_keklDu1Kv6IfveNAiEjZnlGtax_IkVQf6PtjihCn1terSwCR8NyF2Pe4tEuD3KlTLssdTGw" 
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
          <div className="aspect-[1/1] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 mt-auto">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCRQvVUwENj6Ab7rpzOh20L0PfdPVBg7tIiyF4tkJEvnqicqqBSXxvG-IhpnyjzZBZMIE9a1VqPlhss74l8AsZmXJrIj92VbbdVGKiAQSme2nIy2P5wM972D6x4AWoem_1Y2L4zWHfwP4HqlBCcCtOEd1sR1Iw-mRgF5Z8quJOIzPXFu2YFtbmUfw4KcQkEvvKirK5K9NWPmax9muMq-r5mWTcPMoDewR2bAPBJp0Fdup7aF2H_5FotfeNeRfrYXTROTrKX6JCSg" 
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
