import Section from "./Section";
import Socials from "./Socials";
import { contact } from "../content";

export default function Contact() {
  return (
    <Section id="contact" index="05" label="contact" title={contact.heading}>
      <div className="max-w-2xl">
        <p className="text-lg leading-relaxed text-white/80">{contact.body}</p>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-lg bg-gradient-to-r from-accent-deep to-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_0_28px_-6px_rgba(155,123,234,0.8)] transition-opacity hover:opacity-90"
        >
          {contact.email}
        </a>
        <p className="mt-4 font-mono text-sm text-haze">
          Or copy it: {contact.email}
        </p>
        <Socials className="mt-6" />
      </div>
    </Section>
  );
}
