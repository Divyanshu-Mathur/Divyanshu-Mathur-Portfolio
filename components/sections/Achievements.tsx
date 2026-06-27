"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { ExternalLink, Code2, Trophy } from "lucide-react";
import { Github, Linkedin } from "../ui/Icons";

const stats = [
  { label: "CGPA", value: 9.14, suffix: "", isFloat: true },
  { label: "AI/ML Projects", value: 10, suffix: "+", isFloat: false },
  { label: "DSA Problems Solved", value: 1000, suffix: "+", isFloat: false },
];

const profiles = [
  {
    name: "LeetCode",
    username: "Divyanshu_Mathur",
    icon: <Code2 className="w-8 h-8 text-white" />,
    url: "https://leetcode.com/u/Divyanshu_Mathur/",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "GitHub",
    username: "Divyanshu-Mathur",
    icon: <Github className="w-8 h-8 text-white" />,
    url: "https://github.com/Divyanshu-Mathur",
    color: "from-gray-600 to-gray-900",
  },
  {
    name: "LinkedIn",
    username: "divyanshu-mathur",
    icon: <Linkedin className="w-8 h-8 text-white" />,
    url: "https://www.linkedin.com/in/divyanshu-mathur-95a09025a",
    color: "from-blue-600 to-blue-800",
  },
];

const Counter = ({ value, suffix, isFloat }: { value: number; suffix: string; isFloat: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          clearInterval(timer);
          setCount(value);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric to-cyan">
      {isFloat ? count.toFixed(2) : Math.floor(count)}
      {suffix}
    </span>
  );
};

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="achievements" ref={containerRef} className="relative bg-[#0d1326] z-30 overflow-hidden">
      <motion.div style={{ y, opacity }} className="py-24 container mx-auto px-6">
        <SectionHeading 
          title="Achievements & Profiles" 
          subtitle="My coding profiles, open-source contributions, and statistical highlights." 
        />

        {/* Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center p-6 glass-card rounded-2xl"
            >
              <Counter value={stat.value} suffix={stat.suffix} isFloat={stat.isFloat} />
              <p className="mt-2 text-sm text-gray font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Coding Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {profiles.map((profile, idx) => (
            <motion.a
              key={idx}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-3xl p-8 group relative overflow-hidden block"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="flex flex-col items-center justify-center text-center h-full">
                <div className="relative w-full flex justify-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${profile.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {profile.icon}
                  </div>
                  <ExternalLink className="absolute right-0 top-0 w-6 h-6 text-gray group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{profile.name}</h3>
                <p className="text-gray flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-electric" />
                  {profile.username}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
