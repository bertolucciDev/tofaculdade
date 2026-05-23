import { Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative px-4 pt-12 pb-8 sm:px-6 sm:pt-16 sm:pb-10 md:px-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl glass-strong p-6 text-center glow-gold sm:p-10">
          <div className="font-display font-bold text-gradient-gold text-[clamp(1.5rem,3vw,2.5rem)]">
            Turma II · Terapia Ocupacional
          </div>
          <div className="mt-2 text-[11px] tracking-widest text-muted-foreground sm:text-sm">ITE — INSTITUIÇÃO TOLEDO DE ENSINO</div>
          <p className="mx-auto mt-6 max-w-xl text-sm italic text-foreground/90 sm:text-base">
            "Mais que um trabalho, a terapia ocupacional é um ato de amor e um compromisso com a vida."
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            {[Instagram, Facebook, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Rede social"
                className="flex h-11 w-11 items-center justify-center rounded-full glass transition-all hover:scale-110 hover:bg-[var(--gold)]/20 hover:text-[var(--gold)]"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} TO Experience · Feito com 💛 pela Turma II
        </div>
      </div>
    </footer>
  );
}
