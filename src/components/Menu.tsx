import { useState } from 'react';
import { Search, ShoppingCart, Sparkles, Filter, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS, CONTACT_DETAILS } from '../data';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Premium', 'Specialty', 'Classic', 'Flavored'];

  // Handle building the specific WhatsApp text message
  const getWhatsAppLink = (itemName: string, price: number | string) => {
    const text = encodeURIComponent(
      `Hello Paan Studio! I would like to order the pre-selected item:\n\n🍀 *${itemName}* (₹${price})\n\nCould you please confirm availability and deliver details? Thank you.`
    );
    return `https://wa.me/917842978449?text=${text}`;
  };

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="relative py-24 bg-luxury-black border-t border-gold-500/10">
      {/* Light ambiance accents to highlight the menu */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-gold-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-[0.4em] text-gold-500 uppercase font-bold">
            Curated Culinary Catalog
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-luxury-cream mt-2 tracking-wide font-medium">
            Our Premium Menu
          </h2>
          <div className="w-12 h-[2px] bg-gold-500 mx-auto mt-4" />
          <p className="font-sans text-xs sm:text-sm text-luxury-creamy/60 max-w-xl mx-auto mt-4 font-light">
            Indulge in our exquisite assortment of sweet, refreshing, edible precious-metal coated traditional betel leaves.
          </p>
        </div>

        {/* Search & Category Filter Controls Panel */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-gold-500/10 pb-8">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 scrollbar-none">
            <Filter size={14} className="text-gold-500 hidden sm:block flex-shrink-0" />
            <div className="flex gap-2 min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 font-display text-[10px] tracking-widest font-semibold uppercase rounded-full border transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-gold-500 text-luxury-black border-gold-500'
                      : 'border-gold-500/20 text-luxury-creamy/70 hover:text-gold-400 hover:border-gold-500/40 bg-luxury-charcoal/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Real-time Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search digestive selection..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-luxury-charcoal/50 border border-gold-500/20 rounded-md py-3 pl-11 pr-4 text-xs tracking-wider text-luxury-cream placeholder-luxury-creamy/40 focus:outline-none focus:border-gold-500/70 focus:ring-1 focus:ring-gold-500/20 transition-all font-light"
            />
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-500" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-luxury-creamy/40 hover:text-gold-400"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Menu Listings Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group flex flex-col justify-between glass-card-gold glass-card-gold-hover p-5 rounded-sm relative overflow-hidden"
              >
                {/* Gold/Silver shimmer highlight indicator for exclusive premium products */}
                {item.isExclusive && (
                  <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
                    <div className="absolute top-3 right-[-32px] rotate-45 bg-gradient-to-r from-gold-600 to-gold-400 text-luxury-black font-display text-[8px] tracking-[0.2em] font-bold py-1 px-8 text-center uppercase shadow-sm">
                      Royal
                    </div>
                  </div>
                )}

                {/* Main Card Content */}
                <div>
                  {/* Food Picture representation if available */}
                  {item.image ? (
                    <div className="relative h-48 w-full overflow-hidden rounded-sm mb-4 border border-gold-500/10 bg-luxury-black">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent" />
                      
                      {item.isPopular && (
                        <span className="absolute top-3 left-3 bg-luxury-black/80 backdrop-blur-md border border-gold-400/40 text-gold-400 font-display text-[8px] tracking-widest font-semibold uppercase px-2 py-1 rounded-sm flex items-center gap-1">
                          <Sparkles size={10} className="fill-gold-400" /> Signature
                        </span>
                      )}
                    </div>
                  ) : (
                    /* Minimalist display badge details when no product picture */
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-display text-[9px] tracking-widest text-gold-400 uppercase bg-gold-950/40 border border-gold-500/20 px-2 py-1 rounded-sm">
                        {item.category}
                      </span>
                      {item.isPopular && (
                        <span className="text-gold-500 flex items-center gap-1 font-display text-[8px] tracking-wider uppercase">
                          <Check size={10} /> Fast Selling
                        </span>
                      )}
                    </div>
                  )}

                  {/* Header info */}
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-serif text-lg sm:text-xl text-luxury-cream group-hover:text-gold-300 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <span className="font-display text-sm sm:text-base text-gold-400 font-medium whitespace-nowrap">
                      ₹{item.price}
                    </span>
                  </div>

                  {/* Description details */}
                  <p className="font-sans text-xs sm:text-sm text-luxury-creamy/60 leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Order trigger */}
                <div className="pt-2 border-t border-gold-500/5 flex items-center justify-between w-full">
                  <span className="font-display text-[8px] tracking-widest text-luxury-creamy/40 uppercase">
                    Order to Vijayawada
                  </span>
                  
                  <a
                    href={getWhatsAppLink(item.name, item.price)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 font-display text-[10px] tracking-widest font-semibold text-gold-400 hover:text-luxury-black bg-transparent hover:bg-gold-500 border border-gold-500/20 hover:border-gold-500 py-2 px-3 rounded-sm transition-all duration-300 uppercase"
                  >
                    <ShoppingCart size={11} />
                    <span>Order Now</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State when zero filters match */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="font-display text-sm text-luxury-creamy/50 uppercase tracking-widest">
              No matching paan selection found.
            </p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="font-display text-xs text-gold-400 uppercase tracking-widest hover:underline mt-4 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Special Warning Text */}
        <div className="mt-12 text-center">
          <p className="font-display text-[9px] tracking-[0.2em] text-gold-500/40 uppercase">
            * Catering setups and gift-boxed orders for wedding receptions & special events are booked on advance reservation.
          </p>
        </div>

      </div>
    </section>
  );
}
