'use client';

import useTranslation from '@/hooks/useTranslation';
import { utils } from '@/theme/constant';
import { Button } from 'antd';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <h1 style={{ borderBottom: utils.border }}>{t('home.homePage')}</h1>
      <Button type="primary">Click</Button>
    </>
  );
}
