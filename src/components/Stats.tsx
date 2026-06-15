/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef, ReactNode } from 'react';
import { motion, useInView } from 'motion/react';
import { Calendar, CheckSquare, Users, Trophy } from 'lucide-react';
import { STATS } from '../constants';

interface SingleCounterProps {
  key?: string;
  value: number;
  suffix: string;
  label: string;
  icon: ReactNode;
}

function CounterTicker({ value, suffix, label, icon }: SingleCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1800; // ms
    const incrementTime = Math.max(15, Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative p-6 sm:p-8 rounded-2xl border border-slate-900 bg-slate-950 flex flex-col items-center text-center group hover:border-amber-500/20 transition-all duration-300"
    >
      {/* Background Accent glow */}
      <div className="absolute inset-0 bg-radial-gradient from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      {/* Circle Icon Container */}
      <div className="h-12 w-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-500 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-md mb-4">
        {icon}
      </div>

      {/* Number Value */}
      <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white flex items-baseline">
        <span className="font-mono">{count}</span>
        <span className="text-amber-500 font-sans ml-0.5">{suffix}</span>
      </div>

      {/* Label */}
      <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-widest leading-relaxed">
        {label}
      </p>

      {/* Golden bottom strip on hover */}
      <div className="absolute bottom-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </motion.div>
  );
}

export default function Stats() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'years':
        return <Calendar className="h-5 w-5" />;
      case 'projects':
        return <CheckSquare className="h-5 w-5" />;
      case 'engineers':
        return <Users className="h-5 w-5" />;
      default:
        return <Trophy className="h-5 w-5" />;
    }
  };

  return (
    <section id="stats-section" className="relative bg-slate-950 py-16 sm:py-20 border-t border-b border-slate-900/60 overflow-hidden font-sans">
      {/* Absolute decorative accent */}
      <div className="absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-amber-500/3 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 h-96 w-96 -translate-y-1/2 rounded-full bg-yellow-600/3 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STATS.map(stat => (
            <CounterTicker
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={getIcon(stat.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
