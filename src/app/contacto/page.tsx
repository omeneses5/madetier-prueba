"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const contactInfo = [
  { icon: faMapMarkerAlt, text: "Av. Union mz 3 lt 7 referencia cruce con universitaria" },
  { icon: faPhoneAlt, text: "+51 977 510 247 / +51 961 075 917" },
  { icon: faClock, text: "Horario de atención: 10 a.m. a 7 p.m." },
];

const socialLinks = [
  { icon: faFacebook, href: "https://www.facebook.com/madetier/", label: "Facebook" },
  { icon: faInstagram, href: "https://www.instagram.com/mueblesmadetier", label: "Instagram" },
  { icon: faTiktok, href: "https://www.tiktok.com/@madetier?lang=es-419", label: "Tiktok" },
];

const serviceOptions = [
  "Diseño de interiores e Implementación de espacios",
  "Fabricación e instalación de mobiliario y acabados",
  "Diseño e implementación de cocinas",
  "Implementación de locales comerciales",
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="relative min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://madetier.com/wp-content/uploads/2025/07/Fondo-de-Contacto.png"
            alt=""
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white font-slab leading-tight">
            Contáctanos
          </h1>
        </div>
      </section>

      <section className="bg-beige py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold text-green font-slab mb-8">Ponte en contacto</h2>

              <ul className="space-y-4 mb-12">
                {contactInfo.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <FontAwesomeIcon icon={item.icon} className="w-5 h-5 text-gold shrink-0" />
                    <span className="text-dark-teal/80">{item.text}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl md:text-2xl font-bold text-green font-slab mb-6">Encuéntranos</h2>

              <div className="h-80 rounded-lg overflow-hidden mb-12">
                <iframe
                  src="https://maps.google.com/maps?q=8%C2%B023%2750.5%22S%2074%C2%B032%2737.4%22W&t=m&z=15&output=embed"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Ubicación Madetier"
                />
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-green font-slab mb-6">Síganos</h2>

              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-gold text-white hover:bg-green transition-colors"
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 bg-white p-8 rounded-[15px]">
              <h3 className="text-2xl font-bold text-green font-slab mb-4 text-center">Envíanos un mensaje</h3>
              <p className="text-dark-teal/70 text-sm mb-6 text-center">Completa el formulario y nos pondremos en contacto contigo.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-dark-teal/20 rounded-lg text-sm focus:outline-none focus:border-green transition-colors"
                  />
                  <input
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    placeholder="Apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-dark-teal/20 rounded-lg text-sm focus:outline-none focus:border-green transition-colors"
                  />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-dark-teal/20 rounded-lg text-sm focus:outline-none focus:border-green transition-colors"
                />
                <div>
                  <label htmlFor="telefono" className="block text-sm font-bold text-dark-teal mb-1">
                    Teléfono <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    placeholder="+51"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 border border-dark-teal/20 rounded-lg text-sm focus:outline-none focus:border-green transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="servicio" className="block text-sm font-bold text-dark-teal mb-1">
                    ¿En qué servicio estás interesado? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 border border-dark-teal/20 rounded-lg text-sm focus:outline-none focus:border-green transition-colors bg-white"
                  >
                    <option value="">-- Selecciona la opción --</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  placeholder="¿Cuál es tu mensaje?"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-dark-teal/20 rounded-lg text-sm focus:outline-none focus:border-green transition-colors resize-y"
                />
                <button
                  type="submit"
                  className="w-full bg-green text-white py-3 rounded-[7px] font-medium hover:opacity-90 transition-opacity"
                >
                  Contáctanos
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
