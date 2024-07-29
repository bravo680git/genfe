import { type VOptions } from 'vuetify-nuxt-module';
import { colors } from './constant';

type ThemeConfig = NonNullable<
  NonNullable<Exclude<NonNullable<VOptions>['theme'], false>>['themes']
>[string];

export const themeConfig: ThemeConfig = {
  dark: false,
  colors: {
    primary: colors.primary,
  },
};
