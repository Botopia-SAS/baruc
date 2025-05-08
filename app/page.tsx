import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="relative z-10">
      <Navbar />
      <Hero />
      <section className="container mx-auto px-4 py-16 relative">
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="preview-card w-full md:w-1/2 p-4 relative">
            {/* ... mantén intacto el bloque de Tracker que ya tienes ... */}
          </div>
          <div className="preview-card w-full md:w-1/3 p-4 relative">
            {/* ... mantén intacto el bloque de Inbox que ya tienes ... */}
          </div>
        </div>
      </section>
    </main>
  );
}
