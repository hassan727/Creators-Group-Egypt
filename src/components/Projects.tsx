/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, X, MapPin, Calendar, Briefcase, ChevronRight, Award, Plus } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Infrastructure'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ('All' | 'Residential' | 'Commercial' | 'Infrastructure')[] = [
    'All',
    'Residential',
    'Commercial',
    'Infrastructure',
  ];

  const filteredProjects = PROJECTS.filter(proj => {
    if (filter === 'All') return true;
    return proj.category === filter;
  });

  return (
    <section id="projects-page" className="relative bg-slate-900 py-16 sm:py-24 border-t border-slate-800/40 font-sans overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(245,158,11,0.015)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Head */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold font-mono tracking-widest text-amber-500 uppercase">
              <Filter className="h-3.5 w-3.5" />
              <span>COMMISSIONED ACHIEVEMENTS</span>
            </div>
            <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl uppercase">
              Monuments of Egyptian Progress
            </h3>
            <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Discover our structural landmarks, heavy multi-lane highway loops, contemporary corporate towers, and world-class educational hubs built according to international standards.
            </p>
          </div>

          {/* Filter Navigation Row (Pill layout) */}
          <div className="flex flex-wrap gap-2 items-center">
            {categories.map(cat => (
              <button
                key={cat}
                id={`filter-tab-${cat.toLowerCase()}`}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-bold font-sans tracking-wide uppercase rounded-lg border transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? 'border-amber-500 bg-amber-500 text-slate-950 font-extrabold shadow-md shadow-amber-500/10'
                    : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700 hover:text-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid Container */}
        <motion.div
          id="projects-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                id={`project-thumb-${proj.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(proj)}
                className="group relative rounded-2xl border border-slate-800/80 bg-slate-950 overflow-hidden cursor-pointer shadow-lg hover:border-amber-500/30 transition-all duration-300 flex flex-col"
              >
                {/* Image and Zoom Trigger */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-center filter group-hover:scale-107 group-hover:brightness-90 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Decorative dynamic hover screen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Plus Icon Accent */}
                  <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-slate-950/90 border border-slate-800 flex items-center justify-center text-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <Plus className="h-4 w-4 text-amber-500" />
                  </div>

                  {/* Absolute Category Tag */}
                  <span className="absolute bottom-4 left-4 inline-block px-2.5 py-1 text-[9px] font-bold font-mono uppercase tracking-wider text-amber-400 bg-slate-950/90 border border-slate-800/70 rounded">
                    {proj.category}
                  </span>
                </div>

                {/* Thumb specs description */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 font-sans text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      <MapPin className="h-3 w-3 text-amber-500/60" />
                      <span>{proj.location}</span>
                    </div>
                    <h4 className="font-display text-base font-bold text-slate-100 group-hover:text-amber-500 transition-colors tracking-wide leading-snug">
                      {proj.title}
                    </h4>
                    <p className="line-clamp-2 text-xs text-slate-400 leading-relaxed font-sans">
                      {proj.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-900 flex items-center justify-between text-[11px] font-medium text-slate-300 uppercase tracking-wider group-hover:text-amber-500 transition-colors">
                    <span>View project dossier</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Global dossier invite row */}
        <div className="text-center mt-16 text-xs text-slate-500">
          Showing {filteredProjects.length} representative global-grade engineering assets built in Egypt.
        </div>

      </div>

      {/* DETAILED PROJECT LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto p-4 sm:p-6 lg:p-8">
            {/* Dark Blur Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            {/* Lightbox Dossier Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-4xl rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden text-slate-100 font-sans"
            >
              {/* Top border line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-500" />

              {/* Close Button */}
              <button
                id="close-lightbox"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-slate-950/90 text-slate-400 hover:border-slate-700 hover:text-slate-100 transition-all shadow-md"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                
                {/* Left Side: Large Image with gradient overlays */}
                <div className="col-span-12 md:col-span-6 relative h-64 md:h-auto min-h-[300px]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="absolute inset-0 w-full h-full object-cover object-center filter brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-slate-900 pointer-events-none" />
                  
                  {/* Decorative Category pill in photo area */}
                  <span className="absolute bottom-6 left-6 inline-block px-3 py-1.5 text-xs font-bold font-mono uppercase tracking-widest text-slate-950 bg-amber-500 rounded-lg shadow-lg">
                    {selectedProject.category}
                  </span>
                </div>

                {/* Right Side: dossier text and technical specs */}
                <div className="col-span-12 md:col-span-6 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-amber-500 uppercase">
                        <Award className="h-3.5 w-3.5" />
                        <span>PREMIER ENGINEERING BRIEF</span>
                      </div>
                      
                      <h4 className="font-display text-lg sm:text-xl font-bold text-slate-100 mt-1 uppercase tracking-wider">
                        {selectedProject.title}
                      </h4>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {selectedProject.description}
                    </p>

                    {/* Specifications key-value matrix board */}
                    <div className="grid grid-cols-2 gap-3 bg-slate-950/85 p-4 rounded-xl border border-slate-850 font-mono text-[10px] text-slate-400">
                      <div className="space-y-0.5">
                        <div className="text-slate-500 uppercase tracking-widest flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          <span>Client Partner</span>
                        </div>
                        <div className="text-slate-200 font-sans font-semibold text-xs truncate">{selectedProject.client}</div>
                      </div>

                      <div className="space-y-0.5">
                        <div className="text-slate-500 uppercase tracking-widest flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>Site Location</span>
                        </div>
                        <div className="text-slate-200 font-sans font-semibold text-xs truncate">{selectedProject.location}</div>
                      </div>

                      <div className="space-y-0.5 mt-2">
                        <div className="text-slate-500 uppercase tracking-widest flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>Handover Year</span>
                        </div>
                        <div className="text-slate-200 font-sans font-semibold text-xs">{selectedProject.year}</div>
                      </div>

                      <div className="space-y-0.5 mt-2">
                        <div className="text-slate-500 uppercase tracking-widest flex items-center gap-1">
                          <Award className="h-3 w-3" />
                          <span>Commission Rating</span>
                        </div>
                        <div className="text-amber-500 font-sans font-bold text-xs uppercase">ISO Class A-1</div>
                      </div>
                    </div>

                    {/* Bullet Highlights */}
                    <div className="space-y-2">
                      <h5 className="text-[10px] font-mono uppercase font-bold text-amber-500 tracking-wider">
                        Material & Construction Benchmarks:
                      </h5>
                      <ul className="grid grid-cols-1 gap-2 text-xs font-sans text-slate-300">
                        {selectedProject.highlights.map((hil, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                            <span className="leading-relaxed">{hil}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="pt-4 border-t border-slate-800 flex justify-end">
                    <button
                      id="close-lightbox-footer"
                      onClick={() => setSelectedProject(null)}
                      className="px-5 py-2.5 bg-slate-100 text-slate-950 font-bold text-xs tracking-wider uppercase rounded-lg hover:bg-slate-200 transition-all cursor-pointer font-sans"
                    >
                      Dismiss Dossier
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
