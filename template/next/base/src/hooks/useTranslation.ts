'use client';

import { APP_LOCALE, translations, TranslationsType, AppLocale } from '@/language';
import { useCommonStore } from '@/stores';
import { useCallback } from 'react';

const useTranslation = (dictionary = translations) => {
  const lang = useCommonStore((state) => state.lang) ?? APP_LOCALE.en;

  const t = useCallback<(key: string) => string>(
    (key = '') => {
      const keys = key.trim().split('.');
      let result: TranslationsType[AppLocale][string] = dictionary[lang];

      for (const keyPart of keys) {
        if (result && typeof result === 'object') {
          result = result[keyPart];
        } else {
          return key;
        }
      }

      return typeof result === 'string' ? result : key;
    },
    [lang, dictionary],
  );

  return {
    t,
    locale: lang,
  };
};

export default useTranslation;
