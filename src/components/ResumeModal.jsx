import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, X, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-[#3A241C] bg-[#140C09] p-6 sm:p-8 shadow-2xl"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 35px -5px rgba(255, 90, 31, 0.2)"
            }}
          >
            {/* Ambient orange glow inside modal */}
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#FF5A1F]/15 blur-3xl pointer-events-none" />

            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF5A1F]/15 border border-[#FF5A1F]/30 text-[#FF5A1F]">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F5F0EC]">Resume Download</h3>
                  <span className="inline-block text-xs font-mono text-[#FF7A36] uppercase tracking-wider">
                    Configuration Notice
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-1.5 text-[#C4B6AE] hover:bg-[#1C110D] hover:text-white transition-colors"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 space-y-4 text-sm text-[#C4B6AE]">
              <div className="flex items-start gap-3 rounded-xl border border-[#3A241C] bg-[#1C110D] p-3.5">
                <AlertCircle className="h-5 w-5 text-[#FF7A36] shrink-0 mt-0.5" />
                <p>
                  As specified by <strong className="text-[#F5F0EC]">{personalData.name}</strong>, a fabricated resume file is not included. This download button is ready for your real CV!
                </p>
              </div>

              <div className="rounded-xl border border-[#3A241C]/60 bg-[#0A0706] p-4 font-mono text-xs">
                <div className="text-[#8E7D75] mb-2">// How to enable your resume:</div>
                <div className="text-[#F5F0EC] space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#FF5A1F]" />
                    <span>1. Export your CV as <span className="text-[#FF7A36]">resume.pdf</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#FF5A1F]" />
                    <span>2. Place it into the project's <span className="text-[#FF7A36]">/public/</span> folder</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#FF5A1F]" />
                    <span>3. In <span className="text-[#FF7A36]">portfolioData.js</span>, set <code className="text-[#61DAFB]">resumeAvailable: true</code></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col-reverse sm:flex-row items-center justify-end gap-3">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#3A241C] text-[#C4B6AE] hover:text-white hover:border-[#5A3629] text-sm font-medium transition-colors"
              >
                Got It
              </button>
              <a
                href="#contact"
                onClick={onClose}
                className="w-full sm:w-auto btn-primary-orange text-sm !py-2.5 !px-5 inline-flex items-center justify-center gap-2"
              >
                <span>Contact Biniyam Directly</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
