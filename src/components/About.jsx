import { SectionTitle } from './SectionTitle.jsx';

export function About({ t }) {
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