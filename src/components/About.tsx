/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Target, Compass, Sparkles, Building, ArrowUpRight, Shield } from 'lucide-react';
import { CONTACT_INFO, IMAGES, TIMELINE, VALUES } from '../constants';

interface AboutProps {
  onOpenQuote: () => void;
}

export default function About({ onOpenQuote }: AboutProps) {
  const corePillars = [
    {
      title: 'Our Unified Mission',
      description: 'To deliver structural monuments & vital infrastructure developments within Egypt that comply with stringent global safety guidelines and architectural excellence, ensuring long-term prosperity for urban populations.',
      icon: <Target className="h-6 w-6 text-amber-500" />,
      bg: 'bg-slate-900/40'
    },
    {
      title: 'Our Global Vision',
      description: 'To be recognized as the premier engineering authority in the Middle East—elevating standard building practices by implementing BIM collaboration systems and climate-resilient construction materials.',
      icon: <Compass className="h-6 w-6 text-amber-500" />,
      bg: 'bg-slate-950'
    }
  ];

  return (
    <section id="about-us-page" className="bg-slate-900 border-t border-slate-900/50 py-16 sm:py-24 font-sans overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with luxurious negative space */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-xs font-bold font-mono tracking-widest text-amber-500 uppercase"
          >
            <Building className="h-3.5 w-3.5" />
            <span>EXECUTIVE PROFILE</span>
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight"
          >
            Redefining Construction Solidity. <br />
            <span className="text-slate-400">Egyptian Roots, International Caliber.</span>
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-6 h-1 w-20 bg-amber-500"
          />
        </div>

        {/* Top Split: Text & Engineer Group Image with Animated Overlay */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6">
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base font-bold text-slate-200 tracking-wide uppercase font-mono"
            >
              Who We Are
            </motion.h4>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-300 text-sm leading-relaxed"
            >
              Originally founded in Cairo, Egypt in 2012, **Creators Group Egypt** has rapidly developed from a prominent finishing partner into a comprehensive, multi-disciplinary construction general contractor. Today, we handle architectural designs, heavy infrastructure corridor laying, and luxury civil construction for private and governmental stakeholders.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-400 text-sm leading-relaxed"
            >
              We firmly believe that local urban expansion requires global-grade specifications. Our in-house engineering squad maintains rigid ISO standard workflows, while utilizing high-performance Building Information Modeling (BIM) for clash detection prior to laying concrete foundations. This ensures our projects are built right—and built for generations.
            </motion.p>

            {/* Quick callout button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-4 flex flex-wrap gap-4"
            >
              <button
                id="about-cta-quote"
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500 border-b border-amber-500/30 hover:border-amber-500 pb-1 cursor-pointer transition-colors"
              >
                Assemble Project Bid
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </motion.div>
          </div>

          {/* Right Overlapping Picture Container */}
          <div className="lg:col-span-6 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl w-full max-w-lg aspect-[4/3]"
            >
              <img
                src={IMAGES.engineers}
                alt="Creators Group Egypt engineers discussing on site"
                className="w-full h-full object-cover object-center filter brightness-95"
                referrerPolicy="no-referrer"
              />
              
              {/* Outer Decorative golden frames */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
              
              {/* Overlapping Info pill container */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-6 right-6 left-6 bg-slate-950/90 border border-slate-800 rounded-xl p-4 backdrop-blur-md flex items-center gap-3.5"
              >
                <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="font-display text-xs font-bold text-slate-100 uppercase tracking-widest">
                    Elite Civil Teams
                  </h5>
                  <p className="font-mono text-[9px] text-amber-500 uppercase tracking-wider mt-0.5">
                    100% Egyptian Engineering Corps
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Mission + Vision Split Card Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {corePillars.map((pill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`p-8 rounded-2xl border border-slate-800/80 flex flex-col gap-5 justify-between ${pill.bg}`}
            >
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-500">
                  {pill.icon}
                </div>
                <h4 className="font-display text-lg font-bold text-slate-100">{pill.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">{pill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Structural Values Block */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 border border-slate-800 text-amber-500 mb-4"
            >
              <Sparkles className="h-4 w-4" />
            </motion.div>
            <h4 className="font-display text-2xl font-bold text-white">Our Corporate Principles</h4>
            <p className="text-xs text-slate-400 mt-2">The fundamental values that govern our operations from raw masonry to high-rise handovers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((val, idx) => (
              <motion.div
                key={val.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-900 hover:border-slate-800 transition-all text-left space-y-3.5"
              >
                <div className="text-[10px] font-mono font-bold text-amber-500 uppercase tracking-widest">
                  Value 0{idx + 1}
                </div>
                <h5 className="font-display text-sm font-bold text-white uppercase tracking-wider">{val.title}</h5>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Company Timeline Vertical Timeline Block */}
        <div id="company-timeline-block" className="border-t border-slate-800/55 pt-16">
          <div className="max-w-2xl mb-12">
            <h4 className="font-display text-xl font-bold text-slate-100">Our Historic Trajectory</h4>
            <p className="text-xs text-slate-400 mt-1">Tracing our expansion from private Cairo dwellings to Egypt\'s massive modern mega-structures.</p>
          </div>

          <div className="relative pl-8 md:pl-0">
            {/* Direct Line Marker */}
            <div className="absolute left-[11px] md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-800" />

            <div className="space-y-12">
              {TIMELINE.map((evt, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={evt.year}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`relative grid grid-cols-1 md:grid-cols-12 md:gap-8 items-start ${
                      isEven ? 'md:text-right' : ''
                    }`}
                  >
                    {/* Ring Marker */}
                    <div className="absolute left-[-26px] md:left-1/2 md:translate-x-[-11px] h-6 w-6 rounded-full border-2 border-amber-500 bg-slate-900 flex items-center justify-center z-10">
                      <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                    </div>

                    <div className={`col-span-12 md:col-span-5 ${isEven ? 'md:block' : 'md:hidden'}`}>
                      <div className="space-y-1 font-sans">
                        <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-mono font-bold rounded-lg mb-2">
                          {evt.year}
                        </span>
                        <h5 className="font-display text-sm font-bold text-slate-100">{evt.title}</h5>
                        <p className="text-xs text-slate-400 leading-relaxed max-w-sm sm:mx-auto md:mr-0">{evt.description}</p>
                      </div>
                    </div>

                    {/* Gap Filler Column for alignment */}
                    <div className="hidden md:block md:col-span-2 text-center text-slate-700 font-mono text-sm pt-1">
                      {evt.year}
                    </div>

                    <div className={`col-span-12 md:col-span-5 ${!isEven ? 'md:block' : 'md:hidden'}`}>
                      <div className="space-y-1 text-left font-sans">
                        <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-mono font-bold rounded-lg mb-2">
                          {evt.year}
                        </span>
                        <h5 className="font-display text-sm font-bold text-slate-100">{evt.title}</h5>
                        <p className="text-xs text-slate-400 leading-relaxed max-w-sm">{evt.description}</p>
                      </div>
                    </div>

                    {/* Fallback layout for mobile: always show the right hand side details */}
                    <div className="col-span-12 md:hidden">
                      <div className="space-y-1 text-left font-sans">
                        <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-mono font-bold rounded-lg mb-2">
                          {evt.year}
                        </span>
                        <h5 className="font-display text-sm font-bold text-slate-100">{evt.title}</h5>
                        <p className="text-xs text-slate-400 leading-relaxed">{evt.description}</p>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
