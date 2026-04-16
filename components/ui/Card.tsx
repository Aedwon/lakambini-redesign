import Image from 'next/image';
import { ReactNode } from 'react';

type CardProps = {
  imageSrc?: string;
  imageAlt?: string;
  aspectRatio?: string;
  children: ReactNode;
  className?: string;
};

export default function Card({ imageSrc, imageAlt = "Featured image", aspectRatio = "aspect-[4/3]", children, className = '' }: CardProps) {
  return (
    <div className={`bg-surface-container-high relative overflow-hidden group rounded-none flex flex-col ${className}`}>
      {imageSrc && (
        <div className={`relative w-full ${aspectRatio} overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-600 group-hover:bg-transparent"></div>
          <Image 
            src={imageSrc} 
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-600 ease-out group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 flex flex-col gap-4 relative z-20 flex-grow">
        {children}
      </div>
    </div>
  );
}
