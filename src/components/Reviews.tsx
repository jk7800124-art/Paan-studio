import React, { useState } from 'react';
import { Star, MessageSquarePlus, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS } from '../data';
import { Review } from '../types';

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [isOpenForm, setIsOpenForm] = useState(false);
  
  // Submit state details
  const [newName, setNewName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess(false);

    if (!newName.trim() || !newComment.trim()) {
      setFormError('Please complete all form fields.');
      return;
    }

    const todayStr = new Date().toISOString().split('T')[0];

    const addedReview: Review = {
      id: `rev-${Date.now()}`,
      name: newName,
      rating: newRating,
      comment: newComment,
      date: todayStr,
      verified: true
    };

    setReviewsList([addedReview, ...reviewsList]);
    setFormSuccess(true);
    
    // Reset state triggers
    setNewName('');
    setNewComment('');
    setNewRating(5);
    
    // Auto collapse after 2.5 seconds
    setTimeout(() => {
      setFormSuccess(false);
      setIsOpenForm(false);
    }, 2500);
  };

  return (
    <section id="reviews" className="relative py-24 bg-luxury-black border-t border-gold-500/10">
      {/* Background Graphic patterns */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-gold-900/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="text-center md:text-left">
            <span className="font-display text-xs tracking-[0.4em] text-gold-500 uppercase font-bold">
              Client Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-luxury-cream mt-2 tracking-wide font-medium">
              Connoisseur Stories
            </h2>
            <div className="w-12 h-[2px] bg-gold-500 mt-4 mx-auto md:mx-0" />
          </div>

          <div>
            <button
              onClick={() => setIsOpenForm(!isOpenForm)}
              className="flex items-center gap-2 font-display text-xs tracking-widest font-semibold uppercase bg-transparent text-gold-400 border border-gold-500/20 hover:border-gold-500/70 hover:text-gold-300 py-3 px-6 rounded-sm transition-all duration-300 cursor-pointer"
            >
              <MessageSquarePlus size={16} />
              <span>{isOpenForm ? 'Close Form' : 'Write a Review'}</span>
            </button>
          </div>
        </div>

        {/* Dynamic review form expanding */}
        <AnimatePresence>
          {isOpenForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden mb-16"
            >
              <div className="max-w-2xl mx-auto glass-card-gold p-6 sm:p-8 rounded-sm">
                <h3 className="font-serif text-xl text-luxury-cream text-center mb-6">
                  Share Your Experience
                </h3>
                
                {formSuccess ? (
                  <div className="text-center py-6 flex flex-col items-center justify-center gap-2 text-gold-400">
                    <CheckCircle className="text-gold-500" size={32} />
                    <p className="font-display text-sm tracking-widest uppercase font-semibold mt-2">
                      Review Posted Successfully!
                    </p>
                    <p className="font-sans text-xs text-luxury-creamy/50">
                      Your authentic review is live. Thank you for your feedback.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitReview} className="space-y-4">
                    
                    {/* Stars Select Input */}
                    <div className="flex flex-col items-center gap-2 mb-4">
                      <span className="font-display text-[10px] tracking-widest uppercase text-luxury-creamy/60">
                        Select Rating
                      </span>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setNewRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(null)}
                            className="text-2xl transition-colors focus:outline-none"
                            aria-label={`Rate ${star} star`}
                          >
                            <Star
                              size={20}
                              className={`transition-colors shadow-inner ${
                                star <= (hoverRating ?? newRating)
                                  ? 'text-gold-400 fill-gold-400'
                                  : 'text-luxury-gray fill-transparent'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Full Name input */}
                    <div>
                      <label className="block font-display text-[9px] tracking-widest uppercase text-luxury-creamy/60 mb-1" htmlFor="reviewer-name">
                        Your Full Name
                      </label>
                      <input
                        id="reviewer-name"
                        type="text"
                        placeholder="E.g., Venkata Prasad"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="w-full bg-luxury-charcoal/50 border border-gold-500/20 py-3 px-4 rounded-sm text-xs tracking-wider text-luxury-cream focus:outline-none focus:border-gold-500/60 font-light"
                      />
                    </div>

                    {/* Comments Textarea */}
                    <div>
                      <label className="block font-display text-[9px] tracking-widest uppercase text-luxury-creamy/60 mb-1" htmlFor="review-comment">
                        Feedback details
                      </label>
                      <textarea
                        id="review-comment"
                        rows={4}
                        placeholder="Tell us what you liked about our premium paans..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="w-full bg-luxury-charcoal/50 border border-gold-500/20 py-3 px-4 rounded-sm text-xs tracking-wider text-luxury-cream focus:outline-none focus:border-gold-500/60 font-light"
                      />
                    </div>

                    {formError && (
                      <p className="font-display text-[10px] text-red-500 uppercase tracking-wider text-center">
                        {formError}
                      </p>
                    )}

                    {/* Submit action */}
                    <div className="pt-2 text-center">
                      <button
                        type="submit"
                        className="w-full sm:w-auto font-display text-[10px] tracking-wider font-semibold text-luxury-black bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 py-3 px-8 uppercase outline-none rounded-sm transition-all shadow-md cursor-pointer"
                      >
                        Publish Testimonial
                      </button>
                    </div>

                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Testimonials Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {reviewsList.map((rev, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={rev.id}
                className="glass-card-gold p-6 sm:p-8 rounded-sm relative flex flex-col justify-between"
              >
                {/* Quotes Decorator graphic */}
                <span className="absolute right-6 top-4 font-serif text-7xl text-gold-500/5 select-none pointer-events-none">
                  “
                </span>

                <div>
                  {/* Rating Stars row */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < rev.rating
                            ? 'text-gold-400 fill-gold-400'
                            : 'text-luxury-gray fill-transparent'
                        }
                      />
                    ))}
                  </div>

                  {/* Comment narrative */}
                  <p className="font-sans text-xs sm:text-sm text-luxury-creamy/85 leading-relaxed font-light italic mb-6">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                {/* Footer Meta Row holds customer details */}
                <div className="flex items-center justify-between border-t border-gold-500/5 pt-4 mt-2">
                  <div>
                    <h4 className="font-display text-xs tracking-widest text-luxury-cream uppercase font-semibold">
                      {rev.name}
                    </h4>
                    <span className="font-display text-[9px] text-luxury-creamy/40 uppercase">
                      Posted on {new Date(rev.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                  </div>

                  {rev.verified && (
                    <span className="font-display text-[8px] tracking-widest text-gold-400 uppercase bg-gold-900/20 border border-gold-500/10 px-2 py-1 rounded-sm flex items-center gap-1">
                      <CheckCircle size={10} className="text-gold-400" />
                      <span>Verified Guest</span>
                    </span>
                  )}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
