import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import { type NavigationGuardWithThis } from 'vue-router';
import { path } from './path';

export const routerMiddleware: NavigationGuardWithThis<undefined> = (to, from) => {
  const { isLoggedIn } = storeToRefs(useAuthStore());

  if (!isLoggedIn.value && to.path !== path.login) {
    return {
      path: path.login,
    };
  }

  if (isLoggedIn.value && from.path === path.login) {
    return {
      path: path.home,
    };
  }
};
