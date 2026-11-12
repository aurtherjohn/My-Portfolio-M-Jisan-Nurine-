import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Terminal, 
  Play, 
  CheckCircle2, 
  Sparkles, 
  Mail, 
  Github, 
  Cpu, 
  Activity
} from 'lucide-react';
import { PERSONAL_INFO, TYPING_ROLES, TERMINAL_SCRIPTS } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  // Typing animation state
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Terminal state
  const [selectedTab, setSelectedTab] = useState(0);
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionLogs, setExecutionLogs] = useState<string[]>(TERMINAL_SCRIPTS[0].output);

  // Typing effect loop
  useEffect(() => {
    const currentFullText = TYPING_ROLES[roleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  // Tab switch in terminal
  const handleTabChange = (index: number) => {
    setSelectedTab(index);
    setExecutionLogs(TERMINAL_SCRIPTS[index].output);
    setIsExecuting(false);
  };

  const handleSimulateExecution = () => {
    setIsExecuting(true);
    setExecutionLogs([]);
    const fullLogs = TERMINAL_SCRIPTS[selectedTab].output;

    fullLogs.forEach((log, i) => {
      setTimeout(() => {
        setExecutionLogs((prev) => [...prev, log]);
        if (i === fullLogs.length - 1) {
          setIsExecuting(false);
        }
      }, (i + 1) * 260);
    });
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 lg:py-24 overflow-hidden">
      {/* Background glowing blurred orbs and cyber grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Academic & Professional Unboxed Kicker */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-xs font-mono text-cyan-400"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
              <span>Available for High-Impact ML & Systems Engineering</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-400 hidden sm:inline">Rajshahi University</span>
            </motion.div>

            {/* Name with text glow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent text-glow-cyan">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              {/* Dynamic Typing Title */}
              <div className="flex items-center gap-2 h-10 sm:h-12">
                <span className="text-xl sm:text-2xl font-mono font-medium text-slate-200">
                  {displayText}
                </span>
                <span className="w-2.5 h-6 sm:h-7 bg-cyan-400 animate-pulse" />
              </div>
            </motion.div>

            {/* Precise Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans"
            >
              {PERSONAL_INFO.tagline}
            </motion.p>

            {/* Neon Glowing Call-to-Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-3"
            >
              {/* View Projects CTA */}
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 glow-cyan hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Contact Me CTA */}
              <button
                onClick={onOpenContact}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-semibold text-purple-200 bg-purple-950/40 border border-purple-500/50 hover:bg-purple-900/40 hover:border-purple-400 transition-all duration-200 glow-purple hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </button>

              {/* GitHub Link */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-mono text-xs text-slate-300 bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:text-white transition-all"
              >
                <Github className="w-4 h-4 text-slate-400" />
                <span>@QuamLepus</span>
              </a>
            </motion.div>

            {/* Quick Metrics Bar below Hero */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-xl text-left"
            >
              <div>
                <p className="text-2xl font-bold font-mono text-cyan-400 tabular-nums">3–4 Yrs</p>
                <p className="text-xs text-slate-400 mt-0.5">Scalable AI Systems</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-purple-400 tabular-nums">MI300X</p>
                <p className="text-xs text-slate-400 mt-0.5">ROCm & HIP Porting</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">4-Year</p>
                <p className="text-xs text-slate-400 mt-0.5">B.Sc. Eng Physics</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Subtle Animated Interactive Coding Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-[#090d19]/90 border border-slate-700/60 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl overflow-hidden glow-cyan group hover:border-cyan-500/50 transition-colors">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d1424] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>jisan@cluster:~/workspace</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-cyan-300">
                    ROCm 6.2
                  </span>
                </div>
              </div>

              {/* Terminal Script Tabs */}
              <div className="flex items-center border-b border-slate-800 bg-[#070b14] overflow-x-auto">
                {TERMINAL_SCRIPTS.map((script, idx) => (
                  <button
                    key={script.name}
                    onClick={() => handleTabChange(idx)}
                    className={`px-3.5 py-2 text-xs font-mono whitespace-nowrap transition-colors border-r border-slate-800 flex items-center gap-1.5 ${
                      selectedTab === idx
                        ? 'bg-[#0d1424] text-cyan-300 border-b-2 border-b-cyan-400 font-semibold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                    }`}
                  >
                    <span className="text-slate-500">#</span>
                    <span>{script.name}</span>
                  </button>
                ))}
              </div>

              {/* Terminal Content Body */}
              <div className="p-4 font-mono text-xs space-y-3 min-h-[260px] max-h-[340px] overflow-y-auto">
                {/* Command prompt */}
                <div className="flex items-start gap-2 text-slate-300">
                  <span className="text-cyan-400 select-none">$</span>
                  <span className="text-emerald-400 font-semibold break-all">
                    {TERMINAL_SCRIPTS[selectedTab].command}
                  </span>
                </div>

                {/* Execution status indicator */}
                <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                  {executionLogs.map((log, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-start gap-2 text-slate-300"
                    >
                      <span className="text-slate-600 select-none">&gt;</span>
                      <span className={log.includes('OPTIMAL') || log.includes('Ready') || log.includes('OK') ? 'text-cyan-300' : 'text-slate-300'}>
                        {log}
                      </span>
                    </motion.div>
                  ))}

                  {isExecuting && (
                    <div className="flex items-center gap-2 text-cyan-400 pt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                      <span className="text-slate-400">Processing hardware queue...</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Terminal Footer Controls */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0a0f1d] border-t border-slate-800">
                <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-slate-400">
                    <Cpu className="w-3.5 h-3.5 text-purple-400" />
                    <span>MI300X 192GB</span>
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    <span>1.1ms RPC</span>
                  </span>
                </div>

                <button
                  onClick={handleSimulateExecution}
                  disabled={isExecuting}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-md bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 transition-all disabled:opacity-50"
                  title="Run simulated terminal execution"
                >
                  <Play className="w-3 h-3" />
                  <span>{isExecuting ? 'Running...' : 'Run Kernel'}</span>
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
