import { path } from '@/router';

export default defineNuxtRouteMiddleware((to, _from) => {
  const { isLoggedIn } = useAuthStore();

  if (!isLoggedIn && !to.path.includes(path.login)) {
    return navigateTo(path.login);
  }
});
