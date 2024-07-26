import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
  token?: string;
  isLoggedIn: boolean;
  initRender: boolean;
};

type AuthAction = {
  setToken(token: string): void;
  clearToken(): void;
  setIsLoggedIn(isLoggedIn?: boolean): void;
  setInitRender(value: boolean): void;
};

export const useAuthStore = create(
  persist<AuthState & AuthAction>(
    (set, get) => ({
      token: get()?.token,
      isLoggedIn: false,
      initRender: true,

      setToken: (token: string) => set({ token, isLoggedIn: true }),
      clearToken: () => set({ token: undefined, isLoggedIn: false }),
      setIsLoggedIn: (isLoggedIn = true) => set({ isLoggedIn }),
      setInitRender: (value: boolean) => set({ initRender: value }),
    }),
    { name: 'auth-state', partialize: (state) => ({ token: state.token }) as typeof state },
  ),
);
