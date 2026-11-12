import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Sparkles, 
  Cpu, 
  Atom, 
  Bot 
} from 'lucide-react';
import { BLOG_POSTS } from '../data/portfolioData';
import { BlogPost } from '../types/portfolio';

interface BlogSectionProps {
  onSelectBlog: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectBlog }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'GPU & Hardware', 'Robotics & Physics', 'Autonomous Agents'];

  const filteredPosts = selectedCategory === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  return (
    <section id="blogs" className="relative py-24 border-t border-slate-800/80 overflow-hidden bg-[#040712]">
      {/* Background orbs */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs font-mono text-cyan-400"
            >
              <span>04. Research &amp; Engineering Essays</span>
              <span className="text-slate-600">·</span>
              <span>In-Depth Technical Writings</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans text-wrap-balance"
            >
              Blogs &amp; Technical Deep-Dives
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-slate-400 text-sm max-w-xl"
            >
              First-principles explorations across AMD CDNA3 GPU architectures, Hamiltonian robotics kinematics, and scalable agent topologies.
            </motion.p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#090e1c] border border-slate-800 rounded-xl shrink-0 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat === 'all' ? 'All Articles' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPosts.map((post, idx) => {
            const isPurple = post.accent === 'purple';
            const isGreen = post.accent === 'green';

            const borderGlow = isPurple
              ? 'hover:border-purple-400/80 hover:shadow-purple-950/40'
              : isGreen
              ? 'hover:border-emerald-400/80 hover:shadow-emerald-950/40'
              : 'hover:border-cyan-400/80 hover:shadow-cyan-950/40';

            const badgeStyle = isPurple
              ? 'text-purple-300 bg-purple-950/70 border-purple-500/40'
              : isGreen
              ? 'text-emerald-300 bg-emerald-950/70 border-emerald-500/40'
              : 'text-cyan-300 bg-cyan-950/70 border-cyan-500/40';

            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#080d1c] border border-slate-800/90 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${borderGlow}`}
              >
                <div className="space-y-4">
                  
                  {/* Category & Date */}
                  <div className="flex items-center justify-between gap-2 text-xs font-mono">
                    <span className={`px-2.5 py-0.5 rounded-md border text-[11px] ${badgeStyle}`}>
                      {post.category}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 font-sans">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    {post.tags.slice(0, 3).map((tag, i) => (
                      <span key={tag} className="text-slate-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Read Button & Publication date */}
                <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    {post.date}
                  </span>

                  <button
                    onClick={() => onSelectBlog(post)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
