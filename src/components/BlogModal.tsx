import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Calendar, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Code, 
  BookOpen, 
  Share2, 
  ExternalLink 
} from 'lucide-react';
import { BlogPost } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  const accentBorder = 
    post.accent === 'cyan' ? 'border-cyan-500/40 shadow-cyan-950/60' :
    post.accent === 'purple' ? 'border-purple-500/40 shadow-purple-950/60' :
    'border-emerald-500/40 shadow-emerald-950/60';

  const accentTag = 
    post.accent === 'cyan' ? 'text-cyan-300 bg-cyan-950/80 border-cyan-500/30' :
    post.accent === 'purple' ? 'text-purple-300 bg-purple-950/80 border-purple-500/30' :
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

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#090d1a] border ${accentBorder} shadow-2xl z-10 text-slate-200`}
        >
          {/* Header Bar */}
          <div className="sticky top-0 bg-[#090d1a]/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between z-20">
            <div className="flex items-center gap-2">
              <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-md border ${accentTag}`}>
                {post.category}
              </span>
              <span className="text-xs font-mono text-slate-500 hidden sm:inline">
                by {PERSONAL_INFO.name}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Article Body */}
          <article className="p-6 sm:p-8 space-y-6">
            
            {/* Title & Metadata */}
            <div className="space-y-3 pb-4 border-b border-slate-800">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-sans">
                {post.title}
              </h2>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{post.date}</span>
                </span>
                <span className="text-slate-600">·</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  <span>{post.readTime}</span>
                </span>
                <span className="text-slate-600">·</span>
                <span>University of Rajshahi Research</span>
              </div>
            </div>

            {/* Introduction */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              {post.content.introduction}
            </p>

            {/* Key Takeaways Box */}
            <div className="p-5 rounded-xl bg-[#0d1428] border border-cyan-500/20 space-y-2.5">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Key Engineering Takeaways</span>
              </h3>
              <ul className="space-y-2">
                {post.content.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Detailed Sections */}
            <div className="space-y-6 pt-2">
              {post.content.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-lg font-bold text-white font-sans">
                    {sec.heading}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {sec.body}
                  </p>

                  {sec.codeBlock && (
                    <div className="space-y-1 pt-1">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 px-1">
                        <span className="flex items-center gap-1">
                          <Code className="w-3 h-3 text-cyan-400" />
                          <span>Code snippet</span>
                        </span>
                        <span className="uppercase">{sec.codeBlock.language}</span>
                      </div>
                      <pre className="p-4 rounded-xl bg-[#040711] border border-slate-800 text-slate-300 font-mono text-xs overflow-x-auto leading-relaxed">
                        <code>{sec.codeBlock.code}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Conclusion &amp; Future Work
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>

            {/* Tags */}
            <div className="pt-4 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-slate-500">Tags:</span>
              {post.tags.map((tag, i) => (
                <span key={tag} className="text-slate-300">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Footer Close & Author */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src={PERSONAL_INFO.portraitImage}
                  alt={PERSONAL_INFO.name}
                  className="w-8 h-8 rounded-full object-cover border border-cyan-500/40"
                />
                <div className="text-xs font-mono">
                  <span className="text-white block font-semibold">{PERSONAL_INFO.name}</span>
                  <span className="text-slate-500 text-[10px]">Software &amp; ML Engineer</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-mono bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold transition-all glow-cyan"
              >
                Done Reading
              </button>
            </div>

          </article>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
