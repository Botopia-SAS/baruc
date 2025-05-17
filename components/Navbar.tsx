// components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

export default function Navbar() {
  return (
    <header className="container mx-auto px-4 py-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/" className="block">
          <Image
            src="/logo.svg"
            alt="Baruc"
            width={100}
            height={40}
            className="h-8 w-auto"
          />
        </Link>
      </div>

      {/* Navigation (centered) */}
      <nav className="hidden md:flex space-x-8 justify-center flex-1">
        {["pricing", "resources", "community"].map((path) => (
          <Link
            key={path}
            href={`/${path}`}
            className="text-white/80 hover:text-white transition"
          >
            {path.charAt(0).toUpperCase() + path.slice(1)}
          </Link>
        ))}
      </nav>

      {/* Buttons */}
      <div className="flex items-center space-x-4 flex-shrink-0">
        
        <Link
          href="https://app.botopia.online/login"
          className="px-4 py-2 border border-white/20 rounded-full text-white/80 hover:text-white hover:border-white/40 transition"
        >
          SIGN IN
        </Link>
        <Link
          href="https://app.botopia.online/register"
          className="px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-white/90 transition"
        >
          GET STARTED
        </Link>
      </div>
    </header>
  );
}
