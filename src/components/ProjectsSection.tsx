import React from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  ArrowUpRight, 
  Sparkles, 
  Cpu, 
  Layers, 
  Bot,
  ExternalLink
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="relative py-24 border-t border-slate-800/80 overflow-hidden bg-[#050811]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-400"
          >
            <span>03. Engineering Artifacts</span>
            <span className="text-slate-600">·</span>
            <span>Scalable Real-World Implementations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans text-wrap-balance"
          >
            Featured High-Performance Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Autonomous systems, GPU cluster acceleration, and embodied foundation models engineered for production scale.
          </motion.p>
        </div>

        {/* 3 Showcase Cards with Glassmorphism & Neon Hover Borders */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => {
            const isCyan = project.accentColor === 'cyan';
            const isPurple = project.accentColor === 'purple';

            const borderClass = isCyan
              ? 'hover:border-cyan-400/80 hover:shadow-cyan-950/60'
              : isPurple
              ? 'hover:border-purple-400/80 hover:shadow-purple-950/60'
              : 'hover:border-emerald-400/80 hover:shadow-emerald-950/60';

            const badgeBg = isCyan
              ? 'bg-cyan-950/70 border-cyan-500/40 text-cyan-300'
              : isPurple
              ? 'bg-purple-950/70 border-purple-500/40 text-purple-300'
              : 'bg-emerald-950/70 border-emerald-500/40 text-emerald-300';

            const ctaGlow = isCyan
              ? 'hover:bg-cyan-400 hover:text-slate-950 text-cyan-300 border-cyan-500/50 glow-cyan'
              : isPurple
              ? 'hover:bg-purple-400 hover:text-slate-950 text-purple-300 border-purple-500/50 glow-purple'
              : 'hover:bg-emerald-400 hover:text-slate-950 text-emerald-300 border-emerald-500/50 glow-green';

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className={`group relative flex flex-col justify-between rounded-2xl bg-[#090d1c]/80 border border-slate-800/90 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${borderClass}`}
              >
                {/* Image Container with measured contrast scrim */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 group-hover:brightness-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d1c] via-[#090d1c]/30 to-transparent" />
                  
                  {/* Neon pill-free category watermark indicator */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-[11px] font-mono px-2.5 py-1 rounded-md border backdrop-blur-md ${badgeBg}`}>
                      {project.subtitle.split(' ')[0]} Focus
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs font-mono text-slate-400 line-clamp-1">
                      {project.subtitle}
                    </p>

                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Clean unboxed metadata separator for tech tags */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <React.Fragment key={tag}>
                        <span className="text-slate-300">{tag}</span>
                        {i < 2 && <span className="text-slate-600">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Metrics strip */}
                  <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center font-mono">
                    {project.metrics.map(m => (
                      <div key={m.label}>
                        <div className="text-xs font-bold text-cyan-300 tabular-nums">
                          {m.value}
                        </div>
                        <div className="text-[9px] text-slate-500 uppercase">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons: View Details & GitHub */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectProject(project)}
                      className={`flex-1 py-2 px-3 rounded-xl font-mono text-xs font-semibold border transition-all duration-200 flex items-center justify-center gap-1.5 ${ctaGlow}`}
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
