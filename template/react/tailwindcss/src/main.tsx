import i18n from 'i18next';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { initReactI18next } from 'react-i18next';
import App from './App.tsx';
import './assets/style/index.css';
import { i18nConfig } from './config/i18n.ts';

i18n.use(initReactI18next).init(i18nConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
