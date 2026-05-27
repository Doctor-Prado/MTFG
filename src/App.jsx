import { useMemo, useState } from 'react';
import { Dumbbell, Flame, MapPin, Mountain, Phone, Target, UsersRound } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { content, links, media } from './data/content.js';

import { SectionTitle } from './components/SectionTitle.jsx';
import { Hero } from './components/Hero.jsx';
import { About } from './components/About.jsx';
import { Header } from './components/Header.jsx';
import { Programs } from './components/Programs.jsx';
import { Schedule } from './components/Schedule.jsx';
import { Coaches } from './components/Coaches.jsx';
import { ArmySupport } from './components/ArmySupport.jsx';
import { Contacts } from './components/Contacts.jsx';
import { Footer } from './components/Footer.jsx';

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
