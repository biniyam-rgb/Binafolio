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
    nodeType: 'target-orange'
  },
  {
    cardClass: 'journey-card-2',
    notchColor: '#00D8FF',
    dotColor: '#FF7A36',
    subheadColor: '#00D8FF',
    bulletColor: '#FF7A36',
    subheadIcon: Monitor,
    nodeType: 'target-cyan'
  },
  {
    cardClass: 'journey-card-3',
    notchColor: 'rgba(70, 42, 32, 0.9)',
    dotColor: '#FF7A36',
    subheadColor: '#FF7A36',
    bulletColor: '#FF7A36',
    subheadIcon: Wrench,
    nodeType: 'git-branch'
  },
  {
    cardClass: 'journey-card-4',
    notchColor: 'rgba(85, 48, 36, 0.9)',
    dotColor: '#FF7A36',
    subheadColor: '#FF5A1F',
    bulletColor: '#FF5A1F',
    subheadIcon: Rocket,
    nodeType: 'rocket'
  }
];

// Timeline Node Component strictly matching reference visual specifications
const TimelineNode = ({ type }) => {
  // Node 1: Warm orange target node with glowing center
  if (type === 'target-orange') {
    return (
      <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#180B07] border-2 border-[#FF5A1F] shadow-[0_0_20px_rgba(255,90,31,0.85)] z-20">
        <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#FFA066] via-[#FF5A1F] to-[#E64A19] shadow-[0_0_10px_#FF7A36]" />
      </div>
    );
  }

  // Node 2: Brighter cyan-and-orange highlighted node (active specialization)
  if (type === 'target-cyan') {
    return (
      <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#08151A] border-2 border-[#00D8FF] shadow-[0_0_24px_rgba(0,216,255,0.92)] z-20">
        <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#A5F3FC] via-[#00D8FF] to-[#FF7A36] shadow-[0_0_12px_#00D8FF]" />
      </div>
    );
  }

  // Node 3: Small Git Branch icon node matching reference screenshot
  if (type === 'git-branch') {
    return (
      <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#180E0A] border-2 border-[#FF5A1F]/80 shadow-[0_0_16px_rgba(255,90,31,0.45)] z-20">
        <GitBranch className="w-4 h-4 text-[#FF7A36]" strokeWidth={2.3} />
      </div>
    );
  }

  // Node 4: Rocket icon around the fourth milestone
  return (
    <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#180E0A] border-2 border-[#FF5A1F] shadow-[0_0_18px_rgba(255,90,31,0.55)] z-20">
      <Rocket className="w-4 h-4 text-[#FF7A36]" strokeWidth={2.2} />
    </div>
  );
};

// Single Journey Card Component (No animation, solid and clean)
const JourneyCard = ({ index, isLeft }) => {
  const item = journeyData[index];
  const config = cardConfigs[index];
  const SubheadIcon = config.subheadIcon;

  return (
    <div className={`${config.cardClass} group relative p-6 sm:p-7 select-none overflow-visible cursor-default`}>
      {/* 1. Speech Bubble Triangular Pointer Notch */}
      {isLeft ? (
        /* Desktop: Pointer Notch on Right pointing right towards center timeline node */
        <svg 
          className="hidden md:block absolute -right-[16px] top-[36px] w-[18px] h-[18px] pointer-events-none z-20"
          viewBox="0 0 18 18" 
          fill="none"
        >
          <path 
            d="M 0 0 L 16 9 L 0 18 Z" 
            fill="#0C0806" 
            stroke={config.notchColor}
            strokeWidth="1.5"
          />
          <line x1="0" y1="1" x2="0" y2="17" stroke="#0C0806" strokeWidth="2.5" />
        </svg>
      ) : (
        /* Desktop: Pointer Notch on Left pointing left towards center timeline node */
        <svg 
          className="hidden md:block absolute -left-[16px] top-[36px] w-[18px] h-[18px] pointer-events-none z-20"
          viewBox="0 0 18 18" 
          fill="none"
        >
          <path 
            d="M 18 0 L 2 9 L 18 18 Z" 
            fill="#0C0806" 
            stroke={config.notchColor}
            strokeWidth="1.5"
          />
          <line x1="18" y1="1" x2="18" y2="17" stroke="#0C0806" strokeWidth="2.5" />
        </svg>
      )}

      {/* Mobile: Pointer Notch on Left pointing left to the mobile timeline rail */}
      <svg 
        className="block md:hidden absolute -left-[14px] top-[36px] w-[15px] h-[18px] pointer-events-none z-20"
        viewBox="0 0 15 18" 
        fill="none"
      >
        <path 
          d="M 15 0 L 2 9 L 15 18 Z" 
          fill="#0C0806" 
          stroke={config.notchColor}
          strokeWidth="1.5"
        />
        <line x1="15" y1="1" x2="15" y2="17" stroke="#0C0806" strokeWidth="2.5" />
      </svg>

      {/* 2. Top Specular Accent Highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none rounded-t-[20px]" />

      {/* Card Content strictly matching reference requirements */}
      <div>
        {/* Top Header Row: Small outlined category label at top-left, Status & colored indicator at top-right */}
        <div className="flex items-center justify-between mb-2 gap-2">
          <span className="text-[11px] sm:text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-[#160E0A]/90 border border-[#3A241C] text-[#C4B6AE] tracking-wide select-none">
            {item.badge}
          </span>

          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-[#C4B6AE]">
            <span 
              className="w-2 h-2 rounded-full"
              style={{ background: config.dotColor, boxShadow: `0 0 6px ${config.dotColor}` }}
            />
            <span className="font-medium tracking-wide">{item.period}</span>
          </div>
        </div>

        {/* Clear, bold title */}
        <h3 className="text-xl sm:text-[22px] font-extrabold text-white tracking-tight mt-2.5 mb-1.5">
          {item.title}
        </h3>

        {/* Supporting label / Subtitle with dedicated icon */}
        <div 
          className="flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wide mb-3"
          style={{ color: config.subheadColor }}
        >
          {SubheadIcon && (
            <SubheadIcon className="w-3.5 h-3.5 shrink-0" />
          )}
          <span>{item.institution}</span>
        </div>

        {/* Short descriptive paragraph */}
        <p className="text-xs sm:text-[13.5px] text-[#C4B6AE] leading-relaxed mb-3.5 font-normal">
          {item.description}
        </p>

        {/* Thin divider separating description from achievement list */}
        <div className="h-[1px] w-full bg-[#2A1D17]/80 mb-3" />

        {/* Three concise milestone bullet points */}
        <div className="space-y-1.5 pt-0.5">
          {item.focusPoints.map((point, idx) => (
            <div 
              key={idx} 
              className="flex items-start text-xs sm:text-[13px] text-[#C4B6AE]"
            >
              <span 
                className="mr-2 text-sm leading-none shrink-0 mt-0.5"
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
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Learning <span className="text-gradient-orange drop-shadow-[0_0_24px_rgba(255,90,31,0.45)]">Journey</span>
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#C4B6AE] max-w-xl mx-auto leading-relaxed">
            My academic education at Wollo University and technical milestones as an aspiring full-stack developer.
          </p>
        </div>

        {/* Main Central Timeline Area */}
        <div className="relative max-w-5xl mx-auto">

          {/* Central Vertical Glowing Line with subtle orange-to-teal variations */}
          <div 
            className="absolute top-6 bottom-6 left-5 md:left-1/2 -translate-x-1/2 w-[2.5px] rounded-full pointer-events-none z-0"
            style={{
              background: 'linear-gradient(180deg, #FF5A1F 0%, #FF7A36 20%, #00D8FF 40%, #00D8FF 55%, #FF7A36 75%, #FF5A1F 100%)',
              boxShadow: '0 0 14px rgba(255, 90, 31, 0.6), 0 0 4px rgba(255, 122, 54, 0.8)'
            }}
          />

          {/* Sequential Alternating Rows (Left -> Down Right -> Down Left -> Down Right) */}
          <div className="space-y-12 sm:space-y-16 relative z-10">

            {/* =========================================================
                ROW 1: Card 1 (First card on the LEFT side)
                ========================================================= */}
            <div className="relative flex flex-col md:flex-row items-center md:items-start">
              {/* Card 1 on Left */}
              <div className="w-full md:w-[calc(50%-2.5rem)] md:mr-auto pl-10 md:pl-0">
                <JourneyCard index={0} isLeft={true} />
              </div>

              {/* Node 1 on Central Timeline */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-8 z-20">
                <TimelineNode type={cardConfigs[0].nodeType} />
              </div>

              {/* Spacer on Right */}
              <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
            </div>

            {/* Intermediate Dot 1 between Card 1 and Card 2 */}
            <div className="hidden md:flex justify-center -my-3 relative z-10 pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A36] shadow-[0_0_8px_#FF7A36] border border-[#FFA066]/60" />
            </div>

            {/* =========================================================
                ROW 2: Card 2 (Move DOWN RIGHT and put the next card)
                ========================================================= */}
            <div className="relative flex flex-col md:flex-row items-center md:items-start">
              {/* Spacer on Left */}
              <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />

              {/* Node 2 on Central Timeline (Active Specialization) */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-8 z-20">
                <TimelineNode type={cardConfigs[1].nodeType} />
              </div>

              {/* Card 2 on Right */}
              <div className="w-full md:w-[calc(50%-2.5rem)] md:ml-auto pl-10 md:pl-0">
                <JourneyCard index={1} isLeft={false} />
              </div>
            </div>

            {/* Intermediate Dot 2 between Card 2 and Card 3 */}
            <div className="hidden md:flex justify-center -my-3 relative z-10 pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00D8FF] shadow-[0_0_8px_#00D8FF] border border-[#A5F3FC]/60" />
            </div>

            {/* =========================================================
                ROW 3: Card 3 (Move DOWN LEFT and put the third card)
                ========================================================= */}
            <div className="relative flex flex-col md:flex-row items-center md:items-start">
              {/* Card 3 on Left */}
              <div className="w-full md:w-[calc(50%-2.5rem)] md:mr-auto pl-10 md:pl-0">
                <JourneyCard index={2} isLeft={true} />
              </div>

              {/* Node 3 on Central Timeline */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-8 z-20">
                <TimelineNode type={cardConfigs[2].nodeType} />
              </div>

              {/* Spacer on Right */}
              <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
            </div>

            {/* Intermediate Dot 3 between Card 3 and Card 4 */}
            <div className="hidden md:flex justify-center -my-3 relative z-10 pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A36] shadow-[0_0_8px_#FF7A36] border border-[#FFA066]/60" />
            </div>

            {/* =========================================================
                ROW 4: Card 4 (Move DOWN RIGHT and fourth one on right side)
                ========================================================= */}
            <div className="relative flex flex-col md:flex-row items-center md:items-start">
              {/* Spacer on Left */}
              <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />

              {/* Node 4 on Central Timeline */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-8 z-20">
                <TimelineNode type={cardConfigs[3].nodeType} />
              </div>

              {/* Card 4 on Right */}
              <div className="w-full md:w-[calc(50%-2.5rem)] md:ml-auto pl-10 md:pl-0">
                <JourneyCard index={3} isLeft={false} />
              </div>
            </div>

          </div>

        </div>

        {/* Bottom "SCROLL TO EXPLORE 👆" Indicator strictly matching reference image */}
        <div className="mt-14 sm:mt-20 flex items-center justify-center gap-2 text-center select-none text-[11px] font-mono tracking-widest text-[#8E7D75] uppercase font-bold">
          <span>SCROLL TO EXPLORE</span>
          <span className="text-sm">👆</span>
        </div>

      </div>
    </section>
  );
};

export default Journey;



