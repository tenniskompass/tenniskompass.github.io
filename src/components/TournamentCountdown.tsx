'use client';

import { useState, useEffect } from 'react';
import { TOURNAMENTS, getNextTournament, isOngoing, formatDateRange, type Tournament } from '@/lib/tournaments';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(target: Date, now: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - now.getTime());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

const SURFACE_COLOR: Record<string, string> = {
  'Sand': 'bg-orange-100 text-orange-800',
  'Rasen': 'bg-green-100 text-green-800',
  'Hart': 'bg-blue-100 text-blue-800',
  'Hart (Indoor)': 'bg-blue-100 text-blue-800',
};

export default function TournamentCountdown() {
  const [next, setNext] = useState<Tournament | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [ongoing, setOngoing] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const tournament = getNextTournament(now);
      setNext(tournament);
      if (tournament) {
        const live = isOngoing(tournament, now);
        setOngoing(live);
        if (!live) {
          setTimeLeft(calcTimeLeft(new Date(tournament.startDate), now));
        } else {
          setTimeLeft(null);
        }
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!next) return null;

  const surfaceClass = SURFACE_COLOR[next.surface] ?? 'bg-gray-100 text-gray-700';

  return (
    <div className="bg-tennis-dark text-white rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-tennis-ball px-5 py-3 flex items-center justify-between">
        <p className="text-tennis-dark text-xs font-bold uppercase tracking-widest">
          {ongoing ? '🔴 Läuft gerade' : 'Nächstes Turnier'}
        </p>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${surfaceClass}`}>
          {next.surface}
        </span>
      </div>

      <div className="p-5">
        {/* Tournament info */}
        <span className="text-tennis-ball/70 text-[10px] font-bold uppercase tracking-widest">{next.type}</span>
        <h3 className="font-bold text-xl leading-tight mt-0.5 mb-1" style={{ fontFamily: 'var(--font-display)' }}>
          {next.name}
        </h3>
        <p className="text-white/60 text-sm mb-1">{next.location}</p>
        <p className="text-white/50 text-xs mb-4">{formatDateRange(next)} · {next.broadcast}</p>

        {/* Countdown or LIVE badge */}
        {ongoing ? (
          <div className="flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-xl px-4 py-3 mb-5">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            <span className="text-red-300 font-semibold text-sm">Turnier läuft gerade</span>
          </div>
        ) : timeLeft ? (
          <div className="grid grid-cols-4 gap-2 mb-5">
            {[
              ['Tage', timeLeft.days],
              ['Std', timeLeft.hours],
              ['Min', timeLeft.minutes],
              ['Sek', timeLeft.seconds],
            ].map(([label, value]) => (
              <div key={label} className="text-center bg-white/10 rounded-xl py-2.5">
                <div className="text-2xl font-bold tabular-nums leading-none" suppressHydrationWarning>
                  {pad(value as number)}
                </div>
                <div className="text-xs text-white/50 mt-1">{label}</div>
              </div>
            ))}
          </div>
        ) : null}

        {/* Upcoming list */}
        <div className="border-t border-white/10 pt-4 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">Turnierkalender 2026</p>
          {TOURNAMENTS.filter(t => new Date(t.endDate) >= new Date()).slice(0, 6).map((t) => {
            const live = isOngoing(t, new Date());
            return (
              <div key={t.name} className="flex justify-between items-center gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  {live && <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 animate-pulse" />}
                  <span className={`text-sm truncate ${live ? 'text-white font-semibold' : 'text-white/70'}`}>
                    {t.shortName}
                  </span>
                </div>
                <span className="text-tennis-ball whitespace-nowrap text-xs font-medium tabular-nums">
                  {new Date(t.startDate).toLocaleDateString('de-DE', { day: '2-digit', month: 'short' })}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
