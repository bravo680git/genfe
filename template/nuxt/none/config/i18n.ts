import { APP_LOCALE, messages } from '@/language';

export default defineI18nConfig(() => ({
  legacy: false,
  messages,
  fallbackLocale: APP_LOCALE.vi,
}));
