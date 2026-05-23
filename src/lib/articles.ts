export interface Article {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  affiliate?: boolean;
}

export const articles: Article[] = [
  {
    slug: 'kinderschlaeger',
    title: 'Den richtigen Kinderschläger finden',
    category: 'Ausrüstung',
    description: 'Der erste eigene Schläger ist ein großer Moment. Die richtige Größe entscheidet darüber, ob Ihr Kind motiviert bleibt oder die Lust verliert.',
    image: '/bilder/kinderschlaeger.svg',
    affiliate: true,
  },
  {
    slug: 'kinderschuhe',
    title: 'Tennisschuhe für Kinder richtig auswählen',
    category: 'Schuhe',
    description: 'Der Unterschied zwischen einem normalen Sportschuh und einem Tennisschuh liegt in Stabilität, Sohle und Verstärkung – für Kinder besonders wichtig.',
    image: '/bilder/kinderschuhe.svg',
    affiliate: true,
  },
  {
    slug: 'vereine',
    title: 'Tennisverein finden, deutschlandweit',
    category: 'Vereine',
    description: 'Tennis lebt vom Verein. Anders als beim Fußball gibt es kaum Schulsport mit Tennis. Wir zeigen, worauf Sie bei der Vereinswahl achten sollten.',
    image: '/bilder/vereine.svg',
  },
  {
    slug: 'tennisschule',
    title: 'Eine gute Tennisschule erkennen',
    category: 'Training',
    description: 'Trainerlizenz ist nicht gleich Trainerlizenz. Es lohnt sich, die Qualifikation und die Methodik genau anzuschauen.',
    image: '/bilder/tennisschule.svg',
  },
  {
    slug: 'kosten',
    title: 'Was Tennis für Kinder wirklich kostet',
    category: 'Kosten',
    description: 'Tennis ist nicht der teuerste Sport, aber auch nicht der günstigste. Wer ehrlich rechnet, kommt im ersten Jahr auf 600 bis 1500 Euro.',
    image: '/bilder/kosten.svg',
  },
  {
    slug: 'liganu',
    title: 'Liga.nu für Eltern verstehen',
    category: 'Organisation',
    description: 'Liga.nu ist die offizielle Plattform des DTB für Mannschaftsspiele. Hier finden Sie Spielpläne, Aufstellungen und Ergebnisse.',
    image: '/bilder/liganu.svg',
  },
  {
    slug: 'turniere',
    title: 'Turniere und Nenngeld',
    category: 'Turniere',
    description: 'Im Gegensatz zum Fußball gibt es im Tennis nicht jedes Wochenende ein Turnier. Wer mitspielen will, muss sich aktiv anmelden.',
    image: '/bilder/turniere.svg',
  },
  {
    slug: 'medenspiele',
    title: 'Medenspiele und Aufstellung verstehen',
    category: 'Mannschaft',
    description: 'Medenspiele sind die Mannschaftsmeisterschaften im deutschen Tennis. Wir erklären, wie die Aufstellung funktioniert.',
    image: '/bilder/medenspiele.svg',
  },
  {
    slug: 'familiencamps',
    title: 'Familien-Tennisurlaub und Camps',
    category: 'Reisen',
    description: 'Tennis-Camps verbinden Urlaub mit gezieltem Training. Die Auswahl ist riesig, die Qualitätsunterschiede auch.',
    image: '/bilder/familiencamps.svg',
    affiliate: true,
  },
  {
    slug: 'eltern-kodex',
    title: 'Der Eltern-Kodex am Spielfeldrand',
    category: 'Mentalität',
    description: 'Der größte Fehler ist gut gemeintes Coaching von außen. Tennis ist ein Sport, in dem Kinder allein Entscheidungen treffen müssen.',
    image: '/bilder/eltern_kodex.svg',
  },
  {
    slug: 'tennisprofi',
    title: 'Der Weg zum Tennis-Profi',
    category: 'Karriere',
    description: 'Profi werden ist ein Marathon. Realistisch schaffen es weniger als 1 von 10.000 Talenten in die Weltrangliste – doch der Weg ist oft wertvoll.',
    image: '/bilder/tennisprofi.svg',
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAdjacentArticles(slug: string): { prev: Article | null; next: Article | null } {
  const idx = articles.findIndex((a) => a.slug === slug);
  return {
    prev: idx > 0 ? articles[idx - 1] : null,
    next: idx < articles.length - 1 ? articles[idx + 1] : null,
  };
}
