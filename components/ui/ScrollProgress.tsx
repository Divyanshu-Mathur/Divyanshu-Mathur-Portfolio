"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric via-purple to-cyan origin-left z-[10000]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
