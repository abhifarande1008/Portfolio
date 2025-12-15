"use client";

import { motion } from "framer-motion";

interface LetterRevealProps {
  text: string;
}

export default function LetterReveal({ text }: LetterRevealProps) {
  return (
    <div className="relative">
      {/* Text */}
      <h1 className="netflix-text">
        {text}
      </h1>

      {/* Vertical light beams */}
      <motion.div
        className="netflix-beams"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      {/* Fast light sweep */}
      <motion.div
        className="netflix-sweep"
        initial={{ x: "-120%" }}
        animate={{ x: "120%" }}
        transition={{
          duration: 0.45,
          ease: "easeInOut",
          delay: 0.2,
        }}
      />
    </div>
  );
}
