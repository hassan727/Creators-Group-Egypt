/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % TESTIMONIALS.length);
    }, 6000); // 6s Auto Rotation
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setIndex(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setIndex(prev => (prev + 1) % TESTIMONIALS.length);
  };

  const active = TESTIMONIALS[index];

  return (
    <section id="testimonials-block" className="relative bg-slate-900 py-16 sm:py-20 border-t border-slate-950 font-sans overflow-hidden">
      {/* Visual Ambient overlay backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-amber-500/2 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading Quote mark style */}
        <div className="flex flex-col items-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 text-amber-500 shadow-md mb-4">
            <Quote className="h-5 w-5" />
          </div>
          <h4 className="font-display text-2xl font-bold text-white uppercase tracking-wider">
            Trust Formed in Stone
          </h4>
          <p className="text-xs text-slate-400 mt-2 font-medium">
            Hear from our prestigious private clients and senior municipal officials on our commitment to global benchmarks.
          </p>
        </div>

        {/* Carousel slide box with AnimatePresence FADE transition */}
        <div className="relative min-h-[280px] max-w-3xl mx-auto flex flex-col justify-center px-4 sm:px-12 bg-slate-950/40 border border-slate-950 p-8 sm:p-10 rounded-2xl shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="space-y-6 text-center select-none"
            >
              {/* Star review indicator bar */}
              <div className="flex justify-center items-center gap-1">
                {[1, 2, 3, 4, 5].map(st => (
                  <Star key={st} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Quotation text content */}
              <p className="text-xs sm:text-sm md:text-base text-slate-300 italic leading-relaxed font-sans font-light">
                "{active.quote}"
              </p>

              {/* Client specifications and avatar */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
                <img
                  src={active.avatar}
                  alt={active.author}
                  className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover border border-amber-500/30 shadow-md shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="text-center sm:text-left">
                  <h5 className="font-display text-xs font-bold text-slate-100 uppercase tracking-widest">
                    {active.author}
                  </h5>
                  <p className="font-mono text-[9px] text-amber-500 uppercase tracking-wider mt-0.5">
                    {active.role} • <span className="text-slate-400 font-sans">{active.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Selector Navigation Controls (Left-Right arrow handles) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-2 flex items-center justify-start">
            <button
              id="testimonial-prev-arrow"
              onClick={handlePrev}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-950/80 text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-colors"
              title="Previous testimony"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-2 flex items-center justify-end">
            <button
              id="testimonial-next-arrow"
              onClick={handleNext}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-950/80 text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-colors"
              title="Next testimony"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Carousel Navigation Dot Markers */}
        <div className="flex justify-center items-center gap-2.5 mt-8 sm:mt-10">
          {TESTIMONIALS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              id={`test-dot-${dotIdx}`}
              onClick={() => setIndex(dotIdx)}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                index === dotIdx ? 'w-6 bg-amber-500' : 'w-2 bg-slate-850 hover:bg-slate-700'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
