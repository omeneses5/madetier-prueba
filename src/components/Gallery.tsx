"use client";

import { useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { SwiperClass } from "swiper/react";
import prod1 from "../../assets/producto-1.png";
import prod2 from "../../assets/producto-2.png";
import prod3 from "../../assets/producto-3.png";
import prod4 from "../../assets/producto-4.png";
import prod5 from "../../assets/producto-5.png";
import prod6 from "../../assets/producto-6.png";

const images = [prod1, prod2, prod3, prod4, prod5, prod6];

export default function Gallery() {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="py-20 md:py-28">
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
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 bg-green text-white px-5 py-2.5 rounded-[50px] font-medium hover:opacity-90 transition-opacity"
          >
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            Ver todos los productos
          </Link>
        </div>
      </div>
    </section>
  );
}
