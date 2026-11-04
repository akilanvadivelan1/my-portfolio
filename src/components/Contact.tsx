import Section from "./Section";
import Socials from "./Socials";
import { contact } from "../content";

export default function Contact() {
  return (
    <Section id="contact" index="05" label="contact" title={contact.heading}>
      <div className="max-w-2xl">
        <p className="text-lg leading-relaxed text-white/80">{contact.body}</p>
        <a
          href={`mailto:${contact.email}`}
          className="mt-8 inline-block rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          {contact.email}
        </a>
        <Socials className="mt-6" />
      </div>
    </Section>
  );
}
