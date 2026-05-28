import { About } from "@/components/About";
import { Areas } from "@/components/Areas";
import { Differentials } from "@/components/Differentials";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { ThreeScene } from "@/components/ThreeScene";
import { Transforming } from "@/components/Transforming";

export function Home() {
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
