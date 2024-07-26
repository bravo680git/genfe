'use client';

import { useAuthStore } from '@/stores';
import React, { useEffect } from 'react';
import { path, publicRoutes } from './path';
import { usePathname, useRouter } from 'next/navigation';

function AuthProvider({ children }: { children: React.ReactNode }) {
  const { push } = useRouter();
  const { isLoggedIn, initRender, setInitRender, setIsLoggedIn } = useAuthStore();
  const pathname = usePathname();

  useEffect(() => {
    new Promise<boolean>((resolve) => {
      resolve(true);
    })
      // change logic check logged in above
      .then((res) => {
        setIsLoggedIn(res);
      })
      .catch(() => {
        setIsLoggedIn(false);
      })
      .finally(() => {
        setInitRender(false);
      });
  }, [setInitRender, setIsLoggedIn]);

  if (initRender) return <>{null}</>;

  if (publicRoutes.includes(pathname)) return <>{children}</>;

  return <>{isLoggedIn ? children : push(path.login)}</>;
}

export default AuthProvider;
