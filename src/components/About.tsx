import React from 'react';
import { GraduationCap, Brain, FlaskConical, Users, Award, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-forest" />,
      title: 'Bachelor of Computer Science (S.Kom)',
      subtitle: 'Bandung National Institute of Technology (ITENAS)',
      description: 'Graduated with Cum Laude honors (GPA: 3.58/4.00). Focused coursework in algorithms, machine learning systems, applied mathematics, and software development'
    },
    {
      icon: <FlaskConical className="w-5 h-5 text-forest" />,
      title: 'Applied AI Research',
      subtitle: 'BRIN Contributor & Thesis',
      description: 'Experience handling text mining, topic modeling with BERTopic, and semantic graph algorithms.'
    },
    {
      icon: <Users className="w-5 h-5 text-forest" />,
      title: 'Academic Mentorship',
      subtitle: 'Machine Learning Lab Assistant',
      description: 'Instructed practicum sessions, evaluated PyTorch assignments, and mentored 50+ undergraduate students in ML fundamentals.'
    },
    {
      icon: <Award className="w-5 h-5 text-forest" />,
      title: 'Certified Competence',
      subtitle: 'HCIA - AI (Score 960/1000)',
      description: 'Certified in foundational deep learning, computer vision architectures, and neural network engineering.'
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-sage-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-sage-border text-xs font-semibold text-forest uppercase tracking-wider mb-3">
            <Brain className="w-3.5 h-3.5" />
            <span>About Dian</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-charcoal tracking-tight">
            My Background & Interests
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-charcoal-muted leading-relaxed">
            <div className="p-6 rounded-2xl bg-surface border border-sage-border shadow-subtle">
              <p className="text-charcoal font-medium text-lg mb-3">
                Informatics graduate from Institut Teknologi Nasional (ITENAS) Bandung with a core focus on Machine Learning, Natural Language Processing, and Computer Vision.
              </p>
              <p className="mb-4">
                I focus on developing practical systems across <strong className="text-charcoal font-semibold">Machine Learning, Natural Language Processing, and Computer Vision</strong> to solve tangible problems—ranging from parsing research literature and analyzing text topics, to processing facial expressions and sign language translation.
              </p>
              <p>
                During my studies, I served as a <strong className="text-charcoal font-semibold">Machine Learning Laboratory Assistant</strong>, guiding peers through model training, evaluation, and debugging. In parallel, I contributed to applied research at <strong className="text-charcoal font-semibold">BRIN (Badan Riset dan Inovasi Nasional)</strong>, focusing on text representation, topic modeling, and data workflows.
              </p>
            </div>

            {/* Quick Principles / Approach */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-surface/60 border border-sage-border/80">
                <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-semibold text-charcoal text-sm">Pragmatic Engineering</h4>
                  <p className="text-xs text-charcoal-muted mt-1">Writing clean, maintainable code and reproducible workflows with a focus on real system utility over unnecessary complexity.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-surface/60 border border-sage-border/80">
                <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-semibold text-charcoal text-sm">Continuous Inquiry</h4>
                  <p className="text-xs text-charcoal-muted mt-1">Continuously exploring applied machine learning methods, modern frameworks, and practical deployment tools..</p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Cards Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-surface border border-sage-border shadow-subtle hover:border-forest/50 hover:shadow-card transition-all duration-200"
              >
                <div className="flex items-center gap-3.5 mb-2.5">
                  <div className="p-2.5 rounded-xl bg-forest-subtle border border-forest-border/40">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-charcoal text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-forest">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
