import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-sage-border bg-surface/50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="inline-flex items-center gap-1 font-heading text-xl font-bold tracking-tight text-charcoal hover:text-forest transition-colors"
            >
              <span className="text-forest text-2xl font-black">/</span>
              <span>dian.raisa</span>
              <span className="w-1.5 h-1.5 rounded-full bg-forest mt-1"></span>
            </a>
            <p className="text-xs text-charcoal-muted mt-1">
              Informatics Graduate • AI / Machine Learning & Software
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:dian.gumilar04@gmail.com"
              className="p-2.5 rounded-full bg-surface border border-sage-border text-charcoal-muted hover:text-forest hover:border-forest transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/6281221409559"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-surface border border-sage-border text-charcoal-muted hover:text-forest hover:border-forest transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/dian-raisa-gumilar/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-surface border border-sage-border text-charcoal-muted hover:text-forest hover:border-forest transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Dianraisa04"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-surface border border-sage-border text-charcoal-muted hover:text-forest hover:border-forest transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-surface border border-sage-border text-charcoal-muted hover:text-forest hover:border-forest transition-colors"
              aria-label="Resume PDF"
            >
              <FileText className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-full bg-surface border border-sage-border text-charcoal hover:border-forest hover:text-forest transition-colors shadow-xs"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="mt-8 pt-6 border-t border-sage-border/50 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-muted gap-2">
          <p>© {new Date().getFullYear()} Dian Raisa Gumilar. All rights reserved.</p>
          <p>Built with React, Vite & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};
