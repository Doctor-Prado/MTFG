import { links, media } from '../data/content.js';

export function Hero({ t }) {
  return (
    <section className="hero" id="top" style={{ '--hero-bg': `url(${media.gymBg})` }}>
      <div className="hero__overlay" />
      <div className="hero__content container">
        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1>{t.hero.title}</h1>
        <p className="hero__text">{t.hero.text}</p>
        <div className="hero__actions">
          <a className="button" href={links.instagram} target="_blank" rel="noreferrer">
            {t.hero.primary}
          </a>
          <a className="button button--ghost" href={links.phone}>
            {t.hero.secondary}
          </a>
        </div>
        <div className="hero__note">{t.hero.note}</div>
      </div>
    </section>
  );
}