/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building, ShieldCheck, Mail, Phone, ChevronRight, Award, Compass, Milestone, Layers, ArrowUpRight } from 'lucide-react';

// Components
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

// Constants & Types
import { CONTACT_INFO, PROJECTS } from './constants';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const homeServicesPreview = [
    {
      title: 'General Contracting',
      description: 'Laying powerful structural foundation frames, concrete columns, and steel skeletons supporting international building codes.',
      icon: <Building className="h-6 w-6 text-amber-500" />
    },
    {
      title: 'Finishing Works',
      description: 'Bespoke travertine external cladding, limestone panels, premium marble layouts, and glass curtain facade styling.',
      icon: <Layers className="h-6 w-6 text-amber-500" />
    },
    {
      title: 'Infrastructure Corridor',
      description: 'Engineering multi-tier flyover interchanges, robust transport avenues, retaining walls, and civil grading throughout Egypt.',
      icon: <Milestone className="h-6 w-6 text-amber-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 overflow-x-hidden antialiased">
      {/* Dynamic Subtle Logo Loader */}
      <Loader />

      {/* Shrinking sticky Navigation bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Main Pages Content Switcher with animations on scroll/tab shift */}
      <main className="relative pt-[70px]">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home-page-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Hero Banner Section */}
              <Hero
                onOpenQuote={() => setIsQuoteOpen(true)}
                onNavigateToAbout={() => {
                  setActiveTab('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />

              {/* Counter Statistics Section */}
              <Stats />

              {/* Homepage: 3-Cards Services Preview Section */}
              <section id="services-preview-section" className="bg-slate-950 py-16 sm:py-24 border-b border-slate-900/60 text-left font-sans">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold font-mono tracking-widest text-amber-500 uppercase">
                      OUR MANDATE
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl uppercase">
                      Precision Core Competencies
                    </h3>
                    <p className="mt-3 text-xs text-slate-400 leading-relaxed font-sans">
                      Creators Group Egypt applies global construction paradigms to build sturdy frameworks, high-end finishing facade, and mega-scale infrastructure.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {homeServicesPreview.map((srv, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="p-6 sm:p-8 rounded-2xl border border-slate-900 bg-slate-950 flex flex-col justify-between hover:border-slate-800 transition-all duration-300"
                      >
                        <div className="space-y-4">
                          <div className="h-11 w-11 rounded-lg bg-slate-900 border border-slate-850 flex items-center justify-center text-amber-500 shadow-sm">
                            {srv.icon}
                          </div>
                          <h4 className="font-display text-base font-bold text-slate-100 uppercase tracking-wide">
                            {srv.title}
                          </h4>
                          <p className="text-xs text-slate-400 leading-relaxed font-sans">
                            {srv.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="text-center mt-12">
                    <button
                      id="view-all-services-btn"
                      onClick={() => {
                        setActiveTab('services');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-850 hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-slate-100 cursor-pointer transition-all duration-200"
                    >
                      Explore Complete Capabilities
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </section>

              {/* Homepage: Featured Project Gallery Section (hover zoom effects) */}
              <section id="featured-gallery-section" className="bg-slate-900 py-16 sm:py-24 border-b border-slate-950 text-left font-sans">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                      <span className="text-xs font-bold font-mono tracking-widest text-amber-500 uppercase">
                        LANDMARK ACHIEVEMENTS
                      </span>
                      <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl uppercase">
                        Featured Construction Dossiers
                      </h3>
                      <p className="mt-3 text-xs text-slate-400 leading-relaxed max-w-xl font-sans">
                        Representative mega-scale structures expressing resilient design blueprints and high engineering fidelity in Egypt.
                      </p>
                    </div>

                    <button
                      id="view-all-projects-btn"
                      onClick={() => {
                        setActiveTab('projects');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-500 hover:text-amber-400 uppercase tracking-widest cursor-pointer pb-1 border-b border-amber-500/15 hover:border-amber-500 transition-colors shrink-0"
                    >
                      Browse Complete Portfolio
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Show first 3 projects side-by-side with hover zoom effects */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {PROJECTS.slice(0, 3).map((proj, idx) => (
                      <motion.div
                        key={proj.id}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                        onClick={() => {
                          setActiveTab('projects');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="group relative rounded-2xl overflow-hidden border border-slate-850 bg-slate-950 cursor-pointer shadow-lg hover:border-slate-700 transition-all duration-300"
                      >
                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                          <img
                            src={proj.image}
                            alt={proj.title}
                            className="w-full h-full object-cover object-center filter group-hover:scale-105 group-hover:brightness-90 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                          <span className="absolute bottom-4 left-4 inline-block px-2 py-0.5 text-[8px] font-bold font-mono tracking-wider uppercase text-amber-400 bg-slate-950/90 border border-slate-800/80 rounded">
                            {proj.category}
                          </span>
                        </div>

                        <div className="p-6">
                          <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase">{proj.location}</span>
                          <h4 className="font-display text-sm font-bold text-slate-100 group-hover:text-amber-500 transition-colors mt-1 uppercase tracking-wide">
                            {proj.title}
                          </h4>
                          <p className="line-clamp-2 text-xs text-slate-450 leading-relaxed font-sans mt-2">
                            {proj.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Homepage: Client Testimonials Carousel Section */}
              <Testimonials />

              {/* Homepage: Contact CTA Promotion Section */}
              <section id="homepage-contact-cta" className="relative py-16 sm:py-24 bg-slate-950 text-center font-sans overflow-hidden border-t border-slate-900/60">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-amber-500/1 blur-[120px] pointer-events-none" />
                
                <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 border border-slate-850 text-amber-500 shadow-md">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase max-w-2xl mx-auto leading-tight">
                    Coordinate your structural requirements with Egypt's Premier general contractor.
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
                    Connect securely online or get in touch directly. Our specialized civil and finishing surveyors look forward to booking your physical site diagnostic.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4 text-xs font-semibold">
                    {/* Phone calls link */}
                    <a
                      id="home-cta-phone-call"
                      href={`tel:${CONTACT_INFO.phoneCall}`}
                      className="flex items-center gap-2 text-slate-350 hover:text-amber-500 transition-colors font-mono tracking-wider bg-slate-900/60 border border-slate-850 px-5 py-3 rounded-xl hover:border-slate-750"
                    >
                      <Phone className="h-4 w-4 text-amber-500" />
                      <span>{CONTACT_INFO.phone}</span>
                    </a>

                    {/* Email link */}
                    <a
                      id="home-cta-email-link"
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="flex items-center gap-2 text-slate-350 hover:text-amber-500 transition-colors font-sans bg-slate-900/60 border border-slate-850 px-5 py-3 rounded-xl hover:border-slate-750"
                    >
                      <Mail className="h-4 w-4 text-amber-500" />
                      <span>{CONTACT_INFO.email}</span>
                    </a>
                  </div>

                  <div className="pt-6">
                    <button
                      id="home-cta-quote-trigger"
                      onClick={() => setIsQuoteOpen(true)}
                      className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-bold uppercase tracking-widest text-xs rounded-xl shadow-lg cursor-pointer transition-all hover:scale-102 flex items-center justify-center gap-2 mx-auto"
                    >
                      Draft Interactive Quote
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* Subpage: About Us Page */}
          {activeTab === 'about' && (
            <motion.div
              key="about-page-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.4 }}
            >
              <About onOpenQuote={() => setIsQuoteOpen(true)} />
            </motion.div>
          )}

          {/* Subpage: Services Page */}
          {activeTab === 'services' && (
            <motion.div
              key="services-page-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.4 }}
            >
              <Services onOpenQuote={() => setIsQuoteOpen(true)} />
            </motion.div>
          )}

          {/* Subpage: Projects Page */}
          {activeTab === 'projects' && (
            <motion.div
              key="projects-page-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.4 }}
            >
              <Projects />
            </motion.div>
          )}

          {/* Subpage: Contact Page */}
          {activeTab === 'contact' && (
            <motion.div
              key="contact-page-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.4 }}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global client footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Deluxe interactive Quotation Wizard Modal */}
      <AnimatePresence>
        {isQuoteOpen && (
          <QuoteModal
            isOpen={isQuoteOpen}
            onClose={() => setIsQuoteOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
