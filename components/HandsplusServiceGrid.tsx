import { handsplusServiceLinks } from '@/lib/handsplusLeistungen';

export function HandsplusServiceGrid() {
  return (
    <div className="handsplus-service-grid">
      {handsplusServiceLinks.map((s) => (
        <a
          key={s.href}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="handsplus-service-card"
        >
          <h3>{s.title}</h3>
          <p>{s.short}</p>
          <span className="handsplus-service-more" aria-hidden>
            Mehr auf handsplus.de →
          </span>
        </a>
      ))}
    </div>
  );
}
