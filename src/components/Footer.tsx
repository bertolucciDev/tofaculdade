import { Instagram, Globe, Contact2 } from "lucide-react";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/iteoficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    label: "Instagram",
  },
  {
    icon: Globe,
    href: "https://ite.edu.br/",
    label: "Site",
  },
  {
    icon: Contact2,
    href: "https://ite.edu.br/contato",
    label: "Contato",
  },
];

export function Footer() {
  return (
    <footer className="relative px-4 pt-12 pb-8 sm:px-6 sm:pt-16 sm:pb-10 md:px-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl glass-strong p-6 text-center glow-gold sm:p-10">
          <div className="font-display font-bold text-gradient-gold text-[clamp(1.5rem,3vw,2.5rem)]">
            Turma II · Terapia Ocupacional
          </div>

          <div className="mt-2 text-[11px] tracking-widest text-muted-foreground sm:text-sm">
            ITE — INSTITUIÇÃO TOLEDO DE ENSINO
          </div>

          <p className="mx-auto mt-6 max-w-xl text-sm italic text-foreground/90 sm:text-base">
            "Mais que um trabalho, a terapia ocupacional é um ato de amor e um compromisso com a
            vida."
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full glass transition-all hover:scale-110 hover:bg-[var(--gold)]/20 hover:text-[var(--gold)]"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground space-y-1">
          <p>© {new Date().getFullYear()} TO Experience · Feito com 💛 pela Turma II</p>

          <p>
            Desenvolvido por{" "}
            <a
              href="https://instagram.com/seu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--gold)] hover:underline"
            >
              Luis Otavio Bertolucci Oliveira
            </a>{" "}
            • Full Stack Developer
          </p>
        </div>
      </div>
    </footer>
  );
}
