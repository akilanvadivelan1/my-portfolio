// All site content lives here so copy is easy to edit without touching components.

export const profile = {
  name: "Akilan Vadivelan",
  tagline: "Developer & Builder",
  handle: "akilan.py",
  heroLine:
    "I build AI-powered tools that help real people make sense of hard things.",
  heroSub:
    "From public-benefits eligibility to financial-risk analysis, I turn messy, high-stakes information into software people can actually use.",
  about: [
    "I'm Akilan, a developer who likes aiming code at problems that matter. Most of what I make sits where everyday people meet systems that are too complicated: government benefits, dense financial filings, AI tools that usually assume you already know how they work.",
    "My approach is practical. I start from the person who has to use the thing, keep the logic honest and traceable, and ship interfaces that explain themselves. I work mostly in TypeScript, React, and Python, and I like projects where the hard part is making something complex feel obvious.",
  ],
};

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
    group: "AI & Data",
    items: [
      "LLM integration",
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
