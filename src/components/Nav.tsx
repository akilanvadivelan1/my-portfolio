import { profile } from "../content";

const links = [
  { href: "#about", label: "About" },
  { href: "#approach", label: "Approach" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink-950/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm font-medium uppercase tracking-[0.18em]">
          <span className="text-sunrise">{"> "}</span>
          {profile.handle}
        </a>
        <nav className="flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-haze transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
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
