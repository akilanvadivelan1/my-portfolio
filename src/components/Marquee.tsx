import { skills } from "../content";

// An endless ribbon of skills. The list is doubled so the loop is seamless.
export default function Marquee() {
  const items = skills.flatMap((g) => g.items);
  const loop = [...items, ...items];
  return (
    <div
      className="marquee relative overflow-hidden border-y border-white/5 bg-ink-950/40 py-5"
      aria-label="Skills"
    >
      <div className="marquee-track gap-3 pr-3">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="flex items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-white/75"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sunrise" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
