import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-3 top-3 z-40 mx-auto flex max-w-6xl items-center justify-between rounded-full glass px-3 py-2 sm:inset-x-4 sm:top-4 sm:px-5 sm:py-3 md:left-6 md:right-6"
    >
      <a href="#" className="flex items-center gap-2 font-display text-sm font-bold sm:text-base">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-soft)] text-xs text-primary-foreground sm:h-8 sm:w-8 sm:text-sm">TO</span>
        <span className="hidden sm:inline text-gradient-gold">Experience</span>
      </a>
      <div className="hidden gap-7 text-sm font-medium md:flex">
        <a href="#about" className="text-muted-foreground transition-colors hover:text-foreground">Curso</a>
        <a href="#gallery" className="text-muted-foreground transition-colors hover:text-foreground">Galeria</a>
        <a href="#about" className="text-muted-foreground transition-colors hover:text-foreground">Áreas</a>
      </div>
      <a href="#gallery" className="rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-3 py-1.5 text-[11px] font-semibold text-primary-foreground transition-transform hover:scale-105 sm:px-5 sm:py-2 sm:text-xs">
        Arraiá 🌽
      </a>
    </motion.nav>
  );
}
