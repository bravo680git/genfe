import './assets/style/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import App from './App.vue';
import router from './router';
import { i18nConfig } from './config/i18n';
import { themeConfig } from './theme/config';

const app = createApp(App);
const i18n = createI18n(i18nConfig);
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      custom: themeConfig,
    },
  },
});

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(vuetify);

app.mount('#app');
