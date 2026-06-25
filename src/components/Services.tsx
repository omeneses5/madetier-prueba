import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPencilRuler, faBuilding, faCouch, faHardHat } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faPencilRuler,
    title: "Diseño de interiores e implementación de espacios",
    description:
      "Desarrollamos conceptos creativos y funcionales que se adaptan a cada ambiente. Nuestro equipo transforma ideas en espacios únicos, equilibrando estética y practicidad.",
  },
  {
    icon: faBuilding,
    title: "Ejecución de proyectos de interiorismo",
    description:
      "Llevamos a cabo proyectos completos en viviendas, oficinas y locales comerciales, asegurando calidad en cada fase y coherencia en el diseño.",
  },
  {
    icon: faCouch,
    title: "Fabricación e instalación de mobiliario y acabados",
    description:
      "Creamos muebles a medida y aplicamos acabados de alto nivel que complementan cada proyecto, garantizando precisión, durabilidad y estilo.",
  },
  {
    icon: faHardHat,
    title: "Coordinación integral de obra",
    description:
      "Supervisamos cada etapa del proceso constructivo para cumplir con los plazos, presupuesto y calidad pactada, ofreciendo tranquilidad y resultados consistentes.",
  },
];

export default function Services() {
  return (
    <section className="relative bg-beige py-20 md:py-28 pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="p-8 border border-dark-teal/10 shadow-md">
              <h2 className="text-3xl md:text-4xl font-bold text-gold font-slab mb-6">
                Servicios personalizados de diseño e implementación
              </h2>
              <p className="text-dark-teal/70 leading-relaxed mb-8 text-sm">
                Creamos espacios que combinan funcionalidad, estética y confort. Desde el diseño
                conceptual hasta la instalación final, ofrecemos soluciones integrales para hogares,
                oficinas y negocios que buscan calidad y estilo.
              </p>
              <a
                href="/servicios"
                className="inline-flex items-center gap-2 bg-green text-white px-5 py-2.5 rounded-[50px] font-medium hover:opacity-90 transition-opacity"
              >
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                Conoce nuestros servicios
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-8">
                <FontAwesomeIcon icon={service.icon} style={{ width: 24, height: 24 }} className="text-green mb-5" />
                <h3 className="text-lg font-bold text-gold font-slab mb-3">{service.title}</h3>
                <p className="text-dark-teal/70 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
        <Image
          src="https://madetier.com/wp-content/uploads/2025/06/IconTwoColor1.png"
          alt=""
          width={140}
          height={126}
          className="w-32 md:w-36 h-auto"
        />
      </div>
    </section>
  );
}
