export const site = {
  projectsEnabled: false,
  name: "Dee Creative Enterprises",
  legalName: "Dee Creative Enterprises, LLC",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  description:
    "Design-led architectural interiors, private libraries, creative spaces, and whole-room transformations in Portland, Oregon—from concept through construction.",
  ccb: "263380",
  phone: "(503) 891-7153",
  phoneHref: "tel:+15038917153",
  phoneInternational: "+1-503-891-7153",
};

// Use real routes as they are introduced; unfinished destinations stay on the homepage.
export const navigation = [
  ...(site.projectsEnabled ? [{ label: "Projects", href: "/projects" }] : []),
  { label: "Services", href: "/services" },
  { label: "Concepts", href: "/concepts" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];
