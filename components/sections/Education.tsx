"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Vellore Institute of Technology (VIT)",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    score: "9.14 CGPA",
    date: "2022 – 2026",
    location: "Vellore, Tamil Nadu",
  },
  {
    institution: "Lucky Bal Niketan Senior Secondary School",
    degree: "Class XII (CBSE)",
    score: "92.6%",
    date: "2021 – 2022",
    location: "Jodhpur, Rajasthan, India",
  },
  {
    institution: "Lucky Bal Niketan Senior Secondary School",
    degree: "Class X (CBSE)",
    score: "90.4%",
    date: "2019 – 2020",
    location: "Jodhpur, Rajasthan, India",
  },
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="education" ref={containerRef} className="relative bg-[#0d1326] z-30 overflow-hidden">
      <motion.div style={{ y, opacity }} className="py-24 container mx-auto px-6">
        <SectionHeading 
          title="Education" 
          subtitle="My academic background and achievements." 
        />

        <div className="max-w-3xl mx-auto">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-12 md:pl-0 mb-12 last:mb-0 group"
            >
              {/* Desktop layout: Side by side */}
              <div className="hidden md:flex items-center justify-between w-full relative">
                {/* Connector line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 -z-10 group-last:bottom-auto group-last:h-full" />
                
                {/* Dot */}
                <div className="absolute left-1/2 top-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full glass border-electric bg-navy flex items-center justify-center z-10 group-hover:scale-125 group-hover:bg-electric transition-all">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>

                <div className={`w-[45%] text-right pr-8 ${idx % 2 !== 0 ? "order-2 text-left pl-8 pr-0" : ""}`}>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-electric transition-colors">{edu.degree}</h3>
                  <h4 className="text-purple font-medium mb-2">{edu.institution}</h4>
                  <p className="text-sm text-gray">{edu.location}</p>
                </div>

                <div className={`w-[45%] pl-8 ${idx % 2 !== 0 ? "order-1 text-right pr-8 pl-0" : ""}`}>
                  <div className="inline-block px-4 py-2 glass-card rounded-xl border-white/10">
                    <span className="block text-cyan font-bold text-lg mb-1">{edu.score}</span>
                    <span className="text-sm text-gray">{edu.date}</span>
                  </div>
                </div>
              </div>

              {/* Mobile layout */}
              <div className="md:hidden relative border-l-2 border-white/10 pl-8 pb-8 group-last:border-transparent group-last:pb-0">
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full glass border-electric bg-navy flex items-center justify-center z-10">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <div className="glass-card p-6 rounded-2xl border-white/10">
                  <span className="inline-block px-3 py-1 bg-white/5 text-cyan text-sm rounded-full mb-3">
                    {edu.date}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <h4 className="text-purple font-medium mb-3">{edu.institution}</h4>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray">{edu.location}</p>
                    <span className="text-cyan font-bold">{edu.score}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
