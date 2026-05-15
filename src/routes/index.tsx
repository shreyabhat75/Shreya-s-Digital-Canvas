import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress, CustomCursor } from "@/components/Chrome";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { Creative } from "@/components/Creative";
import { Contact, Footer } from "@/components/Contact";
import { Loader } from "@/components/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shreya Mohan Bhat — Engineer, Builder, Creative" },
      {
        name: "description",
        content:
          "Portfolio of Shreya Mohan Bhat — Information Science Engineer at RVITM building AI tools, full-stack products and crafted interfaces.",
      },
      { property: "og:title", content: "Shreya Mohan Bhat — Portfolio" },
      {
        property: "og:description",
        content:
          "Information Science Engineer, builder and creative problem solver. AI, full-stack, leadership and creative work.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <Loader />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Creative />
      <Contact />
      <Footer />
    </main>
  );
}
