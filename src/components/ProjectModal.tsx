import React, { useEffect } from 'react';
import { X, ExternalLink, Check, ChevronLeft, ChevronRight, BarChart3, Layers, Target, Wrench, Sparkles, Image as ImageIcon } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject?: (project: Project) => void;
  allProjects?: Project[];
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects = []
}) => {
  const currentIndex = project ? allProjects.findIndex(p => p.id === project.id) : -1;
  const prevProject = allProjects.length > 1 && currentIndex !== -1
    ? (currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1])
    : null;
  const nextProject = allProjects.length > 1 && currentIndex !== -1
    ? (currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0])
    : null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && prevProject && onSelectProject) onSelectProject(prevProject);
      if (e.key === 'ArrowRight' && nextProject && onSelectProject) onSelectProject(nextProject);
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, prevProject, nextProject, onSelectProject]);

  if (!project) return null;

  const isAIML = project.category === 'AI & Machine Learning' || project.category === 'Computer Vision';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-charcoal/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-surface rounded-2xl border border-sage-border shadow-card-hover flex flex-col overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-sage-border/80 flex items-start justify-between bg-surface-muted/40">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest bg-forest-subtle rounded-full mb-2">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-charcoal-muted hover:text-charcoal hover:bg-sage-border/40 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
          {/* Gallery / Documentation Images */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-3 flex items-center gap-1.5">
                <ImageIcon className="w-4 h-4 text-forest" />
                Project Documentation & Gallery
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.gallery.map((imgUrl, idx) => (
                  <a
                    key={idx}
                    href={imgUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative rounded-xl overflow-hidden border border-sage-border bg-sage-bg/40 aspect-video block hover:border-forest transition-colors shadow-xs"
                  >
                    <img
                      src={imgUrl}
                      alt={`${project.title} preview ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium gap-1">
                      <span>View</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-forest" />
              Project Overview
            </h4>
            <p className="text-base text-charcoal leading-relaxed font-normal">
              {project.overview}
            </p>
          </div>

          {/* Problem & Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-sage-bg/40 border border-sage-border">
              <h5 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-1 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-forest" />
                The Problem
              </h5>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-sage-bg/40 border border-sage-border">
              <h5 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-1 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-forest" />
                The Approach
              </h5>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Key Contributions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-3 flex items-center gap-1.5">
              <Check className="w-4 h-4 text-forest" />
              Key Contributions & Implementation
            </h4>
            <ul className="space-y-2">
              {project.contribution.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-charcoal leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results & Metrics (Technical for AI/ML/CV) */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-3 flex items-center gap-1.5">
                {isAIML ? (
                  <BarChart3 className="w-4 h-4 text-forest" />
                ) : (
                  <Sparkles className="w-4 h-4 text-forest" />
                )}
                {isAIML ? 'Proven Results & Technical Metrics' : 'Project Impact & Practical Benefits'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-forest-subtle/50 border border-forest-border/40 text-center flex flex-col justify-center">
                    <div className="text-xl sm:text-2xl font-bold font-heading text-forest">
                      {m.value}
                    </div>
                    <div className="text-xs text-charcoal font-semibold mt-0.5">
                      {m.label}
                    </div>
                    {m.description && (
                      <p className="text-[11px] text-charcoal-muted mt-1 leading-snug">
                        {m.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Qualitative Impact & Benefits (for non-AI / applied systems) */}
          {project.impacts && project.impacts.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-forest" />
                Key Impact & Practical Benefits
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {project.impacts.map((imp, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-forest-subtle/40 border border-forest-border/40 flex flex-col justify-between">
                    <div className="text-sm font-bold font-heading text-charcoal mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-forest shrink-0"></span>
                      <span>{imp.title}</span>
                    </div>
                    <p className="text-xs text-charcoal-muted leading-relaxed">
                      {imp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-surface border border-sage-border text-charcoal"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-sage-border/80 bg-surface-muted/30 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.demoUrl && project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-full bg-surface border border-sage-border text-charcoal hover:border-forest hover:text-forest transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 ml-auto">
            {prevProject && onSelectProject && (
              <button
                type="button"
                onClick={() => onSelectProject(prevProject)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-sage-border bg-surface text-xs sm:text-sm font-medium text-charcoal hover:text-forest hover:border-forest transition-colors shadow-xs"
                title={`Previous: ${prevProject.title}`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
            )}

            {nextProject && onSelectProject && (
              <button
                type="button"
                onClick={() => onSelectProject(nextProject)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-forest text-white text-xs sm:text-sm font-medium hover:bg-forest-hover transition-colors shadow-subtle"
                title={`Next: ${nextProject.title}`}
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
