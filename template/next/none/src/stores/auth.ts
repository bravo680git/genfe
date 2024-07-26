import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type AuthState = {
  token?: string;
  isLoggedIn: boolean;
  initRender: boolean;
};

type AuthAction = {
  setToken(token: string): void;
  setIsLoggedIn(isLoggedIn?: boolean): void;
  setInitRender(initRender: boolean): void;
};

export const useAuthStore = create(
  persist<AuthState & AuthAction>(
    (set, get) => ({
      token: get()?.token,
      isLoggedIn: false,
      initRender: true,
      setToken: (token) => set({ token }),
      setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn: isLoggedIn ?? true }),
      setInitRender: (initRender) => set({ initRender }),
    }),
    {
      name: 'auth-state',
      partialize: (state) => ({ token: state.token }) as typeof state,
    },
  ),
);
