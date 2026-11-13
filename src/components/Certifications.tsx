import React, { useState, useEffect } from 'react';
import { Award, CheckCircle, ShieldCheck, Image as ImageIcon, X, ChevronLeft, ChevronRight, BookOpen, ScrollText, FileCheck } from 'lucide-react';
import { certifications, publications } from '../data/certifications';
import { DocumentationImage } from '../types';

export const Certifications: React.FC = () => {
  const [activeGallery, setActiveGallery] = useState<{ title: string; images: DocumentationImage[] } | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openGallery = (title: string, images: DocumentationImage[], startIndex = 0) => {
    setActiveGallery({ title, images });
    setActiveImageIndex(startIndex);
  };

  const closeGallery = () => {
    setActiveGallery(null);
    setActiveImageIndex(0);
  };

  const prevImage = () => {
    if (!activeGallery) return;
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : activeGallery.images.length - 1));
  };

  const nextImage = () => {
    if (!activeGallery) return;
    setActiveImageIndex((prev) => (prev < activeGallery.images.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeGallery) return;
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    if (activeGallery) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeGallery]);

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

                {/* Pop-up Gallery Trigger */}
                {item.gallery && item.gallery.length > 0 && (
                  <div className="mb-4">
                    <button
                      type="button"
                      onClick={() => openGallery(item.title, item.gallery!)}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-forest-subtle/70 border border-forest-border/60 text-xs font-semibold text-forest hover:bg-forest hover:text-white transition-all shadow-xs group"
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>View Documentation Gallery</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-forest/10 group-hover:bg-white/20 text-forest group-hover:text-white font-bold">
                        {item.gallery.length} photos
                      </span>
                    </button>
                  </div>
                )}
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

        {/* Publications & Intellectual Property Subsection */}
        <div className="mt-14">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-sage-border text-xs font-semibold text-forest uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Research Output & Copyright</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-charcoal tracking-tight">
              Publications & Intellectual Property
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publications.map((pub) => (
              <div
                key={pub.id}
                className="p-6 rounded-2xl bg-surface border border-sage-border shadow-subtle hover:shadow-card hover:border-forest/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="p-2 rounded-xl bg-forest-subtle border border-forest-border/40 text-forest">
                      {pub.type === 'Journal' && <BookOpen className="w-5 h-5" />}
                      {pub.type === 'Conference' && <ScrollText className="w-5 h-5" />}
                      {pub.type === 'Copyright' && <FileCheck className="w-5 h-5" />}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-sage-bg border border-sage-border text-charcoal">
                      {pub.type} • {pub.date}
                    </span>
                  </div>

                  <h4 className="text-base font-bold font-heading text-charcoal leading-snug mb-2">
                    {pub.title}
                  </h4>
                  <div className="text-xs font-semibold text-forest mb-3">
                    {pub.venue}
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {pub.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pop-up Gallery Lightbox Modal */}
      {activeGallery && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeGallery}
        >
          <div
            className="relative w-full max-w-4xl bg-surface rounded-2xl border border-sage-border shadow-card-hover overflow-hidden flex flex-col my-auto max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gallery Header */}
            <div className="p-4 sm:p-5 border-b border-sage-border/80 flex items-center justify-between bg-surface-muted/50">
              <div className="pr-4">
                <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-forest bg-forest-subtle rounded-full mb-1">
                  Documentation Gallery
                </span>
                <h3 className="text-base sm:text-lg font-bold font-heading text-charcoal truncate">
                  {activeGallery.title}
                </h3>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs font-mono font-medium text-charcoal-muted">
                  {activeImageIndex + 1} / {activeGallery.images.length}
                </span>
                <button
                  onClick={closeGallery}
                  className="p-2 rounded-full text-charcoal-muted hover:text-charcoal hover:bg-sage-border/50 transition-colors focus:outline-none"
                  aria-label="Close gallery"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Image Stage */}
            <div className="relative p-2 sm:p-6 flex items-center justify-center bg-charcoal/5 min-h-[340px] max-h-[65vh] overflow-hidden">
              <img
                src={activeGallery.images[activeImageIndex].url}
                alt={activeGallery.images[activeImageIndex].title}
                className="max-w-full max-h-[60vh] object-contain rounded-xl shadow-subtle select-none"
              />

              {/* Prev Button */}
              {activeGallery.images.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-3 sm:left-6 p-2 sm:p-2.5 rounded-full bg-surface/90 hover:bg-surface border border-sage-border text-charcoal shadow-card hover:scale-105 transition-all focus:outline-none"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              {/* Next Button */}
              {activeGallery.images.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-3 sm:right-6 p-2 sm:p-2.5 rounded-full bg-surface/90 hover:bg-surface border border-sage-border text-charcoal shadow-card hover:scale-105 transition-all focus:outline-none"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Caption & Thumbnail Strip */}
            <div className="p-4 sm:p-5 border-t border-sage-border/80 bg-surface flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="max-w-xl">
                <h4 className="text-sm font-bold font-heading text-charcoal">
                  {activeGallery.images[activeImageIndex].title}
                </h4>
                {activeGallery.images[activeImageIndex].caption && (
                  <p className="text-xs text-charcoal-muted mt-0.5 leading-relaxed">
                    {activeGallery.images[activeImageIndex].caption}
                  </p>
                )}
              </div>

              {/* Thumbnails */}
              {activeGallery.images.length > 1 && (
                <div className="flex items-center gap-2 shrink-0">
                  {activeGallery.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-14 h-11 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-forest ring-2 ring-forest/30 scale-105'
                          : 'border-sage-border opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={img.title}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
