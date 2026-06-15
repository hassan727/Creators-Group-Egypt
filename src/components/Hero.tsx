/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, ShieldCheck, Zap, Layers } from 'lucide-react';
import { IMAGES } from '../constants';

interface HeroProps {
  onOpenQuote: () => void;
  onNavigateToAbout: () => void;
}

export default function Hero({ onOpenQuote, onNavigateToAbout }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950 font-sans"
    >
      {/* Cinematic Background Image with Zoom-In Motion */}
      <motion.div
        id="hero-background"
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.02, opacity: 0.55 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none"
        style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
      />

      {/* Luxury Dark-Slate Vignette / Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-slate-950/30 pointer-events-none" />

      {/* Tech Accent Grid (Subtle dot background) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.02)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 mt-12">
        
        {/* Subtle Luxury Pre-header Badge */}
        <motion.div
          id="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-slate-900/80 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-amber-500 uppercase backdrop-blur-md mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
          World-Class Standards in Egypt
        </motion.div>

        {/* Main Hero Header */}
        <motion.h2
          id="hero-title"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]"
        >
          Building Egypt's Future <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600">
            With Global Standards
          </span>
        </motion.h2>

        {/* Elite Subtitle */}
        <motion.p
          id="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-sans"
        >
          Creators Group Egypt blends international engineering rigor, ISO compliance, and luxury architectural design to construct Cairo's next generation of legacy buildings, major bridges, and custom residential compounds.
        </motion.p>

        {/* Action Button Set */}
        <motion.div
          id="hero-actions"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          {/* Animated Main CTA Button */}
          <button
            id="hero-get-quote-btn"
            onClick={onOpenQuote}
            className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-extrabold uppercase tracking-widest text-xs rounded-xl shadow-xl shadow-amber-500/10 cursor-pointer transition-all duration-300 hover:shadow-amber-500/20 hover:-translate-y-0.5"
          >
            <span className="flex items-center justify-center gap-2">
              Get a Quote
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </span>
          </button>

          {/* Secondary Discover Link */}
          <button
            id="hero-discover-btn"
            onClick={onNavigateToAbout}
            className="w-full sm:w-auto px-8 py-4 border border-slate-700 hover:border-slate-500 bg-slate-900/40 hover:bg-slate-900/70 text-slate-300 hover:text-slate-100 font-bold uppercase tracking-widest text-xs rounded-xl backdrop-blur-md transition-all duration-200"
          >
            Discover Achievements
          </button>
        </motion.div>

        {/* Global Credentials Quick Row */}
        <motion.div
          id="hero-credentials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="hidden md:flex justify-center items-center gap-10 mt-16 text-slate-500 text-xs font-semibold"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-amber-500/70" />
            <span>ISO 9001, 14001, 45001 CERTIFIED</span>
          </div>
          <div className="h-4 w-px bg-slate-800" />
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-amber-500/70" />
            <span>FULL MULTI-DISCIPLINARY BIM</span>
          </div>
          <div className="h-4 w-px bg-slate-800" />
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-amber-500/70" />
            <span>CLASH-FREE DESIGN RECON</span>
          </div>
        </motion.div>

      </div>

      {/* Scrolling mouse luxury indicator */}
      <motion.div
        id="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay: 1.5 }}
        onClick={onNavigateToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
      >
        <span className="font-mono text-[9px] tracking-widest text-slate-500 uppercase">
          Scroll Down
        </span>
        <div className="flex h-8 w-5 justify-center rounded-full border border-slate-700 bg-slate-950/60 p-1">
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-amber-500"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
