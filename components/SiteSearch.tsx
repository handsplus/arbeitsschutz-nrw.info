'use client';

import { useRouter } from 'next/navigation';
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react';
import {
  filterSearchItems,
  siteSearchIndex,
  type SiteSearchItem,
} from '@/lib/siteSearchIndex';

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Zm0-2a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
        fill="currentColor"
      />
      <path
        d="M15.446 15.854 19.5 19.9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SiteSearch() {
  const router = useRouter();
  const listId = useId();
  const inputId = useId();
  const headingId = useId();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(
    () => filterSearchItems(query, siteSearchIndex, 8),
    [query]
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [query, results.length]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const navigateTo = useCallback(
    (item: SiteSearchItem) => {
      setOpen(false);
      setQuery('');
      if (item.external) {
        window.open(item.href, '_blank', 'noopener,noreferrer');
      } else if (item.href.startsWith('/')) {
        router.push(item.href);
      }
    },
    [router]
  );

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) {
      if (e.key === 'Escape') setOpen(false);
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % results.length);
      setOpen(true);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const item = results[activeIndex];
      if (item) navigateTo(item);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <div className="site-search" ref={wrapRef}>
      <p className="site-search-label" id={headingId}>
        Portal durchsuchen
      </p>
      <form
        className="site-search-form"
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          if (results[0]) navigateTo(results[activeIndex] ?? results[0]);
        }}
      >
        <div className="site-search-input-wrap">
          <input
            ref={inputRef}
            id={inputId}
            type="search"
            name="q"
            role="combobox"
            aria-haspopup="listbox"
            className="site-search-input"
            placeholder="Begriff eingeben …"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            aria-labelledby={headingId}
            aria-autocomplete="list"
            aria-controls={listId}
            aria-expanded={open && (results.length > 0 || query.length > 0)}
            aria-activedescendant={
              open && results[activeIndex]
                ? `${listId}-opt-${activeIndex}`
                : undefined
            }
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={onKeyDown}
          />
          <button
            type="submit"
            className="site-search-submit"
            aria-label="Suchen und erstes Ergebnis öffnen"
          >
            <SearchIcon className="site-search-icon" />
          </button>
        </div>

        {open && results.length > 0 && (
          <ul
            id={listId}
            className="site-search-results"
            role="listbox"
            aria-label="Vorschläge"
          >
            {results.map((item, index) => (
              <li key={item.id} role="presentation">
                <button
                  type="button"
                  id={`${listId}-opt-${index}`}
                  role="option"
                  aria-selected={index === activeIndex}
                  className={`site-search-option${index === activeIndex ? ' site-search-option-active' : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    navigateTo(item);
                  }}
                >
                  <span className="site-search-option-title">{item.title}</span>
                  <span className="site-search-option-hint">{item.hint}</span>
                  {item.external && (
                    <span className="site-search-external">Extern</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}

        {open && query.length > 0 && results.length === 0 && (
          <div className="site-search-empty" role="status">
            Keine Treffer für „{query}“. Bitte anderen Begriff versuchen oder die
            Themenbereiche unten nutzen.
          </div>
        )}
      </form>
      <p className="site-search-hint">
        Vorschläge zu Themen und Seiten dieses Portals – keine allgemeine Internetsuche.
      </p>
    </div>
  );
}
