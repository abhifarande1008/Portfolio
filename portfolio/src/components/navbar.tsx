"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const sections = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "training", title: "Training" },
  { id: "resume", title: "Resume" },
  { id: "contact", title: "Contact" },
] as const;

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-border/40 bg-background/80 px-6 py-4 backdrop-blur-md sm:px-10"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <Link
        href="/"
        className="z-50 cursor-pointer transition-opacity hover:opacity-80"
        onClick={() => setMenuOpen(false)}
      >
        <motion.h1
          className="flex items-center gap-0 font-mono"
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="font-mono text-base font-semibold text-foreground">
            abhishek
          </span>
          <span className="font-mono text-base font-semibold text-purple-400">
            .dev
          </span>
          <span className="font-mono text-base text-muted-foreground/60">
            ()
          </span>
        </motion.h1>
      </Link>

      <div className="hidden gap-6 text-sm font-medium md:flex">
        {sections.map((section) => {
          const href = section.id === "home" ? "/" : `/${section.id}`;
          const isActive = pathname === href;

          return (
            <motion.div
              key={section.id}
              className="relative"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={href}
                className={`relative pb-1 transition-colors hover:text-purple-400 ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {section.title}
                {isActive ? (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-purple-500" />
                ) : null}
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        <motion.button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full border border-border/50 p-2 transition-all hover:border-purple-500/50 hover:bg-purple-500/10"
          whileTap={{ rotate: 180 }}
          transition={{ duration: 0.5 }}
        >
          <Moon className="h-5 w-5 block dark:hidden" />
          <Sun className="hidden h-5 w-5 dark:block" />
        </motion.button>

        <button
          className="rounded-md border border-border/50 p-2 transition-all hover:bg-purple-500/10 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          className="absolute left-0 top-full z-40 flex w-full flex-col items-center gap-4 border-t border-border/40 bg-background/95 py-4 shadow-md backdrop-blur-md md:hidden"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {sections.map((section) => {
            const href = section.id === "home" ? "/" : `/${section.id}`;
            const isActive = pathname === href;

            return (
              <Link
                key={section.id}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`relative pb-1 text-lg transition-colors hover:text-purple-400 ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {section.title}
                {isActive ? (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-purple-500" />
                ) : null}
              </Link>
            );
          })}
        </motion.div>
      )}
    </motion.nav>
  );
}
