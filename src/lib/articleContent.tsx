import type { ReactNode } from "react";

export interface ArticleData {
  metaDescription: string;
  intro: ReactNode;
  content: ReactNode;
  affiliate?: {
    title: string;
    text: string;
    href: string;
    cta: string;
  };
}

const Box = ({ children }: { children: ReactNode }) => (
  <div className="highlight-box my-6">{children}</div>
);

const Table = ({ head, rows }: { head: string[]; rows: string[][] }) => (
  <div className="overflow-x-auto my-6">
    <table className="prose-tk">
      <thead>
        <tr>
          {head.map((h) => (
            <th key={h}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const articleContent: Record<string, ArticleData> = {
  kinderschlaeger: {
    metaDescription:
      "Den richtigen Kindertennisschläger finden: Größentabelle nach Alter und Körpergröße, Gewicht, Griff und häufige Fehler beim Kauf erklärt.",
    intro: (
      <p>
        Der erste eigene Schläger ist ein großer Moment. Die richtige Größe
        entscheidet darüber, ob Ihr Kind motiviert bleibt oder die Lust verliert.
        Ein zu großer Schläger ist für Kinder das größte Hindernis.
      </p>
    ),
    content: (
      <div className="prose-tk">
        <h2>Warum die Schlägergröße so wichtig ist</h2>
        <p>
          Ein zu großer Schläger ist schwer, kippt im Handgelenk und führt schnell
          zu falscher Schlagtechnik oder Schmerzen im Arm. Die International Tennis
          Federation hat das Stage System (Play and Stay) eingeführt, das Bälle
          und Schlägergrößen an Alter und Körpergröße anpasst.
        </p>

        <h2>Die richtige Schlägergröße in Zoll</h2>
        <Table
          head={["Alter", "Körpergröße", "Schlägergröße"]}
          rows={[
            ["Bis 4 Jahre", "bis ca. 105 cm", "17 oder 19 Zoll"],
            ["4–6 Jahre", "105–115 cm", "21 Zoll"],
            ["6–8 Jahre", "115–125 cm", "23 Zoll"],
            ["8–10 Jahre", "125–135 cm", "25 Zoll"],
            ["10–12 Jahre", "ab 135 cm", "26 Zoll"],
            ["Ab 12 Jahren", "ab 145 cm", "Erwachsenenschläger (27 Zoll+)"],
          ]}
        />
        <p>
          <strong>Knöcheltest:</strong> Lassen Sie Ihr Kind den Schläger im Stehen
          seitlich am Körper halten, die Schlägerspitze sollte etwa knöchelhoch
          enden.
        </p>

        <h2>Gewicht, Griff und Bespannung</h2>
        <p>
          Kinderschläger zwischen 17 und 25 Zoll sind in der Regel aus Aluminium
          und fertig bespannt. Sie wiegen 180 bis 240 Gramm. Erst ab 26 Zoll
          lohnen sich Composite- oder Graphit-Modelle. Der Griff sollte klein
          sein, meistens Größe 0 oder 1. Ein zu dicker Griff zwingt das Kind in eine
          falsche Handhaltung.
        </p>

        <h2>Häufige Fehler beim Kauf</h2>
        <Box>
          <p className="font-semibold text-tennis-dark mb-1">Wichtig:</p>
          <p>
            Eltern kaufen oft eine Nummer größer, damit der Schläger länger hält.
            Das ist die häufigste Ursache für Tennisellenbogen bei Kindern. Lieber
            jedes Jahr ein passendes Modell als ein zu großes über mehrere Jahre.
            Gebrauchte Schläger aus Online-Kleinanzeigen sind eine gute Alternative.
          </p>
        </Box>

        <h2>Wann neu bespannen?</h2>
        <p>
          Erst ab 26 Zoll relevant. Faustregel: So viele Bespannungen pro Jahr wie
          Trainingseinheiten pro Woche. Wer zweimal pro Woche spielt, sollte den
          Schläger zweimal jährlich bespannen lassen.
        </p>
      </div>
    ),
    affiliate: {
      title: "Kinderschläger bei unserem Partner",
      text: "Kuratierte Auswahl an Kindertennisschlägern in den richtigen Größen, sortiert nach Alter und Körpergröße.",
      href: "https://www.amazon.de/s?k=kindertennisschläger&tag=DEIN_TAG",
      cta: "Schläger ansehen →",
    },
  },

  kinderschuhe: {
    metaDescription:
      "Tennisschuhe für Kinder richtig auswählen: Sandplatz, Halle oder Allcourt, welche Sohle ist wann richtig, und worauf achten beim Kauf.",
    intro: (
      <p>
        Der Unterschied zwischen einem normalen Sportschuh und einem Tennisschuh
        liegt in Stabilität, Sohle und Verstärkung. Für Kinder ist das besonders
        wichtig, falsche Schuhe können auf Dauer Schäden verursachen.
      </p>
    ),
    content: (
      <div className="prose-tk">
        <h2>Die drei Sohlenarten</h2>
        <ul>
          <li>
            <strong>Sandplatz (Asche):</strong> Fischgrätenprofil, damit der Schuh
            kontrolliert rutschen kann. Niemals Allcourt auf Sand, das zerstört den
            Platz und den Schuh.
          </li>
          <li>
            <strong>Halle (Teppich):</strong> Komplett glatte Sohle ohne Profil.
            Profil reißt den Teppich auf, viele Hallenbetreiber verbieten
            Profilsohlen ausdrücklich.
          </li>
          <li>
            <strong>Allcourt:</strong> Mittleres Profil, geeignet für Hartplatz
            draußen und manche Hallenböden mit Granulat. Allrounder, aber nicht
            ideal für reinen Sandplatz.
          </li>
        </ul>

        <h2>Was muss ein Kindertennisschuh leisten?</h2>
        <p>
          Tennis bedeutet ständige Stop-and-Go-Bewegungen. Ein Tennisschuh hat
          verstärkte Zehenboxen, weil viele Kinder beim Aufschlag den großen Zeh
          schleifen. Die Seitenpartien sind verstärkt für schnelle seitliche
          Richtungswechsel.
        </p>

        <Box>
          <p className="font-semibold text-tennis-dark mb-1">Sandplatz-Tipp:</p>
          <p>
            Wenn Ihr Kind von Mai bis September ausschließlich auf Sandplatz
            trainiert, kaufen Sie einen reinen Sandplatzschuh. Im Winter wechseln
            Sie auf einen Hallenschuh. Zwei Paar Schuhe kosten weniger als eine
            Verletzung durch falsches Schuhwerk.
          </p>
        </Box>

        <h2>Klettverschluss oder Schnürsenkel?</h2>
        <p>
          Bis ca. 8 Jahre ist Klettverschluss praktisch, kein Aufschnüren im
          Wechsel. Ab 8–9 Jahren sollten Kinder lernen, Schnürsenkel selbst zu
          binden, weil diese einen besseren Halt geben und häufiger in
          Junioren-Turnieren vorgeschrieben sind.
        </p>

        <h2>Schuhgröße und Passform</h2>
        <p>
          Kaufen Sie Tennisschuhe eine halbe Nummer größer als die aktuelle
          Schuhgröße. Der Fuß braucht Bewegungsfreiheit nach vorne. Lassen Sie Ihr
          Kind die Schuhe am besten nachmittags anprobieren, Füße schwellen im
          Tagesverlauf leicht an.
        </p>
      </div>
    ),
    affiliate: {
      title: "Tennisschuhe für Kinder",
      text: "Sandplatz-, Hallen- und Allcourt-Schuhe in Kindergrößen, gefiltert nach Belag und Größe.",
      href: "https://www.amazon.de/s?k=kindertennisschuhe&tag=DEIN_TAG",
      cta: "Schuhe ansehen →",
    },
  },

  vereine: {
    metaDescription:
      "Tennisverein in Deutschland finden: rund 9.000 Vereine im DTB, Kriterien für einen guten Kinderverein, Schnupperstunden nutzen und Beitrag verhandeln.",
    intro: (
      <p>
        Tennis lebt vom Verein. Anders als beim Fußball gibt es kaum Schulsport mit
        Tennis, der erste Kontakt läuft fast immer über einen lokalen Verein.
        Deutschland hat rund 9.000 Tennisvereine im DTB.
      </p>
    ),
    content: (
      <div className="prose-tk">
        <h2>So suchen Sie systematisch</h2>
        <p>
          Der Deutsche Tennis Bund (DTB) hat 18 Mitgliederverbände (Landesverbände).
          Jeder Landesverband betreibt eine eigene Vereinssuche. Über die Website des
          DTB gelangen Sie zu Ihrem Landesverband. Dort filtern Sie nach Postleitzahl,
          Hallenbetrieb und Jugendangeboten.
        </p>

        <h2>Was zeichnet einen guten Verein für Kinder aus?</h2>
        <ul>
          <li>Ein eigener Jugendwart, der ansprechbar ist</li>
          <li>Mehrere Kindergruppen, idealerweise nach Alter und Spielstärke getrennt</li>
          <li>Mindestens ein Trainer mit C-Trainer-Lizenz oder höher</li>
          <li>Play-and-Stay-Konzept mit Kleinfeld, Midcourt und Großfeld</li>
          <li>Mannschaftsbetrieb in der Junioren-Liga, falls Wettkampf gewünscht</li>
          <li>Halle oder Hallenkooperation im Winter</li>
        </ul>

        <h2>Schnupperstunden nutzen</h2>
        <p>
          Fast jeder Verein bietet kostenlose Schnupperstunden an. Nehmen Sie diese
          wahr, sowohl für Ihr Kind als auch für Sie. Beobachten Sie, wie der
          Trainer mit Kindern umgeht, ob die Gruppe harmoniert und ob die Anlage
          gepflegt ist.
        </p>

        <Box>
          <p className="font-semibold text-tennis-dark mb-1">Checkliste Vereinswahl:</p>
          <ul>
            <li>Jugendwart vorhanden und erreichbar?</li>
            <li>Spielbetrieb in der Altersstufe Ihres Kindes?</li>
            <li>Klare Kostenübersicht (Beitrag, Platzgebühren, Trainingspauschale)?</li>
            <li>Hallensituation im Winter geklärt?</li>
          </ul>
        </Box>

        <h2>Beitrag und Kosten</h2>
        <p>
          Jahresbeiträge für Kinder liegen meist zwischen 60 und 120 Euro. Dazu
          kommen Trainingsgebühren (200–500 Euro/Jahr) und oft eine
          Aufnahmegebühr (0–100 Euro, einmalig). Fragen Sie explizit nach der
          Winterlösung, Vereine ohne eigene Halle verrechnen oft zusätzliche
          Hallenmiete.
        </p>
      </div>
    ),
  },

  tennisschule: {
    metaDescription:
      "Eine gute Tennisschule erkennen: DTB-Trainerlizenzen erklärt, Play-and-Stay-Konzept, ideale Gruppengröße und worauf Eltern achten sollten.",
    intro: (
      <p>
        Trainerlizenz ist nicht gleich Trainerlizenz. Es lohnt sich, die
        Qualifikation und die Methodik genau anzuschauen, besonders wenn Ihr Kind
        von Anfang an die richtigen Grundlagen lernen soll.
      </p>
    ),
    content: (
      <div className="prose-tk">
        <h2>Die Trainerlizenzen in Deutschland</h2>
        <Table
          head={["Lizenz", "Stufe", "Einsatzbereich"]}
          rows={[
            ["Vereinstrainer (ÜL)", "Einstiegsqualifikation", "Ehrenamtliche Helfer im Verein"],
            ["C-Trainer Breitensport", "Basis", "Anfänger und Hobbyspieler"],
            ["B-Trainer Leistungssport", "Fortgeschritten", "Mannschaften, ambitioniertes Training"],
            ["A-Trainer Leistungssport", "Höchste Stufe", "Verband, Stützpunkte, Profis"],
          ]}
        />
        <p>
          Für Kindergruppen reicht die C-Lizenz, sofern der Trainer
          Kindererfahrung mitbringt. Ein B-Trainer ist ein Qualitätsmerkmal, das
          nicht jeder kleine Verein bieten kann.
        </p>

        <h2>Play and Stay als Qualitätsmerkmal</h2>
        <p>
          Das ITF-Konzept Play and Stay nutzt langsamere Bälle und kleinere Plätze,
          damit Kinder schneller ins Spiel kommen:
        </p>
        <ul>
          <li><strong>Rot (Stage 3):</strong> Für Kinder von rund 5 bis 8 (teilweise bis 9)
          Jahren. Diese Bälle bestehen meist aus Schaumstoff oder weichem Filz, sind etwa
          75 % langsamer als ein normaler Ball und springen sehr flach ab, gedacht fürs
          Kleinfeld.</li>
          <li><strong>Orange (Stage 2):</strong> Für 8- bis 10-Jährige. In normaler
          Ballgröße, aber mit 50 % reduziertem Druck. Sie sind flotter als die roten Bälle
          und erlauben auf dem Midcourt trotzdem längere Ballwechsel.</li>
          <li><strong>Grün (Stage 1):</strong> Übergangsstufe für 10- bis 12-Jährige. Nur
          noch 25 % langsamer als ein regulärer Tennisball, gespielt wird hier bereits auf
          dem kompletten Großfeld.</li>
          <li><strong>Gelb:</strong> Der klassische Standard-Tennisball für Spieler ab etwa
          12 Jahren und für Erwachsene.</li>
        </ul>
        <Box>
          <p>
            Eine Tennisschule, die dieses Konzept nicht kennt, ist veraltet. Fragen
            Sie gezielt danach.
          </p>
        </Box>

        <h2>Gruppengröße und Trainingsqualität</h2>
        <p>
          Optimal sind 4 Kinder pro Trainer. Gruppen mit 8 oder mehr Kindern auf
          einer Bahn bedeuten lange Wartezeiten und wenig individuelle Korrektur.
          Einzeltraining ist ideal für technische Entwicklung, aber teuer (35–70
          Euro/Stunde). Eine gute Gruppe mit 4 Kindern ist oft effektiver als
          schlechtes Einzeltraining.
        </p>

        <h2>Probestunde und erste Eindrücke</h2>
        <p>
          Beobachten Sie die erste Trainingsstunde. Ein guter Kindertrainer erklärt
          kurz, demonstriert, lässt spielen und gibt sofort Feedback. Er lobt
          Anstrengung, nicht Ergebnis. Er schimpft nie, wenn ein Ball ins Netz geht.
        </p>
      </div>
    ),
  },

  kosten: {
    metaDescription:
      "Was Tennis für Kinder wirklich kostet: Jahreskosten realistisch kalkuliert, die Winter-Falle, Einzeltraining, Turnierstarts und wie man spart.",
    intro: (
      <p>
        Tennis ist nicht der teuerste Sport, aber auch nicht der günstigste. Wer
        ehrlich rechnet, kommt im ersten Jahr auf 600 bis 1.500 Euro, je nach
        Ambitionen und Winter-Situation.
      </p>
    ),
    content: (
      <div className="prose-tk">
        <h2>Die Grundkosten im Überblick</h2>
        <Table
          head={["Kostenblock", "Typischer Jahresbetrag"]}
          rows={[
            ["Vereinsbeitrag", "60–250 €"],
            ["Aufnahmegebühr (einmalig)", "0–100 €"],
            ["Gruppentraining Sommer", "200–500 €"],
            ["Bälle, Griffbänder, Kleinmaterial", "ca. 50 €"],
            ["Schläger und Schuhe", "80–200 €"],
            ["Summe Sommer", "ca. 400–1.000 €"],
          ]}
        />

        <h2>Die Winter-Falle</h2>
        <Box>
          <p className="font-semibold text-tennis-dark mb-2">Achtung Winterkosten:</p>
          <p>
            Vereine ohne eigene Halle weichen in fremde Hallen aus, das bedeutet
            zusätzliche Hallenmiete von 20 bis 35 Euro pro Stunde. Wer im Winter
            zweimal pro Woche spielt, zahlt schnell 600 bis 1.000 Euro zusätzlich.
            Fragen Sie vor dem Vereinsbeitritt explizit nach der Winterlösung.
          </p>
        </Box>

        <h2>Einzeltraining</h2>
        <p>
          Eine Einzelstunde mit einem Trainer kostet 35 bis 70 Euro. Wer
          ambitioniert trainieren will, braucht mindestens eine Einzelstunde
          pro Woche, das sind 1.500 bis 3.000 Euro zusätzlich im Jahr.
        </p>

        <h2>Turnierstarts</h2>
        <p>
          Das Nenngeld (auch Startgeld genannt) ist die fällige Gebühr für die
          Teilnahme an einem Wettbewerb, Turnier oder Sportevent. Die genaue Höhe
          steht immer in der Ausschreibung des Turniers und liegt bei
          Kinderturnieren meist zwischen 15 und 55 Euro pro Konkurrenz. Dazu kommen
          Anfahrt, ggf. Übernachtung und Verpflegung. Wer monatlich an einem Turnier
          teilnimmt, rechnet mit 500 bis 1.500 Euro jährlich nur für Turniere.
        </p>

        <h2>Wie man spart</h2>
        <ul>
          <li>Gebrauchte Schläger aus Online-Kleinanzeigen (20–50 € statt 80–150 €)</li>
          <li>Vereine mit eigener Halle suchen, kein Hallenmietzuschlag im Winter</li>
          <li>Gruppentraining statt Einzeltraining für den Einstieg</li>
          <li>Vereinsinterne Turniere (Clubmeisterschaft) sind oft kostenlos</li>
        </ul>
      </div>
    ),
  },

  liganu: {
    metaDescription:
      "Liga.nu für Eltern erklärt: So finden Sie die Mannschaft Ihres Kindes, verstehen Spielpläne, Aufstellung und die Leistungsklasse (LK).",
    intro: (
      <p>
        Liga.nu ist die offizielle Plattform des Deutschen Tennis Bundes für
        Mannschaftsspiele. Hier finden Sie Spielpläne, Aufstellungen und
        Ergebnisse, wenn man weiß, wie das System funktioniert.
      </p>
    ),
    content: (
      <div className="prose-tk">
        <h2>Was ist Liga.nu?</h2>
        <p>
          Liga.nu ersetzt seit einigen Jahren die alten Verbandsportale. Es ist die
          zentrale Plattform für den Wettkampfbetrieb des DTB. Jeder Landesverband
          nutzt das System, der Aufbau ist überall identisch.
        </p>

        <h2>So finden Sie die Mannschaft Ihres Kindes</h2>
        <ol>
          <li>Auf liga.nu Ihren Landesverband auswählen</li>
          <li>Über die Vereinssuche den eigenen Verein finden</li>
          <li>Im Menü „Mannschaften" oder „Spielklassen" wählen</li>
          <li>Die Junioren-/Juniorinnen-Mannschaft anklicken</li>
        </ol>
        <p>
          Sie sehen dann den Spielplan der Saison, die Aufstellung und die Ergebnisse
          vergangener Spiele.
        </p>

        <h2>Die Mannschaftsaufstellung verstehen</h2>
        <p>
          Die Aufstellung folgt der namentlichen Mannschaftsmeldung, die der Verein
          vor der Saison einreicht. Darin werden alle gemeldeten Kinder (auch Ersatz-
          und Doppelspieler) in der Reihenfolge ihrer Spielstärke aufgeführt, bei der
          Jugend nach Leistungsklasse (LK). Position 1 ist das stärkste Kind.
        </p>

        <h2>Die Leistungsklasse (LK)</h2>
        <Box>
          <p className="font-semibold text-tennis-dark mb-2">LK-System erklärt:</p>
          <p>
            Die Leistungsklasse startet bei 25,0 (Einsteiger) und geht bis 1
            (Bundesliga-Niveau). Je niedriger die Zahl, desto besser. Nach jedem
            Turnier oder Medenspiel wird die LK automatisch angepasst. Bei Kindern
            spielt die LK erst ab ca. U12 eine wichtige Rolle.
          </p>
        </Box>

        <h2>Turniermeldungen über tennis.de</h2>
        <p>
          Turniere werden nicht über liga.nu gemeldet, sondern über tennis.de (das
          Portal des DTB für Einzelturniere). Dafür braucht Ihr Kind einen
          mybigpoint-Account, der mit der Spielerlizenz des Vereins verknüpft ist.
          Diese Lizenz ist in der Regel im Vereinsbeitrag enthalten.
        </p>
      </div>
    ),
  },

  turniere: {
    metaDescription:
      "Turniere und Nenngeld im Kindertennis: Anmeldung über tennis.de, Turnierarten, Kosten und welche Turniere für Einsteiger geeignet sind.",
    intro: (
      <p>
        Im Gegensatz zum Fußball gibt es im Tennis nicht jedes Wochenende ein
        Turnier. Wer mitspielen will, muss sich aktiv anmelden und Nenngeld zahlen.
        Wir erklären, wie das System funktioniert.
      </p>
    ),
    content: (
      <div className="prose-tk">
        <h2>Was ist Nenngeld?</h2>
        <p>
          Nenngeld (auch Startgeld genannt) ist die Anmeldegebühr für ein Turnier.
          Bei Kindern liegt sie meist zwischen 15 und 55 Euro pro Konkurrenz und
          steht immer in der Ausschreibung. Das Geld fließt an den ausrichtenden
          Verein, weil dieser Plätze, Bälle, Schiedsrichter und Preise stellt.
        </p>

        <h2>Anmeldung über tennis.de</h2>
        <p>
          Tennis.de ist das Eltern-freundliche Portal des DTB für Turniere.
          Mybigpoint ist die technische Plattform dahinter. Für eine
          Turnieranmeldung brauchen Sie:
        </p>
        <ul>
          <li>Einen mybigpoint-Account (für Sie als Elternteil)</li>
          <li>Die Spielerlizenz Ihres Kindes (kommt automatisch mit dem Vereinsbeitritt)</li>
          <li>Das Nenngeld (meist per Lastschrift oder Überweisung)</li>
        </ul>

        <h2>Turnierarten und Spielklassen</h2>
        <Table
          head={["Turnierart", "Niveau", "Für wen"]}
          rows={[
            ["Vereinsturnier", "Lokal, offen für alle", "Einsteiger"],
            ["Bezirksturnier", "Bezirksebene", "Erste Turniererfahrung"],
            ["Ranglistenturnier", "Landesebene", "LK-relevant, etwas erfahrener"],
            ["Tagesturniere", "Spiralsystem", "Ideal für Einsteiger"],
          ]}
        />

        <Box>
          <p className="font-semibold text-tennis-dark mb-1">Empfehlung für Einsteiger:</p>
          <p>
            Beginnen Sie mit „Tagesturnieren" (auch Spiralturniere genannt). Alle
            Kinder spielen mehrere Partien, niemand fährt früh nach Hause.
            Das Spiralsystem gruppiert Gleichstarke automatisch nach den ersten
            Runden.
          </p>
        </Box>

        <h2>Meldeschluss und Wartelisten</h2>
        <p>
          Populäre Turniere sind schnell ausgebucht. Meldeschluss ist oft 10 bis 14
          Tage vor dem Turnier. Tragen Sie sich in den Kalender ein und melden Sie
          früh an. Viele Portale zeigen auch Wartelisten an, es lohnt sich, dort
          eingetragen zu bleiben.
        </p>
      </div>
    ),
  },

  medenspiele: {
    metaDescription:
      "Medenspiele und Aufstellung erklärt: Was sind Medenspiele, Saisonstruktur, Aufstellungsregeln und warum nicht jedes Kind in die Mannschaft kommt.",
    intro: (
      <p>
        Medenspiele sind die Mannschaftsmeisterschaften im deutschen Tennis. Wer
        vom Fußball kommt, kennt das Konzept, aber die Regeln unterscheiden sich
        deutlich.
      </p>
    ),
    content: (
      <div className="prose-tk">
        <h2>Was sind Medenspiele?</h2>
        <p>
          Der Begriff stammt vom Medenpokal, einem alten Mannschaftswettbewerb.
          Heute ist „Medenspiel" das umgangssprachliche Wort für alle
          Mannschaftsspiele in den Verbandsligen. Bei Kindern gibt es die Altersklassen
          U10, U12, U14, U16 und U18, getrennt nach Mädchen und Jungen.
        </p>

        <h2>Saisonstruktur und Spieltage</h2>
        <p>
          Die Sommersaison läuft von Mai bis Juli. In dieser Zeit gibt es meistens
          5 bis 7 Spieltage, die Mannschaft spielt entweder zu Hause oder fährt zu
          einem anderen Verein. Im Winter gibt es analog dazu Hallenrunden, oft kürzer.
        </p>

        <h2>Warum nicht jedes Kind spielt</h2>
        <p>
          Eine Mannschaft besteht in der Regel aus 4 oder 6 Spielern. Im Verein
          sind aber oft 8 bis 12 Kinder pro Altersklasse. Wer in die Mannschaft
          kommt, entscheidet die interne Rangfolge (Vereinsrangliste oder LK).
        </p>
        <Box>
          <p className="font-semibold text-tennis-dark mb-2">Aufstellungsregel:</p>
          <ul>
            <li>Position 1 ist der stärkste Spieler</li>
            <li>Die Reihenfolge muss der internen Rangfolge entsprechen</li>
            <li>Im Einzel keine Nachnominierten</li>
            <li>Im Doppel können frische Spieler hinzukommen</li>
          </ul>
        </Box>

        <h2>Ein Spieltag in der Praxis</h2>
        <p>
          Ein Medenspiel-Tag beginnt morgens um 10 Uhr und endet mittags. Die
          Kinder spielen Einzel, je nach Mannschaftsgröße 4 oder 6 Einzel. Danach
          folgen Doppel. Das Ergebnis entscheidet über Aufstieg oder Abstieg am
          Saisonende.
        </p>

        <h2>Eltern am Spielfeldrand</h2>
        <p>
          Bei Medenspiele gilt: Coaching ist verboten. Weder durch Zurufen noch
          durch Gesten dürfen Eltern das Spiel beeinflussen. Viele Landesverbände
          haben den Eltern-Kodex offiziell eingeführt. Lesen Sie dazu unseren
          Artikel über den Eltern-Kodex.
        </p>
      </div>
    ),
  },

  familiencamps: {
    metaDescription:
      "Familien-Tennisurlaub und Camps: Worauf bei der Buchung achten, Kosten, beliebte Destinationen und was ein gutes Tennis-Camp auszeichnet.",
    intro: (
      <p>
        Tennis-Camps verbinden Urlaub mit gezieltem Training. Die Auswahl ist
        riesig, die Qualitätsunterschiede auch. Mit der richtigen Vorbereitung wird
        es eine Woche, die Ihr Kind nicht vergisst.
      </p>
    ),
    content: (
      <div className="prose-tk">
        <h2>Was ist ein Tennis-Camp?</h2>
        <p>
          Ein Tennis-Camp ist eine Urlaubswoche, in der Kinder vor- oder nachmittags
          mehrere Stunden Training bekommen. Eltern können entweder selbst
          mittrainieren oder Urlaub machen. Die Camps finden meistens in Spanien,
          Italien, Türkei oder Kroatien statt, in Deutschland gibt es sie ebenfalls.
        </p>

        <h2>Worauf bei der Buchung achten</h2>
        <ul>
          <li>Trainer mit DTB-Lizenz oder international anerkannter Lizenz (PTR, USPTR)</li>
          <li>Maximal 4 bis 6 Kinder pro Trainer</li>
          <li>Altersgerechtes Training, getrennt nach Alter und Spielstärke</li>
          <li>Genug Plätze für die Anzahl der Teilnehmer</li>
          <li>Ausreichend Pausen und Erholung</li>
          <li>Klimatabelle prüfen, Sommerhitze in Spanien ist im Juli/August oft zu viel für Kinder</li>
        </ul>

        <Box>
          <p className="font-semibold text-tennis-dark mb-1">Empfohlene Trainingszeit für Kinder:</p>
          <p>
            Maximal 2 Stunden Tennisübungen pro Einheit, dann Pause. Anbieter, die
            4 Stunden Drill bei 35 Grad versprechen, sollten Sie meiden.
          </p>
        </Box>

        <h2>Kosten und Preisspanne</h2>
        <p>
          Ein Wochencamp für ein Kind kostet zwischen 300 und 800 Euro für das
          Training. Dazu kommen Unterkunft (300–1.200 Euro für die Familie),
          Flug und Verpflegung. Gesamtbudget: 1.000 bis 3.000 Euro für eine
          Famille mit einem Kind.
        </p>

        <h2>Camps in Deutschland</h2>
        <p>
          Viele Landesverbände bieten eigene Jugend-Camps an, oft in Kooperation
          mit Bundesstützpunkten. Diese Camps sind günstiger (200–400 Euro/Woche)
          und haben DTB-zertifizierte Trainer. Ein guter Einstieg für Kinder, die
          noch nie an einem Camp teilgenommen haben.
        </p>
      </div>
    ),
    affiliate: {
      title: "Tennis-Hotels und Camps buchen",
      text: "Kuratierte Tennis-Resorts und Familienhotels mit Tennisangebot in Europa.",
      href: "https://www.robinson.com/de/sport/tennis",
      cta: "Tennis-Urlaub ansehen →",
    },
  },

  "eltern-kodex": {
    metaDescription:
      "Der Eltern-Kodex am Spielfeldrand: Warum Coaching vom Rand schadet, die Macht der Körpersprache und 5 goldene Regeln für Tennis-Eltern.",
    intro: (
      <p>
        Der größte Fehler ist gut gemeintes Coaching von außen. Tennis ist ein
        Sport, in dem Kinder allein auf dem Platz Entscheidungen treffen müssen –
        und genau das sollten sie lernen.
      </p>
    ),
    content: (
      <div className="prose-tk">
        <h2>Die Rolle der Eltern: Begleiter, nicht Trainer</h2>
        <p>
          Ihre Aufgabe ist es nicht, Tennis zu lehren. Ihre Aufgabe ist es, das
          emotionale Fundament zu sein. Loben Sie Anstrengung, nicht Ergebnis.
          Vertrauen Sie dem Trainer, Kritik am Trainer vor dem Kind schadet dem
          sportlichen Erfolg massiv.
        </p>

        <h2>Kein Coaching vom Spielfeldrand</h2>
        <p>
          Bei Kindertennis gibt es keine Schiedsrichter. Die Kinder zählen selbst,
          treffen Aus-Entscheidungen selbst und kümmern sich um den Spielstand.
          Coaching von außen ist verboten, weil es die Selbstständigkeit zerstört.
          Auch nonverbal: kein Daumen hoch nach jedem Punkt, kein Kopfschütteln bei
          Fehlern.
        </p>

        <h2>Die Macht der Körpersprache</h2>
        <p>
          Kinder sehen jede Reaktion. Augenrollen, enttäuschte Mienen,
          demonstratives Wegschauen, alles registrieren sie. Studien zeigen, dass
          Kinder, deren Eltern aktiv schweigen und positiv reagieren, länger im
          Sport bleiben und mehr Freude entwickeln.
        </p>

        <Box>
          <p className="font-semibold text-tennis-dark mb-3">5 goldene Regeln für Tennis-Eltern:</p>
          <ol>
            <li>Jubeln ist erlaubt, Anweisungen nicht</li>
            <li>Verlieren ist kein Versagen, es ist Information</li>
            <li>Nach dem Match: keine Analyse, kein „Du hättest..."</li>
            <li>Dem Trainer vertrauen, auch wenn Sie anderer Meinung sind</li>
            <li>Ihr Kind ist im Sport für sich selbst, nicht für Sie</li>
          </ol>
        </Box>

        <h2>Unabhängigkeit fördern</h2>
        <p>
          Tennis ist ein Einzelsport. Ihr Kind muss lernen, allein Probleme zu
          lösen, taktisch, emotional, unter Druck. Wer von klein auf gewohnt ist,
          dass Eltern die Lösung liefern, wird auf dem Platz blockieren. Lassen Sie
          Ihr Kind auch verlieren, und lassen Sie es damit umgehen.
        </p>
      </div>
    ),
  },

  tennisprofi: {
    metaDescription:
      "Der Weg zum Tennis-Profi: Was es wirklich braucht, die goldene Lernphase U8–U12, die Junioren-Tour und der US-College-Weg als Alternative.",
    intro: (
      <p>
        Profi werden ist ein Marathon. Realistisch schaffen es weniger als 1 von
        10.000 Talenten in die Weltrangliste. Trotzdem ist der Weg dorthin oft
        wertvoll, auch wenn das Endziel nicht erreicht wird.
      </p>
    ),
    content: (
      <div className="prose-tk">
        <h2>Die 10.000-Stunden-Regel</h2>
        <p>
          Hochleistungssport braucht jahrelanges, kontinuierliches Training. Die
          oft zitierte 10.000-Stunden-Regel ist nicht naturwissenschaftlich exakt,
          aber die Größenordnung stimmt. Zwischen 6 und 18 Jahren sind das
          durchschnittlich 15 bis 20 Stunden Training pro Woche plus Wettkämpfe
          und Reisen.
        </p>

        <Box>
          <p className="font-semibold text-tennis-dark mb-1">Qualität vor Quantität:</p>
          <p>
            Fünf Stunden hochkonzentriertes, gezieltes Training sind mehr wert als
            zwanzig Stunden ohne Plan. Wer im Kindesalter zu viel trainiert, verliert
            oft die Motivation oder bekommt Verletzungen. Phasen mit weniger
            Intensität sind wichtig, besonders während Wachstumsschüben.
          </p>
        </Box>

        <h2>Phase 1: Die goldene Lernphase (U8 bis U12)</h2>
        <p>
          Das motorische Lernen ist in dieser Phase am effektivsten. Kinder, die
          zwischen 8 und 12 Jahren vielfältige Bewegungserfahrungen machen, haben
          später Vorteile. Fokus: Freude am Spiel, saubere Grundschläge, erste
          Wettkampferfahrungen.
        </p>

        <h2>Phase 2: Juniorentennis (U14 bis U18)</h2>
        <p>
          Ab U14 beginnt die Junioren-Rangliste (ITF Junior Ranking) eine Rolle zu
          spielen. Turnierteilnahmen in Deutschland, Europa und international werden
          wichtiger. Ein Coach mit Leistungserfahrung ist in dieser Phase fast
          unerlässlich.
        </p>

        <h2>Die vier Säulen eines modernen Leistungsspielers</h2>
        <ul>
          <li><strong>Technik und Taktik:</strong> Solide Grundschläge, Spielverständnis, Aufschlag</li>
          <li><strong>Athletik:</strong> Koordination, Schnelligkeit, Ausdauer</li>
          <li><strong>Mental:</strong> Umgang mit Druck, Fokus, Resilienz nach Niederlagen</li>
          <li><strong>Ernährung und Regeneration:</strong> Ausreichend Schlaf, altersgerechte Ernährung</li>
        </ul>

        <h2>Der US-College-Weg als Plan B</h2>
        <p>
          Wer unter den Top 500 der Junioren-Weltrangliste landet, hat gute
          Chancen auf ein Tennis-Stipendium in den USA. US-Universitäten bieten
          Spielern vollfinanzierte Studienplätze. Ein Studium und hochwertiges
          Tennis lassen sich dort kombinieren, ein attraktiver Weg, auch wenn der
          Profitraum nicht in Reichweite ist.
        </p>
      </div>
    ),
  },
};
