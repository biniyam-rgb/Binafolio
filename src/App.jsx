import React, { useState, useEffect } from 'react';
import { BackgroundGlows } from './components/BackgroundGlows';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CustomCursor } from './components/CustomCursor';
import './App.css';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  // Prevent horizontal trackpad two-finger swipe, touch swipe, and horizontal scroll drift
  useEffect(() => {
    // 1. Wheel listener: cancel horizontal scroll actions on trackpad two-finger sweep
    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) > 0) {
        const target = e.target;
        if (target && target.closest && target.closest('.overflow-x-auto, pre, code')) {
          return;
        }
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) * 0.4) {
          e.preventDefault();
        }
      }
    };

    // 2. Scroll lock: clamp horizontal scroll strictly to 0
    const handleScroll = () => {
      if (window.scrollX !== 0 || document.documentElement.scrollLeft !== 0 || document.body.scrollLeft !== 0) {
        window.scrollTo({ left: 0, top: window.scrollY, behavior: 'instant' });
        document.documentElement.scrollLeft = 0;
        document.body.scrollLeft = 0;
      }
    };

    // 3. Touch listener: prevent horizontal dragging / wobbling on touch surfaces
    let touchStartX = 0;
    let touchStartY = 0;
    const handleTouchStart = (e) => {
      if (e.touches && e.touches.length > 0) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        const dX = Math.abs(e.touches[0].clientX - touchStartX);
        const dY = Math.abs(e.touches[0].clientY - touchStartY);
        if (dX > dY && dX > 6) {
          const target = e.target;
          if (target && target.closest && target.closest('.overflow-x-auto, pre, code')) {
            return;
          }
          if (e.cancelable) {
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const handleNavClick = () => {
    setIsPhotoModalOpen(false);
    setIsResumeModalOpen(false);
    window.dispatchEvent(new CustomEvent('close-modals'));
  };

  return (
    <div className="relative min-h-screen w-full max-w-full bg-[#07090e] text-[#F5F0EC] overflow-x-hidden selection:bg-[#FF5A1F] selection:text-white">
      {/* Animated interactive cursor */}
      <CustomCursor />

      {/* Ambient background glows */}
      <BackgroundGlows />

      {/* Navigation bar */}
      <Navbar 
        onOpenResume={() => {
          setIsPhotoModalOpen(false);
          setIsResumeModalOpen(true);
        }} 
        onNavClick={handleNavClick}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 w-full max-w-full overflow-x-hidden">
        <Hero 
          isPhotoModalOpen={isPhotoModalOpen}
          setIsPhotoModalOpen={setIsPhotoModalOpen}
        />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>

      {/* Minimal footer */}
      <Footer />

      {/* Resume Download / Configuration Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
