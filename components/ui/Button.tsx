import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

/** Small arrow that slides on hover; inherits the text colour. */
const Arrow = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    className="h-3.5 w-3.5 shrink-0 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
  >
    <path d="M1 8h13M9 3l5 5-5 5" />
  </svg>
);

/**
 * v2 buttons
 * - primary:   brass fill, ink text, one per view, the main call to action
 * - secondary: hairline ivory outline, the quiet alternative
 * - tertiary:  text link with an underline that draws in on hover
 */
export default function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  className = "",
  type,
  disabled,
}: ButtonProps) {
  const sizes = {
    sm: "h-10 px-5 gap-2.5 text-[0.8125rem]",
    md: "h-12 px-7 gap-3 text-[0.875rem]",
    lg: "h-14 px-9 gap-3.5 text-[0.9375rem]",
  };

  const variants = {
    primary:
      "bg-brass text-ink hover:bg-brass-soft rounded-full",
    secondary:
      "text-ivory rounded-full ring-1 ring-inset ring-ivory/30 hover:ring-ivory/70 hover:bg-ivory/[0.04]",
    tertiary:
      "text-ivory rounded-none h-auto px-0 relative after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-full after:origin-left after:scale-x-[0.35] after:bg-brass after:transition-transform after:duration-500 after:ease-[var(--ease-out-expo)] hover:after:scale-x-100",
  };

  const classes = [
    "group inline-flex items-center justify-center font-sans font-medium tracking-[0.01em] whitespace-nowrap",
    "transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
    "focus-visible:outline-1 focus-visible:outline-brass focus-visible:outline-offset-4",
    variant === "tertiary" ? "gap-2.5 text-[0.875rem]" : sizes[size],
    variants[variant],
    className,
  ].join(" ");

  const content = (
    <>
      <span>{children}</span>
      <Arrow />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
