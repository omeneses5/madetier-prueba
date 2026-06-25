import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronCircleRight,
  faPhoneAlt,
  faMapMarkerAlt,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

const socialLinks = [
  { icon: faTiktok, href: "https://www.tiktok.com/@madetier?lang=es-419", label: "Tiktok" },
  { icon: faInstagram, href: "https://www.instagram.com/mueblesmadetier", label: "Instagram" },
  { icon: faFacebook, href: "https://www.facebook.com/madetier/", label: "Facebook" },
];

const interestLinks = [
  { label: "¿Quiénes somos?", href: "/nosotros/" },
  { label: "Políticas de Privacidad", href: "/privacidad/" },
  { label: "Aviso Legal", href: "/aviso-legal/" },
  { label: "Libro de Reclamos", href: "/libro-reclamos/" },
];

const contactItems = [
  { icon: faPhoneAlt, text: "977 510 247", href: "tel:+51977510247" },
  { icon: faPhoneAlt, text: "961 075 917", href: "tel:+51961075917" },
  { icon: faCalendarAlt, text: "Horario de Atención: 10 am a 7pm" },
  { icon: faMapMarkerAlt, text: "Taller: Jr. Juan Villacorta Mz N L 05 – Manantay – Pucallpa -Perú" },
  { icon: faStore, text: "Tienda: Av. Union mz 3 lt 7 referencia cruce con universitaria" },
];

export default function Footer() {
  return (
    <footer className="bg-footer-bg pt-16 pb-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 pb-12">
          <div>
            <Image
              src="https://madetier.com/wp-content/uploads/2025/06/Logo_sinFondo.png"
              alt="Madetier"
              width={160}
              height={160}
              className="w-40 h-auto mb-5"
            />
            <p className="text-dark-teal/70 text-sm leading-relaxed">
              <strong>Madetier</strong> ofrece muebles a medida y diseños funcionales con calidad y
              rapidez. Transformamos espacios en hogares, oficinas y negocios únicos, comprometidos
              con la sostenibilidad.
            </p>
          </div>

          <div>
            <h3 className="text-gold font-bold text-lg font-slab mb-6">ENLACES DE INTERÉS</h3>
            <ul className="space-y-3">
              {interestLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-dark-teal/70 hover:text-green transition-colors text-sm flex items-center gap-2"
                  >
                    <FontAwesomeIcon icon={faChevronCircleRight} className="w-3 h-3 text-gold shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-gold font-bold text-lg font-slab mb-6">CONTACTO</h3>
            <ul className="space-y-3 text-sm text-dark-teal/70">
              {contactItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FontAwesomeIcon icon={item.icon} className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  {item.href ? (
                    <a href={item.href} className="hover:text-green transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-gold text-white flex items-center justify-center hover:bg-green transition-colors"
                >
                  <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green py-4">
        <p className="text-center text-white text-sm">
          Todos los Derechos Reservados Copyright &copy; 2025
        </p>
      </div>
    </footer>
  );
}
