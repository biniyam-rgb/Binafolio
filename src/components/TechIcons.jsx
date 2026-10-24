import React from 'react';

export const ReactIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={`transition-transform duration-700 ease-out group-hover:rotate-180 ${className}`}>
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" className="transition-transform duration-300 group-hover:scale-125 origin-center" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const LaravelIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none" className={`transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 ${className}`}>
    <path
      d="M45.5 12.3L26.6 1.4c-1-.6-2.2-.6-3.2 0L4.5 12.3c-1 .6-1.6 1.6-1.6 2.7v20c0 1.1.6 2.2 1.6 2.7l18.9 10.9c.5.3 1.1.4 1.6.4s1.1-.1 1.6-.4l18.9-10.9c1-.6 1.6-1.6 1.6-2.7V15c0-1.1-.6-2.1-1.6-2.7zM25 5.5l14.7 8.5-4.4 2.5L25 10.5l-10.3 6-4.4-2.5L25 5.5zm-1.8 38.6L8.5 35.6v-17l4.4 2.5v12l10.3 6v5zm3.6 0v-5l10.3-6v-12l4.4-2.5v17l-14.7 8.5zm11.2-20.9l-13-7.5 4.4-2.5 13 7.5-4.4 2.5z"
      fill="#FF2D20"
    />
  </svg>
);

export const PhpIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-3 ${className}`}>
    <ellipse cx="32" cy="32" rx="30" ry="18" fill="#777BB4" />
    <path
      d="M19 25h6c3 0 5 1.5 5 4s-2 4-5 4h-3l-2 8h-3l4-16zm4 6h2c1.5 0 2.5-.5 2.5-1.5S26.5 28 25 28h-1.5l-.5 3zm12-6h3l-3.5 14h-3l.8-3.2c-.8 2-2.5 3.5-4.8 3.5-3.5 0-5.5-2.5-5.5-6.5 0-4.8 3-8.8 7.5-8.8 2.2 0 3.8 1 4.5 2.5L35 25zm-2.5 5.5c0-.5-.2-1-.6-1.5-.5-.6-1.4-1-2.4-1-2.5 0-4.5 2.5-4.5 5.5 0 2 1 3 2.5 3 2.5 0 5-3.5 5-6zm9.5-5.5h6c3 0 5 1.5 5 4s-2 4-5 4h-3l-2 8h-3l4-16zm4 6h2c1.5 0 2.5-.5 2.5-1.5s-1-1.5-2.5-1.5h-1.5l-.5 3z"
      fill="#FFFFFF"
    />
  </svg>
);

export const MysqlIcon = ({ size = 26, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={`transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-115 ${className}`}>
    <path
      d="M74.8 28.5c-4.8-4.4-12.2-6.4-19.2-5.2-6.4 1-12.4 4.4-17 9-5.6 5.6-9.6 12.6-11 20.4-.8 4.4-.4 9 1.2 13 1 2 2 4 3.6 5.2-3 1-6.4.8-9.2-.6-1.6-.8-3-2-4-3.4.6 3.6 2.8 6.8 6 8.4 3.6 1.8 8 2 11.8.6 3-1 5.6-3 7.4-5.6 2.8-4 4.2-8.8 4.8-13.6.8-6.2 3.4-12 7.6-16.4 4.4-4.6 10.6-7.4 17-7.6 2-.2 4 .2 5.8 1-2.4-2-3.6-3.6-4.8-5.2zm-36.8 17.4c.6 2.8.2 5.8-1.2 8.2-.8 1.4-1.8 2.6-3.2 3.4.6-3.2 1.8-6.4 3.6-9.2.2-.8.6-1.6.8-2.4z"
      fill="#38BDF8"
    />
  </svg>
);

export const JavascriptIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3 ${className}`}>
    <rect width="64" height="64" rx="12" fill="#F7DF1E" />
    <path
      d="M21 48c1.5 1 3.5 1.7 5.5 1.7 4 0 6.5-2 6.5-7.5V25h-5.5v17.2c0 2.3-1 3.3-2.5 3.3-1 0-2-.5-2.7-1L21 48zm22-1.3c2 1.2 4.6 2 7.3 2 4.2 0 7-2.1 7-5.8 0-3.4-2.1-5-5.8-6.6l-1.8-.8c-2.4-1.1-3.6-2-3.6-3.8 0-1.8 1.5-3 3.8-3 2 0 3.7.7 4.8 1.5l1.6-3.8c-1.4-.9-3.4-1.6-5.8-1.6-4.5 0-7.4 2.5-7.4 6.2 0 3.3 2.1 5.1 5.3 6.4l2 .8c2.6 1.1 3.8 2.2 3.8 4.2 0 2-1.7 3.3-4.2 3.3-2.5 0-4.6-.9-5.9-2l-1.2 4.6z"
      fill="#000000"
    />
  </svg>
);

export const HtmlIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 ${className}`}>
    <path d="M10 6l4.5 50.8L32 62.5l17.5-5.7L54 6H10z" fill="#E44D26" />
    <path d="M32 10.5v47.6l14.2-4.6L49.6 10.5H32z" fill="#F16529" />
    <path d="M32 23h-8.8l.6 7H32v-7zm0 13.5h-4.6l-.3-3.5h-4.3l.6 7.5H32v-4zm0 13.5l-.1.03-7.5-2-.5-5.5h-4.2l.9 10.5L32 53.6v-3.6z" fill="#EBEBEB" />
    <path d="M32 23h8.8l-.8 9H32v-9zm0 13.5h8l-.8 8.5-7.2 2v3.6l10.9-3 1.2-13.6L44.5 32H32v4.5z" fill="#FFFFFF" />
  </svg>
);

export const CssIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 ${className}`}>
    <path d="M10 6l4.5 50.8L32 62.5l17.5-5.7L54 6H10z" fill="#1572B6" />
    <path d="M32 10.5v47.6l14.2-4.6L49.6 10.5H32z" fill="#33A9DC" />
    <path d="M32 23h-8.8l.6 7H32v-7zm0 13.5h-4.6l-.3-3.5h-4.3l.6 7.5H32v-4zm0 13.5l-.1.03-7.5-2-.5-5.5h-4.2l.9 10.5L32 53.6v-3.6z" fill="#EBEBEB" />
    <path d="M32 23h8.8l-.8 9H32v-9zm0 13.5h8l-.8 8.5-7.2 2v3.6l10.9-3 1.2-13.6L44.5 32H32v4.5z" fill="#FFFFFF" />
  </svg>
);

export const GitIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={`transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-12 ${className}`}>
    <path
      d="M60.6 28.5L35.5 3.4c-1.8-1.8-4.8-1.8-6.6 0l-5.6 5.6 7.6 7.6c1.9-.6 4.1-.2 5.6 1.3 1.5 1.5 1.9 3.7 1.3 5.6l7.3 7.3c1.9-.6 4.1-.2 5.6 1.3 2.1 2.1 2.1 5.5 0 7.6s-5.5 2.1-7.6 0c-1.6-1.6-2-3.9-1.2-5.9l-6.8-6.8v16.1c.6.3 1.1.7 1.6 1.2 2.1 2.1 2.1 5.5 0 7.6s-5.5 2.1-7.6 0-2.1-5.5 0-7.6c.6-.6 1.3-1 2.1-1.3v-16.3c-.8-.3-1.5-.7-2.1-1.3-1.6-1.6-2-3.9-1.2-5.9L20.2 16.3 3.4 33.1c-1.8 1.8-1.8 4.8 0 6.6l25.1 25.1c1.8 1.8 4.8 1.8 6.6 0l25.5-25.5c1.8-2 1.8-4.9 0-6.8z"
      fill="#F05032"
    />
  </svg>
);

export const GithubIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const TelegramIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

export const TechIconMap = {
  react: ReactIcon,
  laravel: LaravelIcon,
  php: PhpIcon,
  mysql: MysqlIcon,
  javascript: JavascriptIcon,
  html: HtmlIcon,
  css: CssIcon,
  git: GitIcon
};
