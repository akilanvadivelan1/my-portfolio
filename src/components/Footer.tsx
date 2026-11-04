import { profile } from "../content";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-haze sm:flex-row">
        <span className="font-mono uppercase tracking-[0.18em]">
          <span className="text-accent">{"> "}</span>
          {profile.handle}
        </span>
        <span>
          {"\u00A9"} {new Date().getFullYear()} {profile.name}. Built with React
          and Tailwind.
        </span>
      </div>
    </footer>
  );
}
