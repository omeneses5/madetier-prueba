"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrollY = window.scrollY;
      const speed = 0.4;
      imageRef.current.style.transform = `translateY(${scrollY * speed}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="https://madetier.com/wp-content/uploads/2025/07/Inicio-scaled.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-dark-teal/60" />
      <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-slab leading-tight mb-6">
          Transformamos espacios, creamos experiencias
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Diseño, calidad y rapidez en cada detalle
        </p>
        <a
          href="/servicios/"
          className="inline-flex items-center gap-3 bg-green text-white px-6 py-3 rounded-[50px] text-lg font-medium hover:opacity-90 transition-opacity"
        >
          <FontAwesomeIcon icon={faCouch} className="w-5 h-5" />
          Solicita tu diseño
        </a>
      </div>
    </section>
  );
}
