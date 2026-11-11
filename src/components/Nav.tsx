import { useEffect, useState } from "react";
import { profile } from "../content";

const links = [
  { href: "#about", label: "About" },
  { href: "#approach", label: "Approach" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("");

  // Highlight the link for whichever section is crossing the middle of the screen.
  useEffect(() => {
    const els = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink-950/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-mono text-sm font-medium uppercase tracking-[0.18em]"
        >
          <span className="text-sunrise">{"> "}</span>
          {profile.handle}
        </a>
        <nav className="flex items-center gap-1" aria-label="Main">
          {links.map((l) => {
            const on = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={on ? "true" : undefined}
                className={`relative hidden rounded-md px-3 py-2 text-sm transition-colors duration-200 hover:text-white md:block ${
                  on ? "text-white" : "text-haze"
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-accent to-sunrise transition-opacity duration-300 ${
                    on ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            );
          })}
          <a
            href="#work"
            className="ml-2 rounded-md bg-white px-3.5 py-2 text-sm font-medium text-ink-950 transition-opacity hover:opacity-90"
          >
            See projects
          </a>
        </nav>
      </div>
    </header>
  );
}
