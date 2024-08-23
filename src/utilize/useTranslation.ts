import {useSelector} from 'react-redux';
import {RootState} from '@src/store/store';
import en from '@src/assets/locales/en.json';
import zh from '@src/assets/locales/zh.json';

type TranslationKeys = 'en' | 'zh';

const translations: Record<TranslationKeys, Record<string, string>> = {
  en,
  zh,
};

export const useTranslation = () => {
  const language = useSelector(
    (state: RootState) => state.language.language as TranslationKeys,
  );

  return {
    t: (key: string) => translations[language][key] || key,
  };
};
