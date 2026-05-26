import { useMemo, useState } from 'react';
import { Dumbbell, Flame, MapPin, Mountain, Phone, Target, UsersRound } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { content, links, media } from './data/content.js';

const SectionTitle = ({ eyebrow, title, text }) => (
  <div className="section-title">
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
);

function Header({ lang, setLang, t }) {
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

function Hero({ t }) {
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

function About({ t }) {
  return (
    <section className="section" id="about">
      <div className="container grid-two">
        <SectionTitle title={t.about.title} text={t.about.text} />
        <div className="feature-list">
          {t.about.cards.map((card, index) => (
            <article className="feature-card" key={card}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{card}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs({ t }) {
  const IconMap = {
    BadgeIcon: Dumbbell,
    KidsIcon: UsersRound,
    AdultsIcon: Flame,
    TargetIcon: Target,
    CampIcon: Mountain,
  };

  return (
    <section className="section programs-section" id="programs">
      <div className="programs-backtext" aria-hidden="true">TRAINING</div>
      <div className="container programs-layout">
        <div className="programs-intro">
          <SectionTitle eyebrow={t.programs.eyebrow} title={t.programs.title} text={t.programs.text} />
          <div className="programs-intro__line" />
        </div>

        <div className="programs-grid">
          {t.programs.items.map((item) => {
            const Icon = IconMap[item.icon] ?? Dumbbell;

            return (
              <article className={item.featured ? 'program-card program-card--featured' : 'program-card'} key={item.title}>
                <img src={item.image} alt="" loading="lazy" aria-hidden="true" />
                <div className="program-card__shade" />
                <div className="program-card__top">
                  <span className="program-card__icon"><Icon size={22} strokeWidth={2.2} /></span>
                  {item.badge && <span className="program-card__badge">{item.badge}</span>}
                </div>
                <div className="program-card__body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Schedule({ t }) {
  return (
    <section className="section" id="schedule">
      <div className="container schedule-layout">
        <div>
          <SectionTitle title={t.schedule.title} text={t.schedule.text} />
          <div className="price-card">
            <h3>{t.schedule.priceTitle}</h3>
            {t.schedule.prices.map(([name, price]) => (
              <div className="price-row" key={name}>
                <span>{name}</span>
                <strong>{price}</strong>
              </div>
            ))}
          </div>
        </div>
        <a className="schedule-image" href={media.scheduleImage} target="_blank" rel="noreferrer" aria-label="Open schedule image">
          <img src={media.scheduleImage} alt={t.schedule.title} loading="lazy" />
        </a>
      </div>
    </section>
  );
}

function Coaches({ t }) {
  return (
    <section className="section section--muted" id="coaches">
      <div className="container">
        <SectionTitle title={t.coaches.title} />
        <div className="coaches">
          {t.coaches.items.map((coach) => (
            <article className="coach-card" key={coach.name}>
              <div className="coach-card__image">
                <img src={coach.img} alt={coach.name} loading="lazy" />
              </div>
              <div className="coach-card__body">
                <p>{coach.role}</p>
                <h3>{coach.name}</h3>
                <span>{coach.details}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArmySupport({ t }) {
  return (
    <section className="army" style={{ '--army-bg': `url(${media.zsuBg})` }}>
      <div className="container army__inner">
        <div className="army__content">
          <span className="army__badge">{t.army.badge}</span>
          <p className="eyebrow">{t.army.eyebrow}</p>
          <h2>{t.army.title}</h2>
          <strong>{t.army.subtitle}</strong>
          <p>{t.army.text}</p>
          <a className="button button--light" href={links.instagram} target="_blank" rel="noreferrer">
            <FaInstagram size={20} />
            {t.army.action}
          </a>
        </div>

        <div className="army__visual" aria-hidden="true">
          <div className="army__photo" />
          <div className="army__stat">
            <span>{t.army.stat}</span>
            <small>{t.army.statText}</small>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacts({ t }) {
  const contactItems = [
    { label: t.contacts.phone, value: links.phoneText, href: links.phone, icon: Phone },
    { label: t.contacts.instagram, value: '@muaythaifamilygym', href: links.instagram, icon: FaInstagram },
    { label: t.contacts.facebook, value: 'MUAY THAI Family GYM', href: links.facebook, icon: FaFacebookF },
    { label: t.contacts.maps, value: 'MUAY THAI FAMILY GYM', href: links.maps, icon: MapPin },
  ];

  return (
    <section className="section contacts" id="contacts" style={{ '--contacts-bg': `url(${media.gymBg})` }}>
      <div className="contacts__backtext" aria-hidden="true">MUAY THAI</div>
      <div className="container contacts__grid">
        <div className="contacts__intro">
          <SectionTitle title={t.contacts.title} text={t.contacts.text} />
          <div className="contacts__actions">
            <a className="button" href={links.instagram} target="_blank" rel="noreferrer">
              <FaInstagram size={20} />
              {t.contacts.primary}
            </a>
            <a className="button button--ghost" href={links.phone}>
              <Phone size={20} />
              {t.hero.secondary}
            </a>
          </div>
        </div>

        <div className="contact-card contact-card--grid">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                <i aria-hidden="true"><Icon size={22} strokeWidth={2.25} /></i>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <strong>MUAY THAI FAMILY GYM</strong>
        <span>{t.footer.line}</span>
        <small>© {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState('uk');
  const t = useMemo(() => content[lang], [lang]);

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Programs t={t} />
        <Schedule t={t} />
        <Coaches t={t} />
        <ArmySupport t={t} />
        <Contacts t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
