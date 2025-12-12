"use client";

import { motion } from "framer-motion";

interface BasicSectionProps {
  id: string;
  title: string;
  children?: React.ReactNode;
}

export default function BasicSection({
  id,
  title,
  children,
}: BasicSectionProps) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-16 min-h-screen px-6 md:px-20 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl font-bold mb-6 mt-6">{title}</h2>
      {children}
    </motion.section>
  );
}
