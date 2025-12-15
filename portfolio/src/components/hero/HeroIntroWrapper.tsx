"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroIntro3D from "./HeroIntro3D";
import HeroSection from "../sections/HeroSection";

export default function HeroIntroWrapper() {
  const [showIntro, setShowIntro] = useState<boolean>(true);

  return (
    <AnimatePresence mode="wait">
      {showIntro ? (
        <motion.div
          key="intro"
          className="fixed inset-0 z-50 bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <HeroIntro3D onFinish={() => setShowIntro(false)} />
        </motion.div>
      ) : (
        <motion.div
          key="hero"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <HeroSection />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
