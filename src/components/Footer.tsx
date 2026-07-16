import { Instagram, Globe, Contact2 } from "lucide-react";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/iteoficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    label: "Instagram",
  },
  { icon: Globe, href: "https://ite.edu.br/", label: "Site" },
  { icon: Contact2, href: "https://ite.edu.br/contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="relative px-4 pt-16 pb-10 sm:px-6 sm:pt-20 md:px-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-bright)]/50 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="surface-tile relative overflow-hidden rounded-[2rem] p-8 text-center sm:p-12">
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[var(--accent-bright)]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-[var(--accent-mid)]/15 blur-3xl" />

          <div className="relative">
            <div className="font-sans text-[11px] uppercase tracking-[0.3em] text-[var(--accent-soft)]">
              ITE · Instituição Toledo de Ensino
            </div>
            <div className="mt-3 font-display font-normal text-gradient-gold text-[clamp(1.9rem,4vw,3rem)]">
              Turma II · Terapia Ocupacional
            </div>

            <p className="mx-auto mt-6 max-w-xl font-display text-lg italic text-foreground/85 sm:text-xl">
              “Mais que um trabalho, a Terapia Ocupacional é um ato de amor e um compromisso com a
              vida.”
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--accent-soft)]/20 bg-[var(--ocean-mid)]/40 transition-all hover:scale-105 hover:border-[var(--accent-bright)]/60 hover:text-[var(--accent-bright)]"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-1 text-center font-sans text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} TO Experience · Turma II</p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://instagram.com/seu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--accent-soft)] hover:text-[var(--accent-bright)] hover:underline"
            >
              Luis Otavio Bertolucci Oliveira
            </a>{" "}
            · Full Stack Developer
          </p>
        </div>
      </div>
    </footer>
  );
}
