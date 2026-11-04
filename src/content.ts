// All site content lives here so copy is easy to edit without touching components.

// Social links. A link with an empty URL is hidden automatically.
export const socials: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com/akilanvadivelan1" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akilan-vadivelan-829793447/",
  },
  { label: "Email", href: "mailto:akilanvadivelan1@gmail.com" },
];

export const contact = {
  email: "akilanvadivelan1@gmail.com",
  heading: "Want to build something together?",
  body: "I'm always up for talking about software, machine learning, or a problem that real people are stuck on. If you have a project, a question, or just want to say hi, send me a note and I'll get back to you.",
};

export const profile = {
  name: "Akilan Vadivelan",
  tagline: "Developer & Builder",
  handle: "akilan.py",
  heroLine:
    "I build software and machine-learning tools that help real people make sense of hard things.",
  heroSub:
    "From public-benefits eligibility to financial-risk analysis, I turn messy, high-stakes information into software people can actually use.",
  about: [
    "I'm Akilan, a developer who likes aiming code at problems that matter. Most of what I make sits where everyday people meet systems that are too complicated: government benefits, dense financial filings, and tools that usually assume you already know how they work.",
    "My approach is practical. I build software and machine-learning tools, starting from the person who has to use the thing, keeping the logic honest and traceable, and shipping interfaces that explain themselves. I work mostly in TypeScript, React, and Python, and I like projects where the hard part is making something complex feel obvious.",
  ],
};

// Headline stats band (Groq-style confident numbers, but all mine).
export const stats: { value: string; label: string }[] = [
  { value: "2", label: "shipped products" },
  { value: "15", label: "benefit programs mapped" },
  { value: "500", label: "S&P companies analyzed" },
  { value: "0", label: "user data stored" },
  { value: "3", label: "core languages" },
];

// A nested "how I build" stack: each layer sits on top of the one below it,
// the way a real stack of foundations -> logic -> interface comes together.
export type Layer = { kicker: string; name: string; body: string };

export const layers: Layer[] = [
  {
    kicker: "Foundation",
    name: "Honest data & rules",
    body: "Every project starts from sources I can point to. Logic is explicit and traceable, never a black box, so the output can be trusted and explained.",
  },
  {
    kicker: "Engine",
    name: "Software & machine learning",
    body: "On top of that foundation I build the working parts: scored rule engines, data pipelines, and NLP models that turn raw, messy inputs into a clear signal.",
  },
  {
    kicker: "Interface",
    name: "Something a person can use",
    body: "Everything surfaces through an interface that explains itself, written plainly and built to be accessible, so the hard problem underneath feels obvious.",
  },
];

export type Skill = { group: string; items: string[] };

export const skills: Skill[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Rust", "HTML & CSS"],
  },
  {
    group: "Frontend",
    items: ["React", "Tailwind CSS", "Vite", "Responsive UI", "Accessibility"],
  },
  {
    group: "Machine Learning & Data",
    items: [
      "Model integration",
      "Gemini / OpenAI APIs",
      "Rule-based engines",
      "NLP sentiment analysis",
      "Data pipelines",
    ],
  },
  {
    group: "Build & Ship",
    items: ["Tauri desktop", "GitHub Actions", "Git", "Client-side architecture"],
  },
];

export type Project = {
  id: string;
  name: string;
  blurb: string;
  description: string;
  tags: string[];
  href: string;
  linkLabel: string;
  stats: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    id: "wa-benefits",
    name: "WA Benefits Navigator",
    blurb:
      "A friendly tool that helps Washington residents figure out which public benefits they likely qualify for, without the jargon.",
    description:
      "A client-side React and TypeScript app that matches people to Washington State benefit programs through a scored, rule-based eligibility engine. Every rule traces back to an official government source, and results come with honest confidence levels rather than false promises. Content is written example-first at a plain-language reading level, with text-to-speech support, and it stores nothing: all answers stay in the browser.",
    tags: ["React", "TypeScript", "Tailwind", "Rule Engine", "Accessibility"],
    href: "https://github.com/akilanvadivelan1/wa-benefits-navigator",
    linkLabel: "View project",
    stats: [
      { label: "benefit programs", value: "15" },
      { label: "data stored", value: "0" },
      { label: "sources", value: "official" },
    ],
  },
  {
    id: "risks-radar",
    name: "Risks Radar",
    blurb:
      "An S&P 500 risk-sentiment tool that shows how companies' disclosed risks shift in tone over time.",
    description:
      "Risks Radar reads the risk-factor sections of S&P 500 10-K filings and surfaces how the language changes year over year. Using the Loughran-McDonald financial word lists, it measures negative and uncertainty tone, then presents each risk as a plain-English caption with an expandable view that highlights the exact changed wording. It is built to read the way these disclosures actually work: not good versus bad, but how alarming a risk has become.",
    tags: ["Python", "NLP", "Loughran-McDonald", "Finance", "Data Viz"],
    href: "https://risks-radar.com",
    linkLabel: "Visit risks-radar.com",
    stats: [
      { label: "index coverage", value: "S&P 500" },
      { label: "signal", value: "10-K" },
      { label: "lexicon", value: "LM" },
    ],
  },
];
