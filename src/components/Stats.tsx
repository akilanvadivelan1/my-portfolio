import { stats } from "../content";
import { useReveal } from "../hooks/useReveal";

export default function Stats() {
  const { ref, shown } = useReveal();
  return (
    <section className="border-t border-white/5 px-6 py-20">
      <div
        ref={ref}
        className={`mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 transition-all duration-700 sm:grid-cols-3 lg:grid-cols-5 ${
          shown ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="transition-all duration-700"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="bg-gradient-to-br from-white via-accent-soft to-sunrise bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 text-sm text-haze">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
