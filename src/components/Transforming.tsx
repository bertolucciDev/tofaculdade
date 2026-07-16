import { motion } from "framer-motion";

const moments = [
  { phrase: "Cada gesto importa.", detail: "Pequenas conquistas constroem grandes histórias de autonomia." },
  { phrase: "A escuta é cuidado.", detail: "Compreender o outro é o primeiro passo de toda intervenção." },
  { phrase: "Reabilitar é reinventar.", detail: "Devolvemos sentido e movimento ao cotidiano." },
  { phrase: "Incluir é a missão.", detail: "Promovemos direitos humanos e cidadania plena." },
];

export function Transforming() {
  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-24 md:px-12">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[var(--accent-bright)]/[0.04] to-transparent" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-2xl sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--accent-soft)] sm:text-[11px]">
            <span className="h-px w-8 bg-[var(--accent-bright)]" />
            Nossa missão
          </div>
          <h2 className="mt-4 font-display font-normal text-[clamp(1.9rem,4.4vw,3.5rem)]">
            Transformando <span className="italic text-gradient-gold">vidas</span>, uma ocupação
            por vez
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
          {moments.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="surface-tile relative overflow-hidden rounded-2xl p-6 sm:p-8"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--accent-bright)]/10 blur-3xl" />
              <div className="relative">
                <div className="font-display text-2xl italic text-[var(--accent-soft)] sm:text-3xl">
                  {m.phrase}
                </div>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {m.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
