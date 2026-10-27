import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code2, Folder, Route, Mail, Sparkles, Menu, X, Sun, Moon } from 'lucide-react';
import confetti from 'canvas-confetti';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Code2 },
  { name: 'Projects', href: '#projects', icon: Folder },
  { name: 'Journey', href: '#journey', icon: Route },
  { name: 'Contact', href: '#contact', icon: Mail }
];

export const Navbar = ({ onOpenResume, onNavClick }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_theme');
      return saved === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (document.body) {
      document.body.setAttribute('data-theme', theme);
    }
    try {
      localStorage.setItem('portfolio_theme', theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  const handleThemeToggle = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    if (document.body) {
      document.body.setAttribute('data-theme', nextTheme);
    }
    try {
      localStorage.setItem('portfolio_theme', nextTheme);
    } catch {
      // ignore
    }

    window.dispatchEvent(
      new CustomEvent('theme-change', { detail: { theme: nextTheme } })
    );

    try {
      if (nextTheme === 'light') {
        confetti({
          particleCount: 32,
          spread: 60,
          origin: { y: 0.12, x: 0.82 },
          colors: ['#FF5A1F', '#FFB800', '#FFA066', '#FFFFFF'],
          ticks: 90,
          gravity: 1.2,
          scalar: 0.8
        });
      } else {
        confetti({
          particleCount: 32,
          spread: 60,
          origin: { y: 0.12, x: 0.82 },
          colors: ['#00D8FF', '#FF5A1F', '#A78BFA', '#FFFFFF'],
          ticks: 90,
          gravity: 1.2,
          scalar: 0.8
        });
      }
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavClick) {
      onNavClick();
    }
    document.body.style.overflow = '';
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    if (href === '#skills') {
      window.dispatchEvent(new CustomEvent('trigger-skills-animation'));
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        scrolled ? 'pt-2 sm:pt-3' : 'pt-4 sm:pt-5'
      }`}
      style={{ zIndex: 100000 }}
    >
      <div className="container-custom">
        {/* Floating glassmorphic capsule centered at the top */}
        <div 
          className={`w-full flex items-center justify-between px-5 sm:px-7 py-2.5 rounded-full border transition-all duration-300 ${
            theme === 'light'
              ? scrolled 
                ? 'border-[#FF5A1F]/40 bg-white/95 shadow-[0_15px_45px_-10px_rgba(0,0,0,0.1),0_0_20px_rgba(255,90,31,0.12)]' 
                : 'border-slate-300/80 backdrop-blur-2xl bg-white/90 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08),0_0_20px_rgba(255,90,31,0.08)]'
              : scrolled 
                ? 'border-[#FF5A1F]/35 bg-[#07090e] shadow-[0_15px_45px_-10px_rgba(0,0,0,0.98),0_0_30px_rgba(255,90,31,0.2)]' 
                : 'border-white/[0.1] backdrop-blur-2xl bg-[#07090e]/85 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.9),0_0_25px_rgba(255,90,31,0.15)]'
          }`}
        >
          {/* ================= LEFT: </> BinaFolio ● ================= */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className={`flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight group py-1 transition-all duration-300 ${
              theme === 'light' ? 'text-[#0F172A]' : 'text-[#F5F0EC]'
            } ${
              scrolled 
                ? 'opacity-0 pointer-events-none -translate-x-2' 
                : 'opacity-100 translate-x-0'
            }`}
            tabIndex={scrolled ? -1 : 0}
            aria-hidden={scrolled}
          >
            <span className="font-mono text-base sm:text-lg font-black tracking-tighter" style={{ color: '#FF7A36', textShadow: '0 0 10px rgba(255, 90, 31, 0.8)' }}>&lt;/&gt;</span>
            <span className="font-['Inter'] font-extrabold tracking-tight text-base sm:text-lg">
              <span style={{ color: '#FF7A36', textShadow: '0 0 14px rgba(255, 122, 54, 0.8)' }}>Bina</span>
              <span 
                className="transition-colors duration-200"
                style={{ 
                  color: theme === 'light' ? '#0F172A' : '#FFFFFF', 
                  textShadow: theme === 'light' ? 'none' : '0 0 14px rgba(255, 255, 255, 0.45)' 
                }}
              >
                Folio
              </span>
            </span>
            <span className="h-2 w-2 rounded-full bg-[#FF5A1F] shadow-[0_0_10px_#FF5A1F,0_0_16px_#FF7A36] ml-0.5 animate-pulse" />
          </a>

          {/* ================= CENTER (Primary Nav): Centered Capsule ================= */}
          <nav className={`hidden md:flex items-center gap-1 lg:gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-300 backdrop-blur-xl ${
            theme === 'light'
              ? 'bg-[#EBF0F5]/90 border-slate-300/80 shadow-[0_2px_12px_rgba(0,0,0,0.06)]'
              : 'bg-[#0a0e17]/90 border-[#FF5A1F]/30 shadow-[0_0_20px_rgba(255,90,31,0.15),inset_0_0_12px_rgba(0,0,0,0.5)]'
          }`}>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`nav-link-btn ${isActive ? 'active' : ''}`}
                  title={link.name}
                >
                  <Icon className="nav-link-icon" />

                  {/* Text label: only revealed when hovering the icon */}
                  <span className="nav-link-label">
                    {link.name}
                  </span>

                  {/* Vivid glowing neon dot beneath active item */}
                  {isActive && <span className="nav-active-dot" />}
                </a>
              );
            })}
          </nav>

          {/* ================= RIGHT: Sleek Glowing "Ready For Hire" CTA Button & Toggle Button ================= */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Professional Animated Theme Switcher (Night Mode <-> Normal Mode) */}
            <motion.button
              type="button"
              role="switch"
              aria-checked={theme === 'light'}
              aria-label={`Current mode: ${theme === 'dark' ? 'Night Mode' : 'Normal Mode'}. Click to switch theme.`}
              onClick={handleThemeToggle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 450, damping: 25 }}
              className={`theme-toggle-btn relative inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-2.5 sm:px-3 py-1.5 border transition-all duration-300 cursor-pointer outline-none select-none backdrop-blur-xl ${
                theme === 'light'
                  ? 'bg-gradient-to-r from-[#FFF5EB] to-[#FFE8D6] border-[#FF8E55] shadow-[0_0_20px_rgba(255,90,31,0.35),0_2px_8px_rgba(255,122,54,0.2)]'
                  : 'bg-[#10121A]/90 border-white/[0.12] hover:border-[#FF5A1F]/50 shadow-[0_4px_16px_rgba(0,0,0,0.6),0_0_12px_rgba(255,90,31,0.15)]'
              }`}
              title={theme === 'dark' ? 'Switch to Normal Mode (Day)' : 'Switch to Night Mode (Dark)'}
            >
              {/* Animated Icon: Sun in Normal mode, Moon in Night mode */}
              <div className="relative flex items-center justify-center w-4 h-4">
                <AnimatePresence mode="wait" initial={false}>
                  {theme === 'light' ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, scale: 0.2, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      exit={{ rotate: 90, scale: 0.2, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                      className="text-[#FF5A1F]"
                    >
                      <Sun className="h-4 w-4 text-[#FF5A1F] drop-shadow-[0_0_6px_rgba(255,90,31,0.7)]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, scale: 0.2, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      exit={{ rotate: -90, scale: 0.2, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                      className="text-[#00D8FF]"
                    >
                      <Moon className="h-4 w-4 text-[#00D8FF] fill-[#00D8FF]/20 drop-shadow-[0_0_6px_rgba(0,216,255,0.7)]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mode Label */}
              <span
                className="font-mono text-[11px] font-extrabold tracking-wider uppercase transition-colors duration-200"
                style={{
                  color: theme === 'light' ? '#C2410C' : '#CBD5E1',
                  textShadow: theme === 'light' ? '0 0 10px rgba(255,90,31,0.3)' : '0 0 8px rgba(0,216,255,0.3)'
                }}
              >
                {theme === 'light' ? 'Normal' : 'Night'}
              </span>

              {/* Sleek Sliding Capsule Switch */}
              <div
                className="relative inline-flex items-center w-8 h-4 rounded-full p-0.5 transition-colors duration-300"
                style={{
                  backgroundColor: theme === 'light' ? '#FFD4B2' : '#080A0F',
                  border: theme === 'light' ? '1px solid rgba(255,90,31,0.4)' : '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <motion.div
                  layout
                  transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                  className="h-3 w-3 rounded-full flex items-center justify-center transition-all"
                  style={{
                    backgroundColor: theme === 'light' ? '#FF5A1F' : '#00D8FF',
                    boxShadow: theme === 'light' ? '0 0 8px #FF5A1F' : '0 0 8px #00D8FF',
                    marginLeft: theme === 'light' ? 'auto' : '0'
                  }}
                >
                  <span className="w-1 h-1 rounded-full bg-white opacity-90" />
                </motion.div>
              </div>
            </motion.button>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="hero-available-badge hidden sm:inline-flex"
              title="Available for Hire — Let's connect!"
            >
              <span className="hero-available-pulse">
                <span className="hero-available-ping" />
                <span className="hero-available-core" />
              </span>
              <span>Available for Hire</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden rounded-full p-2 transition-all duration-200 border cursor-pointer ${
                theme === 'light'
                  ? 'text-[#0F172A] hover:text-[#FF5A1F] bg-black/[0.04] border-black/[0.1] hover:border-[#FF5A1F]'
                  : 'text-white hover:text-[#FF7A36] bg-white/[0.08] border-white/[0.15] hover:border-[#FF5A1F]/50'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 transition-transform duration-200" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu: Impeccably Organized & Theme-Aware */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden container-custom mt-2 sm:mt-3 px-3 sm:px-4"
          >
            <div
              className={`rounded-3xl border backdrop-blur-2xl p-4 sm:p-5 transition-colors duration-300 ${
                theme === 'light'
                  ? 'bg-white/95 border-slate-200/80 shadow-[0_20px_45px_rgba(0,0,0,0.12),0_0_25px_rgba(255,90,31,0.12)]'
                  : 'bg-[#0B0E17]/95 border-[#FF5A1F]/30 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_25px_rgba(255,90,31,0.2)]'
              }`}
            >
              {/* Header: Menu Title & Status */}
              <div
                className="flex items-center justify-between pb-3 mb-3 border-b"
                style={{
                  borderColor: theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)'
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FF5A1F] animate-pulse" />
                  <span
                    className="font-mono text-xs font-bold tracking-wider uppercase"
                    style={{ color: theme === 'light' ? '#64748B' : '#94A3B8' }}
                  >
                    Quick Navigation
                  </span>
                </div>
                <span
                  className="font-mono text-[11px] px-2 py-0.5 rounded-full border"
                  style={{
                    backgroundColor: theme === 'light' ? 'rgba(255,90,31,0.08)' : 'rgba(255,90,31,0.15)',
                    borderColor: 'rgba(255,90,31,0.3)',
                    color: '#FF7A36'
                  }}
                >
                  6 Sections
                </span>
              </div>

              {/* Organized 2-Column Grid of Navigation Cards */}
              <div className="grid grid-cols-2 gap-2.5">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`flex items-center gap-2.5 p-2.5 rounded-2xl border transition-all duration-200 active:scale-97 cursor-pointer ${
                        isActive
                          ? theme === 'light'
                            ? 'bg-[#FF5A1F]/10 border-[#FF5A1F]/50 shadow-[0_0_14px_rgba(255,90,31,0.18)]'
                            : 'bg-[#FF5A1F]/15 border-[#FF5A1F]/60 shadow-[0_0_16px_rgba(255,90,31,0.3)]'
                          : theme === 'light'
                            ? 'bg-slate-50/80 border-slate-200/60 hover:bg-slate-100 hover:border-[#FF5A1F]/40'
                            : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.08] hover:border-[#FF5A1F]/40'
                      }`}
                    >
                      {/* Icon container */}
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-colors ${
                          isActive
                            ? 'bg-[#FF5A1F] text-white shadow-[0_0_10px_rgba(255,90,31,0.6)]'
                            : theme === 'light'
                              ? 'bg-slate-200/70 text-[#0F172A]'
                              : 'bg-white/[0.08] text-white'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>

                      {/* Label & Active dot */}
                      <div className="flex flex-1 items-center justify-between min-w-0 pr-1">
                        <span
                          className={`text-xs sm:text-sm font-bold tracking-tight truncate ${
                            isActive
                              ? 'text-[#FF5A1F]'
                              : theme === 'light'
                                ? 'text-[#0F172A]'
                                : 'text-[#F1F5F9]'
                          }`}
                        >
                          {link.name}
                        </span>

                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F] shadow-[0_0_8px_#FF5A1F] shrink-0" />
                        )}
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Bottom Section: Ready For Hire CTA */}
              <div
                className="pt-3.5 mt-3.5 border-t"
                style={{
                  borderColor: theme === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)'
                }}
              >
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="ready-hire-btn w-full inline-flex items-center justify-center gap-2.5 rounded-2xl border border-[#10B981]/50 bg-gradient-to-r from-[#059669] to-[#10B981] py-3 text-xs font-black tracking-wider uppercase text-white shadow-[0_0_24px_rgba(16,185,129,0.45)] active:scale-98 transition-all cursor-pointer"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white shadow-[0_0_6px_#FFFFFF]"></span>
                  </span>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-black tracking-wider uppercase text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    Available for Hire — Let's Connect
                  </span>
                  <Sparkles className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
