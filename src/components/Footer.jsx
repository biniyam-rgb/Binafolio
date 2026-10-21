import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './TechIcons';
import { personalData } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#3A241C] bg-[#0A0706] py-12 text-[#C4B6AE]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Name */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              className="text-xl font-extrabold tracking-tight text-[#F5F0EC] group inline-flex items-center gap-1.5"
            >
              <span>bina<span className="text-[#FF5A1F]">.</span>folio</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" />
            </a>
            <p className="mt-1 text-xs text-[#8E7D75]">
              Designed &amp; built for <strong className="text-[#F5F0EC]">{personalData.name}</strong> • Software Engineering, Wollo University
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#140C09] border border-[#3A241C] text-[#C4B6AE] hover:text-[#FF7A36] hover:border-[#FF5A1F] transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>

              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#140C09] border border-[#3A241C] text-[#C4B6AE] hover:text-[#FF7A36] hover:border-[#FF5A1F] transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>

              <a
                href={`mailto:${personalData.contact.email}`}
                className="p-2.5 rounded-full bg-[#140C09] border border-[#3A241C] text-[#C4B6AE] hover:text-[#FF7A36] hover:border-[#FF5A1F] transition-all"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#1C110D] border border-[#3A241C] text-[#C4B6AE] hover:text-white hover:bg-[#FF5A1F] hover:border-[#FF5A1F] transition-all group"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="mt-8 pt-6 border-t border-[#3A241C]/40 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#8E7D75] gap-3">
          <div>
            &copy; {new Date().getFullYear()} BinaFolio. All rights reserved.
          </div>
          <div>
            Dark Orange &amp; Near-Black Aesthetic • React &amp; Motion
          </div>
        </div>
      </div>
    </footer>
  );
};
