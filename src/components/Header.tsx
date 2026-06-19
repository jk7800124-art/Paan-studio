import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_DETAILS } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Welcome', href: '#home' },
    { label: 'Heritage', href: '#about' },
    { label: 'Signature Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const position = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = position - 80; // height of footer/navbar
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-luxury-black/90 backdrop-blur-md border-b border-gold-500/20 py-4 shadow-lg'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex flex-col items-start group">
              <span className="font-serif text-2xl tracking-widest text-gold-400 group-hover:text-gold-300 transition-colors duration-300 font-bold uppercase">
                Paan Studio
              </span>
              <span className="font-display text-[9px] tracking-[0.3em] text-luxury-creamy uppercase -mt-1 opacity-80">
                Paan & Confectionery
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-display text-xs tracking-widest text-luxury-creamy hover:text-gold-400 transition-colors duration-300 uppercase py-2 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${CONTACT_DETAILS.phone}`}
                className="flex items-center gap-2 text-xs text-luxury-creamy hover:text-gold-400 font-display tracking-widest uppercase transition-colors duration-300 border border-gold-500/20 px-4 py-2 rounded-sm"
              >
                <Phone size={14} className="text-gold-500" />
                <span>Call Concierge</span>
              </a>
              <a
                href={CONTACT_DETAILS.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs text-luxury-black font-display font-medium tracking-widest uppercase bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 px-5 py-2 rounded-sm transition-all duration-300 shadow-md shadow-gold-500/10"
              >
                <ShoppingCart size={14} />
                <span>Order Live</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-luxury-creamy hover:text-gold-400 p-2 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-luxury-black/95 z-40 md:hidden flex flex-col justify-center px-8"
          >
            {/* Elegant backgrounds pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="flex flex-col space-y-6 z-50">
              <div className="text-center mb-8">
                <span className="font-serif text-3xl tracking-widest text-gold-400 block font-bold uppercase">
                  Paan Studio
                </span>
                <span className="font-display text-xs tracking-widest text-luxury-creamy/60 uppercase">
                  Paan & Confectionery
                </span>
                <div className="w-12 h-[1px] bg-gold-500/40 mx-auto mt-4" />
              </div>

              {navItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-display text-lg tracking-widest text-luxury-creamy hover:text-gold-400 text-center uppercase"
                >
                  {item.label}
                </motion.a>
              ))}

              <div className="w-full h-[1px] bg-gold-500/10 my-6" />

              <div className="flex flex-col space-y-4 pt-4 z-50">
                <a
                  href={`tel:${CONTACT_DETAILS.phone}`}
                  className="flex items-center justify-center gap-2 font-display text-sm tracking-widest text-luxury-creamy hover:text-gold-400 uppercase py-3 border border-gold-500/20 rounded-sm"
                >
                  <Phone size={16} className="text-gold-500" />
                  <span>Call Now</span>
                </a>
                <a
                  href={CONTACT_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 font-display text-sm font-medium tracking-widest text-luxury-black uppercase py-3 bg-gradient-to-r from-gold-400 to-gold-600 rounded-sm"
                >
                  <ShoppingCart size={16} />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
