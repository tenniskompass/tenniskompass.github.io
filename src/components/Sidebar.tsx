'use client';

import TournamentCountdown from './TournamentCountdown';

export default function Sidebar() {
  return (
    <aside className="space-y-6" aria-label="Sidebar">
      {/* Tournament countdown */}
      <TournamentCountdown />

      {/* Newsletter */}
      <div id="newsletter" className="bg-white border border-tennis-border rounded-2xl p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-tennis mb-2">Newsletter</p>
        <h3
          className="font-display font-bold text-tennis-dark text-lg mb-2 leading-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Tennis-Tipps direkt ins Postfach
        </h3>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          Keine Werbung. Nur nützliche Infos für Tennis-Eltern – 1× im Monat.
        </p>
        <form className="space-y-2" onSubmit={(e) => e.preventDefault()} aria-label="Newsletter anmelden">
          <label htmlFor="newsletter-email" className="sr-only">E-Mail-Adresse</label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="ihre@email.de"
            className="w-full px-4 py-2.5 border border-tennis-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-tennis focus:border-tennis transition-colors"
            aria-label="E-Mail-Adresse"
          />
          <button
            type="submit"
            className="w-full bg-tennis-dark text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-tennis transition-colors duration-150 cursor-pointer"
          >
            Anmelden
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-2">Abmeldung jederzeit möglich.</p>
      </div>

      {/* Shop box */}
      <div className="bg-tennis-light border border-tennis-border rounded-2xl p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-tennis mb-2">Empfehlung</p>
        <h3
          className="font-display font-bold text-tennis-dark text-base mb-2 leading-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Tennis-Ausrüstung bei unserem Partner
        </h3>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          Schläger, Schuhe und Zubehör – kuratiert für Kinder und Jugendliche.
        </p>
        {/* Affiliate placeholder */}
        <a
          href="https://www.amazon.de/s?k=kindertennisschläger&tag=DEIN_TAG"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex items-center justify-center gap-2 w-full bg-tennis-ball text-tennis-dark py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity duration-150 cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          Zum Shop →
        </a>
        <p className="text-xs text-gray-400 mt-2">* Affiliate-Link. Keine Mehrkosten für Sie.</p>
      </div>
    </aside>
  );
}
