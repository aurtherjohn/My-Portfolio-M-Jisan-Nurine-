import React from 'react';
import { motion } from 'motion/react';
import { 
  Atom, 
  Cpu, 
  Bot, 
  Server, 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink,
  Github,
  Linkedin
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Atom,
      title: 'Theoretical Physics & Math',
      accent: 'cyan',
      description: 'Differential equations, Hamiltonian dynamics, and tensor mechanics applied directly to neural loss functions and robotics kinematics.'
    },
    {
      icon: Cpu,
      title: 'GPU-Accelerated Compute',
      accent: 'purple',
      description: 'Low-level optimization on AMD Instinct MI300X, ROCm/HIP C++ kernel development, and maximizing unified memory bandwidth.'
    },
    {
      icon: Bot,
      title: 'Intelligent Autonomous Agents',
      accent: 'green',
      description: 'Building multi-agent reasoning graphs, vLLM / Ollama high-throughput token serving, and multimodal web navigation engines.'
    },
    {
      icon: Server,
      title: 'Distributed Infrastructure',
      accent: 'cyan',
      description: 'Zero-copy IPC, Rust micro-daemons, Kubernetes cluster management, and fault-tolerant distributed training pipelines.'
    }
  ];

  return (
    <section id="about" className="relative py-24 border-t border-slate-800/80 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-400"
          >
            <span>01. Academic & Engineering Profile</span>
            <span className="text-slate-600">·</span>
            <span>Physics & Compute Convergence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans text-wrap-balance"
          >
            Bridging Theory to Production Systems
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Specializing in the intersection of computational physics, deep learning acceleration, and distributed hardware architectures.
          </motion.p>
        </div>

        {/* Grid: Glowing Profile Picture Frame & Detailed Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Glowing Profile Picture Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              
              {/* Outer Animated Glowing Rings */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-purple-600 to-emerald-400 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-500 group-hover:blur-lg" />
              
              {/* Profile Card Container */}
              <div className="relative rounded-2xl bg-[#090d1a] border border-cyan-500/40 p-4 shadow-2xl backdrop-blur-xl overflow-hidden">
                
                {/* Profile Image with subtle overlay */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                  <img
                    src={PERSONAL_INFO.portraitImage}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/aistudio/file_000000007cb881fd809389aa5710c930_69a02a72.png';
                    }}
                    alt={PERSONAL_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle corner tech crosshairs */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400/80 pointer-events-none" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-purple-400/80 pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-emerald-400/80 pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400/80 pointer-events-none" />
                  
                  {/* Floating verification badge */}
                  <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-[#050811]/90 backdrop-blur-md border border-slate-700/80 flex items-center justify-between text-xs font-mono">
                    <span className="text-cyan-300 font-semibold flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                      <span>RU Eng. Physics</span>
                    </span>
                    <span className="text-emerald-400 text-[11px]">Honours</span>
                  </div>
                </div>

                {/* Sub-card identity summary */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-cyan-300 transition-colors"
                      title="GitHub (https://github.com/QuamLepus)"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-cyan-300 transition-colors"
                      title="LinkedIn (https://www.linkedin.com/in/mjisannurine)"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={PERSONAL_INFO.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-cyan-300 transition-colors font-bold text-xs"
                      title="X (https://x.com/mjisannurinen)"
                    >
                      X
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Exact Bio & Engineering Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* The exact requested bio text */}
            <div className="p-6 rounded-2xl bg-[#090d19]/80 border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>About M Jisan Nurine</span>
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5 text-cyan-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>3–4 Years Production AI</span>
                </div>
                <div className="flex items-center gap-1.5 text-purple-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>4-Year B.Sc. (Honours)</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>GPU & ROCm Acceleration</span>
                </div>
              </div>
            </div>

            {/* Core Pillars 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, i) => {
                const IconComponent = pillar.icon;
                const glowClass = 
                  pillar.accent === 'cyan' ? 'hover:border-cyan-500/50 hover:shadow-cyan-950/40' :
                  pillar.accent === 'purple' ? 'hover:border-purple-500/50 hover:shadow-purple-950/40' :
                  'hover:border-emerald-500/50 hover:shadow-emerald-950/40';

                const iconColor = 
                  pillar.accent === 'cyan' ? 'text-cyan-400' :
                  pillar.accent === 'purple' ? 'text-purple-400' :
                  'text-emerald-400';

                return (
                  <div
                    key={pillar.title}
                    className={`p-4 rounded-xl bg-[#080c18] border border-slate-800/80 shadow-md transition-all duration-200 ${glowClass}`}
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className={`p-2 rounded-lg bg-slate-900 border border-slate-800 ${iconColor}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs font-bold text-slate-200">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
