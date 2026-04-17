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
    <div className={`bg-surface-container-high relative overflow-hidden group rounded-none flex flex-col ${aspectRatio} ${className}`}>
      {imageSrc && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-colors duration-600 group-hover:from-black/70"></div>
          <Image 
            src={imageSrc} 
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-600 ease-out group-hover:scale-105"
          />
        </>
      )}
      <div className="p-8 md:p-10 flex flex-col gap-4 relative z-20 justify-end h-full">
        {children}
      </div>
    </div>
  );
}
