import React from 'react';
import { 
  Github, 
  Linkedin, 
  ArrowUp, 
  ShieldAlert, 
  Code2, 
  Terminal,
  Heart
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#03060d] border-t border-slate-900 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-900">
          
          {/* Brand & Focus */}
          <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
            <div className="flex items-center gap-2 text-lg font-bold text-white">
              <span className="font-mono text-cyan-400">&gt;_</span>
              <span>{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-xs font-mono text-slate-400 max-w-sm">
              Software Developer &amp; ML Engineer · B.Sc. (Honours) in Engineering Physics at University of Rajshahi.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-cyan-950/40 transition-all"
              title="GitHub Profile (https://github.com/QuamLepus)"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-purple-400 hover:border-purple-500/50 hover:shadow-purple-950/40 transition-all"
              title="LinkedIn Profile (https://www.linkedin.com/in/mjisannurine)"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:shadow-emerald-950/40 transition-all"
              title="X Profile (https://x.com/mjisannurinen)"
            >
              <span className="font-bold text-base">X</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Unfriendly Conditions / Policy Section (Exactly as specified) */}
        <div className="relative rounded-2xl bg-[#070b16] border border-cyan-500/20 p-5 sm:p-6 shadow-xl backdrop-blur-md">
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shrink-0 mt-0.5">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
                Terms, Ownership &amp; Data Privacy Policy
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {PERSONAL_INFO.policyNotice}
              </p>
            </div>
          </div>
        </div>

        {/* Quiet Sub-footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>
            Built with React, TypeScript, Tailwind CSS &amp; Framer Motion
          </div>
          <div className="flex items-center gap-3">
            <span>Rajshahi, BD</span>
            <span>·</span>
            <span>ROCm &amp; PyTorch Native</span>
            <span>·</span>
            <span>v2024.11</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
