import type { Metadata } from 'next';
import TournamentCountdown from '@/components/TournamentCountdown';

export const metadata: Metadata = {
  title: 'Turnierkalender, ATP & Grand Slams',
  description: 'Countdown zu den nächsten großen Tennisturnieren: Australian Open, Roland Garros, Wimbledon, US Open und mehr.',
};

export default function TurnierkalenderPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1
        className="text-3xl sm:text-4xl font-bold text-tennis-dark mb-2"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Turnierkalender
      </h1>
      <p className="text-gray-600 mb-10">
        Die nächsten großen ATP- und Grand-Slam-Turniere mit Countdown und TV-Übertragung.
      </p>
      <TournamentCountdown />
    </div>
  );
}
