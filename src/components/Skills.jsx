import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, Cpu, Wrench } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { TechIconMap } from './TechIcons';

const categories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend & DB' },
  { id: 'tools', label: 'Tools & Workflow' }
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = skillsData.filter((skill) => {
    if (activeCategory === 'all') return true;
    return skill.category === activeCategory;
  });

  return (
    <section id="skills" className="relative py-12 sm:py-16 bg-[#0E0907]/60">
      <div className="container-custom relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="badge-orange-pill mb-3">
            <Cpu className="h-3.5 w-3.5" />
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F0EC]">
            Technologies &amp; <span className="text-gradient-orange">Tools</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#C4B6AE]">
            Core technologies I study and leverage to develop modern, responsive web applications.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 rounded-full bg-[#140C09] p-1.5 border border-[#3A241C]">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#FFFFFF] font-semibold'
                      : 'text-[#C4B6AE] hover:text-[#F5F0EC]'
                  }`}
                >
                  {cat.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 rounded-full bg-[#FF5A1F] shadow-[0_2px_15px_rgba(255,90,31,0.5)] -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="skills-grid-layout"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const IconComponent = TechIconMap[skill.id];
              return (
                <motion.div
                  layout
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="portfolio-card p-6 bg-[#1C110D] flex flex-col justify-between group hover:bg-[#221510] relative overflow-hidden"
                >
                  {/* Subtle top accent highlight on hover */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF5A1F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  />

                  <div>
                    {/* Icon and Tagline Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A0706] border border-[#3A241C] group-hover:border-[#FF5A1F]/50 transition-colors shadow-inner">
                        {IconComponent && <IconComponent size={26} />}
                      </div>
                      <span className="badge-tag">
                        {skill.badge}
                      </span>
                    </div>

                    {/* Skill Title & Category */}
                    <h3 className="text-lg font-bold text-[#F5F0EC] group-hover:text-[#FF7A36] transition-colors">
                      {skill.name}
                    </h3>
                    <div className="text-xs font-mono text-[#FF5A1F]/90 mt-0.5 mb-2.5">
                      {skill.tagline}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#C4B6AE] leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Card Bottom Accent Indicator */}
                  <div className="mt-5 pt-4 border-t border-[#3A241C]/60 flex items-center justify-between text-[11px] font-mono text-[#8E7D75]">
                    <span className="capitalize">{skill.category}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#3A241C] group-hover:bg-[#FF5A1F] transition-colors" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Transparency / Honesty Note */}
        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 text-xs font-mono text-[#8E7D75] bg-[#140C09] px-4 py-2 rounded-full border border-[#3A241C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" />
            <span>Honest representation: Competencies developed through undergraduate courses &amp; active software projects.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
