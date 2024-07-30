export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: undefined as undefined | string,
    isLoggedIn: false,
  }),
  actions: {
    login(token: string) {
      this.token = token;
      this.isLoggedIn = true;
    },
    logout() {
      this.token = undefined;
      this.isLoggedIn = false;
    },
  },
  persist: {
    key: 'auth-state',
    storage: persistedState.localStorage,
    paths: ['token'],
  },
});
