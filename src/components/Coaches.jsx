import { SectionTitle } from './SectionTitle.jsx';

export function Coaches({ t }) {
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