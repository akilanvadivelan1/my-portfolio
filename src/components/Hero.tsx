import { profile } from "../content";

export default function Hero() {
  return (
    <section
      id="top"
      className="grid-backdrop relative flex min-h-screen items-center overflow-hidden px-6 pt-16"
    >
      {/* glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="animate-fade-up font-mono text-sm uppercase tracking-[0.18em] text-accent">
          {profile.handle}
        </p>
        <h1 className="animate-fade-up text-balance mt-5 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Hi, I'm {profile.name.split(" ")[0]}.
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
            className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
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
      </div>
    </section>
  );
}
