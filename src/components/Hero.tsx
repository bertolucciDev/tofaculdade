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
    <section className="relative min-h-[100svh] overflow-hidden px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 md:px-12 2xl:px-20 2xl:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-12 lg:grid-cols-2 2xl:max-w-[100rem]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-5 sm:space-y-7 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[10px] font-medium tracking-wide text-gold-soft sm:px-4 sm:py-2 sm:text-xs">
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span className="whitespace-nowrap">ARRAIÁ · TURMA II · ITE</span>
          </div>

          <h1 className="font-display font-bold leading-[1.08] text-[clamp(2rem,6vw,5.5rem)]">
            Seja bem-vindo(a) ao <span className="text-gradient-gold">arraiá</span> da Turma II de{" "}
            <span className="text-gradient-green">Terapia Ocupacional</span>
            <span className="ml-2 inline-block animate-float">🌽</span>
          </h1>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg lg:mx-0">
            Nosso curso une aprendizado, prática e criatividade — formando profissionais que transformam vidas
            através do cuidado humano, da reabilitação e da inclusão.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2 sm:gap-4 lg:justify-start">
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-5 py-3 text-xs font-semibold text-primary-foreground glow-gold transition-transform hover:scale-105 sm:px-7 sm:py-3.5 sm:text-sm"
            >
              Conhecer o Curso
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-xs font-semibold text-foreground transition-colors hover:bg-white/10 sm:px-7 sm:py-3.5 sm:text-sm"
            >
              Explorar Atividades
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 pt-4 sm:gap-8 sm:pt-6 lg:justify-start">
            <div>
              <div className="font-display text-2xl font-bold text-gradient-gold sm:text-3xl">+30</div>
              <div className="text-[11px] text-muted-foreground sm:text-xs">Estudantes na turma</div>
            </div>
            <div className="hidden h-12 w-px bg-border sm:block" />
            <div>
              <div className="font-display text-2xl font-bold text-gradient-gold sm:text-3xl">7+</div>
              <div className="text-[11px] text-muted-foreground sm:text-xs">Áreas de atuação</div>
            </div>
            <div className="hidden h-12 w-px bg-border sm:block" />
            <div>
              <div className="font-display text-2xl font-bold text-gradient-gold sm:text-3xl">100%</div>
              <div className="text-[11px] text-muted-foreground sm:text-xs">Humano</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
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
                  <div className="aspect-[3/2] overflow-hidden rounded-[1.5rem] sm:aspect-[4/5]">
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
