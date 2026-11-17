import React from 'react';

export default function Logo({ variant = 'full', light = true, size = 'default', className = '' }) {
  const textColor = light ? '#ffffff' : '#121212';
  
  // High-res official brand monogram circle from reference/picture-1.png
  const IconImg = (
    <div className={`relative rounded-full overflow-hidden flex-shrink-0 border border-dimitri-gold/40 shadow-sm ${
      size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-14 h-14' : 'w-10 h-10'
    } transition-transform duration-300 group-hover:scale-105`}>
      <img 
        src="./assets/reference/picture-1.png" 
        alt="Logo Dimitri" 
        className="w-full h-full object-cover"
      />
    </div>
  );

  // Custom typography for DIMITRI matching the store facade in picture-3.png
  const Wordmark = (
    <div className="flex flex-col">
      <div className="flex items-center tracking-[0.24em] font-brand-geometric font-extrabold text-xl md:text-2xl leading-none">
        <span style={{ color: textColor }}>DIMITRI</span>
      </div>
      <span className="text-[9px] uppercase tracking-[0.38em] font-medium text-dimitri-gold mt-1.5 font-sans">
        Alfaiataria & Moda Contemporânea
      </span>
    </div>
  );

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {IconImg}
      </div>
    );
  }

  if (variant === 'wordmark') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {Wordmark}
      </div>
    );
  }

  return (
    <div className={`group inline-flex items-center gap-3.5 ${className}`}>
      {IconImg}
      {Wordmark}
    </div>
  );
}