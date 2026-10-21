import React from 'react';
import { motion } from 'framer-motion';
import { Milestone, GraduationCap, Code2, Rocket, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { journeyData } from '../data/portfolioData';

export const Journey = () => {
  return (
    <section id="journey" className="relative py-24 sm:py-32 bg-[#0E0907]/70">
      <div className="container-custom relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="badge-orange-pill mb-3">
            <Milestone className="h-3.5 w-3.5" />
            <span>PROGRESSION &amp; PATH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F0EC]">
            Learning <span className="text-gradient-orange">Journey</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#C4B6AE]">
            My academic education at Wollo University and technical milestones as an aspiring full-stack developer.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Vertical Glowing Line (hidden on very small screens, visible from sm up) */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#FF5A1F] via-[#7D290E] to-[#3A241C]" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {journeyData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-[#140C09] border-2 border-[#FF5A1F] z-10 shadow-[0_0_15px_rgba(255,90,31,0.5)]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF7A36]" />
                  </div>

                  {/* Spacer for opposite column on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                    isEven ? 'sm:pr-10' : 'sm:pl-10'
                  }`}>
                    <div className="portfolio-card p-6 bg-[#1C110D] group hover:bg-[#221510] transition-all duration-300">
                      
                      {/* Badge & Period Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="badge-tag !text-xs !text-[#FF7A36] !border-[#FF5A1F]/30">
                          {item.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-[#8E7D75]">
                          <Calendar className="h-3 w-3 text-[#FF5A1F]" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Title & Institution */}
                      <h3 className="text-lg sm:text-xl font-bold text-[#F5F0EC] group-hover:text-[#FF7A36] transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs font-medium text-[#C4B6AE] mt-1 mb-3">
                        <MapPin className="h-3 w-3 text-[#FF5A1F]" />
                        <span>{item.institution}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#C4B6AE] leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key Learning Focus Points */}
                      <div className="space-y-1.5 pt-3 border-t border-[#3A241C]/60">
                        {item.focusPoints.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#8E7D75]">
                            <span className="text-[#FF5A1F] mt-0.5">•</span>
                            <span className="text-[#C4B6AE]">{point}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
