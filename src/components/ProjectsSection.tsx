import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  ArrowUpRight, 
  Search,
  X,
  RotateCcw,
  FolderSearch
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string>('all');

  // Collect all unique technology tags across projects for quick filter buttons
  const techFilters = useMemo(() => {
    const tagSet = new Set<string>();
    PROJECTS.forEach((project) => {
      project.tags.forEach((tag) => tagSet.add(tag));
    });
    return ['all', ...Array.from(tagSet)];
  }, []);

  // Real-time filtering by project name, subtitle, description, or tech stack tags
  const filteredProjects = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return PROJECTS.filter((project) => {
      const matchesTech =
        selectedTech === 'all' ||
        project.tags.some((tag) => tag.toLowerCase() === selectedTech.toLowerCase());

      if (!matchesTech) return false;
      if (!normalizedQuery) return true;

      return (
        project.title.toLowerCase().includes(normalizedQuery) ||
        project.subtitle.toLowerCase().includes(normalizedQuery) ||
        project.description.toLowerCase().includes(normalizedQuery) ||
        project.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery))
      );
    });
  }, [searchQuery, selectedTech]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedTech('all');
  };

  const hasActiveFilters = searchQuery.trim().length > 0 || selectedTech !== 'all';

  return (
    <section id="projects" className="relative py-24 border-t border-slate-800/80 overflow-hidden bg-[#050811]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
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

        {/* Real-Time Search & Technology Filter Bar */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 group">
              <Search className="w-4 h-4 text-slate-400 group-focus-within:text-cyan-400 transition-colors absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by name or tech stack (e.g. ROCm, Rust, PyTorch, Playwright)..."
                aria-label="Search projects by name or technology stack"
                className="w-full pl-11 pr-10 py-3 rounded-xl bg-[#090d1c]/90 border border-slate-800 text-sm font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/80 focus:shadow-[0_0_20px_-5px_rgba(6,182,212,0.35)] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Result Counter */}
            <div className="px-4 py-3 rounded-xl bg-[#090d1c]/80 border border-slate-800/90 text-xs font-mono text-slate-400 flex items-center justify-between sm:justify-center gap-2 shrink-0 tabular-nums">
              <span>
                Showing <span className="text-cyan-300 font-semibold">{filteredProjects.length}</span> of{' '}
                <span className="text-slate-300">{PROJECTS.length}</span>
              </span>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 ml-2 pl-2 border-l border-slate-800 cursor-pointer"
                  title="Reset search and filters"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Interactive Tech Stack Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-xl bg-[#080c19]/80 border border-slate-800/80">
            {techFilters.map((tech) => {
              const isActive = selectedTech === tech;
              return (
                <button
                  key={tech}
                  type="button"
                  onClick={() => setSelectedTech(tech)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-cyan-400 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
                  }`}
                >
                  {tech === 'all' ? 'All Stacks' : tech}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filtered Showcase Cards or Empty State */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
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

                const normalizedQuery = searchQuery.trim().toLowerCase();

                return (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
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
                      
                      {/* Category indicator */}
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
                      <div className="pt-2 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] font-mono text-slate-400">
                        {project.tags.map((tag, i) => {
                          const isMatched =
                            (normalizedQuery && tag.toLowerCase().includes(normalizedQuery)) ||
                            (selectedTech !== 'all' && tag.toLowerCase() === selectedTech.toLowerCase());
                          return (
                            <React.Fragment key={tag}>
                              <span className={isMatched ? 'text-cyan-300 font-semibold' : 'text-slate-300'}>
                                {tag}
                              </span>
                              {i < project.tags.length - 1 && <span className="text-slate-600">·</span>}
                            </React.Fragment>
                          );
                        })}
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
                          className={`flex-1 py-2 px-3 rounded-xl font-mono text-xs font-semibold border transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${ctaGlow}`}
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
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg mx-auto p-8 rounded-2xl bg-[#090d1c]/80 border border-slate-800 text-center space-y-4 shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center mx-auto">
              <FolderSearch className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base font-bold text-white font-mono">
                No matching projects found
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                No artifacts matched{' '}
                {searchQuery.trim() && (
                  <span className="text-cyan-300 font-mono">"{searchQuery.trim()}"</span>
                )}
                {searchQuery.trim() && selectedTech !== 'all' && ' within '}
                {selectedTech !== 'all' && (
                  <span className="text-purple-300 font-mono">{selectedTech}</span>
                )}
                . Try clearing or adjusting your search filter.
              </p>
            </div>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all glow-cyan cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
};
