import { profile } from "../content";
import Socials from "./Socials";

export default function Hero() {
  return (
    <section
      id="top"
      className="grid-backdrop relative flex min-h-screen items-center overflow-hidden px-6 pt-16"
    >
      {/* glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent-deep/30 blur-[140px]" />
      <div className="pointer-events-none absolute -top-10 right-[8%] h-[260px] w-[360px] rounded-full bg-sunrise/15 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="animate-fade-up font-mono text-sm uppercase tracking-[0.18em] text-accent">
          {profile.handle}
        </p>
        <h1 className="animate-fade-up text-balance mt-5 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-accent-soft via-accent to-sunrise bg-clip-text text-transparent">
            {profile.name.split(" ")[0]}
          </span>
          .
        </h1>
        <p className="animate-fade-up text-balance mt-6 max-w-2xl text-xl text-white/85 md:text-2xl">
          {profile.heroLine}
        </p>
        <p className="animate-fade-up text-balance mt-4 max-w-2xl text-base text-haze md:text-lg">
          {profile.heroSub}
        </p>
        <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="rounded-lg bg-gradient-to-r from-accent-deep to-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_0_28px_-6px_rgba(155,123,234,0.8)] transition-opacity hover:opacity-90"
          >
            See what I've built
          </a>
          <a
            href="#about"
            className="rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
          >
            More about me
          </a>
        </div>
        <Socials className="animate-fade-up mt-6" />
      </div>
    </section>
  );
}
