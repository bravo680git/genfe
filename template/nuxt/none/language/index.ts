import en from './en.json';
import vi from './vi.json';
import ja from './ja.json';

export const APP_LOCALE = {
  en: 'en',
  vi: 'vi',
  ja: 'ja',
} as const;

export type AppLocale = (typeof APP_LOCALE)[keyof typeof APP_LOCALE];

type messagesType = {
  [key in AppLocale]: {
    [x: string]: string | messagesType[key];
  };
};

export const messages: messagesType = {
  en,
  vi,
  ja,
};
