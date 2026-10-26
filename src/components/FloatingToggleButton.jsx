import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Power, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

/**
 * FloatingToggleButton
 * Sleek floating toggle button positioned in the bottom corner of the screen.
 * Switches between:
 *  - OFF: Dark Gray (#1E1E24) with muted silver accents
 *  - ON:  Glowing Orange (#FF5A1F) with luminous neon drop-shadow and white accents
 */
export const FloatingToggleButton = ({ onToggle }) => {
  const [isOn, setIsOn] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_floating_toggle');
      return saved !== null ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('portfolio_floating_toggle', JSON.stringify(isOn));
    } catch {
      // ignore storage errors
    }

    // Broadcast change for other components if needed
    window.dispatchEvent(
      new CustomEvent('floating-toggle-change', { detail: { isOn } })
    );

    if (onToggle) {
      onToggle(isOn);
    }
  }, [isOn, onToggle]);

  const handleToggle = () => {
    const nextState = !isOn;
    setIsOn(nextState);

    // If toggled ON, emit a subtle confetti celebration burst
    if (nextState) {
      try {
        confetti({
          particleCount: 28,
          spread: 45,
          origin: { x: 0.9, y: 0.88 },
          colors: ['#FF5A1F', '#FF7A36', '#FFA26B', '#FFFFFF'],
          ticks: 120,
          gravity: 1.2,
          scalar: 0.8
        });
      } catch {
        // canvas-confetti fallback
      }
    }
  };

  return (
    <aside
      aria-label="Floating toggle controls"
      className="fixed bottom-6 right-6 z-50 select-none flex flex-col items-end pointer-events-auto"
    >
      {/* Mini Floating Tooltip on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="mb-2 px-3 py-1 rounded-lg text-[11px] font-mono tracking-wide shadow-xl backdrop-blur-md pointer-events-none whitespace-nowrap border"
            style={{
              backgroundColor: isOn ? '#1A0C06' : '#141418',
              borderColor: isOn ? 'rgba(255, 90, 31, 0.45)' : 'rgba(255, 255, 255, 0.12)',
              color: isOn ? '#FFA26B' : '#B0B0C0',
              boxShadow: isOn
                ? '0 4px 18px rgba(255, 90, 31, 0.3)'
                : '0 4px 18px rgba(0, 0, 0, 0.6)'
            }}
          >
            <div className="flex items-center gap-1.5">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: isOn ? '#FF5A1F' : '#6A6A7A' }}
              />
              <span>{isOn ? 'Toggle Active: Glowing Orange (#FF5A1F)' : 'Toggle Inactive: Dark Gray (#1E1E24)'}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Interactive Floating Toggle Button */}
      <motion.button
        type="button"
        role="switch"
        aria-checked={isOn}
        aria-label={`Toggle mode: ${isOn ? 'ON (Glowing Orange)' : 'OFF (Dark Gray)'}`}
        onClick={handleToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.93 }}
        transition={{ type: 'spring', stiffness: 450, damping: 25 }}
        className="group relative flex items-center gap-3 px-3.5 py-2.5 rounded-full border cursor-pointer outline-none transition-colors duration-300 backdrop-blur-xl"
        style={{
          backgroundColor: isOn ? '#FF5A1F' : '#1E1E24',
          borderColor: isOn ? '#FF8E55' : '#33333E',
          boxShadow: isOn
            ? '0 0 26px rgba(255, 90, 31, 0.7), 0 8px 30px rgba(255, 90, 31, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.4)'
            : '0 8px 24px rgba(0, 0, 0, 0.65), inset 0 1px 1px rgba(255, 255, 255, 0.08)'
        }}
      >
        {/* Pulsing Aura Ring when ON */}
        {isOn && (
          <span
            className="absolute inset-0 rounded-full animate-ping pointer-events-none opacity-40"
            style={{ backgroundColor: '#FF5A1F' }}
          />
        )}

        {/* Dynamic Icon */}
        <div
          className="flex items-center justify-center transition-transform duration-300 group-hover:rotate-12"
          style={{ color: isOn ? '#FFFFFF' : '#8E8E9E' }}
        >
          {isOn ? (
            <Zap className="h-4 w-4 fill-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          ) : (
            <Power className="h-4 w-4" />
          )}
        </div>

        {/* Status Text Label */}
        <div className="flex flex-col items-start leading-none pr-1">
          <span
            className="text-[10px] font-mono uppercase tracking-wider font-semibold transition-colors duration-200"
            style={{ color: isOn ? 'rgba(255, 255, 255, 0.85)' : '#7A7A8A' }}
          >
            Mode
          </span>
          <span
            className="text-xs font-black tracking-wider transition-colors duration-200"
            style={{
              color: isOn ? '#FFFFFF' : '#D0D0DE',
              textShadow: isOn ? '0 0 10px rgba(255, 255, 255, 0.6)' : 'none'
            }}
          >
            {isOn ? 'ON' : 'OFF'}
          </span>
        </div>

        {/* Sliding Pill Track & Knob */}
        <div
          className="relative w-12 h-6 rounded-full p-0.5 flex items-center transition-colors duration-300"
          style={{
            backgroundColor: isOn ? '#C84411' : '#141418',
            border: isOn ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid #2B2B36'
          }}
        >
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className="h-5 w-5 rounded-full flex items-center justify-center shadow-md"
            style={{
              backgroundColor: isOn ? '#FFFFFF' : '#3A3A46',
              boxShadow: isOn
                ? '0 0 10px #FFFFFF, 0 2px 6px rgba(0,0,0,0.3)'
                : '0 2px 4px rgba(0,0,0,0.5)',
              marginLeft: isOn ? 'auto' : '0'
            }}
          >
            {/* Knob inner detail dot */}
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: isOn ? '#FF5A1F' : '#6A6A7A' }}
            />
          </motion.div>
        </div>
      </motion.button>
    </aside>
  );
};

export default FloatingToggleButton;
