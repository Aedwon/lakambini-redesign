/**
 * Button — Reusable UI button.
 * Slot: /components/ui/
 */
import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<string, string> = {
    primary: "bg-white text-black hover:bg-gray-200 focus:ring-white",
    secondary:
      "border border-white/20 text-white hover:bg-white/10 focus:ring-white/50",
    ghost: "text-white hover:underline",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
