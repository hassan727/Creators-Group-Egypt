/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Building2, Facebook, Linkedin, Instagram, PhoneCall, Mail, MapPin, ArrowUpCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  
  const socialIcons = [
    { name: 'LinkedIn', icon: <Linkedin className="h-4 w-4" />, href: 'https://linkedin.com/' },
    { name: 'Facebook', icon: <Facebook className="h-4 w-4" />, href: 'https://facebook.com/' },
    { name: 'Instagram', icon: <Instagram className="h-4 w-4" />, href: 'https://instagram.com/' },
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
