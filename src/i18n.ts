import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../public/locales/en.json';
import ar from '../public/locales/ar.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar }
    },
    lng: localStorage.getItem('lang') || (navigator.language.startsWith('ar') ? 'ar' : 'en'),
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;