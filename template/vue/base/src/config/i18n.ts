import { msgDist, APP_LOCALE } from '@/language';
import { type I18nOptions } from 'vue-i18n';

export const i18nConfig: I18nOptions = {
  legacy: false,
  locale: APP_LOCALE.vi,
  fallbackLocale: APP_LOCALE.vi,
  messages: msgDist,
};
