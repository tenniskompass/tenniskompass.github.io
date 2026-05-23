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

const SURFACE_CONFIG: Record<string, { bg: string; text: string; dot: string }> = {
  'Sand':          { bg: 'bg-orange-100', text: 'text-orange-700', dot: 'bg-orange-400' },
  'Rasen':         { bg: 'bg-emerald-100', text: 'text-emerald-700', dot: 'bg-emerald-500' },
  'Hart':          { bg: 'bg-blue-100', text: 'text-blue-700', dot: 'bg-blue-400' },
  'Hart (Indoor)': { bg: 'bg-indigo-100', text: 'text-indigo-700', dot: 'bg-indigo-400' },
};

const TYPE_BADGE: Record<string, string> = {
  'Grand Slam':           'bg-tennis-ball/20 text-tennis-dark border border-tennis-ball/30',
  'Masters 1000':         'bg-tennis-dark/10 text-tennis-dark border border-tennis-dark/20',
  'Masters 1000 / WTA 1000': 'bg-tennis-dark/10 text-tennis-dark border border-tennis-dark/20',
  'ATP 500':              'bg-white/60 text-gray-600 border border-gray-200',
  'ATP Finals':           'bg-tennis-ball/20 text-tennis-dark border border-tennis-ball/30',
  'Team-Event':           'bg-white/60 text-gray-600 border border-gray-200',
};

const BROADCAST_ICON: Record<string, string> = {
  'Eurosport':   '🎾',
  'Sky Sport':   '📡',
  'DAZN':        '▶️',
};

function getBroadcastIcon(broadcast: string): string {
  for (const [key, icon] of Object.entries(BROADCAST_ICON)) {
    if (broadcast.includes(key)) return icon;
  }
  return '📺';
}

export default function TournamentCountdown() {
  const [next, setNext] = useState<Tournament | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [ongoing, setOngoing] = useState(false);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const tick = () => {
      const current = new Date();
      setNow(current);
      const tournament = getNextTournament(current);
      setNext(tournament);
      if (tournament) {
        const live = isOngoing(tournament, current);
        setOngoing(live);
        setTimeLeft(live ? null : calcTimeLeft(new Date(tournament.startDate), current));
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!next) return null;

  const surfaceStyle = SURFACE_CONFIG[next.surface] ?? { bg: 'bg-gray-100', text: 'text-gray-600', dot: 'bg-gray-400' };
  const typeBadge = TYPE_BADGE[next.type] ?? 'bg-white/60 text-gray-600 border border-gray-200';
  const upcomingList = TOURNAMENTS.filter(t => new Date(t.endDate) >= now).sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );

  return (
    <div className="bg-tennis-dark text-white rounded-2xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-tennis-ball px-5 py-3 flex items-center justify-between">
        <p className="text-tennis-dark text-xs font-black uppercase tracking-widest">
          {ongoing ? '🔴 Läuft jetzt' : '⏱ Nächstes Turnier'}
        </p>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${surfaceStyle.bg} ${surfaceStyle.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${surfaceStyle.dot}`} />
          {next.surface}
        </span>
      </div>

      {/* Next tournament spotlight */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${typeBadge}`}>
            {next.type}
          </span>
          <span className="text-white/40 text-[10px]">
            {getBroadcastIcon(next.broadcast)} {next.broadcast}
          </span>
        </div>

        <h3 className="font-bold text-xl leading-tight mt-2 mb-1" style={{ fontFamily: 'var(--font-display)' }}>
          {next.name}
        </h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-white/60 text-sm">📍 {next.location}</span>
          <span className="text-white/30">·</span>
          <span className="text-white/50 text-xs">{formatDateRange(next)}</span>
        </div>

        {/* Countdown or LIVE */}
        {ongoing ? (
          <div className="flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-xl px-4 py-3 mb-5">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            <span className="text-red-300 font-semibold text-sm">Turnier läuft gerade</span>
          </div>
        ) : timeLeft ? (
          <div className="grid grid-cols-4 gap-2 mb-5">
            {([['Tage', timeLeft.days], ['Std', timeLeft.hours], ['Min', timeLeft.minutes], ['Sek', timeLeft.seconds]] as const).map(([label, value]) => (
              <div key={label} className="text-center bg-white/10 rounded-xl py-2.5">
                <div className="text-2xl font-bold tabular-nums leading-none" suppressHydrationWarning>
                  {pad(value as number)}
                </div>
                <div className="text-xs text-white/50 mt-1">{label}</div>
              </div>
            ))}
          </div>
        ) : null}

        {/* Full tournament list */}
        <div className="border-t border-white/10 pt-4">
          <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">Turnierkalender 2026</p>
          <div className="space-y-1">
            {upcomingList.map((t) => {
              const live = isOngoing(t, now);
              const isNext = t.name === next.name && !live;
              const sc = SURFACE_CONFIG[t.surface] ?? { bg: 'bg-gray-100', text: 'text-gray-600', dot: 'bg-gray-400' };
              return (
                <div
                  key={t.name}
                  className={`rounded-xl px-3 py-2.5 transition-colors ${live ? 'bg-red-500/15 border border-red-400/20' : isNext ? 'bg-tennis-ball/10 border border-tennis-ball/20' : 'hover:bg-white/5'}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      {live && <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 animate-pulse" />}
                      <span className={`text-sm font-semibold truncate ${live ? 'text-white' : isNext ? 'text-tennis-ball' : 'text-white/80'}`}>
                        {t.shortName}
                      </span>
                    </div>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0 ${sc.bg} ${sc.text}`}>
                      {t.surface}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1 gap-2">
                    <span className="text-white/40 text-[10px]">{t.location}</span>
                    <span className="text-tennis-ball/70 text-[10px] font-medium tabular-nums whitespace-nowrap">
                      {new Date(t.startDate).toLocaleDateString('de-DE', { day: '2-digit', month: 'short' })}
                      {' – '}
                      {new Date(t.endDate).toLocaleDateString('de-DE', { day: '2-digit', month: 'short' })}
                    </span>
                  </div>
                  <div className="text-white/30 text-[10px] mt-0.5">{getBroadcastIcon(t.broadcast)} {t.broadcast}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
