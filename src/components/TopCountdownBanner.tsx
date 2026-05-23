'use client';

import { useState, useEffect } from 'react';
import { getNextTournament, isOngoing, type Tournament } from '@/lib/tournaments';

function calcDays(startDate: string): number {
  const diff = new Date(startDate).getTime() - Date.now();
  return Math.max(0, Math.floor(diff / 86_400_000));
}

function calcTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    h: Math.floor((diff % 86_400_000) / 3_600_000),
    m: Math.floor((diff % 3_600_000) / 60_000),
    s: Math.floor((diff % 60_000) / 1_000),
  };
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function TopCountdownBanner() {
  const [tournament, setTournament] = useState<Tournament | null>(null);
  const [days, setDays] = useState(0);
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });
  const [live, setLive] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const t = getNextTournament(now);
      setTournament(t);
      if (t) {
        const ongoing = isOngoing(t, now);
        setLive(ongoing);
        if (!ongoing) {
          setDays(calcDays(t.startDate));
          setTime(calcTimeLeft(new Date(t.startDate)));
        }
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!tournament) return null;

  return (
    <div className="bg-tennis-dark text-white text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-center sm:justify-between gap-2">
        {/* Left: tournament info */}
        <div className="flex items-center gap-2">
          {live ? (
            <>
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse flex-shrink-0" />
              <span className="font-semibold text-white">
                {tournament.name} läuft gerade
              </span>
              <span className="text-white/50">·</span>
              <span className="text-white/60">{tournament.location}</span>
            </>
          ) : (
            <>
              <span className="text-tennis-ball font-bold uppercase tracking-wider text-[10px]">
                {tournament.type}
              </span>
              <span className="text-white/30">·</span>
              <span className="font-semibold text-white">{tournament.name}</span>
              <span className="text-white/50 hidden sm:inline">·</span>
              <span className="text-white/60 hidden sm:inline">{tournament.location}</span>
            </>
          )}
        </div>

        {/* Right: countdown */}
        {!live && (
          <div className="flex items-center gap-1 font-mono tabular-nums">
            <span className="text-white/50 text-[10px] mr-1 hidden sm:inline">startet in</span>
            <span className="bg-white/10 rounded px-1.5 py-0.5 font-bold text-tennis-ball" suppressHydrationWarning>
              {days}T
            </span>
            <span className="text-white/30">:</span>
            <span className="bg-white/10 rounded px-1.5 py-0.5 font-bold" suppressHydrationWarning>
              {pad(time.h)}h
            </span>
            <span className="text-white/30">:</span>
            <span className="bg-white/10 rounded px-1.5 py-0.5 font-bold" suppressHydrationWarning>
              {pad(time.m)}m
            </span>
            <span className="text-white/30">:</span>
            <span className="bg-white/10 rounded px-1.5 py-0.5 font-bold" suppressHydrationWarning>
              {pad(time.s)}s
            </span>
            <span className="text-white/40 ml-1 hidden sm:inline text-[10px]">
              · {tournament.broadcast}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
