import { defineNuxtModule } from 'nuxt/kit';
import { resolve } from 'path';
import { authModuleRoutes } from './routes';

export default defineNuxtModule({
  setup(resolvedOptions, nuxt) {
    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        path: authModuleRoutes.login,
        file: resolve(__dirname, './pages/login.vue'),
      });
    });
  },
});
