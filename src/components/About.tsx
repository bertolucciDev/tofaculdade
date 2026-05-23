import { motion } from "framer-motion";
import { InteractiveModel } from "./ThreeScene";

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-block rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wider text-gold-soft">
            SOBRE A PROFISSÃO
          </span>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            O que é <span className="text-gradient-gold">Terapia Ocupacional?</span>
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              A Terapia Ocupacional é uma profissão da área da saúde dedicada a promover{" "}
              <span className="text-foreground font-medium">autonomia, inclusão e qualidade de vida</span> através de
              atividades significativas — ocupações que dão sentido ao cotidiano de cada pessoa.
            </p>
            <p>
              O terapeuta ocupacional atua com pessoas de todas as idades em processos de reabilitação física,
              mental, social e cognitiva, combinando ciência, criatividade e profundo respeito humano.
            </p>
            <p className="border-l-2 border-[var(--gold)] pl-4 italic text-gold-soft">
              "Mais que um trabalho, a terapia ocupacional é um ato de amor e um compromisso com a vida."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--green-neon)]/20 to-[var(--gold)]/20 blur-3xl" />
          <div className="relative rounded-3xl glass-strong p-4 glow-green">
            <InteractiveModel />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
