// src/utilize/i18n.ts
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {RootState, store} from '@/store/store';
import zh from '@/assets/locales/zh.json';
import en from '@/assets/locales/en.json';

i18n.use(initReactI18next).init(
  {
    resources: {
      en: {translation: en},
      zh: {translation: zh},
    },
    lng: 'zh',
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false,
    },
  },
  (err, t) => {
    if (err) {
      console.error('i18n initialization error:', err);
    }
  },
);

store.subscribe(() => {
  const state: RootState = store.getState();
  const {language} = state.language;

  if (i18n.language !== language) {
    i18n.changeLanguage(language);
  }
});

export default i18n;
