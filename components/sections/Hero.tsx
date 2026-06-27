"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, ArrowRight, Code2 } from "lucide-react";
import { Github, Linkedin } from "../ui/Icons";
import Button from "../ui/Button";
import { TypewriterText, FadeUpText } from "../ui/AnimatedText";
import Modal from "../ui/Modal";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      id="home"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)] pointer-events-none" />

      {/* Floating Gradient Blobs */}
      <motion.div
        animate={{ 
          x: [0, 50, 0], 
          y: [0, 30, 0],
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-electric/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"
      />
      <motion.div
        animate={{ 
          x: [0, -50, 0], 
          y: [0, -40, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-purple/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"
      />

      {/* Mouse Following Spotlight */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative w-32 h-32 md:w-40 md:h-40 mb-8 rounded-full p-1 bg-gradient-to-br from-electric via-purple to-cyan"
        >
          <div className="w-full h-full rounded-full bg-navy flex items-center justify-center overflow-hidden border-4 border-navy">
            <img src="/Divyanshu-Mathur-Portfolio/photo.jpg" alt="Divyanshu Mathur" className="w-full h-full object-cover" />
          </div>
          {/* Glowing ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric via-purple to-cyan blur-md -z-10 animate-pulse opacity-70" />
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass border-white/10 text-sm font-medium text-cyan"
        >
          Final-Year B.Tech CSE Student
        </motion.div> */}

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Hi, I'm <span className="text-white">Divyanshu</span> Mathur
        </h1>

        <div className="text-xl md:text-3xl font-medium text-gray mb-8 h-10 flex items-center justify-center">
          <TypewriterText text={["AI/ML Engineer", "Data Scientist", "Data Analyst"]} delay={0.1} />
        </div>

        <FadeUpText 
          text="Building Intelligent Systems with AI, Data, and Software Engineering."
          className="max-w-2xl text-lg md:text-xl text-gray mb-10"
          delay={0.8}
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
        >
          <Button href="#projects" variant="primary" className="w-full sm:w-auto">
            View Projects <ArrowRight className="w-4 h-4" />
          </Button>
          <Button onClick={() => setIsResumeOpen(true)} variant="outline" className="w-full sm:w-auto">
            <FileText className="w-4 h-4" /> Preview Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center gap-6"
        >
          <a href="https://github.com/Divyanshu-Mathur" target="_blank" rel="noreferrer" className="text-gray hover:text-white hover:scale-110 transition-all">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/divyanshu-mathur-95a09025a" target="_blank" rel="noreferrer" className="text-gray hover:text-white hover:scale-110 transition-all">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://leetcode.com/u/Divyanshu_Mathur/" target="_blank" rel="noreferrer" className="text-gray hover:text-white hover:scale-110 transition-all">
            <Code2 className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16 flex flex-col items-center z-20"
        >
          <span className="text-sm text-gray mb-2">Scroll</span>
          <div className="w-px h-12 glass overflow-hidden relative">
            <motion.div 
              animate={{ y: [0, 48, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-cyan to-transparent"
            />
          </div>
        </motion.div>
      </motion.div>

      <Modal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)}>
        <div className="w-full h-full flex flex-col items-center justify-center bg-navy p-2">
          <iframe src="/Divyanshu-Mathur-Portfolio/Divyanshu_Mathur_Resume.pdf" className="w-full flex-1 border-0 rounded-lg" />
          <Button variant="primary" href="/Divyanshu-Mathur-Portfolio/Divyanshu_Mathur_Resume.pdf" className="mt-4 shrink-0">
            Download PDF
          </Button>
        </div>
      </Modal>
    </section>
  );
}
