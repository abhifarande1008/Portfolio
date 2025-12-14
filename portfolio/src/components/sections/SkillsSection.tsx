"use client";

import {
  Code2,
  Braces,
  Wrench,
  Cpu,
  Layers,
} from "lucide-react";
import { JSX } from "react";
import { motion } from "framer-motion";
import {
  fadeContainer,
  fadeUpItem,
  cardItem,
} from "@/lib/animations";

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
    skills: ["Java", "JavaScript", "TypeScript", "Python", "C++", "HTML", "CSS"],
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
    <motion.section
      id="skills"
      className="w-full py-16 px-4 sm:px-8"
      variants={fadeContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      {/* Grid */}
      <motion.div
        className="mx-auto max-w-6xl grid gap-6 sm:grid-cols-2"
        variants={fadeContainer}
      >
        {skillsData.map((category) => (
          <motion.div
            key={category.title}
            variants={cardItem}
            whileHover={{ scale: 1.02 }}
            className="rounded-xl border bg-muted/30 p-5 sm:p-6 transition-shadow hover:shadow-md"
          >
            {/* Header */}
            <motion.div
              className="mb-4 flex items-center gap-3"
              variants={fadeUpItem}
            >
              <div className="rounded-lg border bg-background p-2">
                {category.icon}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.subtitle}
                </p>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              className="flex flex-wrap gap-2"
              variants={fadeContainer}
            >
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={fadeUpItem}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 rounded-full border bg-background px-3 py-1 text-xs sm:text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Braces className="h-3.5 w-3.5 opacity-60" />
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
