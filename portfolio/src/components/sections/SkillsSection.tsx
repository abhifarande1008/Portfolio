import {
  Code2,
  Braces,
  Wrench,
  Cpu,
  Layers,
} from "lucide-react";
import { JSX } from "react";

type SkillCategory = {
  title: string;
  subtitle: string;
  icon: JSX.Element;
  skills: string[];
};

const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    subtitle: "Languages I'm proficient in",
    icon: <Code2 className="h-5 w-5 text-primary" />,
    skills: [
      "Java",
      "JavaScript",
      "TypeScript",
      "Python",
      "C++",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Core Competencies",
    subtitle: "Fundamental concepts",
    icon: <Cpu className="h-5 w-5 text-primary" />,
    skills: ["OOPs", "DSA", "REST APIs", "MVVM", "Material Design"],
  },
  {
    title: "Technologies & Frameworks",
    subtitle: "Technologies I work with",
    icon: <Layers className="h-5 w-5 text-primary" />,
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Android SDK",
      "Jetpack",
      "Tailwind CSS",
      "ShadCN UI",
    ],
  },
  {
    title: "Tools",
    subtitle: "Development & productivity tools",
    icon: <Wrench className="h-5 w-5 text-primary" />,
    skills: ["Git", "GitHub", "Postman", "Android Studio", "VS Code", "JSON"],
  },
];

export default function SkillsSection(): JSX.Element {
  return (
    <section className="w-full py-12">

      <div className="grid gap-6 md:grid-cols-2">
        {skillsData.map((category) => (
          <div
            key={category.title}
            className="rounded-xl border bg-muted/30 p-6 transition hover:shadow-md"
          >
            {/* Header */}
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg border bg-background p-2">
                {category.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.subtitle}
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="flex items-center gap-1 rounded-full border bg-background px-3 py-1 text-sm transition hover:bg-primary hover:text-primary-foreground"
                >
                  <Braces className="h-3.5 w-3.5 opacity-60" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
