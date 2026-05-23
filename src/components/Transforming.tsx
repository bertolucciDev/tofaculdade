import { motion } from "framer-motion";

const moments = [
  { phrase: "Cada gesto importa.", detail: "Pequenas conquistas constroem grandes histórias de autonomia." },
  { phrase: "A escuta é cuidado.", detail: "Compreender o outro é o primeiro passo de toda intervenção." },
  { phrase: "Reabilitar é reinventar.", detail: "Devolvemos sentido e movimento ao cotidiano." },
  { phrase: "Incluir é a missão.", detail: "Promovemos direitos humanos com ênfase nas pessoas com deficiência." },
];

export function Transforming() {
  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-24 md:px-12">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[var(--gold)]/5 to-transparent" />
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center sm:mb-16"
        >
          <span className="inline-block rounded-full glass px-4 py-1.5 text-[11px] font-medium tracking-wider text-gold-soft sm:text-xs">
            NOSSA MISSÃO
          </span>
          <h2 className="mt-4 font-display font-bold text-[clamp(1.75rem,4vw,3.25rem)]">
            Transformando <span className="text-gradient-gold">Vidas</span>
          </h2>
        </motion.div>

        <div className="relative space-y-6 before:absolute before:left-6 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-[var(--gold)] before:via-[var(--green-neon)] before:to-transparent md:before:left-1/2">
          {moments.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex gap-6 md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12"}`}
            >
              <div className="absolute left-4 top-6 h-4 w-4 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-soft)] ring-4 ring-background glow-gold md:left-auto md:right-auto"
                   style={i % 2 ? { left: "-2rem" } : { right: "-2rem", left: "auto" }}
              />
              <div className="ml-12 flex-1 rounded-2xl glass p-6 md:ml-0">
                <div className="font-display text-2xl font-semibold text-gradient-gold">{m.phrase}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
