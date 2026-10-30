import React from 'react';
import { ArrowDown, Mail, Github, Linkedin, Sparkles, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-noise">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-sage-border shadow-subtle mb-6 text-xs sm:text-sm font-medium text-charcoal">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-forest"></span>
            </span>
            <span>Available for AI / ML & Software Opportunities</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-charcoal tracking-tight leading-[1.15] mb-6">
            Hi, I'm Dian Raisa.{' '}
            <span className="block mt-1 text-forest">
              I build things with AI and technology.
            </span>
          </h1>

          {/* Concise Description */}
          <p className="text-lg sm:text-xl text-charcoal-muted leading-relaxed mb-8 max-w-2xl font-normal">
            Informatics graduate from ITENAS with hands-on experience in Machine Learning,
            Natural Language Processing, Computer Vision, and full-stack software development.
            I enjoy transforming theoretical models into reliable, human-centric software solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-forest text-white font-medium hover:bg-forest-hover shadow-subtle hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-surface border border-sage-border text-charcoal font-medium hover:border-forest hover:text-forest hover:shadow-subtle transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-forest" />
              <span>Contact Me</span>
            </a>

            <div className="flex items-center gap-2 ml-1 sm:ml-2 border-l border-sage-border/80 pl-4 py-1">
              <a
                href="https://github.com/Dianraisa04"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-surface border border-sage-border text-charcoal-muted hover:text-forest hover:border-forest transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dian-raisa-gumilar-132312308/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-surface border border-sage-border text-charcoal-muted hover:text-forest hover:border-forest transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Core Fields Chips */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-charcoal-muted font-medium pt-2">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface/70 border border-sage-border">
              <Sparkles className="w-3.5 h-3.5 text-forest" />
              AI & Machine Learning
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface/70 border border-sage-border">
              <Terminal className="w-3.5 h-3.5 text-forest" />
              Topic Modeling & NLP
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface/70 border border-sage-border">
              Computer Vision
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface/70 border border-sage-border">
              Software Engineering
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
