import React, { useState } from 'react';
import { FolderGit2, Github, ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { projects, projectCategories } from '../data/projects';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 border-t border-sage-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-sage-border text-xs font-semibold text-forest uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-charcoal tracking-tight">
              Featured Projects & Research
            </h2>
            <p className="text-charcoal-muted text-base mt-2 max-w-xl">
              Real-world systems, thesis research, and applied models covering Machine Learning, NLP, and Computer Vision.
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {projectCategories.map((category) => {
            const isActive = selectedCategory === category;
            const count = category === 'All' 
              ? projects.length 
              : projects.filter(p => p.category === category).length;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all shrink-0 flex items-center gap-2 ${
                  isActive
                    ? 'bg-forest text-white shadow-subtle'
                    : 'bg-surface border border-sage-border text-charcoal hover:border-forest/60 hover:text-forest'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-forest-active text-white' : 'bg-sage-bg text-charcoal-muted'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer rounded-2xl bg-surface border border-sage-border p-6 sm:p-7 shadow-subtle hover:shadow-card-hover hover:-translate-y-1 hover:border-forest/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header / Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest bg-forest-subtle rounded-full">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-forest/90">
                      <Sparkles className="w-3 h-3 text-forest" />
                      Key Work
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-charcoal group-hover:text-forest transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-charcoal-muted leading-relaxed mb-6 font-normal">
                  {project.summary}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.slice(0, 5).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-sage-bg/60 border border-sage-border text-charcoal-muted"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="px-2 py-0.5 rounded-md text-xs text-charcoal-muted">
                      +{project.tags.length - 5} more
                    </span>
                  )}
                </div>

                {/* Card Action Row */}
                <div 
                  className="flex items-center justify-between pt-4 border-t border-sage-border/60"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-forest hover:text-forest-hover transition-colors"
                  >
                    <span>Inspect Details</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full text-charcoal-muted hover:text-forest hover:bg-forest-subtle/50 transition-colors"
                        aria-label={`View ${project.title} source on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full text-charcoal-muted hover:text-forest hover:bg-forest-subtle/50 transition-colors"
                        aria-label={`View live demo for ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Detailed Modal Overlay */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onSelectProject={(proj) => setActiveProject(proj)}
          allProjects={projects}
        />
      </div>
    </section>
  );
};
