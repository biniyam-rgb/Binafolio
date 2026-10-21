import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, FolderGit2, Layers, CheckCircle2, X, AlertCircle } from 'lucide-react';
import { GithubIcon } from './TechIcons';
import { projectsData } from '../data/portfolioData';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-custom relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="badge-orange-pill mb-3">
              <FolderGit2 className="h-3.5 w-3.5" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F0EC]">
              Featured <span className="text-gradient-orange">Projects</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#C4B6AE] max-w-xl">
              Showcase of web applications exploring full-stack architecture, responsive interfaces, and relational databases.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#8E7D75] bg-[#140C09] px-4 py-2 rounded-xl border border-[#3A241C] self-start md:self-auto">
            <span className="h-2 w-2 rounded-full bg-[#FF5A1F] animate-pulse" />
            <span>Clearly labeled demo placeholders</span>
          </div>
        </div>

        {/* Varied Project Cards Layout */}
        <div className="space-y-12">
          
          {/* 1. Large Spotlight Project (AetherFlow Analytics) */}
          {projectsData[0] && (
            <div className="portfolio-card bg-[#140C09] border-[#3A241C] group project-spotlight-card">
              {/* Image Preview Side */}
              <div className="relative aspect-video lg:aspect-auto overflow-hidden bg-[#0A0706]">
                <img
                  src={projectsData[0].image}
                  alt={projectsData[0].title}
                  className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140C09] via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-[#0A0706]/85 backdrop-blur-md px-3 py-1 text-xs font-mono font-semibold text-[#FF7A36] border border-[#3A241C]">
                    {projectsData[0].category}
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#FF5A1F] mb-1">
                    Featured Spotlight
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F0EC] group-hover:text-[#FF7A36] transition-colors">
                    {projectsData[0].title}
                  </h3>
                  <div className="text-xs sm:text-sm text-[#8E7D75] font-medium mt-1 mb-4">
                    {projectsData[0].subtitle}
                  </div>
                  <p className="text-sm text-[#C4B6AE] leading-relaxed mb-6">
                    {projectsData[0].description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 mb-6">
                    {projectsData[0].highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#C4B6AE]">
                        <CheckCircle2 className="h-4 w-4 text-[#FF5A1F] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {projectsData[0].technologies.map((tech) => (
                      <span key={tech} className="badge-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-[#3A241C]/80 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(projectsData[0])}
                    className="btn-primary-orange text-xs !py-2.5 !px-5"
                  >
                    <span>View Architecture</span>
                  </button>

                  <a
                    href={projectsData[0].links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary-dark text-xs !py-2.5 !px-4"
                    title="Configurable GitHub Link"
                  >
                    <GithubIcon size={16} />
                    <span>Repo [Placeholder]</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* 2 & 3. Side-by-Side Secondary Projects */}
          <div className="projects-secondary-grid">
            {projectsData.slice(1).map((project) => (
              <div
                key={project.id}
                className="portfolio-card bg-[#140C09] border-[#3A241C] group flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Image Preview */}
                  <div className="relative aspect-video overflow-hidden bg-[#0A0706]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-[#0A0706]/85 backdrop-blur-md px-3 py-1 text-[11px] font-mono font-semibold text-[#FF7A36] border border-[#3A241C]">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#F5F0EC] group-hover:text-[#FF7A36] transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs text-[#8E7D75] font-medium mt-1 mb-3">
                      {project.subtitle}
                    </div>
                    <p className="text-xs sm:text-sm text-[#C4B6AE] leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="badge-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 border-t border-[#3A241C]/60 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-[#FF7A36] hover:text-[#FF9E66] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Details &amp; Tech</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </button>

                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#8E7D75] hover:text-[#F5F0EC] transition-colors"
                  >
                    <GithubIcon size={14} />
                    <span>Repo [Placeholder]</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#3A241C] bg-[#140C09] p-6 sm:p-8 shadow-2xl"
            >
              <div className="flex items-start justify-between pb-4 border-b border-[#3A241C]">
                <div>
                  <span className="badge-orange-pill text-xs mb-2">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-[#F5F0EC]">
                    {selectedProject.title}
                  </h3>
                  <div className="text-xs text-[#8E7D75] font-mono mt-0.5">
                    {selectedProject.subtitle}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg p-2 text-[#C4B6AE] hover:bg-[#1C110D] hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 space-y-5 text-sm text-[#C4B6AE]">
                <p className="leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="rounded-xl border border-[#3A241C] bg-[#1C110D] p-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF7A36] mb-3 font-semibold">
                    Core Technical Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#F5F0EC]">
                        <CheckCircle2 className="h-4 w-4 text-[#FF5A1F] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF7A36] mb-2 font-semibold">
                    Technologies Leveraged
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span key={t} className="badge-tag !text-xs !py-1 !px-2.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-[#3A241C]/60 bg-[#0A0706] p-4 text-xs font-mono text-[#8E7D75] flex items-start gap-2.5">
                  <AlertCircle className="h-4 w-4 text-[#FF7A36] shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-[#F5F0EC]">Configuration Notice:</strong> This project card is configured in <code className="text-[#FF7A36]">portfolioData.js</code>. You can replace the repository and preview URLs with your live links whenever ready.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-end gap-3 pt-4 border-t border-[#3A241C]">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-full border border-[#3A241C] text-xs font-medium text-[#C4B6AE] hover:text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
