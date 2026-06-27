"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { 
  SiPython, SiReact, SiTensorflow, SiMysql, SiPandas, SiCplusplus, 
  SiGit, SiNextdotjs, SiPytorch, SiPostgresql, SiJavascript, 
  SiNumpy, SiFlask 
} from "react-icons/si";
import { FaBrain, FaRobot, FaEye, FaLanguage, FaChartBar } from "react-icons/fa6";

const allSkillsRow1 = [
  { name: "Python", icon: <SiPython className="w-6 h-6" /> },
  { name: "Machine Learning", icon: <FaBrain className="w-6 h-6" /> },
  { name: "React.js", icon: <SiReact className="w-6 h-6" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="w-6 h-6" /> },
  { name: "MySQL", icon: <SiMysql className="w-6 h-6" /> },
  { name: "Pandas", icon: <SiPandas className="w-6 h-6" /> },
  { name: "C++", icon: <SiCplusplus className="w-6 h-6" /> },
  { name: "Git", icon: <SiGit className="w-6 h-6" /> },
  { name: "Deep Learning", icon: <FaRobot className="w-6 h-6" /> },
];

const allSkillsRow2 = [
  { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" /> },
  { name: "PyTorch", icon: <SiPytorch className="w-6 h-6" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6" /> },
  { name: "NLP", icon: <FaLanguage className="w-6 h-6" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-6 h-6" /> },
  { name: "NumPy", icon: <SiNumpy className="w-6 h-6" /> },
  { name: "Flask", icon: <SiFlask className="w-6 h-6" /> },
  { name: "Computer Vision", icon: <FaEye className="w-6 h-6" /> },
  { name: "Power BI", icon: <FaChartBar className="w-6 h-6" /> },
];

// Duplicate for infinite scroll
const row1 = [...allSkillsRow1, ...allSkillsRow1];
const row2 = [...allSkillsRow2, ...allSkillsRow2];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="skills" ref={containerRef} className="relative bg-navy z-30 overflow-hidden">
      <motion.div style={{ y, opacity }} className="py-24">
        <div className="container mx-auto px-6 mb-16">
          <SectionHeading 
            title="Technical Skills" 
            subtitle="A comprehensive overview of my technical expertise and frameworks." 
          />
        </div>

      <div className="relative flex flex-col gap-8">
        {/* Row 1 - Moves Left */}
        <div className="flex w-[200vw] sm:w-max animate-marquee hover:[animation-play-state:paused]">
          {row1.map((skill, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-4 px-8 py-4 mx-4 glass-card rounded-2xl min-w-max border border-white/5 hover:border-electric/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all cursor-default"
            >
              <div className="text-electric">{skill.icon}</div>
              <span className="text-lg font-medium text-white">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Row 2 - Moves Right */}
        <div className="flex w-[200vw] sm:w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          {row2.map((skill, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-4 px-8 py-4 mx-4 glass-card rounded-2xl min-w-max border border-white/5 hover:border-purple/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all cursor-default"
            >
              <div className="text-purple">{skill.icon}</div>
              <span className="text-lg font-medium text-white">{skill.name}</span>
            </div>
          ))}
        </div>
        
        {/* Fading Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-navy/50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-navy/50 to-transparent z-10" />
      </div>
      </motion.div>
    </section>
  );
}
