"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { ExternalLink } from "lucide-react";
import { Github } from "../ui/Icons";
import Button from "../ui/Button";

const projects = [
  {
    title: "Real-Time Vehicle Speed Estimation & LPR",
    description: "Designed a real-time traffic monitoring system using YOLOv11 for vehicle detection and DeepSORT for robust multi-object tracking. Implemented geometric calibration and OCR-based license plate recognition achieving 71% accuracy.",
    tech: ["Computer Vision", "YOLOv11", "OpenCV", "PyTorch", "EasyOCR", "DeepSORT"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Divyanshu-Mathur/Real-Time-Vehicle-Speed-Number-Plate-Detection",
    // demo: "#",
  },
  {
    title: "Conversational AI Agent",
    description: "Developed a stateful Conversational AI Agent using LangGraph, LangChain, Streamlit, and Gemini API. Implemented persistent multi-turn chat memory and integrated external AI tools including Web Search and Real-Time Stock Price APIs.",
    tech: ["LangChain", "LangGraph", "RAG", "Streamlit", "Gemini API", "SQLite"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Divyanshu-Mathur/Conversational-AI-Agent",
    // demo: "#",
  },
  {
    title: "Multimodal Sentiment Analyzer",
    description: "Built multimodal emotion classification model using Wav2Vec2 audio embeddings and Sentence-BERT text features on 3,000+ voice samples. Achieved 75% accuracy and deployed real-time prediction interface via Streamlit.",
    tech: ["NLP", "Deep Learning", "Speech Processing", "Wav2Vec2", "Sentence-BERT", "Streamlit"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Divyanshu-Mathur/Sentiment-Analyzer-Real-Time",
    // demo: "#",
  },
  {
    title: "MCQGen AI",
    description: "AI-powered MCQ generator built with Streamlit, LLMs, and RAG. Extracts document text, utilizes FAISS for vector storage, and generates tailored questions with controlled difficulty and PDF export capabilities.",
    tech: ["Streamlit", "LangChain", "OpenAI", "RAG", "FAISS", "Python"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Divyanshu-Mathur/MCQGen-AI",
  },
  {
    title: "Online Exam Proctoring System",
    description: "Computer vision-based proctoring system detecting suspicious behavior like talking or phone usage. Uses MediaPipe for face landmarks and YOLOv11n for object detection, featuring real-time scoring and alerts.",
    tech: ["Computer Vision", "YOLOv11", "MediaPipe", "Python", "OpenCV"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Divyanshu-Mathur/Online-Exam-Proctoring-System",
  },
  {
    title: "Income Classification",
    description: "Machine learning model predicting income brackets using the UCI Adult dataset. Handled missing data via KNN imputation, balanced classes using SMOTE, and achieved 85% accuracy with optimized XGBoost.",
    tech: ["Machine Learning", "XGBoost", "SMOTE", "Data Imputation", "Pandas", "Scikit-Learn"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Divyanshu-Mathur/Income-Classification-with-Data-Imputation",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="projects" ref={containerRef} className="relative bg-navy z-30 overflow-hidden">
      <motion.div style={{ y, opacity }} className="py-24 container mx-auto px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Some of the recent projects I've worked on, ranging from Computer Vision to Conversational AI." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors z-10" />
                {/* Fallback image if real isn't loading perfectly */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray text-sm mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-cyan border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                  <Button 
                    href={project.github} 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </Button>
                  {/* <Button 
                    href={project.demo} 
                    variant="primary" 
                    size="sm" 
                    className="flex-1"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </Button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
