import { motion } from "framer-motion";
import { Hospital, Brain, Activity, GraduationCap, Home, Briefcase, HeartHandshake } from "lucide-react";

const areas = [
  { icon: Hospital, title: "Hospitais", desc: "Reabilitação e cuidado em ambiente hospitalar." },
  { icon: Brain, title: "Saúde Mental", desc: "Suporte psicossocial e autonomia emocional." },
  { icon: Activity, title: "Reabilitação Física", desc: "Recuperação funcional e movimento." },
  { icon: GraduationCap, title: "Escolas", desc: "Inclusão escolar e desenvolvimento infantil." },
  { icon: Home, title: "Atendimento Domiciliar", desc: "Cuidado personalizado em casa." },
  { icon: Briefcase, title: "Empresas", desc: "Ergonomia e saúde ocupacional." },
  { icon: HeartHandshake, title: "Instituições Sociais", desc: "Promoção de direitos humanos." },
];

export function Areas() {
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
            ÁREAS DE ATUAÇÃO
          </span>
          <h2 className="mt-4 font-display font-bold text-[clamp(1.75rem,4vw,3.25rem)]">
            Onde a <span className="text-gradient-gold">TO</span> transforma vidas
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:border-[var(--gold)]/40 hover:glow-gold"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--gold)]/10 blur-2xl transition-all group-hover:bg-[var(--gold)]/25" />
              <div className="relative space-y-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--gold)] to-[var(--gold-soft)] text-primary-foreground glow-gold">
                  <area.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold">{area.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{area.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
