import { type ConfigProviderProps } from 'ant-design-vue';
import { colors } from './constant';

export const themeConfig: ConfigProviderProps['theme'] = {
  token: {
    colorPrimary: colors.primary,
  },
};
