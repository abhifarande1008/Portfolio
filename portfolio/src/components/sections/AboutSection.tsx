"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cardItem, fadeContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import {
  BookOpen,
  BriefcaseBusiness,
  Globe2,
  GraduationCap,
  MapPin,
} from "lucide-react";

const quickFacts = [
  {
    icon: GraduationCap,
    text: "B.Tech IT — Walchand Institute · CGPA 8.87",
  },
  {
    icon: BriefcaseBusiness,
    text: "Software Developer Intern — Akron Systems",
  },
  {
    icon: MapPin,
    text: "Kolhapur, Maharashtra",
  },
  {
    icon: Globe2,
    text: "Open to full-time & freelance opportunities",
  },
];

const stats = [
  { value: "2+", label: "Years Coding" },
  { value: "5+", label: "Technologies" },
  { value: "2", label: "Live Projects" },
];

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      variants={fadeContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="space-y-8 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        variants={cardItem}
        className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-background via-background to-purple-950/10 p-6 sm:p-8 lg:p-10 shadow-2xl"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_28%)]" />

        <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <motion.div variants={cardItem} className="flex flex-col justify-start pt-6">
            <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground backdrop-blur">
              <BookOpen className="h-4 w-4 text-primary" />
              About Me
            </p>

            <h2 className="max-w-xl text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              I build things for the web.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Final-year IT student at Walchand Institute of Technology with
              hands-on experience in full-stack development. Currently
              interning at Akron Systems building a multi-tenant College ERP.
            </p>

            <p className="mt-4 max-w-2xl border-l-2 border-primary/60 pl-4 text-base font-medium leading-7 text-foreground/90 sm:text-lg">
              I care about clean code, fast UIs, and solving real problems.
            </p>
          </motion.div>

          <motion.div variants={cardItem} className="lg:pl-4">
            <Card className="relative h-full overflow-hidden border-border/70 bg-background/80 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
              <CardContent className="relative space-y-5 p-6 sm:p-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Quick Facts
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-foreground">
                    A few essentials
                  </h3>
                </div>

                <div className="space-y-4">
                  {quickFacts.map((fact) => {
                    const Icon = fact.icon;

                    return (
                      <div
                        key={fact.text}
                        className="flex items-start gap-4 rounded-2xl border border-border/60 bg-background/60 p-4 transition-colors hover:bg-background/90"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="pt-0.5 text-sm leading-6 text-muted-foreground sm:text-[15px]">
                          {fact.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={cardItem}
        className="grid gap-4 sm:grid-cols-3"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group rounded-2xl border border-border bg-background/70 p-5 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-background"
          >
            <div className="text-4xl font-black tracking-tight text-purple-400 sm:text-5xl">
              {stat.value}
            </div>
            <div className="mt-2 text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
