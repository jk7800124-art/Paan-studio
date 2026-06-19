import { Phone, MessageCircle, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT_DETAILS } from '../data';

export default function Hero() {
  const handleScrollToMenu = () => {
    const element = document.querySelector('#menu');
    if (element) {
      const position = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = position - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Graphic Image with Premium Dark Overlay Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/paan_hero_1781870480962.jpg"
          alt="Luxury Paan Studio Display Banner"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Dark gold gradients overlay to optimize text contrast & blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/75 to-luxury-black/40" />
        <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,rgba(12,12,12,0.1)_0%,#0c0c0c_90%)" />
      </div>

      {/* Decorative Golden Borders Frame */}
      <div className="absolute inset-4 sm:inset-6 border border-gold-500/10 pointer-events-none rounded-sm z-10" />
      <div className="absolute inset-6 sm:inset-8 border border-gold-500/5 pointer-events-none rounded-sm z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 border border-gold-500/30 px-3 py-1 rounded-full mb-6 bg-gold-950/40 backdrop-blur-sm shadow-inner"
        >
          <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse" />
          <span className="font-display text-[9px] tracking-[0.4em] text-gold-300 uppercase font-medium">
            Imperial Paan & Confectionery Salon
          </span>
        </motion.div>

        {/* Master Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-wide text-luxury-cream mb-6 leading-tight max-w-4xl"
        >
          Experience Premium Paan <br />
          <span className="text-gold-gradient font-medium italic">Like Never Before</span>
        </motion.h1>

        {/* Tagline / Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-sans text-sm sm:text-lg text-luxury-creamy/80 max-w-2xl mb-10 tracking-wide font-light"
        >
          Vijayawada&apos;s ultimate curated destination for legendary betel leaf creations. Hand-wrapped, custom-aged, and garnished in pure gold & silver foils.
        </motion.p>

        {/* CTA Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* WhatsApp Order button */}
          <a
            href={CONTACT_DETAILS.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 w-full sm:w-64 font-display text-xs tracking-[0.2em] font-semibold text-luxury-black bg-gradient-to-r from-gold-300 via-gold-500 to-gold-700 hover:from-gold-200 hover:to-gold-600 px-8 py-4 uppercase shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20 active:scale-98 transition-all duration-300 rounded-sm"
          >
            <MessageCircle size={16} className="fill-luxury-black" />
            <span>Order via WhatsApp</span>
          </a>

          {/* Call Now Button */}
          <a
            href={`tel:${CONTACT_DETAILS.phone}`}
            className="flex items-center justify-center gap-3 w-full sm:w-64 font-display text-xs tracking-[0.2em] font-semibold text-luxury-creamy hover:text-gold-400 border border-gold-500/30 hover:border-gold-500/80 px-8 py-4 uppercase bg-luxury-black/30 hover:bg-luxury-black/60 transition-all duration-300 rounded-sm"
          >
            <Phone size={16} className="text-gold-500" />
            <span>Call Concierge</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer z-35"
          onClick={handleScrollToMenu}
        >
          <span className="font-display text-[9px] tracking-[0.3em] text-gold-500/60 uppercase mb-2">
            Explore Menu
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gold-500/20 bg-luxury-black/50"
          >
            <ArrowDown size={14} className="text-gold-400" />
          </motion.div>
        </motion.div>
      </div>

      {/* Luxury Ambience Accent Lights */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gold-700/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-gold-900/5 blur-3xl pointer-events-none" />
    </section>
  );
}
