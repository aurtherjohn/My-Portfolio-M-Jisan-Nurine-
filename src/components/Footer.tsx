import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  ArrowUp,
  ShieldAlert,
  MapPin,
  Zap,
  Rocket
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TermsModal } from './TermsModal';

export const Footer: React.FC = () => {
  const [termsOpen, setTermsOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative bg-[#03060d] border-t border-slate-900 pt-16 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Main Footer Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-900">

            {/* Brand & Focus */}
            <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
              <div className="flex items-center gap-2 text-lg font-bold text-white">
                <span className="font-mono text-cyan-400">&gt;_</span>
                <span>{PERSONAL_INFO.name}</span>
              </div>
              <p className="text-xs font-mono text-slate-400 max-w-md leading-relaxed">
                {PERSONAL_INFO.title} · {PERSONAL_INFO.degree}, {PERSONAL_INFO.institution}.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                title={`GitHub Profile (${PERSONAL_INFO.github})`}
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 hover:text-purple-400 hover:border-purple-500/50 transition-all"
                title={`LinkedIn Profile (${PERSONAL_INFO.linkedin})`}
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                title={`X Profile (${PERSONAL_INFO.twitter})`}
              >
                <span className="font-bold text-sm leading-none">X</span>
                <span className="hidden sm:inline">(Twitter)</span>
              </a>

              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
                title="Back to top"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Concise Policy Section with Modal Trigger */}
          <div className="relative rounded-2xl bg-[#070b16] border border-cyan-500/20 p-5 sm:p-6 shadow-xl backdrop-blur-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shrink-0 mt-0.5">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
                    Terms, Ownership &amp; Data Privacy Policy
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    &copy; {currentYear} {PERSONAL_INFO.name}. {PERSONAL_INFO.policySummary}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setTermsOpen(true)}
                className="self-start sm:self-center shrink-0 px-3.5 py-2 rounded-xl bg-cyan-950/50 border border-cyan-500/40 text-xs font-mono font-semibold text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 transition-all whitespace-nowrap cursor-pointer"
              >
                Terms &amp; Privacy
              </button>
            </div>
          </div>

          {/* Quiet Sub-footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
            <div>
              Built with React, TypeScript, Tailwind CSS &amp; Framer Motion
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" />
                <span>Rajshahi, BD</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1">
                <Zap className="w-3 h-3 text-purple-400" />
                <span>ROCm &amp; PyTorch Native</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1 text-slate-400">
                <Rocket className="w-3 h-3 text-emerald-400" />
                <span>{PERSONAL_INFO.appVersion}</span>
              </span>
            </div>
          </div>

        </div>
      </footer>

      {/* Terms & Privacy Modal */}
      <TermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  );
};
