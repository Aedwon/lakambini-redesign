import Image from "next/image";

export default function FounderStory() {
  return (
    <section className="bg-surface-container-low py-32 w-full mt-24">
      <div className="max-w-[1440px] mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          
          {/* Portrait Column */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image 
                src="/images/placeholder-founder.jpg" 
                alt="Anchie Rosas" 
                layout="fill" 
                objectFit="cover" 
              />
              <div className="absolute inset-0 border-[20px] border-surface-container-low opacity-20 pointer-events-none"></div>
            </div>
          </div>
          
          {/* Text Column */}
          <div className="md:col-span-7 order-1 md:order-2 md:pl-16">
            <h2 className="headline-lg text-5xl md:text-7xl mb-12 leading-tight text-on-surface">
              The Vision of <br />
              <span className="text-primary italic">Anchie Rosas</span>
            </h2>
            <div className="space-y-8 font-light text-on-surface-variant text-lg leading-loose">
              <p>
                "I started Lakambini with a simple belief: the best events happen when the host can be fully present. We handle the complexity so you can focus on what matters — your guests, your message, your moment."
              </p>
              <p>
                With over 10 years of navigating the complexities of high-stakes event production, her vision remains the heartbeat of our agency. One team, one point of contact, consistently excellent results.
              </p>
              <div className="pt-8">
                <div className="h-px w-24 bg-primary/40 mb-4"></div>
                <span className="font-headline text-2xl text-primary">Founder & Creative Director</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
