"use client";

import { Button } from "@/components/ui/button";
import { Download, Eye, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeContainer,
  fadeUpItem,
  cardItem,
} from "@/lib/animations";

export default function ResumeSection() {
  return (
    <motion.section
      variants={fadeContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mx-auto max-w-6xl px-4 "
    >
      {/* Header */}
      <motion.div
        variants={fadeUpItem}
        className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <h2 className="text-3xl font-bold">Resume</h2>

        <div className="flex flex-wrap gap-3">
          <Link href="/Abhishek_Farande_CV.pdf" download>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </Link>

          <Link
            href="/Abhishek_Farande_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Eye className="mr-2 h-4 w-4" />
              View PDF
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Layout */}
      <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
        {/* LEFT */}
        <motion.div variants={fadeContainer} className="space-y-6">
          {/* About */}
          <motion.div variants={cardItem} className="card interactive-card">
            <h3 className="card-title">About Me</h3>
            <p className="card-text">
              Passionate Information Technology final-year student with hands-on
              experience in <strong>full-stack development</strong> using{" "}
              <strong>Next.js, React, Node.js, and MongoDB</strong>. Proven ability
              to build <strong>scalable, role-based systems</strong> with a strong
              focus on <strong>performance, clean UI/UX,</strong> and real-world
              problem solving.
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div variants={cardItem} className="card interactive-card">
            <h3 className="card-title">Experience</h3>

            <p className="font-semibold">
              Software Developer Intern — Akron Systems
            </p>
            <p className="mb-3 text-sm text-muted-foreground">
              June 2025 – Present
            </p>

            <ul className="list-disc space-y-2 pl-5 card-text">
              <li>
                Contributing to a <strong>multi-tenant College ERP system</strong>{" "}
                using <strong>Next.js, NestJS, TypeScript, and MongoDB</strong>.
              </li>
              <li>
                Built <strong>responsive, role-based dashboards</strong> with
                Tailwind CSS and shadcn/ui.
              </li>
              <li>
                Optimized backend APIs, achieving a{" "}
                <strong>25% reduction in response latency</strong>.
              </li>
              <li>
                Active participant in <strong>Agile sprints, debugging,</strong>{" "}
                and <strong>code reviews</strong>, improving delivery speed by
                <strong> 15%</strong>.
              </li>
            </ul>
          </motion.div>

          {/* Projects */}
          <motion.div variants={cardItem} className="card interactive-card">
            <h3 className="card-title">Projects</h3>

            {/* Parko */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="font-semibold">
                  Parko – Online Parking System
                </p>
                <Link
                  href="https://github.com/abhifarande1008/Parko---Online-Parking-System"
                  target="_blank"
                  className="icon-link"
                >
                  <Github size={18} />
                </Link>
              </div>

              <p className="text-sm italic text-muted-foreground">
                Next.js · Node.js · Leaflet · Vercel
              </p>

              <ul className="list-disc space-y-1 pl-5 card-text">
                <li>
                  Built a <strong>role-based parking management system</strong>{" "}
                  with Admin, User, Entry & Exit roles.
                </li>
                <li>
                  Integrated <strong>Leaflet maps</strong> for real-time parking
                  location visualization.
                </li>
                <li>
                  Designed a <strong>time-based cost calculation engine</strong>{" "}
                  for automated billing.
                </li>
              </ul>
            </div>

            <div className="my-4 h-px bg-border" />

            {/* Diploma App */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="font-semibold">Diploma Aspirants App</p>
                <Link
                  href="https://github.com/abhifarande1008/Diploma-Aspirants-Android-App"
                  target="_blank"
                  className="icon-link"
                >
                  <Github size={18} />
                </Link>
              </div>

              <p className="text-sm italic text-muted-foreground">
                Android Studio · Firebase
              </p>

              <ul className="list-disc space-y-1 pl-5 card-text">
                <li>
                  Developed a <strong>centralized Android platform</strong> for
                  diploma study materials.
                </li>
                <li>
                  Implemented <strong>Firebase Authentication</strong> and
                  real-time database sync.
                </li>
                <li>
                  Improved accessibility while{" "}
                  <strong>reducing resource duplication</strong>.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={cardItem} className="card interactive-card">
            <h3 className="card-title">Skills</h3>
            <p className="card-text">
              <strong>Java, JavaScript</strong>, React, Next.js, Tailwind CSS,
              Node.js, NestJS, MongoDB, SQL, Git, Postman, Figma
            </p>
          </motion.div>

          {/* Education */}
          <motion.div variants={cardItem} className="card interactive-card">
            <h3 className="card-title">Education</h3>
            <div className="space-y-2 card-text">
              <p>
                <strong>B.Tech – Information Technology</strong>
                <br />
                Walchand Institute of Technology ·{" "}
                <strong>CGPA 8.87</strong>
              </p>
              <p>
                <strong>Diploma</strong> — 82.46%
              </p>
              <p>
                <strong>10th</strong> — 81.80%
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT PDF */}
        <motion.div
          variants={fadeUpItem}
          className="sticky top-24 hidden h-[520px] overflow-hidden rounded-xl border bg-background lg:block"
        >
          <iframe src="/Abhishek_Farande_CV.pdf" className="h-full w-full" />
        </motion.div>
      </div>
    </motion.section>
  );
}
