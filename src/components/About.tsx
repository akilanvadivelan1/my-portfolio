import Section from "./Section";
import { profile } from "../content";

export default function About() {
  return (
    <Section id="about" index="01" label="about" title="A little about me.">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-5 text-lg leading-relaxed text-white/80 md:col-span-3">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="md:col-span-2">
          <div className="glass rounded-xl p-6 font-mono text-sm">
            <div className="flex items-center gap-1.5 pb-4">
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
            </div>
            <pre className="whitespace-pre-wrap text-haze">
              <span className="text-accent">const</span> akilan = {"{"}
              {"\n"}  focus:{" "}
              <span className="text-white">"useful software"</span>,
              {"\n"}  values: [
              <span className="text-white">"honest"</span>,{" "}
              <span className="text-white">"traceable"</span>],
              {"\n"}  builds:{" "}
              <span className="text-white">"for real people"</span>,
              {"\n"}
              {"}"};
            </pre>
          </div>
        </div>
      </div>
    </Section>
  );
}
