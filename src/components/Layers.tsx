import Section from "./Section";
import { layers } from "../content";
import { useReveal } from "../hooks/useReveal";

// Concentric nested panels: the first layer is the outer shell, each following
// layer nests inside it. On scroll they build up from the foundation inward.
export default function Layers() {
  const { ref, shown } = useReveal();

  return (
    <Section
      id="approach"
      index="02"
      label="how i build"
      title="Every build is a stack, from the foundation up."
    >
      <div ref={ref}>
        <NestedLayer depth={0} shown={shown} />
      </div>
    </Section>
  );
}

function NestedLayer({ depth, shown }: { depth: number; shown: boolean }) {
  if (depth >= layers.length) return null;
  const layer = layers[depth];
  const isInner = depth === layers.length - 1;

  return (
    <div
      className={`rounded-2xl border p-6 transition-all duration-700 ease-out md:p-8 ${
        depth === 0
          ? "border-white/10 bg-ink-900/80"
          : "border-accent/20 bg-ink-800/90 shadow-[0_0_40px_-18px_rgba(155,123,234,0.6)]"
      } ${shown ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-[0.97] opacity-0"}`}
      style={{ transitionDelay: `${depth * 250}ms` }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            {layer.kicker}
          </div>
          <h3 className="mt-1 text-xl font-bold tracking-tight md:text-2xl">
            {layer.name}
          </h3>
        </div>
        <span className="font-mono text-xs text-haze">
          {String(depth + 1).padStart(2, "0")} /{" "}
          {String(layers.length).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
        {layer.body}
      </p>

      {!isInner && (
        <div className="mt-6">
          <NestedLayer depth={depth + 1} shown={shown} />
        </div>
      )}
    </div>
  );
}
