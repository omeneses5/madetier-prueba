import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faStar, faPencilRuler, faAward, faHandshake, faLightbulb, faLeaf } from "@fortawesome/free-solid-svg-icons";

const historia = [
  {
    icon: faStar,
    title: "Nuestra Misión",
    description:
      "Diseñar y fabricar muebles funcionales, estéticos y duraderos, implementando espacios que reflejen la identidad de cada cliente, con altos estándares de calidad, rapidez en la entrega y un servicio personalizado.",
  },
  {
    icon: faEye,
    title: "Nuestra Visión",
    description:
      "Ser una marca líder en diseño y fabricación de muebles en el Perú, reconocida por su creatividad, calidad y compromiso con la satisfacción del cliente.",
  },
];

const valoresRow1 = [
  { icon: faPencilRuler, title: "Diseño con propósito", description: "Fusionamos estética y practicidad en cada detalle para contar historias únicas a través de nuestros espacios." },
  { icon: faAward, title: "Calidad excepcional", description: "Seleccionamos materiales premium y aplicamos acabados de primera, garantizando resultados que marcan la diferencia." },
  { icon: faHandshake, title: "Compromiso total", description: "Nos enfocamos en entender y superar tus expectativas, ofreciendo soluciones personalizadas y confiables." },
];

const valoresRow2 = [
  { icon: faLightbulb, title: "Innovación constante", description: "Integramos técnicas tradicionales con métodos modernos, asegurando que nuestras creaciones sigan a la vanguardia." },
  { icon: faLeaf, title: "Sostenibilidad responsable", description: "Apostamos por el uso de materiales y procesos que cuidan el medio ambiente, contribuyendo a un desarrollo respetuoso y perdurable." },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="relative min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://madetier.com/wp-content/uploads/2025/07/Fondo-de-Nosotros.png"
            alt=""
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white font-slab leading-tight">
            ¿Quiénes Somos?
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-green font-slab mb-6">
                ¿Quiénes Somos?
              </h2>
              <p className="text-dark-teal/80 leading-relaxed">
                Creamos muebles y espacios con pasión por la madera. Nacimos de una tradición
                familiar con raíces en el manejo responsable del bosque. Hoy, fabricamos, diseñamos
                e implementamos ambientes funcionales y con identidad para hogares y empresas en
                todo el Perú. Nuestra materia prima proviene de bosques manejados con un
                aprovechamiento sostenible.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="https://madetier.com/wp-content/uploads/2025/07/DSC00692-scaled.jpg"
                alt="Madetier"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-40 h-40 mb-6">
                <Image
                  src="https://madetier.com/wp-content/uploads/2025/07/cropped-LOGO_MADETIER-scaled-1.jpg"
                  alt="Madetier"
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              </div>
              <div className="w-16 h-0.5 bg-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-dark-teal font-slab">
                Nuestra Historia
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-dark-teal/80 leading-relaxed mb-10">
                Nacimos con la pasión por la madera y el diseño. Desde nuestros inicios en el taller
                hasta consolidarnos como una empresa con showroom propio, hemos trabajado con
                compromiso y creatividad para brindar experiencias únicas a través de nuestros
                muebles y espacios. Cada proyecto nos ha permitido crecer, innovar y conectar con
                familias y empresas que confían en nuestro trabajo para darle vida a sus ideas.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gold font-slab mb-3">Origen y Pasión</h3>
                  <p className="text-dark-teal/70 leading-relaxed text-sm">
                    El alma de Madetier se forjó en un taller lleno de sueños y dedicación. La
                    inspiración de la naturaleza y la tradición artesanal nos impulsó a transformar
                    simples materiales en creaciones auténticas que reflejan calidez y detalle.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gold font-slab mb-3">
                    Innovación y Crecimiento
                  </h3>
                  <p className="text-dark-teal/70 leading-relaxed text-sm">
                    A lo largo del tiempo, hemos incorporado técnicas modernas sin perder la esencia
                    artesanal que nos caracteriza. Cada proyecto es una oportunidad para combinar lo
                    mejor de ambos mundos, garantizando espacios que son tanto estéticos como
                    funcionales, y reafirmando nuestro compromiso con la calidad y la evolución
                    continua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {historia.map((item) => (
              <div key={item.title} className="bg-beige p-10 text-center rounded-[50px]">
                <FontAwesomeIcon icon={item.icon} style={{ width: 36, height: 36 }} className="text-green mb-5" />
                <h3 className="text-xl font-bold text-gold font-slab mb-3">{item.title}</h3>
                <p className="text-dark-teal/70 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green font-slab">
              Nuestros Valores
            </h2>
            <div className="w-20 h-0.5 bg-gold mx-auto mt-4" />
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
              {valoresRow1.map((valor) => (
                <div key={valor.title} className="text-center">
                  <FontAwesomeIcon icon={valor.icon} style={{ width: 32, height: 32 }} className="text-green mb-5" />
                  <h3 className="text-lg font-bold text-green font-slab mb-3">{valor.title}</h3>
                  <p className="text-dark-teal/70 leading-relaxed text-sm">{valor.description}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
              {valoresRow2.map((valor) => (
                <div key={valor.title} className="text-center">
                  <FontAwesomeIcon icon={valor.icon} style={{ width: 32, height: 32 }} className="text-green mb-5" />
                  <h3 className="text-lg font-bold text-green font-slab mb-3">{valor.title}</h3>
                  <p className="text-dark-teal/70 leading-relaxed text-sm">{valor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
