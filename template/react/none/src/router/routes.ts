import React from 'react';
import { path } from './path';
import * as Pages from '@/pages';
import Layout from '@/components/layout';

type AppRoute = {
  path: string;
  page: React.FC;
  layout?: React.FC<{ children: React.ReactNode }>;
  public?: boolean;
};

export const appRoutes: AppRoute[] = [
  {
    path: path.home,
    page: Pages.Home,
    layout: Layout,
  },
  {
    path: path.login,
    page: Pages.Login,
    public: true,
  },
];
