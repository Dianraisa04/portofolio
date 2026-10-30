import React from 'react';
import { Wrench, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/skills';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-t border-sage-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-sage-border text-xs font-semibold text-forest uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-charcoal tracking-tight">
            Tools, Libraries & Technologies
          </h2>
          <p className="text-charcoal-muted text-base mt-2 max-w-xl">
            A practical toolkit focused on real implementations and verifiable workflows—no arbitrary percentage meters.
          </p>
        </div>

        {/* Categorized Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="p-6 rounded-2xl bg-surface border border-sage-border shadow-subtle hover:shadow-card hover:border-forest/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold font-heading text-charcoal mb-1">
                  {category.title}
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed mb-5">
                  {category.description}
                </p>
              </div>

              {/* Badges Flow */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      skill.highlight
                        ? 'bg-forest-subtle border border-forest/30 text-charcoal font-semibold shadow-xs'
                        : 'bg-sage-bg/60 border border-sage-border text-charcoal-muted hover:text-charcoal hover:bg-sage-bg'
                    }`}
                  >
                    {skill.highlight && (
                      <Sparkles className="w-3 h-3 text-forest shrink-0" />
                    )}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
