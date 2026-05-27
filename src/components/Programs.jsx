import { Dumbbell, Flame, Mountain, Target, UsersRound } from 'lucide-react';
import { SectionTitle } from './SectionTitle.jsx';

export function Programs({ t }) {
  const IconMap = {
    BadgeIcon: Dumbbell,
    KidsIcon: UsersRound,
    AdultsIcon: Flame,
    TargetIcon: Target,
    CampIcon: Mountain,
  };

  return (
    <section className="section programs-section" id="programs">
      <div className="programs-backtext" aria-hidden="true">
        TRAINING
      </div>

      <div className="container programs-layout">
        <div className="programs-intro">
          <SectionTitle
            eyebrow={t.programs.eyebrow}
            title={t.programs.title}
            text={t.programs.text}
          />
          <div className="programs-intro__line" />
        </div>

        <div className="programs-grid">
          {t.programs.items.map((item) => {
            const Icon = IconMap[item.icon] ?? Dumbbell;

            return (
              <article
                className={
                  item.featured
                    ? 'program-card program-card--featured'
                    : 'program-card'
                }
                key={item.title}
              >
                <img src={item.image} alt="" loading="lazy" aria-hidden="true" />
                <div className="program-card__shade" />

                <div className="program-card__top">
                  <span className="program-card__icon">
                    <Icon size={22} strokeWidth={2.2} />
                  </span>
                  {item.badge && (
                    <span className="program-card__badge">{item.badge}</span>
                  )}
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