import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Mail, X, Code2, MapPin } from 'lucide-react';
import { ReactIcon, LaravelIcon } from './TechIcons';

// =========================================================================
// 3D Isometric Mini-Cube Component for Glowing Orbit Path
// =========================================================================
const IsometricCube = ({ size = 22, className = "", delay = 0 }) => (
  <motion.div
    animate={{ 
      y: [-5, 5, -5],
      rotate: [0, 4, 0]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
      delay
    }}
    className={`pointer-events-none drop-shadow-[0_0_12px_rgba(255,90,31,0.85)] ${className}`}
  >
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Top face (bright peach/amber highlight) */}
      <polygon points="12,2 22,7.5 12,13 2,7.5" fill="#FFC299" opacity="0.95" />
      {/* Left face (vibrant neon orange) */}
      <polygon points="2,7.5 12,13 12,23 2,17.5" fill="#FF5A1F" />
      {/* Right face (deep luminous amber/burnt orange) */}
      <polygon points="12,13 22,7.5 22,17.5 12,23" fill="#C84411" />
      {/* Specular edge lines */}
      <line x1="12" y1="2" x2="12" y2="13" stroke="#FFF0E6" strokeWidth="0.8" opacity="0.9" />
      <line x1="2" y1="7.5" x2="12" y2="13" stroke="#FFF0E6" strokeWidth="0.6" opacity="0.6" />
      <line x1="22" y1="7.5" x2="12" y2="13" stroke="#FFF0E6" strokeWidth="0.6" opacity="0.6" />
    </svg>
  </motion.div>
);

// =========================================================================
// High-Contrast MySQL Dolphin Icon Component
// =========================================================================
const MySqlDolphinIcon = ({ className = "" }) => (
  <div className={`flex flex-col items-center justify-center select-none ${className}`}>
    <svg width="34" height="24" viewBox="0 0 100 85" fill="none" className="drop-shadow-[0_0_8px_rgba(0,117,143,0.7)]">
      <path
        d="M85 45C85 45 68 25 45 28C22 31 15 50 15 50C15 50 25 42 42 42C59 42 75 55 85 45Z"
        fill="#00D8FF"
      />
      <path
        d="M85 45C92 38 98 25 98 25C98 25 90 32 82 36C74 40 50 36 35 48C20 60 12 75 12 75C12 75 22 62 38 58C54 54 75 58 85 45Z"
        fill="#008EA8"
      />
      <path
        d="M38 58C30 52 22 52 18 53C12 55 6 62 6 62C6 62 12 58 20 57C26 56 32 57 38 58Z"
        fill="#FF9E3B"
      />
      <circle cx="78" cy="38" r="2.8" fill="#FFFFFF" />
    </svg>
    <span className="text-[10px] font-black tracking-tight text-[#00D8FF] font-sans -mt-0.5 leading-none drop-shadow-[0_0_6px_rgba(0,216,255,0.6)]">
      MySQL<span className="text-[#FF9E3B]">.</span>
    </span>
  </div>
);

export const Hero = () => {
  const [activeTab, setActiveTab] = useState('app'); // 'app' | 'api'
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <section id="home" className="hero-wrapper relative min-h-screen flex flex-col justify-between pt-32 sm:pt-36 pb-12 overflow-hidden">
      <div className="container-custom relative z-10 w-full my-auto">
        
        {/* =========================================================================
            SIDE-BY-SIDE ONE ROW LAYOUT: Image 1 Copy & Image 2 IDE
            ========================================================================= */}
        <div className="hero-row-layout">
          
          {/* =========================================================================
              LEFT COLUMN: High-Impact Copy & CTAs (Image 1)
              ========================================================================= */}
          <div className="hero-col-left flex flex-col items-start text-left z-20">
            
            {/* 1. Luminous orange-amber outlined badge with Biniyam's avatar photo icon */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5A1F] shadow-[0_0_12px_#FF5A1F,0_0_22px_#FF7A36] shrink-0 animate-pulse" />
              <div className="hero-avatar-badge cursor-pointer">
                {/* Biniyam Portrait Icon */}
                <div className="hero-avatar-wrapper">
                  <img 
                    src="/assets/character.jpg" 
                    alt="Biniyam Gebrie" 
                    className="hero-avatar-img" 
                  />
                  {/* Live Active Status Indicator Beacon */}
                  <span className="hero-avatar-status">
                    <span className="hero-avatar-status-ping" />
                  </span>
                </div>
                <span>Hey, I'm <strong className="font-extrabold text-white tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Biniyam</strong></span>
                <span className="text-base select-none inline-block animate-wave origin-[70%_70%]">👋</span>
              </div>
            </motion.div>

            {/* 2. Headline: Software \n Developer| */}
            <div className="mb-4">
              <h1 className="text-5xl sm:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] font-black tracking-tight leading-[1.04] text-white">
                <span className="text-white drop-shadow-[0_0_28px_rgba(255,255,255,0.35)]">
                  Software
                </span>
                <br />
                <span 
                  style={{
                    background: 'linear-gradient(135deg, #FF7A36 0%, #FF5A1F 50%, #FFA066 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: '#FF5A1F',
                    display: 'inline-block',
                    filter: 'drop-shadow(0 0 35px rgba(255, 90, 31, 0.65))'
                  }}
                >
                  Developer
                </span>
                <span className="inline-block ml-1.5 text-[#FF5A1F] font-light drop-shadow-[0_0_14px_#FF5A1F] animate-blink select-none">
                  |
                </span>
              </h1>
            </div>

            {/* 3. Subtitle: 🎓 Software Engineering Student & Aspiring Full-Stack Developer */}
            <div className="flex items-center gap-2 text-sm sm:text-base lg:text-lg font-semibold text-[#FF9E66] drop-shadow-[0_0_14px_rgba(255,122,54,0.55)] mb-6">
              <span className="text-xl shrink-0 select-none">🎓</span>
              <span className="tracking-tight">Software Engineering Student &amp; Aspiring Full-Stack Developer</span>
            </div>

            {/* 4. Bio Paragraph with glowing highlighted tech stacks */}
            <p className="text-base sm:text-lg text-[#C8D3DE] leading-relaxed mb-8 max-w-xl font-normal">
              I build modern, scalable web applications with{' '}
              <span className="font-bold text-[#61DAFB] drop-shadow-[0_0_10px_rgba(97,218,251,0.65)] px-1.5 py-0.5 rounded bg-[#61DAFB]/10 border border-[#61DAFB]/30">
                React
              </span>
              ,{' '}
              <span className="font-bold text-[#FF2D20] drop-shadow-[0_0_10px_rgba(255,45,32,0.65)] px-1.5 py-0.5 rounded bg-[#FF2D20]/10 border border-[#FF2D20]/30">
                Laravel
              </span>
              , and{' '}
              <span className="font-bold text-[#38BDF8] drop-shadow-[0_0_10px_rgba(56,189,248,0.65)] px-1.5 py-0.5 rounded bg-[#00758F]/15 border border-[#00758F]/40">
                MySQL
              </span>
              . Studying at{' '}
              <span className="font-bold text-[#FFAA40] drop-shadow-[0_0_12px_rgba(255,170,64,0.65)] px-1.5 py-0.5 rounded bg-[#FFAA40]/10 border border-[#FFAA40]/30">
                Wollo University
              </span>
              , turning ideas into elegant, and high-impact digital solutions.
            </p>

            {/* 5. Modern Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="hero-cta-group"
            >
              {/* Primary: Radiant orange & amber gradient pill with specular arrow bubble */}
              <a href="#projects" className="hero-btn-primary">
                <span>Explore My Work</span>
                <span className="hero-btn-arrow-bubble">
                  <ArrowUpRight size={14} className="text-white" />
                </span>
              </a>

              {/* Secondary: Ultra-sleek dark glassmorphic capsule */}
              <a href="#contact" className="hero-btn-secondary">
                <Mail size={16} className="hero-btn-mail-icon" />
                <span>Let's Connect</span>
              </a>
            </motion.div>

            {/* 6. Modern Floating Glass Status Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="hero-meta-bar"
            >
              {/* Campus Location */}
              <div className="hero-meta-item">
                <MapPin size={14} className="hero-meta-icon" />
                <span className="hero-meta-label">Campus:</span>
                <span className="hero-meta-value">Wollo University, Kombolcha</span>
              </div>

              {/* Glowing Amber Divider */}
              <div className="hero-meta-divider" />

              {/* Full-Stack Focus with Live Radar Beacon */}
              <div className="hero-meta-badge">
                <span className="hero-meta-beacon">
                  <span className="hero-meta-beacon-ping" />
                  <span className="hero-meta-beacon-core" />
                </span>
                <span>Full-Stack Focus</span>
              </div>
            </motion.div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: 3D-Tilted IDE & Glowing Orbit (Image 2)
              ========================================================================= */}
          <div className="hero-col-right relative flex items-center justify-center pt-8 lg:pt-0 [perspective:1200px]">
            <div 
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >

              {/* Dual-Tone Ambient Backlight Glow behind Editor (Orange & Luminous Teal/Cyan) with Delayed Blossom & Reactive Bloom */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: isCardHovered ? 1 : 0.85, scale: isCardHovered ? 1.14 : 1 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="pointer-events-none"
                style={{
                  position: 'absolute',
                  inset: '-2.5rem',
                  borderRadius: '40px',
                  zIndex: -10,
                  background: 'radial-gradient(circle at 35% 35%, rgba(255, 90, 31, 0.48) 0%, rgba(255, 122, 54, 0.18) 45%, transparent 70%)',
                  filter: 'blur(60px)',
                  transform: 'translateZ(0)'
                }}
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: isCardHovered ? 0.95 : 0.75, scale: isCardHovered ? 1.12 : 1 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="pointer-events-none"
                style={{
                  position: 'absolute',
                  inset: '-3rem',
                  borderRadius: '50px',
                  zIndex: -10,
                  background: 'radial-gradient(circle at 80% 25%, rgba(0, 216, 255, 0.35) 0%, transparent 55%), radial-gradient(circle at 20% 85%, rgba(0, 216, 255, 0.22) 0%, transparent 50%)',
                  filter: 'blur(55px)',
                  transform: 'translateZ(0)'
                }}
              />

              {/* ================= ELLIPTICAL ORBITAL RING SVG WITH DELAYED ENTRANCE & HOVER REACTION ================= */}
              <motion.svg 
                initial={{ opacity: 0, scale: 0.75, rotate: -35 }}
                animate={{ 
                  opacity: 1, 
                  scale: isCardHovered ? 1.04 : 1, 
                  rotate: isCardHovered ? -12 : -15 
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-none select-none drop-shadow-[0_0_25px_rgba(255,90,31,0.65)]"
                style={{
                  position: 'absolute',
                  width: '640px',
                  height: '640px',
                  zIndex: -10
                }}
                viewBox="0 0 740 740"
              >
                <defs>
                  <linearGradient id="orbitGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00D8FF" stopOpacity="0.75" />
                    <stop offset="25%" stopColor="#FF7A36" stopOpacity="0.9" />
                    <stop offset="60%" stopColor="#FF5A1F" stopOpacity="0.95" />
                    <stop offset="85%" stopColor="#FFAA40" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#00D8FF" stopOpacity="0.65" />
                  </linearGradient>
                  <filter id="neonHaloFilter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Main Glowing Orbital Ring */}
                <ellipse 
                  cx="370" cy="370" rx="340" ry="250" 
                  fill="none" 
                  stroke="url(#orbitGlowGrad)" 
                  strokeWidth="2.5" 
                  filter="url(#neonHaloFilter)"
                />

                {/* Subtle Concentric Dashed Ring for Visual Depth */}
                <ellipse 
                  cx="370" cy="370" rx="315" ry="230" 
                  fill="none" 
                  stroke="#FF7A36" 
                  strokeWidth="1.2" 
                  strokeDasharray="6 8"
                  opacity="0.45"
                />
              </motion.svg>

              {/* ================= 3D ISOMETRIC AMBER/ORANGE CUBES (EXPLICIT ORBIT PERIMETER) ================= */}
              {/* Positioned strictly outside along the orbital perimeter so they NEVER overlap code lines */}
              
              {/* Cube 1: Below terminal left */}
              <div style={{ position: 'absolute', bottom: '-30px', left: '10%', zIndex: 10, pointerEvents: 'none' }}>
                <IsometricCube size={22} delay={0} />
              </div>

              {/* Cube 2: Below terminal center */}
              <div style={{ position: 'absolute', bottom: '-46px', left: '38%', zIndex: 10, pointerEvents: 'none' }}>
                <IsometricCube size={24} delay={0.8} />
              </div>

              {/* Cube 3: Below terminal far right */}
              <div style={{ position: 'absolute', bottom: '-32px', right: '24%', zIndex: 10, pointerEvents: 'none' }}>
                <IsometricCube size={20} delay={1.4} />
              </div>

              {/* Cube 4: Mid-left flank orbit */}
              <div style={{ position: 'absolute', bottom: '24%', left: '-32px', zIndex: 10, pointerEvents: 'none' }}>
                <IsometricCube size={22} delay={2.1} />
              </div>

              {/* Cube 5: Top-left outer orbit */}
              <div style={{ position: 'absolute', top: '-26px', left: '14%', zIndex: 10, pointerEvents: 'none' }}>
                <IsometricCube size={18} delay={1.1} />
              </div>

              {/* ================= 4 HIGH-CONTRAST 3D GLASS TECH BADGES (WITH DELAYED ENTRANCE) ================= */}
              {/* Positioned strictly on outer perimeter with explicit coordinates: NEVER in the center */}

              {/* 1. React: Intensely glowing cyan atom on the TOP-RIGHT */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 6, y: [-4, 5, -4] }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.8 }, 
                  scale: { duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] },
                  rotate: { duration: 0.6, delay: 0.8 },
                  y: { repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1.4 }
                }}
                style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-16px',
                  zIndex: 30
                }}
                className="p-2.5 sm:p-3 rounded-2xl bg-[#03111b]/92 border-2 border-[#00D8FF] shadow-[0_0_25px_rgba(0,216,255,0.6),inset_0_0_12px_rgba(0,216,255,0.25)] backdrop-blur-xl hover:rotate-0 hover:scale-115 transition-all duration-300 cursor-pointer"
                title="React"
              >
                <ReactIcon size={28} className="text-[#00D8FF] drop-shadow-[0_0_12px_#00D8FF] animate-spin-slow" />
              </motion.div>

              {/* 2. Laravel: Brightly glowing red 3D wireframe cube on the MIDDLE-LEFT */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: 20 }}
                animate={{ opacity: 1, scale: 1, rotate: -8, y: [5, -5, 5] }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.95 }, 
                  scale: { duration: 0.6, delay: 0.95, ease: [0.16, 1, 0.3, 1] },
                  rotate: { duration: 0.6, delay: 0.95 },
                  y: { repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1.55 }
                }}
                style={{
                  position: 'absolute',
                  top: '38%',
                  left: '-32px',
                  zIndex: 30
                }}
                className="p-2.5 sm:p-3 rounded-2xl bg-[#190705]/92 border-2 border-[#FF2D20] shadow-[0_0_25px_rgba(255,45,32,0.6),inset_0_0_12px_rgba(255,45,32,0.25)] backdrop-blur-xl hover:rotate-0 hover:scale-115 transition-all duration-300 cursor-pointer"
                title="Laravel"
              >
                <LaravelIcon size={26} className="drop-shadow-[0_0_12px_#FF2D20]" />
              </motion.div>

              {/* 3. JavaScript: JS yellow badge on the FAR RIGHT */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 12, y: [-5, 5, -5] }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 1.1 }, 
                  scale: { duration: 0.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] },
                  rotate: { duration: 0.6, delay: 1.1 },
                  y: { repeat: Infinity, duration: 4.8, ease: 'easeInOut', delay: 1.7 }
                }}
                style={{
                  position: 'absolute',
                  top: '56%',
                  right: '-28px',
                  zIndex: 30
                }}
                className="p-2 sm:p-2.5 rounded-2xl bg-[#191605]/92 border-2 border-[#F7DF1E] shadow-[0_0_25px_rgba(247,223,30,0.55),inset_0_0_12px_rgba(247,223,30,0.25)] backdrop-blur-xl hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer"
                title="JavaScript"
              >
                <div className="h-7 w-7 rounded-lg bg-[#F7DF1E] flex items-center justify-end pr-1 pb-0.5 shadow-md">
                  <span className="font-black text-xs text-black font-mono tracking-tighter leading-none">JS</span>
                </div>
              </motion.div>

              {/* 4. MySQL: Brightly glowing blue dolphin badge on the LOWER-RIGHT */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 6, y: [5, -5, 5] }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 1.25 }, 
                  scale: { duration: 0.6, delay: 1.25, ease: [0.16, 1, 0.3, 1] },
                  rotate: { duration: 0.6, delay: 1.25 },
                  y: { repeat: Infinity, duration: 5.2, ease: 'easeInOut', delay: 1.85 }
                }}
                style={{
                  position: 'absolute',
                  bottom: '-30px',
                  right: '8px',
                  zIndex: 30
                }}
                className="px-3 py-1.5 sm:py-2 rounded-2xl bg-[#04121c]/92 border-2 border-[#00D8FF] shadow-[0_0_25px_rgba(0,216,255,0.6),inset_0_0_12px_rgba(0,216,255,0.25)] backdrop-blur-xl hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer"
                title="MySQL"
              >
                <MySqlDolphinIcon />
              </motion.div>

              {/* ================= THE 3D-ANGLED ISOMETRIC GLASS TERMINAL (WITH DELAYED ENTRANCE & 3D HOVER ANIMATION) ================= */}
              <motion.div
                initial={{ opacity: 0, y: 55, scale: 0.9, rotateY: -22, rotateX: 18, rotateZ: 3 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateY: -12, rotateX: 8, rotateZ: 1 }}
                whileHover={{
                  y: -14,
                  scale: 1.04,
                  rotateY: -2,
                  rotateX: 4,
                  rotateZ: 0,
                  transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] }
                }}
                onMouseEnter={() => setIsCardHovered(true)}
                onMouseLeave={() => setIsCardHovered(false)}
                transition={{ 
                  duration: 1.1, 
                  delay: 0.48, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="code-terminal-card relative z-20 w-full rounded-2xl overflow-hidden bg-[#070a10]/95 backdrop-blur-2xl border-r border-b border-white/[0.08]"
                style={{
                  width: '100%',
                  maxWidth: '480px',
                  transformStyle: 'preserve-3d',
                  borderTop: '2.5px solid #FF7A36',
                  borderLeft: '2.5px solid #FF7A36',
                  boxShadow: `
                    -12px -12px 45px -4px rgba(255, 90, 31, 0.65),
                    -4px -4px 18px 0px rgba(255, 122, 54, 0.85),
                    0 35px 75px -15px rgba(0, 0, 0, 0.95),
                    0 0 35px rgba(0, 216, 255, 0.15)
                  `,
                }}
              >
                {/* Diagonal Specular Sheen (Sweeps smoothly across glass on hover) */}
                <div className="code-terminal-sheen" />

                {/* Luminous Orange-Amber Laser Beams fiercely bordering left and top edges */}
                <div className="code-laser-top absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#FFE8D6] via-[#FF5A1F] to-transparent shadow-[0_0_18px_#FF5A1F,0_0_30px_#FF7A36] pointer-events-none z-30 transition-all duration-300" />
                <div className="code-laser-left absolute top-0 left-0 bottom-0 w-[2.5px] bg-gradient-to-b from-[#FFE8D6] via-[#FF5A1F] to-transparent shadow-[0_0_18px_#FF5A1F,0_0_30px_#FF7A36] pointer-events-none z-30 transition-all duration-300" />

                {/* Intense Vertex Halo at top-left corner */}
                <div className="code-corner-halo absolute -top-1.5 -left-1.5 w-6 h-6 rounded-full bg-[#FFE8D6] blur-[3.5px] shadow-[0_0_25px_#FF5A1F,0_0_45px_#FF7A36] pointer-events-none z-30 opacity-90 animate-pulse transition-all duration-300" />

                {/* IDE Header: macOS Window Controls & Tabs */}
                <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-[#05070c] border-b border-white/[0.08] select-none relative z-20">
                  
                  {/* Left: Red, Yellow, Green Window Dots with Hover Glyphs */}
                  <div className="flex items-center gap-2">
                    <span className="code-window-dot bg-[#FF5F56] shadow-[0_0_8px_#FF5F56] border border-[#FF5F56]/60 cursor-pointer">
                      <span className="code-window-dot-icon">×</span>
                    </span>
                    <span className="code-window-dot bg-[#FFBD2E] shadow-[0_0_8px_#FFBD2E] border border-[#FFBD2E]/60 cursor-pointer">
                      <span className="code-window-dot-icon">–</span>
                    </span>
                    <span className="code-window-dot bg-[#27C93F] shadow-[0_0_8px_#27C93F] border border-[#27C93F]/60 cursor-pointer">
                      <span className="code-window-dot-icon">+</span>
                    </span>
                  </div>

                  {/* Center Tabs: App.jsx (Active) & api.php (Inactive) */}
                  <div className="flex items-center gap-2">
                    {/* Active Tab: App.jsx with glowing cyan React atom icon */}
                    <button
                      onClick={() => setActiveTab('app')}
                      className={`flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                        activeTab === 'app'
                          ? 'bg-[#00D8FF]/15 text-white border border-[#00D8FF]/60 shadow-[0_0_16px_rgba(0,216,255,0.4)] font-bold'
                          : 'text-[#64748B] hover:text-[#94A3B8] hover:bg-white/[0.04]'
                      }`}
                    >
                      <ReactIcon size={14} className="code-react-atom text-[#00D8FF] drop-shadow-[0_0_8px_#00D8FF] animate-spin-slow" />
                      <span className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">App.jsx</span>
                      <X className="h-3 w-3 ml-0.5 text-[#00D8FF]/70 hover:text-white" />
                    </button>

                    {/* Inactive Tab: api.php with brightly lit PHP logo */}
                    <button
                      onClick={() => setActiveTab('api')}
                      className={`flex items-center gap-2 px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                        activeTab === 'api'
                          ? 'bg-[#FF5A1F]/15 text-[#FF8A3D] border border-[#FF5A1F]/50 shadow-[0_0_14px_rgba(255,90,31,0.3)] font-bold'
                          : 'text-[#64748B] hover:text-[#94A3B8] hover:bg-white/[0.04]'
                      }`}
                    >
                      <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-[#777BB4]/40 text-[#C7D2FE] border border-[#777BB4]/60 shadow-[0_0_8px_rgba(119,123,180,0.5)] font-sans">
                        PHP
                      </span>
                      <span className="text-[#94A3B8] group-hover:text-white">api.php</span>
                    </button>
                  </div>

                  {/* Right: Code Icon */}
                  <div className="flex items-center text-[#FF7A36] drop-shadow-[0_0_6px_rgba(255,90,31,0.5)]">
                    <Code2 className="h-4 w-4" />
                  </div>
                </div>

                {/* IDE Code Editor Body with Spacious Layout & Clear Gray Line Numbers 1-7 */}
                <div className="p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-[2.1] overflow-x-auto min-h-[220px] flex flex-col justify-center relative z-20">
                  <AnimatePresence mode="wait">
                    {activeTab === 'app' ? (
                      <motion.div
                        key="tab-app-syntax"
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 6 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-0.5 text-left font-mono"
                      >
                        {/* Line 1 */}
                        <div className="flex items-baseline">
                          <span className="w-8 shrink-0 select-none text-[#64748B] font-mono text-left font-semibold">1</span>
                          <span className="whitespace-pre pl-2">
                            <span className="text-[#38BDF8] font-semibold">const</span>{' '}
                            <span className="text-white font-medium">developer</span>{' '}
                            <span className="text-white">=</span>{' '}
                            <span className="text-[#FFB37C]">&#123;</span>
                          </span>
                        </div>

                        {/* Line 2 */}
                        <div className="flex items-baseline">
                          <span className="w-8 shrink-0 select-none text-[#64748B] font-mono text-left font-semibold">2</span>
                          <span className="whitespace-pre pl-5">
                            <span className="text-[#38BDF8]">name</span>
                            <span className="text-white">: </span>
                            <span className="text-[#FB923C] font-semibold drop-shadow-[0_0_8px_rgba(251,146,60,0.4)]">'Biniyam'</span>
                            <span className="text-white">,</span>
                          </span>
                        </div>

                        {/* Line 3 */}
                        <div className="flex items-baseline">
                          <span className="w-8 shrink-0 select-none text-[#64748B] font-mono text-left font-semibold">3</span>
                          <span className="whitespace-pre pl-5">
                            <span className="text-[#38BDF8]">role</span>
                            <span className="text-white">: </span>
                            <span className="text-[#FB923C] font-semibold drop-shadow-[0_0_8px_rgba(251,146,60,0.4)]">'Full-Stack Developer'</span>
                            <span className="text-white">,</span>
                          </span>
                        </div>

                        {/* Line 4 - Active Highlighted Line on Hover */}
                        <div className="flex items-baseline code-line-active px-1.5 -mx-1.5 rounded transition-colors duration-200">
                          <span className="w-8 shrink-0 select-none text-[#64748B] font-mono text-left font-semibold">4</span>
                          <span className="whitespace-pre pl-5">
                            <span className="text-[#38BDF8]">stack</span>
                            <span className="text-white">: [</span>
                            <span className="text-[#FF9E66] font-semibold drop-shadow-[0_0_8px_rgba(255,158,102,0.35)]">'React'</span>
                            <span className="text-white">, </span>
                            <span className="text-[#FF7A36] font-semibold drop-shadow-[0_0_8px_rgba(255,122,54,0.35)]">'Laravel'</span>
                            <span className="text-white">, </span>
                            <span className="text-[#FFAA40] font-semibold drop-shadow-[0_0_8px_rgba(255,170,64,0.35)]">'MySQL'</span>
                            <span className="text-white">],</span>
                          </span>
                        </div>

                        {/* Line 5 */}
                        <div className="flex items-baseline">
                          <span className="w-8 shrink-0 select-none text-[#64748B] font-mono text-left font-semibold">5</span>
                          <span className="whitespace-pre pl-5">
                            <span className="text-[#38BDF8]">passion</span>
                            <span className="text-white">: </span>
                            <span className="text-[#FB923C] font-semibold drop-shadow-[0_0_8px_rgba(251,146,60,0.35)]">'Building modern digital</span>
                          </span>
                        </div>

                        {/* Line 6 */}
                        <div className="flex items-baseline">
                          <span className="w-8 shrink-0 select-none text-[#64748B] font-mono text-left font-semibold">6</span>
                          <span className="whitespace-pre pl-5">
                            <span className="text-[#FB923C] font-semibold drop-shadow-[0_0_8px_rgba(251,146,60,0.35)]">experiences'</span>
                            <span className="text-white">,</span>
                          </span>
                        </div>

                        {/* Line 7 with Pulsing Cyan Terminal Cursor */}
                        <div className="flex items-baseline">
                          <span className="w-8 shrink-0 select-none text-[#64748B] font-mono text-left font-semibold">7</span>
                          <span className="whitespace-pre pl-2">
                            <span className="text-[#FFB37C] font-medium">&#125;;</span>
                            <span className="code-terminal-cursor" />
                          </span>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="tab-api-syntax"
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 6 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-0.5 text-left font-mono"
                      >
                        {/* Line 1 */}
                        <div className="flex items-baseline">
                          <span className="w-8 shrink-0 select-none text-[#64748B] font-mono text-left font-semibold">1</span>
                          <span className="whitespace-pre pl-2">
                            <span className="text-[#FF7A36] font-semibold">Route</span>
                            <span className="text-white">::</span>
                            <span className="text-[#38BDF8]">get</span>
                            <span className="text-white">(</span>
                            <span className="text-[#FB923C] font-semibold">'/developer'</span>
                            <span className="text-white">, </span>
                            <span className="text-[#C792EA]">function</span>
                            <span className="text-white"> () &#123;</span>
                          </span>
                        </div>

                        {/* Line 2 */}
                        <div className="flex items-baseline">
                          <span className="w-8 shrink-0 select-none text-[#64748B] font-mono text-left font-semibold">2</span>
                          <span className="whitespace-pre pl-5">
                            <span className="text-[#C792EA]">return</span>{' '}
                            <span className="text-[#38BDF8]">response</span>
                            <span className="text-white">()</span>
                            <span className="text-white">-&gt;</span>
                            <span className="text-[#38BDF8]">json</span>
                            <span className="text-white">([</span>
                          </span>
                        </div>

                        {/* Line 3 */}
                        <div className="flex items-baseline">
                          <span className="w-8 shrink-0 select-none text-[#64748B] font-mono text-left font-semibold">3</span>
                          <span className="whitespace-pre pl-8">
                            <span className="text-[#FB923C] font-semibold">'status'</span>{' '}
                            <span className="text-white">=&gt;</span>{' '}
                            <span className="text-[#FF5A1F] font-semibold">'ready_to_build'</span>
                            <span className="text-white">,</span>
                          </span>
                        </div>

                        {/* Line 4 - Active Highlighted Line on Hover */}
                        <div className="flex items-baseline code-line-active px-1.5 -mx-1.5 rounded transition-colors duration-200">
                          <span className="w-8 shrink-0 select-none text-[#64748B] font-mono text-left font-semibold">4</span>
                          <span className="whitespace-pre pl-8">
                            <span className="text-[#FB923C] font-semibold">'focus'</span>{' '}
                            <span className="text-white">=&gt;</span>{' '}
                            <span className="text-[#38BDF8] font-semibold">'Scalable Full-Stack Web'</span>
                          </span>
                        </div>

                        {/* Line 5 */}
                        <div className="flex items-baseline">
                          <span className="w-8 shrink-0 select-none text-[#64748B] font-mono text-left font-semibold">5</span>
                          <span className="whitespace-pre pl-5">
                            <span className="text-white">]);</span>
                          </span>
                        </div>

                        {/* Line 6 */}
                        <div className="flex items-baseline">
                          <span className="w-8 shrink-0 select-none text-[#64748B] font-mono text-left font-semibold">6</span>
                          <span className="whitespace-pre pl-2">
                            <span className="text-white">&#125;);</span>
                          </span>
                        </div>

                        {/* Line 7 with Pulsing Cyan Terminal Cursor */}
                        <div className="flex items-baseline">
                          <span className="w-8 shrink-0 select-none text-[#64748B] font-mono text-left font-semibold">7</span>
                          <span className="whitespace-pre pl-2">
                            <span className="text-[#64748B]">// Ready for production</span>
                            <span className="code-terminal-cursor" />
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Glowing Horizontal Laser Halo below Terminal */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[110%] max-w-[520px] h-[2px] bg-gradient-to-r from-transparent via-[#FF5A1F] to-transparent shadow-[0_0_24px_#FF5A1F] pointer-events-none" />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[65%] h-[4px] bg-gradient-to-r from-transparent via-[#FFAA66] to-transparent blur-[2px] pointer-events-none" />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[25%] h-[6px] bg-gradient-to-r from-transparent via-white to-transparent blur-[2.5px] pointer-events-none" />

            </div>
          </div>

        </div>

        {/* =========================================================================
            5. FOOTER: Scroll Indicator
            ========================================================================= */}
        <div className="mt-14 sm:mt-18 flex flex-col items-center justify-center text-center select-none z-20">
          <a
            href="#about"
            className="group flex flex-col items-center gap-3 transition-colors cursor-pointer"
            aria-label="Scroll to explore"
          >
            {/* Horizontal Track Lines + SCROLL TO EXPLORE */}
            <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-[#FF9E66]">
              <div className="h-[1.5px] w-14 sm:w-24 bg-gradient-to-r from-transparent via-[#FF5A1F]/60 to-[#FF7A36]" />
              <span className="font-bold text-[11px] tracking-[0.28em] text-[#FF9E66] drop-shadow-[0_0_10px_rgba(255,122,54,0.6)] group-hover:text-white transition-colors">
                SCROLL TO EXPLORE
              </span>
              <div className="h-[1.5px] w-14 sm:w-24 bg-gradient-to-l from-transparent via-[#FF5A1F]/60 to-[#FF7A36]" />
            </div>

            {/* Highly Visible Animated Scroll Mouse / Capsule Icon */}
            <div className="flex h-9 w-5.5 items-start justify-center rounded-full border-2 border-[#FF7A36] p-1.5 bg-[#07090e]/90 shadow-[0_0_16px_rgba(255,90,31,0.5),inset_0_0_8px_rgba(255,90,31,0.25)] group-hover:border-white group-hover:shadow-[0_0_22px_rgba(255,122,54,0.8)] transition-all">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                className="h-2 w-1.5 rounded-full bg-gradient-to-b from-white to-[#FF7A36] shadow-[0_0_10px_#FF5A1F]"
              />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
