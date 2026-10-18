import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import es from './locales/es/translation.json';
import de from './locales/de/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    de: { translation: de }
  },
  lng: localStorage.getItem('lang') || 'de',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false
  }
});

// Mantener <html lang> en sincronía con el idioma activo (lectores de pantalla, traducción automática, SEO)
const syncHtmlLang = (lng) => {
  document.documentElement.lang = lng;
};
syncHtmlLang(i18n.language);
i18n.on('languageChanged', syncHtmlLang);

export default i18n;
