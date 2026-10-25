import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code2, Folder, Route, Mail, Sparkles, Menu, X } from 'lucide-react';

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
            scrolled 
              ? 'border-[#FF5A1F]/35 bg-[#07090e] shadow-[0_15px_45px_-10px_rgba(0,0,0,0.98),0_0_30px_rgba(255,90,31,0.2)]' 
              : 'border-white/[0.1] backdrop-blur-2xl bg-[#07090e]/85 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.9),0_0_25px_rgba(255,90,31,0.15)]'
          }`}
        >
          {/* ================= LEFT: </> BinaFolio ● ================= */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className={`flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-[#F5F0EC] group py-1 transition-all duration-300 ${
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
              <span style={{ color: '#FFFFFF', textShadow: '0 0 14px rgba(255, 255, 255, 0.45)' }}>Folio</span>
            </span>
            <span className="h-2 w-2 rounded-full bg-[#FF5A1F] shadow-[0_0_10px_#FF5A1F,0_0_16px_#FF7A36] ml-0.5 animate-pulse" />
          </a>

          {/* ================= CENTER (Primary Nav): Centered Dark Glass Capsule ================= */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 px-3 py-1.5 rounded-full bg-[#0a0e17]/90 border border-[#FF5A1F]/30 shadow-[0_0_20px_rgba(255,90,31,0.15),inset_0_0_12px_rgba(0,0,0,0.5)] backdrop-blur-xl">
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

          {/* ================= RIGHT: Sleek Glowing "Ready For Hire" CTA Button ================= */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 sm:px-4.5 py-1.5 border border-[#FF5A1F]/45 bg-[#140C09]/90 backdrop-blur-xl hover:border-[#FF7A36] shadow-[0_0_18px_rgba(255,90,31,0.3),inset_0_0_10px_rgba(255,90,31,0.15)] hover:shadow-[0_0_28px_rgba(255,90,31,0.6),inset_0_0_14px_rgba(255,90,31,0.28)] hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
              title="Ready for Hire — Let's connect!"
            >
              {/* Live Pulsing Emerald Beacon */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981] shadow-[0_0_8px_#10B981]"></span>
              </span>

              {/* Sexy Gradient Text */}
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-black tracking-wider uppercase bg-gradient-to-r from-[#FFFFFF] via-[#FFF2EB] to-[#FFA066] bg-clip-text text-transparent group-hover:from-white group-hover:via-[#FFA066] group-hover:to-[#FF5A1F] transition-all">
                Ready For Hire
              </span>

              <Sparkles className="h-3.5 w-3.5 text-[#FF7A36] group-hover:rotate-45 group-hover:scale-115 transition-transform duration-300" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-full p-2 text-white hover:text-[#FF7A36] bg-white/[0.08] border border-white/[0.15] hover:border-[#FF5A1F]/50 transition-colors shadow-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden container-custom mt-2"
          >
            <div className="rounded-2xl border border-[#FF5A1F]/30 backdrop-blur-2xl bg-[#07090e]/95 p-4 shadow-[0_15px_40px_rgba(0,0,0,0.9),0_0_25px_rgba(255,90,31,0.2)]">
              <div className="grid grid-cols-3 gap-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-xl text-[11px] sm:text-xs transition-all ${
                        isActive
                          ? 'bg-[#FF5A1F]/15 text-[#FF7A36] border border-[#FF5A1F]/60 shadow-[0_0_15px_rgba(255,90,31,0.35)] font-semibold'
                          : 'text-white hover:bg-white/[0.08] hover:text-[#FF7A36]'
                      }`}
                    >
                      <Icon className="h-4 w-4 mb-1 text-white drop-shadow-[0_0_3px_rgba(255,255,255,0.45)]" />
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </div>

              <div className="pt-3 mt-3 border-t border-white/[0.08]">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl border border-[#FF5A1F]/50 bg-gradient-to-r from-[#1E110A] via-[#2A160E] to-[#1E110A] py-2.5 text-xs font-black tracking-wider uppercase text-white shadow-[0_0_22px_rgba(255,90,31,0.4)] hover:scale-102 transition-all cursor-pointer"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981] shadow-[0_0_6px_#10B981]"></span>
                  </span>
                  <span className="bg-gradient-to-r from-white via-[#FFF0E6] to-[#FFA066] bg-clip-text text-transparent">
                    Ready For Hire
                  </span>
                  <Sparkles className="h-3.5 w-3.5 text-[#FF7A36]" />
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
