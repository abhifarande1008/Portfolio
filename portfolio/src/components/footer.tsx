"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/abhifarande1008",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/abhishek-farande-3836a6253/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:abhishekfarande81@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-border/40 bg-background/80 backdrop-blur-md"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 text-sm text-muted-foreground sm:py-6 sm:px-10">
        <div className="flex w-full items-center justify-between md:grid md:grid-cols-3 md:gap-6">
          <div className="flex items-center">
            <span className="font-sans text-xs text-muted-foreground/60 md:text-sm">
              © 2026 · Built by{" "}
            </span>
            <span className="font-mono text-xs font-semibold text-foreground md:text-sm">
              abhishek
            </span>
            <span className="font-mono text-xs font-semibold text-purple-400 md:text-sm">
              .dev
            </span>
            <span className="font-mono text-xs text-muted-foreground/60 md:text-sm">
              ()
            </span>
          </div>

          <div className="hidden items-center justify-center gap-5 md:flex">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-purple-400"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 text-muted-foreground md:justify-end">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="transition-all hover:scale-110 hover:text-purple-400"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
