// app/pricing/page.tsx
"use client";

import React from "react";

// Defino los planes con colores planos estilo las imágenes
const plans = [
	{
		title: "PLAN GRATUITO",
		description: "Ideal para experimentar la IA",
		price: "0,00",
		unit: "USD / mes",
		limit: "Límite de 50 mensajes al mes",
		features: [
			"1 número de teléfono",
			"1 flujo",
			"Sin agentes",
			"Respuesta en 20-30 segundos",
		],
		bg: "bg-blue-50",
		text: "text-green-600",
		btn: "bg-white text-green-600 hover:bg-gray-100",
	},
	{
		title: "PLAN BÁSICO",
		description: "Para equipos pequeños y profesionales individuales",
		price: "14,00",
		unit: "USD / mes",
		limit: "Límite de 1000 mensajes al mes",
		features: [
			"2 números de teléfono",
			"1 flujo",
			"2 agentes",
			"Respuesta entre 10-20 segundos",
			"Soporte por email",
		],
		bg: "bg-yellow-50",
		text: "text-gray-900",
		btn: "bg-white text-gray-900 hover:bg-gray-200",
	},
	{
		title: "PLAN PRO",
		description: "Para compañías que quieren escalar y crecer",
		price: "79,00",
		unit: "USD / mes",
		limit: "Límite de 5000 mensajes al mes",
		features: [
			"5 números de teléfono",
			"20 flujos",
			"10 agentes",
			"Respuesta entre 7-15 segundos",
			"Catálogo de modelos AI incompleto",
			"Responde grupos de WhatsApp",
			"Soporte por email y WhatsApp",
		],
		badge: "Popular ⚡",
		bg: "bg-purple-50",
		text: "text-gray-900",
		btn: "bg-white text-gray-900 hover:bg-gray-200",
	},
	{
		title: "PLAN INDUSTRIAL",
		description: "Para compañías que realmente desean usar IA",
		price: "549,00",
		unit: "USD / mes",
		limit: "Límite de 10.000 mensajes al mes",
		features: [
			"20 números de teléfono",
			"20 flujos",
			"50 agentes",
			"Catálogo de modelos AI completo",
			"Soporte 1-1 con el equipo entero",
			"Ingeniero de cuenta dedicado",
			"Respuesta entre 2-7 segundos",
			"Integra pagos dentro de WhatsApp",
		],
		bg: "bg-yellow-100",
		text: "text-gray-900",
		btn: "bg-white text-gray-900 hover:bg-gray-200",
	},
];

function PlanCard({
	title,
	description,
	price,
	unit,
	limit,
	features,
	badge,
}: {
	title: string;
	description?: string;
	price: string;
	unit: string;
	limit: string;
	features: string[];
	badge?: string;
}) {
	return (
		<div className="bg-transparent border border-white rounded-2xl p-4 shadow-md flex flex-col justify-between">
			<div className="relative">
				{badge && (
					<span className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow">
						{badge}
					</span>
				)}
				<h3 className="text-lg font-semibold mb-1 text-white">{title}</h3>
				{description && (
					<p className="text-sm mb-2 text-white/80">{description}</p>
				)}
				<p className="font-extrabold text-xl mb-1 text-white">
					{price}{" "}
					<span className="font-medium text-base text-white/80">{unit}</span>
				</p>
				<p className="mb-3 text-white">{limit}</p>
			</div>
			<ul className="list-disc list-inside space-y-1 mb-3 text-white">
				{features.map((f) => (
					<li key={f} className="text-sm">
						{f}
					</li>
				))}
			</ul>
			<button className="w-full py-2 text-white border border-white rounded-md hover:bg-white/10 transition">
				Seleccionar Plan
			</button>
		</div>
	);
}

export default function PricingPage() {
	return (
		<section id="pricing" className="py-12 bg-transparent">
			<div className="mx-auto max-w-screen-xl px-4 md:px-8 lg:px-16 text-center">
				<h2 className="text-3xl font-bold mb-8 text-white">
					Métodos de pago
				</h2>
				{/* dos tarjetas por fila en móvil, cuatro en desktop */}
				<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{plans.map((plan) => (
						<PlanCard key={plan.title} {...plan} />
					))}
				</div>
			</div>
		</section>
	);
}
