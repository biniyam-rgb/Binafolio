import React from 'react';
import { MapPin, Monitor, Wrench, GitBranch, Rocket } from 'lucide-react';
import { journeyData } from '../data/portfolioData';

// Theme metadata and configurations for each of the 4 milestone cards
const cardConfigs = [
  {
    cardClass: 'journey-card-1',
    notchColor: '#FF5A1F',
    dotColor: '#FF5A1F',
    subheadColor: '#FF7A36',
    bulletColor: '#FF5A1F',
    subheadIcon: MapPin,
    nodeType: 'target-orange',
    accentColor: '#FF5A1F'
  },
  {
    cardClass: 'journey-card-2',
    notchColor: '#00D8FF',
    dotColor: '#FF7A36',
    subheadColor: '#00D8FF',
    bulletColor: '#FF7A36',
    subheadIcon: Monitor,
    nodeType: 'target-cyan',
    accentColor: '#00D8FF'
  },
  {
    cardClass: 'journey-card-3',
    notchColor: 'rgba(70, 42, 32, 0.9)',
    dotColor: '#FF7A36',
    subheadColor: '#FF7A36',
    bulletColor: '#FF7A36',
    subheadIcon: Wrench,
    nodeType: 'git-branch',
    accentColor: '#FF7A36'
  },
  {
    cardClass: 'journey-card-4',
    notchColor: 'rgba(85, 48, 36, 0.9)',
    dotColor: '#FF7A36',
    subheadColor: '#FF5A1F',
    bulletColor: '#FF5A1F',
    subheadIcon: Rocket,
    nodeType: 'rocket',
    accentColor: '#FF5A1F'
  }
];

// Timeline Node Component strictly matching reference visual specifications
const TimelineNode = ({ type }) => {
  // Node 1: Warm orange target node with glowing center
  if (type === 'target-orange') {
    return (
      <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#180B07] border-2 border-[#FF5A1F] shadow-[0_0_18px_rgba(255,90,31,0.85)] z-20">
        <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-gradient-to-br from-[#FFA066] via-[#FF5A1F] to-[#E64A19] shadow-[0_0_10px_#FF7A36]" />
      </div>
    );
  }

  // Node 2: Brighter cyan-and-orange highlighted node (active specialization)
  if (type === 'target-cyan') {
    return (
      <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#08151A] border-2 border-[#00D8FF] shadow-[0_0_22px_rgba(0,216,255,0.92)] z-20">
        <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-gradient-to-br from-[#A5F3FC] via-[#00D8FF] to-[#FF7A36] shadow-[0_0_12px_#00D8FF]" />
      </div>
    );
  }

  // Node 3: Small Git Branch icon node matching reference screenshot
  if (type === 'git-branch') {
    return (
      <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#180E0A] border-2 border-[#FF5A1F]/80 shadow-[0_0_16px_rgba(255,90,31,0.45)] z-20">
        <GitBranch className="w-3.5 h-3.5 text-[#FF7A36]" strokeWidth={2.3} />
      </div>
    );
  }

  // Node 4: Rocket icon around the fourth milestone
  return (
    <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#180E0A] border-2 border-[#FF5A1F] shadow-[0_0_18px_rgba(255,90,31,0.55)] z-20">
      <Rocket className="w-3.5 h-3.5 text-[#FF7A36]" strokeWidth={2.2} />
    </div>
  );
};

// Compact Single Journey Card Component
const JourneyCard = ({ index, isLeft }) => {
  const item = journeyData[index];
  const config = cardConfigs[index];
  const SubheadIcon = config.subheadIcon;

  return (
    <div className={`${config.cardClass} group relative p-5 select-none overflow-visible cursor-default`}>
      {/* 1. Speech Bubble Triangular Pointer Notch */}
      {isLeft ? (
        /* Desktop: Pointer Notch on Right pointing right towards center timeline node */
        <svg 
          className="hidden md:block absolute -right-[15px] top-[32px] w-[16px] h-[16px] pointer-events-none z-20"
          viewBox="0 0 16 16" 
          fill="none"
        >
          <path 
            d="M 0 0 L 15 8 L 0 16 Z" 
            fill="#0C0806" 
            stroke={config.notchColor}
            strokeWidth="1.5"
          />
          <line x1="0" y1="1" x2="0" y2="15" stroke="#0C0806" strokeWidth="2.5" />
        </svg>
      ) : (
        /* Desktop: Pointer Notch on Left pointing left towards center timeline node */
        <svg 
          className="hidden md:block absolute -left-[15px] top-[32px] w-[16px] h-[16px] pointer-events-none z-20"
          viewBox="0 0 16 16" 
          fill="none"
        >
          <path 
            d="M 16 0 L 1 8 L 16 16 Z" 
            fill="#0C0806" 
            stroke={config.notchColor}
            strokeWidth="1.5"
          />
          <line x1="16" y1="1" x2="16" y2="15" stroke="#0C0806" strokeWidth="2.5" />
        </svg>
      )}

      {/* Mobile: Pointer Notch on Left pointing left to the mobile timeline rail */}
      <svg 
        className="block md:hidden absolute -left-[13px] top-[32px] w-[14px] h-[16px] pointer-events-none z-20"
        viewBox="0 0 14 16" 
        fill="none"
      >
        <path 
          d="M 14 0 L 1 8 L 14 16 Z" 
          fill="#0C0806" 
          stroke={config.notchColor}
          strokeWidth="1.5"
        />
        <line x1="14" y1="1" x2="14" y2="15" stroke="#0C0806" strokeWidth="2.5" />
      </svg>

      {/* 2. Top Specular Accent Highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none rounded-t-[20px]" />

      {/* Card Content (Compact & Focused) */}
      <div>
        {/* Top Header Row: Small outlined category label at top-left, Status & colored indicator at top-right */}
        <div className="flex items-center justify-between mb-2 gap-2">
          <span className="text-[10px] sm:text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-[#160E0A]/90 border border-[#3A241C] text-[#C4B6AE] tracking-wide select-none">
            {item.badge}
          </span>

          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-[#C4B6AE]">
            <span 
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: config.dotColor, boxShadow: `0 0 6px ${config.dotColor}` }}
            />
            <span className="font-medium tracking-wide">{item.period}</span>
          </div>
        </div>

        {/* Clear, bold title */}
        <h3 className="text-base sm:text-[18px] font-bold text-white tracking-tight mt-2 mb-1 leading-snug">
          {item.title}
        </h3>

        {/* Supporting label / Subtitle with dedicated icon */}
        <div 
          className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-medium tracking-wide mb-2.5"
          style={{ color: config.subheadColor }}
        >
          {SubheadIcon && (
            <SubheadIcon className="w-3 h-3 shrink-0" />
          )}
          <span>{item.institution}</span>
        </div>

        {/* Short descriptive paragraph */}
        <p className="text-[11.5px] sm:text-[12.5px] text-[#C4B6AE] leading-relaxed mb-2.5 font-normal">
          {item.description}
        </p>

        {/* Thin divider separating description from achievement list */}
        <div className="h-[1px] w-full bg-[#2A1D17]/70 mb-2.5" />

        {/* Three concise milestone bullet points */}
        <div className="space-y-1 pt-0.5">
          {item.focusPoints.map((point, idx) => (
            <div 
              key={idx} 
              className="flex items-start text-[11px] sm:text-[12px] text-[#C4B6AE]"
            >
              <span 
                className="mr-1.5 text-xs leading-none shrink-0 mt-0.5"
                style={{ color: config.bulletColor }}
              >
                •
              </span>
              <span className="leading-snug">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Journey = () => {
  return (
    <section id="journey" className="relative py-16 sm:py-24">
      <div className="container-custom relative z-10">

        {/* Section Heading: Centered "Learning" in white, "Journey" in bold orange, 2-line subtitle below */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Learning <span className="text-gradient-orange drop-shadow-[0_0_24px_rgba(255,90,31,0.45)]">Journey</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#C4B6AE] max-w-lg mx-auto leading-relaxed">
            My academic education at Wollo University and technical milestones as an aspiring full-stack developer.
          </p>
        </div>

        {/* Main Central Timeline Area with plenty of open negative space */}
        <div className="relative max-w-4xl mx-auto">

          {/* Central Vertical Glowing Line */}
          <div 
            className="absolute top-2 bottom-2 left-5 md:left-1/2 -translate-x-1/2 w-[2px] rounded-full pointer-events-none z-0"
            style={{
              background: 'linear-gradient(180deg, #FF5A1F 0%, #FF7A36 20%, #00D8FF 40%, #00D8FF 55%, #FF7A36 75%, #FF5A1F 100%)',
              boxShadow: '0 0 12px rgba(255, 90, 31, 0.55), 0 0 4px rgba(255, 122, 54, 0.7)'
            }}
          />

          {/* Sequential Alternating Rows (Left -> Down Right -> Down Left -> Down Right) */}
          <div className="space-y-12 sm:space-y-16 relative z-10">

            {/* =========================================================
                ROW 1: Card 1 (First card on the LEFT side)
                ========================================================= */}
            <div className="relative flex flex-col md:flex-row items-start">
              {/* Card 1 on Left: Compact width (max 370px) aligned to center rail */}
              <div className="w-full md:w-1/2 flex justify-start md:justify-end md:pr-7 pl-10 md:pl-0">
                <div className="w-full max-w-[370px]">
                  <JourneyCard index={0} isLeft={true} />
                </div>
              </div>

              {/* Node 1 on Central Timeline */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-6 z-20">
                <TimelineNode type={cardConfigs[0].nodeType} />
              </div>

              {/* Spacer on Right */}
              <div className="hidden md:block md:w-1/2" />
            </div>

            {/* Intermediate Dot 1 between Card 1 and Card 2 */}
            <div className="hidden md:flex justify-center -my-3 relative z-10 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-[#FF7A36] shadow-[0_0_8px_#FF7A36] border border-[#FFA066]/60" />
            </div>

            {/* =========================================================
                ROW 2: Card 2 (Move DOWN RIGHT and put the next card)
                ========================================================= */}
            <div className="relative flex flex-col md:flex-row items-start">
              {/* Spacer on Left */}
              <div className="hidden md:block md:w-1/2" />

              {/* Node 2 on Central Timeline (Active Specialization) */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-6 z-20">
                <TimelineNode type={cardConfigs[1].nodeType} />
              </div>

              {/* Card 2 on Right: Compact width (max 370px) aligned to center rail */}
              <div className="w-full md:w-1/2 flex justify-start md:pl-7 pl-10">
                <div className="w-full max-w-[370px]">
                  <JourneyCard index={1} isLeft={false} />
                </div>
              </div>
            </div>

            {/* Intermediate Dot 2 between Card 2 and Card 3 */}
            <div className="hidden md:flex justify-center -my-3 relative z-10 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-[#FF7A36] shadow-[0_0_8px_#FF7A36] border border-[#FFA066]/60" />
            </div>

            {/* =========================================================
                ROW 3: Card 3 (Move DOWN LEFT and put the third card)
                ========================================================= */}
            <div className="relative flex flex-col md:flex-row items-start">
              {/* Card 3 on Left: Compact width (max 370px) aligned to center rail */}
              <div className="w-full md:w-1/2 flex justify-start md:justify-end md:pr-7 pl-10 md:pl-0">
                <div className="w-full max-w-[370px]">
                  <JourneyCard index={2} isLeft={true} />
                </div>
              </div>

              {/* Node 3 on Central Timeline */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-6 z-20">
                <TimelineNode type={cardConfigs[2].nodeType} />
              </div>

              {/* Spacer on Right */}
              <div className="hidden md:block md:w-1/2" />
            </div>

            {/* Intermediate Dot 3 between Card 3 and Card 4 */}
            <div className="hidden md:flex justify-center -my-3 relative z-10 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-[#FF7A36] shadow-[0_0_8px_#FF7A36] border border-[#FFA066]/60" />
            </div>

            {/* =========================================================
                ROW 4: Card 4 (Move DOWN RIGHT and fourth one on right side)
                ========================================================= */}
            <div className="relative flex flex-col md:flex-row items-start">
              {/* Spacer on Left */}
              <div className="hidden md:block md:w-1/2" />

              {/* Node 4 on Central Timeline */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-6 z-20">
                <TimelineNode type={cardConfigs[3].nodeType} />
              </div>

              {/* Card 4 on Right: Compact width (max 370px) aligned to center rail */}
              <div className="w-full md:w-1/2 flex justify-start md:pl-7 pl-10">
                <div className="w-full max-w-[370px]">
                  <JourneyCard index={3} isLeft={false} />
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom "SCROLL TO EXPLORE 👆" Indicator */}
        <div className="mt-14 sm:mt-18 flex items-center justify-center gap-2 text-center select-none text-[10.5px] font-mono tracking-widest text-[#8E7D75] uppercase font-bold">
          <span>SCROLL TO EXPLORE</span>
          <span className="text-sm">👆</span>
        </div>

      </div>
    </section>
  );
};

export default Journey;




