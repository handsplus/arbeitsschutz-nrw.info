# Arbeitsschutz NRW – Informationsportal

Unabhängiges Informationsportal zum Arbeitsschutz in Nordrhein-Westfalen. Verweist auf die offiziellen Quellen der [Arbeitsschutzverwaltung NRW](https://www.arbeitsschutz.nrw.de/) und [KomNet](https://www.komnet.nrw.de/).

## Voraussetzungen

- Node.js 18+
- npm oder yarn

## Entwicklung

```bash
npm install
npm run dev
```

Die Anwendung läuft unter [http://localhost:3010](http://localhost:3010).

## Produktion

```bash
npm run build
npm start
```

Falls `npm run build` wegen Pfadproblemen (z. B. OneDrive) fehlschlägt:

```bash
node ./node_modules/next/dist/bin/next build
```

## Deployment auf Vercel

1. **Repository anlegen**  
   Projekt in ein Git-Repository (z. B. GitHub) pushen.

2. **Bei Vercel anmelden**  
   [vercel.com](https://vercel.com) → Login mit GitHub/GitLab/Bitbucket.

3. **Projekt importieren**  
   „Add New“ → „Project“ → Repository auswählen.  
   Vercel erkennt Next.js automatisch; Build- und Install-Befehl sind in `vercel.json` gesetzt.

4. **Deploy**  
   „Deploy“ klicken. Nach dem Build erhalten Sie eine URL (z. B. `projektname.vercel.app`).

5. **Eigene Domain (optional)**  
   Unter „Settings“ → „Domains“ die Domain **arbeitsschutz-nrw.info** hinzufügen und die angezeigten DNS-Einträge beim Domain-Anbieter eintragen.

**Hinweis:** Keine Umgebungsvariablen nötig für den Basis-Betrieb. `metadataBase` in `app/layout.tsx` ist auf `https://arbeitsschutz-nrw.info` gesetzt – bei anderer Vercel-URL nach dem ersten Deploy ggf. anpassen.

## Projektstruktur

- `app/` – Next.js App Router (Seiten, Layout, globale Styles)
- `components/` – Wiederverwendbare Komponenten (Header, Footer, SourceLink)

## Hinweis

Dieses Portal ist ein privates Informationsangebot von Health and Safety + (handsplus.de), nicht die offizielle Website der Arbeitsschutzverwaltung NRW.
