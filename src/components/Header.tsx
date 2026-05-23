'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-tennis-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" aria-label="Tenniskompass Startseite">
            <div className="w-9 h-9 rounded-lg bg-tennis-dark flex items-center justify-center flex-shrink-0">
              <Image src="/logo.jpg" alt="Tenniskompass Logo" width={36} height={36} className="rounded-lg object-cover" />
            </div>
            <span
              className="font-display font-bold text-tennis-dark text-xl tracking-tight leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Tennis<span className="text-tennis-ball">kompass</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium" aria-label="Hauptnavigation">
            <Link href="/" className="text-tennis-dark hover:text-tennis transition-colors duration-150 cursor-pointer">
              Startseite
            </Link>
            <Link href="/#ratgeber" className="text-tennis-dark hover:text-tennis transition-colors duration-150 cursor-pointer">
              Ratgeber
            </Link>
            <Link href="/turniere" className="bg-tennis-dark text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-tennis transition-colors duration-150 cursor-pointer">
              Turnierkalender
            </Link>
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 text-tennis-dark rounded-lg hover:bg-tennis-light transition-colors duration-150 cursor-pointer"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={open}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-tennis-border px-4 py-4 space-y-3">
          <Link href="/" className="block font-medium text-tennis-dark py-1 cursor-pointer" onClick={() => setOpen(false)}>
            Startseite
          </Link>
          <Link href="/#ratgeber" className="block font-medium text-tennis-dark py-1 cursor-pointer" onClick={() => setOpen(false)}>
            Ratgeber
          </Link>
          <Link href="/turniere" className="block font-medium text-tennis-dark py-1 cursor-pointer" onClick={() => setOpen(false)}>
            Turniere
          </Link>
          <Link href="/turniere" className="block font-semibold text-tennis py-1 cursor-pointer" onClick={() => setOpen(false)}>
            Turnierkalender →
          </Link>
        </div>
      )}
    </header>
  );
}
