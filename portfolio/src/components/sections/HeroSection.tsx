"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeContainer, fadeUpItem, fadeRightItem } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-24 pt-2 sm:px-8 md:px-16 lg:px-24"
    >
      <div className="pointer-events-none absolute inset-0 flex justify-center md:justify-end">
        <div className="absolute right-[-5%] top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(88,28,135,0.2)_0%,transparent_65%)] blur-3xl md:right-[-3%] lg:h-[42rem] lg:w-[42rem]" />
      </div>

      <div className="relative grid min-h-screen items-center gap-14 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <motion.div
          className="relative z-10 flex max-w-2xl flex-col justify-center"
          variants={fadeContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
        >
          <motion.div
            variants={fadeUpItem}
            className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-emerald-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Available for Work
          </motion.div>

          <motion.h1
            variants={fadeUpItem}
            className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-purple-500">Abhishek</span>{" "}
            <span className="text-foreground">Farande</span>
          </motion.h1>

          <motion.p
            variants={fadeUpItem}
            className="mt-3 text-sm text-muted-foreground sm:text-base"
          >
            📍 Kolhapur, Maharashtra
          </motion.p>

          <motion.div variants={fadeUpItem} className="mt-5">
            <TypeAnimation
              sequence={[
                "Full-Stack Web Developer",
                1000,
                "React & Next.js Engineer",
                1000,
                "Problem Solver",
                1000,
                "Open to Opportunities",
                1000,
              ]}
              speed={60}
              repeat={Infinity}
              wrapper="h2"
              className="min-h-[2.8rem] text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl"
            />
          </motion.div>

          <motion.p
            variants={fadeUpItem}
            className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base"
          >
            Passionate developer crafting modern web experiences using
            cutting-edge technologies. Specialized in building responsive,
            user-friendly applications.
          </motion.p>

          <motion.div
            variants={fadeUpItem}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link href="/projects">
              <Button>View Projects</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Contact Me</Button>
            </Link>
            <Link
              href="/Abhishek_Farande_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">View Resume</Button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUpItem}
            className="mt-8 flex items-center justify-center gap-4 md:justify-start"
          >
            <motion.a
              href="https://github.com/abhifarande1008"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-muted-foreground transition-colors hover:text-purple-400"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/abhishek-farande"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-muted-foreground transition-colors hover:text-purple-400"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="mailto:abhishekfarande90@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-muted-foreground transition-colors hover:text-purple-400"
              aria-label="Mail"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUpItem}
            className="mt-8 flex items-center justify-center gap-4 md:justify-start"
          >
            <div className="flex items-center gap-4">
              <div className="text-left">
                <div className="text-2xl font-black text-purple-400">2+</div>
                <div className="text-xs text-muted-foreground">Years Coding</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-left">
                <div className="text-2xl font-black text-purple-400">5+</div>
                <div className="text-xs text-muted-foreground">
                  Technologies
                </div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-left">
                <div className="text-2xl font-black text-purple-400">2</div>
                <div className="text-xs text-muted-foreground">Live Projects</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative order-first flex justify-center lg:order-last lg:justify-end"
          variants={fadeRightItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
        >
          <div className="relative flex h-[16rem] w-[16rem] items-center justify-center sm:h-[28rem] sm:w-[28rem] lg:h-[34rem] lg:w-[34rem]">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/30 via-purple-400/10 to-transparent blur-2xl"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="absolute inset-8 rounded-full border border-white/10 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent shadow-[0_0_80px_rgba(168,85,247,0.18)]" />

            <div className="relative z-10 rounded-full p-3">
              <div className="overflow-hidden rounded-full border border-white/10 shadow-[0_0_60px_rgba(168,85,247,0.25)]">
                <Image
                  src="/image.png"
                  alt="profile photo"
                  width={420}
                  height={420}
                  className="h-[18rem] w-[18rem] rounded-full object-cover sm:h-[21rem] sm:w-[21rem] lg:h-[24rem] lg:w-[24rem]"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
