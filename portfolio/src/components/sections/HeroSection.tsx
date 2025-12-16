"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  fadeContainer,
  fadeUpItem,
  fadeRightItem,
} from "@/lib/animations";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-10 px-4 sm:px-8 md:px-16 lg:px-24 pt-8 pb-32"
    >
      {/* LEFT CONTENT */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        variants={fadeContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold"
          variants={fadeUpItem}
        >
          <span className="text-purple-500">Abhishek</span> Farande
        </motion.h1>

        <motion.p
          className="mt-2 text-sm sm:text-base text-muted-foreground"
          variants={fadeUpItem}
        >
          📍 Kolhapur, Maharashtra
        </motion.p>

        <motion.h2
          className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold"
          variants={fadeUpItem}
        >
          Full-Stack Web Developer
        </motion.h2>

        <motion.p
          className="mt-4 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto md:mx-0"
          variants={fadeUpItem}
        >
          Passionate developer crafting modern web experiences using
          cutting-edge technologies. Specialized in building responsive,
          user-friendly applications.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap justify-center md:justify-start gap-3"
          variants={fadeUpItem}
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
      </motion.div>

      {/* IMAGE */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center md:justify-end"
        variants={fadeRightItem}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="rounded-full border-4 border-primary p-1">
          <Image
            src="/image.png"
            alt="profile photo"
            width={240}
            height={240}
            className="rounded-full sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px]"
          />
        </div>
      </motion.div>
    </section>
  );
}
