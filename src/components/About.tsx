import { motion } from "framer-motion";
import { InteractiveModel } from "./ThreeScene";

export function About() {
  return (
    <section id="about" className="relative px-4 py-16 sm:px-6 sm:py-24 md:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-16 lg:grid-cols-12 2xl:max-w-[100rem]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6 lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--accent-soft)] sm:text-[11px]">
            <span className="h-px w-8 bg-[var(--accent-bright)]" />
            A profissão
          </div>
          <h2 className="font-display font-normal leading-[1.05] text-[clamp(1.9rem,4.6vw,3.75rem)]">
            O que é <span className="italic text-gradient-gold">Terapia Ocupacional?</span>
          </h2>
          <div className="space-y-5 font-sans text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            <p>
              É uma profissão da saúde dedicada a promover{" "}
              <span className="font-medium text-foreground">
                autonomia, inclusão e qualidade de vida
              </span>{" "}
              por meio de atividades significativas — ocupações que dão sentido ao cotidiano de
              cada pessoa.
            </p>
            <p>
              O terapeuta ocupacional atua com pessoas de todas as idades em processos de
              reabilitação física, mental, social e cognitiva, combinando ciência, criatividade e
              profundo respeito humano.
            </p>
            <blockquote className="relative rounded-2xl border-l-2 border-[var(--accent-bright)] bg-[var(--ocean-mid)]/30 py-4 pl-5 pr-4 font-display text-lg italic text-[var(--accent-soft)] sm:text-xl">
              “Mais que um trabalho, a Terapia Ocupacional é um ato de amor e um compromisso com a
              vida.”
            </blockquote>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative lg:col-span-5"
        >
          <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-[var(--accent-bright)]/20 to-[var(--accent-mid)]/25 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl surface-tile p-4 glow-green">
            <InteractiveModel />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
