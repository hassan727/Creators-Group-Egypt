/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calculator, ArrowRight, ArrowLeft, CheckCircle2, Phone, Mail, Award, Download, Building } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectSector: 'Residential', // Residential, Commercial, Infrastructure
    projectType: 'Luxury Villa Construction', // Customized sub-type
    areaSize: 350, // sqm
    location: 'New Cairo', // New Administrative Capital, Heliopolis, Maadi, etc.
    finishingTier: 'Global Luxury', // Standard Core & Shell, High Spec, Global Luxury
    description: '',
  });

  const [estimate, setEstimate] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Esc key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const subTypes: Record<string, string[]> = {
    Residential: ['Luxury Villa Construction', 'Corporate Apartment Compound', 'High-End Coastal Beachhouse'],
    Commercial: ['High-rise Office Edifice', 'Luxury Shopping Galleria', 'Hotels & Hospitality Resort'],
    Infrastructure: ['Concrete Flyovers & Overpasses', 'Industrial Distribution Depot', 'Heavy Foundations & Civil Works']
  };

  const handleSectorChange = (sector: string) => {
    setFormData(prev => ({
      ...prev,
      projectSector: sector,
      projectType: subTypes[sector][0]
    }));
  };

  const calculateQuote = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      // Dynamic Egypt Pricing Matrix (EGP per square meter estimations for global tier contracting)
      let baseRatePerSqm = 14500; // EGP
      let finishingRatePerSqm = 0;

      if (formData.projectSector === 'Commercial') {
        baseRatePerSqm = 18500;
      } else if (formData.projectSector === 'Infrastructure') {
        baseRatePerSqm = 24000;
      }

      // Finishing Tier multipliers
      if (formData.finishingTier === 'Global Luxury') {
        finishingRatePerSqm = 19000;
      } else if (formData.finishingTier === 'Premium Executive') {
        finishingRatePerSqm = 12000;
      } else {
        // Core & Shell
        finishingRatePerSqm = 4000;
      }

      // If infrastructure, finishing is custom heavy-duty civils
      if (formData.projectSector === 'Infrastructure') {
        finishingRatePerSqm = 8500; // complex works
      }

      const totalSqmRate = baseRatePerSqm + finishingRatePerSqm;
      const subtotalConstruction = formData.areaSize * baseRatePerSqm;
      const subtotalFinishing = formData.areaSize * finishingRatePerSqm;
      
      const mechanicalElectricalSurcharge = (subtotalConstruction + subtotalFinishing) * 0.18; // 18% systems surcharge
      const designEngineeringFee = (subtotalConstruction + subtotalFinishing) * 0.05; // 5% BIM design fee
      
      const totalPrice = subtotalConstruction + subtotalFinishing + mechanicalElectricalSurcharge + designEngineeringFee;
      
      const timelineMonths = Math.max(12, Math.round((formData.areaSize / 150) + 6));

      setEstimate({
        civilSqmRate: baseRatePerSqm,
        finishingSqmRate: finishingRatePerSqm,
        subtotalCivil: subtotalConstruction,
        subtotalFinishing: subtotalFinishing,
        mepFee: mechanicalElectricalSurcharge,
        designFee: designEngineeringFee,
        total: totalPrice,
        timeline: timelineMonths,
        id: `CG-${Math.floor(100000 + Math.random() * 900000)}`
      });
      setIsSubmitting(false);
      setStep(4);
    }, 1200);
  };

  const submitToSales = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      // Save to local storage mock database of leads
      const existingLeads = JSON.parse(localStorage.getItem('creators_leads') || '[]');
      const newLead = {
        ...formData,
        estimate,
        date: new Date().toISOString(),
      };
      localStorage.setItem('creators_leads', JSON.stringify([...existingLeads, newLead]));
      
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleReset = () => {
    setStep(1);
    setIsSuccess(false);
    setEstimate(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectSector: 'Residential',
      projectType: 'Luxury Villa Construction',
      areaSize: 350,
      location: 'New Cairo',
      finishingTier: 'Global Luxury',
      description: '',
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto px-4 py-8">
      {/* Dark Blur Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
      />

      {/* Main Dialog Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative z-10 w-full max-w-4xl rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden text-slate-100 font-sans"
      >
        {/* Top Header line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-500" />

        {/* Close Button */}
        <button
          id="close-quote-modal"
          onClick={onClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-100 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Outer Grid Splitting Layout for high-end look */}
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
          
          {/* Left Decorative branding panel (Hidden on small mobile) */}
          <div className="col-span-12 md:col-span-4 bg-slate-950 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800/80">
            <div>
              <div className="flex items-center gap-2 text-amber-500">
                <Building className="h-6 w-6" />
                <span className="font-display font-bold text-sm tracking-widest uppercase">CREATORS</span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-bold text-slate-100 tracking-tight leading-snug">
                Request an <br/>
                <span className="text-amber-500">Executive Quote</span>
              </h3>
              <p className="mt-4 text-xs text-slate-400 leading-relaxed">
                Unlock instantaneous budget estimations based on live Cairo development costs, tailored directly to international construction codes and elite finishing qualities.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/60 space-y-3">
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-amber-500/10 text-amber-500">
                  <Award className="h-3 w-3" />
                </div>
                <span>Egyptian Grade & ISO Code Standard</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-amber-500/10 text-amber-500">
                  <Phone className="h-3 w-3" />
                </div>
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-amber-500/10 text-amber-500">
                  <Mail className="h-3 w-3" />
                </div>
                <span className="truncate">{CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Right Main Flow Content Area */}
          <div className="col-span-12 md:col-span-8 p-8 flex flex-col justify-between bg-slate-900/60">
            
            {/* Step Indicators */}
            {!isSuccess && (
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3, 4].map(s => (
                  <div key={s} className="flex-1 flex items-center gap-1">
                    <div
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        step >= s ? 'w-full bg-amber-500' : 'w-full bg-slate-800'
                      }`}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Stepped Form Body */}
            <div className="flex-grow flex flex-col justify-center">
              
              {/* STEP 1: Select Project Sector & Sub-type */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  <div>
                    <h4 className="font-display text-lg font-bold text-slate-100">Step 1: Project Sector</h4>
                    <p className="text-xs text-slate-400 mt-1">Select the primary engineering classification for your asset.</p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {['Residential', 'Commercial', 'Infrastructure'].map(sec => (
                      <button
                        key={sec}
                        id={`sector-btn-${sec.toLowerCase()}`}
                        type="button"
                        onClick={() => handleSectorChange(sec)}
                        className={`p-4 rounded-xl text-left border flex flex-col justify-between transition-all duration-200 h-28 ${
                          formData.projectSector === sec
                            ? 'border-amber-500 bg-amber-500/5 text-amber-500'
                            : 'border-slate-800 bg-slate-900 hover:border-slate-700 text-slate-300'
                        }`}
                      >
                        <span className="text-xs font-semibold tracking-wider uppercase">{sec}</span>
                        <div className="h-7 w-7 rounded-lg flex items-center justify-center bg-slate-800/80">
                          {sec === 'Residential' && <Calculator className="h-4 w-4" />}
                          {sec === 'Commercial' && <Calculator className="h-4 w-4" />}
                          {sec === 'Infrastructure' && <Calculator className="h-4 w-4" />}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                      Specific Development Category
                    </label>
                    <select
                      id="project-type-select"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-slate-300 focus:outline-none focus:border-amber-500"
                      value={formData.projectType}
                      onChange={e => setFormData(p => ({ ...p, projectType: e.target.value }))}
                    >
                      {subTypes[formData.projectSector].map(sub => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Size & Location */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  <div>
                    <h4 className="font-display text-lg font-bold text-slate-100">Step 2: Key Specifications</h4>
                    <p className="text-xs text-slate-400 mt-1">Specify building areas and regional placement within Egypt.</p>
                  </div>

                  {/* Area Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-400 uppercase tracking-wider">Total Buildup Area</span>
                      <span className="text-amber-500 font-bold font-mono text-sm">{formData.areaSize} SQM</span>
                    </div>
                    <input
                      id="area-size-range"
                      type="range"
                      min="50"
                      max="10000"
                      step="50"
                      value={formData.areaSize}
                      onChange={e => setFormData(p => ({ ...p, areaSize: Number(e.target.value) }))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                      <span>50 SQM</span>
                      <span>5,000 SQM</span>
                      <span>10,000 SQM</span>
                    </div>
                  </div>

                  {/* Location Selector */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5">
                        Project Site Location
                      </label>
                      <select
                        id="location-select"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-300 focus:outline-none focus:border-amber-500"
                        value={formData.location}
                        onChange={e => setFormData(p => ({ ...p, location: e.target.value }))}
                      >
                        <option value="New Cairo">New Cairo (Fifth Settlement)</option>
                        <option value="New Administrative Capital">New Administrative Capital</option>
                        <option value="Maadi Corniche">Maadi Corniche</option>
                        <option value="Sheikh Zayed City">Sheikh Zayed & October</option>
                        <option value="Heliopolis / Nasr City">Heliopolis / Nasr City</option>
                        <option value="El-Gouna / Hurghada">El-Gouna & Red Sea Coast</option>
                        <option value="North Coast (Sidi Abdel Rahman)">North Coast (Sahel)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5">
                        Finishing Quality Grade
                      </label>
                      <select
                        id="finishing-select"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-300 focus:outline-none focus:border-amber-500"
                        value={formData.finishingTier}
                        onChange={e => setFormData(p => ({ ...p, finishingTier: e.target.value }))}
                      >
                        <option value="Global Luxury">Global Luxury (High-End Import Finishes)</option>
                        <option value="Premium Executive">Premium Executive (Local Granite & Glass)</option>
                        <option value="Core & Shell Only">Core & Shell Only (Reinforced Structural Concrete)</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Contact details & Description */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div>
                    <h4 className="font-display text-lg font-bold text-slate-100">Step 3: Registration Contact</h4>
                    <p className="text-xs text-slate-400 mt-1">Please supply professional contacts to bind this quote estimate sheet.</p>
                  </div>

                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Corporate Client Name *</label>
                        <input
                          id="quote-name-input"
                          type="text"
                          required
                          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Mobile Contact Phone *</label>
                        <input
                          id="quote-phone-input"
                          type="tel"
                          required
                          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                          placeholder="e.g. 012 81447691"
                          value={formData.phone}
                          onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Business Email Address *</label>
                      <input
                        id="quote-email-input"
                        type="email"
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                        placeholder="e.g. client@domain.com"
                        value={formData.email}
                        onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Additional Project Brief Overview (Optional)</label>
                      <textarea
                        id="quote-desc-input"
                        rows={3}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500 resize-none"
                        placeholder="Describe special requirements, timelines, or designs..."
                        value={formData.description}
                        onChange={e => setFormData(p => ({ ...p, description: e.target.value }))}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Results Display Board */}
              {step === 4 && estimate && !isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-display text-md font-bold text-amber-500 flex items-center gap-2">
                        <Award className="h-5 w-5" />
                        PRELIMINARY ESTIMATION COMPLETE
                      </h4>
                      <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-1">
                        Report ID: {estimate.id} | Base Market Matrix EGP 2025/2026
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 space-y-3 font-mono text-xs">
                    <div className="flex justify-between text-slate-400 border-b border-slate-900 pb-2">
                      <span>PROJECT SCOPE</span>
                      <span className="text-slate-100 font-sans font-semibold">
                        {formData.areaSize} SQM / {formData.projectSector}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-slate-400 border-b border-slate-900 pb-2 text-[11px]">
                      <div className="flex justify-between">
                        <span>Structural Core & Framing:</span>
                        <span>EGP {(estimate.subtotalCivil).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Interior/Exterior Architectural Finishes:</span>
                        <span>EGP {(estimate.subtotalFinishing).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Technical MEP Systems (18%):</span>
                        <span>EGP {(estimate.mepFee).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>BIM Modelling & Engineering Design Fee:</span>
                        <span>EGP {(estimate.designFee).toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="flex justify-between text-amber-400 font-bold text-base pt-1 md:text-md">
                      <span className="font-sans">ESTIMATED DEV CAPITAL:</span>
                      <span>EGP {Math.round(estimate.total).toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between text-[11px] text-slate-500 font-sans italic">
                      <span>Completion Timeline:</span>
                      <span>Approx. {estimate.timeline} Months</span>
                    </div>
                  </div>

                  {/* Submission Form Wrapper for Lead capture */}
                  <form onSubmit={submitToSales} className="space-y-3.5">
                    <p className="text-[11px] text-slate-400 leading-relaxed text-center italic">
                      *Note: This estimation sheet constitutes an executive projection. Hit submit to record your inquiry, locks in priority scheduling, and flags our engineering team to arrange a physical consultation.
                    </p>
                    
                    <div className="flex gap-3 justify-end">
                      <button
                        id="recalc-quote-btn"
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-4 py-2 text-xs rounded-lg text-slate-300 hover:text-slate-100 border border-slate-800 hover:bg-slate-800/40 transition-colors"
                      >
                        Adjust Specifications
                      </button>
                      <button
                        id="submit-lead-btn"
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-950 font-bold text-xs rounded-lg shadow-lg flex items-center gap-2 hover:shadow-amber-500/10 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? 'Locking Request...' : 'Lock Quote & Send inquiry'}
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* SUCCESS STATE */}
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-4"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <div>
                    <h4 className="font-display text-xl font-bold text-slate-100">Inquiry Logged Successfully</h4>
                    <p className="text-xs text-slate-400 mt-2 max-w-md mx-auto">
                      Thank you {formData.name}. Our Head of Projects has reservation lock on ID <span className="font-mono text-amber-500 font-bold">{estimate?.id}</span>. We will initiate our initial site planning outreach within 24 business hours.
                    </p>
                  </div>

                  <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 max-w-md mx-auto text-left space-y-2 text-xs text-slate-400">
                    <div className="flex justify-between">
                      <span>Lead Contact:</span>
                      <span className="text-slate-200">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Specified Location:</span>
                      <span className="text-slate-200">{formData.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Capital:</span>
                      <span className="text-amber-500 font-bold font-mono">EGP {Math.round(estimate?.total).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-center pt-2">
                    <button
                      id="quote-success-recalculate"
                      onClick={handleReset}
                      className="px-4 py-2 text-xs border border-slate-800 rounded-lg hover:bg-slate-800/40 text-slate-300 hover:text-slate-100 transition-colors"
                    >
                      New Calculation
                    </button>
                    <button
                      id="quote-success-close"
                      onClick={onClose}
                      className="px-5 py-2 bg-slate-100 text-slate-950 font-semibold text-xs rounded-lg hover:bg-slate-200 transition-all font-sans"
                    >
                      Back to Website
                    </button>
                  </div>
                </motion.div>
              )}

            </div>

            {/* Bottom Actions Navigation (Skip on success/loading results) */}
            {step < 4 && !isSubmitting && (
              <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-800/50">
                <button
                  id="quote-flow-prev"
                  type="button"
                  onClick={() => setStep(p => Math.max(1, p - 1))}
                  className={`flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors ${
                    step === 1 ? 'invisible' : ''
                  }`}
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Previous
                </button>

                <div className="text-xs font-mono text-slate-500">
                  Step {step} of 3
                </div>

                {step < 3 ? (
                  <button
                    id="quote-flow-next"
                    type="button"
                    onClick={() => setStep(p => Math.min(3, p + 1))}
                    className="px-5 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 text-slate-200 hover:text-slate-100 text-xs font-medium cursor-pointer transition-all flex items-center gap-1.5"
                  >
                    Next Step
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                ) : (
                  <button
                    id="quote-flow-calc"
                    type="button"
                    disabled={!formData.name || !formData.email || !formData.phone}
                    onClick={calculateQuote}
                    className="px-5 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 hover:from-amber-600 hover:to-yellow-700 font-bold text-xs cursor-pointer transition-all disabled:opacity-40 flex items-center gap-1.5"
                  >
                    Calculate Budget
                    <Calculator className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            )}

          </div>

        </div>

      </motion.div>
    </div>
  );
}
