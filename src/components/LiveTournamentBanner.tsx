'use client';

import { useState, useEffect } from 'react';
import { TOURNAMENTS, isOngoing, formatDateRange, type Tournament } from '@/lib/tournaments';

const SURFACE_STYLE: Record<string, { bg: string; dot: string; label: string }> = {
  'Sand':         { bg: 'bg-orange-500/15 border-orange-400/30', dot: 'bg-orange-400', label: 'text-orange-300' },
  'Rasen':        { bg: 'bg-emerald-500/15 border-emerald-400/30', dot: 'bg-emerald-400', label: 'text-emerald-300' },
  'Hart':         { bg: 'bg-blue-500/15 border-blue-400/30', dot: 'bg-blue-400', label: 'text-blue-300' },
  'Hart (Indoor)':{ bg: 'bg-blue-500/15 border-blue-400/30', dot: 'bg-blue-400', label: 'text-blue-300' },
};

export default function LiveTournamentBanner() {
  const [live, setLive] = useState<Tournament | null>(null);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const current = TOURNAMENTS.find(t => isOngoing(t, now)) ?? null;
      setLive(current);
    };
    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!live) return null;

  const style = SURFACE_STYLE[live.surface] ?? { bg: 'bg-white/10 border-white/20', dot: 'bg-white', label: 'text-white/70' };

  return (
    <div className="bg-tennis-dark border-b border-tennis-ball/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">

          {/* LIVE badge */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-400" />
            </span>
            <span className="text-red-300 font-black text-xs uppercase tracking-[0.2em]">Live</span>
          </div>

          {/* Divider */}
          <span className="hidden sm:block w-px h-8 bg-white/15" aria-hidden="true" />

          {/* Tournament info */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 flex-1 min-w-0">
            <span
              className="text-white font-bold text-sm sm:text-base truncate"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {live.name}
            </span>
            <span className="text-white/40 hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-white/60 text-sm">{live.location}</span>
            <span className="text-white/40 hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-tennis-ball/70 text-xs font-medium">{formatDateRange(live)}</span>
          </div>

          {/* Surface + broadcast */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${style.bg} ${style.label}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} aria-hidden="true" />
              {live.surface}
            </span>
            <span className="text-white/40 text-xs">
              📺 {live.broadcast}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
