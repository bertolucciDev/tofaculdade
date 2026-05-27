import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";
import { X } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import g1 from "@/assets/gallery-1.jpeg";
import g2 from "@/assets/gallery-2.jpeg";
import g3 from "@/assets/gallery-3.jpeg";
import g4 from "@/assets/gallery-4.jpeg";
import g5 from "@/assets/gallery-5.jpeg";
import g6 from "@/assets/gallery-6.jpeg";
import g7 from "@/assets/gallery-7.jpeg";
import g8 from "@/assets/gallery-8.jpeg";

const photos = [g1, g2, g3, g4, g5, g6, g7, g8];

export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative max-w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-24 md:px-12">
      <div className="mx-auto w-full max-w-7xl min-w-0 2xl:max-w-[100rem]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 text-center sm:mb-12"
        >
          <span className="inline-block rounded-full glass px-4 py-1.5 text-[11px] font-medium tracking-wider text-gold-soft sm:text-xs">
            GALERIA
          </span>
          <h2 className="mt-4 font-display font-bold text-[clamp(1.75rem,4vw,3.25rem)]">
            Momentos da <span className="text-gradient-gold">turma</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Espaços, equipamentos e vivências que formam a nossa jornada em Terapia Ocupacional.
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={12}
          slidesPerView={1}
          centeredSlides={false}
          loop
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 20, centeredSlides: true },
            1024: { slidesPerView: 3.2, spaceBetween: 24 },
            1536: { slidesPerView: 4.2, spaceBetween: 28 },
          }}
          className="w-full max-w-full !overflow-hidden sm:!overflow-visible"
        >
          {photos.map((src, i) => (
            <SwiperSlide key={i}>
              <motion.button
                whileHover={{ scale: 1.03, y: -6 }}
                onClick={() => setLightbox(src)}
                className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl glass p-2 transition-all hover:glow-gold sm:aspect-[3/4]"
              >
                <img
                  src={src}
                  alt={`Foto ${i + 1} da turma`}
                  loading="lazy"
                  className="h-full w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-xl"
        >
          <button className="absolute right-6 top-6 rounded-full glass p-3 text-foreground">
            <X className="h-5 w-5" />
          </button>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={lightbox}
            alt="Visualização ampliada"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl glow-gold"
          />
        </motion.div>
      )}
    </section>
  );
}
