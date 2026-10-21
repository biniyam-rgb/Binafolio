import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, Sparkles, FileText } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' }
];

export const Navbar = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 180;

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

    window.addEventListener('scroll', handleScroll);
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
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div className="container-custom">
        <nav
          className={`flex items-center justify-between px-5 py-3 rounded-full transition-all duration-300 ${
            scrolled
              ? 'glass-nav shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] border-[#3A241C]'
              : 'bg-[#140C09]/70 backdrop-blur-md border border-[#3A241C]/60'
          }`}
        >
          {/* Brand Wordmark Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-[#F5F0EC] group"
          >
            <span className="font-['Plus_Jakarta_Sans']">
              bina<span className="text-[#FF5A1F]">.</span>folio
            </span>
            <span className="h-2 w-2 rounded-full bg-[#FF5A1F] shadow-[0_0_8px_#FF5A1F] animate-pulse" />
          </a>

          {/* Center Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-1 rounded-full bg-[#0A0706]/70 px-4 py-1.5 border border-[#3A241C]/50">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-[#FF5A1F] font-semibold'
                      : 'text-[#C4B6AE] hover:text-[#F5F0EC]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action: Download Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 rounded-full border border-[#3A241C] bg-[#1C110D] px-4 py-2 text-xs font-semibold text-[#F5F0EC] transition-all duration-200 hover:border-[#FF5A1F] hover:bg-[#251610] hover:text-white hover:shadow-[0_0_20px_rgba(255,90,31,0.3)] active:scale-95"
            >
              <Download className="h-3.5 w-3.5 text-[#FF7A36]" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full p-2 text-[#C4B6AE] hover:text-white bg-[#1C110D] border border-[#3A241C]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 mx-4 rounded-2xl glass-nav p-5 border border-[#3A241C] shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#FF5A1F]/15 text-[#FF7A36] border border-[#FF5A1F]/30'
                        : 'text-[#C4B6AE] hover:bg-[#1C110D] hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-[#3A241C]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#1C110D] border border-[#3A241C] py-3 text-sm font-semibold text-[#F5F0EC] hover:border-[#FF5A1F]"
                >
                  <Download className="h-4 w-4 text-[#FF7A36]" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
