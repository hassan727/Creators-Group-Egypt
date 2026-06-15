/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2 } from 'lucide-react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // Luxury slow reveal
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="loader-screen"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 text-slate-100"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <div className="relative flex flex-col items-center">
            {/* Spinning Golden Accent Ring */}
            <motion.div
              id="loader-spinner-ring"
              className="absolute h-24 w-24 rounded-full border-t-2 border-r-2 border-amber-500/80"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
            />
            
            {/* Double Border Spinning Counter-Clockwise */}
            <motion.div
              id="loader-spinner-inner"
              className="absolute h-20 w-20 rounded-full border-b-2 border-l-2 border-slate-700"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
            />

            {/* Glowing Logo Icon */}
            <motion.div
              id="loader-logo-container"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 border border-amber-500/20"
            >
              <Building2 className="h-7 w-7 text-amber-500" />
            </motion.div>

            {/* Text Overlay */}
            <motion.div
              id="loader-brand-text"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 text-center"
            >
              <h2 className="font-display text-xl font-bold tracking-[0.25em] text-slate-100 uppercase">
                CREATORS GROUP
              </h2>
              <p className="mt-1 font-mono text-[10px] tracking-widest text-amber-500/80 uppercase">
                Construction & Contracting
              </p>
              <p className="mt-3 font-sans text-xs text-slate-500">
                Cairo, Egypt
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
