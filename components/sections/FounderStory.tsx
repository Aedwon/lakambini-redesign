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
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
                alt="Anchie Rosas" 
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 border-[20px] border-surface-container-low opacity-20 pointer-events-none"></div>
            </div>
          </div>
          
          {/* Text Column */}
          <div className="md:col-span-7 order-1 md:order-2 md:pl-16">
            <h2 className="display-sm text-on-surface mb-12 leading-tight">
              Built by <br />
              <span className="text-primary italic">Anchie Rosas</span>
            </h2>
            <div className="space-y-8 font-light text-on-surface-variant body-lg leading-loose">
              <p>
                &ldquo;I started Lakambini because I saw the same problem everywhere — clients juggling five different vendors and still not getting the result they wanted. One team, one standard. That was the fix.&rdquo;
              </p>
              <p>
                Ten years later, that model hasn&apos;t changed. We still run lean, stay hands-on, and deliver consistent results — whether it&apos;s a 200-person corporate summit or a nationwide activation.
              </p>
              <div className="pt-8">
                <div className="h-px w-24 bg-primary/40 mb-4"></div>
                <span className="title-lg text-primary">Founder &amp; CEO</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
