type SectionHeadingProps = {
  overline: string;
  title: string;
  description?: string;
  offsetRight?: boolean;
  className?: string;
};

export default function SectionHeading({ overline, title, description, offsetRight, className = '' }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-4 ${offsetRight ? 'md:pr-10 md:ml-auto md:max-w-2xl' : 'max-w-3xl'} ${className}`}>
      <span className="label-sm text-on-surface-variant tracking-widest uppercase">{overline}</span>
      <h2 className="headline-lg text-on-surface whitespace-pre-line">{title}</h2>
      {description && (
        <p className="body-lg text-on-surface-variant font-light max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}
