"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Research Intern (Data Analyst)",
    company: "Indian Institute of Technology (IIT) Jodhpur",
    date: "May 2025 – Jul 2025",
    location: "Jodhpur, Rajasthan",
    description: [
      "Analyzed 50,000+ urban mobility records and engineered behavioral and demographic features to uncover key factors influencing commuter travel choices.",
      // "Developed clustering and machine learning models to segment commuters into 5 personas and predict transportation modes with 87% accuracy.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Aamby Valley City Limited",
    date: "Jun 2024 – Jul 2024",
    location: "Pune, Maharashtra",
    description: [
      "Developed responsive, mobile-first web interfaces and optimized performance, reducing page load times by 30% while ensuring seamless cross-browser compatibility.",
      // "Collaborated with backend teams to integrate APIs and transform UI/UX designs into interactive, user-friendly web applications.",
    ],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="experience" ref={containerRef} className="relative bg-[#0d1326] z-30 overflow-hidden">
      <motion.div style={{ y, opacity }} className="py-24 container mx-auto px-6">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey and internships in the tech industry." 
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[20px] md:left-1/2 top-0 w-10 h-10 -translate-x-1/2 rounded-full glass flex items-center justify-center border-electric bg-navy z-10">
                <Briefcase className="w-5 h-5 text-electric" />
              </div>

              <div className="ml-16 md:ml-0 md:w-1/2 md:px-12 pt-2">
                <div className={`glass-card p-8 rounded-2xl border-l-4 border-l-electric ${
                  idx % 2 === 0 ? "md:border-l-0 md:border-r-4 md:border-r-electric" : ""
                }`}>
                  <span className="inline-block px-3 py-1 bg-white/5 text-cyan text-sm rounded-full mb-4">
                    {exp.date}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-purple font-medium mb-2">{exp.company}</h4>
                  <p className="text-sm text-gray mb-4 flex items-center gap-1">
                    {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray text-sm flex gap-3">
                        <span className="text-electric mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
