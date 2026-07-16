import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-3 top-3 z-40 mx-auto flex max-w-6xl items-center justify-between rounded-full glass px-3 py-2 sm:inset-x-4 sm:top-4 sm:px-5 sm:py-3 md:left-6 md:right-6"
    >
      <a href="#" className="flex items-center gap-2.5 font-display text-base font-normal sm:text-lg">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-bright)] to-[var(--accent-mid)] font-sans text-[11px] font-semibold tracking-wide text-[var(--ocean-deep)] sm:h-9 sm:w-9 sm:text-xs">
          TO
        </span>
        <span className="hidden font-display italic text-[var(--accent-soft)] sm:inline">
          Experience
        </span>
      </a>
      <div className="hidden gap-8 font-sans text-sm font-medium md:flex">
        <a href="#about" className="text-muted-foreground transition-colors hover:text-foreground">
          A profissão
        </a>
        <a href="#areas" className="text-muted-foreground transition-colors hover:text-foreground">
          Áreas
        </a>
        <a href="#gallery" className="text-muted-foreground transition-colors hover:text-foreground">
          Galeria
        </a>
      </div>
      <a
        href="#about"
        className="rounded-full border border-[var(--accent-bright)]/40 bg-[var(--accent-bright)]/10 px-3 py-1.5 font-sans text-[11px] font-semibold tracking-wide text-[var(--accent-soft)] transition-all hover:bg-[var(--accent-bright)]/20 hover:text-[var(--ink,white)] sm:px-4 sm:py-2 sm:text-xs"
      >
        Turma II · ITE
      </a>
    </motion.nav>
  );
}
