import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { ArrowUpRight, HeartPulse, Sparkles, Users } from "lucide-react";
import g1 from "@/assets/gallery-1.jpeg";
import g3 from "@/assets/gallery-3.jpeg";
import g4 from "@/assets/gallery-4.jpeg";
import g6 from "@/assets/gallery-6.jpeg";

const heroImgs = [g1, g3, g4, g6];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] max-w-full overflow-hidden px-4 pt-24 pb-14 sm:px-6 sm:pt-28 sm:pb-20 md:px-10 lg:px-12 2xl:px-20 2xl:pt-36">
      <div className="mx-auto w-full max-w-7xl 2xl:max-w-[100rem]">
        {/* Eyebrow row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 flex flex-wrap items-center justify-between gap-3 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-soft)]/20 bg-[var(--ocean-mid)]/40 px-3 py-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--accent-soft)] sm:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-bright)] shadow-[0_0_10px_var(--accent-bright)]" />
            Turma II · Terapia Ocupacional
          </div>
          <div className="hidden font-sans text-xs tracking-widest text-muted-foreground sm:inline">
            ITE · INSTITUIÇÃO TOLEDO DE ENSINO
          </div>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-6 lg:grid-rows-[auto_auto] lg:gap-6">
          {/* Headline tile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="surface-tile relative overflow-hidden rounded-[2rem] p-6 sm:p-9 lg:col-span-4 lg:row-span-2"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--accent-bright)]/20 blur-3xl animate-drift" />
            <div className="relative flex h-full flex-col justify-between gap-6">
              <div>
                <h1 className="font-display font-normal leading-[1.02] text-[clamp(2rem,7vw,5.5rem)]">
                  Cuidar do{" "}
                  <span className="italic text-[var(--accent-soft)]">cotidiano</span>
                  <br className="hidden sm:block" /> é devolver{" "}
                  <span className="italic text-gradient-gold">sentido</span> à vida.
                </h1>
                <p className="mt-5 max-w-xl font-sans text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                  A Terapia Ocupacional une ciência, escuta e criatividade para promover autonomia,
                  inclusão e qualidade de vida — em cada gesto, em cada ocupação, em cada história.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#about"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent-bright)] px-5 py-3 font-sans text-xs font-semibold tracking-wide text-[var(--ocean-deep)] transition-all hover:bg-[var(--accent-soft)] sm:text-sm"
                >
                  Conhecer a profissão
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#areas"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-soft)]/25 px-5 py-3 font-sans text-xs font-semibold tracking-wide text-[var(--ink,white)] transition-colors hover:bg-white/5 sm:text-sm"
                >
                  Áreas de atuação
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image tile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] border border-[var(--accent-soft)]/15 lg:col-span-2 lg:row-span-2"
          >
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              autoplay={{ delay: 3800, disableOnInteraction: false }}
              loop
              className="h-full"
            >
              {heroImgs.map((src, i) => (
                <SwiperSlide key={i}>
                  <div className="relative aspect-[4/3] h-full w-full lg:aspect-auto lg:min-h-[420px]">
                    <img
                      src={src}
                      alt={`Vivência da turma ${i + 1}`}
                      className="h-full w-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ocean-deep)]/85 via-[var(--ocean-deep)]/10 to-transparent" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
              <div>
                <div className="font-display text-xl italic text-[var(--accent-soft)] sm:text-2xl">
                  Vivências
                </div>
                <div className="font-sans text-[11px] tracking-widest text-white/70">
                  CIÊNCIA · ARTE · CUIDADO
                </div>
              </div>
              <Sparkles className="h-5 w-5 text-[var(--accent-bright)]" />
            </div>
          </motion.div>

          {/* Stat tile — students */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="surface-tile flex items-center gap-4 rounded-[1.5rem] p-5 sm:p-6 lg:col-span-2"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-bright)]/15 text-[var(--accent-bright)]">
              <Users className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="font-display text-3xl leading-none text-[var(--ink,white)] sm:text-4xl">
                +30
              </div>
              <div className="mt-1 font-sans text-xs text-muted-foreground">
                Estudantes na turma
              </div>
            </div>
          </motion.div>

          {/* Stat tile — areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="surface-tile flex items-center gap-4 rounded-[1.5rem] p-5 sm:p-6 lg:col-span-2"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-mid)]/25 text-[var(--accent-soft)]">
              <HeartPulse className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="font-display text-3xl leading-none text-[var(--ink,white)] sm:text-4xl">
                7<span className="text-[var(--accent-bright)]">+</span>
              </div>
              <div className="mt-1 font-sans text-xs text-muted-foreground">
                Áreas de atuação clínica
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
