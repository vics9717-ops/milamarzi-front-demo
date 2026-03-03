"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, User, ChevronDown, Sparkles, Search } from "lucide-react";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMaquillajeOpen, setIsMaquillajeOpen] = useState(false);
  const [isAccesoriosOpen, setIsAccesoriosOpen] = useState(false);
  const [isCapacitacionOpen, setIsCapacitacionOpen] = useState(false);

  const seccionesMaquillaje = {
    porUso: ["Rostro", "Ojos", "Labios"],
    porProducto: [
      "Bases",
      "Correctores",
      "Labiales",
      "Delineadores",
      "Sombras",
      "Polvo Compacto",
      "Rubores",
      "Iluminadores",
      "Fijadores",
    ],
    porPiel: ["Mixta", "Seca", "Grasa"],
  };

  const seccionesAccesorios = {
    categorias: ["Brochas", "Contenedores", "Paletas", "Bolsos", "Otros"],
  };

  return (
    <header className="sticky top-0 z-[50] w-full bg-black border-b border-white/5 font-sans text-white">
      <style>{`
        @keyframes glow-pink {
          0%, 100% { box-shadow: 0 0 10px rgba(232, 30, 113, 0.2); }
          50% { box-shadow: 0 0 25px rgba(232, 30, 113, 0.5); }
        }
        .btn-milab { 
          animation: glow-pink 3s infinite ease-in-out; 
          background-color: #E81E71;
        }
        .nav-link-main {
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          white-space: nowrap;
        }
      `}</style>

      <div className="w-full px-6 h-20 grid grid-cols-[1fr_auto_1fr] items-center">
        {/* IZQUIERDA */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex-shrink-0">
            <img src="/logo.png" alt="MILA" className="h-10 w-auto object-contain" />
          </Link>

          <nav className="hidden xl:flex items-center gap-5">
            {/* MAQUILLAJE */}
            <div
              className="relative h-20 flex items-center"
              onMouseEnter={() => setIsMaquillajeOpen(true)}
              onMouseLeave={() => setIsMaquillajeOpen(false)}
            >
              <Link
                href="/productos"
                className="flex items-center gap-1 nav-link-main cursor-pointer hover:text-[#E81E71] transition-all"
              >
                Maquillaje
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${isMaquillajeOpen ? "rotate-180" : ""}`}
                />
              </Link>

              {isMaquillajeOpen && (
                <div className="absolute top-full mt-0 w-[900px] max-w-[calc(100vw-3rem)] bg-zinc-950/98 backdrop-blur-2xl border border-white/10 p-12 rounded-b-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.9)] z-[110]">
                  <div className="grid grid-cols-[1.2fr_1.5fr_1fr] gap-x-16 gap-y-10 text-left">
                    {/* Aplicación */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-8">
                        <div className="w-1 h-4 bg-[#E81E71] rounded-full"></div>
                        <h4 className="text-[16px] font-black uppercase tracking-[0.2em] text-white/50">
                          Aplicación
                        </h4>
                      </div>

                      <ul className="space-y-6 mb-6">
                        {seccionesMaquillaje.porUso.map((item) => (
                          <li key={item}>
                            <Link
                              href={`/productos?uso=${item.toLowerCase()}`}
                              className="text-[14px] font-black uppercase hover:text-[#E81E71] transition-colors tracking-widest"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/productos"
                        className="text-[10px] font-black text-[#E81E71] uppercase tracking-[0.2em] hover:text-white transition-colors"
                      >
                        Ver todos →
                      </Link>
                    </div>

                    {/* Productos */}
                    <div>
                      <div className="flex items-center gap-2 mb-8">
                        <div className="w-1 h-4 bg-[#E81E71] rounded-full"></div>
                        <h4 className="text-[16px] font-black uppercase tracking-[0.2em] text-white/50">
                          Productos
                        </h4>
                      </div>

                      <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                        {seccionesMaquillaje.porProducto.map((item) => (
                          <li key={item}>
                            <Link
                              href={`/productos?tipo=${item.toLowerCase()}`}
                              className="text-[11px] font-bold uppercase text-white/70 hover:text-[#E81E71] transition-colors border-b border-white/5 pb-1 block"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tu Piel */}
                    <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                      <div className="flex items-center gap-2 mb-8">
                        <Sparkles className="w-4 h-4 text-[#E81E71]" />
                        <h4 className="text-[16px] font-black uppercase tracking-[0.2em] text-[#E81E71]">
                          Tu Piel
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 gap-2">
                        {seccionesMaquillaje.porPiel.map((item) => (
                          <Link
                            key={item}
                            href={`/productos?piel=${item.toLowerCase()}`}
                            className="group flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-[#E81E71] transition-all"
                          >
                            <span className="text-[10px] font-black uppercase tracking-widest text-white">
                              Piel {item}
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#E81E71] group-hover:bg-white animate-pulse"></div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ACCESORIOS */}
            <div
              className="relative h-20 flex items-center"
              onMouseEnter={() => setIsAccesoriosOpen(true)}
              onMouseLeave={() => setIsAccesoriosOpen(false)}
            >
              <Link
                href="/accesorios"
                className="flex items-center gap-1 nav-link-main cursor-pointer hover:text-[#E81E71] transition-all"
              >
                Accesorios
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${isAccesoriosOpen ? "rotate-180" : ""}`}
                />
              </Link>

              {isAccesoriosOpen && (
                <div className="absolute top-full mt-0 w-[850px] max-w-[calc(100vw-3rem)] bg-zinc-950/98 backdrop-blur-2xl border border-white/10 p-10 rounded-b-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.9)] z-[110]">
                  <div className="grid grid-cols-[1fr_1.5fr] gap-12 text-left">
                    <div>
                      <div className="flex items-center gap-2 mb-8">
                        <div className="w-1 h-4 bg-[#E81E71] rounded-full"></div>
                        <h4 className="text-[16px] font-black uppercase tracking-[0.2em] text-white/50">
                          Categorías
                        </h4>
                      </div>

                      <ul className="space-y-5 mb-10">
                        {seccionesAccesorios.categorias.map((item) => (
                          <li key={item}>
                            <Link
                              href={`/accesorios?cat=${item.toLowerCase()}`}
                              className="text-[13px] font-black uppercase tracking-widest hover:text-[#E81E71] transition-colors block text-white"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/accesorios"
                        className="inline-flex items-center text-[10px] font-black text-[#E81E71] uppercase tracking-[0.2em] hover:text-white transition-colors group"
                      >
                        Ver todos
                        <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 flex flex-col justify-center items-center text-center">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#E81E71]/10 blur-[50px]"></div>
                      <Sparkles className="w-8 h-8 text-[#E81E71] mb-4 animate-pulse" />

                      <h4 className="text-[16px] font-black uppercase tracking-[0.1em] text-white mb-2">
                        Personalizá tu Kit
                      </h4>

                      <p className="text-[10px] text-white/50 font-medium uppercase tracking-widest mb-6 max-w-[200px] leading-relaxed">
                        Elegí tus tonos favoritos y armá tu paleta profesional en Mi LAB
                      </p>

                      <Link
                        href="/mi-lab"
                        className="px-8 py-3 bg-[#E81E71] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-transform shadow-[0_10px_20px_rgba(232,30,113,0.2)]"
                      >
                        Comenzar ahora
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CAPACITACIÓN */}
            <div
              className="relative h-20 flex items-center"
              onMouseEnter={() => setIsCapacitacionOpen(true)}
              onMouseLeave={() => setIsCapacitacionOpen(false)}
            >
              <Link
                href="/eventos"
                className="flex items-center gap-1 nav-link-main cursor-pointer hover:text-[#E81E71] transition-all"
              >
                Capacitación
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${isCapacitacionOpen ? "rotate-180" : ""}`}
                />
              </Link>

              {isCapacitacionOpen && (
                <div className="absolute top-full mt-0 w-[260px] max-w-[calc(100vw-3rem)] bg-zinc-950/98 backdrop-blur-xl border border-white/10 p-6 rounded-b-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-[110]">
                  <ul className="space-y-4 text-left">
                    <li>
                      <Link href="/eventos?tipo=presencial" className="text-[12px] font-black uppercase hover:text-[#E81E71] transition-colors">
                        Presencial
                      </Link>
                    </li>
                    <li>
                      <Link href="/eventos?tipo=online" className="text-[12px] font-black uppercase hover:text-[#E81E71] transition-colors">
                        Online
                      </Link>
                    </li>
                    <li>
                      <Link href="/eventos?tipo=offline" className="text-[12px] font-black uppercase hover:text-[#E81E71] transition-colors">
                        Offline
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* CENTRO */}
        <div className="flex justify-center px-4">
          <Link
            href="/mi-lab"
            className="btn-milab flex items-center gap-2 px-6 py-2.5 rounded-full hover:scale-105 transition-transform"
          >
            <Sparkles className="w-4 h-4 fill-white" />
            <span className="text-[11px] font-black uppercase tracking-widest">Mi LAB</span>
          </Link>
        </div>

        {/* DERECHA */}
        <div className="flex items-center justify-end gap-5">
          <nav className="hidden xl:flex items-center gap-5">
            <Link href="/kits" className="nav-link-main hover:text-[#E81E71]">Kits</Link>
            <Link href="/diccionario" className="nav-link-main">Diccionario</Link>
            <Link href="/como-comprar" className="nav-link-main text-[10px]">Cómo Comprar</Link>
          </nav>

          <div className="flex items-center gap-4 border-l border-white/10 pl-5">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:text-[#E81E71] transition-colors"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5 stroke-[2px]" />
            </button>

            <User className="w-4 h-4 cursor-pointer" />

            <div className="relative">
              <ShoppingBag className="w-6 h-6 stroke-[1.5px]" />
              <span className="absolute -top-1 -right-1 bg-[#E81E71] text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}