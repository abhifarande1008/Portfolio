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
      viewport={{ once: true }}
      className="space-y-16"
    >
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
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
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
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
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
            <Header
              role="Python Programming & Artificial Intelligence"
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
    <motion.h2 variants={fadeUpItem} className="text-3xl font-bold">
      {title}
    </motion.h2>
  );
}

function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative pl-10 pr-4 sm:pr-6 space-y-10">
      <span className="absolute left-4 top-0 h-full w-[2px] bg-border" />
      {children}
    </div>
  );
}

/* ⭐ MAIN ANIMATION CHANGE IS HERE ⭐ */
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
      className="relative group"
    >
      {/* Timeline dot */}
      <span className="absolute -left-[26px] top-7 h-3 w-3 rounded-full bg-primary" />

      {/* Glow */}
      <span
        aria-hidden
        className="
          pointer-events-none absolute inset-0 rounded-xl
          opacity-0 group-hover:opacity-100
          transition-opacity
          bg-gradient-to-br from-primary/10 via-transparent to-transparent
        "
      />

      {children}
    </motion.div>
  );
}

function CardWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Card className="relative hover:shadow-xl transition-shadow">
      <CardContent className="p-6 space-y-4">
        {children}
      </CardContent>
    </Card>
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
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="text-xl font-semibold">{role}</h3>
        <p className="text-sm text-muted-foreground">{org}</p>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
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

function CertificateLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
    >
      View Certificate
      <ExternalLink
        size={16}
        className="transition-transform group-hover:translate-x-0.5"
      />
    </a>
  );
}
