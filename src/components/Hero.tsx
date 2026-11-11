import { profile } from "../content";
import Socials from "./Socials";
import Typewriter from "./Typewriter";
import WaveBackground from "./WaveBackground";

const WORDS = ["Hi,", "I'm", "Akilan."];

export default function Hero() {
  return (
    <section
      id="top"
      className="grid-backdrop relative flex min-h-screen items-center overflow-hidden px-6 pt-16"
    >
      <WaveBackground />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent-deep/30 blur-[140px]" />
      <div className="pointer-events-none absolute -top-10 right-[8%] h-[260px] w-[360px] rounded-full bg-sunrise/15 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl pb-24">
        <p className="animate-fade-up font-mono text-sm uppercase tracking-[0.18em] text-accent">
          <Typewriter text={profile.handle} />
        </p>

        <h1
          aria-label="Hi, I'm Akilan."
          className="text-balance mt-5 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          {WORDS.map((w, i) => (
            <span
              key={w}
              aria-hidden
              className={`word-reveal mr-[0.25em] ${
                i === WORDS.length - 1
                  ? "bg-gradient-to-r from-accent-soft via-accent to-sunrise bg-clip-text text-transparent"
                  : ""
              }`}
              style={{ animationDelay: `${300 + i * 140}ms` }}
            >
              {w}
            </span>
          ))}
        </h1>

        <p
          className="animate-fade-up text-balance mt-6 max-w-2xl text-xl text-white/85 md:text-2xl"
          style={{ animationDelay: "800ms" }}
        >
          {profile.heroLine}
        </p>
        <p
          className="animate-fade-up text-balance mt-4 max-w-2xl text-base text-haze md:text-lg"
          style={{ animationDelay: "950ms" }}
        >
          {profile.heroSub}
        </p>
        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "1100ms" }}
        >
          <a
            href="#work"
            className="rounded-lg bg-gradient-to-r from-accent-deep to-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_0_28px_-6px_rgba(155,123,234,0.8)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_36px_-4px_rgba(155,123,234,0.95)]"
          >
            See what I've built
          </a>
          <a
            href="#about"
            className="glass glass-chip rounded-lg px-5 py-3 text-sm font-semibold text-white"
          >
            More about me
          </a>
        </div>
        <Socials
          className="animate-fade-up mt-6"
        />
      </div>

      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 hidden h-9 w-5 -translate-x-1/2 justify-center rounded-full border border-white/25 pt-2 sm:flex"
      >
        <span className="scroll-hint-dot h-1.5 w-1 rounded-full bg-sunrise" />
      </div>
    </section>
  );
}
