type SectionHeadingProps = {
  overline: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({ overline, title, description, className = '' }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-6 max-w-3xl ${className}`}>
      <span className="label-sm text-on-surface-variant tracking-widest uppercase">{overline}</span>
      <h2 className="headline-lg text-on-surface whitespace-pre-line leading-tight">{title}</h2>
      {description && (
        <p className="body-lg text-on-surface-variant font-light max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}
