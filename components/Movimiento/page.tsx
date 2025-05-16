// components/LogoHero.tsx
import React from 'react';
import Image from 'next/image';

export default function LogoHero() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* 1) Video de fondo */}
      <video
        src="/swirl-loop.webm"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 2) Capa de semitransparencia para oscurecer un poco */}
      <div className="absolute inset-0 bg-black/30" />

      {/* 3) Logo BARUC centrado */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <Image
          src="/icons/baruc.png"
          alt="BARUC"
          width={200}
          height={200}
          className="animate-fadeIn"
        />
      </div>
    </div>
  );
}
