"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="w-full border-t border-border bg-background"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        {/* Left text */}
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Abhishek Farande. All rights reserved.
        </p>

        {/* Social icons */}
        <div className="flex gap-4 text-muted-foreground">
          {[{
            icon: <Github size={20} />,
            href: "https://github.com/abhifarande1008",
            label: "GitHub"
          },{
            icon: <Linkedin size={20} />,
            href: "https://www.linkedin.com/in/abhishek-farande-3836a6253/",
            label: "LinkedIn"
          },{
            icon: <Mail size={20} />,
            href: "mailto:abhishekfarande81@gmail.com",
            label: "Email"
          }].map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="hover:text-foreground transition-colors"
              whileHover={{ y: -3, scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
