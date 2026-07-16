import { motion } from "framer-motion";
import { Heart, Users, Palette, Cpu, HandHeart, Lightbulb } from "lucide-react";

const items = [
  { icon: Heart, title: "Humanização", desc: "Cuidado centrado na pessoa e em suas ocupações." },
  { icon: Users, title: "Inclusão", desc: "A diversidade como princípio ético e clínico." },
  { icon: Palette, title: "Criatividade", desc: "Atividades significativas como recurso terapêutico." },
  { icon: Cpu, title: "Tecnologia", desc: "Recursos assistivos e práticas modernas de intervenção." },
  { icon: HandHeart, title: "Empatia", desc: "Escuta ativa e compromisso com a história do outro." },
  { icon: Lightbulb, title: "Inovação", desc: "Pesquisa, evidência e novas formas de reabilitar." },
];

export function Differentials() {
  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-24 md:px-12">
      <div className="mx-auto max-w-7xl 2xl:max-w-[100rem]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 max-w-2xl sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--accent-soft)] sm:text-[11px]">
            <span className="h-px w-8 bg-[var(--accent-bright)]" />
            O que nos move
          </div>
          <h2 className="mt-4 font-display font-normal text-[clamp(1.9rem,4.4vw,3.5rem)]">
            Princípios que <span className="italic text-gradient-gold">guiam</span> a nossa
            formação
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group surface-tile flex items-start gap-4 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-[var(--accent-bright)]/40"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-bright)]/15 text-[var(--accent-bright)] transition-transform group-hover:scale-110">
                <it.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-normal leading-tight">{it.title}</h3>
                <p className="mt-1.5 font-sans text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
