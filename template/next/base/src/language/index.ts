import en from './en.json';
import vi from './vi.json';
import ja from './ja.json';

export const APP_LOCALE = {
  en: 'en',
  vi: 'vi',
  ja: 'ja',
} as const;

export type AppLocale = (typeof APP_LOCALE)[keyof typeof APP_LOCALE];

export type TranslationsType = {
  [key in AppLocale]: {
    [x: string]: string | TranslationsType[key];
  };
};

export const translations: TranslationsType = {
  en,
  vi,
  ja,
};
