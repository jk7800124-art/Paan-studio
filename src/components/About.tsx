import { Star, ShieldCheck, Sparkles, Gem } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT_DETAILS } from '../data';
import packagingImg from '../assets/images/paan_packaging_1781870558810.jpg';

export default function About() {
  const values = [
    {
      icon: <Sparkles className="text-gold-500" size={20} />,
      title: 'Crafted Culinary Artistry',
      desc: 'Each creation is custom hand-wrapped, blending age-old Indian digestives with contemporary global confectionery toppings.'
    },
    {
      icon: <ShieldCheck className="text-gold-500" size={20} />,
      title: 'Flawless Food Hygiene',
      desc: 'Pristinely prepared in a clean environment matching five-star quality standards. We filter, sanitize, and care for every leaf.'
    },
    {
      icon: <Gem className="text-gold-500" size={20} />,
      title: 'Premium Royal Ingredients',
      desc: 'Featuring authentic edible 24k gold leaf, 100% pure silver vark, custom Damascus rose gulkand, and finest hand-picked nuts.'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-luxury-black overflow-hidden border-t border-gold-500/10">
      {/* Subtle brand patterns background wrapper */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image Card Presentation */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            {/* Elegant Double Decorative Gold Accented Frame */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-gold-500/40 rounded-sm" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-gold-500/40 rounded-sm" />
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative rounded-sm overflow-hidden border border-gold-500/20 shadow-2xl bg-luxury-charcoal"
            >
              <img
                src={packagingImg}
                alt="Paan Studio Luxury Selection Presentation"
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-card-gold text-center rounded-sm">
                <span className="font-display text-[10px] tracking-[0.4em] text-gold-400 uppercase font-semibold block mb-1">
                  Est. 2026 • Vijayawada
                </span>
                <span className="font-serif text-lg text-luxury-cream block">
                  The Gold & Silver Standard
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative Concept */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <div className="mb-4">
              <span className="font-display text-xs tracking-[0.4em] text-gold-500 uppercase font-bold">
                Luxury Confectionery Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-luxury-cream mt-2 tracking-wide font-medium leading-tight">
                A Heritage of Pure Indulgence in Vijayawada
              </h2>
              <div className="w-16 h-[2px] bg-gold-500 my-6" />
            </div>

            <p className="font-sans text-sm sm:text-base text-luxury-creamy/80 leading-relaxed font-light mb-8">
              Welcome to <span className="text-gold-400 font-medium">Paan Studio</span> – Vijayawada&apos;s ultimate premium paan and confectionery salon. Situated elegantly on Tikkle Road, Labbipet, we redefine traditional hospitality by combining ancient recipes with premium grade, certified organic ingredients and visual presentation.
            </p>
            
            <p className="font-sans text-sm sm:text-base text-luxury-creamy/70 leading-relaxed font-light mb-12">
              Every betel leaf served at our studio is handpicked from pristine local gardens, thoroughly washed, and curated to perfect tenderness. From our signature 24-karat gold-wrapped Gold Paan to specialized dry fruit and ice-cooled sweet plates, we craft unforgettable digestifs that elevate your celebratory occasions.
            </p>

            {/* Values bullet points list */}
            <div className="space-y-6">
              {values.map((val, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={idx}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-sm border border-gold-500/20 bg-gold-950/20 flex items-center justify-center shadow-inner">
                    {val.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-sm tracking-widest text-gold-400 uppercase font-semibold">
                      {val.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-luxury-creamy/60 mt-1 leading-relaxed font-light">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
