"use client";

import { useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { SwiperClass } from "swiper/react";

const images = [
  "https://madetier.com/wp-content/uploads/2025/06/13-scaled.jpg",
  "https://madetier.com/wp-content/uploads/2025/06/7D2A6436-scaled.jpg",
  "https://madetier.com/wp-content/uploads/2025/06/14-scaled.jpg",
  "https://madetier.com/wp-content/uploads/2025/07/3-scaled.jpg",
  "https://madetier.com/wp-content/uploads/2025/06/2-scaled.jpg",
];

export default function Gallery() {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="relative py-20 md:py-28 pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold font-slab">
            Galería de Productos
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        <div className="relative">
          <Swiper
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
            loop
            className="rounded-lg overflow-hidden"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={src}
                    alt={`Producto ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 text-green hover:text-green transition-colors"
            aria-label="Anterior"
          >
            <FontAwesomeIcon icon={faChevronLeft} style={{ width: 32, height: 32 }} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 text-green hover:text-green transition-colors"
            aria-label="Siguiente"
          >
            <FontAwesomeIcon icon={faChevronRight} style={{ width: 32, height: 32 }} />
          </button>
        </div>

        <div className="text-center mt-10">
          <a
            href="/productos/"
            className="inline-flex items-center gap-2 bg-green text-white px-5 py-2.5 rounded-[50px] font-medium hover:opacity-90 transition-opacity"
          >
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            Ver todos los productos
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
        <Image
          src="https://madetier.com/wp-content/uploads/2025/07/IconTwoColor.png"
          alt=""
          width={140}
          height={126}
          className="w-32 md:w-36 h-auto"
        />
      </div>
    </section>
  );
}
