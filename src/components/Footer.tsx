/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Building2, PhoneCall, Mail, MapPin, ArrowUpCircle } from 'lucide-react';

// Social icons as inline SVGs (removed from lucide-react in recent versions)
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
import { CONTACT_INFO } from '../constants';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  
  const socialIcons = [
    { name: 'LinkedIn', icon: <LinkedinIcon className="h-4 w-4" />, href: 'https://linkedin.com/' },
    { name: 'Facebook', icon: <FacebookIcon className="h-4 w-4" />, href: 'https://facebook.com/' },
    { name: 'Instagram', icon: <InstagramIcon className="h-4 w-4" />, href: 'https://instagram.com/' },
  ];

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyAddressToClipboard = () => {
    navigator.clipboard.writeText(CONTACT_INFO.address);
    // Silent confirmation, or simple alert
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="global-footer" className="relative bg-slate-950 text-slate-400 py-12 sm:py-16 border-t border-slate-900 overflow-hidden font-sans">
      <div className="absolute bottom-[-150px] right-[-150px] h-[350px] w-[350px] rounded-full bg-amber-500/2 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 mb-8 border-b border-slate-900 text-left">
          
          {/* Col 1: Brand Info */}
          <div className="col-span-12 md:col-span-4 space-y-4">
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-2 text-left bg-transparent border-0 cursor-pointer p-0 focus:outline-none"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 border border-slate-800">
                <Building2 className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold tracking-[0.25em] text-white uppercase">
                  CREATORS GROUP
                </h4>
                <p className="font-mono text-[9px] tracking-widest text-amber-500 uppercase mt-0.5">
                  Construction & Contracting
                </p>
              </div>
            </button>

            <p className="text-xs text-slate-450 leading-relaxed max-w-sm">
              Creators Group Egypt elevates engineering standards by delivering high-caliber construction general contracting, complex civil works, and elegant structural finishes.
            </p>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-2">
              {socialIcons.map(soc => (
                <motion.a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8.5 w-8.5 items-center justify-center rounded-lg border border-slate-900 bg-slate-900/60 hover:bg-slate-900 hover:border-amber-500/30 text-slate-400 hover:text-amber-500 transition-colors shadow-sm"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  title={`${soc.name} - Creators Group Egypt`}
                >
                  {soc.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links Navigation list */}
          <div className="col-span-12 sm:col-span-6 md:col-span-3 space-y-4">
            <h5 className="font-display text-xs font-bold text-slate-200 tracking-wider uppercase">
              Corporate Links
            </h5>
            <ul className="space-y-2 text-xs">
              {quickLinks.map(lnk => (
                <li key={lnk.id}>
                  <button
                    id={`footer-nav-to-${lnk.id}`}
                    onClick={() => handleLinkClick(lnk.id)}
                    className="text-slate-400 hover:text-amber-500 transition-colors uppercase tracking-widest text-[10px] font-semibold cursor-pointer py-0.5"
                  >
                    {lnk.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Connect Details (copyable address) */}
          <div className="col-span-12 sm:col-span-6 md:col-span-5 space-y-4">
            <h5 className="font-display text-xs font-bold text-slate-200 tracking-wider uppercase">
              Physical Hub Coordinates
            </h5>
            
            <div className="space-y-3.5 text-xs">
              <a
                id="footer-call-action"
                href={`tel:${CONTACT_INFO.phoneCall}`}
                className="flex items-center gap-2.5 group text-slate-400 hover:text-amber-500 transition-colors font-mono text-[11px]"
              >
                <PhoneCall className="h-3.5 w-3.5 text-amber-500/70 shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </a>

              <a
                id="footer-mail-action"
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2.5 group text-slate-400 hover:text-amber-500 transition-colors font-sans truncate"
              >
                <Mail className="h-3.5 w-3.5 text-amber-500/70 shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2.5 group select-all">
                <MapPin className="h-3.5 w-3.5 text-amber-500/70 shrink-0 mt-0.5" />
                <div>
                  <p className="font-display text-xs font-medium text-slate-300">
                    {CONTACT_INFO.addressEng}
                  </p>
                  <p className="text-[10px] font-serif text-slate-450 mt-1 leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                  <button
                    onClick={copyAddressToClipboard}
                    className="text-[9px] font-mono text-amber-500/80 hover:text-amber-400 hover:underline mt-1.5 cursor-pointer block"
                  >
                    Copy address details
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Base bar: Copy and Scroll-to-top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <div>
            <span>Creators Group Egypt – Construction & Contracting © 2025</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 hover:text-amber-500 transition-colors text-[10px] uppercase font-mono tracking-wider cursor-pointer"
          >
            <span>Scroll to High Coordinates</span>
            <ArrowUpCircle className="h-4 w-4 text-slate-650 group-hover:text-amber-500 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

      </div>
    </footer>
  );
}
