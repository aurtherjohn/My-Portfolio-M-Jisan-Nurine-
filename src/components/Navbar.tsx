import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  Sparkles, 
  ExternalLink,
  Code2, 
  Cpu, 
  Award, 
  User, 
  Layers, 
  Github,
  Linkedin,
  Mail,
  BookOpen,
  History,
  Terminal,
  Activity,
  ArrowRight,
  Copy,
  Check,
  Send,
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, BLOG_POSTS, ENGINEERING_UPDATES, TECH_STACK } from '../data/portfolioData';

interface NavItem {
  name: string;
  href: string;
  dropdown?: {
    title: string;
    description: string;
    href: string;
    icon: React.ElementType;
    badge?: string;
    action?: () => void;
  }[];
}

interface NavbarProps {
  onOpenContact: () => void;
  onSelectProject: (projectId: string) => void;
  onSelectBlog?: (blogId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onSelectProject, onSelectBlog }) => {
  // Mega dropdown state (toggled by the 3-line hamburger menu)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeHoverDropdown, setActiveHoverDropdown] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDropdownOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2200);
  };

  const handleNavClick = (href: string) => {
    setDropdownOpen(false);
    setActiveHoverDropdown(null);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Standard top-bar nav items
  const navItems: NavItem[] = [
    {
      name: 'About Me',
      href: '#about',
      dropdown: [
        {
          title: 'Engineering Physics Background',
          description: 'University of Rajshahi research & theory',
          href: '#about',
          icon: User,
          badge: 'Theory'
        },
        {
          title: '4 Core Engineering Pillars',
          description: 'Physics, GPU kernels, agents & distributed infra',
          href: '#about',
          icon: Sparkles
        }
      ]
    },
    {
      name: 'Projects',
      href: '#projects',
      dropdown: [
        {
          title: 'Web Intelligence OS',
          description: 'Autonomous web agent platform & neural parsing',
          href: '#projects',
          icon: Code2,
          badge: 'Agentic',
          action: () => onSelectProject('web-intel-os')
        },
        {
          title: 'AMD Agentic AI System',
          description: 'High-throughput cluster on AMD MI300X & ROCm',
          href: '#projects',
          icon: Cpu,
          badge: 'GPU Cluster',
          action: () => onSelectProject('amd-agentic-system')
        },
        {
          title: 'Embodied AI & Robotics',
          description: 'Vision-Language-Action foundation models',
          href: '#projects',
          icon: Layers,
          badge: 'Robotics',
          action: () => onSelectProject('embodied-robotics')
        }
      ]
    },
    {
      name: 'Blogs & Articles',
      href: '#blogs',
      dropdown: [
        {
          title: 'AMD MI300X PyTorch Acceleration',
          description: 'ROCm 6.2 & HIP porting deep dive',
          href: '#blogs',
          icon: BookOpen,
          badge: 'Hardware',
          action: () => onSelectBlog && onSelectBlog('rocm-mi300x-acceleration')
        },
        {
          title: 'Hamiltonian Robotics VLA Models',
          description: 'Physics-informed continuous 6-DoF control',
          href: '#blogs',
          icon: Activity,
          badge: 'Physics',
          action: () => onSelectBlog && onSelectBlog('hamiltonian-robotics-vla')
        },
        {
          title: 'Web Intelligence OS Architecture',
          description: 'Visual coordinate grounding & browser pools',
          href: '#blogs',
          icon: Code2,
          badge: 'Agents',
          action: () => onSelectBlog && onSelectBlog('web-intel-os-architecture')
        }
      ]
    },
    {
      name: 'Updates',
      href: '#updates',
      dropdown: [
        {
          title: 'Engineering Changelog',
          description: 'Chronological timeline of deployments & benchmarks',
          href: '#updates',
          icon: History,
          badge: 'Log'
        },
        {
          title: 'MI300X Swarm Milestone',
          description: '185 tok/s aggregate consensus throughput',
          href: '#updates',
          icon: Sparkles
        }
      ]
    },
    {
      name: 'Tech Stack',
      href: '#tech-stack',
      dropdown: [
        {
          title: 'Core Languages',
          description: 'Python, Rust, C++ (C++20/HIP), TypeScript',
          href: '#tech-stack',
          icon: Code2
        },
        {
          title: 'AI & Distributed Compute',
          description: 'PyTorch, ROCm, vLLM, LLMs, Kubernetes',
          href: '#tech-stack',
          icon: Cpu
        }
      ]
    },
    {
      name: 'Achievements',
      href: '#achievements',
      dropdown: [
        {
          title: 'AMD AI Academy Certified',
          description: 'PyTorch, HIP porting, and agent optimization',
          href: '#achievements',
          icon: Award,
          badge: 'Certified'
        },
        {
          title: 'Hackathons & Open Source',
          description: 'Active contributor on github.com/QuamLepus',
          href: '#achievements',
          icon: Github
        }
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050811]/90 backdrop-blur-xl border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-3">
          
          {/* Brand Wordmark */}
          <a 
            href="#" 
            className="group flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-shadow">
              <div className="w-full h-full bg-[#050811] rounded-[7px] flex items-center justify-center">
                <span className="font-mono text-xs font-bold text-cyan-400">&gt;_</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="leading-tight group-hover:text-cyan-300 transition-colors">
                M Jisan Nurine
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider hidden sm:inline">
                PHYSICS &times; COMPUTE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links with Automatic Hover Dropdowns */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative py-2"
                onMouseEnter={() => setActiveHoverDropdown(item.name)}
                onMouseLeave={() => setActiveHoverDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-xs xl:text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors rounded-lg hover:bg-slate-800/40 whitespace-nowrap"
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeHoverDropdown === item.name ? 'rotate-180 text-cyan-400' : 'text-slate-500'}`} />
                  )}
                </a>

                {/* Automatic Dropdown Menu on Hover for Desktop Nav */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeHoverDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className="absolute left-0 mt-1 w-80 p-2 rounded-xl bg-[#090d1a] border border-cyan-500/20 shadow-2xl shadow-cyan-950/50 backdrop-blur-2xl z-50"
                      >
                        <div className="space-y-1">
                          {item.dropdown.map((subItem) => {
                            const SubIcon = subItem.icon;
                            return (
                              <a
                                key={subItem.title}
                                href={subItem.href}
                                onClick={(e) => {
                                  if (subItem.action) {
                                    e.preventDefault();
                                    subItem.action();
                                  }
                                  setActiveHoverDropdown(null);
                                }}
                                className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800/60 transition-all border border-transparent hover:border-slate-700/50"
                              >
                                <div className="p-2 rounded-md bg-slate-900 border border-slate-800 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/40 transition-colors shrink-0">
                                  <SubIcon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2">
                                    <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors truncate">
                                      {subItem.title}
                                    </span>
                                    {subItem.badge && (
                                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 shrink-0">
                                        {subItem.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                                    {subItem.description}
                                  </p>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Direct Social Icons (Desktop) */}
            <div className="hidden sm:flex items-center gap-1.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors"
                title="GitHub (https://github.com/QuamLepus)"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-purple-400 hover:bg-slate-800/60 transition-colors"
                title="LinkedIn (https://www.linkedin.com/in/mjisannurine)"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noreferrer"
                className="px-2 py-1 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-800/60 transition-colors font-bold text-xs"
                title="X (https://x.com/mjisannurinen)"
              >
                X
              </a>
            </div>

            {/* Quick Contact Button */}
            <button
              onClick={onOpenContact}
              className="px-3.5 py-1.5 text-xs font-mono font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/40 rounded-lg hover:bg-cyan-500 hover:text-slate-950 transition-all glow-cyan whitespace-nowrap"
            >
              Contact
            </button>

            {/* THE THREE-LINE MENU BUTTON: Triggers the full Animated Mega-Dropdown */}
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`p-2 rounded-xl transition-all duration-200 border flex items-center justify-center ${
                dropdownOpen
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-900/90 text-slate-200 border-slate-700 hover:text-cyan-300 hover:border-cyan-500/50'
              }`}
              aria-label="Toggle navigation operations dropdown"
              title="Open full menu dropdown"
            >
              {dropdownOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Full Animated Dropdown Menu anchored right below navbar */}
      <AnimatePresence>
        {dropdownOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-16 md:top-20 bg-black/80 backdrop-blur-md z-40"
              onClick={() => setDropdownOpen(false)}
            />

            {/* Dropdown Container */}
            <motion.div
              ref={dropdownRef}
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full right-2 left-2 sm:left-auto sm:right-4 sm:w-[480px] md:w-[520px] max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-2xl bg-[#070b17] border border-cyan-500/40 shadow-2xl shadow-cyan-950/80 p-5 sm:p-6 z-50 space-y-6"
            >
              
              {/* Profile Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-cyan-500/50 shadow-md shadow-cyan-500/20 shrink-0">
                    <img
                      src={PERSONAL_INFO.portraitImage}
                      alt={PERSONAL_INFO.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/aistudio/file_000000007cb881fd809389aa5710c930_69a02a72.png';
                      }}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base leading-tight">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400">
                      Software Developer &amp; ML Engineer
                    </p>
                    <p className="text-[10px] font-mono text-slate-400 mt-0.5">
                      RU Engineering Physics (Honours)
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setDropdownOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Operations & Sections Directory */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  <span>Navigation Directory</span>
                  <span>Direct Jump</span>
                </div>

                {/* Primary Category Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  
                  {/* About Me */}
                  <button
                    onClick={() => handleNavClick('#about')}
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all text-left group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <User className="w-4 h-4 text-cyan-400" />
                      <span className="text-[10px] font-mono text-slate-500 group-hover:text-cyan-300">&rarr;</span>
                    </div>
                    <span className="text-xs font-bold text-white block group-hover:text-cyan-300">
                      About Me
                    </span>
                    <span className="text-[10px] text-slate-400 line-clamp-1">
                      Bio &amp; Physics Pillars
                    </span>
                  </button>

                  {/* Projects */}
                  <button
                    onClick={() => handleNavClick('#projects')}
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-800/80 transition-all text-left group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <Cpu className="w-4 h-4 text-purple-400" />
                      <span className="text-[10px] font-mono text-slate-500 group-hover:text-purple-300">&rarr;</span>
                    </div>
                    <span className="text-xs font-bold text-white block group-hover:text-purple-300">
                      Projects
                    </span>
                    <span className="text-[10px] text-slate-400 line-clamp-1">
                      3 High-Impact Artifacts
                    </span>
                  </button>

                  {/* Blogs & Articles */}
                  <button
                    onClick={() => handleNavClick('#blogs')}
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all text-left group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <BookOpen className="w-4 h-4 text-emerald-400" />
                      <span className="text-[10px] font-mono text-slate-500 group-hover:text-emerald-300">&rarr;</span>
                    </div>
                    <span className="text-xs font-bold text-white block group-hover:text-emerald-300">
                      Blogs &amp; Articles
                    </span>
                    <span className="text-[10px] text-slate-400 line-clamp-1">
                      ROCm, Physics &amp; Agents
                    </span>
                  </button>

                  {/* Updates */}
                  <button
                    onClick={() => handleNavClick('#updates')}
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all text-left group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <History className="w-4 h-4 text-cyan-400" />
                      <span className="text-[10px] font-mono text-slate-500 group-hover:text-cyan-300">&rarr;</span>
                    </div>
                    <span className="text-xs font-bold text-white block group-hover:text-cyan-300">
                      Updates
                    </span>
                    <span className="text-[10px] text-slate-400 line-clamp-1">
                      Changelog &amp; Milestones
                    </span>
                  </button>

                  {/* Tech Stack */}
                  <button
                    onClick={() => handleNavClick('#tech-stack')}
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-800/80 transition-all text-left group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <Code2 className="w-4 h-4 text-purple-400" />
                      <span className="text-[10px] font-mono text-slate-500 group-hover:text-purple-300">&rarr;</span>
                    </div>
                    <span className="text-xs font-bold text-white block group-hover:text-purple-300">
                      Tech Stack
                    </span>
                    <span className="text-[10px] text-slate-400 line-clamp-1">
                      Python, Rust, C++, ROCm
                    </span>
                  </button>

                  {/* Achievements */}
                  <button
                    onClick={() => handleNavClick('#achievements')}
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all text-left group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <Award className="w-4 h-4 text-emerald-400" />
                      <span className="text-[10px] font-mono text-slate-500 group-hover:text-emerald-300">&rarr;</span>
                    </div>
                    <span className="text-xs font-bold text-white block group-hover:text-emerald-300">
                      Achievements
                    </span>
                    <span className="text-[10px] text-slate-400 line-clamp-1">
                      AMD Certified &amp; OSS
                    </span>
                  </button>

                </div>

                {/* Direct Project Previews in Dropdown */}
                <div className="pt-2 space-y-2">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                    Featured Project Operations:
                  </span>
                  
                  {PROJECTS.map((proj) => (
                    <button
                      key={proj.id}
                      onClick={() => {
                        setDropdownOpen(false);
                        onSelectProject(proj.id);
                      }}
                      className="w-full p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-800/50 transition-all text-left flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                        <div className="truncate">
                          <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors block truncate">
                            {proj.title}
                          </span>
                          <span className="text-[10px] text-slate-400 block truncate">
                            {proj.subtitle}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30 shrink-0 ml-2">
                        View Spec
                      </span>
                    </button>
                  ))}
                </div>

                {/* Direct Blog Articles in Dropdown */}
                <div className="pt-2 space-y-2">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                    Technical Articles &amp; Research:
                  </span>
                  
                  {BLOG_POSTS.map((blog) => (
                    <button
                      key={blog.id}
                      onClick={() => {
                        setDropdownOpen(false);
                        if (onSelectBlog) {
                          onSelectBlog(blog.id);
                        } else {
                          handleNavClick('#blogs');
                        }
                      }}
                      className="w-full p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/40 hover:bg-slate-800/50 transition-all text-left flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="w-2 h-2 rounded-full bg-purple-400 shrink-0" />
                        <div className="truncate">
                          <span className="text-xs font-semibold text-slate-200 group-hover:text-purple-300 transition-colors block truncate">
                            {blog.title}
                          </span>
                          <span className="text-[10px] text-slate-400 block">
                            {blog.category} · {blog.readTime}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30 shrink-0 ml-2">
                        Read
                      </span>
                    </button>
                  ))}
                </div>

              </div>

              {/* Direct Email & Social Footer */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                {/* One-click email button */}
                <div 
                  onClick={handleCopyEmail}
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono text-slate-200">{PERSONAL_INFO.email}</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1">
                    {emailCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </span>
                </div>

                {/* Social links row */}
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors flex items-center justify-center gap-1.5 text-xs font-mono"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-purple-400 hover:border-purple-500/40 transition-colors flex items-center justify-center gap-1.5 text-xs font-mono"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors flex items-center justify-center gap-1.5 text-xs font-mono font-bold"
                  >
                    <span>X</span>
                  </a>
                </div>

                {/* Contact CTA */}
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    onOpenContact();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl font-mono text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all glow-cyan flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Open Contact Transmission Form</span>
                </button>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </header>
  );
};
