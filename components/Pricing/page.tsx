// app/pricing/page.tsx
"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

// Paleta Moody Blue aplicada a cada plan
const plans = [
  {
    title: "PLAN BASIC",
    price: "49",
    gradientFrom: "#DEE3FF", // suave azul claro
    gradientTo: "#C4CBFF",   // tono medio claro
    textColor: "#F1F3FF",    // texto oscuro
    features: [
      "Puedes vincular hasta 1 número de teléfono",
      "Puedes crear y tener hasta 1 flujo activo",
      "Tu agente podrá personalizarse con un prompt",
      "Todos los modelos disponibles",
      "10.000 créditos gratis",
      "Precio del crédito: 0,00009",
    ],
  },
  {
    title: "PLAN PRO",
    price: "149",
    gradientFrom: "#675BF9", // violeta vibrante
    gradientTo: "#573DEE",   // azul profundo
    textColor: "#F1F3FF",    // texto claro
    highlighted: true,
    features: [
      "Puedes vincular hasta 3 números de teléfono",
      "Puedes crear infinitos flujos y tener hasta 5 flujos activos",
      "Tu agente podrá personalizarse con un prompt",
      "Todos los modelos disponibles",
      "100.000 créditos gratis",
      "Precio del crédito: 0,00005",
    ],
  },
  {
    title: "PLAN PREMIUM",
    price: "409",
    gradientFrom: "#4B2FD3", // azul púrpura
    gradientTo: "#3D29AA",   // púrpura oscuro
    textColor: "#F1F3FF",    // texto claro
    features: [
      "Puedes vincular infinitos números de teléfono",
      "Puedes crear y tener hasta 50 flujos activos",
      "Tu agente podrá personalizarse con un prompt",
      "Todos los modelos disponibles",
      "1.000.000 créditos gratis",
      "Precio del crédito: 0,00003",
    ],
  },
];

// Componente para cada tarjeta usando gradiente
function PlanCard({
  title,
  price,
  features,
  gradientFrom,
  gradientTo,
  textColor,
  highlighted = false,
}: {
  title: string;
  price: string;
  features: string[];
  gradientFrom: string;
  gradientTo: string;
  textColor: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`
        flex flex-col justify-between rounded-2xl p-6 shadow-lg
        bg-gradient-to-br from-[${gradientFrom}] to-[${gradientTo}]
        transition-transform
        ${highlighted ? "scale-105 ring-4 ring-[#F1F3FF]" : "hover:scale-[1.02]"}
      `}
      style={{ color: textColor }}
    >
      <div>
        <h3 className="text-xl font-bold mb-4" style={{ color: textColor }}>
          {title}
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-6" style={{ color: textColor }}>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <p className="text-2xl font-extrabold mb-4" style={{ color: textColor }}>
          {price} USD / MES
        </p>
        <button
          className={
            `w-full py-2 rounded-md font-medium transition-colors ` +
            (highlighted
              ? "bg-white text-[${gradientTo}] hover:bg-gray-100"
              : "bg-white/90 text-[${gradientTo}] hover:bg-white")
          }
        >
          Seleccionar plan
        </button>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <section
      id="pricing"
      className="py-16 bg-transparent"
    >
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 lg:px-16 text-center">
        <h2 className="text-3xl font-bold mb-12 text-white">Métodos de pago</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PlanCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
