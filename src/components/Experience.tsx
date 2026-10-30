import React from 'react';
import { Briefcase, Calendar, MapPin, Building2, Check } from 'lucide-react';
import { experiences } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-sage-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-sage-border text-xs font-semibold text-forest uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-charcoal tracking-tight">
            Work & Research Experience
          </h2>
          <p className="text-charcoal-muted text-base mt-2 max-w-xl">
            A chronological timeline of laboratory assistant roles, research initiatives at BRIN, and academic foundations.
          </p>
        </div>

        {/* Clean Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-sage-border ml-2 sm:ml-4 space-y-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-forest group-hover:bg-forest transition-colors flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-forest group-hover:bg-surface transition-colors" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-2xl bg-surface border border-sage-border shadow-subtle hover:shadow-card hover:border-forest/40 transition-all duration-200">
                {/* Meta Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-forest-subtle text-forest uppercase tracking-wide">
                      {exp.type}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-charcoal-muted">
                      <Calendar className="w-3.5 h-3.5 text-forest" />
                      {exp.period}
                    </span>
                  </div>

                  {exp.location && (
                    <span className="flex items-center gap-1 text-xs text-charcoal-muted">
                      <MapPin className="w-3.5 h-3.5 text-forest/80" />
                      {exp.location}
                    </span>
                  )}
                </div>

                {/* Role & Org */}
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-charcoal">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-forest mt-1 mb-4">
                  <Building2 className="w-4 h-4 shrink-0" />
                  <span>{exp.organization}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-charcoal-muted leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Contributions */}
                <ul className="space-y-2 mb-5">
                  {exp.contributions.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-charcoal leading-relaxed">
                      <Check className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-sage-border/60">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-sage-bg/70 text-charcoal-muted border border-sage-border/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
