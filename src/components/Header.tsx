"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import logoSrc from "../../assets/logo-header.png";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Productos", href: "/productos" },
  { label: "Contacto", href: "/contacto" },
];

const socialLinks = [
  { icon: faFacebook, href: "https://www.facebook.com/madetier/", label: "Facebook" },
  { icon: faInstagram, href: "https://www.instagram.com/mueblesmadetier", label: "Instagram" },
  { icon: faTiktok, href: "https://www.tiktok.com/@madetier?lang=es-419", label: "Tiktok" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => {
    const p = pathname.replace(/\/+$/, "") || "/";
    const h = href.replace(/\/+$/, "") || "/";
    return h === "/" ? p === "/" : p.startsWith(h);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src={logoSrc}
              alt="Madetier"
              width={140}
              height={61}
              className="w-auto h-12"
              priority
            />
            </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`${isActive(item.href) ? "text-green" : "text-nav-text"} hover:text-green transition-colors text-sm font-medium tracking-wide capitalize`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-green text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menú"
          >
            <span className={`block w-6 h-0.5 bg-dark-teal transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-dark-teal transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-dark-teal transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="flex flex-col px-4 py-4 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`${isActive(item.href) ? "text-green" : "text-dark-gray"} hover:text-green transition-colors py-2 text-sm font-medium capitalize`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-3 border-t border-gray-100">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-green text-white flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
