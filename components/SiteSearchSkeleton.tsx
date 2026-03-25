/** Platzhalter für dynamisch geladene SiteSearch – gleiche ungefähre Höhe, wenig CLS */
export function SiteSearchSkeleton() {
  return (
    <div
      className="site-search site-search-skeleton"
      aria-busy="true"
      aria-label="Suche wird geladen"
    >
      <p className="site-search-label">Portal durchsuchen</p>
      <div className="site-search-form">
        <div className="site-search-input-wrap">
          <div className="site-search-input site-search-skeleton-input" />
        </div>
      </div>
      <p className="site-search-hint">Lade Suchfunktion …</p>
    </div>
  );
}
