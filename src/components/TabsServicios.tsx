"use client";

import { useState } from "react";

const tabs = [
  {
    id: 1,
    title: "Diseño de interiores e Implementación de espacios",
    video: "https://madetier.com/wp-content/uploads/2025/07/Video-3-Madetier-Interiores.mp4",
    description:
      "Transformamos cada ambiente en un reflejo auténtico de tu personalidad. Nuestro equipo colabora contigo para crear un diseño que combine funcionalidad, estética y sostenibilidad, haciendo que cada rincón cuente una historia única.",
    cta: "Descubre cómo transformar tu espacio",
  },
  {
    id: 2,
    title: "Fabricación e instalación de mobiliario y acabados",
    video: "https://madetier.com/wp-content/uploads/2025/07/Video-1-Madetier-reels.mp4",
    description:
      "Creamos y ensamblamos mobiliario a medida que combina el arte artesanal con innovadoras técnicas de fabricación. Cada pieza se concibe para integrarse de forma única a tu espacio, resaltando la elegancia y funcionalidad de cada ambiente.",
    cta: "Descubre nuestra propuesta exclusiva",
  },
  {
    id: 3,
    title: "Diseño e implementación de cocinas",
    video: "https://madetier.com/wp-content/uploads/2025/07/Video-1-Madetier-reels.mp4",
    description:
      "Convertimos el corazón de tu hogar en un espacio moderno, funcional y estéticamente impactante. Nuestra propuesta para cocinas fusiona la eficiencia ergonómica con un diseño personalizado que invita a disfrutar de cada momento en el ambiente culinario.",
    cta: "Explora el potencial de tu cocina",
  },
  {
    id: 4,
    title: "Implementación de locales comerciales",
    video: "https://madetier.com/wp-content/uploads/2025/07/MANU-CAFE-TARAPACA.mp4",
    description:
      "Transformamos locales comerciales en ambientes que destacan por su diseño innovador y funcional, potenciando la imagen de tu marca y creando experiencias memorables para tus clientes. Nos enfocamos en generar espacios atractivos y operativos, ideales para impulsar el negocio.",
    cta: "Conoce más sobre cómo potenciar tu local",
  },
];

export default function TabsServicios() {
  const [activeTab, setActiveTab] = useState(1);

  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 text-base font-medium rounded transition-colors ${
                activeTab === tab.id
                  ? "bg-gold text-white"
                  : "bg-beige text-dark-teal/70 hover:text-dark-teal"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <video
              src={active.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[305px] object-cover block rounded-lg shadow-sm"
              controlsList="nodownload"
            />
          </div>
          <div>
            <h2 className="text-[30px] font-bold text-gold font-slab mb-4">{active.title}</h2>
            <p className="text-dark-teal/70 leading-relaxed mb-6 text-sm">
              <strong className="text-dark-teal">Descripción:</strong>
              <br />
              {active.description}
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center bg-green text-white px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {active.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
