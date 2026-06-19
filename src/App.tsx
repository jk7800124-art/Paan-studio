import { useState, useEffect } from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import our custom modular modules
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CONTACT_DETAILS } from './data';

export default function App() {
  const [showFloatingActions, setShowFloatingActions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowFloatingActions(true);
      } else {
        setShowFloatingActions(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-luxury-black text-luxury-cream font-sans min-h-screen relative antialiased selection:bg-gold-500 selection:text-luxury-black">
      
      {/* Absolute Ambient Background Shimmer Canvas */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gold-950/5 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gold-950/5 blur-[120px]" />
      </div>

      {/* Header Sticky Navigation */}
      <Header />

      {/* Page Content Stack */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Sticky Quick-Access Corner Panels (Only visible upon scroll) */}
      <AnimatePresence>
        {showFloatingActions && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
          >
            {/* Call Concierge Bubble */}
            <a
              href={`tel:${CONTACT_DETAILS.phone}`}
              className="w-12 h-12 rounded-full bg-luxury-charcoal border border-gold-500/30 flex items-center justify-center text-luxury-creamy hover:text-gold-400 hover:border-gold-500 shadow-xl transition-all duration-300 hover:-translate-y-1"
              title="Call Concierge"
              aria-label="Call Concierge"
            >
              <Phone size={18} className="text-gold-500" />
            </a>

            {/* Live WhatsApp chat Bubble */}
            <a
              href={CONTACT_DETAILS.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 flex items-center justify-center text-luxury-black hover:from-gold-400 hover:to-gold-500 shadow-xl shadow-gold-500/20 transition-all duration-300 hover:-translate-y-1 relative group"
              title="WhatsApp Ordering"
              aria-label="Order on WhatsApp"
            >
              <span className="absolute -left-24 bg-luxury-black/90 text-gold-400 text-[9px] tracking-widest uppercase py-1 px-2 border border-gold-500/20 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                Order Live
              </span>
              <MessageCircle size={18} className="fill-luxury-black" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
