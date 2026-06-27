"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { Code, BrainCircuit, LineChart, Server } from "lucide-react";

export default function About() {
  const cards = [
    {
      title: "AI & ML",
      description: "Deep Learning, NLP, Computer Vision",
      icon: <BrainCircuit className="w-6 h-6 text-electric" />,
    },
    {
      title: "Data Science",
      description: "EDA, Predictive Modeling, Clustering",
      icon: <LineChart className="w-6 h-6 text-purple" />,
    },
    {
      title: "Software Engineering",
      description: "Full Stack, APIs, System Design",
      icon: <Code className="w-6 h-6 text-cyan" />,
    },
    {
      title: "Data Engineering",
      description: "Databases, SQL, Preprocessing",
      icon: <Server className="w-6 h-6 text-white" />,
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="about" ref={containerRef} className="relative bg-navy z-30 overflow-hidden">
      <motion.div style={{ y, opacity }} className="py-24 container mx-auto px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="I'm a passionate technologist dedicated to building intelligent systems that solve real-world problems." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Hello! I'm <span className="text-electric">Divyanshu</span>.
            </h3>
            <div className="text-gray space-y-4 text-lg">
              <p>
                I am a B.Tech Computer Science student from Vellore Institute of Technology, maintaining a strong academic record with a 9.14 CGPA.
              </p>
              <p>
                My expertise lies at the intersection of Artificial Intelligence, Data Science, and Software Development. I have a solid foundation in Machine Learning, Deep Learning, and NLP, complemented by hands-on experience in building responsive web applications.
              </p>
              <p>
                Recently, I interned as a Data Analyst at IIT Jodhpur, where I analyzed urban mobility data and built predictive models. I love turning complex data into actionable insights and robust software solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl border border-white/5 hover:border-electric/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{card.title}</h4>
                <p className="text-sm text-gray">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
