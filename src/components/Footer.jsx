import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TelegramIcon } from './TechIcons';
import { personalData } from '../data/portfolioData';

const currentYear = new Date().getFullYear();

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
              <span className="font-extrabold tracking-tight">
                <span className="text-[#FF7A36] drop-shadow-[0_0_8px_#FF5A1F]">Bina</span>
                <span className="text-white">Folio</span>
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F] shadow-[0_0_8px_#FF5A1F]" />
            </a>
            <p className="mt-1 text-xs text-[#8E7D75]">
              Designed &amp; built for <strong className="text-[#F5F0EC]">{personalData.name}</strong> • Software Engineering, Wollo University
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2.5">
              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#140C09] border border-[#3A241C] text-[#C4B6AE] hover:text-[#FF7A36] hover:border-[#FF5A1F] hover:shadow-[0_0_15px_rgba(255,90,31,0.4)] hover:-translate-y-1 hover:scale-110 transition-all duration-300"
                aria-label="GitHub Profile"
                title="GitHub: @biniyam-rgb"
              >
                <GithubIcon size={16} />
              </a>

              <a
                href={personalData.contact.telegram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#140C09] border border-[#3A241C] text-[#C4B6AE] hover:text-[#229ED9] hover:border-[#229ED9] hover:shadow-[0_0_15px_rgba(34,158,217,0.4)] hover:-translate-y-1 hover:scale-110 transition-all duration-300"
                aria-label="Telegram Direct"
                title="Telegram: @bini2_3"
              >
                <TelegramIcon size={16} />
              </a>

              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-[#140C09] border border-[#3A241C] text-[#C4B6AE] hover:text-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.4)] hover:-translate-y-1 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn Profile"
                title="LinkedIn: Biniyam Gebrie"
              >
                <LinkedinIcon size={16} />
              </a>

              <a
                href={`mailto:${personalData.contact.email}`}
                className="p-2.5 rounded-full bg-[#140C09] border border-[#3A241C] text-[#C4B6AE] hover:text-[#FF7A36] hover:border-[#FF5A1F] hover:shadow-[0_0_15px_rgba(255,90,31,0.4)] hover:-translate-y-1 hover:scale-110 transition-all duration-300"
                aria-label="Send Direct Email"
                title="Email: binigebrie853@gmail.com"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#1C110D] border border-[#3A241C] text-[#C4B6AE] hover:text-white hover:bg-[#FF5A1F] hover:border-[#FF5A1F] hover:shadow-[0_0_18px_rgba(255,90,31,0.5)] transition-all duration-300 group cursor-pointer"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="mt-8 pt-6 border-t border-[#3A241C]/40 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#8E7D75] gap-3">
          <div>
            &copy; {currentYear} BinaFolio. All rights reserved.
          </div>
          <div>
            Dark Orange &amp; Near-Black Aesthetic • React &amp; Motion
          </div>
        </div>
      </div>
    </footer>
  );
};
