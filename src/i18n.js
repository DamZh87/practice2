import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';

// Статические переводы для начальной загрузки (будет использоваться на сервере)
const resources = {
  ru: {
    translation: {
      navigation: {
        home: "Главная",
        our_works: "Наши работы",
        prices: "Цены",
        about_us: "О нас"
      }
    }
  },
  en: {
    translation: {
      navigation: {
        home: "Home",
        our_works: "Our works",
        prices: "Prices",
        about_us: "About us"
      }
    }
  },
  kk: {
    translation: {
      navigation: {
        home: "Басты бет",
        our_works: "Біздің жұмыстар",
        prices: "Бағалар",
        about_us: "Біз туралы"
      }
    }
  }
};

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init({
    resources, // Статические переводы
    supportedLngs: ['ru', 'en', 'kk'],
    fallbackLng: 'ru', // Язык по умолчанию
    debug: false,
    detection: {
      order: ['path', 'cookie', 'localStorage', 'sessionStorage', 'htmlTag'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json', // Динамическая загрузка
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
