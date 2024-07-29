import { authModuleRoutes } from '@/modules/auth/routes';

export default defineNuxtRouteMiddleware((to, _from) => {
  const { isLoggedIn } = useAuthStore();

  if (!isLoggedIn && !to.path.includes(authModuleRoutes.login)) {
    return navigateTo(authModuleRoutes.login);
  }
});
