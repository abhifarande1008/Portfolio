"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>("home");

  // Scroll-Spy Logic
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "training",
      "resume",
      "contact",
    ];

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
    <nav className="fixed top-0 left-0 w-full bg-background/70 backdrop-blur-md border-b border-border px-10 py-6 flex justify-between items-center z-50">
      <Link href="#home" className="cursor-pointer">
        <h1 className="text-2xl font-bold text-primary">
          <span className="text-purple-500">A</span>bhishek
        </h1>
      </Link>

      {/* NAV LINKS */}
      <div className="flex gap-6 text-sm font-medium">
        {[
          "home",
          "about",
          "skills",
          "projects",
          "training",
          "resume",
          "contact",
        ].map((item) => (
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

      {/* THEME TOGGLE */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-md border border-border hover:bg-muted"
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </button>
    </nav>
  );
}
