import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import About from "./components/About";
import Layers from "./components/Layers";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorDots from "./components/CursorDots";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950">
      <div className="aurora" aria-hidden>
        <span className="a1" />
        <span className="a2" />
        <span className="a3" />
      </div>
      <div className="noise-overlay" />
      <ScrollProgress />
      <CursorDots />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Marquee />
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
