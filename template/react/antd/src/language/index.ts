import en from './en.json';
import vi from './vi.json';
import ja from './ja.json';

export const APP_LOCALE = {
  en: 'en',
  vi: 'vi',
  ja: 'ja',
} as const;

export type AppLocale = (typeof APP_LOCALE)[keyof typeof APP_LOCALE];

type MsgDistType = {
  [key in AppLocale]: {
    translation: {
      [x: string]: string | MsgDistType[key]['translation'];
    };
  };
};

export const msgDist: MsgDistType = {
  en: { translation: en },
  vi: { translation: vi },
  ja: { translation: ja },
};
