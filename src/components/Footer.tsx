import { profile } from "../content";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-haze sm:flex-row">
        <span className="font-mono uppercase tracking-[0.18em]">
          <span className="text-sunrise">{"> "}</span>
          {profile.handle}
        </span>
        <Socials />
        <span>
          {"\u00A9"} {new Date().getFullYear()} {profile.name}
        </span>
      </div>
    </footer>
  );
}
