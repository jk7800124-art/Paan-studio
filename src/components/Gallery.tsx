import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_IMAGES } from '../data';

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((activeIdx + 1) % GALLERY_IMAGES.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((activeIdx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
    <section id="gallery" className="relative py-24 bg-luxury-black border-t border-gold-500/10">
      {/* Dynamic Background visual details */}
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gold-950/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-[0.4em] text-gold-500 uppercase font-bold">
            Visual Craftsmanship
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-luxury-cream mt-2 tracking-wide font-medium">
            Studio Portfolio
          </h2>
          <div className="w-12 h-[2px] bg-gold-500 mx-auto mt-4" />
          <p className="font-sans text-xs sm:text-sm text-luxury-creamy/60 max-w-xl mx-auto mt-4 font-light">
            Behind the scenes of our luxury preparations, royal presentation trays, and premium gifting setups.
          </p>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={img.id}
              onClick={() => setActiveIdx(idx)}
              className="group relative h-80 rounded-sm overflow-hidden border border-gold-500/10 bg-luxury-charcoal hover:border-gold-500/40 cursor-pointer shadow-lg hover:shadow-gold-500/5 transition-all duration-500"
            >
              {/* Actual Image */}
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Elegant Vignette Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/30 to-transparent opacity-90" />
              
              {/* Interactive Hover details display */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="font-display text-[9px] tracking-[0.3em] text-gold-400 uppercase font-medium">
                  Exclusive Craft
                </span>
                <h3 className="font-serif text-lg text-luxury-cream mt-1 tracking-wide">
                  {img.title}
                </h3>
                <p className="font-sans text-xs text-luxury-creamy/60 leading-relaxed font-light mt-2 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500 ease-out">
                  {img.description}
                </p>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-luxury-black/60 backdrop-blur-sm border border-gold-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 size={12} className="text-gold-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Screen Lightbox Modal Portal */}
        <AnimatePresence>
          {activeIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-luxury-black/95 z-50 flex flex-col justify-center items-center p-4 sm:p-8"
              onClick={() => setActiveIdx(null)}
            >
              <div className="absolute top-6 right-6 flex items-center gap-4 z-51">
                <span className="font-display text-xs tracking-widest text-luxury-creamy/40">
                  {activeIdx + 1} / {GALLERY_IMAGES.length}
                </span>
                <button
                  onClick={() => setActiveIdx(null)}
                  className="w-10 h-10 rounded-full bg-luxury-charcoal/80 border border-gold-500/20 flex items-center justify-center text-luxury-creamy hover:text-gold-400 focus:outline-none transition-all cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Central Lightbox Card wrapper */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative max-w-4xl w-full max-h-[80vh] flex flex-col justify-center items-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Arrow Controllers */}
                <button
                  onClick={handlePrev}
                  className="absolute -left-4 sm:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-luxury-charcoal hover:bg-luxury-gray border border-gold-500/20 flex items-center justify-center text-luxury-creamy hover:text-gold-400 select-none z-51 focus:outline-none cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button
                  onClick={handleNext}
                  className="absolute -right-4 sm:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-luxury-charcoal hover:bg-luxury-gray border border-gold-500/20 flex items-center justify-center text-luxury-creamy hover:text-gold-400 select-none z-51 focus:outline-none cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Main image */}
                <div className="rounded-sm overflow-hidden border border-gold-500/20 max-w-full max-h-[60vh] bg-luxury-black">
                  <img
                    src={GALLERY_IMAGES[activeIdx].src}
                    alt={GALLERY_IMAGES[activeIdx].title}
                    className="max-w-full max-h-[60vh] object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Graphic Captions info */}
                <div className="mt-6 text-center max-w-xl px-4">
                  <h3 className="font-serif text-xl sm:text-2xl text-luxury-cream">
                    {GALLERY_IMAGES[activeIdx].title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-luxury-creamy/70 mt-2 font-light leading-relaxed">
                    {GALLERY_IMAGES[activeIdx].description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
