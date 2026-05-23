import { createFileRoute } from "@tanstack/react-router";
import { ThreeScene } from "@/components/ThreeScene";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Areas } from "@/components/Areas";
import { Transforming } from "@/components/Transforming";
import { Gallery } from "@/components/Gallery";
import { Differentials } from "@/components/Differentials";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "TO Experience · Arraiá Turma II — Terapia Ocupacional ITE" },
      { name: "description", content: "Landing page imersiva da Turma II do curso de Terapia Ocupacional da ITE. Cuidado humano, inclusão, reabilitação e inovação." },
      { name: "keywords", content: "Terapia Ocupacional, Curso de TO, ITE, Saúde, Reabilitação, Inclusão, Arraiá" },
      { property: "og:title", content: "TO Experience · Turma II ITE" },
      { property: "og:description", content: "Uma experiência visual sobre a Terapia Ocupacional: cuidado, ciência e arte." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
});

function Index() {
  return (
    <main className="relative overflow-hidden">
      <ThreeScene />
      <Nav />
      <Hero />
      <About />
      <Areas />
      <Transforming />
      <Gallery />
      <Differentials />
      <Footer />
    </main>
  );
}
