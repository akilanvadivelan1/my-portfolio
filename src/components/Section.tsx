import type { ReactNode } from "react";

type Props = {
  id: string;
  index: string;
  label: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, index, label, title, children }: Props) {
  return (
    <section id={id} className="border-t border-white/5 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-baseline gap-3 font-mono text-sm text-accent">
          <span>{index}</span>
          <span className="text-haze">{label}</span>
        </div>
        <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
