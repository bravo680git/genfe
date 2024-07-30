import { useAuthStore } from '@/stores/auth';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { path } from './path';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { initRender, setInitRender, isLoggedIn } = useAuthStore();

  useEffect(() => {
    setInitRender(false);
  }, [setInitRender]);

  if (initRender) return null;

  return isLoggedIn ? children : <Navigate to={path.login} />;
}

export default ProtectedRoute;
