/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Lock, Building, PhoneCall, Calendar } from 'lucide-react';
import { CONTACT_INFO, IMAGES } from '../constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sector: 'Residential Contracting',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    
    // Strict Civil contact checks
    if (!formData.name.trim()) return setErrorMsg('Please state your name or corporate credential.');
    if (!formData.phone.trim()) return setErrorMsg('We require a secure contact telephone line.');
    if (!formData.email.trim()) return setErrorMsg('We require a valid business email address.');

    setIsSubmitting(true);
    
    setTimeout(() => {
      // Save contact request to leads
      const existingInquiries = JSON.parse(localStorage.getItem('creators_contacts') || '[]');
      const newInquiry = {
        ...formData,
        date: new Date().toISOString()
      };
      localStorage.setItem('creators_contacts', JSON.stringify([...existingInquiries, newInquiry]));

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        sector: 'Residential Contracting',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact-page" className="bg-slate-950 py-16 sm:py-24 border-t border-slate-900/60 font-sans overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with generous margins */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-xs font-bold font-mono tracking-widest text-amber-500 uppercase"
          >
            <Lock className="h-3.5 w-3.5 animate-pulse" />
            <span>SECURE SITE COUPLING</span>
          </motion.div>
          
          <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl uppercase">
            Initiate Project Coupling
          </h3>
          <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
            Signal your project outline to our procurement panel today. Let us transform architectural coordinates into physical steel and stone.
          </p>
        </div>

        {/* Dynamic Splits: visual credentials / forms */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Panel: Luxury visual contacts with handshake backdrop photo */}
          <div className="col-span-12 lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            
            {/* Handshake Glassmorphic block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-6 sm:p-8 rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900/40 min-h-[180px] flex flex-col justify-end group shadow-xl"
            >
              {/* Wallpaper backdrop */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-25 filter grayscale group-hover:scale-103 transition-transform duration-500"
                style={{ backgroundImage: `url(${IMAGES.handshake})` }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />

              <div className="relative z-10">
                <span className="text-[9px] font-mono font-bold text-amber-500 uppercase tracking-widest">
                  GLOBAL CO-VENTURE AGREEMENTS
                </span>
                <h4 className="font-display text-sm font-bold text-slate-100 uppercase tracking-wider mt-1.5 max-w-xs">
                  Securing trusted corporate and private handshakes.
                </h4>
              </div>
            </motion.div>

            {/* Practical list: Phone, Email, Address */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-900 bg-slate-950 space-y-6">
              
              {/* Telephone row */}
              <a
                id="contact-phone-card"
                href={`tel:${CONTACT_INFO.phoneCall}`}
                className="flex items-start gap-4 group p-1.5 rounded-lg hover:bg-slate-900/40 transition-all text-left"
              >
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h5 className="text-[10px] uppercase font-mono font-bold text-slate-500 tracking-wider">
                    General Contracts Mobile
                  </h5>
                  <p className="font-display text-sm font-semibold text-slate-200 mt-0.5 group-hover:text-amber-500 transition-colors">
                    {CONTACT_INFO.phone}
                  </p>
                  <span className="text-[9px] font-mono text-amber-500/80">Click to call (24h Hotline)</span>
                </div>
              </a>

              {/* Email row */}
              <a
                id="contact-email-card"
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-start gap-4 group p-1.5 rounded-lg hover:bg-slate-900/40 transition-all text-left"
              >
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </div>
                <div className="min-w-0">
                  <h5 className="text-[10px] uppercase font-mono font-bold text-slate-500 tracking-wider">
                    Executive Inbox
                  </h5>
                  <p className="font-display text-sm font-semibold text-slate-200 mt-0.5 group-hover:text-amber-500 transition-colors truncate">
                    {CONTACT_INFO.email}
                  </p>
                  <span className="text-[9px] font-mono text-amber-500/80">Mail to: creatorsgroupegypt@yahoo.com</span>
                </div>
              </a>

              {/* Physical address row (Copyable) */}
              <div
                id="contact-address-card"
                className="flex items-start gap-4 p-1.5"
              >
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h5 className="text-[10px] uppercase font-mono font-bold text-slate-500 tracking-wider">
                    Cairo Main Office
                  </h5>
                  <p className="font-display text-xs font-semibold text-slate-200 mt-0.5 leading-relaxed">
                    {CONTACT_INFO.addressEng}
                  </p>
                  <p className="text-[10px] font-serif text-slate-400 mt-1 leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

            </div>

            {/* Working Hours Card featuring ANIMATED CLOCK icon */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-900 bg-slate-950/80 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-900">
                {/* Spin the clock body slightly on load and loop the clock hand */}
                <motion.div
                  id="contact-clock-icon-holder"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
                  className="h-7 w-7 rounded bg-amber-500/5 border border-amber-500/10 flex items-center justify-center text-amber-500"
                >
                  <Clock className="h-4 w-4" />
                </motion.div>
                <h5 className="font-display text-[10px] font-bold text-slate-100 uppercase tracking-widest">
                  Engineering Working Hours (Egypt Time)
                </h5>
              </div>

              <div className="space-y-2 text-xs">
                {CONTACT_INFO.workingHours.map((wh, idx) => (
                  <div key={idx} className="flex justify-between font-mono text-[10px] text-slate-400 pb-1.5 last:pb-0 last:border-0 border-b border-slate-900/40">
                    <span className="font-sans font-medium text-slate-300">{wh.days}</span>
                    <span className="font-semibold text-slate-200">{wh.hours}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Panel: Clean Professional Contact Form */}
          <div className="col-span-12 lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 rounded-2xl border border-slate-800 bg-slate-900/30">
              
              <h4 className="font-display text-lg font-bold text-white uppercase tracking-wider mb-1">
                Inquiry Dispatch Panel
              </h4>
              <p className="text-xs text-slate-400 mb-6">
                All submitted coordinates are logged securely directly into our central lead CRM system.
              </p>

              {/* Submitted success view */}
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-4"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-display text-sm font-bold text-slate-100 uppercase tracking-widest">
                        Transmission Complete
                      </h5>
                      <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto p-1">
                        Your bid project outline has been synchronized. A senior civil surveyor will communicate directly with your division shortly. Thank you.
                      </p>
                    </div>
                    <button
                      id="reset-contact-btn"
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2 bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                    >
                      Dispatch Secondary Enquiry
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleFormSubmit} className="space-y-4 font-sans text-xs">
                    
                    {errorMsg && (
                      <div className="p-3 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 text-[11px] font-sans">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1 text-left">
                        <label className="block text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
                          Full Name *
                        </label>
                        <input
                          id="contact-name-input"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your complete name"
                          className="w-full bg-slate-950 border border-slate-800/80 rounded-lg p-3 text-slate-300 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>

                      <div className="space-y-1 text-left">
                        <label className="block text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
                          Contact Telephone *
                        </label>
                        <input
                          id="contact-phone-input"
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. 012 81447691"
                          className="w-full bg-slate-950 border border-slate-800/80 rounded-lg p-3 text-slate-300 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1 text-left">
                      <label className="block text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
                        Business Email Address *
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. contact@business.com"
                        className="w-full bg-slate-950 border border-slate-800/80 rounded-lg p-3 text-slate-300 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1 text-left">
                      <label className="block text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
                        Principal Project Classification
                      </label>
                      <select
                        id="contact-sector-select"
                        name="sector"
                        value={formData.sector}
                        onChange={handleInputChange}
                        className="w-full bg-slate-950 border border-slate-800/80 rounded-lg p-3 text-slate-300 focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        <option value="Residential Contracting">Residential Contracting (Villas, Apartments)</option>
                        <option value="Commercial Developments">Commercial Developments (Malls, High-Rises)</option>
                        <option value="Highway & Bridge Infrastructures">Highway & Bridge Infrastructures</option>
                        <option value="Advanced Interior Finishing">Advanced Interior Finishing & Cladding</option>
                        <option value="Mechanical & Electro Works">Mechanical & Electro Works</option>
                        <option value="Engineering Consultant Designs">Engineering Consultant Designs & BIM Layouts</option>
                      </select>
                    </div>

                    <div className="space-y-1 text-left">
                      <label className="block text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
                        Project Description / Specific inquiry
                      </label>
                      <textarea
                        id="contact-message-input"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please supply estimated plot dimension, site geography in Egypt, or budget parameters..."
                        className="w-full bg-slate-950 border border-slate-800/80 rounded-lg p-3 text-slate-300 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                      />
                    </div>

                    <p className="text-[10px] text-slate-500 italic pb-2">
                      *By dispatching this coordinates form you authorize Creators Group Egypt to retrieve logs of this communication to support physical quoting routines.
                    </p>

                    <button
                      id="contact-form-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full py-3.5 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:shadow-amber-500/10 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Verifying coordinates...' : 'Dispatch secure inquiry'}
                      <Send className="h-3.5 w-3.5 group-hover:translate-x-1 hover:scale-110 transition-transform duration-200" />
                    </button>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* FULL RESPONSIVE MAPS EMBED AT BASE */}
        <div id="physical-map-envelope" className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-80 sm:h-96 w-full">
          {/* Map Overlay Frame details */}
          <div className="absolute top-4 left-4 z-10 bg-slate-950/90 border border-slate-800 rounded-xl p-4.5 max-w-xs backdrop-blur-md hidden sm:block">
            <h5 className="font-display text-xs font-bold text-slate-200 uppercase tracking-widest">
              Physical Location Coordinates
            </h5>
            <p className="font-sans text-[10px] text-slate-400 leading-relaxed mt-1.5">
              16 Mohamed Kamel El-Harouni St., Nasr City, Cairo, Egypt.
            </p>
            <p className="font-mono text-[9px] text-amber-500 uppercase tracking-wider mt-1 font-semibold">
              Near Key Cairo Transit Axes
            </p>
          </div>

          <iframe
            id="cairo-google-map"
            title="Google Map location of Creators Group Egypt"
            src={CONTACT_INFO.mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full filter brightness-90 contrast-[1.05] grayscale-[0.35]"
          />
        </div>

      </div>
    </section>
  );
}
