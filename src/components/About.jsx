import React from 'react';
import { Sparkles, BookOpen, Layers, Target, Compass } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="relative py-12 sm:py-16 overflow-hidden">
      <div className="container-custom relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-8 sm:mb-10">
          <div className="badge-orange-pill mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>BACKGROUND &amp; ASPIRATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F0EC]">
            A Little <span className="text-gradient-orange">About Me</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#C4B6AE] max-w-2xl">
            Software engineering student with a deep enthusiasm for full-stack development, clean architecture, and practical problem solving.
          </p>
        </div>

        {/* Asymmetric Content Layout */}
        <div className="about-grid-layout">
          
          {/* LEFT COLUMN: Narrative & Highlights */}
          <div className="space-y-6">
            <div className="portfolio-card p-6 sm:p-8 bg-[#140C09]/80 backdrop-blur-md">
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F0EC] mb-4 flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-[#FF5A1F]" />
                <span>The Engineering Journey</span>
              </h3>
              
              <div className="space-y-4 text-sm sm:text-base text-[#C4B6AE] leading-relaxed">
                <p>
                  I'm <strong className="text-[#F5F0EC]">{personalData.name}</strong>, currently pursuing my undergraduate degree in Software Engineering at <strong className="text-[#FF7A36]">{personalData.university}</strong>.
                </p>
                <p>
                  My journey in software engineering began with curiosity about how the web connects people and systems. Over time, that curiosity evolved into a dedicated passion for engineering full-stack applications — bridging creative user interfaces with secure, reliable server backends.
                </p>
                <p>
                  I primarily work with <strong className="text-[#F5F0EC]">React</strong> on the client side and <strong className="text-[#F5F0EC]">Laravel</strong> with <strong className="text-[#F5F0EC]">PHP</strong> and <strong className="text-[#F5F0EC]">MySQL</strong> on the backend. I enjoy understanding every layer of a project, from relational database schema design to responsive animations.
                </p>
              </div>

              {/* Goal Callout Box */}
              <div className="mt-6 rounded-xl border border-[#3A241C] bg-[#1C110D] p-4 sm:p-5 relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#FF5A1F] to-[#7D290E]" />
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-[#FF5A1F] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF7A36] font-semibold">
                      Primary Career Goal
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-[#F5F0EC] leading-relaxed">
                      {personalData.careerGoal}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Workspace Setup & Key Pillars */}
          <div className="space-y-6">
            
            {/* Workspace Illustration with Glow */}
            <div className="portfolio-card overflow-hidden group border-[#3A241C] relative">
              <div className="aspect-video w-full overflow-hidden bg-[#140C09] relative">
                <img
                  src="/assets/workspace.jpg"
                  alt="Software Developer Workspace Setup"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140C09] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="rounded-full bg-[#0A0706]/85 backdrop-blur-md px-3 py-1 font-mono text-[#FF7A36] border border-[#3A241C]">
                    Workspace // Focus &amp; Coding
                  </span>
                  <span className="text-[#C4B6AE] font-mono text-[11px] hidden sm:inline">
                    Kombolcha Campus
                  </span>
                </div>
              </div>
            </div>

            {/* Three Pillar Cards */}
            <div className="about-pillars-grid">
              <div className="portfolio-card p-4 bg-[#140C09]/60">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF5A1F]/10 text-[#FF5A1F] mb-3">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-[#F5F0EC]">Academics</h4>
                <p className="mt-1 text-xs text-[#8E7D75]">
                  Software Engineering degree at Wollo University.
                </p>
              </div>

              <div className="portfolio-card p-4 bg-[#140C09]/60">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF7A36]/10 text-[#FF7A36] mb-3">
                  <Layers className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-[#F5F0EC]">Full-Stack</h4>
                <p className="mt-1 text-xs text-[#8E7D75]">
                  React frontends paired with Laravel &amp; MySQL.
                </p>
              </div>

              <div className="portfolio-card p-4 bg-[#140C09]/60">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF5A1F]/10 text-[#FF5A1F] mb-3">
                  <Compass className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-[#F5F0EC]">Growth</h4>
                <p className="mt-1 text-xs text-[#8E7D75]">
                  Driven to build impactful, human-centered software.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
