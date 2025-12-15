"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import LetterReveal from "./LetterReveal";

interface CinematicIntroProps {
  onFinish: () => void;
}

export default function CinematicIntro({ onFinish }: CinematicIntroProps) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 1800);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }} // faster
    >
      <LetterReveal text="Abhishek" />
    </motion.div>
  );
}
