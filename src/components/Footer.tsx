import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-tennis-dark text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3
              className="font-display text-xl font-bold mb-3 text-tennis-ball"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Tenniskompass
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Der unabhängige Ratgeber für Tennis-Eltern in Deutschland. Vom ersten Schläger bis zum Mannschaftsspiel.
            </p>
            <p className="text-white/50 text-xs mt-4">
              tenniskompass.de
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-tennis-ball/80 mb-4">Ratgeber</h4>
            <ul className="space-y-2 text-sm">
              {[
                ['Kinderschläger', '/kinderschlaeger'],
                ['Tennisschuhe', '/kinderschuhe'],
                ['Verein finden', '/vereine'],
                ['Kosten', '/kosten'],
                ['Liga.nu', '/liganu'],
                ['Eltern-Kodex', '/eltern-kodex'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/70 hover:text-tennis-ball transition-colors duration-150 cursor-pointer">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-tennis-ball/80 mb-4">Info</h4>
            <ul className="space-y-2 text-sm">
              {[
                ['Impressum', '/impressum'],
                ['Datenschutz', '/datenschutz'],
                ['Newsletter', '/#newsletter'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/70 hover:text-tennis-ball transition-colors duration-150 cursor-pointer">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 bg-white/10 rounded-xl text-xs text-white/50 leading-relaxed">
              * Einige Links sind Affiliate-Links. Bei einem Kauf erhalten wir eine kleine Provision ohne Mehrkosten für Sie.
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Tenniskompass. Alle Rechte vorbehalten.</p>
          <p>Ein unabhängiger Ratgeber für Deutsche Tennis-Eltern</p>
        </div>
      </div>
    </footer>
  );
}
