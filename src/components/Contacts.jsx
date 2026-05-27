import { MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';

import { links, media } from '../data/content.js';
import { SectionTitle } from './SectionTitle.jsx';

export function Contacts({ t }) {
  const contactItems = [
    {
      label: t.contacts.phone,
      value: links.phoneText,
      href: links.phone,
      icon: Phone,
    },
    {
      label: t.contacts.instagram,
      value: '@muaythaifamilygym',
      href: links.instagram,
      icon: FaInstagram,
    },
    {
      label: t.contacts.facebook,
      value: 'MUAY THAI Family GYM',
      href: links.facebook,
      icon: FaFacebookF,
    },
    {
      label: t.contacts.maps,
      value: 'MUAY THAI FAMILY GYM',
      href: links.maps,
      icon: MapPin,
    },
  ];

  return (
    <section
      className="section contacts"
      id="contacts"
      style={{ '--contacts-bg': `url(${media.gymBg})` }}
    >
      <div className="contacts__backtext" aria-hidden="true">
        MUAY THAI
      </div>

      <div className="container contacts__grid">
        <div className="contacts__intro">
          <SectionTitle
            title={t.contacts.title}
            text={t.contacts.text}
          />

          <div className="contacts__actions">
            <a
              className="button"
              href={links.instagram}
              target="_blank"
              rel="noreferrer"
            >
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
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <i aria-hidden="true">
                  <Icon size={22} strokeWidth={2.25} />
                </i>

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