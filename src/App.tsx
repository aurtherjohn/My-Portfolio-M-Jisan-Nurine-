import React, { useState, Suspense, lazy } from 'react';
import { motion, type Variants } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TechStackSection } from './components/TechStackSection';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { PROJECTS, BLOG_POSTS } from './data/portfolioData';
import { Project, BlogPost } from './types/portfolio';

// Code-split major below-the-fold sections with React.lazy
const ProjectsSection = lazy(() =>
  import('./components/ProjectsSection').then(m => ({ default: m.ProjectsSection }))
);
const BlogSection = lazy(() =>
  import('./components/BlogSection').then(m => ({ default: m.BlogSection }))
);
const UpdatesSection = lazy(() =>
  import('./components/UpdatesSection').then(m => ({ default: m.UpdatesSection }))
);
const AchievementsSection = lazy(() =>
  import('./components/AchievementsSection').then(m => ({ default: m.AchievementsSection }))
);
const ContactSection = lazy(() =>
  import('./components/ContactSection').then(m => ({ default: m.ContactSection }))
);
const ProjectModal = lazy(() =>
  import('./components/ProjectModal').then(m => ({ default: m.ProjectModal }))
);
const BlogModal = lazy(() =>
  import('./components/BlogModal').then(m => ({ default: m.BlogModal }))
);

// High-tech minimal loading skeleton for code-split components
const SectionLoader: React.FC<{ label?: string }> = ({ label = 'Loading section...' }) => (
  <div className="w-full py-24 flex flex-col items-center justify-center space-y-3 bg-[#050811]/50">
    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg">
      <div className="w-4 h-4 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
    </div>
    <span className="text-xs font-mono text-slate-500 tracking-wider">
      {label}
    </span>
  </div>
);

// Framer Motion scroll-reveal animation configuration
const sectionScrollVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: 'easeOut'
    }
  }
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProjectById = (projectId: string) => {
    const proj = PROJECTS.find(p => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  const handleSelectBlogById = (blogId: string) => {
    const blog = BLOG_POSTS.find(b => b.id === blogId);
    if (blog) {
      setSelectedBlog(blog);
    }
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Ultra-luxurious, non-interfering top scroll progress bar */}
      <ScrollProgressBar />

      {/* Sticky Top Glassmorphism Navbar (with 3-line mobile hamburger menu & hover dropdowns) */}
      <Navbar 
        onOpenContact={handleOpenContact}
        onSelectProject={handleSelectProjectById}
        onSelectBlog={handleSelectBlogById}
      />

      {/* Main Content Sections with Framer Motion scroll reveals */}
      <main className="space-y-0">
        
        {/* 1. Hero Section (Immediate render for fast first paint) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionScrollVariants}
        >
          <HeroSection onOpenContact={handleOpenContact} />
        </motion.div>

        {/* 2. About Me Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionScrollVariants}
        >
          <AboutSection />
        </motion.div>

        {/* 3. Tech Stack Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionScrollVariants}
        >
          <TechStackSection />
        </motion.div>

        {/* 4. Featured Projects Section (Code-split with Suspense) */}
        <Suspense fallback={<SectionLoader label="Initializing Projects Module..." />}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={sectionScrollVariants}
          >
            <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
          </motion.div>
        </Suspense>

        {/* 5. Blogs & Deep-Dives Section (Code-split with Suspense) */}
        <Suspense fallback={<SectionLoader label="Loading Research & Articles..." />}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={sectionScrollVariants}
          >
            <BlogSection onSelectBlog={(blog) => setSelectedBlog(blog)} />
          </motion.div>
        </Suspense>

        {/* 6. Recent Updates & Engineering Milestones Section (Code-split with Suspense) */}
        <Suspense fallback={<SectionLoader label="Loading Engineering Changelog..." />}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={sectionScrollVariants}
          >
            <UpdatesSection />
          </motion.div>
        </Suspense>

        {/* 7. Achievements & Certifications Section (Code-split with Suspense) */}
        <Suspense fallback={<SectionLoader label="Loading Credentials & OSS..." />}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={sectionScrollVariants}
          >
            <AchievementsSection />
          </motion.div>
        </Suspense>

        {/* 8. Contact Section (Code-split with Suspense) */}
        <Suspense fallback={<SectionLoader label="Connecting Secure Dispatch..." />}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={sectionScrollVariants}
          >
            <ContactSection />
          </motion.div>
        </Suspense>
      </main>

      {/* 9. Social Links & Footer with Policy Section */}
      <Footer />

      {/* Code-Split Modals */}
      <Suspense fallback={null}>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </Suspense>

      <Suspense fallback={null}>
        {selectedBlog && (
          <BlogModal
            post={selectedBlog}
            onClose={() => setSelectedBlog(null)}
          />
        )}
      </Suspense>
    </div>
  );
}
