import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Cpu, 
  CheckCircle2, 
  Code, 
  Layers, 
  Sparkles 
} from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const accentBorder = 
    project.accentColor === 'cyan' ? 'border-cyan-500/40 shadow-cyan-950/60' :
    project.accentColor === 'purple' ? 'border-purple-500/40 shadow-purple-950/60' :
    'border-emerald-500/40 shadow-emerald-950/60';

  const accentBadge = 
    project.accentColor === 'cyan' ? 'text-cyan-300 bg-cyan-950/80 border-cyan-500/30' :
    project.accentColor === 'purple' ? 'text-purple-300 bg-purple-950/80 border-purple-500/30' :
    'text-emerald-300 bg-emerald-950/80 border-emerald-500/30';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#090d1a] border ${accentBorder} shadow-2xl z-10 text-slate-200`}
        >
          {/* Header Image & Close */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d1a] via-[#090d1a]/50 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-black/90 transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Bottom Title Overlay */}
            <div className="absolute bottom-4 left-6 right-6">
              <span className={`inline-block text-[11px] font-mono px-2.5 py-0.5 rounded-md border mb-2 ${accentBadge}`}>
                {project.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Top Metrics Row */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#0d1428] border border-slate-800">
              {project.metrics.map(m => (
                <div key={m.label} className="text-center">
                  <span className="block text-xl sm:text-2xl font-bold font-mono text-cyan-400 tabular-nums">
                    {m.value}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Overview</span>
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.details.overview}
              </p>
            </div>

            {/* Architecture & Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>System Architecture</span>
                </h4>
                <ul className="space-y-2">
                  {project.details.architecture.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <span className="text-purple-400 select-none mt-0.5">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Technical Benchmarks</span>
                </h4>
                <ul className="space-y-2">
                  {project.details.technicalHighlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Code Sample */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Implementation Core: {project.details.codeSnippet.filename}</span>
                </span>
                <span className="uppercase text-slate-500">
                  {project.details.codeSnippet.language}
                </span>
              </div>
              <pre className="p-4 rounded-xl bg-[#040711] border border-slate-800 text-slate-300 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>{project.details.codeSnippet.code}</code>
              </pre>
            </div>

            {/* Tech Tags Unboxed with Separators (§1.A) */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-slate-500">Tech:</span>
              {project.tags.map((tag, i) => (
                <React.Fragment key={tag}>
                  <span className="text-slate-300">{tag}</span>
                  {i < project.tags.length - 1 && <span className="text-slate-600">·</span>}
                </React.Fragment>
              ))}
            </div>

            {/* Modal Actions */}
            <div className="pt-4 flex items-center justify-end gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                Close
              </button>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all glow-cyan"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
