"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "./components/footer";
import {
  ArrowRight,
  Sparkles,
  Youtube,
  Truck,
  ShoppingBag,
  MessageCircle,
  Radio,
  ExternalLink,
  ChevronLeft,
  Trophy,
  GraduationCap,
  Banknote,
  Download,
  Instagram,
} from "lucide-react";

type Slide =
  | { type: "image"; url: string; title: string; subtitle: string }
  | { type: "video"; url: string; title: string; subtitle: string };

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const shelfRef = useRef<HTMLDivElement>(null);

  // ✅ Placeholder: después lo traemos desde Tienda Nube
  const slides: Slide[] = [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070",
      title: "Precisión Profesional",
      subtitle: "TECNOLOGÍA -R APLICADA",
    },
    {
      type: "video",
      url: "https://v1.keepmeme.com/static/video/sample.mp4",
      title: "Mila Dex 2026",
      subtitle: "EL EVENTO DEL AÑO",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1200",
      title: "Capacitación Elite",
      subtitle: "TU CARRERA EMPIEZA ACÁ",
    },
  ];

  const baseProducts = [
    {
      id: 1284,
      name: "Maquillaje Hidratante Siliconado",
      tag: "Rostro",
      skin: "Todo tipo",
      price: "$12.500",
      desc: "Hidratación profunda y fijación extrema para un acabado profesional.",
      img: "https://www.mila.com.ar/img_productos/original/06121657_30CUADRADO.jpg",
    },
    {
      id: 1287,
      name: "Base en gotas ULTRA MATE",
      tag: "Rostro",
      skin: "Grasa",
      price: "$23.800",
      desc: "Alta cobertura, Humectante, matificante y de alta durabilidad.",
      img: "https://www.mila.com.ar/img_productos/original/12261755_PROMO30AOSFEED1803-01.jpg",
    },
    {
      id: 1303,
      name: "Bálsamo Nutritivo para Labios",
      tag: "Labios",
      skin: "Todo tipo",
      price: "$17.850",
      desc: "Textura liviana efecto glow rica en vitaminas.",
      img: "https://www.mila.com.ar/img_productos/original/08291710_30AOSCUADRADO2511.jpg",
    },
    {
      id: 1278,
      name: "Corrector Camuflaje",
      tag: "Ojos",
      skin: "Seca / Mixta",
      price: "$11.200",
      desc: "Neutraliza imperfecciones con tecnología HD.",
      img: "https://www.mila.com.ar/img_productos/original/06121651_30AOSCUADRADO2812-05.jpg",
    },
    {
      id: 1314,
      name: "Sombra en polvo",
      tag: "Rostro",
      skin: "Grasa / Mixta",
      price: "$25.500",
      desc: "Perla cristal tono dorado de efecto metálico natural.",
      img: "https://www.mila.com.ar/img_productos/original/10011125_2153-0130AOSCUADRADO.jpg",
    },
    {
      id: 1319,
      name: "Paleta sombras de Inspiración",
      tag: "Rostro",
      skin: "Mixta",
      price: "$105.350",
      desc: "Prepara la piel devolviendo la elasticidad y luminosidad natural.",
      img: "https://www.mila.com.ar/img_productos/original/06121655_MILAapiracioneseditable30aos.jpg",
    },
  ];

  // ✅ Content placeholder (data-ready para Tienda Nube)
  const content = {
    miLab: {
      kicker: "Identidad Pro",
      title: "MI LA",
      titleAccent: "B",
      desc: "Armá tu paleta y tu kit profesional. Layout listo para enchufar productos/tonos desde Tienda Nube sin tocar el diseño.",
      ctaText: "Armar mi kit",
      ctaHref: "/mi-lab",
      items: [
        {
          key: "sombra",
          label: "Sombras",
          href: "/mi-lab",
          image:
            "https://www.mila.com.ar/img_productos/original/10011125_2153-0130AOSCUADRADO.jpg",
        },
        {
          key: "rubor",
          label: "Rubores",
          href: "/mi-lab",
          image:
            "https://www.mila.com.ar/img_productos/original/08291710_30AOSCUADRADO2511.jpg",
        },
        {
          key: "tonalizador",
          label: "Tonos",
          href: "/mi-lab",
          image:
            "https://www.mila.com.ar/img_productos/original/06121651_30AOSCUADRADO2812-05.jpg",
        },
      ],
    },
  };

  // Slider principal
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Carrusel preferidos (auto scroll)
  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (!shelfRef.current) return;
      const el = shelfRef.current;
      const { scrollLeft, clientWidth, scrollWidth } = el;

      if (scrollLeft + clientWidth >= scrollWidth - 100) {
        el.scrollTo({ left: scrollWidth / 3, behavior: "instant" as ScrollBehavior });
      } else {
        el.scrollBy({ left: 352, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <style>{`
        @keyframes ticketFloat {
          0%,100% { transform: translateY(0) }
          50% { transform: translateY(-6px) }
        }
        .animate-ticket { animation: ticketFloat 3.2s ease-in-out infinite; }
      `}</style>

      {/* ✅ BARRA LATERAL - NO CHOCA CON CONTENIDO (y el layout compensa con padding-left en XL) */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-5">
        {[
          {
            val: "10%",
            label: "OFF",
            desc: "Efectivo / Transferencia",
            icon: <Banknote className="w-5 h-5" />,
          },
          {
            val: "15%",
            label: "OFF",
            desc: "Estudiantes de Estética",
            icon: <GraduationCap className="w-5 h-5" />,
          },
          {
            val: "30%",
            label: "OFF",
            desc: "Exclusivo Profesionales",
            icon: <Trophy className="w-5 h-5" />,
          },
          {
            val: "Envío",
            label: "Gratis",
            desc: "En compras superiores a $200.000",
            icon: <Truck className="w-5 h-5" />,
          },
        ].map((item, i) => (
          <div key={i} className="group relative flex items-center">
            <div
              style={{ animationDelay: `${i * 0.8}s` }}
              className="w-14 h-16 bg-[#1A1A1A] border border-white/10 rounded-xl flex flex-col items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:bg-[#E81E71] group-hover:border-[#E81E71] z-10 animate-ticket cursor-pointer"
            >
              <span className="text-[18px] font-black leading-none text-white tracking-tighter transition-transform group-hover:scale-110">
                {item.val}
              </span>
              <span className="text-[9px] font-black uppercase tracking-widest text-[#E81E71] group-hover:text-white mt-1">
                {item.label}
              </span>
            </div>

            <div className="absolute left-full ml-6 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-black/95 backdrop-blur-3xl border-l-4 border-[#E81E71] p-5 rounded-r-2xl translate-x-[-30px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap shadow-2xl">
                <div className="flex items-center gap-5">
                  <div className="text-[#E81E71]">{item.icon}</div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-black uppercase tracking-widest text-white">
                      Beneficio {item.val} {item.label}
                    </span>
                    <span className="text-sm font-medium italic text-zinc-400">
                      {item.desc}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* WHATSAPP FLOATING */}
      <a
        href="https://wa.me/tu-numero"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-10 right-10 z-50 bg-[#25D366] p-5 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform group"
      >
        <MessageCircle className="w-8 h-8 text-white" />
        <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-black text-[10px] font-black uppercase px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          ¿Dudas? Chateá con un Pro
        </span>
      </a>

      {/* ✅ HERO SLIDER (después lo alimentamos desde Tienda Nube) */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />

            {slide.type === "video" ? (
              <video
                src={slide.url}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={slide.url}
                className="w-full h-full object-cover"
                alt=""
              />
            )}

            {/* Compensación para que NO choque con la sidebar */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-10 md:px-20 xl:pl-[140px] xl:pr-20">
              <span className="text-[14px] font-black text-[#E81E71] tracking-[0.5em] mb-4 drop-shadow-lg">
                {slide.subtitle}
              </span>
              <h1 className="text-[54px] sm:text-[72px] md:text-[120px] font-black uppercase italic leading-none tracking-tighter mb-10">
                {slide.title}
              </h1>

              <Link
                href="/mi-lab"
                className="w-fit bg-[#E81E71] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                Empezar Experiencia
              </Link>
            </div>
          </div>
        ))}

        <div className="absolute bottom-10 right-10 md:right-20 z-30 flex gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`h-1 transition-all ${
                activeSlide === i ? "w-20 bg-[#E81E71]" : "w-8 bg-white/20"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ✅ VALORES (igual) */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-10 xl:pl-[140px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#E81E71]/20 transition-colors border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.02)]">
                <span className="text-4xl">🐰</span>
              </div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-2">
                Cruelty Free
              </h4>
              <p className="text-[9px] text-zinc-500 uppercase font-bold">
                Respeto Absoluto
              </p>
            </div>

            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#E81E71]/20 transition-colors border border-white/10">
                <span className="text-4xl">🌿</span>
              </div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-2">
                100% Vegano
              </h4>
              <p className="text-[9px] text-zinc-500 uppercase font-bold">
                Fórmulas Éticas
              </p>
            </div>

            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#E81E71]/20 transition-colors border border-white/10">
                <span className="text-4xl">✨</span>
              </div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-2">
                Hipoalergénico
              </h4>
              <p className="text-[9px] text-zinc-500 uppercase font-bold">
                Ciencia Segura
              </p>
            </div>

            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#E81E71]/20 transition-colors border border-white/10">
                <span className="text-3xl font-black italic text-[#E81E71]">
                  AR
                </span>
              </div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-2">
                Industria Nacional
              </h4>
              <p className="text-[9px] text-zinc-500 uppercase font-bold">
                Laboratorio Argentino
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ SECCIÓN PRODUCTO ESTRELLA: ahora se llama MAKE UP HD */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-10 xl:pl-[140px] grid lg:grid-cols-2 gap-20 items-center">
          {/* Collage */}
          <div className="flex flex-col gap-4 group relative">
            <div className="w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 group-hover:border-[#E81E71]/50">
              <img
                src="https://www.mila.com.ar/img_productos/02051059_BASEPHOTOSHOP2802-todas.jpg"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                alt="Bases HD Mila"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#E81E71]/30 transition-all duration-500 hover:-translate-y-2">
                <img
                  src="https://www.mila.com.ar/img_productos/10211825_1116.jpg"
                  className="w-full h-full object-cover"
                  alt="Detalle 1"
                />
              </div>
              <div className="aspect-square rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#E81E71]/30 transition-all duration-500 hover:-translate-y-2 delay-75">
                <img
                  src="https://www.mila.com.ar/img_productos/10211830_polvost.jpg"
                  className="w-full h-full object-cover"
                  alt="Detalle 2"
                />
              </div>
              <div className="aspect-square rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#E81E71]/30 transition-all duration-500 hover:-translate-y-2 delay-150">
                <img
                  src="https://www.mila.com.ar/img_productos/original/12291635_2540-ST-REFLEX.jpg"
                  className="w-full h-full object-cover"
                  alt="Detalle 3"
                />
              </div>
            </div>

            <div className="absolute -top-4 -left-4 bg-[#E81E71] text-white px-6 py-2 rounded-full font-black uppercase tracking-tighter italic text-xs animate-bounce shadow-[0_0_20px_#E81E71] z-20">
              Make up HD
            </div>
          </div>

          {/* Copy + CTA */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <Radio className="w-6 h-6 text-[#E81E71] animate-pulse" />
              <span className="text-[12px] font-black uppercase tracking-[0.4em] text-zinc-400">
                El momento lo elegís vos
              </span>
            </div>

            <h2 className="text-[64px] sm:text-[80px] md:text-[90px] font-black uppercase italic leading-[0.8] mb-8 tracking-tighter">
              Kit <br />
              <span className="text-[#E81E71]">Make up HD</span>
            </h2>

            <p className="text-zinc-400 text-lg italic mb-10 max-w-md border-l-2 border-[#E81E71] pl-6 leading-relaxed">
              Piel perfecta bajo luces de estudio. Tecnología de alta definición pensada para cámara y contenido.
            </p>

            <div className="flex items-center gap-8">
              <Link
                href="/kits#makeup-hd"
                className="bg-white text-black px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-[#E81E71] hover:text-white transition-all flex items-center gap-3"
              >
                Ver Kit <ExternalLink className="w-4 h-4" />
              </Link>

              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest line-through">
                  $45.000
                </span>
                <span className="text-3xl font-black text-white">$38.500</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ PREFERIDOS (igual, con padding para no chocar con la sidebar) */}
      <section className="py-12 bg-black overflow-hidden relative">
        <div className="container mx-auto px-10 xl:pl-[140px] mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter leading-none text-white">
              Los Preferidos
            </h2>
            <span className="text-[#E81E71] text-[10px] font-black uppercase tracking-[0.3em] opacity-80 mt-2 block">
              Selección Pro
            </span>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => shelfRef.current?.scrollBy({ left: -350, behavior: "smooth" })}
              className="p-3 rounded-full border border-white/10 hover:bg-[#E81E71] transition-all z-30"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => shelfRef.current?.scrollBy({ left: 350, behavior: "smooth" })}
              className="p-3 rounded-full border border-white/10 hover:bg-[#E81E71] transition-all z-30"
              aria-label="Siguiente"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div
          ref={shelfRef}
          className="flex gap-8 overflow-x-auto px-10 xl:pl-[140px] pb-10 no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {[...baseProducts, ...baseProducts, ...baseProducts].map((prod, i) => {
            const tieneDescuento = prod.id === 1284 || prod.id === 1314;
            const precioAnterior = tieneDescuento
              ? `$${(
                  parseInt(prod.price.replace("$", "").replace(".", ""), 10) * 1.25
                ).toLocaleString("es-AR")}`
              : null;

            return (
              <div
                key={`${prod.id}-${i}`}
                className={`shrink-0 w-[320px] rounded-4xl p-6 snap-center transition-all duration-700 border flex flex-col justify-between relative z-10
                ${
                  tieneDescuento
                    ? "border-[#E81E71] bg-linear-to-br from-[#E81E71]/20 via-black to-black shadow-[0_0_30px_rgba(232,30,113,0.2)]"
                    : "border-white/10 bg-zinc-950"
                }`}
              >
                <Link href="/productos" className="block group/link">
                  <div className="relative mb-6">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-900">
                      <img
                        src={prod.img}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/link:scale-110"
                        alt={prod.name}
                      />
                    </div>

                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      <span className="bg-white text-black px-2 py-1 rounded text-[7px] font-black uppercase tracking-widest">
                        {prod.tag}
                      </span>
                      {tieneDescuento && (
                        <span className="bg-[#E81E71] text-white px-2 py-1 rounded text-[7px] font-black uppercase animate-pulse">
                          25% OFF
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-[15px] font-black uppercase italic mb-1 h-[40px] flex items-center leading-tight group-hover/link:text-[#E81E71] transition-colors">
                      {prod.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3 text-[9px] uppercase">
                      <span className="text-[#E81E71] font-black">Tipo:</span>
                      <span className="text-zinc-400 font-bold">{prod.skin}</span>
                    </div>
                    <p className="text-[10px] text-zinc-500 italic mb-6 line-clamp-2 h-8 leading-relaxed">
                      {prod.desc}
                    </p>
                  </div>
                </Link>

                <div className="mt-auto relative z-20">
                  <div className="flex flex-col mb-3 h-10 justify-end">
                    {tieneDescuento && (
                      <span className="text-[10px] text-zinc-600 line-through font-bold">
                        {precioAnterior}
                      </span>
                    )}
                    <span className="text-xl font-black text-white">{prod.price}</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Agregado: ${prod.name}`);
                    }}
                    className="w-full flex items-center justify-between bg-white text-black pl-5 pr-1 py-1 rounded-2xl hover:bg-[#E81E71] hover:text-white transition-all group/btn pointer-events-auto"
                  >
                    <span className="font-black text-[10px] uppercase">Sumar al carrito</span>
                    <div className="bg-black text-white p-2.5 rounded-xl group-hover/btn:bg-white group-hover/btn:text-[#E81E71] transition-colors">
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ✅ ANEXO MI LAB (debajo de Preferidos, data-ready) */}
      <section className="py-24 bg-zinc-950/40 border-y border-white/5 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 text-[18vw] font-black italic text-white/[0.02] select-none leading-none">
          LAB
        </div>

        <div className="container mx-auto px-10 xl:pl-[140px] relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Texto */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-[#E81E71]" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#E81E71]">
                  {content.miLab.kicker}
                </span>
              </div>

              <h2 className="text-[80px] md:text-[100px] font-black uppercase italic leading-[0.7] tracking-tighter">
                <span className="text-[#E81E71]">{content.miLab.title}</span>
                <span className="text-white">{content.miLab.titleAccent}</span>
              </h2>

              <p className="text-zinc-400 text-lg italic leading-relaxed max-w-md border-l-2 border-zinc-800 pl-6">
                {content.miLab.desc}
              </p>

              <Link
                href={content.miLab.ctaHref}
                className="group inline-flex items-center gap-6 bg-white text-black pl-10 pr-4 py-4 rounded-full font-black uppercase tracking-widest hover:bg-[#E81E71] hover:text-white transition-all duration-500"
              >
                {content.miLab.ctaText}
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#E81E71] transition-all">
                  <Sparkles className="w-5 h-5" />
                </div>
              </Link>
            </div>

            {/* Cards / slots (fáciles de enchufar a Tienda Nube) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {content.miLab.items.map((it) => (
                <Link
                  key={it.key}
                  href={it.href}
                  className="group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-black shadow-2xl hover:border-[#E81E71]/50 transition-all"
                >
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent z-10" />
                  <img
                    src={it.image}
                    alt=""
                    className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-8 left-8 z-20">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#E81E71]">
                      Mi LAB
                    </span>
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white mt-2">
                      {it.label}
                    </h3>
                    <div className="mt-4 inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-white/70 group-hover:text-white">
                      Explorar{" "}
                      <ArrowRight className="w-4 h-4 text-[#E81E71] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Slot extra para futuro */}
          <div className="mt-12 rounded-[2rem] border border-white/10 bg-black/40 p-8">
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-600">
              Slot dinámico Mi LAB (productos/tonos desde Tienda Nube)
            </span>
          </div>
        </div>
      </section>

      {/* ✅ FOOTER (compacto, sin diccionario/points; lo dejamos clean para launch) */}
      <footer className="bg-black border-t border-white/10 pt-20 pb-12 text-white">
        <div className="container mx-auto px-10 xl:pl-[140px]">
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

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6 items-center">
              <Instagram className="w-5 h-5 text-zinc-600 hover:text-[#E81E71] cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-zinc-600 hover:text-[#E81E71] cursor-pointer transition-colors" />
            </div>
            <span className="text-[9px] font-bold text-zinc-800 uppercase tracking-widest">
              MILA — UI listo para conectar Tienda Nube
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}