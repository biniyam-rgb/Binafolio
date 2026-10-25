import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  ExternalLink,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
  User,
  Loader2,
  CheckCircle2,
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TelegramIcon } from './TechIcons';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';

const socialChannels = [
  {
    name: 'GitHub',
    handle: personalData.contact.githubUsername || 'biniyam-rgb',
    tag: 'Code & Repos',
    href: personalData.contact.github,
    icon: GithubIcon,
    accent: '#FF7A36',
    borderHover: 'hover:border-[#FF5A1F]',
    glowClass: 'hover:shadow-[0_0_28px_rgba(255,90,31,0.4)]'
  },
  {
    name: 'Telegram',
    handle: personalData.contact.telegramUsername || '@bini2_3',
    tag: 'Direct Chat',
    href: personalData.contact.telegram,
    icon: TelegramIcon,
    accent: '#00D8FF',
    borderHover: 'hover:border-[#00D8FF]',
    glowClass: 'hover:shadow-[0_0_28px_rgba(0,216,255,0.4)]'
  },
  {
    name: 'LinkedIn',
    handle: 'Biniyam Gebrie',
    tag: 'Network',
    href: personalData.contact.linkedin,
    icon: LinkedinIcon,
    accent: '#0A66C2',
    borderHover: 'hover:border-[#0A66C2]',
    glowClass: 'hover:shadow-[0_0_28px_rgba(10,102,194,0.4)]'
  }
];

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedData, setSubmittedData] = useState({ name: '', email: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.contact.email);
    setCopied(true);

    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#FF5A1F', '#FF7A36', '#00D8FF', '#FFFFFF']
      });
    } catch {
      // ignore in environments without canvas
    }

    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalData.contact.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          _subject: `Portfolio Message from ${name.trim()}`,
          message: message.trim(),
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json().catch(() => ({}));

      // Accept HTTP 200 or FormSubmit activation notice on initial submission
      if (
        response.ok ||
        data.success === 'true' ||
        data.success === true ||
        (data.message && data.message.includes('Activation'))
      ) {
        setSubmittedData({ name: name.trim(), email: email.trim() });
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');

        try {
          confetti({
            particleCount: 55,
            spread: 70,
            origin: { y: 0.65 },
            colors: ['#FF5A1F', '#FF7A36', '#00D8FF', '#10B981', '#FFFFFF']
          });
        } catch {
          // ignore in environments without canvas
        }
      } else {
        throw new Error(data.message || 'Unable to send message right now. Please try again.');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setErrorMessage(
        err.message || 'Network error: could not send message directly. Please verify connection or try again.'
      );
      setStatus('error');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  const fallbackMailto = `mailto:${personalData.contact.email}?subject=${encodeURIComponent(
    `Portfolio Message from ${name || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `From: ${name} (${email})\n\nMessage:\n${message}`
  )}`;

  return (
    <section id="contact" className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background Warm Ambient Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 90, 31, 0.15) 0%, rgba(125, 41, 14, 0.06) 50%, transparent 75%)',
          filter: 'blur(95px)',
          transform: 'translateZ(0)'
        }}
      />

      <div className="container-custom relative z-10">

        {/* Section Header: Minimal, crisp, animated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-xl mx-auto mb-10 sm:mb-12"
        >
          <div className="badge-orange-pill mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Let's <span className="text-gradient-orange drop-shadow-[0_0_25px_rgba(255,90,31,0.5)]">Connect</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[#C4B6AE]">
            Open for software engineering opportunities, projects, and collaborations.
          </p>
        </motion.div>

        {/* Contact Layout: 2 Columns */}
        <div className="contact-grid-layout max-w-5xl mx-auto items-stretch">

          {/* Left Column: Email & Direct Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 flex flex-col justify-between"
          >

            {/* 1. Email Card with Confetti Copy & Launch */}
            <div className="contact-interactive-card portfolio-card p-5 sm:p-6 bg-[#120B08]/90 border-[#3A241C] hover:border-[#FF7A36] hover:shadow-[0_0_30px_rgba(255,90,31,0.25)] group">
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF5A1F]/15 border border-[#FF5A1F]/35 text-[#FF5A1F] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#FFA066] transition-colors">Direct Email</h3>
                    <span className="text-[11px] font-mono text-[#8E7D75]">Primary Inbox</span>
                  </div>
                </div>

                <span className="flex items-center gap-1.5 text-[10.5px] font-mono text-[#10B981] px-2 py-0.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                  <span>Available</span>
                </span>
              </div>

              {/* Email Address Pill */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#090605] border border-[#2E1A12] mb-3 flex items-center justify-between gap-2 group-hover:border-[#FF5A1F]/40 transition-colors">
                <span className="font-mono text-xs sm:text-[13px] text-white truncate select-all font-medium pl-1">
                  {personalData.contact.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="shrink-0 px-3 py-1.5 rounded-lg bg-[#180E0A] border border-[#3A241C] text-[#FF7A36] hover:bg-[#FF5A1F] hover:text-white hover:border-[#FF7A36] hover:shadow-[0_0_12px_rgba(255,90,31,0.5)] transition-all flex items-center gap-1.5 text-xs font-mono font-bold active:scale-95 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-white" />
                      <span className="text-white">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${personalData.contact.email}`}
                className="btn-primary-orange text-xs !py-2.5 w-full text-center flex items-center justify-center gap-2 group/btn"
              >
                <span>Open In Mail App</span>
                <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>

            {/* 2. Direct Social Channels (Animated Cards with Hover Glows) */}
            <div className="portfolio-card p-5 sm:p-6 bg-[#120B08]/90 border-[#3A241C] space-y-3">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <MessageSquare className="h-3.5 w-3.5 text-[#FF7A36]" />
                  <span>Social Profiles</span>
                </h3>
                <span className="text-[10px] font-mono text-[#8E7D75]">
                  Instant Links
                </span>
              </div>

              <div className="space-y-2">
                {socialChannels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <a
                      key={channel.name}
                      href={channel.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`contact-interactive-card flex items-center justify-between p-3 rounded-xl bg-[#090605] border border-[#2A1810] text-[#C4B6AE] hover:text-white ${channel.borderHover} ${channel.glowClass} hover:-translate-y-1 hover:scale-[1.015] transition-all duration-300 group select-none`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-115 group-hover:rotate-6"
                          style={{
                            background: `${channel.accent}15`,
                            border: `1px solid ${channel.accent}40`,
                            color: channel.accent
                          }}
                        >
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white group-hover:text-white transition-colors">
                              {channel.name}
                            </span>
                            <span className="text-[10px] font-mono text-[#8E7D75] px-1.5 py-0.5 rounded bg-[#140C09] border border-[#2E1A12]">
                              {channel.tag}
                            </span>
                          </div>
                          <div className="text-[11px] font-mono text-[#8E7D75] group-hover:text-[#FFA066] transition-colors">
                            {channel.handle}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <div className="p-1 rounded-md bg-[#140C09] border border-[#2E1A12] group-hover:border-[#FF5A1F]/60 transition-colors">
                          <ArrowUpRight className="h-3.5 w-3.5 text-[#8E7D75] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Campus Location Tag */}
              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-[#8E7D75]">
                <MapPin className="h-3 w-3 text-[#FF5A1F] shrink-0" />
                <span>Wollo University, Ethiopia</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Direct Message Launcher */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="h-full"
          >
            <div className="contact-interactive-card portfolio-card p-6 sm:p-7 bg-[#120B08]/90 border-[#3A241C] hover:border-[#FF7A36]/60 hover:shadow-[0_0_35px_rgba(255,90,31,0.2)] transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>Send a Message</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                        Direct On-Site
                      </span>
                    </h3>
                    <p className="mt-0.5 text-xs text-[#8E7D75]">
                      Drop a note directly to my inbox without leaving this portfolio.
                    </p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FF5A1F]/15 border border-[#FF5A1F]/30 text-[#FF5A1F]">
                    <Send className="h-4 w-4" />
                  </div>
                </div>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="py-8 text-center flex flex-col items-center justify-center space-y-4"
                  >
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] shadow-[0_0_25px_rgba(16,185,129,0.35)]">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <Sparkles className="w-4 h-4 text-[#FF7A36] absolute -top-1 -right-1 animate-pulse" />
                    </div>

                    <div className="max-w-sm">
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        Message Sent Successfully!
                      </h4>
                      <p className="mt-1.5 text-xs text-[#C4B6AE] leading-relaxed">
                        Thank you, <span className="text-white font-semibold">{submittedData.name || 'there'}</span>! Your message has been sent directly to Biniyam. A reply will be sent to <span className="text-[#FFA066] font-mono">{submittedData.email}</span>.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-2 px-4 py-2 rounded-xl bg-[#180E0A] border border-[#3A241C] text-xs font-mono text-[#FF7A36] hover:bg-[#FF5A1F] hover:text-white hover:border-[#FF7A36] hover:shadow-[0_0_15px_rgba(255,90,31,0.4)] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Send Another Message</span>
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    {/* Name & Email Inputs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-[#C4B6AE] mb-1 flex items-center gap-1.5">
                          <User className="h-3 w-3 text-[#FF5A1F]" />
                          <span>Name</span>
                          <span className="text-[#FF5A1F]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Biniyam"
                          className="contact-input text-xs sm:text-sm"
                          disabled={status === 'submitting'}
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-[#C4B6AE] mb-1 flex items-center gap-1.5">
                          <Mail className="h-3 w-3 text-[#FF5A1F]" />
                          <span>Email</span>
                          <span className="text-[#FF5A1F]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. bini@gmail.com"
                          className="contact-input text-xs sm:text-sm"
                          disabled={status === 'submitting'}
                        />
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#C4B6AE] mb-1 flex items-center gap-1.5">
                        <MessageSquare className="h-3 w-3 text-[#FF5A1F]" />
                        <span>Message</span>
                        <span className="text-[#FF5A1F]">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Hi Biniyam, I'd like to talk about a full-stack project or collaboration..."
                        className="contact-textarea text-xs sm:text-sm"
                        style={{ resize: 'none' }}
                        disabled={status === 'submitting'}
                      />
                    </div>

                    {/* Error Banner */}
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs flex items-start justify-between gap-2"
                      >
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                          <p className="leading-relaxed text-[11px]">
                            {errorMessage}
                          </p>
                        </div>
                        <a
                          href={fallbackMailto}
                          className="shrink-0 underline text-red-300 hover:text-white font-mono text-[11px]"
                        >
                          Open Mail
                        </a>
                      </motion.div>
                    )}

                    <div className="pt-3 mt-3 border-t border-[#2A1810]">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="btn-primary-orange w-full text-xs !py-3 inline-flex items-center justify-center gap-2 group font-bold shadow-[0_0_20px_rgba(255,90,31,0.4)] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer transition-all"
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin text-white" />
                            <span>Sending Directly...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message Directly</span>
                            <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </>
                        )}
                      </button>
                      <div className="mt-2 text-center text-[10.5px] font-mono text-[#8E7D75]">
                        Delivered directly to inbox • Stays on portfolio
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
