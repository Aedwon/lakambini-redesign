import { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

interface SectionHeaderProps {
  /** Short eyebrow label, e.g. "Selected work" */
  label: string;
  /** Display headline; wrap one or two words in <em> for the brass italic accent */
  title: ReactNode;
  /** Optional supporting copy or a link, shown on the right on desktop */
  aside?: ReactNode;
  className?: string;
}

/**
 * The standard v2 section opener:
 *   ──── SELECTED WORK
 *   Big serif headline            short aside copy
 */
export default function SectionHeader({ label, title, aside, className = "" }: SectionHeaderProps) {
  return (
    <header className={`mb-14 md:mb-20 ${className}`}>
      <Reveal>
        <div className="flex items-center gap-4 text-mist">
          <span aria-hidden="true" className="h-px w-10 bg-brass/70" />
          <span className="eyebrow">{label}</span>
        </div>
      </Reveal>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
        <Reveal delay={0.05} className="lg:col-span-8">
          <h2 className="display-md text-ivory text-balance [&_em]:italic [&_em]:text-brass">{title}</h2>
        </Reveal>
        {aside && (
          <Reveal delay={0.12} className="lg:col-span-4 lg:pb-2 body-md text-mist max-w-[46ch]">
            {aside}
          </Reveal>
        )}
      </div>
    </header>
  );
}
