import { AppLocale } from '@/language';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CommonState = {
  lang?: AppLocale;
};

type CommonAction = {
  setLang: (lang: AppLocale) => void;
};

export const useCommonStore = create(
  persist<CommonState & CommonAction>(
    (set, get) => ({
      lang: get()?.lang,
      setLang: (lang) => {
        set({ lang });
      },
    }),
    { name: 'common-state' },
  ),
);
