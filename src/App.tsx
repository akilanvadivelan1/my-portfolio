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
      <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
        <filter id="liquid" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.02"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="2" result="soft" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="soft"
            scale="22"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
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
