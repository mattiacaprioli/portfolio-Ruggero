import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/auth.json';
import frTranslation from './locales/fr/auth.json';
import itTranslation from './locales/it/auth.json';

const resources = {
  en: {
    translation: enTranslation
  },
  fr: {
    translation: frTranslation
  },
  it: {
    translation: itTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // lingua di default
    fallbackLng: 'en', // fallback in caso di mancata traduzione
    interpolation: {
      escapeValue: false // react già fa il sanitizing delle stringhe
    }
  });

export default i18n;
