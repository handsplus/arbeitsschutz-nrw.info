'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { trackLead } from '@/lib/analytics';
import { handsplusTeasers } from '@/lib/handsplusLeistungen';
import {
  employerBranchOptions,
  employerSizeOptions,
  employerTopicOptions,
  getEmployeeResult,
  getEmployerResult,
  getExpertResult,
  getReportResult,
  personaOptions,
  type EmployerBranch,
  type EmployerSize,
  type EmployerTopic,
  type NavigatorLink,
  type NavigatorResult,
  type Persona,
} from '@/lib/portalNavigator';

type Step = 'persona' | 'employer-size' | 'employer-branch' | 'employer-topic' | 'result';

function LinkList({ links, title }: { links: NavigatorLink[]; title: string }) {
  if (!links.length) return null;
  return (
    <div className="nav-result-block">
      <h4 className="nav-result-block-title">{title}</h4>
      <ul className="nav-result-links">
        {links.map((link) => (
          <li key={link.href + link.label}>
            {link.external || link.href.startsWith('http') || link.href.startsWith('tel:') ? (
              <a
                href={link.href}
                className={link.primary ? 'nav-result-link nav-result-link-primary' : 'nav-result-link'}
                {...(link.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {link.label}
                {link.href.startsWith('http') ? <span aria-hidden> ↗</span> : null}
              </a>
            ) : (
              <Link
                href={link.href}
                className={link.primary ? 'nav-result-link nav-result-link-primary' : 'nav-result-link'}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function NavigatorResultPanel({ result }: { result: NavigatorResult }) {
  const hp = result.handsplus;
  const teaser = hp ? handsplusTeasers[hp.variant] : null;

  useEffect(() => {
    if (hp) {
      trackLead('lead_navigator', { variant: hp.variant, has_specialty: Boolean(hp.specialtyUrl) });
    }
  }, [hp]);

  return (
    <div className="nav-result" role="region" aria-live="polite">
      <h3 className="nav-result-headline">{result.headline}</h3>
      <p className="nav-result-summary">{result.summary}</p>

      <LinkList links={result.officialLinks} title="Offizielle Anlaufstellen" />
      {result.internalLinks && (
        <LinkList links={result.internalLinks} title="Weiter auf diesem Portal" />
      )}

      {hp && teaser && (
        <div className="nav-result-handsplus">
          <p className="nav-result-handsplus-kicker">Optional · Betriebliche Umsetzung</p>
          <h4 className="nav-result-handsplus-title">{teaser.title}</h4>
          <p className="nav-result-handsplus-reason">{hp.reason}</p>
          <p className="nav-result-handsplus-body">{teaser.body}</p>
          <div className="nav-result-handsplus-actions">
            <Link
              href="/beratung-handsplus"
              className="btn btn-primary"
              onClick={() => trackLead('lead_erstberatung', { source: 'navigator' })}
            >
              Kostenlose Erstberatung (H&amp;S+)
            </Link>
            <a
              href={teaser.externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              onClick={() => trackLead('lead_erstberatung', { source: 'navigator-external' })}
            >
              {teaser.externalLabel}
            </a>
            {hp.specialtyUrl && hp.specialtyLabel && (
              <a
                href={hp.specialtyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-result-specialty"
              >
                {hp.specialtyLabel} ↗
              </a>
            )}
          </div>
          <p className="nav-result-handsplus-contact">
            <a href="tel:+4915228261619">0152 282 61619</a>
            {' · '}
            <a href="mailto:kontakt@handsplus.de?subject=Erstberatung%20Navigator">kontakt@handsplus.de</a>
          </p>
        </div>
      )}

      {result.disclaimer && (
        <p className="nav-result-disclaimer">{result.disclaimer}</p>
      )}
    </div>
  );
}

export function PortalNavigator() {
  const [step, setStep] = useState<Step>('persona');
  const [persona, setPersona] = useState<Persona | null>(null);
  const [size, setSize] = useState<EmployerSize | null>(null);
  const [branch, setBranch] = useState<EmployerBranch | null>(null);
  const [topic, setTopic] = useState<EmployerTopic | null>(null);
  const [result, setResult] = useState<NavigatorResult | null>(null);

  const reset = useCallback(() => {
    setStep('persona');
    setPersona(null);
    setSize(null);
    setBranch(null);
    setTopic(null);
    setResult(null);
  }, []);

  const selectPersona = (p: Persona) => {
    setPersona(p);
    if (p === 'employer') {
      setStep('employer-size');
      setResult(null);
      return;
    }
    const r =
      p === 'employee'
        ? getEmployeeResult()
        : p === 'expert'
          ? getExpertResult()
          : getReportResult();
    setResult(r);
    setStep('result');
  };

  const selectSize = (s: EmployerSize) => {
    setSize(s);
    setStep('employer-branch');
  };

  const selectBranch = (b: EmployerBranch) => {
    setBranch(b);
    setStep('employer-topic');
  };

  const selectTopic = (t: EmployerTopic) => {
    setTopic(t);
    if (size && branch) {
      setResult(getEmployerResult(size, branch, t));
      setStep('result');
    }
  };

  const goBack = () => {
    if (step === 'result' && persona !== 'employer') {
      reset();
      return;
    }
    if (step === 'result') {
      setStep('employer-topic');
      setResult(null);
      return;
    }
    if (step === 'employer-topic') {
      setStep('employer-branch');
      setTopic(null);
      return;
    }
    if (step === 'employer-branch') {
      setStep('employer-size');
      setBranch(null);
      return;
    }
    if (step === 'employer-size') {
      reset();
    }
  };

  const stepNumber =
    step === 'employer-size'
      ? 1
      : step === 'employer-branch'
        ? 2
        : step === 'employer-topic'
          ? 3
          : 0;

  return (
    <section className="portal-navigator" aria-labelledby="portal-navigator-title">
      <div className="portal-navigator-header">
        <h2 id="portal-navigator-title">NRW-Navigator: Wo geht es weiter?</h2>
        <p className="portal-navigator-lead">
          In wenigen Schritten zur passenden offiziellen Stelle — für Arbeitgeber optional
          mit Hinweis auf betriebliche Umsetzung durch Health and Safety +.
        </p>
      </div>

      {step !== 'persona' && (
        <div className="portal-navigator-toolbar">
          <button type="button" className="nav-back-btn" onClick={goBack}>
            ← Zurück
          </button>
          {persona === 'employer' && stepNumber > 0 && step !== 'result' && (
            <span className="nav-step-indicator" aria-live="polite">
              Schritt {stepNumber} von 3
            </span>
          )}
          <button type="button" className="nav-reset-btn" onClick={reset}>
            Neu starten
          </button>
        </div>
      )}

      {step === 'persona' && (
        <div className="nav-persona-grid" role="group" aria-label="Was trifft auf Sie zu?">
          {personaOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`nav-persona-card${opt.id === 'employer' ? ' nav-persona-card-featured' : ''}`}
              onClick={() => selectPersona(opt.id)}
            >
              <span className="nav-persona-label">{opt.label}</span>
              <span className="nav-persona-desc">{opt.description}</span>
            </button>
          ))}
        </div>
      )}

      {step === 'employer-size' && (
        <fieldset className="nav-step-fieldset">
          <legend className="nav-step-legend">Wie viele Beschäftigte hat Ihr Betrieb?</legend>
          <div className="nav-option-grid">
            {employerSizeOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className="nav-option-btn"
                onClick={() => selectSize(opt.id)}
              >
                <span className="nav-option-label">{opt.label}</span>
                <span className="nav-option-hint">{opt.hint}</span>
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 'employer-branch' && (
        <fieldset className="nav-step-fieldset">
          <legend className="nav-step-legend">In welcher Branche sind Sie tätig?</legend>
          <div className="nav-option-grid nav-option-grid-compact">
            {employerBranchOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className="nav-option-btn"
                onClick={() => selectBranch(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 'employer-topic' && (
        <fieldset className="nav-step-fieldset">
          <legend className="nav-step-legend">Was ist Ihr drängendstes Thema?</legend>
          <div className="nav-option-grid nav-option-grid-compact">
            {employerTopicOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className="nav-option-btn"
                onClick={() => selectTopic(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 'result' && result && <NavigatorResultPanel result={result} />}
    </section>
  );
}
