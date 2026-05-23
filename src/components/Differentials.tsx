import { motion } from "framer-motion";
import { Heart, Users, Palette, Cpu, HandHeart, Lightbulb } from "lucide-react";

const items = [
  { icon: Heart, title: "Humanização", desc: "Cuidado centrado na pessoa." },
  { icon: Users, title: "Inclusão", desc: "Diversidade como princípio." },
  { icon: Palette, title: "Criatividade", desc: "Atividades significativas." },
  { icon: Cpu, title: "Tecnologia", desc: "Recursos modernos de intervenção." },
  { icon: HandHeart, title: "Empatia", desc: "Escuta ativa e compromisso." },
  { icon: Lightbulb, title: "Inovação", desc: "Pesquisa e novas práticas." },
];

export function Differentials() {
  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-24 md:px-12">
      <div className="mx-auto max-w-7xl 2xl:max-w-[100rem]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center sm:mb-16"
        >
          <span className="inline-block rounded-full glass px-4 py-1.5 text-[11px] font-medium tracking-wider text-gold-soft sm:text-xs">
            DIFERENCIAIS
          </span>
          <h2 className="mt-4 font-display font-bold text-[clamp(1.75rem,4vw,3.25rem)]">
            O que nos <span className="text-gradient-gold">move</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex items-start gap-4 rounded-2xl glass p-6 transition-all hover:border-[var(--green-neon)]/40 hover:glow-green"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--green-deep)] to-[var(--green-mid)] text-foreground glow-green transition-transform group-hover:scale-110 group-hover:rotate-6">
                <it.icon className="h-6 w-6 text-[var(--gold-soft)]" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
