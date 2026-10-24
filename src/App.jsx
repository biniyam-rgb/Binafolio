import React, { useState } from 'react';
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

  const handleNavClick = () => {
    setIsPhotoModalOpen(false);
    setIsResumeModalOpen(false);
    window.dispatchEvent(new CustomEvent('close-modals'));
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-[#F5F0EC] overflow-hidden selection:bg-[#FF5A1F] selection:text-white">
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
      <main className="relative z-10">
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
