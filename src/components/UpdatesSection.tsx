import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  History, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  ArrowUpRight, 
  Calendar 
} from 'lucide-react';
import { ENGINEERING_UPDATES } from '../data/portfolioData';

export const UpdatesSection: React.FC = () => {
  const [filterTag, setFilterTag] = useState<string>('all');

  const tags = ['all', 'Release', 'Research', 'Certification'];

  const filteredUpdates = filterTag === 'all'
    ? ENGINEERING_UPDATES
    : ENGINEERING_UPDATES.filter(u => u.tag === filterTag);

  return (
    <section id="updates" className="relative py-24 border-t border-slate-800/80 overflow-hidden bg-[#050811]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs font-mono text-purple-400"
            >
              <span>05. Continuous Evolution</span>
              <span className="text-slate-600">·</span>
              <span>Engineering Changelog &amp; Deployments</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans text-wrap-balance"
            >
              Recent Updates &amp; Milestones
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-slate-400 text-sm max-w-xl"
            >
              Chronological log of open-source releases, research breakthroughs, benchmark milestones, and hardware deployments.
            </motion.p>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-1.5 p-1 bg-[#090e1c] border border-slate-800 rounded-xl shrink-0 overflow-x-auto">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setFilterTag(t)}
                className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-all whitespace-nowrap ${
                  filterTag === t
                    ? 'bg-purple-500 text-white font-semibold shadow-md shadow-purple-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {t === 'all' ? 'All Logs' : t}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800/80 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {filteredUpdates.map((item, idx) => {
            const isPurple = item.accent === 'purple';
            const isGreen = item.accent === 'green';

            const dotColor = isPurple
              ? 'bg-purple-400 border-purple-500 shadow-purple-500/50'
              : isGreen
              ? 'bg-emerald-400 border-emerald-500 shadow-emerald-500/50'
              : 'bg-cyan-400 border-cyan-500 shadow-cyan-500/50';

            const badgeBg = isPurple
              ? 'text-purple-300 bg-purple-950/70 border-purple-500/40'
              : isGreen
              ? 'text-emerald-300 bg-emerald-950/70 border-emerald-500/40'
              : 'text-cyan-300 bg-cyan-950/70 border-cyan-500/40';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline node dot */}
                <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-[#050811] ${dotColor} shadow-md group-hover:scale-125 transition-transform`} />

                {/* Content Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#080d1c] border border-slate-800/80 shadow-lg group-hover:border-slate-700 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase ${badgeBg}`}>
                        {item.tag}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.date}</span>
                      </span>
                    </div>

                    {item.metrics && (
                      <div className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-300 flex items-center gap-1.5 self-start sm:self-auto">
                        <span className="text-slate-500">{item.metrics.label}:</span>
                        <span className="font-bold">{item.metrics.value}</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 font-sans">
                    {item.summary}
                  </p>

                  {item.link && (
                    <div className="pt-3 mt-3 border-t border-slate-800/70 flex items-center justify-end">
                      <a
                        href={item.link.url}
                        className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                      >
                        <span>{item.link.text}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
