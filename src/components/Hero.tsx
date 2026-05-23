import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { ArrowRight, Sparkles } from "lucide-react";
import g1 from "@/assets/gallery-1.jpeg";
import g3 from "@/assets/gallery-3.jpeg";
import g4 from "@/assets/gallery-4.jpeg";
import g6 from "@/assets/gallery-6.jpeg";

const heroImgs = [g1, g3, g4, g6];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-28 pb-20 md:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium tracking-wide text-gold-soft">
            <Sparkles className="h-3.5 w-3.5" />
            ARRAIÁ UNIVERSITÁRIO · TURMA II · ITE
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
            Seja bem-vindo(a) ao <span className="text-gradient-gold">arraiá</span> da Turma II de{" "}
            <span className="text-gradient-green">Terapia Ocupacional</span>
            <span className="ml-2 inline-block animate-float">🌽</span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nosso curso une aprendizado, prática e criatividade — formando profissionais que transformam vidas
            através do cuidado humano, da reabilitação e da inclusão.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-gold transition-transform hover:scale-105"
            >
              Conhecer o Curso
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
            >
              Explorar Atividades
            </a>
          </div>

          <div className="flex gap-8 pt-6">
            <div>
              <div className="font-display text-3xl font-bold text-gradient-gold">+30</div>
              <div className="text-xs text-muted-foreground">Estudantes na turma</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="font-display text-3xl font-bold text-gradient-gold">7+</div>
              <div className="text-xs text-muted-foreground">Áreas de atuação</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="font-display text-3xl font-bold text-gradient-gold">100%</div>
              <div className="text-xs text-muted-foreground">Humano</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[var(--gold)]/30 to-[var(--green-neon)]/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] glass-strong p-2 glow-gold">
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              effect="fade"
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop
              pagination={{ clickable: true }}
              className="rounded-[1.5rem]"
            >
              {heroImgs.map((src, i) => (
                <SwiperSlide key={i}>
                  <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                    <img src={src} alt={`Atividade da turma ${i + 1}`} className="h-full w-full object-cover" loading="eager" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-4 -bottom-4 rounded-2xl glass px-5 py-3 text-xs"
          >
            <div className="font-display text-lg font-bold text-gradient-gold">TO Experience</div>
            <div className="text-muted-foreground">Cuidado · Ciência · Arte</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
