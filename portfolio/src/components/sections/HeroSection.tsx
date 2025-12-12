"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-background text-foreground"
    >
      {/* LEFT CONTENT */}
      <motion.div
        className="flex-1 max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="text-purple-500">Abhishek</span> Farande
        </motion.h1>

        <motion.p
          className="text-muted-foreground mt-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          📍 Kolhapur, Maharashtra
        </motion.p>

        <motion.h2
          className="text-2xl sm:text-3xl font-semibold mt-4"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Full-Stack Web Developer
        </motion.h2>

        <motion.p
          className="mt-4 text-muted-foreground leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Passionate developer crafting modern web experiences using
          cutting-edge technologies. Specialized in building responsive,
          user-friendly applications.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link href="#projects">
            <Button className="bg-primary text-primary-foreground">
              View Projects
            </Button>
          </Link>
          <Link href="#contact">
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
      </motion.div>

      {/* PROFILE IMAGE */}
      <motion.div
        className="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="rounded-full border-4 border-primary p-1">
          <Image
            src="/image.png"
            alt="profile photo"
            width={280}
            height={280}
            className="rounded-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
