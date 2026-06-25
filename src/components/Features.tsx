import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy, faHandshake, faSearch } from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faPenFancy,
    title: "Diseño con propósito",
    description: "Cada mueble y espacio es pensado para ser funcional, bello y duradero.",
  },
  {
    icon: faHandshake,
    title: "Compromiso con el cliente",
    description: "Escuchamos, asesoramos y cumplimos lo que prometemos.",
  },
  {
    icon: faSearch,
    title: "Calidad en los detalles",
    description: "Cada mueble y espacio es pensado para ser funcional, bello y duradero.",
  },
];

export default function Features() {
  return (
    <section className="bg-gold py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <FontAwesomeIcon icon={feature.icon} style={{ width: 48, height: 48 }} className="text-white mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white font-slab mb-3">{feature.title}</h3>
              <p className="text-off-white leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
