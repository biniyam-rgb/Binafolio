import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code2, Folder, Route, Mail, Download, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Code2 },
  { name: 'Projects', href: '#projects', icon: Folder },
  { name: 'Journey', href: '#journey', icon: Route },
  { name: 'Contact', href: '#contact', icon: Mail }
];

export const Navbar = ({ onOpenResume }) => {
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
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 transition-all duration-300">
      <div className="container-custom">
        {/* Floating glassmorphic capsule centered at the top */}
        <div 
          className={`w-full flex items-center justify-between px-5 sm:px-7 py-2.5 rounded-full border border-white/[0.1] backdrop-blur-2xl bg-[#07090e]/85 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.9),0_0_25px_rgba(255,90,31,0.15)] transition-all duration-300 ${
            scrolled ? 'border-[#FF5A1F]/30 bg-[#07090e]/95 shadow-[0_15px_45px_-10px_rgba(0,0,0,0.95),0_0_35px_rgba(255,90,31,0.25)]' : ''
          }`}
        >
          {/* ================= LEFT: </> BinaFolio ● ================= */}
          <a
            href="#home"
            className="flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-[#F5F0EC] group py-1"
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

          {/* ================= RIGHT: Brightly Glowing Orange-Amber "Resume" Button ================= */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold text-white border border-[#FFE0D0]/40 hover:scale-105 active:scale-95 transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #FF5A1F 0%, #FF7A36 50%, #FFA066 100%)',
                boxShadow: '0 0 20px rgba(255, 90, 31, 0.65), 0 0 35px rgba(255, 122, 54, 0.35)',
                color: '#FFFFFF'
              }}
            >
              <Download className="h-3.5 w-3.5 text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
              <span className="tracking-wide">Resume</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-full p-2 text-[#C4B6AE] hover:text-white bg-white/[0.04] border border-white/[0.1] hover:border-[#FF5A1F]/50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
                      className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-xl text-xs transition-all ${
                        isActive
                          ? 'bg-[#FF5A1F]/15 text-[#FF7A36] border border-[#FF5A1F]/60 shadow-[0_0_15px_rgba(255,90,31,0.35)] font-semibold'
                          : 'text-[#94A3B8] hover:bg-white/[0.04] hover:text-white'
                      }`}
                    >
                      <Icon className="h-4 w-4 mb-1" />
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </div>

              <div className="pt-3 mt-3 border-t border-white/[0.08]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF5A1F] to-[#FF7A36] py-2.5 text-xs font-bold text-white shadow-[0_0_20px_rgba(255,90,31,0.5)]"
                >
                  <Download className="h-4 w-4 text-white" />
                  <span>Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
