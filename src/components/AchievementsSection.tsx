import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Flame, 
  Terminal,
  Trophy
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certification } from '../types/portfolio';

export const AchievementsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="achievements" className="relative py-24 border-t border-slate-800/80 overflow-hidden bg-[#040711]">
      {/* Background orbs */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-xs font-mono text-purple-400"
          >
            <span>04. Recognition &amp; Proof</span>
            <span className="text-slate-600">·</span>
            <span>Industry Credentials &amp; OSS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans text-wrap-balance"
          >
            Achievements &amp; Certifications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Rigorous hardware-level validation from AMD and sustained contributions to the developer community.
          </motion.p>
        </div>

        {/* 2 Main Spotlight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert, index) => {
            const isPurple = cert.accent === 'purple';
            const borderGlow = isPurple
              ? 'hover:border-purple-400/80 hover:shadow-purple-950/50'
              : 'hover:border-cyan-400/80 hover:shadow-cyan-950/50';

            const badgeColor = isPurple
              ? 'text-purple-300 bg-purple-950/60 border-purple-500/40'
              : 'text-cyan-300 bg-cyan-950/60 border-cyan-500/40';

            const iconBg = isPurple
              ? 'bg-purple-950/80 text-purple-400 border-purple-500/40'
              : 'bg-cyan-950/80 text-cyan-400 border-cyan-500/40';

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`group relative p-6 sm:p-8 rounded-2xl bg-[#080d1c] border border-slate-800 shadow-xl backdrop-blur-xl transition-all duration-300 ${borderGlow}`}
              >
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className={`p-3 rounded-xl border ${iconBg} shadow-md`}>
                      {isPurple ? <Cpu className="w-6 h-6" /> : <Trophy className="w-6 h-6" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase ${badgeColor}`}>
                          {cert.issuer}
                        </span>
                        <span className="text-xs font-mono text-slate-500">
                          {cert.date}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                  {cert.description}
                </p>

                {/* Topics / Curriculum Highlights */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                    Verified Competencies:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cert.topics.map((topic, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-mono text-slate-300">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isPurple ? 'text-purple-400' : 'text-cyan-400'}`} />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Credential ID & Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <div className="text-slate-400">
                    <span className="text-slate-600">ID: </span>
                    <span className="text-slate-300">{cert.credentialId}</span>
                  </div>

                  {cert.id === 'hackathon-opensource' ? (
                    <a
                      href="https://github.com/QuamLepus"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                    >
                      <span>github.com/QuamLepus</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified Certificate</span>
                    </span>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Hackathon Highlights Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-12 p-6 rounded-2xl bg-[#090e21] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400 shrink-0">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Open Source &amp; Physics Engineering Repositories
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Explore open-source robotics drivers, ROCm benchmarks, and agent toolkits on GitHub.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/QuamLepus"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all glow-cyan shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>Explore github.com/QuamLepus</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
