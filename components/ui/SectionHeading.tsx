import Reveal from "@/components/ui/Reveal";

interface SectionHeadingProps {
  overline: string;
  title: string;
  description?: string;
  className?: string;
}

/** v2 compact heading: brass-ruled eyebrow, display-sm title, mist description. */
export default function SectionHeading({ overline, title, description, className = "" }: SectionHeadingProps) {
  return (
    <Reveal className={`flex max-w-3xl flex-col gap-6 ${className}`}>
      <div className="flex items-center gap-4 text-mist">
        <span aria-hidden="true" className="h-px w-10 bg-brass" />
        <span className="eyebrow">{overline}</span>
      </div>
      <h2 className="display-sm text-ivory text-balance whitespace-pre-line">{title}</h2>
      {description && <p className="body-lg max-w-[52ch] text-mist">{description}</p>}
    </Reveal>
  );
}
