import scheduleImage from '../assets/images/schedule.webp';
import gymBg from '../assets/images/gym-bg.webp';
import coachMykhailo from '../assets/images/coach-mykhailo.webp';
import coachYevhen from '../assets/images/coach-yevhen.webp';
import coachRegina from '../assets/images/coach-regina.webp';
import zsuBg from '../assets/images/zsu.webp';
import programMuayThai from '../assets/images/muai_thai.webp';
import programKids from '../assets/images/kids.webp';
import programAdults from '../assets/images/adults.webp';
import programPersonal from '../assets/images/individually.webp';
import programCamp from '../assets/images/camp.webp';

export const links = {
  phone: 'tel:+380959150094',
  phoneText: '095-915-00-94',
  instagram: 'https://www.instagram.com/muaythaifamilygym/',
  facebook: 'https://www.facebook.com/p/MUAY-THAI-Family-GYM-100047844412109/',
  maps: 'https://www.google.com/maps/place/MUAY+THAI+FAMILY+GYM/@50.4428783,30.5751665,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4cf95daefea85:0x30da7ac1e746d651!8m2!3d50.4428783!4d30.5751665!16s%2Fg%2F11ddwwsyyz',
};

export const media = {
  scheduleImage,
  gymBg,
  zsuBg,
  programs: {
    muayThai: programMuayThai,
    kids: programKids,
    adults: programAdults,
    personal: programPersonal,
    camp: programCamp,
  },
};

export const content = {
  uk: {
    nav: ['Про клуб', 'Напрямки', 'Розклад', 'Тренери', 'Контакти'],
    hero: {
      eyebrow: 'Тайський бокс у Києві',
      title: 'MUAY THAI FAMILY GYM',
      text: 'Тренування для дітей, дорослих, новачків і спортсменів. Сімейна атмосфера, сильна дисципліна та реальний прогрес з першого заняття.',
      primary: 'Записатись безкоштовно',
      secondary: 'Подзвонити',
      note: 'Пробне тренування — безкоштовне',
    },
    about: {
      title: 'Для кого наші тренування?',
      text: 'Для новачків, які ніколи не били по мішку. Для тих, хто хоче схуднути, підтягнути тіло й отримати потужне кардіо. Для чоловіків і жінок, дітей та підлітків, а також спортсменів, які хочуть рости технічно, спарингувати та виходити на новий рівень.',
      cards: [
        'Пояснюємо з нуля і не кидаємо “виживати” на першому занятті.',
        'Поєднуємо атмосферу сім’ї з серйозним підходом до тренувань.',
        'Розвиваємо техніку, витривалість, реакцію, дисципліну й характер.',
      ],
    },
    programs: {
      eyebrow: 'Тренуйся під свою ціль',
      title: 'Напрямки',
      text: 'Від першого удару по мішку до серйозної спортивної підготовки — обери формат, який підходить саме тобі.',
      items: [
        { title: 'Муай Тай', text: 'Удари, клінч, коліна, лікті.', image: media.programs.muayThai, icon: 'BadgeIcon', featured: true, badge: 'Популярне' },
        { title: 'Дитячі', text: 'Дисципліна, координація, впевненість.', image: media.programs.kids, icon: 'KidsIcon' },
        { title: 'Дорослі', text: 'Кардіо, техніка, витривалість.', image: media.programs.adults, icon: 'AdultsIcon' },
        { title: 'Індивідуальні', text: 'Тренер, фокус і швидший прогрес.', image: media.programs.personal, icon: 'TargetIcon' },
        { title: 'Camp', text: 'Глибше занурення у тайський бокс.', image: media.programs.camp, icon: 'CampIcon' },
      ],
    },
    schedule: {
      title: 'Розклад і вартість',
      text: 'Актуальний розклад і ціни зібрані в одному блоці. На телефоні зображення можна відкрити окремо.',
      priceTitle: 'Абонементи',
      prices: [
        ['Пн / Ср / Пт — вечір', '2500 грн / 350 грн'],
        ['Пн / Ср / Пт — ранок', '2500 грн / 350 грн'],
        ['Вт / Чт  — вечір, Сб — ранок', '2000 грн / 300 грн'],
        ['Безлімітний абонемент', '4000 грн'],
      ],
    },
    coaches: {
      title: 'Тренери',
      items: [
        {
          name: 'Череп Михайло',
          role: 'Тренер ранкової та вечірньої групи',
          img: coachMykhailo,
          details: 'Чемпіон України ICO Muay Thai 2024, ISKA K1 2024, ISKA Muay Thai/K1 2025, WBC 2025 та WBC Muay Thai 2026. Рефері та суддя WBC Muay Thai. 6+ років тренерського досвіду.',
        },
        {
          name: 'Євген Горобченко',
          role: 'Тренер вечірньої групи',
          img: coachYevhen,
          details: 'Професійний спортсмен, чемпіон Києва з тайського боксу. Рефері та суддя WBC Muay Thai. 4+ роки тренерського досвіду.',
        },
        {
          name: 'Регіна Фрост',
          role: 'Head Coach',
          img: coachRegina,
          details: 'Професійна спортсменка 2016–2020, чемпіонка України IFMA/UKR 2014, чемпіонка Європи ICO/Italy 2017. Президент WBC Muay Thai в Києві. 10+ років тренерського досвіду.',
        },
      ],
    },
    army: {
      badge: 'Для військовослужбовців ЗСУ',
      eyebrow: 'Підтримка тих, хто захищає',
      title: 'Тренування за наш рахунок',
      subtitle: 'Muay Thai Family Gym дякує тим, хто захищає Україну.',
      text: 'Для військових тренування безкоштовні. Напишіть нам в Instagram — підкажемо групу, час і формат занять.',
      action: 'Написати в Instagram',
      stat: '0 грн',
      statText: 'для військовослужбовців',
    },
    contacts: {
      title: 'Готовий до першого тренування?',
      text: 'Безкоштовне пробне заняття для новачків. Напишіть в Instagram або подзвоніть — допоможемо обрати групу.',
      primary: 'Записатись',
      secondary: 'Написати в Instagram',
      phone: 'Телефон',
      instagram: 'Instagram',
      facebook: 'Facebook',
      maps: 'Google Maps',
    },
    footer: {
      line: 'Kyiv • Muay Thai • Family Gym • Discipline',
    },
  },
  en: {
    nav: ['About', 'Programs', 'Schedule', 'Coaches', 'Contacts'],
    hero: {
      eyebrow: 'Muay Thai in Kyiv',
      title: 'MUAY THAI FAMILY GYM',
      text: 'Training for kids, adults, beginners and athletes. A family atmosphere, strong discipline and real progress from the first session.',
      primary: 'Book a free trial',
      secondary: 'Call us',
      note: 'Free trial training session',
    },
    about: {
      title: 'Who are our classes for?',
      text: 'For complete beginners, people who want to lose weight and get strong cardio, men and women looking for discipline and confidence, kids and teens, and athletes who want to improve their technique, spar and reach the next level.',
      cards: [
        'We explain everything from zero and support you from day one.',
        'We combine a family atmosphere with a serious training approach.',
        'We build technique, endurance, reaction, discipline and character.',
      ],
    },
    programs: {
      eyebrow: 'Train for your goal',
      title: 'Programs',
      text: 'From your first bag work to serious athletic preparation — choose the format that fits you.',
      items: [
        { title: 'Muay Thai', text: 'Strikes, clinch, knees and elbows.', image: media.programs.muayThai, icon: 'BadgeIcon', featured: true, badge: 'Popular' },
        { title: 'Kids', text: 'Discipline, coordination and confidence.', image: media.programs.kids, icon: 'KidsIcon' },
        { title: 'Adults', text: 'Cardio, technique and endurance.', image: media.programs.adults, icon: 'AdultsIcon' },
        { title: 'Personal', text: 'Coach focus and faster progress.', image: media.programs.personal, icon: 'TargetIcon' },
        { title: 'Camp', text: 'A deeper Muay Thai experience.', image: media.programs.camp, icon: 'CampIcon' },
      ],
    },
    schedule: {
      title: 'Schedule and pricing',
      text: 'Current schedule and prices are collected in one section. On small screens the image remains easy to view.',
      priceTitle: 'Memberships',
      prices: [
        ['Mon / Wed / Fri — evening', '2500 UAH / 350 UAH'],
        ['Mon / Wed / Fri — morning', '2500 UAH / 350 UAH'],
        ['Tue / Thu — evening, Sat — morning', '2000 UAH / 300 UAH'],
        ['Unlimited membership', '4000 UAH'],
      ],
    },
    coaches: {
      title: 'Coaches',
      items: [
        {
          name: 'Mykhailo Cherep',
          role: 'Morning and evening group coach',
          img: coachMykhailo,
          details: 'Ukrainian champion ICO Muay Thai 2024, ISKA K1 2024, ISKA Muay Thai/K1 2025, WBC 2025 and WBC Muay Thai 2026. WBC Muay Thai referee and judge. 6+ years of coaching experience.',
        },
        {
          name: 'Yevhen Horobchenko',
          role: 'Evening group coach',
          img: coachYevhen,
          details: 'Professional athlete, Kyiv Muay Thai champion. WBC Muay Thai referee and judge. 4+ years of coaching experience.',
        },
        {
          name: 'Regina Frost',
          role: 'Head Coach',
          img: coachRegina,
          details: 'Professional athlete 2016–2020, Ukrainian champion IFMA/UKR 2014, European champion ICO/Italy 2017. President of WBC Muay Thai in Kyiv. 10+ years of coaching experience.',
        },
      ],
    },
    army: {
      badge: 'For AFU service members',
      eyebrow: 'Support for defenders',
      title: 'Training is on us',
      subtitle: 'Muay Thai Family Gym thanks everyone defending Ukraine.',
      text: 'Training is free for military service members. Message us on Instagram — we will help with the group, time and format.',
      action: 'Message us on Instagram',
      stat: '0 UAH',
      statText: 'for service members',
    },
    contacts: {
      title: 'Ready for your first training?',
      text: 'Free trial session for beginners. Message us on Instagram or call — we will help you choose the right group.',
      primary: 'Book now',
      secondary: 'Message on Instagram',
      phone: 'Phone',
      instagram: 'Instagram',
      facebook: 'Facebook',
      maps: 'Google Maps',
    },
    footer: {
      line: 'Kyiv • Muay Thai • Family Gym • Discipline',
    },
  },
};
