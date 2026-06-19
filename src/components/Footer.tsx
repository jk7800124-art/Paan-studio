import React from 'react';
import { Instagram, MessageCircle, ArrowUp } from 'lucide-react';
import { CONTACT_DETAILS } from '../data';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'Welcome', href: '#home' },
    { label: 'Heritage', href: '#about' },
    { label: 'Signature Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const position = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = position - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-luxury-black border-t border-gold-500/15 py-16 relative overflow-hidden">
      {/* Decorative radial lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-gold-950/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper tier layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-gold-500/10">
          
          {/* Brand Info Left */}
          <div className="md:col-span-5 flex flex-col items-start">
            <span className="font-serif text-2xl tracking-widest text-gold-400 font-bold uppercase">
              Paan Studio
            </span>
            <span className="font-display text-[9px] tracking-[0.3em] text-luxury-creamy uppercase -mt-1 opacity-80 mb-4">
              Paan & Confectionery
            </span>
            <p className="font-sans text-xs text-luxury-creamy/50 leading-relaxed max-w-sm mt-2 font-light">
              Vijayawada&apos;s ultimate curated destination for legendary betel leaf creations, royal confectionery, and exquisite catering experiences. Elevating authentic flavors with modern luxury.
            </p>
          </div>

          {/* Quick Navigation links Center */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="font-display text-[10px] tracking-[0.3em] text-gold-500 uppercase font-bold mb-4">
              Quick Shortcuts
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-display text-[11px] tracking-widest text-luxury-creamy/70 hover:text-gold-400 transition-colors duration-300 uppercase py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Socials Right */}
          <div className="md:col-span-3 flex flex-col">
            <h4 className="font-display text-[10px] tracking-[0.3em] text-gold-500 uppercase font-bold mb-4">
              Social Salon
            </h4>
            <div className="flex gap-4 mb-4">
              <a
                href={CONTACT_DETAILS.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-sm border border-gold-500/20 bg-luxury-charcoal hover:border-gold-500 flex items-center justify-center text-luxury-creamy hover:text-gold-400 transition-all duration-300 shadow-md transform hover:-translate-y-1"
                aria-label="Instagram Page"
              >
                <Instagram size={18} />
              </a>
              <a
                href={CONTACT_DETAILS.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-sm border border-gold-500/20 bg-luxury-charcoal hover:border-gold-500 flex items-center justify-center text-luxury-creamy hover:text-gold-400 transition-all duration-300 shadow-md transform hover:-translate-y-1"
                aria-label="WhatsApp Order Chat"
              >
                <MessageCircle size={18} />
              </a>
            </div>
            <p className="font-sans text-[11px] text-luxury-creamy/40 font-light">
              Follow our official feeds on Instagram for secret menu reveals and catering reels.
            </p>
          </div>

        </div>

        {/* Lower tier copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <p className="font-display text-[10px] tracking-widest text-luxury-creamy/40 uppercase">
              &copy; {new Date().getFullYear()} Paan Studio. All Rights Reserved.
            </p>
            <p className="font-sans text-[9px] text-luxury-creamy/30 mt-1 max-w-sm">
              All sweet preparations are wrapped in 100% certified edible gold and silver foils under absolute physical sanitization guidelines.
            </p>
          </div>

          {/* Scroll block */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 font-display text-[10px] tracking-widest text-gold-500 hover:text-gold-400 uppercase py-2 px-4 border border-gold-500/15 hover:border-gold-500/40 rounded-sm transition-all bg-luxury-charcoal cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back To Top</span>
            <ArrowUp size={12} className="animate-bounce" />
          </button>
        </div>

      </div>
    </footer>
  );
}
