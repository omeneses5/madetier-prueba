import Image from "next/image";
import Link from "next/link";
import TabsServicios from "@/components/TabsServicios";

export default function ServiciosPage() {
  return (
    <>
      <section className="relative min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://madetier.com/wp-content/uploads/2025/07/Fondo-de-Servicio.png"
            alt=""
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
        <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-slab">Servicios</h1>
          </div>
        </section>

      <TabsServicios />

      <section className="py-20 md:py-28">
        <div className="max-w-[1120px] mx-auto px-4">
          <div className="bg-beige p-10 rounded-lg text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gold font-slab leading-tight mb-6">
              Descubre el potencial de tus espacios
            </h2>
            <p className="text-[#111] leading-relaxed mb-10">
              <strong className="text-[#111]">¿Listo para impulsar tu negocio? 🚀</strong>
              <br />
              En Madetier fusionamos creatividad, sostenibilidad y la precisión artesanal para
              transformar cada idea en ambientes encantadores y funcionales. Recibe una evaluación
              gratuita y descubre cómo cada detalle puede marcar la diferencia en tus proyectos.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-green text-white px-6 py-3 text-lg font-medium hover:opacity-90 transition-opacity"
            >
              Inicia tu transformación
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
