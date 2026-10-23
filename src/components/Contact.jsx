import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, MapPin, Sparkles, ExternalLink, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './TechIcons';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.contact.email);
    setCopied(true);
    
    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#FF5A1F', '#FF7A36', '#FF9E66', '#FFFFFF']
      });
    } catch (e) {
      // ignore in environments without canvas
    }

    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoLink = `mailto:${personalData.contact.email}?subject=${encodeURIComponent(
    subject || 'Connecting regarding software opportunities'
  )}&body=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="relative py-14 sm:py-18 overflow-hidden">
      {/* Background Warm Radial Light */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 90, 31, 0.16) 0%, rgba(125, 41, 14, 0.08) 50%, transparent 75%)',
          filter: 'blur(90px)',
          transform: 'translateZ(0)'
        }}
      />

      <div className="container-custom relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="badge-orange-pill mb-3">
            <Mail className="h-3.5 w-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F5F0EC]">
            Let's Build <span className="text-gradient-orange">Something</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#C4B6AE]">
            I am always interested in discussing software engineering, web development projects, learning opportunities, and collaboration.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-grid-layout max-w-5xl mx-auto">
          
          {/* Left Column: Direct Connect & Configuration Notice */}
          <div className="space-y-5">
            
            {/* Email Card with One-Click Copy */}
            <div className="portfolio-card p-6 bg-[#140C09] border-[#3A241C] relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF5A1F]/15 border border-[#FF5A1F]/30 text-[#FF5A1F]">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#F5F0EC]">Email Communication</h3>
                  <span className="text-xs font-mono text-[#8E7D75]">Direct channel</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0A0706] border border-[#3A241C] mb-4 flex items-center justify-between gap-2">
                <span className="font-mono text-xs text-[#C4B6AE] truncate">
                  {personalData.contact.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="shrink-0 p-2 rounded-lg bg-[#1C110D] text-[#FF7A36] hover:bg-[#FF5A1F] hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <a
                  href={`mailto:${personalData.contact.email}`}
                  className="btn-primary-orange text-xs !py-2.5 !px-4 w-full text-center"
                >
                  <span>Open In Email Client</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Social & Code Platforms */}
            <div className="portfolio-card p-6 bg-[#140C09] border-[#3A241C] space-y-4">
              <h3 className="text-sm font-bold text-[#F5F0EC] mb-2 flex items-center justify-between">
                <span>Social Profiles</span>
                <span className="text-[11px] font-mono text-[#8E7D75]">Placeholders</span>
              </h3>

              {/* GitHub Link */}
              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#1C110D] border border-[#3A241C] text-[#C4B6AE] hover:text-white hover:border-[#FF5A1F] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon size={20} className="text-[#FF7A36]" />
                  <div>
                    <div className="text-xs font-bold text-[#F5F0EC]">GitHub</div>
                    <div className="text-[10px] font-mono text-[#8E7D75]">Repositories &amp; Code</div>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-[#8E7D75] group-hover:text-[#FF5A1F] transition-colors" />
              </a>

              {/* LinkedIn Link */}
              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#1C110D] border border-[#3A241C] text-[#C4B6AE] hover:text-white hover:border-[#FF5A1F] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon size={20} className="text-[#0A66C2]" />
                  <div>
                    <div className="text-xs font-bold text-[#F5F0EC]">LinkedIn</div>
                    <div className="text-[10px] font-mono text-[#8E7D75]">Professional Network</div>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-[#8E7D75] group-hover:text-[#FF5A1F] transition-colors" />
              </a>

              {/* Location Tag */}
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#8E7D75]">
                <MapPin className="h-3.5 w-3.5 text-[#FF5A1F]" />
                <span>{personalData.location}</span>
                <span className="text-[#3A241C]">•</span>
                <span>{personalData.university}</span>
              </div>
            </div>

            {/* Configuration Box for Biniyam */}
            <div className="rounded-xl border border-[#3A241C]/60 bg-[#1C110D]/50 p-4 text-xs text-[#8E7D75] flex items-start gap-2.5">
              <AlertCircle className="h-4 w-4 text-[#FF7A36] shrink-0 mt-0.5" />
              <p>
                <strong className="text-[#F5F0EC]">Developer Note:</strong> No fake contact form database is used. All contact links are configured in <code className="text-[#FF7A36]">src/data/portfolioData.js</code>.
              </p>
            </div>

          </div>

          {/* Right Column: Direct Mail Composer (Launches real mail client with prefilled text) */}
          <div>
            <div className="portfolio-card p-6 sm:p-8 bg-[#140C09] border-[#3A241C]">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#F5F0EC]">
                  Direct Email Launcher
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#8E7D75]">
                  Compose your note here to launch directly in your default email client with your message intact.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#C4B6AE] mb-1.5">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Inquiring about a Full-Stack Collaboration"
                    className="contact-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#C4B6AE] mb-1.5">
                    Message Body
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello Biniyam, I saw your portfolio and would like to discuss..."
                    className="contact-textarea"
                    style={{ resize: 'none' }}
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs font-mono text-[#8E7D75] text-center sm:text-left">
                    Opens mailto directly with no backend storage
                  </div>

                  <a
                    href={mailtoLink}
                    className="btn-primary-orange w-full sm:w-auto text-xs !py-3 !px-6 inline-flex items-center justify-center gap-2"
                  >
                    <span>Launch Email</span>
                    <Send className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
