import { FaInstagram } from 'react-icons/fa6';
import { links, media } from '../data/content.js';

export function ArmySupport({ t }) {
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