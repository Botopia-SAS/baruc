import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PhoneMock from "../components/PhoneMock"

export default function Hero() {
  return (
    <section className="group container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
        
        {/* TEXTO / CTA */}
        <div className="md:w-5/12 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Olvida las 
            <br />
            implementaciones lentas
          </h1>
          <p className="text-xl text-white/70 max-w-lg">
          BARUC pone tu voz de marca en WhatsApp al instante
          </p>
          <a
  href="https://app.botopia.online/login"
  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full text-white font-medium glow-effect"
>
  TRY IT FREE
  <ArrowRight className="ml-2 h-5 w-5" />
</a>

        </div>

        {/* IMAGEN + GLOBOS A LA DERECHA */}
        <div className="md:w-5/12 flex justify-end">
          <div className="
            relative 
            perspective-800 transform-gpu 
            translate-x-8 md:translate-x-16 
            transition-transform duration-700 ease-out 
            group-hover:translate-x-12 md:group-hover:translate-x-20
          ">
            <PhoneMock />
          </div>
        </div>
      
      </div>
    </section>
  )
}
