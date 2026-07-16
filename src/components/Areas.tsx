import { motion } from "framer-motion";
import {
  Hospital,
  Brain,
  Activity,
  GraduationCap,
  Home,
  Briefcase,
  HeartHandshake,
  Baby,
} from "lucide-react";

const areas = [
  {
    icon: Hospital,
    title: "Hospitais",
    desc: "Reabilitação e cuidado interdisciplinar em ambiente hospitalar.",
    span: "lg:col-span-3 lg:row-span-2",
    accent: "bright",
  },
  {
    icon: Brain,
    title: "Saúde Mental",
    desc: "Suporte psicossocial, escuta ativa e reconstrução de rotinas.",
    span: "lg:col-span-3",
  },
  {
    icon: Activity,
    title: "Reabilitação Física",
    desc: "Recuperação funcional, movimento e independência.",
    span: "lg:col-span-3",
  },
  {
    icon: GraduationCap,
    title: "Contexto Escolar",
    desc: "Inclusão e desenvolvimento infantil em espaços educativos.",
    span: "lg:col-span-2",
  },
  {
    icon: Home,
    title: "Atendimento Domiciliar",
    desc: "Cuidado personalizado no ambiente de vida da pessoa.",
    span: "lg:col-span-2",
  },
  {
    icon: Baby,
    title: "Pediatria",
    desc: "Estimulação, brincar terapêutico e neurodesenvolvimento.",
    span: "lg:col-span-2",
  },
  {
    icon: Briefcase,
    title: "Saúde do Trabalhador",
    desc: "Ergonomia, prevenção e qualidade de vida ocupacional.",
    span: "lg:col-span-3",
  },
  {
    icon: HeartHandshake,
    title: "Instituições Sociais",
    desc: "Direitos humanos, inclusão e promoção de cidadania.",
    span: "lg:col-span-3",
  },
];

export function Areas() {
  return (
    <section id="areas" className="relative px-4 py-16 sm:px-6 sm:py-24 md:px-12">
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
            Áreas de atuação
          </div>
          <h2 className="mt-4 font-display font-normal text-[clamp(1.9rem,4.4vw,3.5rem)]">
            Onde a <span className="italic text-gradient-gold">TO</span> transforma o cotidiano
          </h2>
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground sm:text-base">
            Do hospital ao domicílio, da escola à empresa — o terapeuta ocupacional constrói pontes
            entre a pessoa, suas ocupações e o mundo.
          </p>
        </motion.div>

        <div className="grid auto-rows-[minmax(150px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6">
          {areas.map((area, i) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className={`group surface-tile relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-[var(--accent-bright)]/40 hover:shadow-[0_20px_60px_-30px_rgba(92,189,185,0.55)] ${area.span ?? ""}`}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--accent-bright)]/10 blur-3xl transition-opacity group-hover:opacity-70" />
              <div className="relative flex h-full flex-col justify-between gap-4">
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                    area.accent === "bright"
                      ? "bg-[var(--accent-bright)]/20 text-[var(--accent-bright)]"
                      : "bg-[var(--accent-mid)]/25 text-[var(--accent-soft)]"
                  }`}
                >
                  <area.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-normal leading-tight sm:text-[1.65rem]">
                    {area.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                    {area.desc}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
