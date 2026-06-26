import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHardHat } from "@fortawesome/free-solid-svg-icons";

export default function ServiciosPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <FontAwesomeIcon icon={faHardHat} style={{ width: 80, height: 80 }} className="text-gold mx-auto mb-8" />
        <h1 className="text-4xl md:text-5xl font-bold text-dark-teal font-slab mb-4">
          ESTAMOS TRABAJANDO
        </h1>
        <p className="text-dark-teal/60 text-lg">
          Pronto tendremos novedades para ti.
        </p>
      </div>
    </section>
  );
}
