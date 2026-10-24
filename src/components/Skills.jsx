import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import { TechIconMap } from './TechIcons';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend & DB' },
  { id: 'tools', label: 'Tools & Workflow' }
];

// Exact Tech Theme System matching reference screenshot
const skillThemeMap = {
  react: {
    border: 'rgba(0, 216, 255, 0.45)',
    hoverBorder: 'rgba(0, 216, 255, 0.9)',
    glow: 'rgba(0, 216, 255, 0.18)',
    iconBg: 'rgba(0, 216, 255, 0.1)',
    iconBorder: 'rgba(0, 216, 255, 0.45)',
    iconGlow: '0 0 20px rgba(0, 216, 255, 0.35)',
    tagBg: 'rgba(0, 216, 255, 0.08)',
    tagBorder: 'rgba(0, 216, 255, 0.35)',
    tagText: '#61DAFB',
    subheadColor: '#00D8FF',
    badgeText: 'Frontend Core'
  },
  laravel: {
    border: 'rgba(255, 90, 31, 0.5)',
    hoverBorder: 'rgba(255, 90, 31, 0.95)',
    glow: 'rgba(255, 90, 31, 0.22)',
    iconBg: 'rgba(255, 90, 31, 0.1)',
    iconBorder: 'rgba(255, 90, 31, 0.48)',
    iconGlow: '0 0 20px rgba(255, 90, 31, 0.4)',
    tagBg: 'rgba(255, 90, 31, 0.08)',
    tagBorder: 'rgba(255, 90, 31, 0.35)',
    tagText: '#FF7A36',
    subheadColor: '#FF7A36',
    badgeText: 'Backend Core'
  },
  php: {
    border: 'rgba(119, 123, 180, 0.4)',
    hoverBorder: 'rgba(119, 123, 180, 0.85)',
    glow: 'rgba(119, 123, 180, 0.18)',
    iconBg: 'rgba(119, 123, 180, 0.12)',
    iconBorder: 'rgba(119, 123, 180, 0.42)',
    iconGlow: '0 0 20px rgba(119, 123, 180, 0.35)',
    tagBg: 'rgba(217, 119, 6, 0.08)',
    tagBorder: 'rgba(217, 119, 6, 0.4)',
    tagText: '#F59E0B',
    subheadColor: '#F59E0B',
    badgeText: 'Server Language'
  },
  mysql: {
    border: 'rgba(56, 189, 248, 0.45)',
    hoverBorder: 'rgba(56, 189, 248, 0.9)',
    glow: 'rgba(0, 117, 143, 0.22)',
    iconBg: 'rgba(0, 117, 143, 0.12)',
    iconBorder: 'rgba(0, 117, 143, 0.45)',
    iconGlow: '0 0 20px rgba(56, 189, 248, 0.35)',
    tagBg: 'rgba(56, 189, 248, 0.08)',
    tagBorder: 'rgba(56, 189, 248, 0.35)',
    tagText: '#38BDF8',
    subheadColor: '#38BDF8',
    badgeText: 'Database'
  },
  javascript: {
    border: 'rgba(247, 223, 30, 0.4)',
    hoverBorder: 'rgba(247, 223, 30, 0.85)',
    glow: 'rgba(247, 223, 30, 0.18)',
    iconBg: 'rgba(247, 223, 30, 0.1)',
    iconBorder: 'rgba(247, 223, 30, 0.4)',
    iconGlow: '0 0 18px rgba(247, 223, 30, 0.3)',
    tagBg: 'rgba(247, 223, 30, 0.08)',
    tagBorder: 'rgba(247, 223, 30, 0.35)',
    tagText: '#F7DF1E',
    subheadColor: '#F7DF1E',
    badgeText: 'Core Language'
  },
  html: {
    border: 'rgba(227, 79, 38, 0.4)',
    hoverBorder: 'rgba(227, 79, 38, 0.85)',
    glow: 'rgba(227, 79, 38, 0.18)',
    iconBg: 'rgba(227, 79, 38, 0.1)',
    iconBorder: 'rgba(227, 79, 38, 0.4)',
    iconGlow: '0 0 18px rgba(227, 79, 38, 0.3)',
    tagBg: 'rgba(227, 79, 38, 0.08)',
    tagBorder: 'rgba(227, 79, 38, 0.35)',
    tagText: '#FF7A36',
    subheadColor: '#FF7A36',
    badgeText: 'Semantic Web'
  },
  css: {
    border: 'rgba(21, 114, 182, 0.4)',
    hoverBorder: 'rgba(21, 114, 182, 0.85)',
    glow: 'rgba(21, 114, 182, 0.18)',
    iconBg: 'rgba(21, 114, 182, 0.1)',
    iconBorder: 'rgba(21, 114, 182, 0.4)',
    iconGlow: '0 0 18px rgba(21, 114, 182, 0.3)',
    tagBg: 'rgba(21, 114, 182, 0.08)',
    tagBorder: 'rgba(21, 114, 182, 0.35)',
    tagText: '#38BDF8',
    subheadColor: '#38BDF8',
    badgeText: 'Responsive UI'
  },
  git: {
    border: 'rgba(240, 80, 50, 0.4)',
    hoverBorder: 'rgba(240, 80, 50, 0.85)',
    glow: 'rgba(240, 80, 50, 0.18)',
    iconBg: 'rgba(240, 80, 50, 0.1)',
    iconBorder: 'rgba(240, 80, 50, 0.4)',
    iconGlow: '0 0 18px rgba(240, 80, 50, 0.3)',
    tagBg: 'rgba(240, 80, 50, 0.08)',
    tagBorder: 'rgba(240, 80, 50, 0.35)',
    tagText: '#F05032',
    subheadColor: '#F05032',
    badgeText: 'Workflow & VCS'
  }
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = skillsData.filter((skill) => {
    if (activeCategory === 'all') return true;
    return skill.category === activeCategory;
  });

  return (
    <section id="skills" className="relative py-14 sm:py-20 bg-[#0E0907]/60">
      <div className="container-custom relative z-10">

        {/* Section Header matching reference screenshot */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          
          {/* Main Title with Bracket Accents: [ '_ Technologies & Tools >'_ ] */}
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white flex items-center justify-center flex-wrap gap-x-2">
            <span className="text-[#8E7D75] font-mono font-normal text-xl sm:text-2xl select-none">[ '_</span>
            <span>Technologies &amp; <span className="text-gradient-orange">Tools</span></span>
            <span className="text-[#8E7D75] font-mono font-normal text-xl sm:text-2xl select-none">&gt;'_ ]</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 text-sm sm:text-base text-[#C4B6AE] max-w-2xl leading-relaxed">
            Core technologies I study and leverage to develop modern, responsive web applications.
          </p>

          {/* Category Filter Tabs Capsule */}
          <div className="mt-7 inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full bg-[#120B08]/90 p-1.5 border border-[#3A241C] shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#C4B6AE] hover:text-[#F5F0EC]'
                  }`}
                >
                  <span className="relative z-10">{cat.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(255,90,31,0.6),inset_0_1px_1px_rgba(255,255,255,0.4)]"
                      style={{
                        background: 'linear-gradient(90deg, #E64A19 0%, #FF5A1F 50%, #FF7A36 100%)'
                      }}
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid matching reference image */}
        <motion.div 
          layout
          className="skills-grid-layout"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const IconComponent = TechIconMap[skill.id];
              const theme = skillThemeMap[skill.id] || {
                border: 'rgba(255, 90, 31, 0.4)',
                hoverBorder: 'rgba(255, 90, 31, 0.8)',
                glow: 'rgba(255, 90, 31, 0.15)',
                iconBg: 'rgba(255, 90, 31, 0.1)',
                iconBorder: 'rgba(255, 90, 31, 0.35)',
                iconGlow: '0 0 15px rgba(255, 90, 31, 0.25)',
                tagBg: 'rgba(255, 90, 31, 0.08)',
                tagBorder: 'rgba(255, 90, 31, 0.3)',
                tagText: '#FF7A36',
                subheadColor: '#FF7A36',
                badgeText: skill.badge
              };

              return (
                <motion.div
                  layout
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { type: 'spring', stiffness: 400, damping: 25 }
                  }}
                  className="skill-card group relative p-6 sm:p-7 rounded-[22px] bg-[#0C0806]/85 backdrop-blur-xl border flex flex-col justify-between transition-all duration-300 overflow-hidden cursor-default select-none"
                  style={{
                    '--card-border': theme.border,
                    '--card-hover-border': theme.hoverBorder,
                    '--card-glow': theme.glow,
                    '--card-subhead': theme.subheadColor
                  }}
                >
                  {/* 1. Luminous Ambient Spotlight Bloom on Hover */}
                  <div 
                    className="absolute -top-16 -right-16 w-44 h-44 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                    style={{ background: theme.glow }}
                  />

                  {/* 2. Top Specular Edge Highlight */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

                  {/* 3. Diagonal Specular Light Sheen / Shimmer Sweep on Hover */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[22px]">
                    <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transform -skew-x-12" />
                  </div>

                  {/* 4. Animated Expanding Bottom Neon Laser Bar */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] w-0 group-hover:w-full transition-all duration-500 ease-out mx-auto rounded-full"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${theme.subheadColor}, transparent)`,
                      boxShadow: `0 0 14px ${theme.subheadColor}`
                    }}
                  />

                  <div>
                    {/* Top Row: Icon squircle on left, Badge pill on right */}
                    <div className="flex items-center justify-between mb-5">
                      {/* Squircle Icon Badge with dedicated glowing aura and interactive hover bounce */}
                      <div 
                        className="relative w-13 h-13 rounded-2xl flex items-center justify-center p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3"
                        style={{
                          background: theme.iconBg,
                          border: `1.5px solid ${theme.iconBorder}`,
                          boxShadow: theme.iconGlow
                        }}
                      >
                        {/* Interactive Pulse Halo Ring that expands outward on hover */}
                        <span 
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-75 group-hover:scale-125 transition-all duration-500 pointer-events-none"
                          style={{ border: `1.5px solid ${theme.iconBorder}` }}
                        />
                        {IconComponent && <IconComponent size={28} />}
                      </div>

                      {/* Category / Role Tag Pill */}
                      <span 
                        className="text-xs font-mono font-semibold px-3 py-1 rounded-full border tracking-wide select-none transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-0.5"
                        style={{
                          background: theme.tagBg,
                          borderColor: theme.tagBorder,
                          color: theme.tagText
                        }}
                      >
                        {theme.badgeText || skill.badge}
                      </span>
                    </div>

                    {/* Tech Name with animated interactive arrow reveal */}
                    <div className="flex items-center gap-1.5 mb-1">
                      <h3 className="text-2xl font-extrabold text-white tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                        {skill.name}
                      </h3>
                      <span 
                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-lg font-bold select-none leading-none"
                        style={{ color: theme.subheadColor }}
                      >
                        →
                      </span>
                    </div>

                    {/* Subheading / Tagline in Tech Accent Color */}
                    <div 
                      className="text-xs font-mono font-semibold tracking-wide mb-3 transition-transform duration-300 group-hover:translate-x-0.5"
                      style={{ color: theme.subheadColor }}
                    >
                      {skill.tagline}
                    </div>

                    {/* Description Paragraph with brightening text on hover */}
                    <p className="text-sm text-[#C4B6AE] group-hover:text-[#F3ECE8] leading-relaxed font-normal transition-colors duration-300">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom "SCROLL TO EXPLORE" Indicator matching reference screenshot */}
        <div className="mt-12 flex flex-col items-center justify-center gap-1.5 text-center select-none">
          <span className="text-[11px] font-mono tracking-widest text-[#8E7D75] uppercase font-bold">
            SCROLL TO EXPLORE
          </span>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F] animate-pulse" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]/30" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
