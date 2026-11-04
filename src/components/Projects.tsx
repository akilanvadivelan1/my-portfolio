import Section from "./Section";
import { projects } from "../content";

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path
        d="M4 12L12 4M12 4H5M12 4V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <Section
      id="work"
      index="03"
      label="selected work"
      title="Things I've built."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900 p-8 transition-all hover:border-accent/40 hover:bg-ink-800"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />

            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-bold tracking-tight">{p.name}</h3>
              <span className="mt-1 text-haze transition-colors group-hover:text-accent">
                <ArrowIcon />
              </span>
            </div>

            <p className="mt-3 text-base text-white/85">{p.blurb}</p>
            <p className="mt-4 text-sm leading-relaxed text-haze">
              {p.description}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 border-y border-white/5 py-5">
              {p.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-mono text-lg font-semibold text-white">
                    {s.value}
                  </div>
                  <div className="text-xs text-haze">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              {p.linkLabel}
              <ArrowIcon />
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
