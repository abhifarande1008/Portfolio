"use client";

import { Button } from "@/components/ui/button";
import { Download, Eye, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeContainer, fadeUpItem, cardItem } from "@/lib/animations";

export default function ResumeSection() {
  return (
    <motion.section
      variants={fadeContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.05 }}
      className="mx-auto max-w-6xl px-4"
    >
      <motion.div variants={fadeUpItem} className="mb-10 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
          DOCUMENT
        </p>
        <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
          My Resume
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          My experience, skills and education in one place 📄
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="/Abhishek_Farande_CV.pdf" download>
            <Button className="bg-purple-600 text-white hover:bg-purple-700">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </Link>

          <Link
            href="/Abhishek_Farande_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/10"
            >
              <Eye className="mr-2 h-4 w-4" />
              View PDF
            </Button>
          </Link>
        </div>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
        <motion.div variants={fadeContainer} className="space-y-6">
          <motion.div
            variants={cardItem}
            className="overflow-hidden rounded-3xl border border-purple-500/20 bg-background p-6 shadow-lg transition-all duration-300 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10"
          >
            <div className="h-1 w-full rounded-t-3xl bg-gradient-to-r from-purple-600 to-violet-400 -mt-6 -mx-6 mb-6" />
            <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
              About Me
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Passionate Information Technology final-year student with hands-on
              experience in <strong>full-stack development</strong> using{" "}
              <strong>Next.js, React, Node.js, and MongoDB</strong>. Proven
              ability to build <strong>scalable, role-based systems</strong>{" "}
              with a strong focus on <strong>performance, clean UI/UX,</strong>{" "}
              and real-world problem solving.
            </p>
          </motion.div>

          <motion.div
            variants={cardItem}
            className="overflow-hidden rounded-3xl border border-purple-500/20 bg-background p-6 shadow-lg transition-all duration-300 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10"
          >
            <div className="h-1 w-full rounded-t-3xl bg-gradient-to-r from-purple-600 to-violet-400 -mt-6 -mx-6 mb-6" />
            <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
              Experience
            </h3>

            <p className="font-semibold text-foreground">
              Software Developer Intern — Akron Systems
            </p>
            <p className="mb-3 text-sm text-muted-foreground">
              June 2025 – Present
            </p>

            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
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

          <motion.div
            variants={cardItem}
            className="overflow-hidden rounded-3xl border border-purple-500/20 bg-background p-6 shadow-lg transition-all duration-300 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10"
          >
            <div className="h-1 w-full rounded-t-3xl bg-gradient-to-r from-purple-600 to-violet-400 -mt-6 -mx-6 mb-6" />
            <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
              Projects
            </h3>

            <div className="space-y-2">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-foreground">
                      College ERP System
                    </p>
                    <p className="text-sm italic text-muted-foreground">
                      Next.js · NestJS · TypeScript · MongoDB
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Private Repo
                  </span>
                </div>

                <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                  <li>
                    Contributing to a multi-tenant College ERP at Akron Systems
                  </li>
                  <li>
                    Built role-based dashboards with full CRUD functionality
                  </li>
                  <li>Reduced API response latency by 25%</li>
                </ul>
              </div>

              <div className="my-4 h-px bg-border" />

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-foreground">
                    Parko – Online Parking System
                  </p>
                  <Link
                    href="https://github.com/abhifarande1008/Parko---Online-Parking-System"
                    target="_blank"
                    className="text-purple-400 transition-colors hover:text-purple-300"
                  >
                    <Github size={18} />
                  </Link>
                </div>

                <p className="text-sm italic text-muted-foreground">
                  Next.js · Node.js · Leaflet · Vercel
                </p>

                <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
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

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-foreground">
                    Diploma Aspirants App
                  </p>
                  <Link
                    href="https://github.com/abhifarande1008/Diploma-Aspirants-Android-App"
                    target="_blank"
                    className="text-purple-400 transition-colors hover:text-purple-300"
                  >
                    <Github size={18} />
                  </Link>
                </div>

                <p className="text-sm italic text-muted-foreground">
                  Android Studio · Firebase
                </p>

                <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
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
            </div>
          </motion.div>

          <motion.div
            variants={cardItem}
            className="overflow-hidden rounded-3xl border border-purple-500/20 bg-background p-6 shadow-lg transition-all duration-300 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10"
          >
            <div className="h-1 w-full rounded-t-3xl bg-gradient-to-r from-purple-600 to-violet-400 -mt-6 -mx-6 mb-6" />
            <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
              Skills
            </h3>
            <p className="text-muted-foreground">
              <strong>JavaScript</strong>, React, Next.js, Tailwind CSS,
              Node.js, NestJS, MongoDB, SQL, Git, Postman, Figma
            </p>
          </motion.div>

          <motion.div
            variants={cardItem}
            className="overflow-hidden rounded-3xl border border-purple-500/20 bg-background p-6 shadow-lg transition-all duration-300 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10"
          >
            <div className="h-1 w-full rounded-t-3xl bg-gradient-to-r from-purple-600 to-violet-400 -mt-6 -mx-6 mb-6" />
            <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
              Education
            </h3>
            <div className="space-y-2 text-muted-foreground">
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

        <motion.div
          variants={fadeUpItem}
          className="sticky top-8 hidden h-[580px] self-start overflow-hidden rounded-3xl border border-purple-500/20 bg-background shadow-2xl shadow-purple-500/10 lg:block"
        >
          <iframe src="/Abhishek_Farande_CV.pdf" className="h-full w-full" />
        </motion.div>
      </div>
    </motion.section>
  );
}
