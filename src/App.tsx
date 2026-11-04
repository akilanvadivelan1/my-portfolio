import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Layers from "./components/Layers";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorDots from "./components/CursorDots";

export default function App() {
  return (
    <div className="deepen relative min-h-screen bg-ink-950">
      <div className="noise-overlay" />
      <CursorDots />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <Layers />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
