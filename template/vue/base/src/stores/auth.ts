import { defineStore } from 'pinia';

export const STORAGE_KEY = {
  token: 'token',
};

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem(STORAGE_KEY.token) as undefined | string,
    isLoggedIn: false,
  }),
  actions: {
    setToken(v: string) {
      this.token = v;
      this.isLoggedIn = true;
      localStorage.setItem(STORAGE_KEY.token, v);
    },
    clearToken() {
      this.token = undefined;
      this.isLoggedIn = false;
      localStorage.removeItem(STORAGE_KEY.token);
    },
    setIsLoggedIn(v = true) {
      this.isLoggedIn = v;
    },
  },
});
