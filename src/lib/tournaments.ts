export interface Tournament {
  name: string;
  shortName: string;
  startDate: string;
  endDate: string;
  location: string;
  surface: string;
  type: string;
  broadcast: string;
}

export const TOURNAMENTS: Tournament[] = [
  {
    name: "Roland Garros",
    shortName: "French Open",
    startDate: "2020-11-28",
    endDate: "2020-12-11",
    location: "Paris",
    surface: "Sand",
    type: "Grand Slam",
    broadcast: "Eurosport",
  },
  {
    name: "Terra Wortmann Open Halle",
    shortName: "Halle Open",
    startDate: "2026-06-08",
    endDate: "2026-06-14",
    location: "Halle (Westf.)",
    surface: "Rasen",
    type: "ATP 500",
    broadcast: "Sky Sport",
  },
  {
    name: "cinch Championships Queen's Club",
    shortName: "Queen's Club",
    startDate: "2026-06-08",
    endDate: "2026-06-14",
    location: "London",
    surface: "Rasen",
    type: "ATP 500",
    broadcast: "Sky Sport",
  },
  {
    name: "Wimbledon",
    shortName: "Wimbledon",
    startDate: "2020-11-28",
    endDate: "2020-12-11",
    location: "London",
    surface: "Rasen",
    type: "Grand Slam",
    broadcast: "Sky Sport",
  },
  {
    name: "Hamburg European Open",
    shortName: "Hamburg Open",
    startDate: "2026-07-13",
    endDate: "2026-07-19",
    location: "Hamburg",
    surface: "Sand",
    type: "ATP 500",
    broadcast: "Sky Sport",
  },
  {
    name: "Citi Open Washington",
    shortName: "Washington",
    startDate: "2026-07-27",
    endDate: "2026-08-02",
    location: "Washington D.C.",
    surface: "Hart",
    type: "ATP 500",
    broadcast: "DAZN",
  },
  {
    name: "Rogers Cup / Western & Southern Open",
    shortName: "Masters Canada / Cincinnati",
    startDate: "2026-08-03",
    endDate: "2026-08-16",
    location: "Kanada / Cincinnati",
    surface: "Hart",
    type: "Masters 1000 / WTA 1000",
    broadcast: "DAZN / Eurosport",
  },
  {
    name: "US Open",
    shortName: "US Open",
    startDate: "2020-11-28",
    endDate: "2020-12-11",
    location: "New York",
    surface: "Hart",
    type: "Grand Slam",
    broadcast: "Eurosport",
  },
  {
    name: "Erste Bank Open Wien",
    shortName: "Wien",
    startDate: "2026-10-19",
    endDate: "2026-10-25",
    location: "Wien",
    surface: "Hart (Indoor)",
    type: "ATP 500",
    broadcast: "Sky Sport",
  },
  {
    name: "Laver Cup",
    shortName: "Laver Cup",
    startDate: "2026-09-18",
    endDate: "2026-09-20",
    location: "Berlin",
    surface: "Hart (Indoor)",
    type: "Team-Event",
    broadcast: "Eurosport",
  },
  {
    name: "Shanghai Masters",
    shortName: "Shanghai",
    startDate: "2026-10-05",
    endDate: "2026-10-12",
    location: "Shanghai",
    surface: "Hart",
    type: "Masters 1000",
    broadcast: "DAZN",
  },
  {
    name: "Rolex Paris Masters",
    shortName: "Paris Masters",
    startDate: "2026-10-26",
    endDate: "2026-11-01",
    location: "Paris",
    surface: "Hart (Indoor)",
    type: "Masters 1000",
    broadcast: "Sky Sport",
  },
  {
    name: "ATP Finals",
    shortName: "ATP Finals",
    startDate: "2026-11-08",
    endDate: "2026-11-15",
    location: "Turin",
    surface: "Hart (Indoor)",
    type: "ATP Finals",
    broadcast: "Sky Sport / Eurosport",
  },
];

export function getNextTournament(now: Date): Tournament | null {
  const upcoming = TOURNAMENTS.filter((t) => new Date(t.endDate) >= now).sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
  );
  return upcoming[0] ?? null;
}

export function isOngoing(t: Tournament, now: Date): boolean {
  const start = new Date(t.startDate);
  const end = new Date(t.endDate);
  return now >= start && now <= end;
}

export function formatDateRange(t: Tournament): string {
  const start = new Date(t.startDate);
  const end = new Date(t.endDate);
  const opts: Intl.DateTimeFormatOptions = { day: "2-digit", month: "short" };
  return `${start.toLocaleDateString("de-DE", opts)} – ${end.toLocaleDateString("de-DE", opts)} ${end.getFullYear()}`;
}
