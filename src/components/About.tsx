import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section className="relative bg-beige py-20 md:py-28 pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="https://madetier.com/wp-content/uploads/2025/06/480797666_1111412600791068_7157863617726442983_n.jpg"
              alt="Sobre Madetier"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-teal font-slab mb-6">
              Sobre nosotros
            </h2>
            <p className="text-dark-teal/80 leading-relaxed mb-8">
              En Madetier, convertimos la madera en experiencias únicas. Somos una empresa peruana
              especializada en el diseño y fabricación de muebles a medida, con un enfoque en
              funcionalidad, durabilidad y estilo. Diseñamos espacios personalizados que reflejan
              la identidad de cada cliente, combinando creatividad, compromiso y materiales
              sostenibles.
            </p>
            <a
              href="/nosotros/"
              className="inline-flex items-center gap-2 bg-green text-white px-5 py-2.5 rounded-[50px] font-medium hover:opacity-90 transition-opacity"
            >
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              Conócenos
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
        <Image
          src="https://madetier.com/wp-content/uploads/2025/07/IconTwoColor1.png"
          alt=""
          width={140}
          height={126}
          className="w-32 md:w-36 h-auto"
        />
      </div>
    </section>
  );
}
