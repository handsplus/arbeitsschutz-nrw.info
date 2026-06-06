'use client';

import Link from 'next/link';
import { trackLeadClick } from '@/lib/analytics';
import {
  handsplusTeasers,
  type HandsplusTeaserVariant,
} from '@/lib/handsplusLeistungen';

type Props = {
  variant?: HandsplusTeaserVariant;
  idSuffix?: string;
};

export function HandsplusTeaser({ variant = 'general', idSuffix = 'default' }: Props) {
  const t = handsplusTeasers[variant];
  const headingId = `handsplus-teaser-h-${idSuffix}`;

  return (
    <aside className="handsplus-teaser card" aria-labelledby={headingId}>
      <p className="handsplus-teaser-kicker">{t.kicker}</p>
      <h3 id={headingId} className="handsplus-teaser-title">
        {t.title}
      </h3>
      <p className="handsplus-teaser-body">{t.body}</p>
      <div className="handsplus-teaser-actions">
        <a
          href={t.externalHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary handsplus-teaser-btn"
          onClick={trackLeadClick('lead_erstberatung', { variant, source: idSuffix })}
        >
          {t.externalLabel} <span aria-hidden>→</span>
        </a>
        <Link
          href="/beratung-handsplus"
          className="btn btn-secondary handsplus-teaser-btn"
          onClick={trackLeadClick('lead_erstberatung', { variant, source: `${idSuffix}-portal` })}
        >
          Beratung im Portal
        </Link>
      </div>
      <p className="handsplus-teaser-foot">
        Erstberatung kostenfrei ·{' '}
        <a href="tel:+4915228261619" onClick={trackLeadClick('lead_tel', { source: idSuffix })}>
          0152 282 61619
        </a>
        {' · '}
        <a
          href="mailto:kontakt@handsplus.de?subject=Erstberatung%20Arbeitsschutz-NRW-Portal"
          onClick={trackLeadClick('lead_mail', { source: idSuffix })}
        >
          kontakt@handsplus.de
        </a>
      </p>
    </aside>
  );
}
