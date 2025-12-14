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
      className="fixed top-0 left-0 w-full bg-background/70 backdrop-blur-md border-b border-border px-6 sm:px-10 py-4 flex justify-between items-center z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="cursor-pointer z-50"
        onClick={() => setMenuOpen(false)}
      >
        <motion.h1
          className="text-2xl font-bold text-primary"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-purple-500">A</span>bhishek
        </motion.h1>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-sm font-medium">
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
                className={`transition pb-1 ${
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {section.title}
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Right Buttons */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Theme Toggle */}
        <motion.button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-md border border-border hover:bg-muted transition"
          whileTap={{ rotate: 180 }}
          transition={{ duration: 0.5 }}
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md border border-border hover:bg-muted"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="absolute top-full left-0 w-full bg-background border-t border-border md:hidden flex flex-col items-center gap-4 py-4 z-40 shadow-md"
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
                className={`transition pb-1 text-lg ${
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {section.title}
              </Link>
            );
          })}
        </motion.div>
      )}
    </motion.nav>
  );
}
