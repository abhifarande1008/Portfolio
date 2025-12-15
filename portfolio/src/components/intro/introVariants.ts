// components/intro/introVariants.ts
import { Variants } from "framer-motion";

export const letterContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const letterReveal: Variants = {
  hidden: {
    clipPath: "inset(0 0 100% 0)",
  },
  show: {
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const glowSweep: Variants = {
  hidden: { x: "-120%" },
  show: {
    x: "120%",
    transition: {
      duration: 1.4,
      ease: "easeInOut",
    },
  },
};
