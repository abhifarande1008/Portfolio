"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { fadeContainer, cardItem } from "@/lib/animations";

type Project = {
  title: string;
  image: string;
  tech: string[];
  description: string[];
  github: string | null;
  live: string | null;
  badge?: string;
};

const projects: Project[] = [
  {
    title: "College ERP System",
    image: "/Collage_ERP_JPG.jpg",
    tech: ["Next.js", "NestJS", "TypeScript", "Tailwind CSS", "ShadCN UI", "MongoDB"],
    description: [
      "Contributing to a multi-tenant College ERP system at Akron Systems as part of a 5-member Agile team.",
      "Built responsive role-based dashboards with dynamic forms and full CRUD functionality.",
      "Optimized backend APIs using NestJS and MongoDB, reducing response latency by 25%.",
      "Collaborated in Agile sprints improving delivery speed by 15%.",
    ],
    github: null,
    live: null,
    badge: "🔥 Currently Building",
  },
  {
    title: "Diploma Aspirants App",
    image: "/Diploma_Aspirant_JPG.jpg",
    tech: ["Android Studio", "Firebase"],
    description: [
      "Built a centralized Android application for diploma students to access shared study materials.",
      "Integrated Firebase for real-time data synchronization and user authentication.",
      "Improved study accessibility and reduced resource duplication across users.",
    ],
    github: null,
    live: "https://drive.google.com/file/d/your-demo-link",
  },
  {
    title: "Park-O – Online Parking System",
    image: "/Parking_system_JPG.jpg",
    tech: ["Next.js", "Node.js", "JavaScript", "Leaflet", "MongoDB", "Vercel"],
    description: [
      "Built a role-based online parking management system for booking and managing parking spaces.",
      "Implemented user roles: Admin, User, and Entry/Exit Operator for controlled access.",
      "Integrated Leaflet maps for real-time parking location visualization and navigation.",
      "Deployed the full-stack application on Vercel for seamless accessibility.",
      "Designed a time-based cost calculation system to automate parking fee estimation.",
    ],
    github: "https://github.com/abhifarande1008/Parko---Online-Parking-System",
    live: null,
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      variants={cardItem}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group overflow-hidden rounded-3xl border border-border/70 bg-background backdrop-blur-xl shadow-lg transition-all duration-300 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10"
    >
      <div className="h-1 w-full bg-gradient-to-r from-purple-600 to-violet-400" />

      <div className="relative">
        {project.badge ? (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-purple-600/25">
            {project.badge}
          </span>
        ) : null}

        <div className="relative h-[220px] w-full overflow-hidden">
          {!imageError ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-900/40 to-background px-6 text-center">
              <span className="text-lg font-semibold text-foreground">
                {project.title}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4 p-6">
        <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="border border-border/60 bg-background/80 text-muted-foreground"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
          {project.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div>
            {project.github ? (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-purple-400"
              >
                <Github size={18} />
                GitHub
              </Link>
            ) : (
              <span className="text-sm text-muted-foreground">Private Repo</span>
            )}
          </div>

          {project.live ? (
            <Link href={project.live} target="_blank" rel="noopener noreferrer">
              <Button className="gap-2">
                <ExternalLink size={16} />
                Live Demo
              </Button>
            </Link>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      variants={fadeContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="space-y-10 px-4 sm:px-6 lg:px-8"
    >
      <motion.div variants={cardItem} className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
          Work
        </p>
        <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
          My Projects
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          Things I&apos;ve built and shipped 🛠️
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {projects[2] ? (
        <div className="mx-auto w-full max-w-2xl">
          <ProjectCard project={projects[2]} />
        </div>
      ) : null}
    </motion.section>
  );
}
