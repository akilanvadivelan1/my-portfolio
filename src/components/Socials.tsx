import { socials } from "../content";

export default function Socials({ className = "" }: { className?: string }) {
  const visible = socials.filter((s) => s.href);
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {visible.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          className="glass glass-chip rounded-lg px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-white hover:text-accent-soft"
        >
          {s.label} {"\u2197"}
        </a>
      ))}
    </div>
  );
}
