import React from 'react';
import { ArrowDown, Mail, Github, Linkedin, Sparkles, Terminal } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-noise">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Info Column */}
          <div className="lg:col-span-7">
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
                Turning ideas into intelligent solutions.
              </span>
            </h1>

            {/* Concise Description */}
            <p className="text-lg sm:text-xl text-charcoal-muted leading-relaxed mb-8 max-w-2xl font-normal">
              With an interest in AI and software engineering, I work across Machine Learning,
              Natural Language Processing, Computer Vision, and software development.
              I enjoy transforming theoretical models into reliable, human-centric software solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
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
                  href="https://www.linkedin.com/in/dian-raisa-gumilar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-surface border border-sage-border text-charcoal-muted hover:text-forest hover:border-forest transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/6281221409559"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-surface border border-sage-border text-charcoal-muted hover:text-forest hover:border-forest transition-colors"
                  aria-label="WhatsApp Contact"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Core Fields Chips */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-charcoal-muted font-medium">
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

          {/* Photo Showcase Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              {/* Decorative background glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-forest/20 via-forest-border/40 to-forest/10 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative rounded-3xl bg-surface border border-sage-border/90 shadow-card p-3 sm:p-3.5 overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-sage-bg/60">
                  <img
                    src="/images/self-photo.png"
                    alt="Dian Raisa Gumilar"
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-80"></div>

                  {/* Floating Identity Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-surface/90 backdrop-blur-md border border-sage-border/60 shadow-subtle">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold font-heading text-charcoal">
                          Dian Raisa Gumilar, S.Kom
                        </p>
                        <p className="text-[11px] text-forest font-medium">
                          Huawei ICT National Finalist • AI Researcher
                        </p>
                      </div>
                      <span className="p-1.5 rounded-lg bg-forest-subtle text-forest shrink-0">
                        <Sparkles className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
