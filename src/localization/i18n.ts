import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import localeEn from './locales/en/translation.json';
import localeUk from './locales/uk/translation.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: localeEn,
      },
      uk: {
        translation: localeUk,
      },
    },

    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
