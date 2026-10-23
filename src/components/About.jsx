import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Layers, Target, Compass, Maximize2, X } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const pillars = [
  {
    title: 'Academics',
    desc: 'Software Engineering degree at Wollo University.',
    icon: BookOpen,
    bgClass: 'bg-[#FF5A1F]/10',
    textClass: 'text-[#FF5A1F]'
  },
  {
    title: 'Full-Stack',
    desc: 'React frontends paired with Laravel & MySQL.',
    icon: Layers,
    bgClass: 'bg-[#FF7A36]/10',
    textClass: 'text-[#FF7A36]'
  },
  {
    title: 'Growth',
    desc: 'Driven to build impactful, human-centered software.',
    icon: Compass,
    bgClass: 'bg-[#FF5A1F]/10',
    textClass: 'text-[#FF5A1F]'
  }
];

export const About = () => {
  const [isWorkspaceModalOpen, setIsWorkspaceModalOpen] = useState(false);

  // Keyboard navigation & body scroll lock for workspace photo lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsWorkspaceModalOpen(false);
      }
    };
    if (isWorkspaceModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isWorkspaceModalOpen]);

  return (
    <section id="about" className="relative py-12 sm:py-16 overflow-hidden">
      {/* Dynamic Ambient Background Glow Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/4 -left-28 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 90, 31, 0.22) 0%, rgba(125, 41, 14, 0.08) 50%, transparent 70%)',
          filter: 'blur(80px)',
          transform: 'translateZ(0)'
        }}
      />
      <motion.div
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.12, 0.2, 0.12]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        className="absolute bottom-10 -right-24 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 122, 54, 0.18) 0%, rgba(125, 41, 14, 0.05) 50%, transparent 70%)',
          filter: 'blur(75px)',
          transform: 'translateZ(0)'
        }}
      />

      <div className="container-custom relative z-10">

        {/* Section Header with Fade & Slide Up */}
        <motion.div 
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F0EC]">
            A Little <span className="text-gradient-orange">About Me</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#C4B6AE] max-w-xl">
            Software engineering student focused on building clean, full-stack web applications.
          </p>
        </motion.div>

        {/* Asymmetric Content Layout */}
        <div className="about-grid-layout">
          
          {/* LEFT COLUMN: Narrative & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="portfolio-card p-6 sm:p-8 bg-[#140C09]/80 backdrop-blur-md transition-shadow hover:shadow-[0_10px_30px_rgba(255,90,31,0.08)]"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F0EC] mb-4 flex items-center gap-2.5">
                <motion.span 
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="h-2 w-2 rounded-full bg-[#FF5A1F]" 
                />
                <span>The Engineering Journey</span>
              </h3>
              
              <div className="space-y-3.5 text-sm sm:text-base text-[#C4B6AE] leading-relaxed">
                <p>
                  I'm <strong className="text-[#F5F0EC]">{personalData.name}</strong>, studying Software Engineering at <strong className="text-[#FF7A36]">{personalData.university}</strong>.
                </p>
                <p>
                  I build full-stack web applications combining interactive interfaces in{' '}
                  <motion.span 
                    whileHover={{ scale: 1.05 }} 
                    className="inline-block px-1.5 py-0.5 rounded bg-[#61DAFB]/10 text-[#61DAFB] font-semibold border border-[#61DAFB]/20 transition-colors"
                  >
                    React
                  </motion.span>{' '}
                  with structured, secure backends using{' '}
                  <motion.span 
                    whileHover={{ scale: 1.05 }} 
                    className="inline-block px-1.5 py-0.5 rounded bg-[#FF2D20]/10 text-[#FF5A1F] font-semibold border border-[#FF2D20]/20 transition-colors"
                  >
                    Laravel
                  </motion.span>
                  ,{' '}
                  <motion.span 
                    whileHover={{ scale: 1.05 }} 
                    className="inline-block px-1.5 py-0.5 rounded bg-[#777BB4]/10 text-[#A5B4FC] font-semibold border border-[#777BB4]/20 transition-colors"
                  >
                    PHP
                  </motion.span>
                  , and{' '}
                  <motion.span 
                    whileHover={{ scale: 1.05 }} 
                    className="inline-block px-1.5 py-0.5 rounded bg-[#00758F]/15 text-[#38BDF8] font-semibold border border-[#00758F]/25 transition-colors"
                  >
                    MySQL
                  </motion.span>
                  .
                </p>
              </div>

              {/* Goal Callout Box */}
              <motion.div 
                whileHover={{ scale: 1.01, borderColor: 'rgba(255, 90, 31, 0.45)' }}
                transition={{ duration: 0.2 }}
                className="mt-5 rounded-xl border border-[#3A241C] bg-[#1C110D] p-4 sm:p-4.5 relative overflow-hidden group/goal cursor-default transition-all hover:shadow-[0_4px_20px_rgba(255,90,31,0.12)]"
              >
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#FF5A1F] to-[#7D290E] group-hover/goal:w-1.5 transition-all" />
                <div className="flex items-start gap-3">
                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="shrink-0 mt-0.5 text-[#FF5A1F]"
                  >
                    <Target className="h-5 w-5" />
                  </motion.div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF7A36] font-semibold flex items-center gap-2">
                      <span>Primary Career Goal</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F] animate-pulse" />
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-[#F5F0EC] leading-relaxed">
                      Engineer reliable, high-impact full-stack applications that solve real-world problems.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Workspace Setup & Key Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="space-y-6"
          >
            
            {/* Workspace Illustration with Glow and Click-to-Zoom */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsWorkspaceModalOpen(true)}
              className="portfolio-card overflow-hidden group border-[#3A241C] hover:border-[#FF5A1F]/50 relative cursor-pointer transition-all duration-300 hover:shadow-[0_12px_32px_rgba(255,90,31,0.15)]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsWorkspaceModalOpen(true);
                }
              }}
              aria-label="Click to view workspace setup in full size"
            >
              <div className="aspect-video w-full overflow-hidden bg-[#140C09] relative">
                <img
                  src="/assets/workspace.jpg"
                  alt="Software Developer Workspace Setup"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140C09] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Top right zoom indicator badge */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0A0706]/90 backdrop-blur-md px-3 py-1 font-mono text-[11px] text-[#FF9E66] border border-[#FF5A1F]/40 shadow-lg">
                    <Maximize2 className="h-3 w-3" />
                    <span>Click to Enlarge</span>
                  </span>
                </div>

                {/* Bottom overlay pills */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0A0706]/85 backdrop-blur-md px-3 py-1 font-mono text-[#FF7A36] border border-[#3A241C] group-hover:border-[#FF5A1F]/40 transition-colors">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5A1F] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5A1F]"></span>
                    </span>
                    <span>Workspace // Focus &amp; Coding</span>
                  </span>
                  <span className="text-[#C4B6AE] font-mono text-[11px] hidden sm:inline bg-[#0A0706]/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#3A241C]">
                    Kombolcha Campus
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Three Pillar Cards with Staggered Entrance and Micro-interactions */}
            <div className="about-pillars-grid">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + idx * 0.1 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="portfolio-card p-4 bg-[#140C09]/60 hover:bg-[#1C110D] border-[#3A241C] hover:border-[#FF5A1F]/45 transition-all duration-300 group relative overflow-hidden hover:shadow-[0_8px_25px_rgba(255,90,31,0.1)]"
                  >
                    {/* Animated bottom gradient accent bar on hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5A1F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${pillar.bgClass} ${pillar.textClass} mb-3 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,90,31,0.35)] transition-all duration-300`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-sm font-bold text-[#F5F0EC] group-hover:text-[#FF7A36] transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="mt-1 text-xs text-[#8E7D75] group-hover:text-[#C4B6AE] transition-colors leading-relaxed">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>

        </div>

      </div>

      {/* Lightbox Modal for Workspace Photo */}
      <AnimatePresence>
        {isWorkspaceModalOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            style={{
              backgroundColor: 'rgba(5, 3, 2, 0.88)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)'
            }}
            onClick={() => setIsWorkspaceModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#140C09] rounded-2xl border border-[#3A241C] shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(255,90,31,0.2)] overflow-hidden"
            >
              {/* Header bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#3A241C] bg-[#0A0706]/95">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5A1F]" />
                  <span className="font-mono text-xs text-[#F5F0EC] font-semibold tracking-wide">
                    Workspace &amp; Focus Setup
                  </span>
                </div>
                <button
                  onClick={() => setIsWorkspaceModalOpen(false)}
                  className="p-1.5 rounded-lg text-[#8E7D75] hover:text-[#F5F0EC] hover:bg-[#1C110D] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Image Preview */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#0A0706]">
                <img
                  src="/assets/workspace.jpg"
                  alt="Software Developer Workspace Setup"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Caption */}
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0D0806]">
                <div>
                  <h4 className="text-sm font-bold text-[#F5F0EC]">
                    Deep Work &amp; Engineering Rigor
                  </h4>
                  <p className="text-xs text-[#8E7D75] mt-0.5">
                    Dedicated workstation for developing responsive interfaces and secure Laravel backends.
                  </p>
                </div>
                <span className="text-xs font-mono text-[#FF7A36] px-3 py-1 rounded-full bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 self-start sm:self-auto">
                  Kombolcha Campus
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
