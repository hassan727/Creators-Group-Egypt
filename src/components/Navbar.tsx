/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Menu, X, PhoneCall } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenQuote: () => void;
}

export default function Navbar({ activeTab, setActiveTab, onOpenQuote }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
          scrolled
            ? 'bg-slate-950/95 border-b border-slate-900/60 py-3 backdrop-blur-md shadow-lg shadow-black/30'
            : 'bg-gradient-to-b from-slate-950/80 to-transparent py-5 backdrop-blur-xs'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Elegant Brand Logo */}
            <button
              id="nav-logo"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left bg-transparent border-0 cursor-pointer group focus:outline-none"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 group-hover:border-amber-500/50 transition-all duration-300 shadow-md">
                <Building2 className="h-5 w-5 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h1 className="font-display text-sm font-bold tracking-[0.2em] text-slate-100 uppercase sm:text-base">
                  CREATORS GROUP
                </h1>
                <p className="font-mono text-[9px] tracking-widest text-amber-500 uppercase sm:text-[10px]">
                  EGYPT • EST. 2012
                </p>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-xs font-semibold tracking-wider uppercase transition-colors py-1 cursor-pointer ${
                    activeTab === item.id
                      ? 'text-amber-500'
                      : 'text-slate-300 hover:text-slate-100'
                  }`}
                >
                  {item.label}
                  {activeTab === item.id && (
                    <motion.div
                      id={`nav-active-pill-${item.id}`}
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Desktop Actions Section */}
            <div className="hidden md:flex items-center gap-5">
              {/* Phone Line Indicator */}
              <a
                id="header-phone-link"
                href={`tel:${CONTACT_INFO.phoneCall}`}
                className="flex items-center gap-2 text-xs font-semibold font-mono text-slate-300 hover:text-amber-500 transition-colors"
                title="Call Creators Group Egypt"
              >
                <PhoneCall className="h-3.5 w-3.5 text-amber-500" />
                <span>{CONTACT_INFO.phone}</span>
              </a>

              {/* Get a Quote Action CTA */}
              <button
                id="header-quote-button"
                onClick={onOpenQuote}
                className="px-4 py-2 text-xs font-bold font-sans tracking-wide uppercase text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-md hover:shadow-amber-500/10 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Menu Toggler (Hamburger) */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                id="mobile-phone-quick"
                onClick={onOpenQuote}
                className="px-3 py-1.5 text-[10px] font-bold uppercase text-slate-950 bg-amber-500 rounded-md shadow-md"
              >
                Quote
              </button>
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/65 text-slate-300 hover:text-slate-100"
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-[69px] left-0 right-0 z-40 md:hidden bg-slate-950 border-b border-slate-900 bg-opacity-98 backdrop-blur-lg overflow-hidden shadow-2xl"
          >
            <div className="px-4 py-6 space-y-4 font-sans">
              <div className="flex flex-col gap-2">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    id={`mobile-nav-item-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left p-3 rounded-lg text-xs font-bold tracking-widest uppercase transition-all ${
                      activeTab === item.id
                        ? 'bg-amber-500/10 text-amber-500 border-l-2 border-amber-500 pl-4'
                        : 'text-slate-300 hover:bg-slate-900/40 hover:text-slate-100 pl-3'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-900 flex flex-col gap-4">
                <a
                  id="mobile-phone-drawer"
                  href={`tel:${CONTACT_INFO.phoneCall}`}
                  className="flex items-center gap-3 px-3 py-2 text-xs font-semibold font-mono text-slate-300 hover:text-amber-500"
                >
                  <PhoneCall className="h-4 w-4 text-amber-500" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
                
                <button
                  id="mobile-quote-drawer"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wider uppercase rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  Request Commercial Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
