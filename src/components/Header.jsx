import { useState } from 'react';
import { links } from '../data/content.js';

export function Header({ lang, setLang, t }) {
  const [open, setOpen] = useState(false);
  const ids = ['about', 'programs', 'schedule', 'coaches', 'contacts'];

  return (
    <header className="header">
      <a className="logo" href="#top" aria-label="MUAY THAI FAMILY GYM home">
        <span>MTFG</span>
        <small>Kyiv</small>
      </a>

      <button className="burger" type="button" onClick={() => setOpen(!open)} aria-label="Open menu" aria-expanded={open}>
        <span />
        <span />
        <span />
      </button>

      <nav className={open ? 'nav nav--open' : 'nav'} aria-label="Main navigation">
        {t.nav.map((item, index) => (
          <a key={item} href={`#${ids[index]}`} onClick={() => setOpen(false)}>
            {item}
          </a>
        ))}
      </nav>

      <div className="header__actions">
        <button className="lang" type="button" onClick={() => setLang(lang === 'uk' ? 'en' : 'uk')}>
          {lang === 'uk' ? 'EN' : 'UA'}
        </button>

        <a className="button button--small" href={links.instagram} target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
    </header>
  );
}