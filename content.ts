// All site copy lives here.
// Voice: PJ's own style - spaced hyphens (never em dashes), plain words, specifics over adjectives.
// Numbers come from PJ's Nov 2026 resume, the project repos, or the live sites.

export const profile = {
  name: "PJ McMullen",
  role: "Software engineer",
  location: "Rochester, NY",
  bio: [
    "I've been building software for about 15 years. The first 12 were spent doing integration consulting at banks, healthcare companies, and large enterprises.",
    "Lately, I've been working on my own products, PlankeApp and Greener Closet. I build them by creating systems and workflows for my AI agents (Claude Code, Codex, Cursor, Grokbot).",
  ],
  // Square photo in public/. Currently the 121px PlankeApp about-page photo; swap in a larger one for sharper screens.
  photo: "/pj.png" as string | null,
};

// No email on purpose. null hides a link.
export const links: { label: string; url: string | null }[] = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/pj-mcmullen-16090047/" },
  { label: "GitHub", url: "https://github.com/pmcmullen24" },
];

export type Project = {
  name: string;
  year: string;
  body: string;
  tags: string[];
  url?: string;
  urlLabel?: string;
};

export const projects: Project[] = [
  {
    name: "PlankeApp",
    year: "2019",
    body: "The hiring marketplace for the Pilates industry. Over 4,000 studios and instructors use it to find each other, and about 90 studio organizations pay for it. I built the iPhone and Android apps, the website, and the billing that keeps Stripe, Apple and Google in agreement.",
    tags: ["Flutter", "Next.js", "Firebase", "Stripe"],
    url: "https://plankeapp.com",
    urlLabel: "plankeapp.com",
  },
  {
    name: "Greener Closet",
    year: "2024",
    body: "Scores clothing 0-100 on six factors I researched - microplastics, PFAS, dyes, and more. Paste a link, get a score. Over 3,300 products scored so far, and it can now read a photo of a clothing tag.",
    tags: ["Next.js", "OpenAI", "Research"],
    url: "https://greenercloset.com",
    urlLabel: "greenercloset.com",
  },
  {
    name: "Greener Closet in ChatGPT",
    year: "2026",
    body: "Ask ChatGPT if that sweater is mostly plastic and it checks Greener Closet for you. Built as an MCP server, so other AI assistants can use it too. There's also a Chrome extension that scores clothes on any store you shop.",
    tags: ["MCP", "ChatGPT", "Chrome extension"],
    url: "https://greenercloset.com/chatgpt",
    urlLabel: "greenercloset.com/chatgpt",
  },
  {
    name: "Scout",
    year: "2026",
    body: "An agent inside PlankeApp. A studio posts a job, Scout finds instructors who fit and drafts the pitch.",
    tags: ["Claude", "Agents"],
  },
];

export type Job = {
  role: string;
  org: string;
  dates: string;
  place?: string;
  body: string;
  tags?: string[];
};

export const experience: Job[] = [
  {
    role: "Co-founder & lead engineer",
    org: "PlankeApp",
    dates: "2019 - now",
    place: "Remote",
    body: "The only engineer, and I handle sales and customer support too. I run development through Claude Code and Codex, with review agents and guardrails so one person can ship and run it safely.",
    tags: ["AI agents", "Flutter", "TypeScript"],
  },
  {
    role: "Founder",
    org: "Greener Closet",
    dates: "2024 - now",
    place: "Remote",
    body: "Did the research, built the scoring, and built everything that sits on top of it.",
    tags: ["LLM extraction", "MCP"],
  },
  {
    role: "Fractional solutions architect",
    org: "Contract",
    dates: "2026 - now",
    body: "Technical reviews of startup products built with AI - whether to keep building on what's there or start over.",
  },
  {
    role: "Senior integration consultant",
    org: "Lightwell / Eliassen Group",
    dates: "2020 - 2024",
    place: "Remote",
    body: "Built integrations and APIs for logistics, home security, life sciences and healthcare companies. Led the dev teams from requirements to go-live.",
    tags: ["MuleSoft", "Kafka", "IBM Integration Bus"],
  },
  {
    role: "Software integration developer",
    org: "Mizuho",
    dates: "2019 - 2020",
    place: "Jersey City, NJ",
    body: "Moved a large Java application onto IBM Integration Bus.",
  },
  {
    role: "Software integration developer",
    org: "Bank of America Merrill Lynch",
    dates: "2018 - 2019",
    place: "Jersey City, NJ",
    body: "Automated deployments for a large routing application on IBM Integration Bus, using Jenkins and Ansible.",
  },
  {
    role: "Integration specialist",
    org: "Leveraging Technology",
    dates: "2012 - 2018",
    place: "Rochester, NY",
    body: "Enterprise integrations for financial services and health insurance clients.",
  },
];

export const education = {
  school: "St. John Fisher College",
  degree: "B.S. Computer Science",
  year: "2012",
};

