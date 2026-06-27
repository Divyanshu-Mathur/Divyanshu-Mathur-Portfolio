"use client";

import { motion } from "framer-motion";
import { Mail, Code2 } from "lucide-react";
import { Github, Linkedin } from "../ui/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-navy pt-16 pb-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-electric/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-4 group inline-flex">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric to-purple flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                D
              </span>
              <span className="text-white">Divyanshu<span className="text-cyan">.</span></span>
            </a>
            <p className="text-gray max-w-sm mb-6">
              Building Intelligent Systems with AI, Data, and Software Engineering.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Divyanshu-Mathur" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray hover:text-white hover:border-electric transition-all hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/divyanshu-mathur-95a09025a" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray hover:text-white hover:border-electric transition-all hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://leetcode.com/u/Divyanshu_Mathur/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray hover:text-white hover:border-electric transition-all hover:scale-110">
                <Code2 className="w-5 h-5" />
              </a>
              <a href="mailto:divyanshumathur2004@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray hover:text-white hover:border-electric transition-all hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#about" className="text-gray hover:text-electric transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray hover:text-electric transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray hover:text-electric transition-colors">Projects</a></li>
              <li><a href="#experience" className="text-gray hover:text-electric transition-colors">Experience</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="flex flex-col gap-2 text-gray">
              <li>divyanshumathur2004@gmail.com</li>
              <li>Jodhpur, Rajasthan</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray text-sm text-center md:text-left">
            &copy; {currentYear} Divyanshu Mathur. All rights reserved.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -3 }}
            className="text-sm text-gray hover:text-white transition-colors flex items-center gap-2"
          >
            Back to Top
            <span className="w-8 h-8 rounded-full glass flex items-center justify-center">
              ↑
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
