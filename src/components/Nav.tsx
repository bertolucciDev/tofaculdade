import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-4 z-40 mx-auto flex max-w-6xl items-center justify-between rounded-full glass px-5 py-3 md:left-6 md:right-6"
    >
      <a href="#" className="flex items-center gap-2 font-display font-bold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-soft)] text-primary-foreground">TO</span>
        <span className="hidden sm:inline text-gradient-gold">Experience</span>
      </a>
      <div className="hidden gap-7 text-sm font-medium md:flex">
        <a href="#about" className="text-muted-foreground transition-colors hover:text-foreground">Curso</a>
        <a href="#gallery" className="text-muted-foreground transition-colors hover:text-foreground">Galeria</a>
        <a href="#about" className="text-muted-foreground transition-colors hover:text-foreground">Áreas</a>
      </div>
      <a href="#gallery" className="rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-soft)] px-5 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105">
        Arraiá 🌽
      </a>
    </motion.nav>
  );
}
