"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CinematicIntro from "./CinematicIntro";
import HeroSection from "../sections/HeroSection";
import NetflixStripIntro from "./NetflixStripIntro";

export default function IntroWrapper() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {showIntro ? (
        <NetflixStripIntro onFinish={() => setShowIntro(false)} />
      ) : (
        <HeroSection />
      )}
    </AnimatePresence>
  );
}
