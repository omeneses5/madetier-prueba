import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import nosotrosImg from "../../assets/nosotros.png";

export default function About() {
  return (
    <section className="bg-beige py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={nosotrosImg}
              alt="Sobre Madetier"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gold font-slab mb-6">
              Sobre nosotros
            </h2>
            <p className="text-dark-teal/80 leading-relaxed mb-8">
              En Madetier, convertimos la madera en experiencias únicas. Somos una empresa peruana
              especializada en el diseño y fabricación de muebles a medida, con un enfoque en
              funcionalidad, durabilidad y estilo. Diseñamos espacios personalizados que reflejan
              la identidad de cada cliente, combinando creatividad, compromiso y materiales
              sostenibles.
            </p>
            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 bg-green text-white px-5 py-2.5 rounded-[50px] font-medium hover:opacity-90 transition-opacity"
            >
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              Conócenos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
