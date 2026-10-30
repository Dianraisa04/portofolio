import React from 'react';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/certifications';

export const Certifications: React.FC = () => {
  return (
    <section className="py-16 border-t border-sage-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-sage-border text-xs font-semibold text-forest uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Honors & Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-charcoal tracking-tight">
            Certifications & Contest Distinctions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-surface border border-sage-border shadow-subtle hover:shadow-card hover:border-forest/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="p-2 rounded-xl bg-forest-subtle border border-forest-border/40 text-forest">
                    <ShieldCheck className="w-5 h-5" />
                  </span>
                  {item.score && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-forest text-white">
                      {item.score}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold font-heading text-charcoal leading-snug mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-forest mb-3">
                  {item.issuer} • {item.date}
                </div>
                <p className="text-xs text-charcoal-muted leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-sage-border/60">
                {item.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-charcoal-muted bg-sage-bg/70 px-2 py-0.5 rounded"
                  >
                    <CheckCircle className="w-3 h-3 text-forest" />
                    {skill}
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
