// components/Demo/page.tsx

import React from 'react';
import Image from 'next/image';

type Feature = {
  description: string;
  image: string;
  alt: string;
  /** Opcional: tamaño en píxeles para el <Image> */
  width?: number;
  height?: number;
};

const features: Feature[] = [
  {
    description: 'Inicia al instante con un QR',
    image: '/Baruc5.jpg',
    alt: 'Atajos de teclado en acción',
    width: 600,  // ahora igual al resto
    height: 300, // ahora igual al resto
  },
  {
    description: 'Selecciona a quienes quieres que la IA responda',
    image: '/Baruc2.jpg',
    alt: 'Calendario de equipo centralizado',
    width: 600,
    height: 300,
  },
  {
    description: 'Acceso a chats, eliminación, desactivación y activación de usuarios',    
    image: '/Baruc3.jpg',
    alt: 'Bloques de tiempo estructurados',
    width: 600,
    height: 300,
  },
];

export default function Demo() {
  return (
    <section className="py-16 bg-gradient-to-r from-(255,227,165,1) to-(130,57,12,1)">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-5xl font-bold text-white">
          No pierdas Leads
        </h2>
        <h2 className="text-4xl font-bold text-purple-400 mt-2">
          Has que tu servicio al cliente sea BARUC
        </h2>
       
      </div>

      {/* Grid uniforme de 3 columnas */}
      <div className="mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-transparent rounded-2xl overflow-hidden max-w-sm w-full mx-auto"
          >
            <div className="flex justify-center pt-6">
              <Image
                src={feature.image}
                alt={feature.alt}
                layout="intrinsic"
                width={feature.width}
                height={feature.height}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="px-6 py-4 text-center">
              <p className="text-gray-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
