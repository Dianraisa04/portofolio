import React, { useState } from 'react';
import { Mail, Linkedin, Github, FileText, Copy, Check, Send, ArrowUpRight, MessageSquare } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'dian.gumilar04@gmail.com';
  const whatsappNumber = '+62 812-2140-9559';
  const whatsappUrl = 'https://wa.me/6281221409559';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactLinks = [
    {
      label: 'WhatsApp Contact',
      value: whatsappNumber,
      href: whatsappUrl,
      icon: <WhatsAppIcon className="w-5 h-5 text-forest" />,
      actionText: 'Chat on WhatsApp',
    },
    {
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/dian-raisa-gumilar',
      href: 'https://www.linkedin.com/in/dian-raisa-gumilar/',
      icon: <Linkedin className="w-5 h-5 text-forest" />,
      actionText: 'Connect',
    },
    {
      label: 'GitHub Repositories',
      value: 'github.com/Dianraisa04',
      href: 'https://github.com/Dianraisa04',
      icon: <Github className="w-5 h-5 text-forest" />,
      actionText: 'Explore code',
    },
    {
      label: 'Curriculum Vitae',
      value: 'resume.pdf (Latest Version)',
      href: '/resume.pdf',
      icon: <FileText className="w-5 h-5 text-forest" />,
      actionText: 'Open PDF',
    },
  ];

  return (
    <section id="contact" className="py-20 border-t border-sage-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-sage-border text-xs font-semibold text-forest uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-charcoal tracking-tight">
            Have an Opportunity in Mind?
          </h2>
          <p className="text-charcoal-muted text-base mt-2 max-w-xl">
            I'm currently seeking junior / associate roles, internships, and research collaborations in AI/ML, NLP, Computer Vision, and Software Engineering.
          </p>
        </div>

        {/* 2-Column Contact Card / Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Direct Action Card */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-2xl bg-surface border border-sage-border shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-forest-subtle border border-forest-border/40 flex items-center justify-center text-forest mb-6">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-charcoal mb-3">
                Let's start a conversation.
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
                Whether you have an open position, a research query, or simply want to chat about Machine Learning and technology, my inbox is open.
              </p>

              {/* Copyable Email Pill */}
              <div className="p-3.5 rounded-xl bg-sage-bg/70 border border-sage-border flex items-center justify-between gap-3 mb-6">
                <div className="truncate text-sm font-mono text-charcoal font-medium">
                  {emailAddress}
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-sage-border text-xs font-medium text-charcoal hover:text-forest hover:border-forest transition-colors shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-forest" />
                      <span className="text-forest font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-charcoal-muted" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <a
              href={`mailto:${emailAddress}?subject=Inquiry%20from%20Portfolio`}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-forest text-white font-medium hover:bg-forest-hover shadow-subtle hover:shadow-card transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email Directly</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target={item.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-surface border border-sage-border shadow-subtle hover:shadow-card hover:border-forest/50 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-forest-subtle border border-forest-border/40">
                      {item.icon}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-charcoal-muted group-hover:text-forest group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h4 className="font-heading font-bold text-charcoal text-base mb-1">
                    {item.label}
                  </h4>
                  <p className="text-xs text-charcoal-muted truncate">
                    {item.value}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-sage-border/60 text-xs font-semibold text-forest flex items-center gap-1">
                  <span>{item.actionText}</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
