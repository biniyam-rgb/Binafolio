import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, GraduationCap } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { ReactIcon, LaravelIcon, JavascriptIcon, MysqlIcon } from './TechIcons';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="home" className="hero-wrapper">
      <div className="container-custom relative z-10 w-full my-auto">
        <div className="hero-grid-layout">
          
          {/* ================= LEFT SIDE: Typography & CTA ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hero-left-content"
          >
            {/* Small Introductory Label */}
            <motion.div variants={itemVariants} className="mb-4">
              <div className="badge-orange-pill">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5A1F] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5A1F]"></span>
                </span>
                <span>Hey, I'm <strong className="font-bold text-[#F5F0EC]">Biniyam</strong></span>
              </div>
            </motion.div>

            {/* Oversized Bold Headline */}
            <motion.div variants={itemVariants} className="space-y-1 mb-5">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#F5F0EC]">
                Software <br />
                <span className="text-gradient-orange">Developer</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants} className="mb-4">
              <div className="flex items-center gap-2 text-base sm:text-lg lg:text-xl font-medium text-[#FF7A36]">
                <GraduationCap className="h-5 w-5 shrink-0 text-[#FF5A1F]" />
                <span>Software Engineering Student &amp; Aspiring Full-Stack Developer</span>
              </div>
            </motion.div>

            {/* Short Introduction */}
            <motion.div variants={itemVariants} className="mb-8 max-w-xl">
              <p className="text-base sm:text-lg text-[#C4B6AE] leading-relaxed">
                Building modern, scalable web applications with <span className="text-[#F5F0EC] font-semibold">React</span>, <span className="text-[#F5F0EC] font-semibold">Laravel</span>, and <span className="text-[#F5F0EC] font-semibold">MySQL</span>.
                Studying at <span className="text-[#F5F0EC] font-semibold">Wollo University</span>, turning ideas into elegant and high-impact digital solutions.
              </p>
            </motion.div>

            {/* Buttons & Actions */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a href="#projects" className="btn-primary-orange group">
                <span>Explore My Work</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a href="#contact" className="btn-secondary-dark group">
                <Mail className="h-4 w-4 text-[#FF7A36]" />
                <span>Let's Connect</span>
              </a>
            </motion.div>

            {/* University Tag Badge */}
            <motion.div variants={itemVariants} className="mt-8 pt-6 border-t border-[#3A241C] flex items-center gap-3 text-xs sm:text-sm text-[#8E7D75]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" />
              <span>Campus: <strong className="text-[#C4B6AE] font-medium">Wollo University, Kombolcha</strong></span>
              <span className="text-[#3A241C]">•</span>
              <span className="text-[#C4B6AE]">Full-Stack Focus</span>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT SIDE: 3D Character & Floating Icons ================= */}
          <div className="relative flex items-center justify-center">
            
            {/* The Visual Stage Container */}
            <div className="hero-character-stage">

              {/* Cinematic Warm Orange Glow Behind Character */}
              <div 
                className="absolute w-[340px] sm:w-[440px] h-[340px] sm:h-[440px] rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 90, 31, 0.42) 0%, rgba(125, 41, 14, 0.22) 40%, rgba(20, 12, 9, 0) 70%)',
                  filter: 'blur(40px)',
                  transform: 'translateZ(0)'
                }}
              />

              {/* Concentric Orbital Rings */}
              <div className="hero-orbital-1" />
              <div className="hero-orbital-2" />
              <div className="hero-orbital-3" />

              {/* Character Visual Asset */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="hero-character-portal animate-float-subtle"
              >
                <img
                  src="/assets/character.jpg"
                  alt="Biniyam Gebrie — Software Developer"
                  className="w-full h-full object-cover object-center select-none pointer-events-none"
                  style={{
                    maskImage: 'radial-gradient(circle at 50% 50%, black 72%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 72%, transparent 100%)'
                  }}
                />

                {/* Inner Warm Lighting Rim Gradient */}
                <div 
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, transparent 60%, rgba(255, 90, 31, 0.35) 95%, rgba(255, 122, 54, 0.5) 100%)',
                    mixBlendMode: 'screen'
                  }}
                />
              </motion.div>

              {/* ================= FLOATING TECHNOLOGY ICONS ================= */}
              
              {/* 1. React Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                className="floating-tech-badge badge-pos-react animate-float-gentle"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#61DAFB]/10">
                  <ReactIcon size={22} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#F5F0EC]">React</div>
                  <div className="text-[10px] font-mono text-[#8E7D75]">Frontend</div>
                </div>
              </motion.div>

              {/* 2. Laravel Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.65, type: 'spring', stiffness: 200 }}
                className="floating-tech-badge badge-pos-laravel animate-float-gentle"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF2D20]/10">
                  <LaravelIcon size={22} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#F5F0EC]">Laravel</div>
                  <div className="text-[10px] font-mono text-[#8E7D75]">Backend</div>
                </div>
              </motion.div>

              {/* 3. JavaScript Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                className="floating-tech-badge badge-pos-js animate-float-subtle"
                style={{ animationDelay: '0.8s' }}
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#F7DF1E]/10">
                  <JavascriptIcon size={20} />
                </div>
                <span className="text-xs font-semibold text-[#F5F0EC]">JavaScript</span>
              </motion.div>

              {/* 4. MySQL Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.95, type: 'spring', stiffness: 200 }}
                className="floating-tech-badge badge-pos-mysql animate-float-subtle"
                style={{ animationDelay: '2.2s' }}
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#00758F]/10">
                  <MysqlIcon size={20} />
                </div>
                <span className="text-xs font-semibold text-[#F5F0EC]">MySQL</span>
              </motion.div>

              {/* 5. Floating Glass Highlight Card (bottom) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute -bottom-6 left-2 sm:left-10 z-20 max-w-[280px]"
              >
                <div className="glass-panel rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-[#FF5A1F] animate-ping" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF7A36]">Student Engineer</span>
                  </div>
                  <p className="mt-1 text-xs text-[#F5F0EC] font-medium leading-snug">
                    "Crafting modern digital solutions with passion and clean code."
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[10px] text-[#8E7D75] pt-2 border-t border-[#3A241C]">
                    <span>Wollo University</span>
                    <span className="text-[#FF7A36] font-mono">Full-Stack</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-16 flex flex-col items-center justify-center text-center"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-xs font-mono text-[#8E7D75] hover:text-[#FF7A36] transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-[#3A241C] p-1">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]"
              />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
