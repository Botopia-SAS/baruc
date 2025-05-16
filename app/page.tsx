import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Demo from "../components/Demo/page";
import Ventajas from "../components/Ventajas/page";

export default function Home() {
  return (
    <main className="relative z-10">
      <Navbar />
      <Hero />
      <Demo />
      <Ventajas />
    </main>
  );
}
