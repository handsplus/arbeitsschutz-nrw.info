/** Startseiten-Inhalte: Aktuelles, Dienste-Übersicht */

export type AktuellesItem = {
  title: string;
  text: string;
  url: string;
  date: string;
  /** Kurz: Was bedeutet das für Betriebe? */
  betrieb: string;
  branche?: string;
  brancheHref?: string;
};

export const aktuelles: AktuellesItem[] = [
  {
    title: 'Minister Laumann: Tag der Arbeit – Zeichen für gute Arbeit und Solidarität',
    text: 'Arbeitsminister Karl-Josef Laumann ruft zur Teilnahme an Maikundgebungen in NRW auf. Der 1. Mai stehe für den Kampf um gute Arbeit für alle Beschäftigten – unabhängig von Arbeitgeber, Branche oder Tätigkeit.',
    url: 'https://www.arbeitsschutz.nrw.de/minister-laumann-gemeinsam-zum-tag-der-arbeit-sichtbares-zeichen-fuer-gute-arbeit-und-solidaritaet',
    date: '2026',
    betrieb: 'Kein unmittelbarer Handlungsbedarf – signalisiert politischen Fokus auf faire Arbeitsbedingungen.',
  },
  {
    title: 'Kontrollaktion Paketbranche: Teils gravierende Mängel im Arbeitsschutz',
    text: 'Von Mai bis August 2025 führte die Arbeitsschutzverwaltung eine landesweite Kontrollaktion in der Kurier-, Express- und Paketbranche (KEP) durch. Dabei wurden u. a. 57 Subunternehmen kontrolliert und 225 Zustellerinnen und Zusteller befragt; es wurden zum Teil gravierende Mängel festgestellt.',
    url: 'https://www.arbeitsschutz.nrw.de/kontrollaktion-der-paketbranche-teils-gravierende-maengel-im-arbeitsschutz',
    date: '2025',
    branche: 'Logistik / KEP',
    brancheHref: '/branchen/logistik-kep',
    betrieb:
      'Logistik- und KEP-Betriebe sollten Gefährdungsbeurteilung, Arbeitszeit und Unterweisungen prüfen – Kontrollen in dieser Branche sind Schwerpunkt.',
  },
  {
    title: 'Gebäudereinigung: Aktionstage gegen Schwarzarbeit und illegale Beschäftigung',
    text: 'Im September 2025 prüften Arbeitsministerium und Generalzolldirektion landesweit 146 Betriebe und mehr als 500 Beschäftigte. In über 80 % der Betriebe wurden Mängel festgestellt – vor allem im Arbeits- und Gesundheitsschutz sowie bei Sozialversicherungsanmeldungen.',
    url: 'https://www.arbeitsschutz.nrw.de/gemeinsam-gegen-schwarzarbeit-und-illegale-beschaeftigung-der-gebaeudereinigung',
    date: '2025',
    branche: 'Gebäudereinigung',
    brancheHref: '/branchen/gebaeudereinigung',
    betrieb:
      'Reinigungsbetriebe: Arbeitsschutz, Anmeldungen und Unterweisungen besonders im Fokus der Überwachung – Dokumentation und Gefährdungsbeurteilung aktualisieren.',
  },
  {
    title: '16. Deutscher Gefahrstoffschutzpreis',
    text: 'Das BMAS verleiht 2026 erneut den Preis (10.000 Euro, Motto „Sicher. Besser. Arbeiten.“). Die Bewerbungsfrist endete am 30. April 2026; die Preisverleihung ist für den 30. September 2026 im Rahmen des GDA-Arbeitsschutzforums vorgesehen.',
    url: 'https://www.arbeitsschutz.nrw.de/16-deutscher-gefahrstoffschutzpreis-innovationen-und-beispiele-fuer-die-arbeit-mit-gefahrstoffen',
    date: '2026',
    betrieb:
      'Anregung für Betriebe mit Gefahrstoffen: Best Practices und Innovationen im Umgang mit Gefahrstoffen können ausgezeichnet werden.',
  },
  {
    title: 'NRW: Bundesratsinitiative zum Abbau unnötiger Bürokratie im Arbeitsschutz',
    text: 'Das Land Nordrhein-Westfalen hat eine Initiative in den Bundesrat eingebracht, die u. a. Änderungen bei Arbeitsschutzausschüssen, Aufzugsprüfungen und digitaler Dokumentation vorsieht. Hintergrund ist die Entlastung von Verwaltung und Wirtschaft bei gleichzeitigem Fokus auf den Schutz der Beschäftigten.',
    url: 'https://www.land.nrw/pressemitteilung/nordrhein-westfalen-startet-bundesratsinitiative-fuer-den-abbau-von-unnoetiger',
    date: '2025',
    betrieb:
      'Betriebe können künftig bei Dokumentation und Ausschüssen entlastet werden – Pflichten zum Schutz der Beschäftigten bleiben bestehen.',
  },
  {
    title: 'Lungenscreening / Lungenkrebs-Früherkennung in NRW',
    text: 'Einführung des Lungenscreenings für stärker rauchende Personen im Alter von 50 bis 75 Jahren: Die Arbeitsschutzverwaltung informiert über Genehmigungsanträge für medizinische Einrichtungen und verweist auf Antragsunterlagen und Zuständigkeiten beim LfGA NRW.',
    url: 'https://www.arbeitsschutz.nrw.de/antraege-zur-genehmigung-von-lungenscreening-koennen-gestellt-werden',
    date: '2025',
    betrieb: 'Relevant für medizinische Einrichtungen und Antragsteller – Genehmigungsverfahren über LfGA NRW.',
  },
  {
    title: 'GDA-Befragung: Fortschritte beim Arbeitsschutz',
    text: 'Die Betriebs- und Beschäftigtenbefragung der Gemeinsamen Deutschen Arbeitsschutzstrategie (GDA) liefert Daten dazu, wie sich Sicherheit und Gesundheit bei der Arbeit in den zurückliegenden Jahren entwickelt haben.',
    url: 'https://www.gda-portal.de/SharedDocs/Meldungen/DE/25-06-24-Betriebs-und-Beschaeftigtenbefragung',
    date: '2025',
    betrieb:
      'Orientierung für Arbeitgeber: Wo steht der betriebliche Arbeitsschutz bundesweit – Benchmark für eigene Maßnahmen.',
  },
  {
    title: 'DGUV: Warnung vor Betrugsversuchen und gefälschten Schreiben',
    text: 'Die DGUV warnt vor gefälschten E-Mails und Briefen (z. B. angebliches „DGUV-Präventionsmodul“, Datenüberprüfungen, Zahlungsaufforderungen). Keine Links anklicken, nicht zahlen – Hinweise und Meldewege auf der DGUV-Website.',
    url: 'https://www.dguv.de/de/mediencenter/hintergrund/warnung-datenueberpruefung/index.jsp',
    date: '2025',
    betrieb:
      'Betriebe und Beschäftigte: Keine Zahlungen oder Daten an unbekannte Absender – nur offizielle DGUV-Kommunikation nutzen.',
  },
];

export const services = [
  {
    title: 'Arbeitsschutz erklärt',
    text: 'Arbeitsschutzgesetz (ArbSchG), Pflichten im Betrieb, Akteure in Deutschland: Welche Aufgaben hat die Arbeitsschutzverwaltung NRW? Was ist die GDA?',
    href: '/arbeitsschutz-erklaert',
    source: 'https://www.arbeitsschutz.nrw.de/',
    sourceLabel: 'Arbeitsschutzverwaltung NRW',
    internal: true,
  },
  {
    title: 'Arbeitsschutzgesetz & Pflichten',
    text: 'ArbSchG (Bundesrecht), Arbeitgeberpflichten, Gefährdungsbeurteilung und Unterweisung – mit Link zum Gesetzestext.',
    href: '/arbeitsschutzgesetz',
    source: 'https://www.gesetze-im-internet.de/arbschg/',
    sourceLabel: 'Gesetz im Internet (BMJ)',
    internal: true,
  },
  {
    title: 'Fachthemen von A–Z',
    text: 'Arbeitszeit, Mutterschutz, Gefahrstoffe, Gefährdungsbeurteilung, Bildschirmarbeit, Baustellen und weitere Themen.',
    href: '/fachthemen',
    source: 'https://www.arbeitsschutz.nrw.de/',
    sourceLabel: 'Arbeitsschutzverwaltung NRW',
    internal: true,
  },
  {
    title: 'Beratung & Beschwerde',
    text: 'Telefonische Erstberatung, Arbeitsschutzbeschwerde, Meldung gefährlicher Produkte, Mobbing – offizielle Dienste.',
    href: '/beratung',
    source: 'https://www.arbeitsschutz.nrw.de/',
    sourceLabel: 'Arbeitsschutzverwaltung NRW',
    internal: true,
  },
  {
    title: 'Anträge, Formulare & Hinweise',
    text: 'Genehmigungen, Anzeigen, Musterformulare der Arbeitsschutzverwaltung NRW.',
    href: '/antraege-formulare',
    source: 'https://www.arbeitsschutz.nrw.de/',
    sourceLabel: 'Arbeitsschutzverwaltung NRW',
    internal: true,
  },
  {
    title: 'Publikationen',
    text: 'Broschüren, Faltblätter, Plakate und Jahresberichte der Arbeitsschutzverwaltung.',
    href: '/publikationen',
    source: 'https://www.arbeitsschutz.nrw.de/',
    sourceLabel: 'Arbeitsschutzverwaltung NRW',
    internal: true,
  },
  {
    title: 'Landesweite Überwachungsaktionen',
    text: 'Schwerpunktaktionen in Risikobranchen: Fleischindustrie, Friseur, Gebäudereinigung u. a.',
    href: '/ueberwachungsaktionen',
    source: 'https://www.arbeitsschutz.nrw.de/',
    sourceLabel: 'Arbeitsschutzverwaltung NRW',
    internal: true,
  },
  {
    title: 'KomNet – Fragen an Expertinnen und Experten',
    text: 'Qualitätsgesicherte Dialoge oder eigene Frage an KomNet-Expertinnen und -Experten (kostenfrei).',
    href: 'https://www.komnet.nrw.de/',
    source: 'https://www.komnet.nrw.de/',
    sourceLabel: 'KomNet NRW',
    internal: false,
  },
  {
    title: 'Gefährliche Produkte melden',
    text: 'Verdacht auf unsichere Produkte? Schritt-für-Schritt und Links zum Meldeverfahren.',
    href: '/beratung#produkte',
    source: 'https://www.arbeitsschutz.nrw.de/',
    sourceLabel: 'Arbeitsschutzverwaltung NRW',
    internal: true,
  },
  {
    title: 'FAQ Arbeitsschutz',
    text: 'Was ist eine Unterweisung? Wen spreche ich an? Was tun bei Arbeitsunfall?',
    href: '/faq',
    source: 'https://www.arbeitsschutz.nrw.de/',
    sourceLabel: 'Arbeitsschutzverwaltung NRW',
    internal: true,
  },
  {
    title: 'Gesetzliche Unfallversicherung (DGUV)',
    text: 'Prävention, Versicherungsschutz, Arbeitsunfälle, Berufskrankheiten. Infoline: 0800 6050404.',
    href: 'https://www.dguv.de/',
    source: 'https://www.dguv.de/',
    sourceLabel: 'DGUV',
    internal: false,
  },
  {
    title: 'Beratung durch Health and Safety +',
    text: 'Professionelle Betreuung in Arbeitsschutz, Brandschutz und Managementsystemen – Köln & NRW.',
    href: '/beratung-handsplus',
    source: null,
    sourceLabel: null,
    internal: true,
  },
  {
    title: 'Offizielle Quellen',
    text: 'Arbeitsschutzverwaltung NRW, LfGA, KomNet und DGUV – direkte Links.',
    href: '/quellen',
    source: null,
    sourceLabel: null,
    internal: true,
  },
] as const;
