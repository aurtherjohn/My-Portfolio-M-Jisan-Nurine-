import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Code2, 
  Network, 
  Brain, 
  Flame, 
  Zap, 
  Sparkles,
  Info
} from 'lucide-react';
import { TECH_STACK } from '../data/portfolioData';
import { TechItem } from '../types/portfolio';

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'languages' | 'ai-compute' | 'systems'>('all');
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return Terminal;
      case 'ShieldCheck': return ShieldCheck;
      case 'Cpu': return Cpu;
      case 'Code2': return Code2;
      case 'Network': return Network;
      case 'Brain': return Brain;
      case 'Flame': return Flame;
      case 'Zap': return Zap;
      default: return Code2;
    }
  };

  const filteredTech = activeCategory === 'all' 
    ? TECH_STACK 
    : TECH_STACK.filter(item => item.category === activeCategory);

  return (
    <section id="tech-stack" className="relative py-24 border-t border-slate-800/80 overflow-hidden bg-[#040711]">
      {/* Background neon blur */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs font-mono text-cyan-400"
            >
              <span>02. Technical Arsenal</span>
              <span className="text-slate-600">·</span>
              <span>Hardware to High-Level Abstractions</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans"
            >
              Core Tech Stack &amp; Compute
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-slate-400 text-sm max-w-xl"
            >
              Mastered technologies spanning hardware-level kernels, systems programming, and production AI orchestration.
            </motion.p>
          </div>

          {/* Interactive Category Filter Tabs (allowed by §1.A for functional filter bars) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 p-1 bg-[#090e1c] border border-slate-800 rounded-xl shrink-0 overflow-x-auto"
          >
            {[
              { id: 'all', label: 'All Stack' },
              { id: 'languages', label: 'Languages' },
              { id: 'ai-compute', label: 'AI & Compute' },
              { id: 'systems', label: 'Systems & Cloud' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === tab.id
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Animated Glowing Grid of 8 Core Icons & Names */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredTech.map((item, index) => {
            const Icon = getIcon(item.icon);
            
            // Accent color styling
            const borderGlow = 
              item.accent === 'cyan' 
                ? 'hover:border-cyan-400/80 hover:shadow-cyan-500/20' 
                : item.accent === 'purple' 
                ? 'hover:border-purple-400/80 hover:shadow-purple-500/20' 
                : 'hover:border-emerald-400/80 hover:shadow-emerald-500/20';

            const iconBg = 
              item.accent === 'cyan' ? 'bg-cyan-950/60 border-cyan-800/70 text-cyan-400' :
              item.accent === 'purple' ? 'bg-purple-950/60 border-purple-800/70 text-purple-400' :
              'bg-emerald-950/60 border-emerald-800/70 text-emerald-400';

            const barColor = 
              item.accent === 'cyan' ? 'bg-cyan-400' :
              item.accent === 'purple' ? 'bg-purple-400' :
              'bg-emerald-400';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                onClick={() => setSelectedTech(selectedTech?.id === item.id ? null : item)}
                className={`group relative p-5 rounded-2xl bg-[#080d1a] border border-slate-800/90 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer ${borderGlow}`}
              >
                {/* Neon Corner Glint */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent rounded-tr-2xl pointer-events-none" />

                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className={`p-3 rounded-xl border ${iconBg} shadow-inner transition-transform group-hover:scale-110 duration-200`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {/* Clean unboxed metadata separator */}
                  <div className="text-right">
                    <span className="text-xs font-mono font-semibold text-slate-300">
                      {item.experience}
                    </span>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      {item.category}
                    </p>
                  </div>
                </div>

                {/* Tech Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>{item.name}</span>
                  <span className="text-xs font-mono font-normal text-slate-400 tabular-nums">
                    {item.proficiency}%
                  </span>
                </h3>

                {/* Micro Proficiency Progress Track */}
                <div className="w-full bg-slate-800/70 h-1.5 rounded-full my-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.08 }}
                    className={`h-full rounded-full ${barColor}`}
                  />
                </div>

                {/* Key Highlight */}
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Hover trigger hint */}
                <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                  <span>Usage &amp; Capabilities</span>
                  <Info className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Selected Tech Inspector Modal / Callout */}
        {selectedTech && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 rounded-2xl bg-[#0a1024] border border-cyan-500/40 shadow-2xl relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                <h4 className="text-base font-bold text-white font-mono">
                  Stack Focus: <span className="text-cyan-300">{selectedTech.name}</span>
                </h4>
              </div>
              <button
                onClick={() => setSelectedTech(null)}
                className="text-xs font-mono text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-900 border border-slate-800 self-start sm:self-auto"
              >
                Close Inspector
              </button>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono text-slate-300">
              <div>
                <span className="text-slate-500 uppercase tracking-wider block mb-1">Architecture Impact:</span>
                <p className="text-slate-200 leading-relaxed font-sans">{selectedTech.description}</p>
              </div>
              <div>
                <span className="text-slate-500 uppercase tracking-wider block mb-1">Key Libraries &amp; Patterns:</span>
                <p className="text-cyan-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                  {selectedTech.highlight}
                </p>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
