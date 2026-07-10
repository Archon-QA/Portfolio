"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { revealVariants } from "./motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.7,
}: RevealProps) {
  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}