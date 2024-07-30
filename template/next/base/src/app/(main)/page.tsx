'use client';

import useTranslation from '@/hooks/useTranslation';

export default function Home() {
  const { t } = useTranslation();

  return <h1>{t('home.homePage')}</h1>;
}
