import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

type Props = {
  id: string;
  index: string;
  label: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, index, label, title, children }: Props) {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section id={id} className="border-t border-white/5 px-6 py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl transition-all duration-700 ${
          shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="flex items-baseline gap-3 font-mono text-sm uppercase tracking-[0.18em] text-accent">
          <span>{index}</span>
          <span className="text-haze">{label}</span>
        </div>
        <h2 className="text-balance mt-4 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
