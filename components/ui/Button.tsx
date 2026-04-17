import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
};

export default function Button({ variant = 'primary', size = 'md', href, onClick, children, className = '' }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out z-10 border-0 cursor-pointer rounded-none outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface";
  
  const sizeClasses = {
    sm: variant === 'tertiary' ? "label-sm" : "px-5 py-3 label-sm",
    md: variant === 'tertiary' ? "label-md" : "px-8 py-4 label-md",
    lg: variant === 'tertiary' ? "label-lg" : "px-12 py-5 label-lg",
  };

  let variantClasses = "";
  if (variant === 'primary') {
    variantClasses = "bg-gradient-to-br from-[#E9C255] to-[#BF9B31] text-[#051710] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(233,194,85,0.4)]";
  } else if (variant === 'secondary') {
    variantClasses = "bg-transparent text-primary border border-[#4D4636]/80 hover:bg-surface-container-high transition-colors";
  } else if (variant === 'tertiary') {
    variantClasses = "bg-transparent text-on-surface p-0 relative group";
  }

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses} ${className}`;

  const renderContent = () => {
    if (variant === 'tertiary') {
      return (
        <>
          {children}
          <span className="absolute -bottom-1.5 left-1/2 h-[1px] w-full -translate-x-1/2 bg-primary transition-all duration-400 ease-[cubic-bezier(0.25,0,0,1)] group-hover:w-[120%] group-hover:h-[2px]"></span>
        </>
      );
    }
    return children;
  };

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick}>
      {renderContent()}
    </button>
  );
}
