/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Milestone, Layers, Cpu, Briefcase, Compass, ChevronDown, ChevronUp, CheckCircle, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onOpenQuote: () => void;
}

export default function Services({ onOpenQuote }: ServicesProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2':
        return <Building2 className="h-6 w-6 text-amber-500" />;
      case 'Milestone':
        return <Milestone className="h-6 w-6 text-amber-500" />;
      case 'Layers':
        return <Layers className="h-6 w-6 text-amber-500" />;
      case 'Cpu':
        return <Cpu className="h-6 w-6 text-amber-500" />;
      case 'Briefcase':
        return <Briefcase className="h-6 w-6 text-amber-500" />;
      case 'Compass':
        return <Compass className="h-6 w-6 text-amber-500" />;
      default:
        return <Building2 className="h-6 w-6 text-amber-500" />;
    }
  };

  return (
    <section id="services-page" className="relative bg-slate-950 py-16 sm:py-24 border-t border-slate-900/60 font-sans overflow-hidden">
      {/* Decorative luxury gradient background radial */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-amber-500/2 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/25 bg-slate-900/60 text-[10px] font-bold tracking-widest text-amber-500 uppercase mb-4"
          >
            <span>ENGINEERING PORTFOLIO</span>
          </motion.div>
          
          <h3 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl uppercase">
            Our Elite Competencies
          </h3>
          <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Delivering structural robustness and aesthetic premium finishes to private and public developments throughout Cairo, Suez, and coastal regions in Egypt.
          </p>
        </div>

        {/* 6 Services Grid (Bento Style Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, index) => {
            const isExpanded = expandedCard === srv.id;
            return (
              <motion.div
                key={srv.id}
                id={`service-card-${srv.id}`}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl border bg-slate-900/40 hover:bg-slate-900/80 transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  isExpanded ? 'border-amber-500/40 ring-1 ring-amber-500/15 col-span-1 md:col-span-2 lg:col-span-1' : 'border-slate-800'
                }`}
              >
                <div className="p-6 sm:p-8 space-y-4">
                  {/* Icon Circular container */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 shadow-md">
                    {getIcon(srv.icon)}
                  </div>

                  <h4 className="font-display text-base font-bold text-slate-100 uppercase tracking-wide">
                    {srv.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {srv.description}
                  </p>

                  {/* Expandable Technical Bulletins */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`service-details-${srv.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pt-4 border-t border-slate-800 mt-4"
                      >
                        <h5 className="text-[10px] uppercase font-bold text-amber-500 tracking-wider mb-2.5">
                          Methodology & Specifications:
                        </h5>
                        <ul className="space-y-2.5 font-sans">
                          {srv.expandableDetails.map((det, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                              <CheckCircle className="h-3.5 w-3.5 text-amber-500/80 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{det}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Bottom Panel / Controller */}
                <div className="px-6 py-4 sm:px-8 sm:py-5 bg-slate-950/40 border-t border-slate-800/60 flex items-center justify-between">
                  {/* Action toggler */}
                  <button
                    id={`service-learn-more-${srv.id}`}
                    onClick={() => toggleExpand(srv.id)}
                    className="group inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-amber-500 transition-colors uppercase tracking-wider"
                  >
                    <span>{isExpanded ? 'Collapse brief' : 'Learn More'}</span>
                    {isExpanded ? (
                      <ChevronUp className="h-3.5 w-3.5 text-amber-500" />
                    ) : (
                      <ChevronDown className="h-3.5 w-3.5 text-slate-400 group-hover:text-amber-500 transition-transform duration-200" />
                    )}
                  </button>

                  <button
                    id={`service-quote-btn-${srv.id}`}
                    onClick={onOpenQuote}
                    className="inline-flex h-8 items-center justify-center text-[10px] font-bold text-amber-500 border border-amber-500/20 hover:border-amber-500/60 hover:bg-amber-500/5 px-3 rounded-lg transition-all uppercase tracking-widest cursor-pointer"
                  >
                    Bid Enquiry
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Competency Highlights */}
        <div className="mt-16 sm:mt-24 bg-gradient-to-r from-slate-900 to-slate-950 rounded-2xl border border-slate-800 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="space-y-3 max-w-2xl">
            <h4 className="font-display text-lg font-bold text-slate-100 uppercase tracking-wide">
              Need custom technical specifications or structural calculations?
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Our registered engineering panel coordinates directly with global design architects and Egyptian municipal structural inspection boards to deliver certified draft schedules.
            </p>
          </div>

          <button
            id="services-global-quote"
            onClick={onOpenQuote}
            className="w-full md:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg hover:shadow-amber-500/10 transition-all shrink-0 cursor-pointer flex items-center justify-center gap-2"
          >
            Initiate Consultation
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
