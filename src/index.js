import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';
import { Toaster } from 'react-hot-toast';
import { toastStyles } from 'ToasterOptions';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { I18nextProvider } from 'react-i18next';
import { initReactI18next } from 'react-i18next';

import './fonts/poppins-v20-latin-regular.woff2';
import './fonts/poppins-v20-latin-500.woff2';
import './fonts/poppins-v20-latin-600.woff2';

import global_en from './translations/en/global.json';
import global_cn from './translations/cn/global.json';
import global_de from './translations/de/global.json';
import global_es from './translations/es/global.json';
import global_fr from './translations/fr/global.json';
import global_gr from './translations/gr/global.json';
import global_he from './translations/he/global.json';
import global_ita from './translations/ita/global.json';
import global_jp from './translations/jp/global.json';
import global_pl from './translations/pl/global.json';
import global_ro from './translations/ro/global.json';
import global_ar from './translations/ar/global.json';
import global_ua from './translations/ua/global.json';
import { ThemeWrapper } from 'components/ThemeWrapper/ThemeWrapper';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    fallbackLng: 'en',
    resources: {
      en: {
        global: global_en,
      },
      cn: {
        global: global_cn,
      },
      de: {
        global: global_de,
      },
      es: {
        global: global_es,
      },
      fr: {
        global: global_fr,
      },
      gr: {
        global: global_gr,
      },
      he: {
        global: global_he,
      },
      ita: {
        global: global_ita,
      },
      jp: {
        global: global_jp,
      },
      pl: {
        global: global_pl,
      },
      ro: {
        global: global_ro,
      },
      ar: {
        global: global_ar,
      },
      ua: {
        global: global_ua,
      },
    },
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>     
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter basename="/task-pro-frontend">
            <ThemeWrapper>            
              <Toaster toastOptions={toastStyles} />
              <App />
            </ThemeWrapper>  
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </I18nextProvider>    
  </React.StrictMode>    
);

// some comment to run actions
