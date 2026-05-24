"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, ExternalLink } from "lucide-react";

import { fadeContainer, fadeUpItem, cardItem } from "@/lib/animations";

export default function ProfessionalTimeline() {
  return (
    <motion.section
      variants={fadeContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.05 }}
      className="space-y-10 px-4 sm:px-6 lg:px-8"
    >
      <motion.div variants={fadeUpItem} className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
          Journey
        </p>
        <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
          Experience &amp; Training
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          How I got here and what I&apos;ve built along the way 🚀
        </p>
      </motion.div>

      {/* ================= EXPERIENCE ================= */}
      <SectionTitle title="Experience" />

      <Timeline>
        <TimelineItem>
          <CardWrapper>
            <Header
              role="Software Developer Intern"
              org="Akron Systems — On-site"
              date="June 2025 – Present"
            />

            <p className="text-muted-foreground leading-relaxed">
              Collaborating on a multi-tenant College ERP system as part of a
              5-member Agile team, contributing to full-stack development using
              Next.js, NestJS, and MongoDB.
            </p>

            <Accordion type="single" collapsible>
              <AccordionItem value="experience">
                <AccordionTrigger>Key Responsibilities</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                    <li>
                      Built responsive UI pages using ShadCN and Tailwind CSS,
                      delivering dynamic forms and full CRUD functionality for
                      multi-role users.
                    </li>
                    <li>
                      Optimized backend APIs, reducing response latency by 25%.
                    </li>
                    <li>
                      Built and tested REST APIs using NestJS and MongoDB and
                      supported backend logic implementation.
                    </li>
                    <li>
                      Collaborated in Agile sprints with a 5-member team,
                      improving delivery time by 15%.
                    </li>
                    <li>
                      Participated in sprint planning and code reviews to ensure
                      high-quality delivery.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <TechStack
              tech={[
                "Next.js",
                "NestJS",
                "TypeScript",
                "Tailwind CSS",
                "ShadCN UI",
                "MongoDB",
              ]}
            />
          </CardWrapper>
        </TimelineItem>
      </Timeline>

      {/* ================= TRAINING ================= */}
      <SectionTitle title="Training" />

      <Timeline>
        <TimelineItem>
          <CardWrapper>
            <Header
              role="Full Stack Web Development Trainee"
              org="Gradious Technologies (P) Ltd."
              date="March 2024 – September 2024"
            />

            <p className="text-muted-foreground leading-relaxed">
              Completed Full Stack Web Development training with hands-on
              experience in frontend, backend, REST APIs, and database
              technologies through real-world projects.
            </p>

            <Accordion type="single" collapsible>
              <AccordionItem value="training">
                <AccordionTrigger>Key Learnings</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                    <li>Developed responsive and interactive web applications</li>
                    <li>Implemented RESTful APIs and backend logic</li>
                    <li>Worked with SQL and NoSQL databases</li>
                    <li>Followed agile development practices</li>
                    <li>Participated in code reviews and pair programming</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <TechStack
              tech={[
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "React",
                "Node.js",
                "MySQL",
                "MongoDB",
              ]}
            />
          </CardWrapper>
        </TimelineItem>
      </Timeline>

      {/* ================= CERTIFICATIONS ================= */}
      <SectionTitle title="Certifications" />

      <Timeline>
        <TimelineItem>
          <CardWrapper>
            <CertificateBadge />
            <Header
              role="Android Development Internship"
              org="UEF EdTech Pvt. Ltd."
              date="July 2022 – August 2022"
            />

            <p className="text-muted-foreground leading-relaxed">
              Completed a 6-week professional Android Development internship
              with hands-on experience in building mobile applications using
              Kotlin and Android Studio.
            </p>

            <CertificateLink href="https://drive.google.com/file/d/1L_jaTSATjSREmd8x6otXsKioVp39IpkK/view?usp=drive_link" />
          </CardWrapper>
        </TimelineItem>

        <TimelineItem>
          <CardWrapper>
            <CertificateBadge />
            <Header
              role="Python Programming &amp; Artificial Intelligence"
              org="Domain Computer Education"
              date="July 2022 – August 2022"
            />

            <p className="text-muted-foreground leading-relaxed">
              Successfully completed industrial training in Python Programming
              and Artificial Intelligence, focusing on programming fundamentals
              and AI concepts.
            </p>

            <CertificateLink href="https://drive.google.com/file/d/1qF8yG8gAlRz6UTsk6e9JsWmsIf2ZpqKl/view?usp=drive_link" />
          </CardWrapper>
        </TimelineItem>
      </Timeline>
    </motion.section>
  );
}

/* ================= REUSABLE UI PARTS ================= */

function SectionTitle({ title }: { title: string }) {
  return (
    <motion.h2
      variants={fadeUpItem}
      className="border-l-4 border-purple-500 pl-4 text-2xl font-black uppercase tracking-wider text-muted-foreground"
    >
      {title}
    </motion.h2>
  );
}

function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative space-y-10 pl-10 pr-4 sm:pr-6">
      <span className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-purple-600 via-purple-400/50 to-transparent" />
      {children}
    </div>
  );
}

function TimelineItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={cardItem}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className="group relative"
    >
      <span className="absolute -left-[27px] top-7 h-4 w-4 rounded-full border-2 border-background bg-purple-600 shadow-[0_0_12px_rgba(168,85,247,0.6)]" />

      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
      />

      {children}
    </motion.div>
  );
}

function CardWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-purple-500/20 bg-background shadow-lg transition-all duration-300 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10">
      <div className="h-1 w-full bg-gradient-to-r from-purple-600 to-violet-400" />
      <Card className="border-0 bg-background">
        <CardContent className="space-y-4 p-6">{children}</CardContent>
      </Card>
    </div>
  );
}

function Header({
  role,
  org,
  date,
}: {
  role: string;
  org: string;
  date: string;
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h3 className="text-xl font-semibold">{role}</h3>
        <p className="text-sm text-muted-foreground">{org}</p>
      </div>
      <div className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
        <Calendar size={16} />
        <span>{date}</span>
      </div>
    </div>
  );
}

function TechStack({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 pt-2">
      {tech.map((t) => (
        <Badge key={t} variant="secondary">
          {t}
        </Badge>
      ))}
    </div>
  );
}

function CertificateBadge() {
  return (
    <span className="absolute right-4 top-4 z-10 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-2 py-1 text-xs text-yellow-400">
      🏆 Certification
    </span>
  );
}

function CertificateLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-400 transition-colors hover:bg-purple-500/20"
    >
      View Certificate
      <ExternalLink
        size={16}
        className="transition-transform group-hover:translate-x-0.5"
      />
    </a>
  );
}
