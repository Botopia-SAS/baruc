import Image from "next/image"

export default function PhoneMock() {
  return (
    <div className="phone-mock relative w-full max-w-xs md:max-w-sm perspective-800">
      {/* La imagen original, sin tocar */}
      <Image
        src="/wha.png"
        alt="Mockup WhatsApp"
        width={400}
        height={800}
        className="w-full drop-shadow-2xl"
      />

      {/* Tres globos 3D */}
      <div className="bubble bubble-1">Hola Botopia!</div>
      <div className="bubble bubble-2">¡Hola Jeremías! Soy tu asistente IA, ¿en qué puedo ayudarte hoy?</div>
      <div className="bubble bubble-3">Quiero agendar una cita para el jueves a las 3pm</div>
      <div className="bubble bubble-4">Tu cita ha sido agendada para el jueves a las 3, revisa tu calendario</div>
    </div>
  )
}
