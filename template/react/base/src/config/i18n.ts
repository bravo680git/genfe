import { APP_LOCALE, msgDist } from '@/language';
import { type InitOptions } from 'i18next';

export const i18nConfig: InitOptions = {
  fallbackLng: APP_LOCALE.vi,
  resources: msgDist,
};
