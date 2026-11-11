import { useEffect, useState } from "react";
import { stats } from "../content";
import { useReveal } from "../hooks/useReveal";

// Counts from 0 up to the target once it scrolls into view.
function CountUp({ to, run }: { to: number; run: boolean }) {
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!run) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setV(to);
      return;
    }
    const dur = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setV(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, to]);

  return <>{v}</>;
}

export default function Stats() {
  const { ref, shown } = useReveal();
  return (
    <section className="px-6 py-20">
      <div
        ref={ref}
        className={`mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 transition-all duration-700 sm:grid-cols-3 lg:grid-cols-5 ${
          shown ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        {stats.map((s, i) => {
          const n = Number(s.value);
          return (
            <div
              key={s.label}
              className="border-l border-white/10 pl-5 transition-all duration-700"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="bg-gradient-to-br from-white via-accent-soft to-sunrise bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl">
                {Number.isNaN(n) ? s.value : <CountUp to={n} run={shown} />}
              </div>
              <div className="mt-2 text-sm text-haze">{s.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
