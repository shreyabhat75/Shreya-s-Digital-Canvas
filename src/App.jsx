import { Navbar } from "./components/Navbar.jsx";
import { ScrollProgress, CustomCursor } from "./components/Chrome.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Skills } from "./components/Skills.jsx";
import { Projects } from "./components/Projects.jsx";
import { Experience } from "./components/Experience.jsx";
import { Achievements } from "./components/Achievements.jsx";
import { Creative } from "./components/Creative.jsx";
import { Contact, Footer } from "./components/Contact.jsx";
import { Loader } from "./components/Loader.jsx";

export default function App() {
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
