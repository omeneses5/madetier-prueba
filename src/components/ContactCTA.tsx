import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactCTA() {
  return (
    <section className="relative min-h-[500px] flex items-center overflow-hidden">
      <Image
        src="https://madetier.com/wp-content/uploads/2025/07/Inicio-final.png"
        alt=""
        fill
        className="object-cover object-top"
      />
      <div className="relative max-w-4xl mx-auto px-4 text-center z-10 py-20 md:py-28 [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-slab leading-tight mb-6">
          ¿Tienes un proyecto en mente?
          <br />
          Nosotros lo hacemos realidad.
        </h2>
        <p className="text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
          En Madetier diseñamos y fabricamos espacios a tu medida. Cuéntanos tu idea y te ayudaremos
          a convertirla en un ambiente único, funcional y lleno de estilo.
        </p>
        <Link
          href="/contacto"
          className="inline-flex items-center gap-3 bg-green text-white px-6 py-3 rounded-[50px] text-lg font-medium hover:opacity-90 transition-opacity"
        >
          <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
          Contáctanos ahora
        </Link>
      </div>
    </section>
  );
}
