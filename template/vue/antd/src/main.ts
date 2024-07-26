import './assets/style/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import App from './App.vue';
import router from './router';
import { i18nConfig } from './config/i18n';

const app = createApp(App);
const i18n = createI18n(i18nConfig);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(Antd);

app.mount('#app');
