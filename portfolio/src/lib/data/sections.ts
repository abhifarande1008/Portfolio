export const sections = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "training", title: "Training" },
  { id: "resume", title: "Resume" },
  { id: "contact", title: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
