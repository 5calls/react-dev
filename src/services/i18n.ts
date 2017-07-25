import * as i18n from 'i18next';
import * as XHR from 'i18next-xhr-backend';
// import Cache from 'i18next-localstorage-cache';
import * as LanguageDetector from 'i18next-browser-languagedetector';

const instance = i18n
    .use(XHR)
    // .use(Cache)
    .use(LanguageDetector)
    .init({
        backend: {
            loadPath: '/locales/{{lng}}.json'
        },
        fallbackLng: 'en',

        react: {
            wait: true, // globally set to wait for loaded translations in translate hoc
            // exposeNamespace: true // exposes namespace on data-i18next-options to be used in eg. locize-editor
        },

        // have a common namespace used around the full app
        ns: [''],
        defaultNS: '',

        debug: true,

        // cache: {
        //   enabled: true
        // },

        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ','
        }
    });

export default instance;
