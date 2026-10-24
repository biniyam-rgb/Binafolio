import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Layers,
  Target,
  Compass,
  Maximize2,
  X,
  Zap,
  Sparkles,
  ChevronsLeft
} from 'lucide-react';
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

// Interactive Story Slider matching reference screenshot
const InteractiveStorySlider = ({ isExpanded, setIsExpanded }) => {
  const trackRef = useRef(null);
  const [maxDrag, setMaxDrag] = useState(160);
  const [isDragging, setIsDragging] = useState(false);

  // Dynamically compute travel distance based on track width
  useEffect(() => {
    const updateDimensions = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.offsetWidth;
        const knobWidth = trackWidth * 0.65;
        const availableDrag = trackWidth - knobWidth - 10; // padding on both sides
        setMaxDrag(Math.max(availableDrag, 50));
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handleTrackClick = (e) => {
    if (isDragging) return;
    if (trackRef.current) {
      const rect = trackRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const ratio = clickX / rect.width;
      setIsExpanded(ratio >= 0.5);
    }
  };

  return (
    <div className="mb-6 select-none w-full">
      {/* Top Row: Title with Equalizer Icon & Status Pill */}
      <div className="flex items-center justify-between mb-2.5 px-0.5 flex-wrap gap-2">
        <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#FF7A36]">
          {/* 3-Level Equalizer Slider Icon */}
          <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" className="text-[#FF5A1F] shrink-0">
            <path d="M2 3h2v10H2V3zm1 3a2 2 0 100-4 2 2 0 000 4zm4-3h2v10H7V3zm1 7a2 2 0 100-4 2 2 0 000 4zm4-3h2v10h-2V3zm1 4a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
          <span>INTERACTIVE STORY SLIDER:</span>
        </div>

        {/* Right Status Capsule Pill */}
        <div className="text-[11px] font-mono text-[#F5F0EC] bg-[#160E0A] px-2.5 py-0.5 rounded-full border border-[#FF5A1F]/30 shadow-[0_0_10px_rgba(255,90,31,0.15)] flex items-center gap-1.5">
          {isExpanded ? (
            <>
              <span className="text-xs">📖</span>
              <span>Full Story Mode</span>
            </>
          ) : (
            <>
              <Zap className="h-3 w-3 text-[#FF5A1F] fill-[#FF5A1F]" />
              <span>Quick Mode</span>
            </>
          )}
        </div>
      </div>

      {/* Main Slider Track */}
      <div
        ref={trackRef}
        onClick={handleTrackClick}
        className="relative w-full h-[58px] sm:h-[62px] rounded-full bg-[#0E0806] border-[1.5px] border-[#FF5A1F] p-[5px] cursor-pointer overflow-hidden shadow-[0_0_22px_rgba(255,90,31,0.3),inset_0_2px_8px_rgba(0,0,0,0.9)] flex items-center"
      >
        {/* Background Track Elements (visible when knob slides) */}
        {!isExpanded ? (
          /* When Handle is on the Left: Right side shows ">>> Full Story 📖" */
          <div className="absolute right-3 sm:right-4 left-[65%] h-full flex items-center justify-end gap-2 sm:gap-3 pointer-events-none pr-2 sm:pr-3">
            <span className="text-[#8E7D75] font-mono font-bold tracking-widest text-xs hidden sm:inline">
              &gt; &gt; &gt;
            </span>
            <span className="text-[#F5F0EC] font-mono font-bold text-xs sm:text-sm flex items-center gap-1.5 whitespace-nowrap">
              <span>Full Story</span>
              <span className="text-sm">📖</span>
            </span>
          </div>
        ) : (
          /* When Handle is on the Right: Left side shows "⚡ Quick Mode <<<" */
          <div className="absolute left-3 sm:left-4 right-[65%] h-full flex items-center justify-start gap-2 sm:gap-3 pointer-events-none pl-2 sm:pl-3">
            <span className="text-[#F5F0EC] font-mono font-bold text-xs sm:text-sm flex items-center gap-1.5 whitespace-nowrap">
              <span className="text-[#FF5A1F]">⚡</span>
              <span>Quick Mode</span>
            </span>
            <span className="text-[#8E7D75] font-mono font-bold tracking-widest text-xs hidden sm:inline">
              &lt; &lt; &lt;
            </span>
          </div>
        )}

        {/* The Radiant Orange Glowing Draggable Handle (Wider and substantial) */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: maxDrag }}
          dragElastic={0.12}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={(_, info) => {
            setTimeout(() => setIsDragging(false), 50);
            if (!isExpanded && info.offset.x > maxDrag * 0.35) {
              setIsExpanded(true);
            } else if (isExpanded && info.offset.x < -maxDrag * 0.35) {
              setIsExpanded(false);
            }
          }}
          animate={{
            x: isExpanded ? maxDrag : 0
          }}
          transition={{ type: 'spring', stiffness: 450, damping: 32 }}
          className="relative h-full w-[65%] rounded-full cursor-grab active:cursor-grabbing flex items-center justify-center gap-2.5 px-4 sm:px-6 z-10 select-none shadow-[0_0_25px_rgba(255,90,31,0.75)]"
          style={{
            background: 'linear-gradient(90deg, #E64A19 0%, #FF5A1F 40%, #FF7A36 80%, #FFA066 100%)',
            boxShadow: '0 0 25px rgba(255, 90, 31, 0.75), 0 0 10px rgba(255, 122, 54, 0.9), inset 0 1px 1px rgba(255, 255, 255, 0.5), inset 0 -1px 2px rgba(0, 0, 0, 0.35)',
            border: '1px solid rgba(255, 255, 255, 0.28)'
          }}
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
        >
          {/* 6-dot grip icon (2 columns x 3 dots) */}
          <svg width="13" height="15" viewBox="0 0 12 14" fill="currentColor" className="text-white/95 shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
            <circle cx="3" cy="2.5" r="1.5" />
            <circle cx="9" cy="2.5" r="1.5" />
            <circle cx="3" cy="7" r="1.5" />
            <circle cx="9" cy="7" r="1.5" />
            <circle cx="3" cy="11.5" r="1.5" />
            <circle cx="9" cy="11.5" r="1.5" />
          </svg>

          {/* Monospace button text */}
          <span className="text-white font-mono font-bold tracking-wider text-xs sm:text-[12.5px] whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
            {isExpanded ? '<< SLIDE TO COLLAPSE' : 'SLIDE TO EXPAND >>'}
          </span>
        </motion.div>
      </div>

      {/* Bottom Percentage Row */}
      <div className="flex items-center justify-between mt-1.5 px-2 text-xs font-mono text-[#8E7D75]">
        <span className={!isExpanded ? 'text-[#FF7A36] font-semibold' : ''}>0%</span>
        <span className={isExpanded ? 'text-[#FF7A36] font-semibold' : ''}>Reading 100%</span>
      </div>
    </div>
  );
};

export const About = () => {
  const [isWorkspaceModalOpen, setIsWorkspaceModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Keyboard navigation, custom event & body scroll lock for workspace photo lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsWorkspaceModalOpen(false);
      }
    };
    const handleCloseModals = () => {
      setIsWorkspaceModalOpen(false);
    };

    window.addEventListener('close-modals', handleCloseModals);

    if (isWorkspaceModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('close-modals', handleCloseModals);
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
            className="h-full flex flex-col"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="portfolio-card p-6 sm:p-8 bg-[#140C09]/80 backdrop-blur-md transition-shadow hover:shadow-[0_10px_30px_rgba(255,90,31,0.08)] h-full flex flex-col justify-between"
            >
              <div>
                {/* Header with Title */}
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F0EC] flex items-center gap-2.5">
                    <motion.span
                      animate={{ scale: [1, 1.4, 1], opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="h-2 w-2 rounded-full bg-[#FF5A1F]"
                    />
                    <span>The Engineering Journey</span>
                  </h3>

                  {/* Mode indicator badge */}
                  <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border transition-all ${isExpanded
                    ? 'bg-[#FF5A1F]/15 text-[#FF7A36] border-[#FF5A1F]/40 shadow-[0_0_10px_rgba(255,90,31,0.25)]'
                    : 'bg-[#1C110D] text-[#8E7D75] border-[#3A241C]'
                    }`}>
                    {isExpanded ? '📖 Full Story Mode' : '⚡ Quick TL;DR'}
                  </span>
                </div>

                {/* Interactive Story Slider matching reference screenshot perfectly */}
                <InteractiveStorySlider isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

                {/* Dynamically Rendered Narrative Based On Toggle State */}
                <AnimatePresence mode="wait">
                  {isExpanded ? (
                    /* FULL STORY (Deep Dive) */
                    <motion.div
                      key="full-story"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 text-sm sm:text-base text-[#C4B6AE] leading-relaxed"
                    >
                      <p>
                        I'm <strong className="text-[#F5F0EC]">{personalData.name}</strong>, pursuing my Software Engineering degree at <strong className="text-[#FF7A36]">{personalData.university}</strong>. My academic foundation is grounded in core computer science disciplines—ranging from data structures and algorithmic problem solving to software architecture and database management systems.
                      </p>
                      <p>
                        In practical engineering, I specialize in full-stack web development. On the frontend, I craft dynamic, responsive user experiences using{' '}
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className="inline-block px-1.5 py-0.5 rounded bg-[#61DAFB]/10 text-[#61DAFB] font-semibold border border-[#61DAFB]/20 transition-colors"
                        >
                          React
                        </motion.span>{' '}
                        and modern JavaScript. On the backend, I design secure, scalable architectures and RESTful APIs leveraging{' '}
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
                        , and normalized{' '}
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className="inline-block px-1.5 py-0.5 rounded bg-[#00758F]/15 text-[#38BDF8] font-semibold border border-[#00758F]/25 transition-colors"
                        >
                          MySQL
                        </motion.span>{' '}
                        relational databases.
                      </p>
                      <p>
                        I am driven by a growth mindset and disciplined engineering rigor. Whether analyzing system trade-offs or perfecting interface interactions, my focus is always on engineering dependable, human-centered software that delivers genuine real-world value.
                      </p>
                      <button
                        type="button"
                        onClick={() => setIsExpanded(false)}
                        className="text-xs text-[#8E7D75] hover:text-[#FF7A36] flex items-center gap-1.5 pt-1 font-mono transition-colors group/hint text-left cursor-pointer"
                      >
                        <ChevronsLeft className="h-3 w-3 text-[#FF7A36] group-hover/hint:-translate-x-1 transition-transform" />
                        <span className="underline underline-offset-4 decoration-[#3A241C] group-hover/hint:decoration-[#FF7A36]">
                          Slide handle back or click here to switch to Quick TL;DR
                        </span>
                      </button>
                    </motion.div>
                  ) : (
                    /* CONCISE / SPOTLIGHT VIEW */
                    <motion.div
                      key="compact-story"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3.5 text-sm sm:text-base text-[#C4B6AE] leading-relaxed"
                    >
                      <p>
                        I'm <strong className="text-[#F5F0EC]">{personalData.name}</strong>, studying Software Engineering at <strong className="text-[#FF7A36]">{personalData.university}</strong>.
                      </p>
                      <p>
                        I engineer full-stack web applications pairing interactive frontends in{' '}
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
                      <button
                        type="button"
                        onClick={() => setIsExpanded(true)}
                        className="text-xs text-[#FF7A36] hover:text-[#FFA066] flex items-center gap-1.5 pt-1.5 font-mono transition-colors group/hint text-left cursor-pointer"
                      >
                        <Sparkles className="h-3.5 w-3.5 text-[#FF5A1F] group-hover/hint:rotate-45 transition-transform shrink-0" />
                        <span className="underline underline-offset-4 decoration-[#FF5A1F]/40 group-hover/hint:decoration-[#FF5A1F]">
                          Want more detail? Slide the handle above or click here to expand full story &rarr;
                        </span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Goal Callout Box */}
              <motion.div
                whileHover={{ scale: 1.01, borderColor: 'rgba(255, 90, 31, 0.45)' }}
                transition={{ duration: 0.2 }}
                className="mt-6 rounded-xl border border-[#3A241C] bg-[#1C110D] p-4 sm:p-4.5 relative overflow-hidden group/goal cursor-default transition-all hover:shadow-[0_4px_20px_rgba(255,90,31,0.12)]"
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
            className="space-y-6 flex flex-col justify-between"
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
