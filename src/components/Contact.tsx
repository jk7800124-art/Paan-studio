import { MapPin, Phone, MessageCircle, Instagram, Clock, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT_DETAILS } from '../data';

export default function Contact() {
  const cards = [
    {
      icon: <MapPin className="text-gold-500" size={24} />,
      title: 'Our Location',
      display: CONTACT_DETAILS.address,
      link: 'https://maps.google.com/?q=Tikkle+Road,+Opp.+Manor+Food+Plaza,+Labbipet,+Vijayawada+-+520010',
      actionLabel: 'Get Directions'
    },
    {
      icon: <Phone className="text-gold-500" size={24} />,
      title: 'Phone Concierge',
      display: CONTACT_DETAILS.phoneDisplay,
      link: `tel:${CONTACT_DETAILS.phone}`,
      actionLabel: 'Call Center'
    },
    {
      icon: <MessageCircle className="text-gold-500" size={24} />,
      title: 'WhatsApp Dispatch',
      display: 'Order Instant Delivery',
      link: CONTACT_DETAILS.whatsappUrl,
      actionLabel: 'Chat Live'
    },
    {
      icon: <Instagram className="text-gold-500" size={24} />,
      title: 'Instagram',
      display: `@${CONTACT_DETAILS.instagram}`,
      link: CONTACT_DETAILS.instagramUrl,
      actionLabel: 'Follow Profile'
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-luxury-black border-t border-gold-500/10">
      {/* Background visual embellishment */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gold-950/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-[0.4em] text-gold-500 uppercase font-bold">
            Connect & Visit
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-luxury-cream mt-2 tracking-wide font-medium">
            Contact & Private Salon
          </h2>
          <div className="w-12 h-[2px] bg-gold-500 mx-auto mt-4" />
          <p className="font-sans text-xs sm:text-sm text-luxury-creamy/60 max-w-xl mx-auto mt-4 font-light">
            We are located opposite the Manor Food Plaza, near Labbipet, Vijayawada. Visit us for an exquisite dine-in paan experience or reach our concierge.
          </p>
        </div>

        {/* Contact Split Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-stretch">
          
          {/* Left Column: Direct Action cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <motion.a
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                href={card.link}
                target={card.link.startsWith('http') ? '_blank' : undefined}
                rel={card.link.startsWith('http') ? 'noreferrer' : undefined}
                className="glass-card-gold p-6 rounded-sm flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:border-gold-500/50"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm border border-gold-500/10 bg-gold-950/10 flex items-center justify-center mb-4 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="font-display text-xs tracking-widest text-gold-400 uppercase font-bold">
                    {card.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-luxury-creamy/80 mt-2 font-light leading-relaxed">
                    {card.display}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gold-500/5 flex items-center justify-between">
                  <span className="font-display text-[9px] tracking-widest text-gold-500 uppercase font-semibold group-hover:underline">
                    {card.actionLabel}
                  </span>
                  <span className="text-luxury-creamy/40 font-semibold group-hover:translate-x-1 group-hover:text-gold-400 transition-all duration-300">
                    &rarr;
                  </span>
                </div>
              </motion.a>
            ))}

            {/* Timings Detail box spanning 2 columns */}
            <div className="sm:col-span-2 glass-card-gold p-6 rounded-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm border border-gold-500/10 bg-gold-950/10 flex items-center justify-center shrink-0">
                <Clock className="text-gold-500" size={20} />
              </div>
              <div className="w-full">
                <h4 className="font-display text-xs tracking-widest text-gold-400 uppercase font-bold">
                  Operating Hours
                </h4>
                <div className="grid grid-cols-2 gap-2 mt-3 font-sans text-xs text-luxury-creamy/80 font-light">
                  <div>Weekday Hours:</div>
                  <div className="text-gold-300 text-right">1:00 PM - 12:30 AM</div>
                  <div>Sundays & Holidays:</div>
                  <div className="text-gold-300 text-right">1:00 PM - 1:00 AM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps live embed with luxury frame wrapping */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative flex flex-col justify-between"
          >
            {/* Visual borders frame decorator */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold-500/30 rounded-sm pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold-500/30 rounded-sm pointer-events-none" />

            <div className="w-full h-full min-h-[380px] border border-gold-500/20 bg-luxury-charcoal rounded-sm overflow-hidden p-2 shadow-2xl">
              <iframe
                title="Paan Studio Vijayawada Google Maps Embed Location"
                src={CONTACT_DETAILS.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.8) invert(0.92) contrast(1.2)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="rounded-sm"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
