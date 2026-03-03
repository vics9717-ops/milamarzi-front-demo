"use client";

import Link from "next/link";
import { Download, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-12 text-white">
      <div className="container mx-auto px-10 xl:pl-[140px]">
        {/* BOTÓN CATÁLOGO */}
        <div className="mb-20">
          <button className="w-full group relative flex items-center justify-between border border-white/10 bg-zinc-900/50 hover:bg-white p-8 rounded-3xl transition-all duration-500 overflow-hidden shadow-2xl cursor-pointer">
            <div className="absolute inset-0 bg-linear-to-r from-[#E81E71]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 flex flex-col items-start text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#E81E71] mb-2">
                Descarga Directa
              </span>
              <h3 className="text-4xl font-black uppercase italic tracking-tighter text-white group-hover:text-black transition-colors">
                Catálogo Mila
              </h3>
            </div>

            <div className="relative z-10 flex items-center gap-6">
              <p className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-400">
                Versión PDF 2026
              </p>

              <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[#E81E71] group-hover:text-white transition-all shadow-xl">
                <Download className="w-7 h-7 group-hover:translate-y-1 transition-transform duration-300" />
              </div>
            </div>
          </button>
        </div>

        {/* COLUMNAS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-8">
              Comprar
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                "Productos por Necesidad",
                "Armá tu Paleta",
                "Best Sellers",
                "Lanzamientos",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/productos"
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-8">
              Explorar
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                "Productos",
                "Capacitación",
                "Mila DEX",
                "Mi LAB",
                "Quiz MATCH",
                "Diccionario Mila",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-8">
              Mila Marzi
            </h4>
            <ul className="flex flex-col gap-4">
              {["Nuestra Historia", "Lab + Humanidad", "Envíos", "Términos"].map(
                (item) => (
                  <li key={item}>
                    <button className="text-sm text-zinc-400 hover:text-white transition-colors text-left">
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#E81E71] mb-6">
              Contacto
            </h4>
            <p className="text-sm font-bold tracking-tighter">
              Av. Corrientes 1675 Piso 8
            </p>
            <p className="text-sm font-bold tracking-tighter">
              CABA, Buenos Aires
            </p>
            <p className="text-sm font-bold text-zinc-500 mt-4 tracking-tighter">
              info@mila.com.ar
            </p>
          </div>
        </div>

        {/* BARRA FINAL */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 items-center">
            <Instagram className="w-5 h-5 text-zinc-600 hover:text-[#E81E71] cursor-pointer transition-colors" />
            <Youtube className="w-5 h-5 text-zinc-600 hover:text-[#E81E71] cursor-pointer transition-colors" />
          </div>
          <span className="text-[9px] font-bold text-zinc-800 uppercase tracking-widest" />
        </div>
      </div>
    </footer>
  );
}