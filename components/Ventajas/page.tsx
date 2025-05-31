// components/Ventajas/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { CheckCircle, XCircle } from 'lucide-react';

const negatives = [
  'Mensajes sin atender y leads perdidos en el caos.',
  'Ningún flujo automatizado: todo manual y lento.',
  'Sin control de IA: respuestas inconsistentes.',
  'Pagos fuera de WhatsApp: pierdes conversiones.',
];

const positives = [
  'Crea flujos de conversación visuales y escalables.',
  'Enciende/apaga la IA cuando quieras para atender a quienes decidas.',
  'Implementa cobros y pagos directamente en WhatsApp, sin salir de la app.',
  'Centraliza y etiqueta contactos para segmentar y priorizar leads.',
  'Responde FAQ con plantillas automáticas y ahorra horas de trabajo.',
];

const floatingIcons = [
  '/icons/wa.png',
  '/icons/baruc.png',
  '/icons/pesos.png',
  '/icons/robotb.png',
  '/icons/reloj.png',
];

type IconState = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  src: string;
};

export default function Ventajas() {
  const [icons, setIcons] = useState<IconState[]>([]);

  // Inicializar posiciones y **velocidades más rápidas**
  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    setIcons(
      floatingIcons.map((src) => {
        const angle = Math.random() * 2 * Math.PI;
        // Aumentamos el rango de velocidad: entre 1 y 3 px por frame
        const speed = Math.random() * 2 + 1;
        return {
          src,
          x: Math.random() * (w - 40),
          y: Math.random() * (h - 40),
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
        };
      })
    );
  }, []);

  // Animación y rebote
  useEffect(() => {
    if (!icons.length) return;
    let rafId: number;
    const tick = () => {
      setIcons((prev) =>
        prev.map(({ x, y, vx, vy, src }) => {
          const w = window.innerWidth;
          const h = window.innerHeight;
          const nx = x + vx;
          const ny = y + vy;
          let nvx = vx;
          let nvy = vy;
          if (nx < 0 || nx > w - 40) nvx = -nvx;
          if (ny < 0 || ny > h - 40) nvy = -nvy;
          return { src, x: nx, y: ny, vx: nvx, vy: nvy };
        })
      );
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [icons]);

  return (
    <section id="ventajas" className="relative py-20">
      {/* remolino de fondo */}
      <div className="bg-swirl absolute inset-0" />

      {/* óvalo rosa en esquina superior izquierda */}
      <div
        className="
          absolute -top-48 -left-48
          w-96 h-96
          bg-gradient-to-br from-pink-500 to-purple-500
          opacity-30 rounded-full
          filter blur-3xl
          pointer-events-none
        "
      />

      {/* óvalo azul en esquina inferior derecha */}
      <div
        className="
          absolute -bottom-56 -right-56
          w-[500px] h-[500px]
          bg-gradient-to-br from-blue-400 to-indigo-600
          opacity-20 rounded-full
          filter blur-3xl
          pointer-events-none
        "
      />

      {/* iconos flotantes, más rápidos */}
      <div className="absolute inset-0 pointer-events-none">
        {icons.map((icon, i) => (
          <div
            key={i}
            className="absolute w-10 h-10 opacity-30"
            style={{ left: icon.x, top: icon.y }}
          >
            <Image src={icon.src} alt="" width={40} height={40} />
          </div>
        ))}
      </div>

      {/* contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-white text-center mb-12">
          Más que una IA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-transparent border-2 border-white rounded-3xl p-8">
            <h3 className="text-2xl font-semibold text-white flex items-center mb-6">
              <XCircle className="w-6 h-6 mr-2" /> Sin BARUC
            </h3>
            <ul className="space-y-4 text-white">
              {negatives.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <XCircle className="w-5 h-5 flex-shrink-0 text-white mt-1" />
                  <span className="ml-3">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-transparent border-2 border-white rounded-3xl p-8">
            <h3 className="text-2xl font-semibold text-white flex items-center mb-6">
              <CheckCircle className="w-6 h-6 mr-2" /> Con BARUC
            </h3>
            <ul className="space-y-4 text-white">
              {positives.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-white mt-1" />
                  <span className="ml-3">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
