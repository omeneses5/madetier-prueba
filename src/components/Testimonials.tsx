import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    name: "María García",
    role: "Cliente residencial",
    text: "Madetier transformó por completo mi hogar. La calidad de los muebles y la atención al detalle superaron mis expectativas. Ahora tengo un espacio que realmente refleja mi personalidad.",
  },
  {
    name: "Carlos Mendoza",
    role: "Dueño de local comercial",
    text: "Necesitábamos mobiliario para nuestro nuevo local y Madetier nos ofreció soluciones creativas que optimizaron cada metro cuadrado. Entregaron a tiempo y con una calidad impecable.",
  },
  {
    name: "Ana Torres",
    role: "Arquitecta",
    text: "Trabajar con Madetier ha sido una experiencia excepcional. Su equipo entiende las necesidades técnicas del diseño y las traduce en muebles funcionales y estéticamente impecables.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-off-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold font-slab">
            Testimonios
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-md flex flex-col">
              <FontAwesomeIcon icon={faQuoteLeft} style={{ width: 32, height: 32 }} className="text-green mb-4" />
              <p className="text-dark-teal/70 leading-relaxed text-sm mb-6 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-bold text-dark-teal font-slab">{t.name}</p>
                <p className="text-dark-teal/60 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
