import { create } from 'zustand';

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

export const STORAGE_KEY = {
  token: 'token',
};

export const useAuthStore = create<AuthState & AuthAction>((set) => ({
  token: localStorage.getItem(STORAGE_KEY.token) ?? undefined,
  isLoggedIn: false,
  initRender: true,

  setToken: (token: string) => set({ token, isLoggedIn: true }),
  clearToken: () => set({ token: undefined, isLoggedIn: false }),
  setIsLoggedIn: (isLoggedIn = true) => set({ isLoggedIn }),
  setInitRender: (value: boolean) => set({ initRender: value }),
}));
