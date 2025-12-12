"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    "home",
    "about",
    "skills",
    "projects",
    "training",
    "resume",
    "contact",
  ];

  // Scroll-Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/70 backdrop-blur-md border-b border-border px-6 sm:px-10 py-4 flex justify-between items-center z-50">
      {/* Logo */}
      <Link href="#home" className="cursor-pointer z-50">
        <h1 className="text-2xl font-bold text-primary">
          <span className="text-purple-500">A</span>bhishek
        </h1>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-sm font-medium">
        {sections.map((item) => (
          <Link
            key={item}
            href={`#${item}`}
            className={`transition pb-1 ${
              activeSection === item
                ? "text-primary font-semibold border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </div>

      {/* Right Buttons */}
      <div className="flex items-center gap-3 md:gap-4">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-md border border-border hover:bg-muted transition"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden p-2 rounded-md border border-border hover:bg-muted"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-t border-border md:hidden flex flex-col items-center gap-4 py-4 z-40 shadow-md">
          {sections.map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className={`transition pb-1 text-lg ${
                activeSection === item
                  ? "text-primary font-semibold border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
