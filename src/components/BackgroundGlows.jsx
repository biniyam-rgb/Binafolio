import React from 'react';

export const BackgroundGlows = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Intensely glowing, highly visible amber-orange square grid with vibrant intersection dots */}
      <div 
        className="absolute inset-0 opacity-90 hero-square-grid"
        style={{
          backgroundImage: `
            radial-gradient(circle at 0px 0px, rgba(255, 122, 54, 0.95) 2.2px, rgba(255, 90, 31, 0.45) 3.5px, transparent 4px),
            linear-gradient(to right, rgba(255, 90, 31, 0.24) 1.5px, transparent 1.5px),
            linear-gradient(to bottom, rgba(255, 90, 31, 0.24) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 40px 40px',
        }}
      />

      {/* 2. Radial focal lighting to enhance the grid's luminous amber warmth in the hero zone */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 25%, rgba(255, 90, 31, 0.16) 0%, rgba(255, 122, 54, 0.05) 50%, transparent 80%)',
        }}
      />

      {/* 3. Soft orange & peach radial glow behind left headline & copy */}
      <div 
        className="absolute top-[8%] -left-[6%] w-[680px] h-[680px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 90, 31, 0.28) 0%, rgba(255, 158, 102, 0.12) 40%, transparent 70%)',
          filter: 'blur(95px)',
          transform: 'translateZ(0)',
        }}
      />

      {/* 4. Ambient dual-tone neon orange/cyan backlight flare behind right terminal & orbit */}
      <div 
        className="absolute top-[2%] right-[-2%] w-[780px] h-[760px] rounded-full"
        style={{
          background: 'radial-gradient(circle at 35% 50%, rgba(255, 90, 31, 0.35) 0%, rgba(255, 122, 54, 0.14) 45%, transparent 72%), radial-gradient(circle at 75% 30%, rgba(0, 216, 255, 0.25) 0%, rgba(0, 216, 255, 0.08) 50%, transparent 70%)',
          filter: 'blur(90px)',
          transform: 'translateZ(0)',
        }}
      />

      {/* 5. Mid-page ambient warmth */}
      <div 
        className="absolute top-[45%] -right-[8%] w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 90, 31, 0.14) 0%, rgba(125, 41, 14, 0.05) 50%, transparent 75%)',
          filter: 'blur(100px)',
          transform: 'translateZ(0)',
        }}
      />

      {/* 6. Bottom contact area glow */}
      <div 
        className="absolute -bottom-[8%] left-[25%] w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 90, 31, 0.18) 0%, rgba(255, 122, 54, 0.06) 50%, transparent 75%)',
          filter: 'blur(100px)',
          transform: 'translateZ(0)',
        }}
      />
    </div>
  );
};

export default BackgroundGlows;
