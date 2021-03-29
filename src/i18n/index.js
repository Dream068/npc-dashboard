import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';

const translationsMap = {
  en,
};

Object.keys(translationsMap).forEach((key) => {
  translationsMap[key] = { translation: translationsMap[key] };
});

const language = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: translationsMap,
    lng: language,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
