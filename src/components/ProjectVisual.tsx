// Small animated illustrations for each project card. They are decorative, so
// the whole thing is hidden from screen readers.

function Radar() {
  return (
    <div className="relative h-32 w-32 rounded-full border border-accent/40">
      <div className="absolute inset-3 rounded-full border border-accent/25" />
      <div className="absolute inset-7 rounded-full border border-accent/20" />
      <div className="absolute left-1/2 top-0 h-full w-px bg-accent/20" />
      <div className="absolute left-0 top-1/2 h-px w-full bg-accent/20" />
      <div className="radar-sweep absolute inset-0 rounded-full" />
      <span className="absolute left-[68%] top-[26%] h-2 w-2 rounded-full bg-sunrise">
        <span className="absolute inset-0 animate-ping rounded-full bg-sunrise/70" />
      </span>
      <span className="absolute left-[30%] top-[62%] h-1.5 w-1.5 rounded-full bg-accent-soft">
        <span className="absolute inset-0 animate-ping rounded-full bg-accent-soft/60 [animation-delay:900ms]" />
      </span>
    </div>
  );
}

function Orbit() {
  const dots = ["bg-accent", "bg-sunrise", "bg-white", "bg-accent-deep"];
  return (
    <div className="relative h-36 w-36">
      <div className="absolute inset-0 rounded-full border border-dashed border-accent/30" />
      <div className="orbit absolute inset-0">
        {dots.map((c, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 -ml-2 -mt-2"
            style={{ transform: `rotate(${i * 90}deg) translateY(-72px)` }}
          >
            <div
              className={`h-4 w-4 rounded-full ${c} shadow-[0_0_14px_2px_rgba(155,123,234,0.7)]`}
            />
          </div>
        ))}
      </div>
      <div className="absolute left-1/2 top-1/2 -ml-7 -mt-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-deep to-accent font-mono text-sm font-semibold text-white shadow-[0_0_30px_-4px_rgba(155,123,234,0.9)]">
        OD
      </div>
      <kbd className="absolute -bottom-1 -right-6 rounded-md border border-white/15 bg-ink-700 px-2 py-1 font-mono text-[10px] text-white/80">
        Opt + /
      </kbd>
    </div>
  );
}

function Eligibility() {
  const rows = [
    {
      label: "Likely Eligible",
      pill: "border-accent/40 bg-accent/20 text-accent-soft",
      bar: "w-24",
    },
    {
      label: "May Qualify",
      pill: "border-sunrise/40 bg-sunrise/15 text-sunrise",
      bar: "w-20",
    },
    {
      label: "No Barriers",
      pill: "border-white/15 bg-white/5 text-white/70",
      bar: "w-28",
    },
  ];
  return (
    <div className="w-64 space-y-2">
      {rows.map((r, i) => (
        <div
          key={r.label}
          className="float-y flex items-center gap-3 rounded-lg border border-white/10 bg-ink-800/90 px-3 py-2 backdrop-blur"
          style={{ animationDelay: `${i * 0.7}s` }}
        >
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent/30">
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
              <path
                d="M2 5.2L4.2 7.4L8 3"
                stroke="#b79df2"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className={`h-1.5 rounded-full bg-white/15 ${r.bar}`} />
          <span
            className={`ml-auto rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider ${r.pill}`}
          >
            {r.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function ProjectVisual({ id }: { id: string }) {
  return (
    <div
      aria-hidden
      className="relative flex h-48 w-full flex-1 items-center justify-center overflow-hidden bg-gradient-to-br from-accent-deep/25 via-transparent to-sunrise/10"
    >
      <div className="grid-backdrop absolute inset-0 opacity-50" />
      <div className="absolute -bottom-10 left-1/2 h-32 w-56 -translate-x-1/2 rounded-full bg-accent-deep/30 blur-3xl" />
      <div className="relative">
        {id === "risks-radar" && <Radar />}
        {id === "omnidesk" && <Orbit />}
        {id === "wa-benefits" && <Eligibility />}
      </div>
    </div>
  );
}
