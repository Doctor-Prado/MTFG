import { media } from '../data/content.js';
import { SectionTitle } from './SectionTitle.jsx';

export function Schedule({ t }) {
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

        <a
          className="schedule-image"
          href={media.scheduleImage}
          target="_blank"
          rel="noreferrer"
          aria-label="Open schedule image"
        >
          <img src={media.scheduleImage} alt={t.schedule.title} loading="lazy" />
        </a>
      </div>
    </section>
  );
}