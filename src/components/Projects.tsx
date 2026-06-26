import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const videos = [
  "https://madetier.com/wp-content/uploads/2025/07/Video-1-Madetier-reels.mp4",
  "https://madetier.com/wp-content/uploads/2025/07/MANU-CAFE-TARAPACA.mp4",
  "https://madetier.com/wp-content/uploads/2025/07/Video-3-Madetier-Interiores.mp4",
];

export default function Projects() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold font-slab leading-tight">
            Nuestros proyectos son el mejor testimonio de nuestra excelencia
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((src, i) => (
            <div key={i} className="aspect-video rounded-lg overflow-hidden bg-black">
              <video
                src={src}
                controls
                muted
                playsInline
                className="w-full h-full object-cover"
                disablePictureInPicture
                controlsList="nodownload"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 bg-green text-white px-5 py-2.5 rounded-[50px] font-medium hover:opacity-90 transition-opacity"
          >
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            Ver más proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}
