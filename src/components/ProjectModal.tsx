import React, { useEffect } from 'react';
import { X, ExternalLink, Check, ChevronRight, BarChart3, Layers, Target, Wrench } from 'lucide-react';
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
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const nextProject = currentIndex !== -1 && currentIndex < allProjects.length - 1 
    ? allProjects[currentIndex + 1] 
    : allProjects[0];

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

          {/* Metrics / Proven Results */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-3 flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-forest" />
                Proven Results & Metrics
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-forest-subtle/50 border border-forest-border/40 text-center">
                    <div className="text-xl sm:text-2xl font-bold font-heading text-forest">
                      {m.value}
                    </div>
                    <div className="text-xs text-charcoal-muted font-medium mt-0.5">
                      {m.label}
                    </div>
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

          {nextProject && onSelectProject && (
            <button
              onClick={() => onSelectProject(nextProject)}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-forest hover:text-forest-hover transition-colors ml-auto"
            >
              <span>Next: {nextProject.title.slice(0, 24)}...</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
