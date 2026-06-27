"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string | string[];
  className?: string;
  delay?: number;
}

export function TypewriterText({ text, className, delay = 0 }: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay * 1000);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    const texts = Array.isArray(text) ? text : [text];
    const currentString = texts[currentIndex];
    
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentString.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }, 30); // Deleting speed
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentString.substring(0, displayedText.length + 1));
        if (displayedText.length === currentString.length) {
          if (Array.isArray(text) && text.length > 1) {
            timer = setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
          }
        }
      }, 50); // Typing speed
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentIndex, hasStarted, text]);

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block ml-[2px] w-[2px] h-[1em] align-middle bg-current"
      />
    </span>
  );
}

export function FadeUpText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {text}
    </motion.p>
  );
}
