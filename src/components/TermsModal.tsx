import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldAlert, Lock, FileText, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: 'spring', damping: 25, stiffness: 260 }}
            className="relative w-full max-w-2xl rounded-2xl bg-[#090d1a] border border-cyan-500/35 shadow-2xl shadow-cyan-950/60 z-10 text-slate-200 overflow-hidden"
          >
            {/* Header */}
            <div className="px-6 py-4 bg-[#070b16] border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-mono">
                    Terms, Ownership &amp; Data Privacy Policy
                  </h3>
                  <p className="text-[11px] font-mono text-slate-400">
                    Effective {currentYear} · {PERSONAL_INFO.appVersion}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Close Terms and Privacy modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5 text-xs sm:text-sm text-slate-300 leading-relaxed max-h-[75vh] overflow-y-auto">
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs font-semibold">
                  <FileText className="w-3.5 h-3.5" />
                  <span>1. Intellectual Property &amp; Copyright</span>
                </div>
                <p>
                  &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved. All custom design architecture, source code, visual assets, project case studies, and technical articles published on this portfolio are proprietary unless explicitly released under an open-source license on{' '}
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    github.com/QuamLepus
                  </a>
                  . Unauthorized reproduction, scraping, or redistribution is strictly prohibited.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-purple-300 font-mono text-xs font-semibold">
                  <Lock className="w-3.5 h-3.5" />
                  <span>2. Data Privacy &amp; Zero-Tracking Guarantee</span>
                </div>
                <p>
                  This site does not deploy advertising trackers, behavioral analytics, or third-party profiling cookies. Personal contact information (name, email, inquiry message) submitted through the "Send a Message" form is transmitted directly via Web3Forms solely to respond to your inquiry and is never sold or shared with third parties.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-300 font-mono text-xs font-semibold">
                  <Mail className="w-3.5 h-3.5" />
                  <span>3. Permissions &amp; Inquiries</span>
                </div>
                <p>
                  For licensing permissions, research collaborations, or data removal requests, contact{' '}
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-emerald-300 font-mono hover:underline"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-[#070b16] border-t border-slate-800 flex items-center justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl font-mono text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all glow-cyan"
              >
                Close Policy
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
