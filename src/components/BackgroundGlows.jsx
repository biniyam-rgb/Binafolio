import React from 'react';

export const BackgroundGlows = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top Hero radial warm orange glow */}
      <div 
        className="absolute -top-[10%] -right-[5%] w-[680px] h-[680px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 90, 31, 0.18) 0%, rgba(125, 41, 14, 0.08) 45%, transparent 75%)',
          filter: 'blur(70px)',
          transform: 'translateZ(0)',
        }}
      />

      {/* Hero left subtle ambient warmth */}
      <div 
        className="absolute top-[18%] -left-[10%] w-[520px] h-[520px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 122, 54, 0.10) 0%, rgba(125, 41, 14, 0.04) 50%, transparent 75%)',
          filter: 'blur(90px)',
          transform: 'translateZ(0)',
        }}
      />

      {/* Mid page radial glow for projects */}
      <div 
        className="absolute top-[48%] -right-[15%] w-[620px] h-[620px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 90, 31, 0.12) 0%, rgba(125, 41, 14, 0.05) 50%, transparent 80%)',
          filter: 'blur(100px)',
          transform: 'translateZ(0)',
        }}
      />

      {/* Bottom contact glow */}
      <div 
        className="absolute -bottom-[10%] left-[20%] w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 90, 31, 0.15) 0%, rgba(125, 41, 14, 0.06) 50%, transparent 75%)',
          filter: 'blur(90px)',
          transform: 'translateZ(0)',
        }}
      />

      {/* Subtle geometric dot grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 122, 54, 0.9) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};
