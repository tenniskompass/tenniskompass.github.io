/**
 * Fetches major ATP/WTA/Grand Slam tournament data from TheSportsDB (free tier).
 * Falls back silently to existing data if the API is unavailable.
 * Output: src/lib/tournaments.ts (updated in place)
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dir, '..');
const OUT_FILE = join(ROOT, 'src/lib/tournaments.ts');

const YEAR = new Date().getFullYear();
const NEXT_YEAR = YEAR + 1;

// Grand Slam IDs on TheSportsDB (verified public IDs)
const GRAND_SLAM_EVENTS = [
  { id: '1070184', name: 'Australian Open',   shortName: 'Australian Open',   surface: 'Hart',  broadcast: 'Eurosport',        type: 'Grand Slam' },
  { id: '1070188', name: 'Roland Garros',      shortName: 'French Open',       surface: 'Sand',  broadcast: 'Eurosport',        type: 'Grand Slam' },
  { id: '1070190', name: 'Wimbledon',          shortName: 'Wimbledon',         surface: 'Rasen', broadcast: 'Sky Sport',         type: 'Grand Slam' },
  { id: '1070192', name: 'US Open',            shortName: 'US Open',           surface: 'Hart',  broadcast: 'Eurosport',        type: 'Grand Slam' },
];

async function fetchEvent(id, year) {
  const url = `https://www.thesportsdb.com/api/v1/json/3/lookupevent.php?id=${id}`;
  const res = await fetch(url, {
    signal: AbortSignal.timeout(8000),
    headers: { 'User-Agent': 'Tenniskompass/1.0 (tenniskompass.de)' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for event ${id}`);
  const data = await res.json();
  return data?.events?.[0] ?? null;
}

async function run() {
  console.log(`Fetching tournament data for ${YEAR}/${NEXT_YEAR}...`);

  // Read existing file to preserve data structure
  const existing = readFileSync(OUT_FILE, 'utf8');

  try {
    const fetched = [];

    for (const meta of GRAND_SLAM_EVENTS) {
      try {
        const ev = await fetchEvent(meta.id, YEAR);
        if (ev?.dateEvent) {
          fetched.push({
            ...meta,
            startDate: ev.dateEvent,
            // Most Grand Slams run ~14 days; adjust if API provides end date
            endDate: ev.dateEventEnd ?? offsetDate(ev.dateEvent, 13),
            location: ev.strVenue ?? ev.strCity ?? '',
          });
          console.log(`  ✓ ${meta.name}: ${ev.dateEvent}`);
        }
      } catch (err) {
        console.warn(`  ⚠ Could not fetch ${meta.name}: ${err.message}`);
      }
    }

    if (fetched.length === 0) {
      console.log('No live data retrieved – keeping existing tournaments.ts');
      return;
    }

    // Merge fetched data into the existing hardcoded list
    const updated = mergeTournaments(existing, fetched);
    writeFileSync(OUT_FILE, updated, 'utf8');
    console.log(`✓ tournaments.ts updated (${fetched.length} events from API)`);

  } catch (err) {
    console.warn('⚠ Fetch step failed – keeping existing tournaments.ts:', err.message);
    // Do NOT throw – workflow must continue with existing data
  }
}

function offsetDate(dateStr, days) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

/**
 * Replaces startDate/endDate in the existing TS source for known tournaments.
 * Safer than full file replacement – keeps all other fields intact.
 */
function mergeTournaments(source, fetched) {
  let result = source;
  for (const t of fetched) {
    // Replace startDate line for this tournament
    result = result.replace(
      new RegExp(`(name:\\s*"${escapeRe(t.name)}"[\\s\\S]*?startDate:\\s*")[^"]+(")`),
      `$1${t.startDate}$2`,
    );
    result = result.replace(
      new RegExp(`(name:\\s*"${escapeRe(t.name)}"[\\s\\S]*?endDate:\\s*")[^"]+(")`),
      `$1${t.endDate}$2`,
    );
  }
  return result;
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

run();
