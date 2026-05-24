"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeContainer, cardItem } from "@/lib/animations";

type Skill = {
  name: string;
  percent: number;
};

type SkillGroup = {
  id: string;
  label: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "JavaScript", percent: 90 },
      { name: "TypeScript", percent: 80 },
      { name: "HTML", percent: 95 },
      { name: "CSS", percent: 88 },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    skills: [
      { name: "React", percent: 90 },
      { name: "Next.js", percent: 88 },
      { name: "Node.js", percent: 82 },
      { name: "Express", percent: 78 },
      { name: "MongoDB", percent: 80 },
      { name: "Tailwind CSS", percent: 92 },
      { name: "Firebase", percent: 75 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Git", percent: 88 },
      { name: "GitHub", percent: 88 },
      { name: "Postman", percent: 80 },
      { name: "VS Code", percent: 95 },
      { name: "Android Studio", percent: 70 },
      { name: "Figma", percent: 65 },
    ],
  },
  {
    id: "concepts",
    label: "Concepts",
    skills: [
      { name: "REST APIs", percent: 85 },
      { name: "OOPs", percent: 82 },
      { name: "DSA", percent: 70 },
      { name: "MVVM", percent: 72 },
      { name: "Agile", percent: 78 },
    ],
  },
];

const marqueeSkills = skillGroups.flatMap((group) =>
  group.skills.map((skill) => skill.name)
);
const marqueeTrack = [...marqueeSkills, ...marqueeSkills];

function SkillBar({
  skill,
  index,
  activeTab,
}: {
  skill: Skill;
  index: number;
  activeTab: string;
}) {
  return (
    <div className="grid grid-cols-[1fr_40px] gap-3 rounded-2xl border border-border/70 bg-background/60 p-4 shadow-[0_0_0_1px_rgba(168,85,247,0.04)] sm:grid-cols-[150px_minmax(0,1fr)_56px] sm:items-center">
      <div className="text-sm font-medium text-foreground sm:text-base">
        {skill.name}
      </div>

      <div className="text-right text-sm font-semibold text-muted-foreground sm:text-base">
        {skill.percent}%
      </div>

      <div className="col-span-2 h-3 overflow-hidden rounded-full bg-muted/60 sm:col-span-1">
        <motion.div
          key={`${activeTab}-${skill.name}`}
          className="h-full rounded-full bg-gradient-to-r from-purple-600 to-violet-400 shadow-[0_0_28px_rgba(168,85,247,0.35)]"
          initial={{ width: 0 }}
          animate={{ width: `${skill.percent}%` }}
          transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.05 }}
        />
      </div>
    </div>
  );
}

function SkillPanel({
  skills,
  activeTab,
}: {
  skills: Skill[];
  activeTab: string;
}) {
  return (
    <motion.div
      key={activeTab}
      className="pt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="grid gap-3">
        {skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            index={index}
            activeTab={activeTab}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(skillGroups[0].id);

  return (
    <motion.section
      id="skills"
      variants={fadeContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="relative space-y-8 px-4 py-6 sm:px-8"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-900/20 blur-3xl" />
      </div>

      <motion.div
        variants={cardItem}
        className="mx-auto max-w-6xl rounded-[2rem] border border-border/70 bg-background/70 p-6 shadow-2xl shadow-purple-950/10 backdrop-blur-xl sm:p-8"
      >
        <div className="mb-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
            Skills
          </p>
          <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            My Arsenal
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Technologies I&apos;ve worked with and weaponized 🚀
          </p>
        </div>

        <div className="flex flex-wrap gap-3 rounded-2xl border border-border/70 bg-background/60 p-2 backdrop-blur-sm">
          {skillGroups.map((group) => {
            const isActive = activeTab === group.id;

            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveTab(group.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {group.label}
              </button>
            );
          })}
        </div>

        <div className="mt-5 rounded-3xl border border-border/70 bg-background/50 p-4 sm:p-6">
          {activeTab === "languages" && (
            <SkillPanel skills={skillGroups[0].skills} activeTab={activeTab} />
          )}
          {activeTab === "frameworks" && (
            <SkillPanel skills={skillGroups[1].skills} activeTab={activeTab} />
          )}
          {activeTab === "tools" && (
            <SkillPanel skills={skillGroups[2].skills} activeTab={activeTab} />
          )}
          {activeTab === "concepts" && (
            <SkillPanel skills={skillGroups[3].skills} activeTab={activeTab} />
          )}
        </div>
      </motion.div>

      <motion.div
        variants={cardItem}
        className="mx-auto max-w-6xl rounded-[2rem] border border-border/70 bg-background/60 p-4 shadow-lg shadow-purple-950/5 backdrop-blur-xl sm:p-5"
      >
        <div className="space-y-3 overflow-hidden">
          <div className="overflow-hidden">
            <div
              className="flex w-max gap-3"
              style={{ animation: "scroll 28s linear infinite" }}
            >
              {marqueeTrack.map((skill, index) => (
                <span
                  key={`${skill}-top-${index}`}
                  className="rounded-full border border-purple-500/30 bg-purple-900/20 px-3 py-1 text-xs text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex w-max gap-3"
              style={{ animation: "scroll 34s linear infinite reverse" }}
            >
              {marqueeTrack.map((skill, index) => (
                <span
                  key={`${skill}-bottom-${index}`}
                  className="rounded-full border border-purple-500/30 bg-purple-900/20 px-3 py-1 text-xs text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
