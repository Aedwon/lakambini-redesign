import Button from "@/components/ui/Button";

type CTABannerProps = {
  title?: string;
  buttonText?: string;
  href?: string;
};

export default function CTABanner({ 
  title = "Ready to elevate your next endeavor?", 
  buttonText = "Start the Conversation",
  href = "/contact"
}: CTABannerProps) {
  return (
    <section className="bg-surface-container-highest relative py-32 overflow-hidden mx-auto max-w-[1280px] my-12 mb-24 ghost-border flex w-full">
      {/* Texture bg overlay for marble effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10 pointer-events-none"></div>
      
      <div className="relative z-20 px-6 flex flex-col items-center text-center gap-10 max-w-4xl mx-auto w-full">
        <h2 className="headline-md text-on-surface font-light leading-snug">
          {title}
        </h2>
        <Button variant="primary" size="lg" href={href}>
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
