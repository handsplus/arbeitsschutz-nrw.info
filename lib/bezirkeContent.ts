/** NRW-Bezirksregierungen – Arbeitsschutzdezernate (Orientierung, keine Vollständigkeitsgarantie). */

export type BezirkEntry = {
  name: string;
  region: string;
  asvUrl: string;
  phone?: string;
};

export const bezirkeNrw: BezirkEntry[] = [
  {
    name: 'Bezirksregierung Arnsberg',
    region: 'Südwestfalen, Sauerland, Ruhrgebiet (Teil)',
    asvUrl: 'https://www.bra.nrw.de/themen/arbeitsschutz',
    phone: '0231 943-0',
  },
  {
    name: 'Bezirksregierung Detmold',
    region: 'Ostwestfalen-Lippe',
    asvUrl: 'https://www.br-detmold.nrw.de/themen/arbeitsschutz',
    phone: '0521 585-0',
  },
  {
    name: 'Bezirksregierung Düsseldorf',
    region: 'Niederrhein, Bergisches Land (Teil)',
    asvUrl: 'https://www.br.nrw.de/themen/arbeitsschutz',
    phone: '0211 475-0',
  },
  {
    name: 'Bezirksregierung Köln',
    region: 'Rhein-Erft, Rhein-Sieg, Köln/Bonn (Teil)',
    asvUrl: 'https://www.bezreg-koeln.nrw.de/themen/arbeitsschutz',
    phone: '0221 147-0',
  },
  {
    name: 'Bezirksregierung Münster',
    region: 'Münsterland, Emsland (Teil NRW)',
    asvUrl: 'https://www.bezreg-muenster.nrw.de/themen/arbeitsschutz',
    phone: '0251 411-0',
  },
];

export const zentraleAsv = {
  label: 'Arbeitsschutzverwaltung NRW – zentrale Erstberatung',
  phone: '0234 41692 7474',
  telHref: 'tel:0234416927474',
  url: 'https://www.arbeitsschutz.nrw.de/beratung-beschwerde/arbeitsschutzberatung',
  beschwerdeUrl: 'https://www.arbeitsschutz.nrw.de/beratung-beschwerde/arbeitsschutzbeschwerde',
};
