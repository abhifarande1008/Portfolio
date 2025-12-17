"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

import { fadeContainer, cardItem } from "@/lib/animations";

const projects = [
  {
    title: "Diploma Aspirants App",
    image: "/projects/diploma-aspirants.png",
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
    image: "/projects/park-o.png",
    tech: [
      "Next.js",
      "Node.js",
      "JavaScript",
      "Leaflet",
      "MongoDB",
      "Vercel",
    ],
    description: [
      "Built a role-based online parking management system for booking and managing parking spaces.",
      "Implemented user roles: Admin, User, and Entry/Exit Operator for controlled access.",
      "Integrated Leaflet maps for real-time parking location visualization and navigation.",
      "Deployed the full-stack application on Vercel for seamless accessibility.",
      "Designed a time-based cost calculation system to automate parking fee estimation.",
    ],
    github: "https://github.com/yourusername/park-o",
    live: "https://park-o-demo.vercel.app",
  },
];

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      variants={fadeContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-10 px-4 sm:px-6 lg:px-8"
    >
      {/* Section Title */}
      <h2 className="text-3xl font-bold">Projects</h2>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={cardItem}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              {/* Image */}
              <div className="relative h-[220px] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Description */}
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4">
                  {project.github ? (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                    >
                      <Github size={18} />
                      GitHub
                    </Link>
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      Private Repository
                    </span>
                  )}

                  <Link href={project.live} target="_blank">
                    <Button className="gap-2">
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
