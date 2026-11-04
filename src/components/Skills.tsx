import Section from "./Section";
import { skills } from "../content";

export default function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      label="skills"
      title="What I work with."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <div
            key={group.group}
            className="rounded-xl border border-white/10 bg-ink-900 p-6 transition-colors hover:border-white/20"
          >
            <h3 className="font-mono text-sm text-accent">{group.group}</h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/80"
                >
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
